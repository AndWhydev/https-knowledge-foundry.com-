"use client";

/**
 * DemonstrationForm — client-side scaffold only.
 *
 * PRODUCTION WIRING REQUIRED before this form is used in anger:
 *   1. Replace action="#" with a real server action / route handler.
 *   2. Server-side validation of every field. Do not trust client checks.
 *   3. Honeypot check: reject any submission where `company_website` is non-empty.
 *   4. Submission-timing check: reject submissions completed faster than ~2s
 *      after form render (bot fill-and-fire) or later than ~2h (stale token).
 *   5. Fire the Google Ads conversion event only AFTER server-side validation
 *      has passed — never on the optimistic client-side submit.
 *   6. Rate-limit by IP + email.
 *   7. Route the payload to the sales inbox, NOT to a marketing-automation
 *      platform. This is stated in the collection notice on the page and must
 *      be honoured operationally.
 */

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

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

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.fullName.trim()) e.fullName = "Please enter your full name.";
  if (!v.workEmail.trim()) e.workEmail = "Please enter your work email.";
  else if (!emailPattern.test(v.workEmail.trim())) e.workEmail = "That does not look like a valid email address.";
  if (!v.organisation.trim()) e.organisation = "Please enter your organisation.";
  if (!v.role.trim()) e.role = "Please enter your role.";
  if (!v.country.trim()) e.country = "Please enter your country.";
  if (!v.subject.trim()) e.subject = "Please describe the subject or programme you would bring.";
  return e;
}

export function DemonstrationForm() {
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [attempted, setAttempted] = useState(false);

  const update = (k: keyof Values) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const next = { ...values, [k]: event.target.value };
    setValues(next);
    if (attempted) setErrors(validate(next));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    setAttempted(true);
    const e = validate(values);
    setErrors(e);
    if (Object.keys(e).length > 0) {
      event.preventDefault();
      // Focus first field with an error for accessibility.
      const firstErrorKey = Object.keys(e)[0] as keyof Values;
      const el = document.querySelector<HTMLElement>(`[name="${firstErrorKey}"]`);
      el?.focus();
      return;
    }
    // In production, the submit is intercepted here and the form is POSTed
    // to a server action / route handler that runs the checks listed in the
    // file-header comment. Left as a native form submit while wiring is
    // pending.
  };

  return (
    <form
      action="#"
      method="post"
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[var(--radius-lg)] border border-[color:var(--color-hairline)] bg-white p-8 md:p-10"
    >
      {/* Honeypot — see file header. Real bots fill hidden fields; humans do not see this. */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px]"
      />

      <div className="grid md:grid-cols-2 gap-x-6 gap-y-6">
        <Field
          label="Full name"
          name="fullName"
          value={values.fullName}
          onChange={update("fullName")}
          error={errors.fullName}
          required
          autoComplete="name"
        />
        <Field
          label="Work email"
          name="workEmail"
          type="email"
          value={values.workEmail}
          onChange={update("workEmail")}
          error={errors.workEmail}
          required
          autoComplete="email"
        />
        <Field
          label="Organisation"
          name="organisation"
          value={values.organisation}
          onChange={update("organisation")}
          error={errors.organisation}
          required
          autoComplete="organization"
        />
        <Field
          label="Role"
          name="role"
          value={values.role}
          onChange={update("role")}
          error={errors.role}
          required
          autoComplete="organization-title"
        />
        <Field
          label="Country"
          name="country"
          value={values.country}
          onChange={update("country")}
          error={errors.country}
          required
          autoComplete="country-name"
          className="md:col-span-2"
        />
        <TextareaField
          label="What subject or programme would you bring?"
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
        <Field
          label="Phone (optional)"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={update("phone")}
          autoComplete="tel"
          className="md:col-span-2"
        />
      </div>

      <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
        <p className="text-[12.5px] leading-[1.5] text-[color:var(--color-ink-faint)] max-w-[42ch]">
          By submitting, you confirm you have read the collection notice below.
          We reply within one business day.
        </p>
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2 h-[52px] px-7 rounded-[var(--radius-md)] bg-[color:var(--color-ink)] text-white text-[15px] font-medium tracking-tight transition-all duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-[color:var(--color-forge)] shadow-[0_2px_0_0_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_-8px_rgba(239,103,4,0.5)]"
        >
          Request demonstration
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-1"
            aria-hidden
          />
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
