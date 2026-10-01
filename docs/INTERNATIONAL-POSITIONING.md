# International positioning (source of truth for copy)

Knowledge Foundry is an **international** company. The holding company is a Portuguese LDA (name and NIPC pending; read from `site.legal` in `src/lib/site.ts`, never hardcode). It is NOT an Australian company. Never write "Pty Ltd", "ABN", or imply an Australian head office.

## Primary markets (equal weight, list in this order)
Portugal and the EU · United States · Japan · Australia. (UAE is also served; keep existing UAE content, mention where natural.)

Australia is one market among several. Never the default, never "home".

## Data residency (in region by default for each customer)
Hosting: Amazon Web Services and Railway, on demand. Do not name specific region codes. No UAE hosting.
| Market | Default hosting |
|---|---|
| Portugal (serves EU) | Portugal region |
| United States | US region |
| Japan | Japan region |
| Australia | Australia region |
Rule: customer data is stored in the customer's chosen region; no routine replication outside that region.

## Frameworks by market (use as balanced example sets)
- **Portugal / EU:** GDPR, Portuguese Law 58/2019, CNPD, NIS2, EU AI Act, DORA (financial services), Portuguese Labour Code training duty, ACT (labour authority).
- **United States:** state privacy laws (CCPA/CPRA), HIPAA, FERPA, NIST CSF / SP 800-53, FedRAMP awareness, OSHA, FINRA, FinCEN / Bank Secrecy Act AML.
- **Japan:** APPI and the Personal Information Protection Commission (PPC), FSA guidelines, ISMAP (government cloud), Industrial Safety and Health Act, Act on Prevention of Transfer of Criminal Proceeds (AML).
- **Australia:** Privacy Act 1988 and APPs (OAIC), APRA CPS 234, ASIC RG 146, AUSTRAC, WHS, NSQHS, TGA, AQF / TEQSA, PSPF / ISM / IRAP.
- **Global:** ISO/IEC 27001, SOC 2, ISO 42001, WCAG 2.1 AA.

## Copy rules
- Human, formal voice. No em or en dashes in visible copy. No new fabricated figures, clients, logos or testimonials.
- When an example cites one jurisdiction, prefer a pair or set across markets, or rotate which market leads. Don't strip accurate AU facts; demote them from default to one example.
- Internal links to existing `/regulations/<slug>` pages must point at slugs that exist (`ls src/app/regulations` and the regulations data).
- Legal entity, governing law, and company number are placeholders until counsel confirms.
