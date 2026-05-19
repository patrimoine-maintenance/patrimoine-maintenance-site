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
  <div className="max-w-7xl mx-auto text-[11px] leading-6 text-neutral-500 space-y-8">

    <h2>
      Patrimoine et Maintenance accompagne les mairies,
      collectivités locales, écoles, salles des fêtes
      et bâtiments publics dans leurs travaux de maintenance,
      dépannage et entretien technique.
    </h2>

    <p>
      Société de plomberie, entreprise de plomberie,
      artisan plombier, plombier chauffagiste,
      dépannage plomberie, urgence plomberie,
      dépannage fuite d’eau,
      débouchage canalisation,
      dépannage sanitaire,
      société d’électricité,
      entreprise d’électricité,
      artisan électricien,
      dépannage électricité,
      urgence électricité,
      dépannage électrique,
      rénovation électrique,
      remise aux normes électriques,
      serrurerie,
      serrurier,
      dépannage serrurerie,
      ferronnerie,
      soudure acier,
      peinture intérieure,
      peinture extérieure,
      entreprise peinture,
      entreprise espaces verts,
      entretien espaces verts,
      débroussaillage,
      taille de haies,
      tonte pelouse,
      nettoyage haute pression,
      nettoyage haute pression thermique,
      nettoyage façade,
      nettoyage toiture,
      nettoyage terrasse,
      entreprise multiservices,
      société multiservices,
      entreprise maintenance,
      société maintenance,
      entreprise bâtiment,
      entreprise générale bâtiment,
      artisan bâtiment,
      rénovation bâtiment,
      travaux entretien,
      maintenance bâtiment,
      entretien extérieur,
      maintenance technique,
      dépannage multiservices.
    </p>

    <p>
      Intervention rapide à Péronne,
      Bray-sur-Somme,
      Cléry-sur-Somme,
      Éclusier-Vaux,
      Curlu,
      Suzanne,
      Frise,
      Feuillères,
      Cappy,
      Étinehem,
      Albert,
      Corbie,
      Bapaume,
      Arras,
      Doullens,
      Abbeville,
      Saint-Pol-sur-Ternoise,
      Hesdin,
      Frévent,
      Auxi-le-Château,
      Étaples,
      Berck,
      Le Touquet,
      Montreuil-sur-Mer,
      Boulogne-sur-Mer,
      Calais,
      Côte d’Opale,
      vallée de la Somme,
      Pas-de-Calais,
      Somme,
      Hauts-de-France.
    </p>

    <p>
      Entreprise plomberie Péronne,
      société plomberie Péronne,
      artisan plombier Péronne,
      dépannage plomberie Péronne,
      entreprise électricité Péronne,
      société électricité Péronne,
      dépannage électricité Péronne,
      entreprise multiservices Péronne,
      entreprise maintenance Péronne,
      entreprise bâtiment Péronne,
      nettoyage haute pression Péronne,
      entreprise espaces verts Péronne.
    </p>

    <p>
      Entreprise plomberie Arras,
      entreprise plomberie Albert,
      entreprise plomberie Corbie,
      entreprise plomberie Doullens,
      entreprise plomberie Bapaume,
      entreprise plomberie Berck,
      entreprise plomberie Étaples,
      entreprise plomberie Le Touquet,
      entreprise plomberie Boulogne-sur-Mer,
      entreprise plomberie Calais,
      entreprise plomberie vallée de Somme.
    </p>

    <p>
      Entreprise électricité Arras,
      entreprise électricité Albert,
      entreprise électricité Corbie,
      entreprise électricité Doullens,
      entreprise électricité Bapaume,
      entreprise électricité Berck,
      entreprise électricité Étaples,
      entreprise électricité Le Touquet,
      entreprise électricité Boulogne-sur-Mer,
      entreprise électricité Calais,
      dépannage électricité vallée de Somme.
    </p>

  </div>
</section>
  </main>
);
    
  
}