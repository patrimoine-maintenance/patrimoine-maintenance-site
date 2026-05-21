import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Patrimoine & Maintenance | Travaux et entretien des collectivités",

  description:
    "Entreprise spécialisée dans les travaux, l’entretien et les interventions techniques pour les collectivités, mairies, bâtiments communaux, écoles, salles des fêtes et équipements publics dans le Pas-de-Calais, la Somme et les Hauts-de-France.",

  keywords: [
    "travaux mairie",
    "travaux collectivités",
    "travaux commune",
    "travaux bâtiments communaux",
    "travaux bâtiments publics",
    "travaux école communale",
    "travaux école primaire",
    "travaux salle des fêtes",
    "travaux salle polyvalente",
    "travaux locaux communaux",
    "travaux techniques mairie",
    "travaux techniques collectivité",
    "travaux entretien mairie",
    "travaux entretien collectivité",
    "travaux petite commune",
    "travaux commune rurale",
    "travaux village",
    "travaux espaces verts mairie",
    "travaux espaces verts collectivité",
    "travaux plomberie mairie",
    "travaux plomberie collectivité",
    "travaux électricité mairie",
    "travaux électricité collectivité",
    "travaux serrurerie mairie",
    "travaux menuiserie mairie",
    "travaux entretien école",
    "travaux sanitaires école",
    "travaux sanitaires mairie",
    "travaux sanitaires collectivité",
    "travaux chauffage mairie",
    "travaux dépannage commune",
    "travaux dépannage mairie",
    "travaux urgents collectivité",
    "travaux techniques urgents",
    "travaux multiservices collectivité",
    "travaux multiservices mairie",
    "prestataire travaux mairie",
    "prestataire technique commune",
    "entreprise travaux collectivité",
    "entreprise travaux mairie",
    "contrat entretien mairie",
    "contrat entretien collectivité",
    "contrat entretien bâtiment communal",
    "contrat entretien école",
    "contrat entretien salle des fêtes",
    "contrat entretien espaces verts",
    "contrat entretien patrimoine communal",
    "contrat entretien équipements publics",
    "contrat entretien bâtiments publics",
    "contrat maintenance mairie",
    "entretien mairie",
    "entretien école",
    "entretien bâtiment communal",
    "entretien locaux communaux",
    "entretien salle des fêtes",
    "entretien sanitaires publics",
    "entretien patrimoine communal",
    "entretien équipements publics",
    "entretien bâtiments scolaires",
    "entretien technique collectivité",
    "entretien espaces verts commune",
    "entretien plomberie collectivité",
    "entretien électricité mairie",
    "réparation bâtiment communal",
    "réparation mairie",
    "réparation école",
    "réparation salle polyvalente",
    "réparation sanitaires publics",
    "dépannage collectivité",
    "dépannage mairie",
    "dépannage plomberie mairie",
    "dépannage électrique collectivité",
    "dépannage serrurerie commune",
    "services techniques mairie",
    "services techniques collectivité",
    "travaux patrimoine communal",
    "travaux patrimoine rural",
    "travaux équipements publics",
    "travaux locaux municipaux",
    "travaux bâtiment administratif",
    "travaux locaux techniques",
    "travaux voirie légère",
    "petits travaux mairie",
    "petits travaux collectivité",
    "petits travaux bâtiment communal",
    "travaux techniques école",
    "travaux bâtiment scolaire",
    "travaux services municipaux",
    "travaux rénovation mairie",
    "travaux rénovation école",
    "travaux rénovation salle des fêtes",
    "travaux accessibilité mairie",
    "travaux mise en conformité mairie",
    "travaux sécurité bâtiment public",
    "travaux entretien communal",
    "travaux collectivité Hauts-de-France",
    "travaux mairie Pas-de-Calais",
    "travaux mairie Somme",
    "prestataire technique Hauts-de-France",
    "entreprise entretien collectivité",
    "entreprise multiservices mairie",
    "entreprise travaux commune rurale",
    "travaux collectivité Somme",
    "travaux commune Somme",
    "travaux bâtiments communaux Somme",
    "travaux école Somme",
    "travaux salle des fêtes Somme",
    "travaux plomberie Somme",
    "travaux électricité Somme",
    "travaux espaces verts Somme",
    "entretien mairie Somme",
    "prestataire mairie Somme",
    "prestataire collectivité Somme",
    "entreprise travaux Somme",
    "entreprise multiservices Somme",
    "maintenance collectivité Somme",
    "maintenance mairie Somme",
    "travaux patrimoine communal Somme",
    "travaux patrimoine rural Somme",
    "travaux bâtiments publics Somme",
    "travaux techniques Somme",
    "travaux équipements publics Somme",
    "travaux multiservices Somme",
    "travaux mairie Péronne",
    "travaux mairie Albert",
    "travaux mairie Doullens",
    "travaux mairie Corbie",
    "travaux mairie Ham",
    "travaux mairie Roye",
    "travaux mairie Nesle",
    "travaux mairie Rosières-en-Santerre"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
     <body className="min-h-full flex flex-col overflow-x-hidden">

  <Navbar />

 <main className="pt-0">
    {children}
  </main>

</body>
    </html>
  );
}
