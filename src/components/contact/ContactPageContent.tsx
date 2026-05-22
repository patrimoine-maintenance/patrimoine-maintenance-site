import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";

const ROUTES = {
  accueil: "/",
  interventions: "/interventions",
  formules: "/formules",
  zone: "/zone-intervention",
  gestion: "/gestion-connectee",
  contact: "/contact",
};

const WHY_ITEMS = [
  { label: "Réactivité", color: "orange", icon: "bolt" },
  { label: "Expertise", color: "blue", icon: "badge" },
  { label: "Proximité", color: "green", icon: "pin" },
  { label: "Accompagnement", color: "orange", icon: "hand" },
  { label: "Solutions sur-mesure", color: "blue", icon: "clipboard" },
];

export default function ContactPageContent() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <Image
          src="/images/accueil.webp"
          alt=""
          fill
          priority
          className="contact-hero-bg"
          sizes="100vw"
        />
        <div className="contact-hero-overlay" aria-hidden="true" />
        <div className="contact-hero-inner">
          <div className="contact-hero-copy">
            <h1>CONTACTEZ-NOUS</h1>
            <p className="contact-hero-accent">NOUS SOMMES À VOTRE ÉCOUTE !</p>
            <p className="contact-hero-lead">
              Une question, un projet, une urgence ? Notre équipe est à votre
              disposition pour vous accompagner rapidement et efficacement.
            </p>
          </div>
          <ul className="contact-hero-badges">
            <li>
              <span className="contact-badge-icon contact-badge-icon--green">
                <PinIcon />
              </span>
              <span>
                <strong>PROXIMITÉ</strong>
                Une équipe locale réactive et engagée
              </span>
            </li>
            <li>
              <span className="contact-badge-icon contact-badge-icon--orange">
                <BoltIcon />
              </span>
              <span>
                <strong>EFFICACITÉ</strong>
                Interventions rapides et planifiées
              </span>
            </li>
            <li>
              <span className="contact-badge-icon contact-badge-icon--blue">
                <ShieldIcon />
              </span>
              <span>
                <strong>CONFIANCE</strong>
                Un partenaire durable pour vos communes
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="contact-quick" aria-label="Coordonnées rapides">
        <div className="contact-quick-inner">
          <div className="contact-quick-item">
            <span className="contact-quick-icon contact-quick-icon--blue">
              <PhoneIcon />
            </span>
            <div>
              <h2>TÉLÉPHONE</h2>
              <a href="tel:0631951877">06 31 95 18 77</a>
              <p>Du lundi au samedi 8h - 18h</p>
            </div>
          </div>
          <div className="contact-quick-item">
            <span className="contact-quick-icon contact-quick-icon--orange">
              <MailIcon />
            </span>
            <div>
              <h2>EMAIL</h2>
              <a href="mailto:contact@patrimoine-maintenance.fr">
                contact@patrimoine-maintenance.fr
              </a>
              <p>Réponse sous 24h</p>
            </div>
          </div>
          <div className="contact-quick-item">
            <span className="contact-quick-icon contact-quick-icon--green">
              <ClockIcon />
            </span>
            <div>
              <h2>HORAIRES</h2>
              <p className="contact-quick-strong">Lundi - Samedi 8h00 - 18h00</p>
              <p>Interventions possibles en dehors des horaires sur demande</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-main-inner">
          <div className="contact-aside">
            <article className="contact-card contact-card--hq">
              <h2>NOTRE SIÈGE SOCIAL</h2>
              <p className="contact-address">
                <strong>62158 SAULTY</strong>
                <br />
                162 Place Publique
                <br />
                France
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=162+Place+Publique+62158+Saulty"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-hq-map"
              >
                <span className="contact-hq-map-pin" aria-hidden="true">
                  <MapPinIcon />
                </span>
                <span className="contact-hq-map-text">
                  <strong>62158 SAULTY</strong>
                  <span>162 Place Publique</span>
                  <span>France</span>
                </span>
                <span className="contact-hq-map-link">Ouvrir la carte</span>
              </a>
            </article>

            <article className="contact-urgency">
              <div className="contact-urgency-head">
                <AlertIcon />
                <div>
                  <h2>URGENCE TECHNIQUE ?</h2>
                  <p>
                    Besoin d&apos;une intervention rapide ? Appelez-nous
                    directement !
                  </p>
                </div>
              </div>
              <a href="tel:0631951877" className="contact-urgency-btn">
                06 31 95 18 77
              </a>
            </article>

            <div className="contact-why">
              <h2>POURQUOI NOUS CONTACTER ?</h2>
              <ul>
                {WHY_ITEMS.map((item) => (
                  <li key={item.label}>
                    <span
                      className={`contact-why-icon contact-why-icon--${item.color}`}
                    >
                      <WhyIcon type={item.icon} />
                    </span>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="contact-form-panel">
            <h2>ENVOYEZ-NOUS UN MESSAGE</h2>
            <p className="contact-form-intro">
              Remplissez le formulaire ci-dessous et nous vous répondrons dans
              les plus brefs délais.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="contact-quote">
        <Image
          src="/images/accueil.webp"
          alt=""
          fill
          className="contact-quote-bg"
          sizes="100vw"
        />
        <div className="contact-quote-overlay" aria-hidden="true" />
        <p>Ensemble, entretenons aujourd&apos;hui le patrimoine de demain.</p>
      </section>

      <section className="contact-strip">
        <div className="contact-strip-inner">
          <div className="contact-strip-block">
            <PhoneIcon />
            <div>
              <a href="tel:0631951877">06 31 95 18 77</a>
              <p>Nous sommes à votre écoute !</p>
            </div>
          </div>
          <div className="contact-strip-block">
            <GlobeIcon />
            <div>
              <a href="https://www.patrimoine-maintenance.fr">
                www.patrimoine-maintenance.fr
              </a>
              <a href="mailto:contact@patrimoine-maintenance.fr">
                contact@patrimoine-maintenance.fr
              </a>
            </div>
          </div>
          <div className="contact-strip-block">
            <HeadsetIcon />
            <div>
              <a href="mailto:assistance@patrimoine-maintenance.fr">
                assistance@patrimoine-maintenance.fr
              </a>
              <p>Assistance technique — Lun - Sam 8h - 18h</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="contact-footer">
        <div className="contact-footer-tagline">
          <p>
            <em>
              « La confiance se construit dans la durée, par la qualité de nos
              interventions. »
            </em>
          </p>
          <span aria-hidden="true">🇫🇷</span>
        </div>
        <div className="contact-footer-grid">
          <div className="contact-footer-brand">
            <p className="contact-footer-logo">
              <span className="contact-footer-logo-mark">P&amp;M</span>
              PATRIMOINE &amp; MAINTENANCE
            </p>
            <p>
              Votre partenaire de confiance pour l&apos;entretien et la
              maintenance des bâtiments communaux et équipements publics.
            </p>
            <div className="contact-footer-socials">
              <a href="mailto:contact@patrimoine-maintenance.fr" aria-label="Email">
                <MailIcon />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
          <nav aria-label="Navigation pied de page">
            <h3>NAVIGATION</h3>
            <ul>
              <li>
                <Link href={ROUTES.accueil}>Accueil</Link>
              </li>
              <li>
                <Link href={ROUTES.interventions}>Nos services</Link>
              </li>
              <li>
                <Link href={ROUTES.formules}>Formules</Link>
              </li>
              <li>
                <Link href={ROUTES.zone}>Zones d&apos;intervention</Link>
              </li>
              <li>
                <Link href={ROUTES.gestion}>Gestion connectée</Link>
              </li>
              <li>
                <Link href={ROUTES.contact} className="is-active">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <nav aria-label="Informations légales">
            <h3>INFORMATIONS</h3>
            <ul>
              <li>
                <Link href="#">Mentions légales</Link>
              </li>
              <li>
                <Link href="#">Politique de confidentialité</Link>
              </li>
              <li>
                <Link href="#">CGU</Link>
              </li>
              <li>
                <Link href="#">Plan du site</Link>
              </li>
            </ul>
          </nav>
          <div className="contact-footer-coords">
            <h3>CONTACT</h3>
            <a href="tel:0631951877">06 31 95 18 77</a>
            <a href="mailto:contact@patrimoine-maintenance.fr">
              contact@patrimoine-maintenance.fr
            </a>
            <p>Hauts-de-France — Pas-de-Calais &amp; Somme</p>
          </div>
        </div>
        <div className="contact-footer-bottom">
          <p>© {new Date().getFullYear()} Patrimoine &amp; Maintenance</p>
          <p>
            Site réalisé avec <span aria-label="amour">♥</span> pour les
            collectivités
          </p>
        </div>
      </footer>
    </div>
  );
}

function WhyIcon({ type }: { type: string }) {
  if (type === "bolt") return <BoltIcon />;
  if (type === "badge") return <BadgeIcon />;
  if (type === "pin") return <PinIcon />;
  if (type === "hand") return <HandIcon />;
  return <ClipboardIcon />;
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s6-5.33 6-10a6 6 0 1 0-12 0c0 4.67 6 10 6 10Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3 4 7v6c0 5 3.4 7.7 8 9 4.6-1.3 8-4 8-9V7l-8-4Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 9v4m0 4h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MapPinIcon() {
  return <PinIcon />;
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 12v5a2 2 0 0 0 2 2h1v-7H5a2 2 0 0 0-2 2Zm16 0v5a2 2 0 0 1-2 2h-1v-7h2a2 2 0 0 1 2 2Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M8 20a4 4 0 0 0 8 0" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.94 5a2 2 0 1 1-.04 4.001 2 2 0 0 1 .04-4ZM4 9h5.88v12H4V9Zm7.94 0H18v1.64h.04c.84-1.59 2.9-3.27 5.98-3.27 6.4 0 7.58 4.21 7.58 9.68V21h-6V14.4c0-1.59-.03-3.63-2.21-3.63-2.21 0-2.55 1.73-2.55 3.52V21h-6V9Z" />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="5" stroke="currentColor" strokeWidth="2" />
      <path d="M7 14 5 22l7-3 7 3-2-8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function HandIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 11V7a2 2 0 1 1 4 0v1m0-1a2 2 0 1 1 4 0v4m0-5a2 2 0 1 1 4 0v6a6 6 0 0 1-12 0v-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="6" y="4" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M9 4h6a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4Z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
