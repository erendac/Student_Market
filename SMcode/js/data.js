// js/data.js
// Central list of everything sold on StudentMarket.
// Add new items here later for notes, tutoring, uniforms —
// just follow the same pattern used for textbooks below.
// Image paths are written relative to the ROOT folder (StudentMarketplace/),
// since details.html lives at the root.

const SERVICES = [
  {
    id: "textbooks-1",
    category: "textbooks",
    name: "Biologjia 11",
    provider: "Arta",
    price: 8,
    image: "images/biologjia.png",
    description: "Second-hand Biology 11 textbook, good condition."
  },
  {
    id: "textbooks-2",
    category: "textbooks",
    name: "Matematika 10",
    provider: "Leon",
    price: 10,
    image: "images/math12.jpg",
    description: "Math 10 textbook, lightly used, no missing pages."
  },
  {
    id: "textbooks-3",
    category: "textbooks",
    name: "Physics 12",
    provider: "Sara",
    price: 11,
    image: "images/fizikaa.jpg",
    description: "Physics 12 textbook, great condition."
  },
  {
    id: "textbooks-4",
    category: "textbooks",
    name: "Gjeografia 11",
    provider: "Blend",
    price: 7,
    image: "images/g3o.jpg",
    description: "Geography 11 textbook."
  },
  {
    id: "notes-physics-electric",
    category: "notes",
    name: "Fizike - Potenciali Elektrik",
    provider: "Rita",
    price: 4,
    image: "images/phys.webp",
    description: "Physics notes on electric potential, handwritten and organized."
  },
  {
    id: "notes-math-integrals",
    category: "notes",
    name: "Matematike - Integralet",
    provider: "Olsa",
    price: 2,
    image: "images/notes.jpg",
    description: "Math notes covering integrals, with worked examples."
  },
  {
    id: "notes-geography",
    category: "notes",
    name: "Histori - Lufta I Botërore",
    provider: "Rini",
    price: 4.30,
    image: "images/histori.jpg",
    description: "History notes covering World War I."
  },
  {
    id: "tutoring-math",
    category: "tutoring",
    name: "High School Math",
    provider: "Student 1",
    price: 5,
    image: "images/tutoring2.jpg",
    description: "Tutoring in high school math, per hour."
  },
  {
    id: "tutoring-chemistry",
    category: "tutoring",
    name: "Middle School Chemistry",
    provider: "Student 2",
    price: 3,
    image: "images/tutoring3.jpg",
    description: "Tutoring in middle school chemistry, per hour."
  },
  {
    id: "tutoring-english",
    category: "tutoring",
    name: "College Level English",
    provider: "Student 3",
    price: 7,
    image: "images/tutoring4.jpg",
    description: "Tutoring in college level English, per hour."
  },
  {
    id: "uniform-girls",
    category: "uniforms",
    name: "Girls Uniform full set",
    provider: "Mira",
    price: 65,
    image: "images/uniform1.jpg",
    description: "Full set girls school uniform, second-hand."
  },
  {
    id: "uniform-shirt",
    category: "uniforms",
    name: "School Shirt",
    provider: "Era",
    price: 12,
    image: "images/uniform2.avif",
    description: "School uniform shirt, second-hand."
  },
  {
    id: "uniform-blazer",
    category: "uniforms",
    name: "HighSchool Senior Blazer",
    provider: "Don",
    price: 20,
    image: "images/uniform3.avif",
    description: "High school senior blazer, second-hand."
  },
  {
    id: "uniform-sports",
    category: "uniforms",
    name: "Sports Uniform",
    provider: "Blend",
    price: 15,
    image: "images/uniform4.avif",
    description: "School sports uniform, second-hand."
  }
];

// Providers for the provider dropdown panel (used on provider.html later).
const PROVIDERS = ["Arta", "Leon", "Sara", "Blend", "Rita", "Olsa", "Rini", "Student 1", "Student 2", "Student 3", "Mira", "Era", "Don"];

// ------- Shared helper functions -------

function getServiceById(id) {
  return SERVICES.find(function (s) { return s.id === id; });
}

function getOrders() {
  return JSON.parse(localStorage.getItem("orders")) || [];
}

function saveOrders(orders) {
  localStorage.setItem("orders", JSON.stringify(orders));
}

function generateOrderId() {
  return "order-" + Date.now() + "-" + Math.floor(Math.random() * 1000);
}