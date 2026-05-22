import type { Metadata } from "next";
import ContactPageContent from "@/components/contact/ContactPageContent";
import "./contact.css";

export const metadata: Metadata = {
  title: "Contact | Patrimoine & Maintenance",
  description:
    "Contactez Patrimoine & Maintenance pour vos projets, devis et urgences techniques auprès des collectivités en Hauts-de-France.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
