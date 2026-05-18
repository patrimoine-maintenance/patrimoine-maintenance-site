import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
export const metadata = {
  title: "Nos domaines d’intervention | Patrimoine Maintenance",
  description:
    "Maintenance technique, plomberie, électricité, espaces verts et entretien des bâtiments communaux.",
};

export default function Interventions() {
  return (
    <main className="relative min-h-screen bg-black">
<Navbar />
      

      

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