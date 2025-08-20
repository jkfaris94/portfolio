import { useMemo } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Globe, Phone, Download, ExternalLink, MapPin, Code2, Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// ──────────────────────────────────────────────────────────────
// ✨ QUICK EDIT ZONE — Update these objects to keep your site fresh
// ──────────────────────────────────────────────────────────────
const PROFILE = {
  name: "Johnny Faris",
  role: "Full‑Stack Developer",
  tagline:
    "Ex‑MMA fighter & personal trainer turned engineer — disciplined, user‑centered, and shipping clean PERN/MERN apps.",
  location: "Los Angeles, CA",
  phone: "253-906-5208",
  email: "Johnny@ChampLife.fit",
  website: "https://JohnnyFaris.com",
  links: {
    github: "https://github.com/JohnnyFaris", // ← swap with your actual URL
    linkedin: "https://www.linkedin.com/in/johnnyfaris", // ← swap with your actual URL
    resume: "/JohnnyFaris-Resume.pdf", // ← drop a PDF with this name in the public folder
  },
};

const SKILLS = {
  languages: ["JavaScript", "TypeScript (optional)", "SQL", "HTML5", "CSS3"],
  frontend: ["React", "React Router", "Bootstrap", "Tailwind"],
  backend: ["Node.js", "Express", "REST APIs", "Knex", "MongoDB", "PostgreSQL"],
  tools: ["VS Code", "Git", "Postman", "DBeaver", "WordPress"],
  soft: [
    "Problem‑solving",
    "Project planning (LLC owner)",
    "Client alignment",
    "Resource & schedule management",
    "Graphic design",
  ],
};

const PROJECTS = [
  {
    title: "Recipe Tracker Application",
    org: "Chegg Skills",
    date: "07/2025",
    description:
      "React app to save and organize recipe information. Emphasized single‑responsibility components and clean state flows.",
    stack: ["React", "HTML5", "CSS", "Bootstrap"],
    links: {
      live: "#", // ← paste deployed URL
      repo: "#", // ← paste GitHub repo
    },
  },
  {
    title: "Movie Database Application",
    org: "Chegg Skills",
    date: "06/2025",
    description:
      "Backend for a movie site with search, theaters, and reviews. CRUD for reviews, router/controller architecture, Knex data layer.",
    stack: ["Node.js", "Express", "Knex", "PostgreSQL"],
    links: { live: "#", repo: "#" },
  },
  {
    title: "Flashcard Application",
    org: "Chegg Skills",
    date: "04/2025",
    description:
      "React flashcard learning app with full CRUD for decks/cards, React Router navigation, and form handling for interactivity.",
    stack: ["React", "React Router", "Bootstrap"],
    links: { live: "#", repo: "#" },
  },
];

const EXPERIENCE = [
  {
    company: "Champion Lifestyle LLC",
    location: "Los Angeles, CA",
    role: "Owner / Personal Trainer / Developer",
    dates: "06/2016 – Present",
    bullets: [
      "Designed and maintained fitness site with WordPress + custom JS tools.",
      "Building online training software for personalized programs and client progress.",
      "Delivered client‑focused coaching; applied UX improvements for engagement.",
    ],
  },
];

const EDUCATION = [
  {
    school: "Harvard University (edX – CS50x)",
    credential: "Certificate, Introduction to Computer Science",
    date: "11/2024",
    bullets: [
      "C, Python, SQL, JavaScript, algorithms & data structures.",
    ],
  },
  {
    school: "Chegg Skills",
    credential: "Certificate, Full‑Stack Software Engineer (est. 09/2025)",
    date: "09/2025 (est.)",
    bullets: [
      "JavaScript, HTML5, CSS3, React Native, Node.js, PostgreSQL, MongoDB, REST APIs, algorithms, data structures.",
    ],
  },
];

// ──────────────────────────────────────────────────────────────
// 🧩 Small helpers
// ──────────────────────────────────────────────────────────────
const Section = ({ id, icon: Icon, title, children }) => (
  <section id={id} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 rounded-2xl bg-muted border"><Icon className="h-5 w-5" /></div>
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
    </div>
    {children}
  </section>
);

const Pill = ({ children }) => (
  <Badge variant="secondary" className="rounded-full px-3 py-1 text-sm">{children}</Badge>
);

