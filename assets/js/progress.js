var dataJson = [
  {
    name: "Bootstrap",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    width: "80%",
  },
  {
    name: "NodeJS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    width: "65%",
  },
  {
    name: "PHP",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg", // Chemin vers le logo PHP
    width: "85%",
  },
  {
    name: "REACT JS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", // Chemin vers le logo React
    width: "35%",
  },
  {
    name: "Javascript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", //
    width: "65%",
  },
  {
    name: "PYTHON",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", //
    width: "45%",
  },
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", //
    width: "90%",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", //
    width: "90%",
  },
  {
    name: "MYSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", //
    width: "65%",
  },
  {
    name: "MONGODB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", //
    width: "65%",
  },
];

var raw_html = "";
var raw_progress = "";

dataJson.forEach(function (item) {
  raw_progress += `<p class="fs-5 txt-color">${
    item.logo
      ? `<img src="${item.logo}" alt="${item.name} Logo" style="width: 50px; height: 50px;">`
      : item.name
  }</p>
  <div class="progress mb-5 p-0">
    <div class="p1" style="width: ${item.width}">${item.width}</div>
  </div>`;
  createRow(raw_progress);
});

function createRow(data) {
  raw_html += '<div class="col-lg-6 col-sm-10 col-md-6">'.concat(
    data,
    "</div>"
  );
  raw_progress = "";
}
document.getElementById("progress-data").innerHTML = raw_html;
