import Link from "next/link";
import Image from "next/image";
export default function GestionConnectee() {
  return (
    <main className="hero-section relative min-h-screen bg-black max-md:min-h-0 max-md:bg-transparent max-md:overflow-visible max-md:pt-0 max-md:mt-0">
      

      

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