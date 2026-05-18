import Image from "next/image";
import Navbar from "../components/Navbar";
export default function Home() {
 return (
  <main className="relative min-h-screen bg-black overflow-hidden">

    <Navbar />

    <Image
      src="/images/accueil.webp"
      alt="Patrimoine et Maintenance"
      width={1920}
      height={1080}
      priority
      className="w-full min-h-screen object-contain md:object-cover object-top"
    />

  </main>
);
    
  
}