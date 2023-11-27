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
];
