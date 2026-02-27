

// Function to load a file into a container
function loadHTML(containerId, url, callback) {
  fetch(url)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById(containerId).innerHTML = html;
      if (callback) callback();
    })
    .catch((err) => console.error(`Failed to load ${url}:`, err));
}

// Load Footer and then do something in this case get the current date and update the year element
loadHTML("footer", "/footer.html", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
});

// Load header
loadHTML("header", "/header.html", () => {});

const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.type = "image/svg+xml";
favicon.href = "/static/images/Flavicon.svg";
document.head.appendChild(favicon);

// Inject shared head tags
const head = document.head;

// Stylesheet
const stylesheet = document.createElement("link");
stylesheet.rel = "stylesheet";
stylesheet.href = "/static/css/style.css";
head.appendChild(stylesheet);

// Bootstrap (example)
const bootstrap = document.createElement("link");
bootstrap.rel = "stylesheet";
bootstrap.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.x.x/dist/css/bootstrap.min.css";
head.appendChild(bootstrap);