"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-12 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-success)]/10 text-[var(--color-success)]">
          <Icon name="check" size={24} />
        </span>
        <h2 className="mt-5 font-display text-[var(--fs-xl)] font-semibold text-[var(--color-ink)]">
          Thanks — we&rsquo;ll be in touch shortly
        </h2>
        <p className="mt-2 max-w-sm text-sm text-[var(--color-text-muted)]">
          Our team typically responds within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-7 sm:p-9"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[var(--color-text)]">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm outline-none focus-visible:border-[var(--color-primary)]"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[var(--color-text)]">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm outline-none focus-visible:border-[var(--color-primary)]"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-[var(--color-text)]">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm outline-none focus-visible:border-[var(--color-primary)]"
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-[var(--color-text)]">
            I&rsquo;m interested in
          </label>
          <select
            id="service"
            name="service"
            className="w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm outline-none focus-visible:border-[var(--color-primary)]"
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            <option>Digital Marketing</option>
            <option>Web & App Development</option>
            <option>Creative & Design</option>
            <option>Free Website Audit</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[var(--color-text)]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm outline-none focus-visible:border-[var(--color-primary)]"
        />
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--color-primary-strong)]"
      >
        Send Message <Icon name="arrowRight" size={16} />
      </button>
    </form>
  );
}
