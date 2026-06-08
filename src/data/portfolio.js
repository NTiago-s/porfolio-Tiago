export const SITE = {
  name: "Tiago Navarro",
  role: "Desarrollador Web Full Stack",
  location: "Misiones, Argentina",
  email: "navarrotiago194@gmail.com",
  github: "https://github.com/NTiago-s",
  linkedin: "https://www.linkedin.com/in/tiago-navarro0/",
  cv: "/Navarro Tiago CV.pdf",
  url: "https://navarrotiago.vercel.app/",
  description:
    "Portfolio de Tiago Navarro, desarrollador web full stack especializado en interfaces modernas, productos digitales y experiencias performantes.",
};

export const NAVIGATION = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Sobre mi", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

export const HERO_STATS = [
  { value: "7+", label: "proyectos publicados" },
  { value: "+800h", label: "formacion full stack" },
  { value: "Core Web", label: "SEO, UI y performance" },
];

export const TECH_TAGS = {
  ASTRO: {
    name: "Astro",
    className: "border-orange-300/25 bg-orange-400/10 text-orange-100",
  },
  CSS: {
    name: "CSS",
    className: "border-sky-300/25 bg-sky-400/10 text-sky-100",
  },
  HTML: {
    name: "HTML",
    className: "border-red-300/25 bg-red-400/10 text-red-100",
  },
  JavaScript: {
    name: "JavaScript",
    className: "border-yellow-200/25 bg-yellow-300/10 text-yellow-100",
  },
  MongoDB: {
    name: "MongoDB",
    className: "border-emerald-300/25 bg-emerald-400/10 text-emerald-100",
  },
  Next: {
    name: "Next.js",
    className: "border-white/20 bg-white/10 text-white",
  },
  Nodejs: {
    name: "Node.js",
    className: "border-lime-300/25 bg-lime-400/10 text-lime-100",
  },
  PostgreSQL: {
    name: "PostgreSQL",
    className: "border-blue-300/25 bg-blue-400/10 text-blue-100",
  },
  PrismaDB: {
    name: "Prisma",
    className: "border-cyan-200/25 bg-cyan-300/10 text-cyan-100",
  },
  React: {
    name: "React",
    className: "border-cyan-200/25 bg-cyan-300/10 text-cyan-100",
  },
  TAILWIND: {
    name: "Tailwind",
    className: "border-sky-200/25 bg-sky-300/10 text-sky-100",
  },
};

