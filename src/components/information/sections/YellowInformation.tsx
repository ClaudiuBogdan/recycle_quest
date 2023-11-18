import SectionInformation from "../SectionInformation";

export default function YellowInformation() {
  return (
    <SectionInformation
      title="Pubela GALBENĂ: Plastic / Metal"
      subtitle="Galben e doar pentru Plastic și Metal."
      didYouKnowSection="Știați că reciclarea unei doze de aluminiu salvează suficientă energie
      pentru a alimenta un televizor pentru 3 ore?"
      exampleSection="Exemple deșeuri care trebuie colectate în recipientul galben: sticle și
      ambalaje din plastic (tip PET sau sticlele de lapte/iaurt), pungile,
      folia, caserolele din plastic, cutii de lapte și suc (de tipul Tetra
      Pack), cutii de conservă, doze de aluminiu de la băuturi, alte bidoane
      și recipenți din plastic (de ex. de la detergenți) și alte obiecte de
      plastic de mici dimensiuni (de ex. jucarii)."
      importantSection="Important! Cum aruncăm ambajele din plastic/metal?"
      listSection=""
      dontSection="NU aruncăm în pubela/ containerul galben: ambalaje contaminate (ca de
        ex. cutii de vopsele, bidoane cu resturi de vopsea, diluanți sau alte
        substanțe chimice periculoase), deșeuri medicale (de ex. seringi
        folosite), baterii, deșeuri electronice și electrice, alte plastice
        rezultate de la lucrările de construcții, polistirenul destinat
        izolației clădirilor sau produse combinate din plastic și metal."
    >
      <ul className="list-disc ml-6 space-y-2">
        <li className="flex items-center">
          ✅ Le clătim/curățăm cu apă, dacă sunt murdare;
        </li>
        <li className="flex items-center">
          ✅ Le scoatem dopul (în cazul sticlelor din plastic);
        </li>
        <li className="flex items-center">
          ✅ Le presăm cât mai bine posibil, pentru a ocupa cât mai puțin
          spațiu.
        </li>
        <li className="flex items-center">
          ❌ Nu arucăm recipientele cu resturi de lichid în ele sau murdare!
        </li>
      </ul>
    </SectionInformation>
  );
}
