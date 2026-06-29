// ============================================================
//  BASE DE DATOS DE TÉRMINOS (basada en los archivos del curso)
// ============================================================
const terms = [
  // --- FUNDAMENTOS ---
  {
    name: "CLI / Terminal",
    category: "fundamentos",
    definition:
      "Interfaz de texto que permite interactuar con el sistema operativo mediante comandos. Es la herramienta principal para ejecutar tareas como instalar paquetes, usar Git y gestionar proyectos.",
    context:
      "Se usa con comandos como `pnpm`, `git`, `mkdir`, `touch`, etc. Es fundamental en el desarrollo moderno."
  },
  {
    name: "Transpilador / Bundler",
    category: "fundamentos",
    definition:
      "Herramienta que convierte el código fuente (en `src/`) a un formato que los navegadores pueden ejecutar. También combina archivos (bundling) y añade hashes para control de caché.",
    context:
      "Ejemplo: Vite. El código optimizado se genera en la carpeta `dist/`."
  },
  {
    name: "Gestor de Paquetes",
    category: "fundamentos",
    definition:
      "Herramienta que automatiza la instalación, actualización y eliminación de librerías y dependencias de un proyecto.",
    context:
      "En el curso se usa pnpm, que es más rápido y eficiente que npm o yarn. Gestiona las dependencias listadas en `package.json`."
  },
  {
    name: "SemVer (Versionado Semántico)",
    category: "fundamentos",
    definition:
      "Sistema de versionado con tres números: Major.Minor.Patch (ej. 4.0.2). Indica el tipo de cambios en una nueva versión.",
    context:
      "Major = cambios incompatibles; Minor = nuevas funcionalidades compatibles; Patch = correcciones de errores."
  },

  // --- GIT ---
  {
    name: "Control de Versiones (Git)",
    category: "git",
    definition:
      "Sistema que registra cambios en archivos a lo largo del tiempo, permitiendo revertir a versiones anteriores y colaborar con otros.",
    context:
      "Comandos clave: `git init`, `git add`, `git commit`, `git push`, `git pull`."
  },
  {
    name: "Commit",
    category: "git",
    definition:
      "Una 'foto' o punto de control del estado de los archivos en un momento dado. Cada commit tiene un identificador único y un mensaje descriptivo.",
    context:
      "Es la unidad básica en Git. Se guarda localmente y luego se sube al repositorio remoto."
  },
  {
    name: "Repositorio Remoto",
    category: "git",
    definition:
      "Copia del proyecto alojada en un servidor en la nube (como GitHub). Permite la colaboración y sirve como respaldo.",
    context:
      "Se conecta al local con `git remote add origin <URL>`. Se usa `git push` y `git pull` para sincronizar."
  },
  {
    name: "Rama (Branch)",
    category: "git",
    definition:
      "Línea de desarrollo independiente que permite trabajar en nuevas funcionalidades sin afectar la rama principal.",
    context:
      "Los cambios de una rama se integran en la principal mediante un `merge`."
  },
  {
    name: "Claves SSH",
    category: "git",
    definition:
      "Par de claves (pública y privada) que autentican la conexión con un servidor remoto de forma segura, sin necesidad de usuario y contraseña.",
    context:
      "La clave pública se añade a GitHub y la privada se guarda en el ordenador local."
  },

  // --- JAVASCRIPT ---
  {
    name: "DOM (Document Object Model)",
    category: "javascript",
    definition:
      "Representación en forma de árbol de un documento HTML. JavaScript puede acceder y modificar este árbol para cambiar la página dinámicamente.",
    context:
      "Es la interfaz que permite a JavaScript interactuar con el HTML de la página."
  },
  {
    name: "Shadow DOM",
    category: "javascript",
    definition:
      "DOM 'oculto' adjunto a un elemento. Su CSS y JavaScript están encapsulados, sin afectar al resto de la página.",
    context:
      "Se crea con `element.attachShadow({ mode: 'open' })`. Es la base de los Web Components."
  },
  {
    name: "Eventos (Javascript)",
    category: "javascript",
    definition:
      "Acciones o sucesos que ocurren en el navegador (clic, tecla, carga...) a los que JavaScript puede reaccionar.",
    context:
      "La forma moderna de escucharlos es con `element.addEventListener('click', miFuncion)`."
  },
  {
    name: "Propagación de Eventos (Bubbling/Capture)",
    category: "javascript",
    definition:
      "Proceso por el cual un evento se propaga por el DOM. Bubbling: sube desde el objetivo hasta la raíz. Capture: baja desde la raíz hasta el objetivo.",
    context:
      "Es fundamental para entender la delegación de eventos y cómo funcionan los listeners."
  },
  {
    name: "Delegación de Eventos",
    category: "javascript",
    definition:
      "Técnica que consiste en añadir un único listener al elemento padre en lugar de uno a cada hijo. El padre identifica al hijo mediante `ev.target`.",
    context:
      "Es una técnica de optimización y simplicidad, especialmente útil para listas grandes o elementos dinámicos."
  },
  {
    name: "Módulos ESM (ECMAScript Modules)",
    category: "javascript",
    definition:
      "Sistema de módulos estándar de JavaScript. Usa `import` para cargar funcionalidades y `export` para exponerlas.",
    context:
      "Es la alternativa moderna a CommonJS (`require`). Se soporta nativamente en navegadores con `<script type='module'>`."
  },
  {
    name: "Iteradores y Generadores",
    category: "javascript",
    definition:
      "Iterador: objeto que recorre una secuencia de valores con `.next()`. Generador: función con `function*` que pausa su ejecución con `yield`.",
    context:
      "Son herramientas para manejar secuencias de datos de manera eficiente y bajo demanda."
  },
  {
    name: "Big O(N) / Complejidad Algorítmica",
    category: "javascript",
    definition:
      "Métrica que mide cómo el rendimiento (tiempo o memoria) escala con el tamaño de los datos de entrada (N).",
    context:
      "Ejemplos: O(1) = constante, O(n) = lineal, O(n²) = cuadrática."
  },

  // --- WEB COMPONENTS ---
  {
    name: "Custom Element",
    category: "webcomponents",
    definition:
      "Elemento HTML que uno mismo define, con su propio comportamiento y estilo. Se registra con `customElements.define('nombre-con-guion', Clase)`.",
    context:
      "Es la base de los Web Components. El nombre debe contener un guion (`-`)."
  },
  {
    name: "Slots",
    category: "webcomponents",
    definition:
      "Ranuras en la plantilla de un Web Component donde se puede insertar contenido HTML desde el exterior. Permite personalizar el componente.",
    context:
      "Se usan dentro del Shadow DOM para pasar contenido (Light DOM) a partes específicas del componente."
  },

  // --- CSS ---
  {
    name: "Cascada CSS / Especificidad",
    category: "css",
    definition:
      "Conjunto de reglas que determinan qué estilos se aplican cuando hay conflictos. La especificidad es el 'peso' de los selectores (ID > Clase > Elemento).",
    context:
      "Es un concepto fundamental para entender por qué un estilo se aplica sobre otro."
  },
  {
    name: "Capas de Cascada (@layer)",
    category: "css",
    definition:
      "Forma moderna de gestionar la especificidad y el orden de la cascada. Agrupa estilos en capas para controlar su orden de aplicación.",
    context:
      "Es una alternativa más limpia al uso excesivo de `!important`."
  },
  {
    name: "@scope (CSS)",
    category: "css",
    definition:
      "Regla CSS que limita el alcance de los estilos a un subárbol específico del DOM, evitando que afecten a otros elementos.",
    context:
      "Permite crear estilos más locales y predecibles, evitando conflictos globales."
  },
  {
    name: "Container Queries",
    category: "css",
    definition:
      "Permite aplicar estilos a un elemento en función del tamaño (u otras características) de un contenedor padre, no del viewport.",
    context:
      "Es una técnica más granular para crear componentes verdaderamente independientes y reutilizables."
  },
  {
    name: "clip-path / Máscaras",
    category: "css",
    definition:
      "Permiten recortar o enmascarar visualmente un elemento. `clip-path` usa formas geométricas o un `path()` para definir la zona visible.",
    context:
      "Son técnicas para crear efectos visuales complejos, como formas irregulares o fondos con texturas."
  },

  // --- RENDIMIENTO ---
  {
    name: "Memory Leak (Fuga de Memoria)",
    category: "rendimiento",
    definition:
      "Ocurre cuando la aplicación retiene referencias a objetos que ya no son necesarios, impidiendo que el Garbage Collector libere su memoria.",
    context:
      "Es un problema común relacionado con variables globales, listeners huérfanos o cachés sin límite."
  },
  {
    name: "Listeners Huérfanos",
    category: "rendimiento",
    definition:
      "Listener de eventos que permanece activo en un elemento que ha sido eliminado del DOM. Impide que el Garbage Collector libere memoria.",
    context:
      "Se soluciona usando `AbortController`, `removeEventListener` o delegación de eventos."
  },
  {
    name: "Windowing / Listas Virtuales",
    category: "rendimiento",
    definition:
      "Técnica de optimización que renderiza solo los elementos visibles en el viewport, en lugar de todos los nodos de una lista larga.",
    context:
      "Reduce drásticamente el número de nodos en el DOM, mejorando el rendimiento y el uso de memoria."
  },
  {
    name: "Tree Shaking",
    category: "rendimiento",
    definition:
      "Proceso de un bundler (como Vite) que elimina del bundle final las partes de las librerías que no se están utilizando.",
    context:
      "Requiere el uso de módulos ESM (`import`/`export`). Ayuda a reducir el tamaño del bundle."
  },
  {
    name: "Core Web Vitals (CWV)",
    category: "rendimiento",
    definition:
      "Métricas estandarizadas por Google para medir la experiencia del usuario. Incluyen LCP (carga), INP (interacción) y CLS (estabilidad visual).",
    context:
      "Son señales de rendimiento importantes para el SEO y la experiencia del usuario."
  }
];

