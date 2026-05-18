export default function ContactPage() {
  return (
   <div className="relative w-full bg-white">

      {/* IMAGE */}
      <img
        src="/images/contact-patrimoine-maintenance.webp"
        alt="Contact Patrimoine & Maintenance"
        className="w-full h-auto block"
      />

      {/* TELEPHONE */}
      <a
        href="tel:+33631951877"
        className="absolute top-[36%] left-[6%] w-[24%] h-[6%] z-50"
      />

      {/* EMAIL */}
      <a
        href="mailto:contact@patrimoine-maintenance.fr"
        className="absolute top-[36%] left-[38%] w-[24%] h-[6%] z-50"
      />

      {/* ENVOYER */}
      <a
        href="mailto:contact@patrimoine-maintenance.fr"
        className="absolute top-[67%] left-[56%] w-[30%] h-[4%] z-50"
      />

      {/* TELEPHONE URGENCE */}
      <a
        href="tel:+33631951877"
        className="absolute top-[67%] left-[23%] w-[18%] h-[4%] z-50"
      />

    </div>
  );
}