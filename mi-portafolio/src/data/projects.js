const projects = [
  {
    id: "restaurantOps",
    featured: true,
    title: "RestaurantOps - Plataforma de gestion operativa para restaurantes",
    shortTitle: "RestaurantOps",
    image: `${process.env.PUBLIC_URL}/images/cocuiza1.png`,
    fallbackLabel: "RestaurantOps",
    statusTags: ["Full Stack", "Proyecto real", "En desarrollo", "Operativa digital"],
    summary:
      "Aplicacion full stack orientada a digitalizar y centralizar procesos operativos de restauracion: limpieza, control de temperaturas, facturas/proveedores e inventario.",
    problem:
      "Sustituye flujos manuales o dispersos por una plataforma unica con trazabilidad, mejorando control diario, consistencia de datos y capacidad de auditoria operativa.",
    stack: [
      "React",
      "Vite",
      "React Router",
      "Sass/SCSS",
      "Axios",
      "Node.js",
      "Express",
      "SQLite",
      "Multer",
      "Vitest",
      "Testing Library",
      "ESLint",
      "SweetAlert2",
      "Tesseract.js"
    ],
    contribution: [
      "Diseno e integracion de arquitectura frontend-backend",
      "Conexion de pantallas clave con API versionada (/v1)",
      "Autenticacion con token bearer y proteccion de rutas privadas",
      "Validaciones, manejo de errores y consolidacion de modulos de negocio",
      "Mejoras de UX/UI en formularios y filtros",
      "Verificacion de calidad con lint, build y pruebas automatizadas"
    ],
    learnings:
      "Adaptacion de migraciones entre stacks, equilibrio entre MVP y robustez tecnica, y mejora de arquitectura, contratos API, autenticacion, testing y escalabilidad.",
    privateNotice: "Demo no pública por confidencialidad del producto.",
    demoLink: "#",
    repoLink: "#"
  },
  {
    id: "visible",
    featured: false,
    title: "Visible",
    shortTitle: "Visible",
    featuredVideo: `${process.env.PUBLIC_URL}/images/visible-preview.mp4`,
    featuredImage: `${process.env.PUBLIC_URL}/images/vihsible.png`,
    image: `${process.env.PUBLIC_URL}/images/vihsible.png`,
    fallbackLabel: "Visible",
    statusTags: ["IA aplicada", "Conversacional"],
    summary:
      "Proyecto orientado a experiencia conversacional para FELGTBI+, con arquitectura separada entre frontend y servicios backend conectados a un LLM para respuestas personalizadas.",
    problem:
      "Facilita el acceso a informacion y acompanamiento digital con una interfaz clara y una logica de respuesta contextual.",
    stack: ["React", "JavaScript", "Node.js", "APIs", "LLM"],
    contribution: [
      "Diseno de experiencia conversacional y estructura de integracion",
      "Coordinacion de frontend con servicios backend",
      "Ajustes para mejorar claridad, velocidad de respuesta y usabilidad"
    ],
    learnings:
      "Aprendi a disenar flujos conversacionales mas utiles, ajustar prompts con foco en claridad y coordinar mejor integraciones entre frontend y servicios de IA.",
    privateNotice: "Demo no pública por confidencialidad del producto.",
    demoLink: "https://chatbot-ai-felgtbi.netlify.app/"
  },
  {
    id: "travelOps",
    featured: false,
    title: "TravelOps",
    shortTitle: "TravelOps",
    image: `${process.env.PUBLIC_URL}/images/Travelops.png`,
    fallbackLabel: "TravelOps",
    statusTags: ["Multi-evento", "Admin & guest", "RSVP management"],
    summary:
      "Plataforma web multi-evento para gestionar itinerarios y confirmaciones de asistencia, con flujo publico para invitados y panel de administracion para la operativa completa del evento.",
    problem:
      "Centraliza actividades, contactos y respuestas RSVP en una sola aplicacion, aportando una gestion mas estructurada, segura y escalable para eventos con multiples participantes.",
    stack: ["React", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "JWT"],
    contribution: [
      "Desarrolle una arquitectura full stack para flujos publico y admin, implementando autenticacion con JWT para administracion, acceso por PIN para invitados y una base escalable para gestionar eventos, actividades, contactos y reporting RSVP."
    ],
    learnings:
      "Consolide buenas practicas para modelado de datos en eventos multiusuario, gestion de permisos por rol y trazabilidad de estados RSVP.",
    privateNotice: "Demo no pública por confidencialidad del producto.",
    demoLink: "#",
    repoLink: "#"
  }
];

export default projects;
