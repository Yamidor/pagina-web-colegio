document.addEventListener("DOMContentLoaded", function () {
  const sections = {
    inicio: `<div id="carousel" class="carousel">
                <img
                src="img/entrega notas.jpeg"
                alt="Imagen 1"
                class="carousel-image active"
                />
                <img src="img/dia anti.jpeg" alt="Imagen 2" class="carousel-image" />
                <img src="img/cartillas.jpeg" alt="Imagen 3" class="carousel-image" />
            </div>`,
    personal: `<div id="personal-content">
                <div class="buttons-container">
                  <button id="admin-btn">Personal Administrativo</button>
                  <button id="direct-btn">Directivos</button>
                  <button id="docente-btn">Docentes</button>
                </div>
                <div id="cards-container"></div>
              </div>`,
    proyecto: `<h1>Proyectos</h1><p>Detalles sobre los proyectos que están en curso.</p>`,
    novedades: `<h1>Novedades</h1><p>Últimas noticias y novedades del colegio.</p>`,
    herramientas: `<h1>Herramientas</h1><p>Recursos y herramientas disponibles para la comunidad educativa.</p>`,
  };

  const navItems = document.querySelectorAll("nav ul li");
  const content = document.getElementById("content");

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      const section = this.getAttribute("data-section");
      content.innerHTML = sections[section];

      // Agregar event listeners para los botones después de que se cargue la sección "Personal"
      if (section === "personal") {
        setupPersonalButtons();
      }
    });
  });

  // Cargar por defecto la sección de inicio
  content.innerHTML = sections["inicio"];

  const images = document.querySelectorAll(".carousel-image");
  let currentIndex = 0;
  const intervalTime = 10000; // 10 segundos

  function showNextImage() {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
  }

  setInterval(showNextImage, intervalTime);

  // Función para configurar los botones de la sección "Personal"
  function setupPersonalButtons() {
    const adminStaff = [
      {
        img: "img/rector.jfif",
        name: "Admin 1",
        position: "Cargo 1",
        studies: "Estudios 1",
      },
      {
        img: "img/rector.jfif",
        name: "Admin 2",
        position: "Cargo 2",
        studies: "Estudios 2",
      },
      {
        img: "img/rector.jfif",
        name: "Admin 3",
        position: "Cargo 3",
        studies: "Estudios 3",
      },
    ];

    const directStaff = [
      {
        img: "img/rector.jfif",
        name: "Directivo 1",
        position: "Cargo 1",
        studies: "Estudios 1",
      },
    ];

    const docenteStaff = [
      {
        img: "img/rector.jfif",
        name: "Docente 1",
        position: "Cargo 1",
        studies: "Estudios 1",
      },
    ];

    document.getElementById("admin-btn").addEventListener("click", function () {
      displayCards(adminStaff);
    });

    document
      .getElementById("direct-btn")
      .addEventListener("click", function () {
        displayCards(directStaff);
      });

    document
      .getElementById("docente-btn")
      .addEventListener("click", function () {
        displayCards(docenteStaff);
      });
  }

  function displayCards(staffArray) {
    const container = document.getElementById("cards-container");
    container.innerHTML = staffArray
      .map((staff) =>
        createCard(staff.img, staff.name, staff.position, staff.studies)
      )
      .join("");
  }

  function createCard(image, name, position, studies) {
    return `
      <div class="card">
        <img src="${image}" alt="${name}" width="80" height="80"/>
        <div>
          <h3>${name}</h3>
          <p>${position}</p>
          <p>${studies}</p>
        </div>
      </div>
    `;
  }
});
