import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
export default function ZoneIntervention() {
  return (
    <main className="relative min-h-screen bg-black">
<Navbar />
      

     

      {/* IMAGE */}
      <Image
        src="/images/zone-intervention.webp"
        alt="Zone intervention"
        width={1920}
        height={1080}
        className="w-full h-auto"
        priority
      />

    </main>
  );
}