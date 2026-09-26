import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import emailjs from "@emailjs/browser";
import {
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub,
  FaWhatsapp, FaPhone, FaEnvelope, FaFilePdf, FaSun, FaMoon,
  FaChevronDown, FaDatabase, FaCodeBranch, FaLinkedin, FaFlask
} from "react-icons/fa";
import { SiSpringboot, SiGit } from "react-icons/si";
import hruthikPhoto from "./assets/hruthik.jpeg";
import "./styles.css";

const ASSET_BASE = import.meta.env.BASE_URL;

const PROFILE = {
  name: "Hruthik J R",
  title: "Java Full Stack Developer",
  email: "hruthiktth@gmail.com",
  phone: "+917019291635",
  whatsapp: "917019291635",
  github: "https://github.com/Hruthik328",
  resume: `${ASSET_BASE}assets/resume.pdf`,
  linkedin: "https://www.linkedin.com/in/hruthik-tth-42376931/",
  photo: hruthikPhoto
};

const skills = [
  { name: "Java", icon: <FaJava />, color: "java", concepts: ["Core Java", "OOP", "Collections", "Exception Handling", "JDBC"] },
  { name: "Spring Boot", icon: <SiSpringboot />, color: "spring", concepts: ["REST APIs", "Spring MVC", "Spring Data JPA", "Dependency Injection"] },
  { name: "HTML", icon: <FaHtml5 />, color: "html", concepts: ["HTML5", "Forms", "Semantic HTML", "Responsive Structure"] },
  { name: "CSS", icon: <FaCss3Alt />, color: "css", concepts: ["Flexbox", "Grid", "Responsive Design", "Animations"] },
  { name: "JavaScript", icon: <FaJs />, color: "js", concepts: ["ES6+", "DOM", "Events", "Fetch API"] },
  { name: "React", icon: <FaReact />, color: "react", concepts: ["Components", "Hooks", "Props", "State Management"] },
  { name: "SQL", icon: <FaDatabase />, color: "sql", concepts: ["MySQL", "CRUD", "Joins", "Queries", "Database Design"] },
  { name: "Git & GitHub", icon: <SiGit />, color: "git", concepts: ["Git", "GitHub", "Branches", "Pull Requests"] },
  { name: "Python", icon: <FaPython />, color: "python", concepts: ["Python Basics", "Flask", "Data Handling"] },
  { name: "C", icon: <FaCodeBranch />, color: "c", concepts: ["Programming Basics", "Arrays", "Functions"] }
];

const projects = [
  {
    title: "AI-Based Dynamic Pricing with Micro-Markdown Engine and Inventory Optimization",
    description: "An AI-based dynamic pricing and inventory optimization system designed for online shopping and retail platforms. The system adjusts product prices based on demand, sales velocity and stock level.",
    tech: "Python, Flask, SQLAlchemy, SQL, HTML, CSS, JavaScript",
    features: ["Dynamic product price adjustment", "Demand and sales velocity analysis", "Inventory and stock-level monitoring", "Micro-markdown pricing engine"]
  },
  {
    title: "Online Course Registration System",
    description: "A web-based application developed to manage student registration, course selection, payments and receipt generation.",
    tech: "Java, Spring Boot, HTML, CSS, JavaScript, SQL",
    features: ["Student registration", "Admin registration and login", "Student login", "Course selection and registration", "UPI and cash payment options", "Discount for eligible students", "Receipt generation"]
  },
  {
    title: "Child Orphanage Management System",
    description: "A web-based application designed to efficiently manage orphanage records, children information, donations and daily activities",
    tech: "PHP, Javascript, Html, CSS, MySql",
    features: ["Child information management", "Orphanage record management", "Donation management", "Daily activities", "Feedback system"]
  }
];

const education = [
  ["MCA", "JNNCE, Shivamogga", "Visvesvaraya Technological University", "CGPA: 8.7", "2026"],
  ["BCA", "GFGC, Thirthahalli", "Kuvempu University", "CGPA: 8.4", "2024"],
  ["2nd PUC", "Govt PUC College, Thirthahalli", "Department of Pre-University Education", "78%", "2021"],
  ["SSLC / 10th", "Govt Junior College, Thirthahalli", "Karnataka Secondary Education Board", "78%", "2019"]
];

const research = [
  {
    title: "AI Based Dynamic Pricing with Micro-Markdown Engine and Inventory Optimization Tool",
    publication: "Research Publication",
    date: "2026",
    description: "An AI-based dynamic pricing and inventory optimization system for retail and e-commerce platforms, focusing on demand, sales velocity, stock levels and automated pricing decisions.",
    certificate: `${ASSET_BASE}assets/publication-certificate.pdf`
  }
];

