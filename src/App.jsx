import { useMemo } from "react";
import { profile, projects, experience, education } from "./data";

const Section = ({ id, title, children }) => (
  <section id={id} style={{ maxWidth: 960, margin: "0 auto", padding: "48px 16px" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
      <div className="chip">★</div>
      <h2 className="h2">{title}</h2>
    </div>
    {children}
  </section>
);

const Pill = ({ children }) => <span className="pill">{children}</span>;

export default function App() {
  const links = useMemo(
    () => [
      { label: "GitHub", href: profile.github },
      { label: "LinkedIn", href: profile.linkedin },
      { label: "Email", href: `mailto:${profile.email}` }
    ],
    []
  );

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <a href="#top" className="logo">{profile.name}</a>
          <nav className="nav">
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="actions">
            {links.map((l) => (
              <a key={l.label} className="btn btn-outline" target="_blank" rel="noreferrer" href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Hero */}
      <div id="top" className="container hero">
        <p className="muted">{profile.location}</p>
        <h1 className="h1">
          {profile.name} — <span className="primary">{profile.role}</span>
        </h1>
        <p className="lead">{profile.tagline}</p>
        <div className="stack">
          <a className="btn btn-primary" href={profile.resume} download="Johnny_Faris_resume.pdf" rel="noreferrer">
            Download Resume
          </a>
          <a className="btn btn-outline" href={profile.website} target="_blank" rel="noreferrer">
            JohnnyFaris.com
          </a>
          <a className="btn btn-ghost" href={`tel:${profile.phone.replace(/[^\d]/g, "")}`}>
            {profile.phone}
          </a>
        </div>
      </div>

      {/* Projects */}
<Section id="projects" title="Projects">
      <div className="grid">
        {projects.map((p, i) => (
          <div key={i} className="card">
            <div className="card-body">
              {/* Add image above card-head */}
              {p.image && (
                <img
                  src={p.image}
                  alt={`${p.title} screenshot`}
                  className="card-image"
                  style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                />
              )}
              <div className="card-head">
                <div>
                  <h3 className="h3">{p.title}</h3>
                  <p className="muted">{p.org} • {p.date}</p>
                </div>
                <div className="stack">
                  {p.links.live ? (
                    <a className="btn btn-primary" href={p.links.live} target="_blank" rel="noreferrer">
                      Live
                    </a>
                  ) : null}
                  {p.links.repo ? (
                    <a className="btn btn-outline" href={p.links.repo} target="_blank" rel="noreferrer">
                      Code
                    </a>
                  ) : null}
                </div>
              </div>
              <p className="muted">{p.description}</p>
              <div className="tags">
                {p.stack.map((s, j) => (
                  <Pill key={j}>{s}</Pill>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <div className="vstack">
          {experience.map((job, i) => (
            <div key={i} className="card">
              <div className="card-body">
                <div className="card-head">
                  <div>
                    <h3 className="h3">{job.company}</h3>
                    <p className="muted">{job.location}</p>
                  </div>
                  <p className="muted">{job.dates}</p>
                </div>
                <p className="semi">{job.role}</p>
                <ul className="bullets">
                  {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="grid">
          {[
            { label: "Languages", list: ["JavaScript", "SQL", "HTML5", "CSS3"] },
            { label: "Frontend", list: ["React", "React Router", "Bootstrap", "Tailwind"] },
            { label: "Backend", list: ["Node.js", "Express", "REST APIs", "Knex", "MongoDB", "PostgreSQL"] },
            { label: "Tools", list: ["VS Code", "Git", "Postman", "DBeaver", "WordPress"] },
            { label: "Professional", list: ["Problem‑solving", "Project planning (LLC owner)", "Client alignment", "Schedule & resource mgmt", "Graphic design"] }
          ].map((g, i) => (
            <div key={i} className="card">
              <div className="card-body">
                <h4 className="semi">{g.label}</h4>
                <div className="tags">
                  {g.list.map((s, j) => <Pill key={j}>{s}</Pill>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education">
        <div className="vstack">
          {education.map((ed, i) => (
            <div key={i} className="card">
              <div className="card-body">
                <div className="card-head">
                  <div>
                    <h3 className="h3">{ed.school}</h3>
                    <p className="muted">{ed.credential}</p>
                  </div>
                  <p className="muted">{ed.date}</p>
                </div>
                {ed.bullets?.length ? (
                  <ul className="bullets">{ed.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="card">
          <div className="card-body contact">
            <div>
              <h3 className="h3">Let’s build something.</h3>
              <p className="muted">Open to full‑time roles, freelance, or collabs.</p>
            </div>
            <div className="stack">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>Email</a>
              <a className="btn btn-outline" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </Section>

      <footer className="footer">
        © {new Date().getFullYear()} {profile.name}. jkfaris@gmail.com. Built with React + Vite.
      </footer>
    </div>
  );
}