// ============================================================
//  RENDERIZADO DE LA LISTA
// ============================================================
const termsList = document.getElementById("termsList");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filters button");

// Referencias al modal
const modal = document.getElementById("termModal");
const closeModalBtn = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalDefinition = document.getElementById("modalDefinition");
const modalCategory = document.getElementById("modalCategory");
const modalContext = document.getElementById("modalContext");

// Estado
let currentFilter = "all";
let searchQuery = "";

// Función para renderizar los términos
function renderTerms() {
  const filtered = terms.filter((term) => {
    // Filtro por categoría
    const matchCategory = currentFilter === "all" || term.category === currentFilter;

    // Filtro por búsqueda (nombre o definición)
    const query = searchQuery.toLowerCase().trim();
    const matchSearch =
      query === "" ||
      term.name.toLowerCase().includes(query) ||
      term.definition.toLowerCase().includes(query);

    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    termsList.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--color-text-muted);">
        <p>No se encontraron términos que coincidan con tu búsqueda.</p>
      </div>
    `;
    return;
  }

  termsList.innerHTML = filtered
    .map(
      (term) => `
        <div class="term-card" data-term='${JSON.stringify(term).replace(
          /'/g,
          "&#39;"
        )}'>
          <div class="term-name">${term.name}</div>
          <div class="term-category">${term.category}</div>
          <div class="term-preview">${term.definition.slice(0, 80)}...</div>
        </div>
      `
    )
    .join("");

  // Añadir listeners a las tarjetas para abrir el modal
  document.querySelectorAll(".term-card").forEach((card) => {
    card.addEventListener("click", () => {
      const termData = JSON.parse(card.dataset.term);
      openModal(termData);
    });
  });
}

// ============================================================
//  MODAL
// ============================================================
function openModal(term) {
  modalTitle.textContent = term.name;
  modalDefinition.textContent = term.definition;
  modalCategory.textContent = `📂 ${term.category}`;
  modalContext.textContent = term.context;
  modal.showModal();
}

// Cerrar modal
function closeModal() {
  modal.close();
}

closeModalBtn.addEventListener("click", closeModal);

// Cerrar modal al hacer clic fuera
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// Cerrar modal con Escape (ya lo hace el dialog por defecto)

// ============================================================
//  FILTROS Y BÚSQUEDA
// ============================================================
// Filtros por categoría
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Actualizar estado visual
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Actualizar filtro y re-renderizar
    currentFilter = btn.dataset.filter;
    renderTerms();
  });
});

// Búsqueda en tiempo real
searchInput.addEventListener("input", () => {
  searchQuery = searchInput.value;
  renderTerms();
});

//se inicializa la lista de términos al cargar la página
renderTerms();