const CERTIFICATES = [
    {
    title: "DA0-002 - CompTIA Data+",
    type: "ComTIA",
    image: "static/images/ComTIA.jpg",
    favicon: "static/images/Comptia-logo.svg",
    links: [
      { text: "Verify →", url: "https://www.credly.com/badges/9b8018e5-1e79-47a1-b230-b81ea329c9b7/public_url" },
    ],
  },

  {
    title: "2025 Python Data Analysis & Visualization Masterclass",
    type: "Udemy",
    image: "static/images/Python_data.jpg",
    favicon: "static/images/udemy-light.svg",
    links: [
      { text: "Verify →", url: "https://www.udemy.com/certificate/UC-9ebfa64f-8139-48ee-a5f2-143c0896e458/" },
    ],
  },

  {
    title: "The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert",
    type: "Udemy",
    image: "static/images/SQL_boot.jpg",
    favicon: "static/images/udemy-light.svg",
    links: [
      { text: "Verify →", url: "https://www.udemy.com/certificate/UC-9d2cd48e-a3ce-4813-8309-9c33983f6072/" },
    ],
  },

  {
    title: "The Git & Github Bootcamp",
    type: "Udemy",
    image: "static/images/Git.jpg",
    favicon: "static/images/udemy-light.svg",
    links: [
      { text: "Verify →", url: "https://www.udemy.com/certificate/UC-82b234b3-e732-419b-a53c-b24efa5e1589/" },
    ],
  },

  {
    title: "The Complete Regular Expressions(Regex) Course For Beginners",
    type: "Udemy",
    image: "static/images/Regex.jpg",
    favicon: "static/images/udemy-light.svg",
    links: [
      { text: "Verify →", url: "https://www.udemy.com/certificate/UC-81478f2e-6dbe-4d0a-9b46-308958fb4d68/" },
    ],
  },
  {
    title: "Self-Hosting with Docker & Linux: Run Your Own Services",
    type: "Udemy",
    image: "static/images/Self-Hosting_Docker.jpg",
    favicon: "static/images/udemy-light.svg",
    links: [
      { text: "Verify →", url: "https://www.udemy.com/certificate/UC-55dd28d3-390a-461b-814e-e125c0e11c3c/" },
    ],
  },

  
  // Add more certificates here...
];

function createCertCard(cert) {
  const linksHTML = cert.links
    .map((link) => `<a href="${link.url}" class="project-link">${link.text}</a>`)
    .join("\n                ");

  return `
    <div class="certificate-card">
    
      <a href="${cert.links[0].url}" target="_blank" rel="noopener">
        <img
          src="${cert.image}"
          alt="${cert.title} project image"
          class="project-img"
        />
      </a>
    
      <div class="project-body">
        <h3 class="project-title">
          <img
            src="${cert.favicon}"
            alt="${cert.title} favicon"
            class="project-icon"
          />
          ${cert.title}
        </h3>

        <p class="project-type">${cert.type}</p>

        <div class="project-links-container">
          ${linksHTML}
        </div>
      </div>
    </div>
  `;
}

const certificateContainer = document.querySelector(".certificate-container");

// limit displayed certs to 4 if on homepage 

const certlimit = document.body.id === "home" ? 4 : CERTIFICATES.length;

CERTIFICATES.slice(0, certlimit).forEach(cert => {
  certificateContainer.innerHTML += createCertCard(cert);
});