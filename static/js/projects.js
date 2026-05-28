const SKILLS_BY_CATEGORY = {
  Programming: {
    order: 1,
    color: "#e74c3c",
    skills: ["Python", "JavaScript", "TypeScript"],
  },
  Creative: {
    order: 2,
    color: "#c0392b",
    skills: ["Video Editing", "Photography", "3D Modelling", "Game Design"],
  },
  "AI/ML": {
    order: 3,
    color: "#e67e22",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Natural Language Processing",
      "Computer Vision",
      "AI",
    ],
  },
  Backend: {
    order: 4,
    color: "#f39c12",
    skills: ["Flask", "Django", "FastAPI", "Node.js", "Express.js"],
  },
  Design: {
    order: 5,
    color: "#f1c40f",
    skills: [
      "Figma",
      "Photoshop",
      "Illustrator",
      "Canva",
      "UI/UX Design",
      "Responsive Design",
    ],
  },
  Frontend: {
    order: 6,
    color: "#2ecc71",
    skills: ["HTML", "CSS", "React", "Vue.js", "Angular"],
  },
  Marketing: {
    order: 7,
    color: "#16a085",
    skills: [
      "SEO",
      "Social Media Integration",
      "Email Marketing",
      "Marketing Analytics",
      "Content Creation",
      "SMTP / Email Automation",
    ],
  },
  "Data Science": {
    order: 8,
    color: "#1abc9c",
    skills: [
      "Data Analysis",
      "Data Visualization",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Plotly",
    ],
  },
  "Web Technologies": {
    order: 9,
    color: "#26A69A",
    skills: [
      "Google Apps Script",
      "APIs",
      "REST",
      "GraphQL",
      "JSON",
      "AJAX",
      "API",
      "Authentication",
      "Open-Graph"
    ],
  },
  Database: {
    order: 10,
    color: "#3498db",
    skills: ["SQL", "PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  DevOps: {
    order: 11,
    color: "#9b59b6",
    skills: [
      "Docker",
      "Kubernetes",
      "Git",
      "GitHub",
      "GitLab",
      "CI/CD",
      "Linux",
      "Bash",
      "CLI",
      "Cron Jobs",
      "SSH",
      "Shell"
    ],
  },
  "Project Management": {
    order: 12,
    color: "#8e44ad",
    skills: ["Project Management", "Agile", "Scrum", "Kanban"],
  },
  "Soft Skills": {
    order: 13,
    color: "#95a5a6",
    skills: [
      "Communication",
      "Teaching",
      "Lecturing",
      "Writing",
      "Creative Problem Solving",
      "Critical Thinking",
      "Public Speaking",
    ],
  },
  Other: {
    order: 14,
    color: "#7f8c8d",
    skills: ["Economics", "Finance", "Event Planning"],
  },
};

const PROJECTS = [
  {
    title: "Idle Hands",
    type: "Static Front-End Project",
    description:
      "A custom static business website with social share cards and a serverless contact form built using Google Apps Script.",
    skills: [
      "JavaScript",
      "UI/UX Design",
      "Canva",
      "HTML",
      "CSS",
      "Google Apps Script",
      "Git",
    ],
    image: "static/images/idle_hands_1200x630px.webp",
    favicon: "static/images/idle_hands_favicon.png",
    links: [
      { text: "View Project →", url: "https://idlehandsmassagetherapy.co.uk/" },
      { text: "GitHub →", url: "https://github.com/fjye1/Idle_hands" },
    ],
  },
  {
    title: "E-commerce Store",
    type: "Full Stack E-commerce Website",
    description:
      "A dynamic online store built with Python, Flask, and PostgreSQL,featuring user authentication, product management, and interactive API-driven functionality.",
    skills: [
      "Python",
      "Flask",
      "UI/UX Design",
      "PostgreSQL",
      "API",
      "Authentication",
      "Git",
    ],
    image: "static/images/Regal_chocolate_1200X630px.webp",
    favicon: "static/images/Choc_flav.svg",
    links: [
      { text: "View Project →", url: "https://regalchocolate.in/" },
      { text: "GitHub →", url: "https://github.com/fjye1/chocolate_website" },
    ],
  },
  {
    title: "PostgreSQL",
    type: "Sub-Project of Regal Chocolate.",
    description:
      "A PostgreSQL database powering the Regal Chocolate platform, featuring automated triggers for real-time updates and regular dumps for backup and maintenance, ensuring reliable and consistent data management.",
    skills: ["PostgreSQL", "SQL", "API", "Authentication", "CLI"],
    image: "static/images/PostgreSQL_1200X630px.webp",
    favicon: "static/images/Choc_flav.svg",
    links: [
      { text: "View Project →", url: "https://regalchocolate.in/" },
      {
        text: "Read Docs →",
        url: "https://github.com/fjye1/chocolate_website",
      },
    ],
  },
  {
    title: "Remote Worker",
    type: "Sub-Project of Regal Chocolate.",
    description:
      "A headless background worker running on a Linux server laptop, responsible for scheduled database operations, automated email handling, and maintenance tasks using cron jobs. Acts as a backend sub-routine for the main website, enabling continuous automation via CLI-based workflows and CI/CD deployment.",
    skills: [
      "PostgreSQL",
      "SMTP / Email Automation",
      "API",
      "Authentication",
      "Linux",
      "CLI",
      "Bash",
      "CI/CD",
      "Cron Jobs",
      "SSH",
    ],
    image: "static/images/Task_Listener_1200X630px.webp",
    favicon: "static/images/Choc_flav.svg",
    links: [
      { text: "View Project →", url: "https://regalchocolate.in/" },
      {
        text: "Read Docs →",
        url: "https://github.com/fjye1/chocolate_website",
      },
    ],
  },
  {
    title: "Monitor",
    type: "Infrastructure & Monitoring Utility",
    description:
      "A lightweight monitoring script running on a headless Linux node. It checks whether the website is reachable, and keeps an eye on CPU load and temperatures. If something looks wrong, it fires off an email alert right away — and sends a summary report every 24 hours.",
    skills: [
      "Linux",
      "Bash",
      "Shell",
      "SMTP / Email Automation",
      "Cron Jobs",
      "SSH",
      "CLI",
      
    ],
    image: "static/images/Bash_script.webp",
    favicon: "static/images/utils.svg",
    links: [
      {
        text: "View Shell Scripts →",
        url: "https://github.com/fjye1/Monitor",
      },
    ],
  },
  // Add more projects...
];

