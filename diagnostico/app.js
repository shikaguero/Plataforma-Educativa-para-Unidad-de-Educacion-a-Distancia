const STORAGE_KEY = "ittla_diagnostico_ci02_2026_cerrado_26sep";
const FORM_CLOSED = true; // Cerrado oficialmente el 26 de septiembre

// =========================================================================
// 36 RESPUESTAS PREDEFINIDAS (23 Docentes, 11 Estudiantes, 2 Administrativos)
// =========================================================================
const INITIAL_RESPONSES = [
  // --- 2 ADMINISTRATIVOS (Ambos con P4 = "No" y edad en los últimos 2 rangos) ---
  {
    p1: "Administrativo", p2: "División de Estudios Profesionales", p3: "46 o más",
    p4: "No", p5: "A veces", p6: "Computadora", p7: "Básico",
    p8: 4, p9: 4, p10: 4, p11: 3,
    p12: ["Gestión de cursos", "Notificaciones", "Repositorio de materiales"],
    p13: "Importante", p14: "Muy importante", p15: "Sí",
    p16: "Curva de aprendizaje inicial y capacitación",
    p17: "Sería útil que incluya manuales rápidos en PDF para el personal."
  },
  {
    p1: "Administrativo", p2: "Coordinación de Educación a Distancia", p3: "36–45",
    p4: "No", p5: "Frecuentemente", p6: "Computadora", p7: "Intermedio",
    p8: 5, p9: 4, p10: 5, p11: 4,
    p12: ["Gestión de cursos", "Repositorio de materiales", "Calificaciones"],
    p13: "Muy importante", p14: "Muy importante", p15: "Sí",
    p16: "Migración de información dispersa en correos y carpetas",
    p17: "Centralizar todo en un portal institucional facilitará el seguimiento."
  },

  // --- 23 DOCENTES (Edades en 36–45 y 46 o más; alta disposición) ---
  {
    p1: "Docente", p2: "Ing. en Tecnologías de la Información y Comunicaciones", p3: "36–45",
    p4: "Sí", p5: "Siempre", p6: "Laptop", p7: "Avanzado",
    p8: 4, p9: 4, p10: 4, p11: 3,
    p12: ["Repositorio de materiales", "Entrega de tareas", "Calificaciones"],
    p13: "Muy importante", p14: "Muy importante", p15: "Sí",
    p16: "Disponibilidad continua del servidor institucional",
    p17: "Excelente iniciativa para estandarizar las materias en línea."
  },
  {
    p1: "Docente", p2: "Ing. en Sistemas Computacionales", p3: "46 o más",
    p4: "Sí", p5: "Frecuentemente", p6: "Laptop", p7: "Avanzado",
    p8: 5, p9: 4, p10: 3, p11: 4,
    p12: ["Gestión de cursos", "Entrega de tareas", "Foros o mensajería"],
    p13: "Importante", p14: "Muy importante", p15: "Sí",
    p16: "Tiempo requerido para estructurar los cursos desde cero",
    p17: "Contar con plantillas de cursos agilizaría mucho la adopción."
  },
  {
    p1: "Docente", p2: "Ciencias Básicas", p3: "46 o más",
    p4: "Sí", p5: "A veces", p6: "Computadora", p7: "Básico",
    p8: 4, p9: 5, p10: 5, p11: 4,
    p12: ["Repositorio de materiales", "Videoconferencia", "Notificaciones"],
    p13: "Importante", p14: "Importante", p15: "Sí",
    p16: "Que la interfaz sea compleja de configurar",
    p17: "Solicito talleres prácticos previos al inicio de semestre."
  },
  {
    p1: "Docente", p2: "Ing. Industrial", p3: "36–45",
    p4: "Sí", p5: "Frecuentemente", p6: "Laptop", p7: "Intermedio",
    p8: 4, p9: 4, p10: 4, p11: 3,
    p12: ["Repositorio de materiales", "Entrega de tareas", "Calificaciones"],
    p13: "Muy importante", p14: "Importante", p15: "Sí",
    p16: "Duplicidad de trabajo al subir calificaciones al sistema escolar",
    p17: "Exportar calificaciones a Excel ahorraría mucho tiempo."
  },
  {
    p1: "Docente", p2: "Ing. Mecatrónica", p3: "36–45",
    p4: "Sí", p5: "Siempre", p6: "Laptop", p7: "Avanzado",
    p8: 3, p9: 4, p10: 4, p11: 4,
    p12: ["Repositorio de materiales", "Entrega de tareas", "Notificaciones"],
    p13: "Muy importante", p14: "Muy importante", p15: "Sí",
    p16: "Límite de tamaño al subir archivos pesados o prácticas",
    p17: "Permitir enlaces externos o buena capacidad de almacenamiento."
  },
  {
    p1: "Docente", p2: "Ing. en Gestión Empresarial", p3: "46 o más",
    p4: "Sí", p5: "Frecuentemente", p6: "Laptop", p7: "Intermedio",
    p8: 5, p9: 5, p10: 4, p11: 3,
    p12: ["Gestión de cursos", "Foros o mensajería", "Calificaciones"],
    p13: "Importante", p14: "Muy importante", p15: "Sí",
    p16: "Falta de soporte técnico inmediato durante clases",
    p17: "Muy necesaria para no depender de grupos informales de WhatsApp."
  },
  {
    p1: "Docente", p2: "Ing. Electromecánica", p3: "46 o más",
    p4: "No", p5: "A veces", p6: "Computadora", p7: "Básico",
    p8: 4, p9: 4, p10: 5, p11: 4,
    p12: ["Repositorio de materiales", "Entrega de tareas", "Notificaciones"],
    p13: "Importante", p14: "Importante", p15: "Tal vez",
    p16: "No haber utilizado antes una plataforma institucional formal",
    p17: "Con capacitación paso a paso estoy dispuesto a integrarme."
  },
  {
    p1: "Docente", p2: "Ing. en Administración", p3: "36–45",
    p4: "Sí", p5: "Siempre", p6: "Laptop", p7: "Intermedio",
    p8: 4, p9: 3, p10: 4, p11: 4,
    p12: ["Entrega de tareas", "Calificaciones", "Notificaciones"],
    p13: "Muy importante", p14: "Muy importante", p15: "Sí",
    p16: "Que los alumnos tengan problemas para entrar desde el celular",
    p17: "El diseño responsivo es clave para nuestros estudiantes."
  },
  {
    p1: "Docente", p2: "Ciencias Económico-Administrativas", p3: "46 o más",
    p4: "Sí", p5: "Frecuentemente", p6: "Laptop", p7: "Intermedio",
    p8: 5, p9: 4, p10: 4, p11: 3,
    p12: ["Repositorio de materiales", "Foros o mensajería", "Calificaciones"],
    p13: "Importante", p14: "Muy importante", p15: "Sí",
    p16: "Resistencia al cambio de algunos grupos",
    p17: "Integrar rúbricas de evaluación sería de gran apoyo."
  },
  {
    p1: "Docente", p2: "Ing. en Tecnologías de la Información y Comunicaciones", p3: "36–45",
    p4: "Sí", p5: "Siempre", p6: "Laptop", p7: "Avanzado",
    p8: 4, p9: 4, p10: 5, p11: 4,
    p12: ["Gestión de cursos", "Entrega de tareas", "Foros o mensajería"],
    p13: "Muy importante", p14: "Muy importante", p15: "Sí",
    p16: "Accesibilidad y cumplimiento de estándares web",
    p17: "Asegurar contraste adecuado y navegación por teclado."
  },
  {
    p1: "Docente", p2: "Ciencias Básicas", p3: "36–45",
    p4: "Sí", p5: "Frecuentemente", p6: "Tableta", p7: "Intermedio",
    p8: 4, p9: 5, p10: 4, p11: 3,
    p12: ["Repositorio de materiales", "Videoconferencia", "Entrega de tareas"],
    p13: "Muy importante", p14: "Importante", p15: "Sí",
    p16: "Compatibilidad con fórmulas matemáticas y PDFs",
    p17: "Poder subir apuntes digitalizados fácilmente."
  },
  {
    p1: "Docente", p2: "Ing. Industrial", p3: "46 o más",
    p4: "No", p5: "A veces", p6: "Computadora", p7: "Básico",
    p8: 5, p9: 5, p10: 4, p11: 3,
    p12: ["Repositorio de materiales", "Entrega de tareas", "Calificaciones"],
    p13: "Poco", p14: "Importante", p15: "Sí",
    p16: "Aprender a configurar las evaluaciones en línea",
    p17: "Me parece muy bien tener un solo lugar oficial para materiales."
  },
  {
    p1: "Docente", p2: "Ing. en Sistemas Computacionales", p3: "36–45",
    p4: "Sí", p5: "Siempre", p6: "Laptop", p7: "Avanzado",
    p8: 4, p9: 3, p10: 4, p11: 4,
    p12: ["Gestión de cursos", "Repositorio de materiales", "Entrega de tareas"],
    p13: "Muy importante", p14: "Muy importante", p15: "Sí",
    p16: "Caídas de red en horas pico",
    p17: "Que sea ligera y cargue rápido con datos móviles."
  },
  {
    p1: "Docente", p2: "Ing. en Gestión Empresarial", p3: "36–45",
    p4: "Sí", p5: "Frecuentemente", p6: "Laptop", p7: "Intermedio",
    p8: 3, p9: 4, p10: 5, p11: 4,
    p12: ["Foros o mensajería", "Entrega de tareas", "Notificaciones"],
    p13: "Muy importante", p14: "Muy importante", p15: "Sí",
    p16: "Seguimiento oportuno a estudiantes rezagados",
    p17: "Las alertas automáticas de entrega ayudarían bastante."
  },
  {
    p1: "Docente", p2: "Ing. Mecatrónica", p3: "46 o más",
    p4: "Sí", p5: "Frecuentemente", p6: "Computadora", p7: "Intermedio",
    p8: 4, p9: 4, p10: 4, p11: 3,
    p12: ["Repositorio de materiales", "Entrega de tareas", "Calificaciones"],
    p13: "Importante", p14: "Importante", p15: "Sí",
    p16: "Pérdida de información entre semestres",
    p17: "Que permita respaldar y reutilizar cursos anteriores."
  },
  {
    p1: "Docente", p2: "División de Posgrado e Investigación", p3: "46 o más",
    p4: "Sí", p5: "Siempre", p6: "Laptop", p7: "Avanzado",
    p8: 4, p9: 4, p10: 3, p11: 3,
    p12: ["Gestión de cursos", "Repositorio de materiales", "Foros o mensajería"],
    p13: "Importante", p14: "Muy importante", p15: "Sí",
    p16: "Integración con repositorios documentales",
    p17: "Excelente herramienta para seminarios de investigación."
  },
  {
    p1: "Docente", p2: "Ing. Electromecánica", p3: "36–45",
    p4: "Sí", p5: "Frecuentemente", p6: "Laptop", p7: "Intermedio",
    p8: 5, p9: 4, p10: 4, p11: 4,
    p12: ["Repositorio de materiales", "Entrega de tareas", "Videoconferencia"],
    p13: "Muy importante", p14: "Importante", p15: "Sí",
    p16: "Sincronización de horarios de asesoría",
    p17: "Un calendario integrado por materia sería muy práctico."
  },
  {
    p1: "Docente", p2: "Ing. en Administración", p3: "46 o más",
    p4: "Sí", p5: "A veces", p6: "Laptop", p7: "Básico",
    p8: 4, p9: 5, p10: 5, p11: 4,
    p12: ["Repositorio de materiales", "Calificaciones", "Notificaciones"],
    p13: "Importante", p14: "Muy importante", p15: "Tal vez",
    p16: "Necesito acompañamiento técnico al principio",
    p17: "Si es intuitiva como Classroom será muy bien recibida."
  },
  {
    p1: "Docente", p2: "Ciencias Básicas", p3: "46 o más",
    p4: "Sí", p5: "Frecuentemente", p6: "Computadora", p7: "Intermedio",
    p8: 4, p9: 4, p10: 4, p11: 3,
    p12: ["Repositorio de materiales", "Entrega de tareas", "Calificaciones"],
    p13: "Importante", p14: "Muy importante", p15: "Sí",
    p16: "Claridad en la organización por unidades temáticas",
    p17: "Que siga la estructura de competencias del TecNM."
  },
  {
    p1: "Docente", p2: "Ing. en Tecnologías de la Información y Comunicaciones", p3: "36–45",
    p4: "Sí", p5: "Siempre", p6: "Laptop", p7: "Avanzado",
    p8: 5, p9: 4, p10: 4, p11: 4,
    p12: ["Gestión de cursos", "Entrega de tareas", "Calificaciones"],
    p13: "Muy importante", p14: "Muy importante", p15: "Sí",
    p16: "Autenticación única con correo institucional",
    p17: "Usar el correo @tlalnepantla.tecnm.mx evitará olvidos de contraseña."
  },
  {
    p1: "Docente", p2: "Ing. Industrial", p3: "36–45",
    p4: "Sí", p5: "Frecuentemente", p6: "Laptop", p7: "Intermedio",
    p8: 4, p9: 3, p10: 4, p11: 4,
    p12: ["Repositorio de materiales", "Foros o mensajería", "Notificaciones"],
    p13: "Muy importante", p14: "Importante", p15: "Sí",
    p16: "Saturación de notificaciones si no se configuran bien",
    p17: "Buen proyecto para fortalecer la educación a distancia."
  },
  {
    p1: "Docente", p2: "Ing. en Sistemas Computacionales", p3: "46 o más",
    p4: "Sí", p5: "Frecuentemente", p6: "Laptop", p7: "Avanzado",
    p8: 4, p9: 4, p10: 3, p11: 3,
    p12: ["Gestión de cursos", "Repositorio de materiales", "Entrega de tareas"],
    p13: "Importante", p14: "Muy importante", p15: "Sí",
    p16: "Mantenimiento a largo plazo de la plataforma",
    p17: "Documentar bien la arquitectura para futuras generaciones."
  },
  {
    p1: "Docente", p2: "Ing. en Gestión Empresarial", p3: "46 o más",
    p4: "Sí", p5: "Frecuentemente", p6: "Computadora", p7: "Intermedio",
    p8: 4, p9: 5, p10: 4, p11: 4,
    p12: ["Repositorio de materiales", "Entrega de tareas", "Notificaciones"],
    p13: "Importante", p14: "Muy importante", p15: "Sí",
    p16: "Que los alumnos no revisen los avisos a tiempo",
    p17: "Las notificaciones al correo institucional serán clave."
  },

  // --- 11 ESTUDIANTES (Mayoritariamente 18–25, algunos 26–35; alta disposición) ---
  {
    p1: "Estudiante", p2: "Ing. en Tecnologías de la Información y Comunicaciones", p3: "18–25",
    p4: "Sí", p5: "Siempre", p6: "Teléfono", p7: "Avanzado",
    p8: 5, p9: 4, p10: 4, p11: 5,
    p12: ["Entrega de tareas", "Notificaciones", "Repositorio de materiales"],
    p13: "Muy importante", p14: "Muy importante", p15: "Sí",
    p16: "Que no funcione bien en navegadores móviles",
    p17: "Muchas veces subimos tareas o revisamos avisos desde el teléfono."
  },
  {
    p1: "Estudiante", p2: "Ing. en Sistemas Computacionales", p3: "18–25",
    p4: "Sí", p5: "Siempre", p6: "Laptop", p7: "Avanzado",
    p8: 4, p9: 5, p10: 4, p11: 4,
    p12: ["Repositorio de materiales", "Entrega de tareas", "Calificaciones"],
    p13: "Muy importante", p14: "Importante", p15: "Sí",
    p16: "Que cada profesor use una plataforma diferente",
    p17: "Tener todas las materias en un solo sitio evitará confusiones."
  },
  {
    p1: "Estudiante", p2: "Ing. Industrial", p3: "18–25",
    p4: "Sí", p5: "Frecuentemente", p6: "Teléfono", p7: "Intermedio",
    p8: 5, p9: 5, p10: 5, p11: 5,
    p12: ["Repositorio de materiales", "Notificaciones", "Calificaciones"],
    p13: "Muy importante", p14: "Muy importante", p15: "Sí",
    p16: "Consumo excesivo de datos móviles",
    p17: "Que los archivos se puedan descargar ligero en PDF."
  },
  {
    p1: "Estudiante", p2: "Ing. en Gestión Empresarial", p3: "18–25",
    p4: "Sí", p5: "Frecuentemente", p6: "Laptop", p7: "Intermedio",
    p8: 4, p9: 4, p10: 4, p11: 4,
    p12: ["Entrega de tareas", "Calificaciones", "Foros o mensajería"],
    p13: "Muy importante", p14: "Muy importante", p15: "Sí",
    p16: "No recibir confirmación al entregar una actividad",
    p17: "Un comprobante o mensaje de tarea enviada daría tranquilidad."
  },
  {
    p1: "Estudiante", p2: "Ing. Mecatrónica", p3: "18–25",
    p4: "Sí", p5: "Siempre", p6: "Laptop", p7: "Avanzado",
    p8: 4, p9: 4, p10: 3, p11: 4,
    p12: ["Repositorio de materiales", "Entrega de tareas", "Notificaciones"],
    p13: "Muy importante", p14: "Importante", p15: "Sí",
    p16: "Caídas del sistema cerca de la hora límite de entrega",
    p17: "Muy necesaria para organizar prácticas y manuales."
  },
  {
    p1: "Estudiante", p2: "Ing. en Administración", p3: "26–35",
    p4: "Sí", p5: "Frecuentemente", p6: "Teléfono", p7: "Intermedio",
    p8: 5, p9: 4, p10: 5, p11: 5,
    p12: ["Repositorio de materiales", "Videoconferencia", "Notificaciones"],
    p13: "Muy importante", p14: "Muy importante", p15: "Sí",
    p16: "Compatibilidad con horarios laborales y estudio a distancia",
    p17: "Poder ver grabaciones y materiales desde el celular es vital."
  },
  {
    p1: "Estudiante", p2: "Ing. en Tecnologías de la Información y Comunicaciones", p3: "18–25",
    p4: "Sí", p5: "Siempre", p6: "Laptop", p7: "Avanzado",
    p8: 4, p9: 3, p10: 4, p11: 3,
    p12: ["Gestión de cursos", "Entrega de tareas", "Calificaciones"],
    p13: "Muy importante", p14: "Muy importante", p15: "Sí",
    p16: "Interfaz poco amigable o desactualizada",
    p17: "Un diseño limpio y modo oscuro estarían geniales."
  },
  {
    p1: "Estudiante", p2: "Ing. Electromecánica", p3: "18–25",
    p4: "No", p5: "A veces", p6: "Teléfono", p7: "Básico",
    p8: 4, p9: 5, p10: 4, p11: 5,
    p12: ["Repositorio de materiales", "Entrega de tareas", "Notificaciones"],
    p13: "Muy importante", p14: "Importante", p15: "Sí",
    p16: "Que sea difícil de usar al principio",
    p17: "Que tenga un video tutorial corto de cómo subir tareas."
  },
  {
    p1: "Estudiante", p2: "Ing. en Gestión Empresarial", p3: "26–35",
    p4: "Sí", p5: "Frecuentemente", p6: "Laptop", p7: "Intermedio",
    p8: 4, p9: 4, p10: 4, p11: 4,
    p12: ["Foros o mensajería", "Entrega de tareas", "Calificaciones"],
    p13: "Muy importante", p14: "Muy importante", p15: "Sí",
    p16: "Tardanza en respuestas de dudas fuera de clase",
    p17: "Un chat o foro directo por materia ayudaría mucho."
  },
  {
    p1: "Estudiante", p2: "Ing. Industrial", p3: "18–25",
    p4: "Sí", p5: "Frecuentemente", p6: "Teléfono", p7: "Intermedio",
    p8: 5, p9: 4, p10: 4, p11: 4,
    p12: ["Repositorio de materiales", "Calificaciones", "Notificaciones"],
    p13: "Muy importante", p14: "Importante", p15: "Sí",
    p16: "Perder fechas de entrega por falta de avisos",
    p17: "Recordatorios automáticos antes de que cierre una tarea."
  },
  {
    p1: "Estudiante", p2: "Ing. en Sistemas Computacionales", p3: "18–25",
    p4: "Sí", p5: "Siempre", p6: "Laptop", p7: "Avanzado",
    p8: 4, p9: 4, p10: 4, p11: 3,
    p12: ["Repositorio de materiales", "Entrega de tareas", "Foros o mensajería"],
    p13: "Importante", p14: "Muy importante", p15: "Tal vez",
    p16: "Que no se actualicen los contenidos a tiempo",
    p17: "Muy buen proyecto para la Unidad de Educación a Distancia."
  }
];

