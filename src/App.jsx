import { useState } from "react";
import { Link } from "react-router-dom";

import "./assets/css/App.css";

import foto_acel_no_bg from "./assets/img/BG Removed.png";
import star from "./assets/img/star.png";
import grid from "./assets/img/grid.png";

import foto_acel from "./assets/img/acel 2.jpg";

import presence from "./assets/img/projects/presence.png";
import presence_mobile from "./assets/img/projects/presence mobile.png";
import achie_bakery from "./assets/img/projects/achie bakery.png";
import blossom from "./assets/img/projects/blossom.png";
import cat from "./assets/img/projects/cat.png";
import gio from "./assets/img/projects/gio.png";
import serenist from "./assets/img/projects/serenist.png";
import wayward from "./assets/img/projects/wayward.png";
import wedding_1 from "./assets/img/projects/wedding 1.png";
import wedding_2 from "./assets/img/projects/wedding 2.png";
import wedding_3 from "./assets/img/projects/wedding 3.png";

const skills = [
  { cat: "Front-End", items: ["HTML & CSS", "React.js", "JavaScript"] },
  { cat: "Back-End", items: ["PHP (Laravel)", "Go (Golang)"] },
  { cat: "Mobile", items: ["Flutter"] },
  { cat: "Other Languages", items: ["Python", "C#"] },
  { cat: "Graphic Design", items: ["Canva", "Figma"] },
  { cat: "UI/UX", items: ["Figma", "Wireframing", "Prototyping"] },
  {
    cat: "Soft Skills",
    items: [
      "Fluent English",
      "Leadership",
      "Public Speaking",
      "Problem Solving",
      "Creativity",
    ],
  },
  {
    cat: "Certifications",
    items: ["TOEIC 900 (2024–2026)"],
  },
];

const experiences = [
  {
    date: "July 2024 – November 2024",
    role: "Intern",
    company: "Cyber Olympus — Sleman, Yogyakarta",
    desc: 'Created 3 Wedding Invitation Websites (Figma → HTML/CSS/JS → performance). Built "Presence", a full-stack task, schedule, and presence management website using Laravel, CRUD, Map API, and Laravel API. Also developed the mobile app version with Flutter.',
  },
  {
    date: "December 2024 – January 2025",
    role: "Freelancer",
    company: "Cyber Olympus — Sleman, Yogyakarta",
    desc: "Coded the home page and contact page for GiO Dental Yogyakarta's website based on Figma designs.",
  },
  {
    date: "January 2026 – Present",
    role: "IT Staff — Content Creation & Outreach (UI/UX & Back-End)",
    company: "HMIF IT Telkom Purwokerto, Central Java",
    desc: "Designing the organization's website with Figma and developing back-end programming with Laravel. Weekly content creation: design requests for organization members and study program admins. MC of International Guest Lecture (May 20th 2026).",
  },
  {
    date: "January 2026 – Present",
    role: "Staff of Creative Media (Designer)",
    company: "Astralic English Club — Telkom University Purwokerto",
    desc: "Graphic design at Canva & Figma for the English Club. MC of International Sharing Session 2026.",
  },
];

