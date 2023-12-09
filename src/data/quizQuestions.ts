import { QuizData } from "@/models/Quiz";

export const quizQuestions: QuizData[] = [
  {
    id: "basic-recycling-symbol",
    title: "Cunoștințe de bază despre reciclare",
    question:
      "Ce simbol este folosit în mod obișnuit pentru a indica faptul că un produs este reciclabil?",
    answers: [
      { id: "a", text: "Un cerc verde", correct: false },
      { id: "b", text: "Triunghiul reciclării", correct: true },
      { id: "c", text: "Un pătrat albastru", correct: false },
      { id: "d", text: "Un hexagon roșu", correct: false },
    ],
  },
  {
    id: "general-recyclables-sorting",
    title: "Sortarea materialelor reciclabile",
    question: "Care dintre următoarele obiecte este, în general, reciclabil?",
    answers: [
      { id: "a", text: "Cutii de pizza cu pete de grăsime", correct: false },
      { id: "b", text: "Pungi de plastic de la cumpărături", correct: false },
      { id: "c", text: "Sticle de sticlă", correct: true },
      { id: "d", text: "Cupe de polistiren", correct: false },
    ],
  },
  {
    id: "paper-recycling-limit",
    title: "Procesele de reciclare",
    question: "Poate hârtia să fie reciclată la nesfârșit?",
    answers: [
      { id: "a", text: "Da", correct: false },
      { id: "b", text: "Nu", correct: true },
    ],
  },
  {
    id: "electronic-waste-recyclability",
    title: "Deșeuri electronice",
    question:
      "Sunt dispozitivele electronice, cum ar fi smartphone-urile, reciclabile?",
    answers: [
      { id: "a", text: "Da, întotdeauna", correct: false },
      { id: "b", text: "Nu, niciodată", correct: false },
      { id: "c", text: "Da, dar numai la facilități speciale", correct: true },
    ],
  },
  {
    id: "plastic-recycling-numbers",
    title: "Reciclarea plasticului",
    question:
      "Ce reprezintă numerele din interiorul triunghiului de reciclare de pe plastice?",
    answers: [
      { id: "a", text: "Numărul de ori cât poate fi reciclat", correct: false },
      { id: "b", text: "Rata de reciclare a produsului", correct: false },
      { id: "c", text: "Tipul de rășină plastică utilizată", correct: true },
    ],
  },
  {
    id: "recycling-benefits",
    title: "Beneficiile reciclării",
    question: "Care este un beneficiu al reciclării?",
    answers: [
      {
        id: "a",
        text: "Crește emisiile de gaze cu efect de seră",
        correct: false,
      },
      { id: "b", text: "Economisește resurse naturale", correct: true },
      {
        id: "c",
        text: "Crește spațiul pentru depozitarea deșeurilor",
        correct: false,
      },
    ],
  },
  {
    id: "aluminum-foil-recycling",
    title: "Reciclarea metalelor",
    question: "Este folia de aluminiu reciclabilă?",
    answers: [
      {
        id: "a",
        text: "Da, dar trebuie să fie curată și fără reziduuri de mâncare",
        correct: true,
      },
      { id: "b", text: "Nu, nu este reciclabilă", correct: false },
    ],
  },
  {
    id: "glass-bottle-recycling",
    title: "Reciclarea sticlei",
    question: "Pot sticlele de sticlă să fie reciclate în sticle noi?",
    answers: [
      { id: "a", text: "Da", correct: true },
      { id: "b", text: "Nu", correct: false },
    ],
  },

  {
    id: "battery-recycling-requirements",
    title: "Reciclarea bateriilor",
    question: "Pot bateriile obișnuite să fie aruncate în coșul de reciclare?",
    answers: [
      { id: "a", text: "Da", correct: false },
      {
        id: "b",
        text: "Nu, ele necesită un proces special de reciclare",
        correct: true,
      },
    ],
  },
  {
    id: "old-magazine-recyclability",
    title: "Reciclarea hârtiei",
    question: "Sunt revistele vechi reciclabile?",
    answers: [
      { id: "a", text: "Da", correct: true },
      { id: "b", text: "Nu", correct: false },
    ],
  },
  {
    id: "recycling-symbols-meaning",
    title: "Simboluri de reciclare",
    question: "Ce înseamnă un triunghi de reciclare cu numărul 1 în interior?",
    answers: [
      {
        id: "a",
        text: "PET (polietilen tereftalat), un tip de plastic comun",
        correct: true,
      },
      { id: "b", text: "Sticlă", correct: false },
      { id: "c", text: "Metal", correct: false },
    ],
  },
  {
    id: "single-use-plastic-bag-recycling",
    title: "Reciclarea plasticurilor",
    question:
      "Sunt pungile de plastic de unică folosință reciclabile prin colectarea la bordură?",
    answers: [
      { id: "a", text: "Da", correct: false },
      {
        id: "b",
        text: "Nu, de obicei, ele necesită reciclare separată",
        correct: true,
      },
    ],
  },
  {
    id: "economic-benefits-recycling",
    title: "Beneficiile economice ale reciclării",
    question: "Reciclarea poate ajuta la crearea de locuri de muncă?",
    answers: [
      { id: "a", text: "Da", correct: true },
      { id: "b", text: "Nu", correct: false },
    ],
  },
  {
    id: "corrugated-cardboard-recyclability",
    title: "Reciclarea cartonului",
    question:
      "Este cartonul ondulat, cum ar fi cutiile de ambalaj, reciclabil?",
    answers: [
      { id: "a", text: "Da", correct: true },
      { id: "b", text: "Nu", correct: false },
    ],
  },
  {
    id: "polystyrene-packaging-recyclability",
    title: "Produse reciclabile",
    question:
      "Sunt ambalajele din spumă de polistiren (styrofoam) reciclabile?",
    answers: [
      { id: "a", text: "Da", correct: false },
      {
        id: "b",
        text: "Nu, rareori sunt acceptate în programele de reciclare standard",
        correct: true,
      },
    ],
  },
  {
    id: "fluorescent-bulbs-recycling",
    title: "Reciclarea iluminatului",
    question: "Sunt becurile fluorescente reciclabile?",
    answers: [
      {
        id: "a",
        text: "Da, dar necesită reciclare specială datorită mercurului",
        correct: true,
      },
      { id: "b", text: "Nu", correct: false },
    ],
  },
  {
    id: "recycling-impact-extraction",
    title: "Impactul reciclării",
    question:
      "Reciclarea poate reduce nevoia de extracție a materiilor prime noi?",
    answers: [
      { id: "a", text: "Da", correct: true },
      { id: "b", text: "Nu", correct: false },
    ],
  },
  {
    id: "hazardous-waste-recycling",
    title: "Reciclarea deșeurilor periculoase",
    question:
      "Pot vopselele și solvenții să fie reciclați cu restul deșeurilor casnice?",
    answers: [
      { id: "a", text: "Da", correct: false },
      { id: "b", text: "Nu, ei necesită gestionare specială", correct: true },
    ],
  },

  {
    id: "cooking-oil-recycling",
    title: "Reciclarea uleiului",
    question: "Este uleiul de gătit reciclabil?",
    answers: [
      {
        id: "a",
        text: "Da, poate fi turnat în coșul de reciclare",
        correct: false,
      },
      {
        id: "b",
        text: "Nu, dar poate fi colectat separat pentru reciclare",
        correct: true,
      },
    ],
  },
  {
    id: "food-contaminated-packaging-recycling",
    title: "Reciclarea ambalajelor",
    question:
      "Pot ambalajele cu alimente contaminate (cum ar fi cutiile de pizza cu resturi de mâncare) să fie reciclate?",
    answers: [
      { id: "a", text: "Da", correct: false },
      { id: "b", text: "Nu, contaminarea împiedică reciclarea", correct: true },
    ],
  },
  {
    id: "rechargeable-batteries-recycling",
    title: "Reciclarea bateriilor reîncărcabile",
    question: "Sunt bateriile reîncărcabile reciclabile?",
    answers: [
      { id: "a", text: "Da", correct: true },
      { id: "b", text: "Nu", correct: false },
    ],
  },
  {
    id: "painted-laminated-paper-recycling",
    title: "Reciclarea hârtiei vopsite sau laminate",
    question: "Este hârtia vopsită sau laminată reciclabilă?",
    answers: [
      { id: "a", text: "Da", correct: false },
      {
        id: "b",
        text: "Nu, tratamentele de suprafață împiedică reciclarea",
        correct: true,
      },
    ],
  },
  {
    id: "furniture-recycling-options",
    title: "Reciclarea mobilierului",
    question:
      "Pot piesele de mobilier, cum ar fi scaunele și mesele, să fie reciclate?",
    answers: [
      {
        id: "a",
        text: "Da, prin programe speciale de reciclare",
        correct: true,
      },
      { id: "b", text: "Nu, mobilierul nu este reciclabil", correct: false },
    ],
  },
  {
    id: "expired-medications-disposal",
    title: "Reciclarea medicamentelor",
    question:
      "Pot medicamentele expirate să fie reciclate prin coșul de reciclare?",
    answers: [
      { id: "a", text: "Da", correct: false },
      { id: "b", text: "Nu, ele necesită eliminare specială", correct: true },
    ],
  },
  {
    id: "old-electrical-appliances-recycling",
    title: "Reciclarea aparaturii electrice",
    question:
      "Este aparatura electrică veche, cum ar fi frigiderele și cuptoarele, reciclabilă?",
    answers: [
      {
        id: "a",
        text: "Da, prin programe de reciclare specializate",
        correct: true,
      },
      { id: "b", text: "Nu, nu pot fi reciclate", correct: false },
    ],
  },
  {
    id: "coated-carton-recycling",
    title: "Reciclarea cartonului cu folie",
    question: "Pot cutiile de sucuri și lapte cu folie să fie reciclate?",
    answers: [
      { id: "a", text: "Da", correct: true },
      { id: "b", text: "Nu", correct: false },
    ],
  },
  {
    id: "small-items-recycling",
    title: "Reciclarea obiectelor mici",
    question:
      "Pot obiectele mici, cum ar fi capacele de sticlă și agrafele, să fie reciclate?",
    answers: [
      {
        id: "a",
        text: "Da, dar pot necesita colectare separată",
        correct: true,
      },
      {
        id: "b",
        text: "Nu, sunt prea mici pentru a fi reciclate",
        correct: false,
      },
    ],
  },

  {
    id: "plastic-shopping-bags-recycling",
    title: "Reciclarea pungilor de cumpărături din plastic",
    question:
      "Ce trebuie să faceți cu pungile de cumpărături din plastic pentru a le recicla corect?",
    answers: [
      {
        id: "a",
        text: "Le puteți arunca în coșul de reciclare casnic",
        correct: false,
      },
      {
        id: "b",
        text: "Trebuie să le aduceți la centrele de colectare specializate",
        correct: true,
      },
    ],
  },
  {
    id: "cd-dvd-recycling",
    title: "Reciclarea CD-urilor și DVD-urilor",
    question: "Sunt CD-urile și DVD-urile reciclabile?",
    answers: [
      {
        id: "a",
        text: "Da, prin programe de reciclare specializate",
        correct: true,
      },
      { id: "b", text: "Nu, acestea nu sunt reciclabile", correct: false },
    ],
  },
  {
    id: "pvc-pipe-recyclability",
    title: "Reciclarea țevilor PVC",
    question: "Este PVC-ul (policlorură de vinil) reciclabil?",
    answers: [
      { id: "a", text: "Da", correct: true },
      { id: "b", text: "Nu", correct: false },
    ],
  },
  {
    id: "garden-waste-recycling",
    title: "Reciclarea deșeurilor de grădină",
    question:
      "Pot resturile de grădină, cum ar fi ierburile și frunzele, să fie reciclate?",
    answers: [
      { id: "a", text: "Da, prin compostare", correct: true },
      { id: "b", text: "Nu, acestea nu sunt reciclabile", correct: false },
    ],
  },
  {
    id: "construction-materials-recycling",
    title: "Reciclarea materialelor de construcții",
    question:
      "Pot materialele de construcție, cum ar fi cărămizile și betonul, să fie reciclate?",
    answers: [
      { id: "a", text: "Da", correct: true },
      { id: "b", text: "Nu", correct: false },
    ],
  },
  {
    id: "colored-glass-recyclability",
    title: "Reciclarea sticlei colorate",
    question:
      "Pot sticlele colorate să fie reciclate la fel ca sticlele transparente?",
    answers: [
      { id: "a", text: "Da", correct: true },
      {
        id: "b",
        text: "Nu, procesul de reciclare este diferit",
        correct: false,
      },
    ],
  },
  {
    id: "large-appliances-recycling-process",
    title: "Reciclarea electrocasnicelor mari",
    question:
      "Ce se întâmplă cu frigiderele și alte electrocasnice mari atunci când sunt reciclate?",
    answers: [
      { id: "a", text: "Sunt refolosite ca atare", correct: false },
      {
        id: "b",
        text: "Componentele lor sunt recuperate și reciclate",
        correct: true,
      },
    ],
  },
  {
    id: "printed-paper-recyclability",
    title: "Reciclarea hârtiei cu cerneală",
    question:
      "Este hârtia tipărită, cum ar fi ziarele și revistele, reciclabilă?",
    answers: [
      { id: "a", text: "Da", correct: true },
      { id: "b", text: "Nu, cerneala împiedică reciclarea", correct: false },
    ],
  },
  {
    id: "surgical-masks-recyclability",
    title: "Reciclarea măștilor chirurgicale",
    question: "Pot măștile chirurgicale să fie reciclate?",
    answers: [
      { id: "a", text: "Da", correct: false },
      {
        id: "b",
        text: "Nu, ele sunt de unică folosință și nu reciclabile",
        correct: true,
      },
    ],
  },
  {
    id: "car-tire-recycling",
    title: "Reciclarea anvelopelor",
    question: "Sunt anvelopele de mașină reciclabile?",
    answers: [
      {
        id: "a",
        text: "Da, prin procese specializate de reciclare",
        correct: true,
      },
      {
        id: "b",
        text: "Nu, ele sunt tratate ca deșeuri nereciclabile",
        correct: false,
      },
    ],
  },
  {
    id: "mixed-material-packaging-recycling",
    title: "Reciclarea ambalajelor mixte",
    question:
      "Pot ambalajele compuse din materiale mixte, cum ar fi cartonul cu elemente de plastic, să fie reciclate?",
    answers: [
      {
        id: "a",
        text: "Da, dar pot necesita separarea materialelor",
        correct: true,
      },
      { id: "b", text: "Nu, nu pot fi reciclate", correct: false },
    ],
  },
  {
    id: "yellow-bin-plastic-metal",
    title: "Reciclarea plasticului și metalului",
    question: "Ce tipuri de deșeuri sunt colectate în pubela galbenă?",
    answers: [
      { id: "a", text: "Doar sticlă și carton", correct: false },
      { id: "b", text: "Plastic și metal", correct: true },
      { id: "c", text: "Deșeuri biodegradabile", correct: false },
      { id: "d", text: "Hârtie și carton", correct: false },
    ],
  },
  {
    id: "blue-bin-paper-cardboard",
    title: "Reciclarea hârtiei și cartonului",
    question: "Ce se întâmplă cu hârtia reciclată?",
    answers: [
      { id: "a", text: "Salvează 17 arbori maturi pe tonă", correct: true },
      { id: "b", text: "Reduce poluarea aerului cu 50%", correct: false },
      { id: "c", text: "Economisește 20% energie", correct: false },
      { id: "d", text: "Scade consumul de apă cu 40%", correct: false },
    ],
  },
  {
    id: "green-bin-glass",
    title: "Reciclarea sticlei",
    question:
      "Ce tip de sticlă nu este acceptat pentru reciclare în pubela verde?",
    answers: [
      { id: "a", text: "Sticle de băuturi", correct: false },
      { id: "b", text: "Borcane", correct: false },
      { id: "c", text: "Sticla de la geamuri și parbrize", correct: true },
      {
        id: "d",
        text: "Ambalaje din sticlă de la produse cosmetice",
        correct: false,
      },
    ],
  },
  {
    id: "brown-bin-biodegradable",
    title: "Deșeurile biodegradabile",
    question:
      "Ce nu trebuie aruncat în pubela maro pentru deșeurile biodegradabile?",
    answers: [
      { id: "a", text: "Resturi de fructe și legume", correct: false },
      { id: "b", text: "Coji de ouă", correct: false },
      { id: "c", text: "Lemn tratat chimic", correct: true },
      { id: "d", text: "Rumeguș", correct: false },
    ],
  },
  {
    id: "black-bin-residual-waste",
    title: "Deșeurile reziduale",
    question: "Ce tip de deșeuri se colectează în pubela neagră?",
    answers: [
      { id: "a", text: "Deșeuri reciclabile", correct: false },
      { id: "b", text: "Deșeuri biodegradabile", correct: false },
      { id: "c", text: "Deșeuri reziduale", correct: true },
      { id: "d", text: "Electronice și electrice", correct: false },
    ],
  },
  {
    id: "aluminum-can-recycling",
    title: "Reciclarea dozelor de aluminiu",
    question: "Ce beneficiu aduce reciclarea unei doze de aluminiu?",
    answers: [
      {
        id: "a",
        text: "Economisește energie pentru 3 ore de televizor",
        correct: true,
      },
      { id: "b", text: "Reduce consumul de apă cu 30%", correct: false },
      { id: "c", text: "Salvează un arbore", correct: false },
      { id: "d", text: "Diminuează emisiile de CO2 cu 20%", correct: false },
    ],
  },
  {
    id: "plastic-bottle-preparation",
    title: "Pregătirea sticlelor din plastic pentru reciclare",
    question:
      "Ce trebuie făcut înainte de a arunca o sticlă din plastic în pubela galbenă?",
    answers: [
      { id: "a", text: "Îndepărtați eticheta", correct: false },
      { id: "b", text: "Scoateți dopul și clătiți-o", correct: true },
      { id: "c", text: "Spărgeți sticla", correct: false },
      { id: "d", text: "Lăsați lichidul în ea", correct: false },
    ],
  },
  {
    id: "non-recyclable-materials",
    title: "Materiale nereciclabile",
    question: "Ce nu se aruncă în pubela pentru reciclare?",
    answers: [
      { id: "a", text: "Sticle de plastic", correct: false },
      {
        id: "b",
        text: "Cutii de vopsele și bidoane cu diluanți",
        correct: true,
      },
      { id: "c", text: "Hârtie și carton", correct: false },
      { id: "d", text: "Borcane de sticlă", correct: false },
    ],
  },
  {
    id: "recycling-process-effectiveness",
    title: "Eficiența procesului de reciclare",
    question:
      "Care este procentul de reciclare în România comparativ cu media europeană?",
    answers: [
      { id: "a", text: "13% față de 45%", correct: true },
      { id: "b", text: "25% față de 50%", correct: false },
      { id: "c", text: "30% față de 60%", correct: false },
      { id: "d", text: "20% față de 40%", correct: false },
    ],
  },
  {
    id: "glass-recycling-features",
    title: "Caracteristicile reciclării sticlei",
    question: "Care este o caracteristică unică a sticlei reciclate?",
    answers: [
      { id: "a", text: "Nu își pierde calitățile", correct: true },
      { id: "b", text: "Se degradează după 5 cicluri", correct: false },
      { id: "c", text: "Schimbă culoarea la reciclare", correct: false },
      { id: "d", text: "Devine mai fragilă", correct: false },
    ],
  },
  {
    id: "plastic-recycling",
    title: "Reciclarea plasticului",
    question: "Ce tipuri de plastic pot fi aruncate în pubela galbenă?",
    answers: [
      { id: "a", text: "Doar PET-uri și pungi din plastic", correct: false },
      { id: "b", text: "Orice tip de plastic", correct: false },
      {
        id: "c",
        text: "Sticle, caserole și alte ambalaje din plastic",
        correct: true,
      },
      { id: "d", text: "Doar jucării din plastic", correct: false },
    ],
  },
  {
    id: "metal-recycling",
    title: "Reciclarea metalelor",
    question: "Ce tipuri de metale pot fi aruncate în pubela galbenă?",
    answers: [
      { id: "a", text: "Doar aluminiu", correct: false },
      { id: "b", text: "Doze de aluminiu și cutii de conservă", correct: true },
      { id: "c", text: "Fier și oțel", correct: false },
      { id: "d", text: "Doar cupru", correct: false },
    ],
  },
  {
    id: "paper-recycling",
    title: "Reciclarea hârtiei",
    question: "Ce tip de hârtie nu este potrivit pentru reciclare?",
    answers: [
      { id: "a", text: "Ziare și reviste", correct: false },
      {
        id: "b",
        text: "Cartonul de la cutii de pizza îmbibate cu ulei",
        correct: true,
      },
      { id: "c", text: "Cărți și caiete", correct: false },
      { id: "d", text: "Ambalaje din hârtie și carton", correct: false },
    ],
  },
  {
    id: "glass-recycling-color",
    title: "Culoarea sticlei la reciclare",
    question: "Influențează culoarea sticlei procesul de reciclare?",
    answers: [
      {
        id: "a",
        text: "Da, numai sticla transparentă poate fi reciclată",
        correct: false,
      },
      {
        id: "b",
        text: "Nu, sticla de orice culoare poate fi reciclată",
        correct: true,
      },
      { id: "c", text: "Doar sticla verde poate fi reciclată", correct: false },
      { id: "d", text: "Sticla colorată nu este reciclabilă", correct: false },
    ],
  },
  {
    id: "biodegradable-waste",
    title: "Deșeurile biodegradabile",
    question: "Ce tip de resturi alimentare sunt permise în pubela maro?",
    answers: [
      { id: "a", text: "Resturi de carne și pește", correct: false },
      { id: "b", text: "Orez, paste și cereale", correct: true },
      { id: "c", text: "Uleiuri și grăsimi", correct: false },
      { id: "d", text: "Produse lactate", correct: false },
    ],
  },
  {
    id: "non-recyclable-glass",
    title: "Sticla nereciclabila",
    question: "Ce tipuri de sticlă nu se pot recicla?",
    answers: [
      { id: "a", text: "Sticle de băuturi", correct: false },
      { id: "b", text: "Damigene", correct: false },
      { id: "c", text: "Sticla de la geamuri și parbrize", correct: true },
      { id: "d", text: "Borcane fără capac", correct: false },
    ],
  },
  {
    id: "preparing-plastic-for-recycling",
    title: "Pregătirea plasticului pentru reciclare",
    question: "Cum trebuie pregătite ambalajele din plastic pentru reciclare?",
    answers: [
      { id: "a", text: "Spălate și uscate", correct: true },
      { id: "b", text: "Colorate pentru identificare", correct: false },
      { id: "c", text: "Desfăcute în bucăți mici", correct: false },
      { id: "d", text: "Încălzite pentru a reduce volumul", correct: false },
    ],
  },
  {
    id: "contaminated-paper-recycling",
    title: "Reciclarea hârtiei contaminate",
    question: "Se pot recicla ambalajele de hârtie și carton contaminate?",
    answers: [
      { id: "a", text: "Da, dacă sunt curățate înainte", correct: false },
      {
        id: "b",
        text: "Nu, dacă sunt contaminate cu ulei sau resturi alimentare",
        correct: true,
      },
      { id: "c", text: "Da, dar numai în centre specializate", correct: false },
      { id: "d", text: "Nu, dacă sunt colorate sau vopsite", correct: false },
    ],
  },
  {
    id: "recycling-benefits",
    title: "Beneficiile reciclării",
    question: "Care este unul dintre principalele beneficii ale reciclării?",
    answers: [
      {
        id: "a",
        text: "Creșterea emisiilor de gaze cu efect de seră",
        correct: false,
      },
      {
        id: "b",
        text: "Reducerea consumului de resurse naturale",
        correct: true,
      },
      { id: "c", text: "Creșterea costurilor de producție", correct: false },
      {
        id: "d",
        text: "Scăderea calității produselor reciclate",
        correct: false,
      },
    ],
  },
  {
    id: "residual-waste-fate",
    title: "Soarta deșeurilor reziduale",
    question: "Unde sunt direcționate deșeurile reziduale?",
    answers: [
      { id: "a", text: "La centre de reciclare", correct: false },
      { id: "b", text: "La groapa de gunoi", correct: true },
      { id: "c", text: "La incineratoare", correct: false },
      { id: "d", text: "Reutilizate în producție", correct: false },
    ],
  },
  {
    id: "recycling-bottle-caps",
    title: "Reciclarea capacelor de sticle",
    question:
      "Ce se întâmplă cu capacele sticlelor din plastic înainte de reciclare?",
    answers: [
      { id: "a", text: "Trebuie să fie atașate la sticlă", correct: false },
      { id: "b", text: "Se aruncă separat", correct: false },
      { id: "c", text: "Trebuie să fie îndepărtate", correct: true },
      {
        id: "d",
        text: "Trebuie să fie curățate și apoi atașate",
        correct: false,
      },
    ],
  },
  {
    id: "recycling-medicine-bottles",
    title: "Reciclarea sticlelor de medicamente",
    question: "Pot fi reciclate sticlele de plastic de la medicamente?",
    answers: [
      { id: "a", text: "Da, fără restricții", correct: false },
      { id: "b", text: "Nu, niciodată", correct: false },
      { id: "c", text: "Doar dacă sunt curățate și goale", correct: true },
      { id: "d", text: "Da, dar numai în centre specializate", correct: false },
    ],
  },
  {
    id: "recycling-tetra-pack",
    title: "Reciclarea ambalajelor Tetra Pak",
    question: "Sunt ambalajele de tip Tetra Pak reciclabile în pubela galbenă?",
    answers: [
      { id: "a", text: "Da, fără condiții", correct: true },
      { id: "b", text: "Nu, acestea nu sunt reciclabile", correct: false },
      { id: "c", text: "Doar dacă sunt spălate și uscate", correct: false },
      { id: "d", text: "Doar în anumite zone geografice", correct: false },
    ],
  },
  {
    id: "recycling-food-contaminated",
    title: "Reciclarea ambalajelor contaminate cu alimente",
    question: "Pot fi reciclate ambalajele murdare cu resturi de alimente?",
    answers: [
      { id: "a", text: "Da, fără probleme", correct: false },
      { id: "b", text: "Nu, acestea trebuie să fie curate", correct: true },
      { id: "c", text: "Da, dar numai în centre specializate", correct: false },
      {
        id: "d",
        text: "Doar dacă resturile de alimente sunt uscate",
        correct: false,
      },
    ],
  },
  {
    id: "recycling-electronic-waste",
    title: "Reciclarea deșeurilor electronice",
    question: "Unde trebuie să fie aruncate deșeurile electronice?",
    answers: [
      { id: "a", text: "În pubela neagră", correct: false },
      { id: "b", text: "În pubela galbenă", correct: false },
      { id: "c", text: "În centrele specializate de colectare", correct: true },
      { id: "d", text: "La marginea drumului", correct: false },
    ],
  },
  {
    id: "recycling-battery-disposal",
    title: "Aruncarea bateriilor",
    question: "Cum trebuie eliminate bateriile uzate?",
    answers: [
      {
        id: "a",
        text: "În pubela neagră pentru deșeuri reziduale",
        correct: false,
      },
      {
        id: "b",
        text: "În pubela galbenă pentru plastic și metal",
        correct: false,
      },
      { id: "c", text: "În punctele de colectare specializate", correct: true },
      {
        id: "d",
        text: "În pubela albastră pentru hârtie și carton",
        correct: false,
      },
    ],
  },
  {
    id: "recycling-plastic-film",
    title: "Reciclarea foliei de plastic",
    question: "Este folia de plastic reciclabilă?",
    answers: [
      { id: "a", text: "Da, în toate cazurile", correct: false },
      { id: "b", text: "Nu, este nereciclabilă", correct: false },
      { id: "c", text: "Da, dar numai în anumite condiții", correct: true },
      { id: "d", text: "Numai în centre specializate", correct: false },
    ],
  },
  {
    id: "recycling-compost",
    title: "Compostarea",
    question: "Ce tip de deșeuri este potrivit pentru compostare?",
    answers: [
      { id: "a", text: "Orice tip de deșeu organic", correct: false },
      { id: "b", text: "Doar resturi de fructe și legume", correct: false },
      {
        id: "c",
        text: "Resturi de mâncare, zaț de cafea și coji de ouă",
        correct: true,
      },
      { id: "d", text: "Plastic biodegradabil", correct: false },
    ],
  },
  {
    id: "recycling-paint-containers",
    title: "Reciclarea containerelor de vopsea",
    question: "Pot fi reciclate containerele de vopsea?",
    answers: [
      { id: "a", text: "Da, fără condiții", correct: false },
      { id: "b", text: "Nu, niciodată", correct: true },
      { id: "c", text: "Doar dacă sunt goale și curate", correct: false },
      { id: "d", text: "Da, dar numai în centre specializate", correct: false },
    ],
  },
  {
    id: "recycling-oil-contaminated",
    title: "Reciclarea materialelor contaminate cu ulei",
    question: "Pot fi reciclate materialele contaminate cu ulei?",
    answers: [
      { id: "a", text: "Da, fără restricții", correct: false },
      { id: "b", text: "Nu, nu se pot recicla", correct: true },
      { id: "c", text: "Doar dacă uleiul este vegetal", correct: false },
      {
        id: "d",
        text: "Numai în centre specializate de reciclare",
        correct: false,
      },
    ],
  },
  {
    id: "recycling-plastic-toys",
    title: "Reciclarea jucăriilor din plastic",
    question: "Sunt jucăriile din plastic reciclabile în pubela galbenă?",
    answers: [
      { id: "a", text: "Da, fără restricții", correct: false },
      {
        id: "b",
        text: "Nu, nu sunt reciclabile în pubela galbenă",
        correct: true,
      },
      {
        id: "c",
        text: "Doar dacă sunt demontate în bucăți mici",
        correct: false,
      },
      { id: "d", text: "Da, dar numai dacă sunt curățate", correct: false },
    ],
  },
  {
    id: "recycling-polystyrene",
    title: "Reciclarea polistirenului",
    question:
      "Este polistirenul, cum ar fi cel folosit pentru izolarea clădirilor, reciclabil?",
    answers: [
      { id: "a", text: "Da, în toate cazurile", correct: false },
      { id: "b", text: "Nu, nu este reciclabil", correct: true },
      { id: "c", text: "Doar în anumite centre specializate", correct: false },
      { id: "d", text: "Da, dar trebuie spălat întâi", correct: false },
    ],
  },
  {
    id: "recycling-ceramics",
    title: "Reciclarea ceramicii și porțelanului",
    question: "Pot fi reciclate obiectele din ceramică și porțelan?",
    answers: [
      { id: "a", text: "Da, în pubela galbenă", correct: false },
      { id: "b", text: "Da, dar numai în centre specializate", correct: false },
      {
        id: "c",
        text: "Nu, aceste materiale nu sunt reciclabile",
        correct: true,
      },
      {
        id: "d",
        text: "Doar dacă sunt curățate și fără defecte",
        correct: false,
      },
    ],
  },
  {
    id: "recycling-foil-preparation",
    title: "Pregătirea foliei de aluminiu pentru reciclare",
    question: "Cum trebuie pregătită folia de aluminiu pentru reciclare?",
    answers: [
      { id: "a", text: "Trebuie îndoită și rulată în bile", correct: false },
      { id: "b", text: "Curățată și aplatizată", correct: true },
      { id: "c", text: "Aruncată așa cum este", correct: false },
      { id: "d", text: "Tăiată în bucăți mici", correct: false },
    ],
  },
  {
    id: "recycling-light-bulbs",
    title: "Reciclarea becurilor",
    question: "Cum trebuie reciclate becurile uzate?",
    answers: [
      { id: "a", text: "În pubela galbenă", correct: false },
      { id: "b", text: "În punctele de colectare specializate", correct: true },
      { id: "c", text: "În pubela neagră", correct: false },
      { id: "d", text: "La marginea drumului", correct: false },
    ],
  },
  {
    id: "recycling-glass-jars-preparation",
    title: "Pregătirea borcanelor de sticlă pentru reciclare",
    question:
      "Ce trebuie făcut cu borcanele de sticlă înainte de a le recicla?",
    answers: [
      { id: "a", text: "Spălate și etichetele îndepărtate", correct: true },
      { id: "b", text: "Zdrobite pentru a economisi spațiu", correct: false },
      { id: "c", text: "Capacele lăsate atașate", correct: false },
      { id: "d", text: "Colorate pentru identificare", correct: false },
    ],
  },
  {
    id: "recycling-paint-contaminated",
    title: "Reciclarea ambalajelor contaminate cu vopsea",
    question: "Pot fi reciclate ambalajele contaminate cu vopsea?",
    answers: [
      { id: "a", text: "Da, în orice condiții", correct: false },
      {
        id: "b",
        text: "Nu, acestea sunt considerate deșeuri periculoase",
        correct: true,
      },
      { id: "c", text: "Doar dacă sunt goale și uscate", correct: false },
      { id: "d", text: "În centre specializate de reciclare", correct: false },
    ],
  },
  {
    id: "recycling-plastic-bags",
    title: "Reciclarea pungilor de plastic",
    question: "Sunt pungile de plastic reciclabile?",
    answers: [
      { id: "a", text: "Da, în toate cazurile", correct: false },
      {
        id: "b",
        text: "Da, dar numai dacă sunt curate și uscate",
        correct: true,
      },
      { id: "c", text: "Nu, sunt nereciclabile", correct: false },
      { id: "d", text: "Doar în anumite zone geografice", correct: false },
    ],
  },
  {
    id: "recycling-guidelines-importance",
    title: "Importanța respectării ghidurilor de reciclare",
    question:
      "De ce este important să respectăm ghidurile locale de reciclare?",
    answers: [
      {
        id: "a",
        text: "Pentru a crește eficiența procesului de reciclare",
        correct: true,
      },
      { id: "b", text: "Doar pentru a evita amenzi", correct: false },
      {
        id: "c",
        text: "Pentru a ocupa mai puțin spațiu în containere",
        correct: false,
      },
      {
        id: "d",
        text: "Nu este important, toate deșeurile sunt tratate la fel",
        correct: false,
      },
    ],
  },
  {
    id: "recycling-flammable-materials",
    title: "Reciclarea materialelor inflamabile",
    question: "Cum trebuie eliminate materialele inflamabile?",
    answers: [
      { id: "a", text: "În pubela galbenă", correct: false },
      {
        id: "b",
        text: "În punctele de colectare specializate pentru deșeuri periculoase",
        correct: true,
      },
      { id: "c", text: "În pubela neagră", correct: false },
      { id: "d", text: "La marginea drumului", correct: false },
    ],
  },
];