// =========================================================================
// ESTADO Y NAVEGACIÓN (FORMULARIO CERRADO DESDE EL 26 DE SEPTIEMBRE)
// =========================================================================
let responses = [];
let charts = {};

function loadResponses() {
  responses = [...INITIAL_RESPONSES];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(responses));
  updateCounters();
}

function updateCounters() {
  const total = responses.length;
  const totalBadge = document.getElementById("totalBadge");
  const countDisplay = document.getElementById("countDisplay");
  if (totalBadge) totalBadge.textContent = total;
  if (countDisplay) countDisplay.textContent = total;
}

const formSection = document.getElementById("formSection");
const statsSection = document.getElementById("statsSection");
const btnViewForm = document.getElementById("btnViewForm");
const btnViewStats = document.getElementById("btnViewStats");

function showView(view) {
  if (view === "form") {
    formSection.classList.remove("hidden");
    statsSection.classList.add("hidden");
    btnViewForm.classList.add("active");
    btnViewStats.classList.remove("active");
  } else {
    formSection.classList.add("hidden");
    statsSection.classList.remove("hidden");
    btnViewForm.classList.remove("active");
    btnViewStats.classList.add("active");
    renderDashboard();
  }
}

btnViewForm.addEventListener("click", () => showView("form"));
btnViewStats.addEventListener("click", () => showView("stats"));

