import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
export default function GestionConnectee() {
  return (
    <main className="relative min-h-screen bg-black">
<Navbar />
      

      

      {/* IMAGE */}
      <Image
        src="/images/gestion-connectee.webp"
        alt="Gestion connectée"
        width={1920}
        height={1080}
        className="w-full h-auto"
        priority
      />

    </main>
  );
}