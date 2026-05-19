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
<section className="w-full py-16 px-6 opacity-80">
  <div className="max-w-7xl mx-auto text-[11px] leading-6 text-neutral-500 space-y-6">

    <h2>
      Patrimoine et Maintenance accompagne les mairies,
      collectivités locales, écoles, salles des fêtes
      et bâtiments publics dans leurs travaux de maintenance,
      dépannage et entretien technique.
    </h2>

    <p>
      Société de plomberie, entreprise de plomberie,
      artisan plombier, dépannage plomberie,
      urgence plomberie, société d’électricité,
      entreprise d’électricité, artisan électricien,
      dépannage électricité, urgence électricité,
      serrurerie, ferronnerie, peinture,
      nettoyage haute pression,
      nettoyage haute pression thermique,
      entreprise espaces verts,
      entretien extérieur,
      entreprise multiservices,
      entreprise maintenance,
      entreprise bâtiment,
      entreprise générale bâtiment.
    </p>

    <p>
      Intervention rapide dans le secteur de Péronne,
      Albert, Corbie, Bray-sur-Somme,
      Cléry-sur-Somme, Éclusier-Vaux,
      Curlu, Suzanne, Feuillères,
      Cappy, Étinehem,
      Arras, Bapaume,
      Doullens, Abbeville,
      Saint-Pol-sur-Ternoise,
      Hesdin, Frévent,
      Berck, Étaples,
      Le Touquet,
      Montreuil-sur-Mer,
      Boulogne-sur-Mer,
      Calais et sur toute la vallée de la Somme
      ainsi que la Côte d’Opale.
    </p>

    <p>
      Artisan plombier local, électricien local,
      dépannage plomberie rapide,
      dépannage électrique rapide,
      serrurerie et maintenance technique
      pour bâtiments, locaux,
      collectivités, entreprises et particuliers.
    </p>

  </div>
</section>
  </main>
);
    
  
}