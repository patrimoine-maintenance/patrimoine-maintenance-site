import Link from "next/link";
import Image from "next/image";
export const metadata = {
  title: "Formules de maintenance collectivités | Patrimoine Maintenance",
  description:
    "Découvrez nos formules de maintenance pour collectivités, bâtiments communaux et interventions techniques.",
};

export default function Formules() {
  return (
  <main className="hero-section relative w-full min-h-screen overflow-x-hidden bg-black max-md:min-h-0 max-md:bg-transparent max-md:overflow-visible max-md:pt-0 max-md:mt-0">
   <div className="-mt-25"></div>
<div className="relative w-screen">

   {/* NAVBAR */}

</div>
<div className="relative w-full flex justify-center pt-24">
      {/* IMAGE */}
      <Image
        src="/images/formules.webp"
        alt="Formules"
        width={1920}
        height={1080}
  className="block w-screen h-auto object-contain"
        priority
      />
 
    </div>
  
    </main>
  );
}