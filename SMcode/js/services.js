const studentServices = [
  {
    id: "tutoring-math",
    category: "Tutoring",
    name: "High School Math",
    providerLabel: "Tutor",
    provider: "Student 1",
    price: 5,
    unit: "/hour",
    image: "images/tutoring.png",
    description: "Math tutoring for high school students who need help with exercises, homework and exam preparation."
  },
  {
    id: "tutoring-chemistry",
    category: "Tutoring",
    name: "Middle School Chemistry",
    providerLabel: "Tutor",
    provider: "Student 2",
    price: 3,
    unit: "/hour",
    image: "images/tutoring.png",
    description: "Simple chemistry lessons for middle school topics, formulas and practice questions."
  },
  {
    id: "tutoring-english",
    category: "Tutoring",
    name: "College English",
    providerLabel: "Tutor",
    provider: "Student 3",
    price: 7,
    unit: "/hour",
    image: "images/tutoring.png",
    description: "English support for essays, speaking practice, grammar and college-level reading tasks."
  },
  {
    id: "textbook-biology-11",
    category: "Textbooks",
    name: "Biologjia 11",
    providerLabel: "Sold by",
    provider: "Arta",
    price: 8,
    unit: "",
    image: "images/biologjia.png",
    description: "Second-hand Biology 11 textbook in good condition."
  },
  {
    id: "textbook-math-12",
    category: "Textbooks",
    name: "Matematika 12",
    providerLabel: "Sold by",
    provider: "Leon",
    price: 10,
    unit: "",
    image: "images/matematika12.jpg",
    description: "Used Mathematics 12 textbook for lessons, examples and exercises."
  },
  {
    id: "textbook-physics-12",
    category: "Textbooks",
    name: "Fizika 12",
    providerLabel: "Sold by",
    provider: "Sara",
    price: 11,
    unit: "",
    image: "images/fizikaa.jpg",
    description: "Physics 12 textbook for school practice and exam preparation."
  },
  {
    id: "textbook-literature-12",
    category: "Textbooks",
    name: "Letersia 12",
    providerLabel: "Sold by",
    provider: "Blend",
    price: 7,
    unit: "",
    image: "images/letersia12.jpg",
    description: "Literature 12 textbook with school reading material."
  },
  {
    id: "notes-geography",
    category: "Notes",
    name: "Gjeografi - Toka",
    providerLabel: "Shared by",
    provider: "Rini",
    price: 4.3,
    unit: "",
    image: "images/g3o.jpg",
    description: "Geography notes about Earth, useful for revision and homework."
  },
  {
    id: "notes-math-integrals",
    category: "Notes",
    name: "Matematike - integralet",
    providerLabel: "Shared by",
    provider: "Olsa",
    price: 2,
    unit: "",
    image: "images/notes.jpg",
    description: "Math notes focused on integrals, examples and short explanations."
  },
  {
    id: "notes-physics-electric",
    category: "Notes",
    name: "Fizike - Potenciali Elektrik",
    providerLabel: "Shared by",
    provider: "Rita",
    price: 4,
    unit: "",
    image: "images/phys.webp",
    description: "Physics notes for electric potential and related exercises."
  },
  {
    id: "uniform-school",
    category: "Uniforms",
    name: "School Uniform",
    providerLabel: "Seller",
    provider: "Arbnor",
    price: 15,
    unit: "",
    image: "images/uniform1.jpg",
    description: "Second-hand school uniform at an affordable price."
  },
  {
    id: "uniform-shirt",
    category: "Uniforms",
    name: "School Shirt",
    providerLabel: "Seller",
    provider: "Era",
    price: 12,
    unit: "",
    image: "images/uniform2.webp",
    description: "School shirt in good condition."
  },
  {
    id: "uniform-blazer",
    category: "Uniforms",
    name: "School Blazer",
    providerLabel: "Seller",
    provider: "Sara",
    price: 20,
    unit: "",
    image: "images/uniform3.jpg",
    description: "School blazer for students who need a replacement uniform piece."
  },
  {
    id: "uniform-sports",
    category: "Uniforms",
    name: "Sports Uniform",
    providerLabel: "Seller",
    provider: "Blend",
    price: 10,
    unit: "",
    image: "images/uniform4.webp",
    description: "Sports uniform for school activities."
  }
];

function getServiceById(id) {
  return studentServices.find((service) => service.id === id);
}
