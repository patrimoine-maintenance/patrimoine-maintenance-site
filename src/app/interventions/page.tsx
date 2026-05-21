import Link from "next/link";
import Image from "next/image";
export const metadata = {
  title: "Nos domaines d’intervention | Patrimoine Maintenance",
  description:
    "Maintenance technique, plomberie, électricité, espaces verts et entretien des bâtiments communaux.",
};

export default function Interventions() {
  return (
    <main className="hero-section relative min-h-screen bg-black max-md:min-h-0 max-md:bg-transparent max-md:overflow-visible max-md:pt-0 max-md:mt-0">
      

      

      {/* IMAGE */}
      <Image
        src="/images/interventions.webp"
        alt="Nos domaines d’intervention"
        width={1920}
        height={1080}
        className="w-full h-auto"
        priority
      />

    </main>
    
  );
}