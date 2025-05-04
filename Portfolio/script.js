// Data for the resume
const resume = {
  name: "Arpit Sawant",
  contact: {
    phone: "9481938433",
    email: "arpitsawant11@gmail.com",
    linkedin: "https://linkedin.com/in/arpit-sawant-932906308"
  },
  education: [
    {
      degree: "B.E. in Information Science and Engineering",
      school: "MVJ College of Engineering, Bengaluru",
      date: "2023–2026"
    },
    {
      degree: "Diploma in Computer Science",
      school: "Maratha Mandal Polytechnic, Belgaum",
      date: "2020–2023"
    },
    {
      degree: "SSLC (10th Standard)",
      school: "Bharatesh English Medium School, Belgaum",
      date: "2020"
    }
  ],
  skills: [
    { cat: "Languages:", list: "Java, HTML, CSS, JavaScript" },
    { cat: "Technologies:", list: "Full Stack Development, Web Development, DBMS, Cybersecurity Basics" }
  ],
  experience: [
    {
      role: "Cybersecurity Intern",
      company: "Softmusk, Belgaum",
      date: "2023",
      details: [
        "Gained hands-on experience with cybersecurity concepts and ethical hacking tools",
        "Identified common vulnerabilities and assessed risks in simulated environments",
        "Participated in securing sample digital infrastructures and learning defensive techniques"
      ]
    }
  ],
  projects: [
    {
      title: "Infopedia – Diploma Final Year Project",
      desc: [
        "Developed an educational platform providing structured academic content.",
        "Designed user-friendly interface using HTML, CSS, and JavaScript.",
        "Integrated backend database to manage users and learning materials."
      ]
    },
    {
      title: "Smart Site Management – Engineering Project (Ongoing)",
      desc: [
        "Working on a site management tool to track construction progress, materials, and workforce.",
        "Leveraging web technologies and DBMS for real-time monitoring and efficiency.",
        "Designed to bring transparency and automation into traditional site workflows."
      ]
    }
  ],
  certifications: [
    "Internship – Softmusk: Focused on Full Stack Web Development Certificate"
  ]
};

// Helper functions to render sections
function renderEducation(education) {
  return `
    <div class="section">
      <div class="section-title">Education</div>
      <ul class="edu-list">
        ${education.map(e => `
          <li class="edu-item">
            <span class="edu-degree">${e.degree}</span>
            <span class="edu-date">${e.date}</span><br>
            <span class="edu-school">${e.school}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `;
}

function renderSkills(skills) {
  return `
    <div class="section">
      <div class="section-title">Skills</div>
      <ul class="skills-list">
        ${skills.map(s => `
          <li><span class="skill-cat">${s.cat}</span> ${s.list}</li>
        `).join('')}
      </ul>
    </div>
  `;
}

function renderExperience(experience) {
  return `
    <div class="section">
      <div class="section-title">Experience</div>
      <ul class="exp-list">
        ${experience.map(exp => `
          <li class="exp-item">
            <span class="exp-role">${exp.role}</span>
            <span class="exp-date">${exp.date}</span><br>
            <span class="exp-company">${exp.company}</span>
            <ul>
              ${exp.details.map(d => `<li>${d}</li>`).join('')}
            </ul>
          </li>
        `).join('')}
      </ul>
    </div>
  `;
}

function renderProjects(projects) {
  return `
    <div class="section">
      <div class="section-title">Projects</div>
      <ul class="proj-list">
        ${projects.map(p => `
          <li class="proj-item">
            <span class="proj-title">${p.title}</span>
            <div class="proj-desc">
              ${p.desc.join('<br>')}
            </div>
          </li>
        `).join('')}
      </ul>
    </div>
  `;
}

function renderCertifications(certifications) {
  return `
    <div class="section">
      <div class="section-title">Certifications</div>
      <ul class="cert-list">
        ${certifications.map(c => `<li class="cert-item">${c}</li>`).join('')}
      </ul>
    </div>
  `;
}

// Render the resume
document.getElementById('app').innerHTML = `
  <div class="resume-container">
    <div class="header">
      <div class="name">${resume.name}</div>
      <div class="contact">
        ${resume.contact.phone}<br>
        <a href="mailto:${resume.contact.email}">${resume.contact.email}</a><br>
        <a href="${resume.contact.linkedin}" target="_blank">${resume.contact.linkedin.replace('https://', '')}</a>
      </div>
    </div>
    ${renderEducation(resume.education)}
    ${renderSkills(resume.skills)}
    ${renderExperience(resume.experience)}
    ${renderProjects(resume.projects)}
    ${renderCertifications(resume.certifications)}
  </div>
`;