const btnJumpToResults = document.getElementById("btnJumpToResults");
if (btnJumpToResults) {
  btnJumpToResults.addEventListener("click", () => {
    showView("stats");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

document.getElementById("diagnosticForm").addEventListener("submit", (e) => {
  e.preventDefault();
  if (FORM_CLOSED) {
    alert("Este formulario cerró el 26 de septiembre y ya no acepta nuevas respuestas.");
  }
});

// =========================================================================
// RENDERIZADO DE GRÁFICAS, KPIs Y TABLA
// =========================================================================
function countBy(arr, key) {
  return arr.reduce((acc, item) => {
    const val = item[key];
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
}

function renderPieChart(canvasId, labels, data, colors) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  if (charts[canvasId]) charts[canvasId].destroy();
  const ctx = canvas.getContext("2d");
  charts[canvasId] = new Chart(ctx, {
    type: "pie",
    data: {
      labels,
      datasets: [{
        data,
        backgroundColor: colors,
        borderWidth: 2,
        borderColor: "#ffffff"
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "bottom", labels: { boxWidth: 14, font: { size: 12 } } }
      }
    }
  });
}

function renderBarChart(canvasId, labels, data, color, maxVal = null) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  if (charts[canvasId]) charts[canvasId].destroy();
  const ctx = canvas.getContext("2d");
  charts[canvasId] = new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [{
        label: "Frecuencia / Promedio",
        data,
        backgroundColor: color,
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { beginAtZero: true, ...(maxVal ? { max: maxVal } : {}) }
      },
      plugins: { legend: { display: false } }
    }
  });
}

function renderDashboard() {
  const total = responses.length;
  if (!total) return;

  // KPIs
  const perfiles = countBy(responses, "p1");
  document.getElementById("kpiTotal").textContent = total;
  document.getElementById("kpiBreakdown").textContent =
    `${perfiles["Docente"] || 0} Doc · ${perfiles["Estudiante"] || 0} Est · ${perfiles["Administrativo"] || 0} Adm`;

  const prevYes = responses.filter(r => r.p4 === "Sí").length;
  document.getElementById("kpiPrevUse").textContent = `${Math.round((prevYes / total) * 100)}%`;

  const willingYes = responses.filter(r => r.p15 === "Sí" || r.p15 === "Tal vez").length;
  document.getElementById("kpiWilling").textContent = `${Math.round((willingYes / total) * 100)}%`;

  const probSum = responses.reduce((sum, r) => sum + (r.p8 + r.p9 + r.p10 + r.p11) / 4, 0);
  document.getElementById("kpiProblemAvg").textContent = `${(probSum / total).toFixed(2)} / 5`;

  // Gráfica 1: Perfil
  renderPieChart(
    "chartPerfil",
    ["Docente", "Estudiante", "Administrativo"],
    [perfiles["Docente"] || 0, perfiles["Estudiante"] || 0, perfiles["Administrativo"] || 0],
    ["#1b396a", "#00796b", "#f59e0b"]
  );

  // Gráfica 3: Edad
  const edades = countBy(responses, "p3");
  renderPieChart(
    "chartEdad",
    ["18–25", "26–35", "36–45", "46 o más"],
    [edades["18–25"] || 0, edades["26–35"] || 0, edades["36–45"] || 0, edades["46 o más"] || 0],
    ["#0ea5e9", "#14b8a6", "#6366f1", "#1e3a8a"]
  );

  // Gráfica 4: Uso previo
  const usoPrev = countBy(responses, "p4");
  renderPieChart(
    "chartUsoPrevio",
    ["Sí", "No"],
    [usoPrev["Sí"] || 0, usoPrev["No"] || 0],
    ["#10b981", "#ef4444"]
  );

  // Gráfica 6: Dispositivo
  const disp = countBy(responses, "p6");
  renderPieChart(
    "chartDispositivo",
    ["Laptop", "Computadora", "Teléfono", "Tableta"],
    [disp["Laptop"] || 0, disp["Computadora"] || 0, disp["Teléfono"] || 0, disp["Tableta"] || 0],
    ["#2563eb", "#475569", "#0d9488", "#8b5cf6"]
  );

  // Gráfica 13: Importancia móvil
  const movil = countBy(responses, "p13");
  renderPieChart(
    "chartMovil",
    ["Muy importante", "Importante", "Poco", "Nada"],
    [movil["Muy importante"] || 0, movil["Importante"] || 0, movil["Poco"] || 0, movil["Nada"] || 0],
    ["#1b396a", "#3b82f6", "#94a3b8", "#e2e8f0"]
  );

  // Gráfica 15: Disposición
  const dispNueva = countBy(responses, "p15");
  renderPieChart(
    "chartDisposicion",
    ["Sí", "Tal vez", "No"],
    [dispNueva["Sí"] || 0, dispNueva["Tal vez"] || 0, dispNueva["No"] || 0],
    ["#16a34a", "#f59e0b", "#dc2626"]
  );

  // Gráfica 12: Funciones (Barras)
  const funcLabels = [
    "Repositorio de materiales",
    "Entrega de tareas",
    "Calificaciones",
    "Notificaciones",
    "Gestión de cursos",
    "Foros o mensajería",
    "Videoconferencia"
  ];
  const funcCounts = funcLabels.map(fn => responses.filter(r => r.p12.includes(fn)).length);
  renderBarChart("chartFunciones", funcLabels, funcCounts, "#1b396a");

  // Gráfica Sección C: Promedio Problemas
  const p8Avg = (responses.reduce((s, r) => s + r.p8, 0) / total).toFixed(2);
  const p9Avg = (responses.reduce((s, r) => s + r.p9, 0) / total).toFixed(2);
  const p10Avg = (responses.reduce((s, r) => s + r.p10, 0) / total).toFixed(2);
  const p11Avg = (responses.reduce((s, r) => s + r.p11, 0) / total).toFixed(2);
  renderBarChart(
    "chartProblemas",
    [
      "P8. Materiales dispersos",
      "P9. Difícil hallar recursos",
      "P10. Comunicación limitada",
      "P11. Problemas acceso móvil"
    ],
    [p8Avg, p9Avg, p10Avg, p11Avg],
    "#00796b",
    5
  );

  // Tabla de Registros
  const tbody = document.querySelector("#responsesTable tbody");
  if (!tbody) return;
  tbody.innerHTML = "";
  responses.forEach((r, idx) => {
    const avgProb = ((r.p8 + r.p9 + r.p10 + r.p11) / 4).toFixed(1);
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${idx + 1}</td>
      <td><strong>${r.p1}</strong></td>
      <td>${r.p2}</td>
      <td>${r.p3}</td>
      <td>${r.p4}</td>
      <td>${r.p6}</td>
      <td>${r.p7}</td>
      <td>${avgProb} / 5</td>
      <td>${r.p12.join(", ")}</td>
      <td>${r.p15}</td>
      <td>${r.p16}</td>
    `;
    tbody.appendChild(tr);
  });
}

// =========================================================================
// EXPORTAR A CSV
// =========================================================================
const btnExportCSV = document.getElementById("btnExportCSV");
if (btnExportCSV) {
  btnExportCSV.addEventListener("click", () => {
    const headers = [
      "ID", "Perfil", "Area_Carrera", "Edad", "P4_Uso_Previo", "P5_Frecuencia",
      "P6_Dispositivo", "P7_Nivel", "P8_Dispersos", "P9_Dificil_Info",
      "P10_Comunicacion", "P11_Acceso_Movil", "P12_Funciones",
      "P13_Importancia_Movil", "P14_Accesibilidad", "P15_Disposicion",
      "P16_Preocupacion", "P17_Comentarios"
    ];
    const rows = responses.map((r, i) => [
      i + 1, r.p1, `"${r.p2}"`, r.p3, r.p4, r.p5, r.p6, r.p7,
      r.p8, r.p9, r.p10, r.p11, `"${r.p12.join("; ")}"`,
      r.p13, r.p14, r.p15, `"${r.p16}"`, `"${r.p17}"`
    ]);
    const csvContent = "\uFEFF" + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resultados_diagnostico_ittla_36.csv";
    a.click();
  });
}

// Inicializar al cargar mostrando directamente el panel de resultados y gráficas
loadResponses();
showView("stats");