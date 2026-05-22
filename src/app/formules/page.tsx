import Image from "next/image";

export const metadata = {
  title: "Formules de maintenance collectivités | Patrimoine Maintenance",
  description:
    "Découvrez nos formules de maintenance pour collectivités, bâtiments communaux et interventions techniques.",
};

export default function Formules() {
  return (
    <main className="hero-section relative min-h-screen bg-black max-md:min-h-0 max-md:bg-transparent max-md:overflow-visible max-md:pt-0 max-md:mt-0">
      <Image
        src="/images/formules.webp"
        alt="Formules de maintenance Patrimoine & Maintenance"
        width={1920}
        height={1080}
        className="w-full h-auto"
        priority
      />
    </main>
  );
}