const projectsContainer = document.querySelector(".projects-container");

// return the limit of 4 if on home page or limit of PROJECTS.length

const projectlimit = document.body.id === "home" ? 4 : PROJECTS.length;

PROJECTS.slice(0, projectlimit).forEach(project => {
  projectsContainer.innerHTML += createProjectCard(project);
});



// Then run your existing code to apply styles and build filters
document.querySelectorAll(".project-tags li").forEach(applySkillStyles);

// ---------- helpers ----------
function getCategory(skill) {
  return Object.entries(SKILLS_BY_CATEGORY).find(([_, data]) =>
    data.skills.includes(skill),
  )?.[0];
}

function applySkillStyles(li) {
  const skillName = li.textContent.trim();
  for (const category in SKILLS_BY_CATEGORY) {
    if (SKILLS_BY_CATEGORY[category].skills.includes(skillName)) {
      li.style.color = SKILLS_BY_CATEGORY[category].color;
      li.classList.add(`skill-${category.replace(/\s+/g, "-").toLowerCase()}`);
      break;
    }
  }
}

// ---------- build unique sorted filters ----------
const skillSet = new Set();

document.querySelectorAll(".project-card .project-tags li").forEach((li) => {
  skillSet.add(li.textContent.trim());
});

const skillsArray = Array.from(skillSet);

skillsArray.sort((a, b) => {
  const orderA = SKILLS_BY_CATEGORY[getCategory(a)]?.order ?? 999;
  const orderB = SKILLS_BY_CATEGORY[getCategory(b)]?.order ?? 999;
  return orderA - orderB;
});

const filterList = document.getElementById("skill-filters");

skillsArray.forEach((skill) => {
  const li = document.createElement("li");
  li.textContent = skill;
  li.classList.add("skill-filter");
  applySkillStyles(li);
  filterList.appendChild(li);
});

// ---------- color project cards ----------
document.querySelectorAll(".project-tags li").forEach(applySkillStyles);

// ---------- ADD THIS: filtering logic ----------
const activeFilters = new Set();

filterList.addEventListener("click", (e) => {
  if (e.target.classList.contains("skill-filter")) {
    const skillName = e.target.textContent.trim();

    // Toggle filter
    if (activeFilters.has(skillName)) {
      activeFilters.delete(skillName);
      e.target.classList.remove("active");
    } else {
      activeFilters.add(skillName);
      e.target.classList.add("active");
    }

    // Filter projects
    filterProjects();
  }
});

function filterProjects() {
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    if (activeFilters.size === 0) {
      // No filters active - show all
      card.style.display = "";
    } else {
      // Get skills from this project
      const projectSkills = Array.from(
        card.querySelectorAll(".project-tags li"),
      ).map((li) => li.textContent.trim());

      // Show if project has ANY of the active filters (OR logic)
      const hasMatch = Array.from(activeFilters).some((filter) =>
        projectSkills.includes(filter),
      );

      card.style.display = hasMatch ? "" : "none";
    }
  });
}

//Filtering for skills in projects

const filterBtns = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const skill = btn.dataset.skill;

    // Toggle active state
    btn.classList.toggle("active");

    // Get all active filters
    const activeFilters = Array.from(
      document.querySelectorAll(".filter-btn.active"),
    ).map((btn) => btn.dataset.skill);

    // Show/hide projects
    projects.forEach((project) => {
      const projectSkills = project.dataset.skills.split(",");

      if (activeFilters.length === 0) {
        project.style.display = "block"; // Show all if no filters
      } else {
        // Show if project has ANY of the active skills (OR logic)
        const hasSkill = activeFilters.some((filter) =>
          projectSkills.includes(filter),
        );
        project.style.display = hasSkill ? "block" : "none";
      }
    });
  });
});

// Build the project card from infomation in the Projects const

function createProjectCard(project) {
  const skillsHTML = project.skills
    .map((skill) => `<li>${skill}</li>`)
    .join("");

  const linksHTML = project.links
    .map(
      (link) =>
        `<a href="${link.url}" class="project-link" target="_blank" rel="noopener">
          ${link.text}
        </a>`
    )
    .join("\n                ");

  return `
    <div class="project-card">
      <a href="${project.links[0].url}" target="_blank" rel="noopener">
        <img
          src="${project.image}"
          alt="${project.title} project image"
          class="project-img"
        />
      </a>

      <div class="project-body">
        <h3 class="project-title">
          <img
            src="${project.favicon}"
            alt="${project.title} favicon"
            class="project-icon"
          />
          ${project.title}
        </h3>

        <p class="project-type">${project.type}</p>

        <ul class="project-tags">
          ${skillsHTML}
        </ul>

        <p class="project-desc">
          ${project.description}
        </p>

        <div class="project-links-container">
          ${linksHTML}
        </div>
      </div>
    </div>
  `;
}