export const PROJECTS = [
  {
    title: "Franco Bertello Store",
    eyebrow: "Streaming Store",
    description:
      "Plataforma de interaccion para streaming desarrollada para Franco Bertello. Integra una extension conectada a Kick, sistema de puntos y recompensas, rankings, rachas, sorteos, tienda y multiples herramientas interactivas en tiempo real, gestionadas desde un dashboard de administracion.",
    image: "/fb-store.webp",
    imageAlt:
      "Interfaz oscura de Franco Bertello Store con panel de marketplace, recompensas y streaming",
    width: 1200,
    height: 900,
    link: "https://francobertello-store.codeluxe.tech/",
    featured: true,
    tags: [
      TECH_TAGS.Next,
      TECH_TAGS.PostgreSQL,
      {
        name: "Extension",
        className: "border-teal-200/25 bg-teal-300/10 text-teal-100",
      },
      {
        name: "Web Sockets",
        className: "border-cyan-200/25 bg-cyan-300/10 text-cyan-100",
      },
      {
        name: "Store",
        className: "border-rose-200/25 bg-rose-300/10 text-rose-100",
      },
      {
        name: "Recompensas",
        className: "border-emerald-200/25 bg-emerald-300/10 text-emerald-100",
      },
    ],
  },
  {
    title: "Codeluxe",
    eyebrow: "Freelance Studio",
    description:
      "Emprendimiento freelance para ofrecer desarrollo web full stack, edicion de video, produccion musical, diseno grafico, logos y marketing digital desde una identidad clara y orientada a conversion.",
    link: "https://codeluxe.vercel.app/",
    image: "/codeluxe.webp",
    imageAlt: "Landing page del proyecto Codeluxe",
    width: 1920,
    height: 1440,
    tags: [TECH_TAGS.Next, TECH_TAGS.TAILWIND],
  },
  {
    title: "Alquirap",
    eyebrow: "Rental Platform",
    description:
      "Web para alquiler de herramientas y maquinaria en Coronel Suarez. Incluye carrusel interactivo, paginacion y busqueda para acelerar la exploracion de catalogo.",
    link: "https://alquirap.com/",
    image: "/alquirap.webp",
    imageAlt: "Plataforma de alquiler de herramientas Alquirap",
    width: 1920,
    height: 1440,
    tags: [
      TECH_TAGS.Next,
      TECH_TAGS.TAILWIND,
      TECH_TAGS.PrismaDB,
      TECH_TAGS.PostgreSQL,
    ],
  },
  {
    title: "Los Robles Eventos",
    eyebrow: "Eventos",
    description:
      "Sitio para una empresa de eventos con galeria descargable y automatizacion para facilitar la actualizacion de imagenes desde publicaciones de Facebook.",
    link: "https://los-robles-eventos.com/",
    image: "/los-robles.webp",
    imageAlt: "Web de Los Robles Eventos",
    width: 1920,
    height: 1440,
    tags: [TECH_TAGS.ASTRO, TECH_TAGS.TAILWIND, TECH_TAGS.JavaScript],
  },
  {
    title: "WK Services",
    eyebrow: "Repair Management",
    description:
      "Producto para reparacion de electrodomesticos con interfaz moderna, dashboard de gestion de reparaciones y clientes, y foco en seguridad operativa.",
    link: "https://wk-services.vercel.app/",
    image: "/wkservices.webp",
    imageAlt: "Dashboard de gestion de WK Services",
    width: 1920,
    height: 1440,
    tags: [
      TECH_TAGS.Next,
      TECH_TAGS.TAILWIND,
      TECH_TAGS.PrismaDB,
      TECH_TAGS.PostgreSQL,
    ],
  },
  {
    title: "TheMenu",
    eyebrow: "Restaurant UI",
    description:
      "Interfaz para digitalizar cartas de restaurantes bajo un modelo de suscripcion mensual. La app no esta operativa, pero conserva su exploracion visual y codigo publico.",
    link: "https://themenu-yourcard.vercel.app/",
    image: "/themenu.webp",
    imageAlt: "Interfaz de carta digital TheMenu",
    width: 1920,
    height: 1440,
    tags: [
      TECH_TAGS.Next,
      TECH_TAGS.TAILWIND,
      TECH_TAGS.PrismaDB,
      TECH_TAGS.PostgreSQL,
    ],
  },
  {
    title: "Autenticos",
    eyebrow: "Mentorship Commerce",
    description:
      "Plataforma freelance para vender y organizar mentorias, con autenticacion, integracion de Mercado Pago y actualizacion del precio del dolar para Argentina.",
    link: "https://autenticos.onrender.com",
    image: "/autenticos.webp",
    imageAlt: "Plataforma de mentorias Autenticos",
    width: 1920,
    height: 1440,
    tags: [
      TECH_TAGS.React,
      TECH_TAGS.TAILWIND,
      TECH_TAGS.Nodejs,
      TECH_TAGS.MongoDB,
    ],
  },
];

export const CERTIFICATES = [
  {
    title: "Practicas laborales",
    eyebrow: "Awaq ONGD",
    description:
      "Responsable de frontend, diseno y comunicacion en una pasantia multinacional realizada del 6 de enero al 9 de febrero de 2024 con TypeScript, React, Redux, Tailwind y Azure.",
    image: "/Certificado Awaq.webp",
    imageAlt: "Certificado de practicas laborales en Awaq",
    width: 1301,
    height: 919,
  },
  {
    title: "Desarrollador Full Stack",
    eyebrow: "Henry",
    description:
      "Formacion intensiva de mas de 800 horas con teoria, ejercicios practicos y proyectos grupales en HTML, CSS, JavaScript, React, Redux, Node.js, Express, Sequelize y PostgreSQL.",
    image: "/Certificado Henry.webp",
    imageAlt: "Certificado de graduacion Full Stack Henry",
    width: 1443,
    height: 914,
  },
];

export const SKILLS = [
  "Interfaces responsive",
  "Dashboards de gestion",
  "E-commerce y pagos",
  "SEO tecnico",
  "Animaciones CSS",
  "Performance web",
  "APIs y bases de datos",
  "Automatizaciones",
];
