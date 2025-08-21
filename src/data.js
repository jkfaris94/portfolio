export const profile = {
  name: "Johnny Faris",
  role: "Full‑Stack Developer",
  tagline:
    "Ex‑MMA fighter & personal trainer turned engineer — disciplined, user‑centered, and shipping clean PERN/MERN apps.",
  location: "Los Angeles, CA",
  phone: "253-906-5208",
  email: "JKFaris@gmail.com",
  website: "https://JohnnyFaris.com",
  github: "https://github.com/jkfaris94",
  linkedin: "https://www.linkedin.com/in/johnny-faris/",
  resume: "/Johnny_Faris_resume.pdf" // put resume.pdf in /public
};

export const projects = [
  {
    title: "Recipe Tracker Application",
    org: "Chegg Skills",
    date: "07/2025",
    description:
      "React app to save and organize recipe information. Emphasized single‑responsibility components and clean state flows.",
    stack: ["React", "HTML5", "CSS", "Bootstrap"],
    links: { live: "https://bakery-inventory-manager.onrender.com", repo: "https://github.com/jkfaris94/bakery-inventory-manager" },
    image: "/public/recipe.png" // optional screenshot in /public
  },
  {
    title: "Movie Database Application",
    org: "Chegg Skills",
    date: "06/2025",
    description:
      "Backend for a movie site with search, theaters, and reviews. CRUD for reviews, router/controller architecture, Knex data layer.",
    stack: ["Node.js", "Express", "Knex", "PostgreSQL"],
    links: { live: "", repo: "https://github.com/jkfaris94/WeLoveMovies-back-end" },
    image: "/welovemovies.png"
  },
  {
    title: "Flashcard Application",
    org: "Chegg Skills",
    date: "04/2025",
    description:
      "React flashcard learning app with full CRUD for decks/cards, React Router navigation, and form handling.",
    stack: ["React", "React Router", "Bootstrap"],
    links: { live: "", repo: "https://github.com/jkfaris94/Flashcard-O-Matic" },
    image: "/flashcard.png"
  }
];

export const experience = [
  {
    company: "Champion Lifestyle LLC",
    location: "Los Angeles, CA",
    role: "Owner / Personal Trainer / Developer",
    dates: "06/2016 – Present",
    bullets: [
      "Designed and maintained fitness site with WordPress + custom JS tools.",
      "Building online training software for personalized programs and client progress.",
      "Delivered client‑focused coaching; applied UX improvements for engagement."
    ]
  }
];

export const education = [
  {
    school: "Harvard University (edX – CS50x)",
    credential: "Certificate, Introduction to Computer Science",
    date: "11/2024",
    bullets: ["C, Python, SQL, JavaScript, algorithms & data structures."]
  },
  {
    school: "Chegg Skills",
    credential: "Certificate, Full‑Stack Software Engineer (est. 09/2025)",
    date: "09/2025 (est.)",
    bullets: [
      "JavaScript, HTML5, CSS3, React Native, Node.js, PostgreSQL, MongoDB, REST APIs, algorithms, data structures."
    ]
  }
];