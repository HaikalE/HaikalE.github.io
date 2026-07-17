import React, { useEffect, useState } from "react";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiBookOpen,
  FiBriefcase,
  FiCheck,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiMenu,
  FiX,
} from "react-icons/fi";
import "./App.css";

const projects = [
  {
    index: "01",
    title: "Netflix Transcript Collector",
    type: "Browser extension",
    description:
      "A Chrome extension that detects TTML subtitle files, turns them into timestamped transcripts, and lets users jump back to the corresponding scene.",
    stack: ["JavaScript", "Chrome APIs", "Service Workers"],
    href: "https://github.com/HaikalE/auto-transcript-collector",
    image: "/assets/images/project-netflix.png",
    imageAlt: "Netflix Transcript Collector monitoring dashboard",
  },
  {
    index: "02",
    title: "YouTube Trending Data Pipeline",
    type: "Portfolio data project",
    description:
      "An end-to-end learning project for collecting YouTube API data, scheduling transformations, storing the results, and exploring them through a dashboard.",
    stack: ["Python", "Airflow", "PostgreSQL", "Amazon S3", "Plotly Dash"],
    href: "https://github.com/HaikalE/youtube-data-engineering",
    image: "/assets/images/project-youtube.png",
    imageAlt: "YouTube Trending Analysis dashboard with metrics and charts",
  },
  {
    index: "03",
    title: "Chess Analyzer",
    type: "Web application",
    description:
      "A React interface for importing PGN games, reviewing positions, and running client-side Stockfish analysis with move-by-move navigation.",
    stack: ["React", "Stockfish", "Chess.js", "Web Workers"],
    href: "https://github.com/HaikalE/React-Chess-Analyze",
    image: "/assets/images/project-chess.png",
    imageAlt: "Chess Analyzer interface with chessboard and PGN analysis panel",
  },
  {
    index: "04",
    title: "Kanban Board",
    type: "Full-stack project",
    description:
      "A task board built to practise front-end state, API design, relational data, authentication, and real-time synchronization.",
    stack: ["React", "Node.js", "PostgreSQL", "WebSockets"],
    href: "https://github.com/HaikalE/Kanban-Board-Frontend",
  },
  {
    index: "05",
    title: "Secure Messaging Prototype",
    type: "Academic software project",
    description:
      "An Android and Node.js prototype used to study message encryption with AES-256 and RSA CRT, later developed into an IEEE conference paper.",
    stack: ["Kotlin", "Node.js", "AES-256", "RSA CRT"],
    href: "https://github.com/HaikalE/RSA-AES-CHAT-APPLICATION-ANDROID",
  },
];

const skillGroups = [
  {
    label: "Programming",
    items: ["Python", "JavaScript", "SQL", "Java", "Kotlin"],
  },
  {
    label: "Data & reporting",
    items: ["Pandas", "Power BI", "Airflow", "PostgreSQL", "MySQL", "Excel"],
  },
  {
    label: "Software development",
    items: ["React", "Node.js", "REST APIs", "WebSockets", "Git", "Docker"],
  },
  {
    label: "Research interests",
    items: ["Applied cryptography", "Software security", "Technical writing"],
  },
];

const navItems = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Work", "#work"],
  ["Research", "#research"],
  ["Contact", "#contact"],
];

