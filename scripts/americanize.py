#!/usr/bin/env python3
"""Convert learn pages' visible copy from British/Australian to American spelling.
Protects official names, verbatim quotations, link URLs, and the sources list.
Usage: python3 scripts/americanize.py [--dry] files..."""
import json, re, sys

PROTECT = [
    "Registered Training Organisations", "Registered Training Organisation",
    "Australian Education Research Organisation", "Analysis Centre", "Artificial Intelligence Centre",
    "Cyber Security Centre", "Financial Centre", "Behaviour Support", "International Labour Organization",
    "Department of Defence", "Defence Force", "Ministry of Health, Labour and Welfare", "Australian financial services licence", "Australian Financial Services Licence",
    "Organisation for Economic Co-operation and Development", "World Health Organisation",
]
STEMS = {  # british stem -> american stem (applied to word starts)
    "organis": "organiz", "behaviour": "behavior", "colour": "color", "analys": "analyz", "prioritis": "prioritiz",
    "recognis": "recogniz", "standardis": "standardiz", "optimis": "optimiz", "modernis": "moderniz", "emphasis": "emphasiz",
    "summaris": "summariz", "minimis": "minimiz", "maximis": "maximiz", "customis": "customiz", "utilis": "utiliz",
    "specialis": "specializ", "authoris": "authoriz", "categoris": "categoriz", "finalis": "finaliz", "centralis": "centraliz",
    "digitis": "digitiz", "familiaris": "familiariz", "harmonis": "harmoniz", "realis": "realiz", "criticis": "criticiz",
    "formalis": "formaliz", "operationalis": "operationaliz", "contextualis": "contextualiz", "visualis": "visualiz",
    "synchronis": "synchroniz", "memoris": "memoriz", "penalis": "penaliz", "capitalis": "capitaliz", "internationalis": "internationaliz",
    "localis": "localiz", "normalis": "normaliz", "characteris": "characteriz", "favour": "favor", "honour": "honor",
    "endeavour": "endeavor", "labour": "labor", "rumour": "rumor", "neighbour": "neighbor", "humour": "humor",
    "sceptic": "skeptic", "apologis": "apologiz", "legitimis": "legitimiz", "jeopardis": "jeopardiz", "incentivis": "incentiviz",
    "operationalis": "operationaliz", "systematis": "systematiz", "stabilis": "stabiliz", "mobilis": "mobiliz", "hospitalis": "hospitaliz",
}
# "emphasis" noun must stay: only convert emphasise/emphasised/emphasises/emphasising
WORDS = {
    "centre": "center", "centres": "centers", "centred": "centered", "licence": "license", "licences": "licenses",
    "defence": "defense", "offence": "offense", "offences": "offenses", "catalogue": "catalog", "catalogues": "catalogs",
    "enrolment": "enrollment", "enrolments": "enrollments", "enrol": "enroll", "enrols": "enrolls", "programme": "program",
    "programmes": "programs", "practise": "practice", "practised": "practiced", "practises": "practices", "practising": "practicing",
    "judgement": "judgment", "judgements": "judgments", "fulfil": "fulfill", "fulfils": "fulfills", "fulfilment": "fulfillment",
    "travelled": "traveled", "travelling": "traveling", "modelled": "modeled", "modelling": "modeling", "labelled": "labeled",
    "labelling": "labeling", "cancelled": "canceled", "cancelling": "canceling", "counselling": "counseling", "levelled": "leveled",
    "signalled": "signaled", "totalled": "totaled", "fuelled": "fueled", "ageing": "aging", "grey": "gray", "whilst": "while",
    "amongst": "among", "learnt": "learned", "calibre": "caliber", "metre": "meter", "metres": "meters", "litre": "liter",
    "cheque": "check", "tyre": "tire", "tyres": "tires", "aluminium": "aluminum", "manoeuvre": "maneuver", "paediatric": "pediatric",
    "anaesthesia": "anesthesia", "haemoglobin": "hemoglobin", "oestrogen": "estrogen", "orthopaedic": "orthopedic", "enquiry": "inquiry",
    "enquiries": "inquiries", "artefact": "artifact", "artefacts": "artifacts", "towards": "toward", "afterwards": "afterward",
    "emphasise": "emphasize", "emphasised": "emphasized", "emphasises": "emphasizes", "emphasising": "emphasizing",
    "analyse": "analyze", "analysed": "analyzed", "analyses_v": None,
}
def match_case(src, rep):
    if src.isupper(): return rep.upper()
    if src[0].isupper(): return rep[0].upper() + rep[1:]
    return rep

def conv_plain(t):
    for i, p in enumerate(PROTECT):
        t = re.sub(re.escape(p), f"\x00{i}\x00", t, flags=re.I)
    def w(m):
        word = m.group(0); lw = word.lower()
        if lw in WORDS and WORDS[lw]: return match_case(word, WORDS[lw])
        if lw.startswith("emphasis") and lw in ("emphasis",): return word
        if lw.startswith("analys"):  # analysis/analyses (nouns) stay; analyse/analysed/analysing convert
            return match_case(word, "analyz" + lw[6:]) if lw in ("analyse", "analysed", "analysing", "analyser", "analysers") else word
        for b, a in STEMS.items():
            if lw.startswith(b) and b not in ("emphasis", "analys"):
                return match_case(word, a + lw[len(b):])
        return word
    t = re.sub(r"[A-Za-z]+", w, t)
    # Dates: "1 July 2026" -> "July 1, 2026"; "1 July" -> "July 1"
    M = "January|February|March|April|May|June|July|August|September|October|November|December"
    t = re.sub(rf"\b(\d{{1,2}}) ({M}) (\d{{4}})\b", r"\2 \1, \3", t)
    t = re.sub(rf"\b(\d{{1,2}}) ({M})\b(?! \d)", r"\2 \1", t)
    return re.sub(r"\x00(\d+)\x00", lambda m: PROTECT[int(m.group(1))], t)

SEG = re.compile(r'(\[[^\]]*\]\([^)]*\)|"[^"]*"|“[^”]*”)')
def conv(t):
    out = []
    for part in SEG.split(t):
        if not part: continue
        if part.startswith("[") and "](" in part:
            label, url = part[1:].split("](", 1)
            out.append("[" + conv_plain(label) + "](" + url)
        elif part.startswith('"') or part.startswith("“"):
            out.append(part)  # verbatim quotation
        else:
            out.append(conv_plain(part))
    return "".join(out)

def walk(x):
    if isinstance(x, str): return conv(x)
    if isinstance(x, list): return [walk(i) for i in x]
    if isinstance(x, dict): return {k: (v if k in ("type", "id", "href", "url") else walk(v)) for k, v in x.items()}
    return x

dry = "--dry" in sys.argv
changed = 0
for f in [a for a in sys.argv[1:] if not a.startswith("--")]:
    d = json.load(open(f))
    new = dict(d)
    for k in ("title", "seoTitle", "description", "shortAnswer", "keyTakeaways", "sections", "faqs", "term", "alsoKnownAs", "productLinks"):
        if k in d: new[k] = walk(d[k])
    if new != d:
        changed += 1
        if not dry: open(f, "w").write(json.dumps(new, ensure_ascii=False, indent=2) + "\n")
print(f"{changed} files {'would change' if dry else 'changed'}")
