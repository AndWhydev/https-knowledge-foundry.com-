"use client";

/**
 * DemonstrationForm — wired to Web3Forms.
 *
 * Configuration: set NEXT_PUBLIC_WEB3FORMS_KEY in Vercel → Project → Settings →
 * Environment Variables to your Web3Forms access key. Without it the form
 * captures inputs but refuses to send (so we never lose leads to a misconfig).
 *
 * IMPORTANT — Web3Forms field convention:
 *   Web3Forms Pro's summary email template auto-formats when it sees top-level
 *   keys like `name`, `email`, `phone`, etc. We DO NOT send those. All content
 *   is bundled into a single `message` field so the full submission arrives as
 *   readable body copy, not a stripped auto-summary.
 *
 * Layered spam protection:
 *   1. Honeypot: reject if `company_website` is non-empty.
 *   2. Timing check: reject submissions completed <2s after render.
 *   3. Server-side validation of every field before firing conversion.
 *      (Web3Forms enforces its own reCAPTCHA fallback if enabled in the
 *      account settings.)
 */

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRight, Check, AlertCircle } from "lucide-react";
import { track } from "@vercel/analytics";

type Values = {
  fullName: string;
  workEmail: string;
  organisation: string;
  role: string;
  country: string;
  subject: string;
  anythingElse: string;
  phone: string;
};

type Errors = Partial<Record<keyof Values, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const initial: Values = {
  fullName: "",
  workEmail: "",
  organisation: "",
  role: "",
  country: "",
  subject: "",
  anythingElse: "",
  phone: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_SUBMIT_MS = 2000;

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.fullName.trim()) e.fullName = "Please enter your full name.";
  if (!v.workEmail.trim()) e.workEmail = "Please enter your work email.";
  else if (!emailPattern.test(v.workEmail.trim())) e.workEmail = "That does not look like a valid email address.";
  if (!v.organisation.trim()) e.organisation = "Please enter your organization.";
  if (!v.role.trim()) e.role = "Please enter your role.";
  if (!v.country.trim()) e.country = "Please enter your country.";
  if (!v.subject.trim()) e.subject = "Please describe the subject or program you would bring.";
  return e;
}

function bundleMessage(v: Values): string {
  return [
    `Name:          ${v.fullName}`,
    `Work email:    ${v.workEmail}`,
    `Organization:  ${v.organisation}`,
    `Role:          ${v.role}`,
    `Country:       ${v.country}`,
    v.phone ? `Phone:         ${v.phone}` : null,
    ``,
    `SUBJECT / PROGRAMME`,
    v.subject,
    v.anythingElse ? `\nADDITIONAL CONTEXT\n${v.anythingElse}` : "",
    ``,
    `Submitted via knowledge-foundry.com/demonstration`,
  ]
    .filter((line) => line !== null)
    .join("\n");
}