function SectionIntro({ number, eyebrow, title, copy }) {
  return (
    <div className="section-intro reveal">
      <div className="section-kicker">
        <span>{number}</span>
        <span>{eyebrow}</span>
      </div>
      <div>
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Muhammad Haikal Rahman, home">
          MHR<span>.</span>
        </a>

        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-resume" href="/resume.pdf" target="_blank" rel="noreferrer">
            Résumé <FiArrowUpRight aria-hidden="true" />
          </a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-grid">
            <div className="hero-copy reveal is-visible">
              <p className="eyebrow"><span></span> Medan, Indonesia · Open to early-career roles</p>
              <h1>
                I build across <em>software, data,</em> and applied research.
              </h1>
              <p className="hero-lead">
                I’m Muhammad Haikal Rahman, a Computer Science graduate and current Master’s student in Informatics. I’m an early-career generalist who learns by building, testing, and documenting working projects.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  Explore selected work <FiArrowDown aria-hidden="true" />
                </a>
                <a className="text-link" href="/resume.pdf" target="_blank" rel="noreferrer">
                  <FiDownload aria-hidden="true" /> Download résumé
                </a>
              </div>

              <div className="hero-links" aria-label="Profile links">
                <a href="https://github.com/HaikalE" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
                <a href="https://linkedin.com/in/muhammad-haikal-rahman" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
                <a href="/resume.pdf" target="_blank" rel="noreferrer"><FiDownload /> Public résumé</a>
              </div>
            </div>

            <aside className="hero-card reveal is-visible" aria-label="Quick profile">
              <div className="portrait-wrap">
                <img
                  className="portrait-image"
                  src="/assets/images/haikal-headshot-v2.jpg"
                  alt="Muhammad Haikal Rahman wearing a dark suit and striped tie"
                  width="1000"
                  height="1250"
                  fetchPriority="high"
                />
                <div className="portrait-mark" aria-hidden="true">MHR / MEDAN</div>
              </div>
              <div className="status-card">
                <div className="status-dot" aria-hidden="true"></div>
                <div>
                  <span>Currently</span>
                  <strong>Master’s student at ITB</strong>
                  <small>Informatics · since Aug 2025</small>
                </div>
              </div>
            </aside>
          </div>

          <div className="signal-strip reveal is-visible" aria-label="Profile highlights">
            <div><strong>3.88</strong><span>Bachelor’s GPA / 4.00</span></div>
            <div><strong>5 mo.</strong><span>Telkomsel internship</span></div>
            <div><strong>1</strong><span>IEEE conference paper</span></div>
            <div><strong>2</strong><span>Registered copyrights</span></div>
          </div>
        </section>

        <section className="section section-light" id="about">
          <SectionIntro
            number="01"
            eyebrow="About"
            title="A broad foundation, presented without inflated labels."
            copy="My work spans software development, small data workflows, and academic security projects. The common thread is practical problem solving: understand the need, build a usable version, and explain the decisions clearly."
          />

          <div className="about-grid">
            <div className="about-statement reveal">
              <p>
                I don’t position myself as a specialist yet. I’m building depth through graduate study and real projects while staying open to roles where a broad technical base, curiosity, and reliable execution matter.
              </p>
            </div>
            <div className="principles reveal">
              <div><FiCheck /><span><strong>Evidence over adjectives.</strong> Show the code, paper, or outcome.</span></div>
              <div><FiCheck /><span><strong>Clarity over complexity.</strong> Make technical work understandable.</span></div>
              <div><FiCheck /><span><strong>Progress over posturing.</strong> Be honest about what is learned and what comes next.</span></div>
            </div>
          </div>
        </section>

        <section className="section section-dark" id="experience">
          <SectionIntro
            number="02"
            eyebrow="Experience"
            title="Learning through classrooms, teams, and production context."
          />

          <div className="timeline">
            <article className="timeline-row reveal">
              <div className="timeline-period">Aug 2024 — Present</div>
              <div className="timeline-role">
                <FiBookOpen aria-hidden="true" />
                <div>
                  <h3>Teaching Assistant</h3>
                  <p className="organization">Faculty of Computer Science & IT, Universitas Sumatera Utara</p>
                  <p>Support practical sessions in algorithms and cryptography, prepare learning materials, review assignments, and help students work through technical concepts.</p>
                </div>
              </div>
            </article>

            <article className="timeline-row reveal">
              <div className="timeline-period">Feb — Jun 2024</div>
              <div className="timeline-role">
                <FiBriefcase aria-hidden="true" />
                <div>
                  <h3>Data Engineer Intern</h3>
                  <p className="organization">PT Telekomunikasi Selular (Telkomsel) · Medan</p>
                  <p>Helped build a Telegram-based support-ticket workflow and Power BI reporting views while working with operational users to understand data and reporting needs.</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section section-paper" id="work">
          <SectionIntro
            number="03"
            eyebrow="Selected work"
            title="Projects that show how I learn and build."
            copy="A focused selection with real product views—not every repository. Each project represents a different part of my technical range."
          />

          <div className="project-gallery">
            {projects.slice(0, 3).map((project) => (
              <a className="project-card reveal" href={project.href} target="_blank" rel="noreferrer" key={project.title}>
                <div className="project-visual">
                  <img src={project.image} alt={project.imageAlt} loading="lazy" />
                  <span className="project-index">{project.index}</span>
                </div>
                <div className="project-card-body">
                  <div className="project-heading">
                    <div>
                      <p>{project.type}</p>
                      <h3>{project.title}</h3>
                    </div>
                    <FiArrowUpRight className="project-arrow" aria-hidden="true" />
                  </div>
                  <span className="project-description">{project.description}</span>
                  <div className="project-stack">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="additional-work reveal">
            <p className="additional-label">More builds</p>
            {projects.slice(3).map((project) => (
              <a className="project-row" href={project.href} target="_blank" rel="noreferrer" key={project.title}>
                <div className="project-index">{project.index}</div>
                <div className="project-main">
                  <p>{project.type}</p>
                  <h3>{project.title}</h3>
                  <span>{project.description}</span>
                </div>
                <div className="project-stack">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
                <FiArrowUpRight className="project-arrow" aria-hidden="true" />
              </a>
            ))}
          </div>

          <div className="all-work reveal">
            <p>Want the full project trail?</p>
            <a className="text-link" href="https://github.com/HaikalE?tab=repositories" target="_blank" rel="noreferrer">
              Browse all GitHub repositories <FiArrowUpRight />
            </a>
          </div>
        </section>

        <section className="section section-light" id="research">
          <SectionIntro
            number="04"
            eyebrow="Research & recognition"
            title="Academic work grounded in implementation."
          />

          <div className="research-grid">
            <a className="paper-card reveal" href="https://doi.org/10.1109/ICERA66156.2025.11087351" target="_blank" rel="noreferrer">
              <div className="paper-label">IEEE conference paper · ICERA 2025</div>
              <h3>Instant Messaging Security Using Affine Cipher and RSA CRT Algorithm</h3>
              <p>Dian Rachmawati, Muhammad Haikal Rahman, and Desilia Selvida · pp. 30–35</p>
              <span>Open DOI <FiArrowUpRight /></span>
            </a>

            <div className="credential-stack">
              <article className="credential reveal">
                <span>Registered copyrights</span>
                <strong>Somsuk-RSA application</strong>
                <small>EC00202510303</small>
              </article>
              <article className="credential reveal">
                <span>Registered copyrights</span>
                <strong>Phony-RSA application</strong>
                <small>EC002025039293 · 000879554</small>
              </article>
              <article className="credential reveal">
                <span>National program</span>
                <strong>Top 33 · Programmer Talent</strong>
                <small>IndonesiaNEXT 9, Telkomsel · 2025</small>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-blue" id="skills">
          <SectionIntro
            number="05"
            eyebrow="Toolkit"
            title="Tools I’ve used in coursework, internships, and projects."
            copy="These are working tools—not proficiency scores. The project links above show the context in which I used them."
          />

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="skill-group reveal" key={group.label}>
                <h3>{group.label}</h3>
                <div>{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section section-paper" id="education">
          <SectionIntro number="06" eyebrow="Education" title="A local foundation with international exposure." />

          <div className="education-grid">
            <article className="education-card education-featured reveal">
              <span>2025 — Present</span>
              <h3>Master’s in Informatics</h3>
              <p>Institut Teknologi Bandung</p>
              <small>Bandung, Indonesia</small>
            </article>
            <article className="education-card reveal">
              <span>2021 — 2025</span>
              <h3>Bachelor of Computer Science</h3>
              <p>Universitas Sumatera Utara</p>
              <small>GPA 3.88 / 4.00 · Medan</small>
            </article>
            <article className="education-card reveal">
              <span>Mar — Aug 2023</span>
              <h3>Study Abroad</h3>
              <p>Universiti Teknologi MARA</p>
              <small>GPA 3.53 / 4.00 · Shah Alam, Malaysia</small>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy reveal">
            <p className="eyebrow"><span></span> Let’s connect</p>
            <h2>Looking for an adaptable early-career technologist?</h2>
            <p>I’m open to software, IT, data, product-technical, and technology graduate roles where I can contribute while continuing to grow.</p>
          </div>
          <div className="contact-actions reveal">
            <a className="button button-light" href="https://linkedin.com/in/muhammad-haikal-rahman" target="_blank" rel="noreferrer">
              <FiLinkedin /> Message on LinkedIn
            </a>
            <div>
              <a href="https://linkedin.com/in/muhammad-haikal-rahman" target="_blank" rel="noreferrer">LinkedIn <FiArrowUpRight /></a>
              <a href="https://github.com/HaikalE" target="_blank" rel="noreferrer">GitHub <FiArrowUpRight /></a>
              <span><FiMapPin /> Medan, Indonesia</span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <a className="wordmark" href="#top">MHR<span>.</span></a>
        <p>Built with React and a preference for honest, useful work.</p>
        <span>© {new Date().getFullYear()} Muhammad Haikal Rahman</span>
      </footer>
    </div>
  );
}

export default App;