const projects = [
  {
    title: "Serenist",
    tags: ["Laravel", "React.js", "CSS"],
    desc: "A personal full-stack college activity management website. Features task management, grade prediction, goal tracking, and money management to support daily college life.",
    year: "May 2026 – Present",
    bg: "bg-purple",
    image: serenist,
    type: "Personal Project",
    link: "https://github.com/arracheille/serenist",
  },
  {
    title: "Presence",
    tags: [
      "Laravel",
      "HTML",
      "CSS",
      "Laravel API",
      "Maps API",
      "Callendar API",
      "CRUD",
      "Admin",
      "SuperAdmin",
      "Multiple-user",
      "JavaScript",
      "AJAX",
      "Laravel Breeze",
    ],
    desc: "A full-stack workspace management website for task, schedule, and presence management. Designed in Figma, built with Laravel Blade, and integrated with a REST API.",
    year: "July 2024 – Nov 2024",
    bg: "bg-blue",
    image: presence,
    type: "Internship",
    tagExtra: ["tag-pink"],
    link: "https://drive.google.com/file/d/1GUEP41ZfugZ13nXn4M6UqTxn_evl0lWV/view?usp=sharing",
  },
  {
    title: "Presence Mobile App",
    tags: ["Flutter", "API"],
    desc: "Mobile app version of Presence. Converted Figma screens into a functional Flutter app, integrated with the existing Presence REST API for data sync with the web backend.",
    year: "July 2024 – Nov 2024",
    bg: "bg-blue",
    image: presence_mobile,
    type: "Internship",
  },
  {
    title: "Achie Bakery",
    tags: ["Laravel", "HTML", "CSS", "API", "CRUD", "Admin"],
    desc: "A bakery e-commerce website. Led ~90% of UI/UX design in Figma, converted designs to responsive HTML/CSS, and integrated UI into Laravel Blade with API integrations.",
    year: "Mar 2025 – May 2025",
    bg: "bg-pink",
    image: achie_bakery,
    type: "High School Group",
    link: "https://github.com/arracheille/AchieBakery",
  },
  {
    title: "Wayward",
    tags: ["Laravel", "HTML", "CSS", "CRUD", "Admin"],
    desc: "An e-commerce website. Designed responsive HTML/CSS from Figma and converted to Laravel Blade views. Implemented core frontend layout including homepage, product, and checkout pages.",
    year: "May 2024 – Jun 2024",
    bg: "bg-orange",
    image: wayward,
    type: "High School Group",
    link: "https://github.com/davindakhrisna/wayward",
  },
  {
    title: "Cat Disease Diagnosis",
    tags: ["PHP", "HTML", "CSS", "JavaScript", "CRUD", "Admin"],
    desc: "A disease diagnosis website for cats. Converted Figma designs to responsive HTML/CSS and developed backend logic and form handling with PHP.",
    year: "Jun 2024",
    bg: "bg-pink",
    image: cat,
    type: "High School Group",
    link: "https://github.com/arracheille/ForwardChaining-CatDeseaseDiagnosis",
  },
  {
    title: "Blossom",
    tags: ["HTML", "CSS", "JavaScript"],
    desc: "An e-commerce website. Implemented responsive UI from Figma into clean HTML/CSS.",
    year: "Jun 2024",
    bg: "bg-pink",
    image: blossom,
    type: "High School Group",
    link: "https://github.com/arracheille/MK5-Blossom.git",
  },
  {
    title: "Wedding Invitation Website 1",
    tags: ["HTML", "CSS", "JavaScript", "Website Performance"],
    desc: "Created wedding invitation website from scratch — Figma design (desktop, tablet, phone), HTML/CSS/JS slicing, and Google Lighthouse performance optimization.",
    year: "July 2024 – Nov 2024",
    bg: "bg-butter",
    image: wedding_1,
    type: "Internship",
  },
  {
    title: "Wedding Invitation Website 2",
    tags: ["HTML", "CSS", "JavaScript", "Website Performance"],
    desc: "Created wedding invitation website from scratch — Figma design (desktop, tablet, phone), HTML/CSS/JS slicing, and Google Lighthouse performance optimization.",
    year: "July 2024 – Nov 2024",
    bg: "bg-blue",
    image: wedding_2,
    type: "Internship",
  },
  {
    title: "Wedding Invitation Website 3",
    tags: ["HTML", "CSS", "JavaScript", "Website Performance"],
    desc: "Created wedding invitation website from scratch — Figma design (desktop, tablet, phone), HTML/CSS/JS slicing, and Google Lighthouse performance optimization.",
    year: "July 2024 – Nov 2024",
    bg: "bg-blue",
    image: wedding_3,
    type: "Internship",
  },
  {
    title: "GiO Dental Yogyakarta",
    tags: ["HTML", "CSS", "JavaScript"],
    desc: "Freelance project. Coded the home page and contact page for a dental clinic website based on Figma designs provided by Cyber Olympus.",
    year: "Dec 2024 – Jan 2025",
    bg: "bg-pink",
    image: gio,
    type: "Freelance",
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("about");

  const getTabClass = (tab) => {
    const isActive = activeTab === tab;
    if (tab === "about")
      return `about-tab-btn ${isActive ? "active-about" : "inactive-about"}`;
    if (tab === "skills")
      return `about-tab-btn ${isActive ? "active-skills" : "inactive-skills"}`;
    if (tab === "exp")
      return `about-tab-btn ${isActive ? "active-exp" : "inactive-exp"}`;
  };

  return (
    <>
      <nav>
        <span className="nav-logo">Aqilla Rachel Rabbani</span>
        <ul className="nav-links">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#portfolios">Portfolios</a>
          </li>
        </ul>
      </nav>

      <section className="hero" id="hero">
        <div className="starburst starburst-1">
          <img src={star} alt="star 1" style={{ width: "160px" }} />
        </div>
        <div className="starburst starburst-2">
          <img src={star} alt="star 2" style={{ width: "200px" }} />
        </div>
        <div className="starburst starburst-3">
          <img src={star} alt="star 3" style={{ width: "110px" }} />
        </div>

        <div className="grid-bg">
          <img src={grid} alt="grid-bg-hero" />
        </div>

        <div className="hero-main-container">
          <div className="hero-title-bg">PORTFOLIO</div>

          <div className="hero-main-content">
            <div className="hero-name">
              Aqilla
              <br />
              Rachel Rabbani
            </div>

            <div className="hero-photo-wrap">
              <div className="hero-photo">
                <img src={foto_acel_no_bg} alt="foto acel" />
              </div>
            </div>

            <div className="hero-right">
              <span className="hero-role">
                Undergraduate Informatics
                <br />
                Engineering Student
              </span>
              <div className="hero-role-divider" />
              <span className="hero-role">Laravel Programmer</span>
              <div className="hero-role-divider" />
              <span className="hero-role">Web Developer</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="grid-bg">
          <img src={grid} alt="grid-bg-hero" />
        </div>

        <div className="about-container">
          <div className="about-tab-bar">
            <button
              className={getTabClass("about")}
              onClick={() => setActiveTab("about")}
            >
              About Me
            </button>
            <button
              className={getTabClass("skills")}
              onClick={() => setActiveTab("skills")}
            >
              Skills
            </button>
            <button
              className={getTabClass("exp")}
              onClick={() => setActiveTab("exp")}
            >
              Experiences
            </button>
          </div>

          {activeTab === "about" && (
            <div className="about-content" style={{ background: "#421e18" }}>
              <div className="about-photo">
                <img src={foto_acel} alt="foto acel" />
              </div>
              <div className="about-text">
                <h3>Hi there! my name is..</h3>
                <h2>Aqilla Rachel Rabbani</h2>
                <p>
                  I'm a Bachelor's Degree Student of Informatics Engineering at{" "}
                  <strong>Telkom University Purwokerto</strong> and an
                  experienced <strong>Web Developer</strong>. I focus on
                  building clean, maintainable backend systems with{" "}
                  <strong>Laravel</strong> and creating unique interfaces with{" "}
                  <strong>HTML &amp; CSS</strong> or <strong>React.JS</strong>{" "}
                  (Javascript). I do full stack web development, enjoy solving
                  real business problems, and collaborate well with
                  stakeholders. I'm also fluent in English with a{" "}
                  <strong>TOEIC score of 900</strong>.
                </p>
              </div>
            </div>
          )}

          {activeTab === "skills" && (
            <div className="skills-content" style={{ background: "#fff89a" }}>
              <div className="skills-grid">
                {skills.map((s) => (
                  <div className="skill-category" key={s.cat}>
                    <h4>{s.cat}</h4>
                    <div className="skill-tags">
                      {s.items.map((item) => (
                        <span className="skill-tag" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "exp" && (
            <div className="exp-content" style={{ background: "#ff97d0" }}>
              <div className="exp-list">
                {experiences.map((e) => (
                  <div className="exp-item" key={e.role + e.company}>
                    <div className="exp-date">{e.date}</div>
                    <div className="exp-role">{e.role}</div>
                    <div className="exp-company">{e.company}</div>
                    <div className="exp-desc">{e.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="portfolio-section" id="portfolios">
        <h1>My Portfolios</h1>
        <div className="portfolio-grid">
          {projects.map((p) => (
            <Link to={p.link}>
              <div className={`portfolio-card ${p.bg}`} key={p.title + p.year}>
                <div className="card-preview">
                  <img src={p.image} alt={`${p.title} icon`} />{" "}
                </div>
                <div className="card-body">
                  <div className="card-title">{p.title}</div>
                  <div className="card-tags">
                    {p.tags.map((t) => (
                      <span className="card-tag" key={t}>
                        {t}
                      </span>
                    ))}
                    <span className="card-tag tag-pink">{p.type}</span>
                  </div>
                  <div className="card-desc">{p.desc}</div>
                  <div className="card-year">{p.year}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer>
        <div className="footer-col">
          <h4>You can find me at..</h4>
          <a
            href="https://www.instagram.com/arracheille/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com/in/aqilla-rachelrabbani-71bb20338"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/arracheille"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="footer-col">
          <h4>Get in touch</h4>
          <a href="mailto:arachelrabbani@gmail.com">arachelrabbani@gmail.com</a>
          <p>+62 85879334272</p>
        </div>
        <div className="footer-col" />
        <div className="footer-copy">© 2026 All Rights Reserved</div>
      </footer>
    </>
  );
}