const certificates = [
  {
    title: "Cloud Computing",
    issuer: "Visvesvaraya Technological University (VTU)",
    date: "June 16, 2026",
    description: "Course Completion Certificate. Successfully completed the Cloud Computing course through VTU Center for Online Education.",
    file: `${ASSET_BASE}assets/cloud-computing-certificate.pdf`
  },
  {
    title: "Certificate of Publication",
    issuer: "International Research Journal of Modernization in Engineering Technology and Science (IRJMETS)",
    date: "May 22, 2026",
    description: "Published a research paper titled “AI Based Dynamic Pricing with Micro-Markdown Engine and Inventory Optimization Tool”.",
    file: `${ASSET_BASE}assets/publication-certificate.pdf`
  },
  {
    title: "Power BI",
    issuer: "Simplilearn SkillUp",
    date: "April 16, 2026",
    description: "Successfully completed a Power BI beginners course and gained foundational knowledge of Power BI.",
    file: `${ASSET_BASE}assets/power-bi-certificate.pdf`
  }
];

function App() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") !== "light");
  const [openSkill, setOpenSkill] = useState(null);
  const [project, setProject] = useState(0);
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const sendMessage = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus("");

    const form = e.currentTarget;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("EmailJS is not configured yet. Add the three VITE_EMAILJS values in .env.local.");
      setSending(false);
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, form, { publicKey });
      form.reset();
      setStatus("Message sent successfully. Thank you!");
    } catch (error) {
      console.error(error);
      setStatus("Message could not be sent. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="app">
      <header className="navbar">
        <div className="nav-inner">
          <button className="brand" onClick={() => scrollTo("home")}>Hruthik J R</button>
          <nav>
            {["Home","About","Skills","Projects","Internship","Education","Certificates","Research","Resume","Contact"].map(item =>
              <button key={item} onClick={() => scrollTo(item.toLowerCase())}>{item}</button>
            )}
            <button className="theme-btn" aria-label="Toggle theme" onClick={() => setDark(!dark)}>
              {dark ? <FaSun /> : <FaMoon />}
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="section hero">
          <div className="hero-copy">
            <span className="eyebrow">WELCOME TO MY PORTFOLIO</span>
            <h1>Hi, I'm <span>Hruthik J R</span></h1>
            <h2>Java Full Stack Developer</h2>
            <p>MCA graduate passionate about Java, Spring Boot, React, SQL and web application development.</p>
            <div className="actions">
              <button className="primary" onClick={() => scrollTo("projects")}>View Projects</button>
              <button className="outline" onClick={() => scrollTo("contact")}>Contact Me</button>
            </div>
          </div>
          <div className="hero-photo">
            <img
            src={PROFILE.photo}
            alt="Hruthik J R"
             className="profile-img"
              onError={(e) => (e.currentTarget.style.display = "none")} />
            <span>HJR</span>
          </div>
        </section>

        <section id="about" className="section content-section">
          <SectionTitle title="About Me" subtitle="A short introduction about me and my development interests." />
          <p className="about-text">
            I am an MCA graduate from JNNCE, affiliated with VTU, with a strong interest in software development.
            I have knowledge of Java, Spring Boot, HTML, CSS, JavaScript, React, SQL and REST APIs.
            I have practical experience in developing web applications, implementing CRUD operations, database connectivity,
            and frontend-backend integration. I have also worked on projects including an AI-based dynamic pricing and inventory
            optimization system. I enjoy learning new technologies, building practical applications, and solving real-world problems.
          </p>
        </section>

        <section id="skills" className="section content-section">
          <SectionTitle title="Technical Skills" subtitle="Click on any skill to view the concepts and technologies I know." />
          <div className="skills-grid">
            {skills.map((skill, i) => (
              <div key={skill.name} className={`skill-wrap ${openSkill === i ? "open" : ""}`}>
                <button className={`skill-card ${skill.color}`} onClick={() => setOpenSkill(openSkill === i ? null : i)}>
                  <span>{skill.icon}</span><strong>{skill.name}</strong><FaChevronDown className="chevron" />
                </button>
                {openSkill === i && <div className="skill-details">{skill.concepts.map(x => <span key={x}>✓ {x}</span>)}</div>}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section content-section">
          <SectionTitle title="Projects" subtitle="Explore my projects, technologies used and key features." />
          <div className="project-window">
            <div className="project-card">
              <h3>{projects[project].title}</h3>
              <p>{projects[project].description}</p>
              <p><b>Technologies:</b> {projects[project].tech}</p>
              <p><b>Key Features:</b></p>
              <ul>{projects[project].features.map(f => <li key={f}>{f}</li>)}</ul>
            </div>
          </div>
          <div className="dots">
            {projects.map((_, i) => <button className={project === i ? "active" : ""} key={i} onClick={() => setProject(i)}>Project {i + 1}</button>)}
          </div>
        </section>

        <section id="internship" className="section content-section">
          <SectionTitle title="Internship" subtitle="My practical training and internship experience." />
          <div className="internship-card">
            <div className="internship-top">
              <div className="briefcase">💼</div>
              <div>
                <h3>Java Application Development Internship</h3>
                <h4>X-WorkZ</h4>
                <p>📍 Java Application Development</p>
              </div>
              <div className="date-box"><b>Feb 2026 – May 2026</b><span>4 Months</span></div>
            </div>
            <hr />
            <p>Completed a four-month internship focused on Java-based application development and web technologies. Gained practical experience in Core Java, object-oriented programming, database connectivity and web application development.</p>
            <div className="intern-grid">
              <div><h4>▣ Topics Covered</h4><div className="topic-box"><span>✓ Core Java</span><span>✓ SQL</span><span>✓ Object-Oriented Programming</span><span>✓ JDBC</span><span>✓ Exception Handling</span><span>✓ Servlet</span><span>✓ Collections Framework</span><span>✓ JSP</span><span>✓ HTML and CSS</span><span>✓ CRUD Operations</span><span>✓ JavaScript</span><span>✓ Database Connectivity</span><span>✓ JSON</span><span>✓ Web Application Development</span></div></div>
              <div><h4>⚙ Technologies Used</h4><div className="tags">{["Java","HTML","CSS","JavaScript","SQL","JDBC","Servlet","JSP"].map(x => <span key={x}>{x}</span>)}</div><a className="certificate-btn" href={`${ASSET_BASE}assets/internship-certificate.pdf`} target="_blank" rel="noreferrer">📄 View Certificate ↗</a></div>
            </div>
          </div>
        </section>

        <section id="education" className="section content-section">
          <SectionTitle title="Education & Qualifications" subtitle="My academic background and educational qualifications." />
          <div className="table-wrap"><table><thead><tr><th>Qualification</th><th>Institution</th><th>University / Board</th><th>Score</th><th>Year</th></tr></thead><tbody>{education.map(r => <tr key={r[0]}>{r.map((c,i)=><td key={i}>{c}</td>)}</tr>)}</tbody></table></div>
        </section>

        <section id="research" className="section content-section">
          <SectionTitle title="Research" subtitle="Research work and publication highlights." />
          <div className="research-grid">{research.map(item => <article className="research-card" key={item.title}><div className="research-icon"><FaFlask /></div><div><span className="research-label">{item.publication} · {item.date}</span><h3>{item.title}</h3><p>{item.description}</p><a className="certificate-btn" href={item.certificate} target="_blank" rel="noreferrer"><FaFilePdf /> View Publication Certificate</a></div></article>)}</div>
        </section>

        <section id="certificates" className="section content-section">
          <SectionTitle title="Certificates" subtitle="Certifications, courses and academic achievements I have completed." />
          <div className="certificate-grid">{certificates.map(c => <article className="cert-card" key={c.title}><div className="cert-icon">📄</div><h3>{c.title}</h3><h4>{c.issuer}</h4><p>▣ {c.date}</p><p>{c.description}</p><a href={c.file} target="_blank" rel="noreferrer">📄 View Certificate ↗</a></article>)}</div>
        </section>

        <section id="resume" className="section content-section">
          <div className="resume-card">
            <div className="resume-icon">📄</div>
            <h2>My Resume</h2>
            <p>Explore my education, technical skills, projects, internship experience, and professional qualifications.</p>
            <div className="actions center"><a className="outline" href={PROFILE.resume} target="_blank" rel="noreferrer">◉ View Resume</a><a className="primary" href={PROFILE.resume} download>⬇ Download Resume</a></div>
          </div>
        </section>

        <section id="contact" className="section content-section">
          <SectionTitle title="Contact Me" subtitle="Have a project or job opportunity? Feel free to contact me." />
          <div className="contact-links">
            <a href={`mailto:${PROFILE.email}`}><FaEnvelope /> Email Me</a>
            <a href={`tel:${PROFILE.phone}`}><FaPhone /> Call Me</a>
            <a href={`https://wa.me/${PROFILE.whatsapp}`} target="_blank" rel="noreferrer"><FaWhatsapp /> WhatsApp</a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
          </div>
          <form className="contact-form" onSubmit={sendMessage}>
            <input name="from_name" placeholder="Your Name" required />
            <input name="reply_to" type="email" placeholder="Your Email" required />
            <input name="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="Your Message" rows="6" required />
            <button className="primary send" type="submit" disabled={sending}>{sending ? "Sending..." : "Send Message"}</button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </section>
      </main>

      <footer>© {new Date().getFullYear()} Hruthik J R. All rights reserved.</footer>
    </div>
  );
}

function SectionTitle({title, subtitle}) {
  return <div className="section-title"><h2>{title}</h2><span></span>{subtitle && <p>{subtitle}</p>}</div>;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