export function DemonstrationForm() {
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [attempted, setAttempted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const renderedAt = useRef<number>(0);

  useEffect(() => {
    renderedAt.current = Date.now();
  }, []);

  const update = (k: keyof Values) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const next = { ...values, [k]: event.target.value };
    setValues(next);
    if (attempted) setErrors(validate(next));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAttempted(true);
    setErrorMessage(null);

    // Honeypot
    const honeypot = (event.currentTarget.elements.namedItem("company_website") as HTMLInputElement | null)?.value;
    if (honeypot) {
      // Silently accept from bots, do nothing.
      setStatus("success");
      return;
    }

    // Timing check
    if (Date.now() - renderedAt.current < MIN_SUBMIT_MS) {
      setStatus("error");
      setErrorMessage("Submission looked automated. Please try again.");
      return;
    }

    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      const firstErrorKey = Object.keys(errs)[0] as keyof Values;
      const el = document.querySelector<HTMLElement>(`[name="${firstErrorKey}"]`);
      el?.focus();
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) {
      setStatus("error");
      setErrorMessage(
        "Form is not yet connected to a delivery inbox. Email contact@knowledge-foundry.com and we will reply within one business day.",
      );
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Demonstration request · ${values.organisation || "Knowledge Foundry"}`,
          from_name: "Knowledge Foundry, demonstration form",
          message: bundleMessage(values),
        }),
      });
      const json: { success?: boolean; message?: string } = await res.json();
      if (res.ok && json.success) {
        setStatus("success");
        // Conversion event for Vercel Analytics. No personal details are sent.
        track("Demo request");
      } else {
        setStatus("error");
        setErrorMessage(json.message || "Something went wrong on our end. Please try again in a moment, or email contact@knowledge-foundry.com.");
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "We could not reach the form service. Please try again in a moment, or email contact@knowledge-foundry.com.",
      );
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-[var(--radius-lg)] border border-[color:var(--color-hairline)] bg-white p-10 md:p-14 text-center"
      >
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--color-forge)]/12 text-[color:var(--color-forge)] mb-6">
          <Check className="h-6 w-6" strokeWidth={2.4} />
        </span>
        <h2 className="text-[28px] md:text-[32px] font-[family-name:var(--font-display)] font-semibold tracking-tight text-[color:var(--color-ink)]">
          Thanks, we have your request.
        </h2>
        <p className="mt-4 text-[15.5px] leading-[1.65] text-[color:var(--color-ink-muted)] max-w-[52ch] mx-auto">
          One of our team will reply within one business day with times for the
          45 minute session. Bring a policy, standard, or subject you own.
          You keep the framework the Foundry produces from it.
        </p>
        <p className="mt-6 text-[12.5px] text-[color:var(--color-ink-faint)]">
          Wrong details? Email{" "}
          <a href="mailto:contact@knowledge-foundry.com" className="text-[color:var(--color-forge)]">
            contact@knowledge-foundry.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[var(--radius-lg)] border border-[color:var(--color-hairline)] bg-white p-8 md:p-10"
    >
      {/* Honeypot — invisible to humans, bots often fill anything named 'website'. */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px]"
      />

      <div className="grid md:grid-cols-2 gap-x-6 gap-y-6">
        <Field label="Full name" name="fullName" value={values.fullName} onChange={update("fullName")} error={errors.fullName} required autoComplete="name" />
        <Field label="Work email" name="workEmail" type="email" value={values.workEmail} onChange={update("workEmail")} error={errors.workEmail} required autoComplete="email" />
        <Field label="Organization" name="organisation" value={values.organisation} onChange={update("organisation")} error={errors.organisation} required autoComplete="organization" />
        <Field label="Role" name="role" value={values.role} onChange={update("role")} error={errors.role} required autoComplete="organization-title" />
        <Field label="Country" name="country" value={values.country} onChange={update("country")} error={errors.country} required autoComplete="country-name" className="md:col-span-2" />
        <TextareaField
          label="What subject or program would you bring?"
          name="subject"
          value={values.subject}
          onChange={update("subject")}
          error={errors.subject}
          required
          rows={4}
          placeholder="A policy, standard, protocol, existing training corpus, or subject area you own."
          className="md:col-span-2"
        />
        <TextareaField
          label="Anything else?"
          name="anythingElse"
          value={values.anythingElse}
          onChange={update("anythingElse")}
          rows={3}
          placeholder="Optional. Context on the audience, timeline, or governance obligations that would shape the session."
          className="md:col-span-2"
        />
        <Field label="Phone (optional)" name="phone" type="tel" value={values.phone} onChange={update("phone")} autoComplete="tel" className="md:col-span-2" />
      </div>

      {status === "error" && errorMessage && (
        <div
          role="alert"
          aria-live="assertive"
          className="mt-6 flex items-start gap-3 rounded-[var(--radius-sm)] border border-[color:var(--color-forge)]/30 bg-[color:var(--color-forge)]/6 p-4 text-[13.5px] leading-[1.55] text-[color:var(--color-ink-soft)]"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 text-[color:var(--color-forge)] shrink-0" aria-hidden />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
        <p className="text-[12.5px] leading-[1.5] text-[color:var(--color-ink-faint)] max-w-[42ch]">
          By submitting, you confirm you have read the collection notice below.
          We reply within one business day.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex items-center justify-center gap-2 h-[52px] px-7 rounded-[var(--radius-md)] bg-[color:var(--color-ink)] text-white text-[15px] font-medium tracking-tight transition-all duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-[color:var(--color-forge)] disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_2px_0_0_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_-8px_rgba(239,103,4,0.5)]"
        >
          {status === "submitting" ? "Sending…" : "Request demonstration"}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-1" aria-hidden />
        </button>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: keyof Values;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  type?: string;
  autoComplete?: string;
  className?: string;
};

function Field({
  label,
  name,
  value,
  onChange,
  error,
  required,
  type = "text",
  autoComplete,
  className,
}: FieldProps) {
  const id = `field-${name}`;
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block text-[12px] font-medium uppercase tracking-[0.12em] font-[family-name:var(--font-jetbrains)] text-[color:var(--color-ink-soft)] mb-2"
      >
        {label}
        {required && <span className="text-[color:var(--color-forge)] ml-1">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full h-11 px-4 rounded-[var(--radius-sm)] border bg-white text-[14.5px] text-[color:var(--color-ink)] transition-colors focus:outline-none focus:ring-2 focus:ring-[color:var(--color-forge)]/30 focus:border-[color:var(--color-forge)] ${
          error
            ? "border-[color:var(--color-forge)]"
            : "border-[color:var(--color-hairline-strong)] hover:border-[color:var(--color-ink-soft)]"
        }`}
      />
      {error && (
        <p id={`${id}-error`} className="mt-2 text-[12.5px] text-[color:var(--color-forge)]">
          {error}
        </p>
      )}
    </div>
  );
}

type TextareaFieldProps = {
  label: string;
  name: keyof Values;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
  rows?: number;
  placeholder?: string;
  className?: string;
};

function TextareaField({
  label,
  name,
  value,
  onChange,
  error,
  required,
  rows = 4,
  placeholder,
  className,
}: TextareaFieldProps) {
  const id = `field-${name}`;
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block text-[12px] font-medium uppercase tracking-[0.12em] font-[family-name:var(--font-jetbrains)] text-[color:var(--color-ink-soft)] mb-2"
      >
        {label}
        {required && <span className="text-[color:var(--color-forge)] ml-1">*</span>}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full px-4 py-3 rounded-[var(--radius-sm)] border bg-white text-[14.5px] text-[color:var(--color-ink)] leading-[1.55] transition-colors focus:outline-none focus:ring-2 focus:ring-[color:var(--color-forge)]/30 focus:border-[color:var(--color-forge)] ${
          error
            ? "border-[color:var(--color-forge)]"
            : "border-[color:var(--color-hairline-strong)] hover:border-[color:var(--color-ink-soft)]"
        }`}
      />
      {error && (
        <p id={`${id}-error`} className="mt-2 text-[12.5px] text-[color:var(--color-forge)]">
          {error}
        </p>
      )}
    </div>
  );
}