// ──────────────────────────────────────────────────────────────
// 🌟 Page
// ──────────────────────────────────────────────────────────────
export default function Portfolio() {
  const skillGroups = useMemo(
    () => [
      { label: "Languages", list: SKILLS.languages },
      { label: "Frontend", list: SKILLS.frontend },
      { label: "Backend", list: SKILLS.backend },
      { label: "Tools", list: SKILLS.tools },
      { label: "Professional", list: SKILLS.soft },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 text-foreground">
      {/* Header / Hero */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight">{PROFILE.name}</a>
          <nav className="hidden sm:flex gap-6 text-sm">
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#education" className="hover:underline">Education</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={PROFILE.links.github} aria-label="GitHub" target="_blank" rel="noreferrer"><Button size="icon" variant="outline"><Github className="h-4 w-4" /></Button></a>
            <a href={PROFILE.links.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Button size="icon" variant="outline"><Linkedin className="h-4 w-4" /></Button></a>
            <a href={`mailto:${PROFILE.email}`} aria-label="Email"><Button size="icon" variant="default"><Mail className="h-4 w-4" /></Button></a>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <div id="top" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <MapPin className="h-4 w-4" /> {PROFILE.location}
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
            {PROFILE.name} — <span className="text-primary">{PROFILE.role}</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl">{PROFILE.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={PROFILE.links.resume} target="_blank" rel="noreferrer"><Button><Download className="h-4 w-4 mr-2"/>Download Resume</Button></a>
            <a href={PROFILE.website} target="_blank" rel="noreferrer"><Button variant="outline"><Globe className="h-4 w-4 mr-2"/>JohnnyFaris.com</Button></a>
            <a href={`tel:${PROFILE.phone.replace(/[^\d]/g, "")}`}><Button variant="ghost"><Phone className="h-4 w-4 mr-2"/>{PROFILE.phone}</Button></a>
          </div>
        </motion.div>
      </div>

      {/* Projects */}
      <Section id="projects" icon={Code2} title="Projects">
        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((p, idx) => (
            <Card key={idx} className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.org} • {p.date}</p>
                  </div>
                  <div className="flex gap-2">
                    {p.links.live && p.links.live !== "#" && (
                      <a href={p.links.live} target="_blank" rel="noreferrer"><Button size="sm" variant="default">Live <ExternalLink className="h-3.5 w-3.5 ml-1"/></Button></a>
                    )}
                    {p.links.repo && p.links.repo !== "#" && (
                      <a href={p.links.repo} target="_blank" rel="noreferrer"><Button size="sm" variant="outline">Code <Github className="h-3.5 w-3.5 ml-1"/></Button></a>
                    )}
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s, i) => (
                    <Pill key={i}>{s}</Pill>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" icon={Briefcase} title="Experience">
        <div className="space-y-6">
          {EXPERIENCE.map((job, idx) => (
            <Card key={idx} className="rounded-2xl">
              <CardContent className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold">{job.company}</h3>
                    <p className="text-sm text-muted-foreground">{job.location}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{job.dates}</p>
                </div>
                <p className="mt-2 font-medium">{job.role}</p>
                <ul className="mt-3 list-disc list-inside text-sm text-muted-foreground space-y-1">
                  {job.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" icon={Code2} title="Skills">
        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((g, idx) => (
            <Card key={idx} className="rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">{g.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.list.map((s, i) => (
                    <Pill key={i}>{s}</Pill>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" icon={GraduationCap} title="Education">
        <div className="space-y-6">
          {EDUCATION.map((ed, idx) => (
            <Card key={idx} className="rounded-2xl">
              <CardContent className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold">{ed.school}</h3>
                    <p className="text-sm text-muted-foreground">{ed.credential}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{ed.date}</p>
                </div>
                {ed.bullets?.length ? (
                  <ul className="mt-3 list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {ed.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" icon={Mail} title="Contact">
        <Card className="rounded-2xl">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">Let’s build something.</h3>
                <p className="text-sm text-muted-foreground">Open to full‑time roles, freelance, or collabs.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <a href={`mailto:${PROFILE.email}`}><Button><Mail className="h-4 w-4 mr-2"/>Email</Button></a>
                <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer"><Button variant="outline"><Linkedin className="h-4 w-4 mr-2"/>LinkedIn</Button></a>
                <a href={PROFILE.links.github} target="_blank" rel="noreferrer"><Button variant="ghost"><Github className="h-4 w-4 mr-2"/>GitHub</Button></a>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* Footer */}
      <footer className="py-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {PROFILE.name}. Built with React + Tailwind.
      </footer>
    </div>
  );
}
