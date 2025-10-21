import Tailwind from "../components/icons/Tailwind.astro";
import JavaScript from "../components/icons/JavaScript.astro";
import HTML from "../components/icons/HTML.astro";
import CSS from "../components/icons/CSS.astro";
import React from "../components/icons/React.astro";
import MongoDB from "../components/icons/MongoDB.astro";
import Nodejs from "../components/icons/Nodejs.astro";
import ASTRO from "../components/icons/ASTRO.astro";
import Postgresql from "../components/icons/Postgresql.astro";
import Prisma from "../components/icons/Prisma.astro";
import NextJS from "../components/icons/NextJS.astro";
export const TAGS = {
  MongoDB: {
    name: "MongoDB",
    class: "bg-[#10aa50] text-white",
    icon: MongoDB,
  },
  Next: {
    name: "Next",
    class: "bg-white text-black",
    icon: NextJS,
  },
  PrismaDB: {
    name: "Prisma",
    class: "bg-white text-[#133a51ff]",
    icon: Prisma,
  },
  TAILWIND: {
    name: "Tailwind",
    class: "bg-[#003159] text-white",
    icon: Tailwind,
  },
  JavaScript: {
    name: "JavaScript",
    class: "bg-[#f7e018] text-black",
    icon: JavaScript,
  },
  HTML: {
    name: "HTML",
    class: "bg-[#e44d26] text-white",
    icon: HTML,
  },
  CSS: {
    name: "CSS",
    class: "bg-[#379ad6] text-white",
    icon: CSS,
  },
  React: {
    name: "React",
    class: "bg-[#4ad5ff99] text-white",
    icon: React,
  },

  Nodejs: {
    name: "Nodejs",
    class: "bg-[#46473d] text-[#87cf30]",
    icon: Nodejs,
  },
  ASTRO: {
    name: "Astro",
    class: "bg-[#ff6209] text-white",
    icon: ASTRO,
  },
  PostgreSQL: {
    name: "PostgreSQL",
    class: "bg-[#33679155] text-white",
    icon: Postgresql,
  },
};

export const PROJECTS = [
{
  title: "Codeluxe",
  description:
    "Emprendimiento realizado para trabajar de forma Freelance brindando servicios de Desarrollo Web FullStack, Edición de Video, Producción Musical, Diseño Gráfico y de Logos y Marketing Digital",
  link: "https://codeluxe.vercel.app/",
  image: "../../codeluxe.webp",
  tags: [TAGS.Next, TAGS.TAILWIND],
},
  {
    title: "Alquirap",
    description:
      "Desarrollé la web de Alquirap, una plataforma de alquiler de herramientas y maquinaria en Coronel Suárez. El sitio incluye un carrusel interactivo, paginación y barra de búsqueda para mejorar la experiencia del usuario.",
    link: "https://alquirap.com/",
    image: "../../alquirap.webp",
    tags: [TAGS.Next, TAGS.TAILWIND, TAGS.PrismaDB, TAGS.PostgreSQL],
  },
    {
    title: "Los Robles Eventos",
    description:
      "Empresa dedicada a la organización de eventos. Integramos una galería interactiva con posibilidad de descargar imágenes. Además, desarrollamos un script personalizado para la consola de Facebook, que automatiza la descarga de imágenes desde publicaciones específicas, facilitando así la actualización constante del sitio con nuevo contenido visual.",
    link: "https://los-robles-eventos.com/",
    image: "../../los-robles.webp",
    tags: [TAGS.ASTRO, TAGS.TAILWIND, TAGS.JavaScript],
  },
  {
    title: "WK Services",
    description:
      "WK Services es un proyecto innovador de reparación de electrodomésticos en Coronel Suárez, con una interfaz moderna, un dashboard de gestión de reparaciones y clientes, y un enfoque en la seguridad.",
    link: "https://wk-services.vercel.app/",
    image: "../../wkservices.webp",
    tags: [TAGS.Next, TAGS.TAILWIND, TAGS.PrismaDB, TAGS.PostgreSQL],
  },
//     {
//     title: "Rrotten",
//     description:
//       "Rrotten es una landing page moderna diseñada para un restaurante. El sitio permite visualizar el menú completo categorizado, con la posibilidad de acceder a un detalle individual de cada plato. Además, incluye secciones informativas como “Sobre nosotros” y “Contacto”, y una integración con Leaflet que muestra la ubicación del local en un mapa interactivo. El diseño es responsive, limpio y orientado a mejorar la experiencia del usuario tanto en dispositivos móviles como de escritorio.",
//     link: "https://rrotten.vercel.app/",
//     image: "../../rrotten.webp",
//     tags: [TAGS.Next, TAGS.TAILWIND, TAGS.HTML, TAGS.CSS],
//   },
    {
    title: "TheMenu (Solo UI)",
    description:
      "Desarrollo de TheMenu, un emprendimiento orientado a digitalizar cartas de restaurantes a través de un modelo de suscripción mensual. Actualmente, solo se conserva la interfaz visual. La app no está operativa, pero el código completo está disponible en GitHub como repositorio público.",
    link: "https://themenu-yourcard.vercel.app/",
    image: "../../themenu.webp",
    tags: [TAGS.Next, TAGS.TAILWIND, TAGS.PrismaDB, TAGS.PostgreSQL],
  },
  {
    title: "Autenticos",
    description:
      "Proyecto realizado de manera freelance, para facilitar la venta y organización de mentorias. Cuenta con autenticacion de usuarios, esta integrada tambien la pasarela de pago de Mercado Pago facilitando la compra ya que le permite al usuario tener una pre-visualización del precio de la mentoria a comprar, tambien esta implementado una funcionalidad para mantener el precio del dolar actualizado al momento en argentina",
    link: "https://autenticos.onrender.com",
    image: "../../autenticos.webp",
    tags: [
      TAGS.React,
      TAGS.TAILWIND,
      TAGS.Nodejs,
      TAGS.MongoDB,
    ],
  },
];