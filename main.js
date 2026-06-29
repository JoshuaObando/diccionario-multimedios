const terms = [
  {
    name: "pnpm",
    category: "control",
    definition: "Gestor de paquetes más eficiente que npm. Usa hardlinks para no duplicar módulos entre proyectos.",
    context: "Comandos del curso: pnpm add, pnpm install, pnpm run dev."
  },
  {
    name: "Git — Ramas",
    category: "control",
    definition: "Caminos paralelos de desarrollo. Permiten trabajar en nuevas funciones sin afectar la rama principal (main).",
    context: "git switch -c nueva-rama (crea), git merge nombre-rama (fusiona)."
  },
  {
    name: "GitHub Pages",
    category: "control",
    definition: "Servicio gratuito de GitHub para alojar sitios estáticos en user.github.io/repo. Solo frontend, sin backend.",
    context: "Se despliega con: pnpm add -D gh-pages y luego gh-pages -d src/."
  },
  {
    name: "clip-path",
    category: "css",
    definition: "Recorta un elemento a una forma geométrica: circle(), polygon(), inset(). El contenido fuera del clip se oculta.",
    context: "Muy usado para formas irregulares en secciones hero y efectos decorativos."
  },
  {
    name: "@layer",
    category: "css",
    definition: "Crea capas explícitas de cascada. Las capas declaradas al final tienen mayor prioridad sin importar la especificidad.",
    context: "Alternativa limpia a !important. Ejemplo: @layer base, components, theme."
  },
  {
    name: "backdrop-filter",
    category: "css",
    definition: "Aplica efectos visuales al fondo detrás de un elemento, creando el efecto de vidrio (glassmorphism).",
    context: "Ejemplo: backdrop-filter: blur(10px). Se usó en la infografía de criptomonedas del curso."
  },
  {
    name: "querySelector",
    category: "dom",
    definition: "Busca en el DOM el primer elemento que coincida con un selector CSS. Retorna null si no encuentra nada.",
    context: "querySelectorAll retorna todos. No es un array; usar Array.from() para iterar con map/filter."
  },
  {
    name: "classList",
    category: "dom",
    definition: "Objeto para gestionar clases CSS de un elemento. Métodos: .add(), .remove(), .toggle(), .contains().",
    context: "Evitar modificar element.className directamente porque sobreescribe todas las clases."
  },
  {
    name: "Shadow DOM",
    category: "dom",
    definition: "DOM encapsulado dentro de un elemento. Los estilos internos no afectan al exterior y viceversa.",
    context: "Se crea con this.attachShadow({ mode: 'open' }). Es la base de los Web Components."
  },
  {
    name: "Delegación de eventos",
    category: "eventos",
    definition: "Coloca un solo listener en el padre para manejar eventos de múltiples hijos usando event.target.",
    context: "Esencial para listas dinámicas. Evita añadir y quitar listeners individualmente en cada hijo."
  },
  {
    name: "IntersectionObserver",
    category: "eventos",
    definition: "Observa cuándo un elemento entra o sale del viewport, sin bloquear el hilo principal con eventos de scroll.",
    context: "Es la base del lazy loading. new IntersectionObserver(callback, { threshold: 0.5 })."
  },
  {
    name: "localStorage",
    category: "eventos",
    definition: "Persiste datos clave-valor en el cliente entre sesiones. Solo admite strings; objetos con JSON.stringify/parse.",
    context: "No guardar datos sensibles. Límite de ~5MB. sessionStorage solo dura la pestaña activa."
  },
  {
    name: "Tree Shaking",
    category: "rendimiento",
    definition: "El bundler elimina del build final el código no utilizado. Requiere módulos ESM para funcionar.",
    context: "Vite lo aplica automáticamente en pnpm run build. No funciona con require() de CommonJS."
  },
  {
    name: "Core Web Vitals",
    category: "rendimiento",
    definition: "Métricas de Google: LCP (carga), INP (interactividad) y CLS (estabilidad visual). Afectan el SEO.",
    context: "Se miden con Lighthouse en Chrome DevTools. LCP < 2.5s, INP < 200ms, CLS < 0.1."
  },
  {
    name: "Listeners Huérfanos",
    category: "rendimiento",
    definition: "Listener activo en un elemento ya eliminado del DOM. Impide que el Garbage Collector libere su memoria.",
    context: "Se previene con removeEventListener, la opción { once: true } o AbortController."
  },
  {
    name: "Custom Elements",
    category: "webcomponents",
    definition: "API para definir etiquetas HTML propias extendiendo HTMLElement. El nombre debe tener al menos un guion.",
    context: "customElements.define('mi-elemento', MiClase). Luego se usa en HTML como <mi-elemento>."
  },
  {
    name: "Slots",
    category: "webcomponents",
    definition: "Ranuras en el Shadow DOM donde se proyecta el contenido escrito entre las etiquetas del componente.",
    context: "<slot name='titulo'> permite slots con nombre para proyectar contenido específico."
  },
  {
    name: "CSS Parts (::part())",
    category: "webcomponents",
    definition: "Permite estilar desde fuera partes del Shadow DOM marcadas con el atributo part='nombre'.",
    context: "Las CSS variables también atraviesan el Shadow DOM para permitir theming desde el exterior."
  }
];

// ── DOM ──
const termsList     = document.getElementById("termsList");
const searchInput   = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filters button");
const modal         = document.getElementById("termModal");
const closeModalBtn = document.getElementById("closeModal");
const modalTitle    = document.getElementById("modalTitle");
const modalDef      = document.getElementById("modalDefinition");
const modalCat      = document.getElementById("modalCategory");
const modalCtx      = document.getElementById("modalContext");

let currentFilter = "all";

// ── Render ──
function renderTerms() {
  const query = searchInput.value.toLowerCase().trim();

  const filtered = terms.filter(t => {
    const matchCat    = currentFilter === "all" || t.category === currentFilter;
    const matchSearch = !query || t.name.toLowerCase().includes(query) || t.definition.toLowerCase().includes(query);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    termsList.innerHTML = `<p class="empty">No se encontraron términos.</p>`;
    return;
  }

  termsList.innerHTML = filtered.map(t => `
    <div class="term-card" data-name="${t.name}">
      <span class="term-category">${t.category}</span>
      <span class="term-name">${t.name}</span>
      <p class="term-preview">${t.definition}</p>
    </div>
  `).join("");

  termsList.querySelectorAll(".term-card").forEach(card => {
    card.addEventListener("click", () => {
      const term = terms.find(t => t.name === card.dataset.name);
      openModal(term);
    });
  });
}

// ── Modal ──
function openModal(term) {
  modalCat.textContent   = term.category;
  modalTitle.textContent = term.name;
  modalDef.textContent   = term.definition;
  modalCtx.textContent   = term.context;
  modal.showModal();
}

closeModalBtn.addEventListener("click", () => modal.close());
modal.addEventListener("click", e => { if (e.target === modal) modal.close(); });

// ── Filtros ──
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderTerms();
  });
});

// ── Búsqueda ──
searchInput.addEventListener("input", renderTerms);

// ── Init ──
renderTerms();