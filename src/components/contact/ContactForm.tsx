"use client";

import { FormEvent, useState } from "react";

const SUBJECT_OPTIONS = [
  "Demande de devis",
  "Intervention / urgence",
  "Contrat d'entretien",
  "Gestion connectée / collectivité",
  "Autre demande",
];

export default function ContactForm() {
  const [consent, setConsent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "");
    const company = String(data.get("company") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const subject = String(data.get("subject") ?? "Contact site web");
    const message = String(data.get("message") ?? "");

    const body = [
      `Nom / Prénom : ${name}`,
      company ? `Collectivité / Société : ${company}` : null,
      `Email : ${email}`,
      phone ? `Téléphone : ${phone}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const params = new URLSearchParams({
      subject: `[Site] ${subject}`,
      body,
    });

    if (email) {
      params.set("reply-to", email);
    }

    window.location.href = `mailto:contact@patrimoine-maintenance.fr?${params.toString()}`;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-grid">
        <label className="contact-field">
          <span>
            Nom / Prénom <em>*</em>
          </span>
          <input type="text" name="name" required autoComplete="name" />
        </label>
        <label className="contact-field">
          <span>Collectivité / Société</span>
          <input type="text" name="company" autoComplete="organization" />
        </label>
        <label className="contact-field">
          <span>
            Email <em>*</em>
          </span>
          <input type="email" name="email" required autoComplete="email" />
        </label>
        <label className="contact-field">
          <span>Téléphone</span>
          <input type="tel" name="phone" autoComplete="tel" />
        </label>
      </div>

      <label className="contact-field contact-field--full">
        <span>
          Objet de votre demande <em>*</em>
        </span>
        <select name="subject" required defaultValue="">
          <option value="" disabled>
            Sélectionnez un objet
          </option>
          {SUBJECT_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="contact-field contact-field--full">
        <span>
          Votre message <em>*</em>
        </span>
        <textarea name="message" rows={5} required />
      </label>

      <label className="contact-consent">
        <input
          type="checkbox"
          name="consent"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          required
        />
        <span>
          J&apos;accepte que mes données soient utilisées pour traiter ma
          demande conformément à la politique de confidentialité.
        </span>
      </label>

      <button type="submit" className="contact-submit" disabled={!consent}>
        <SendIcon />
        ENVOYER MA DEMANDE
      </button>

      <p className="contact-form-secure">
        <LockIcon />
        Vos données sont sécurisées et protégées
      </p>
    </form>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M22 2 11 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 2 15 22 11 13 2 9l20-7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="5"
        y="11"
        width="14"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M8 11V8a4 4 0 1 1 8 0v3"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
