



import w1 from "@/assets/w.webp"
import w2 from "@/assets/2.webp"
import w3 from "@/assets/3.webp"
import w4 from "@/assets/4.webp"
import w5 from "@/assets/5.jpeg"
import w6 from "@/assets/6.jpg"

import user from "../assets/lgo.png";


import {
  RiBarChart2Line,
  RiSettings2Line,
  RiTeamLine,
  RiCalendarLine,
  RiCustomerServiceLine,
  RiShakeHandsLine,
} from "@remixicon/react";

export const HERO_CONTENT = {
  badgeText: "🚀 WHITEBOX: Tu Aliado en Capacitación y Soluciones Informáticas",
  mainHeading: "Transformando \n El Futuro Tecnológico+",
  subHeading:
    "En WithBox, ofrecemos capacitaciones y servicios especializados en informática 💻, Diseño y Desarrollo de Software, comercio electrónico 🛒, redes 🌐 y ciberseguridad 🔒. Nos enfocamos en soluciones innovadoras y personalizadas para potenciar tus habilidades y asegurar el éxito de tu negocio 🚀. Confía en nosotros para llevar tus conocimientos y operaciones al siguiente nivel.",
  callToAction: {
    primary: "Cotizar proyecto!",
    secondary: "Agendar una cita!",
  },
  trustedByText: "Conectando con el Futuro Tecnológico de Nuestros Clientes 🌐🚀",
};


export const HOW_IT_WORKS_CONTENT = {
  sectionTitle: "🚀 Explora Nuestro Blog!",
  sectionDescription:
    "Descubre artículos que transforman tu perspectiva tecnológica. 💡 Desde ciberseguridad hasta desarrollo y más, cada publicación está diseñada para brindarte información valiosa y mantenerte un paso adelante en el mundo digital. 🌐✨",
    steps: [
      {
        title: "OpenAI acaba de lanzar su bomba nuclear contra Google: ahora integra búsquedas web en ChatGPT",
        description:
          "OpenAI acaba de anunciar el lanzamiento de 'ChatGPT Search', una evolución de su chatbot que incorporará función de búsqueda en tiempo real, permitiendo así a los usuarios obtener respuestas inmediatas y contextualizadas con enlaces a fuentes relevantes, acercándose más a la experiencia de un motor de búsqueda clásico, pero en un formato conversacional.",
        imageSrc: w2,
        imageAlt: "Seguridad en redes sociales",
        url: "https://www.genbeta.com/inteligencia-artificial/openai-acaba-lanzar-su-bomba-nuclear-google-ahora-integra-busquedas-web-chatgpt"
      },
      {
        title: "Cuidado con qué avatar usas en Instagram y Facebook: ser reconocible en un videoselfie te permitirá recuperar tus cuentas",
        description:
          "Meta, la empresa matriz de Facebook e Instagram, ha anunciado la inminente implementación (aún en fase de pruebas) del reconocimiento facial como herramienta de seguridad en sus plataformas. Estas medidas incluyen la recuperación de cuentas comprometidas a través de 'videoselfies' y la detección de estafas que utilizan la imagen de celebridades para atraer usuarios hacia sitios fraudulentos.",
        imageSrc: w3,
        imageAlt: "Prevención de phishing",
        url: "https://www.genbeta.com/actualidad/cuidado-que-avatar-usas-instagram-facebook-ser-reconocible-videoselfie-te-permitira-recuperar-tus-cuentas"
      },
      {
        title: "Linus Torvalds dice que la IA es en un 90% marketing, y todavía no le ve un uso claro",
        description:
          "Linus Torvalds, el creador de Linux y una de las figuras más influyentes en el ámbito del software libre, ha vuelto a dar de qué hablar en una reciente entrevista con el canal de YouTube TFiR. Esta vez, se ha posicionado sobre la inteligencia artificial, una tecnología que no tiene problema en calificar de revolucionaria... pero a la que, al mismo tiempo, critica con dureza por estar inmersa en lo que él describe como un ciclo del hype que afecta a gran parte de la industria tecnológica.",
        imageSrc: w4,
        imageAlt: "IA y seguridad de datos",
        url: "https://www.genbeta.com/inteligencia-artificial/linus-torvalds-dice-que-ia-90-marketing-todavia-no-le-ve-uso-claro"
      },
      {
        title: "No hay que fiarse de cualquier código QR que veamos por ahí. La estafa del Qrishing está creciendo a un peligroso ritmo",
        description:
          "El 'Qrishing' es una de esas técnicas de estafa que lo tiene todo para suponer un verdadero problema. Como podemos anticipar por su nombre, estamos ante una variante del phishing basada en los códigos QR.",
        imageSrc: w5,
        imageAlt: "Seguridad en Facebook",
        url: "https://www.xataka.com/seguridad/no-hay-que-fiarse-cualquier-codigo-qr-que-veamos-ahi-estafa-qrishing-esta-creciendo-a-peligroso-ritmo"
      },
      {
        title: "Si te llaman para ofrecerte la nueva criptomoneda de Amazon, la estafa ya está en marcha",
        description:
          "Las criptoestafas están evolucionando para aprovechar la credibilidad de grandes empresas y el desconocimiento general sobre criptodivisas",
        imageSrc: w6,
        imageAlt: "Privacidad en mensajería",
        url: "https://www.genbeta.com/seguridad/te-llaman-para-ofrecerte-nueva-criptomoneda-amazon-estafa-esta-marcha"
      }
      ,
      {
        title: "Los cinco trucos de seguridad para evitar ser víctima de una estafa de suplantación en WhatsApp",
        description:
          "Los expertos en ciberseguridad coinciden en que es esencial que los usuarios conozcan las herramientas y configuraciones de privacidad de WhatsApp, para no ser víctimas de estas estafas",
        imageSrc: w1,
        imageAlt: "Tendencias de ciberdelitos",
        url:"https://www.genbeta.com/seguridad/cinco-trucos-seguridad-para-evitar-ser-victima-estafa-suplantacion-whatsapp"
      },
    ],
    
};

export const KEY_FEATURES_CONTENT = {
  sectionTitle: "Potencia tu Trayectoria Tecnológica con Estas Claves",
  sectionDescription:
    "Todo lo que necesitas para mejorar tus habilidades y servicios informáticos, en un solo lugar. 💡💻",
  features: [
    {
      id: 1,
      icon: <RiBarChart2Line className="w-8 h-8" />,
      title: "Análisis Detallado y Personalizado",
      description:
        "Obtén informes claros y completos sobre el rendimiento de tus sistemas y proyectos para tomar decisiones informadas. 📊🔍",
    },
    {
      id: 2,
      icon: <RiSettings2Line className="w-8 h-8" />,
      title: "Automatización Inteligente de Procesos",
      description:
        "Simplifica la gestión de tus proyectos con alertas, chatbots y herramientas que facilitan tu flujo de trabajo. 🤖🗓️",
    },
    {
      id: 3,
      icon: <RiTeamLine className="w-8 h-8" />,
      title: "Herramientas de Interacción y Colaboración",
      description:
        "Fomenta un entorno participativo con soluciones personalizadas para equipos y clientes. 🤝💬",
    },
    {
      id: 4,
      icon: <RiShakeHandsLine className="w-8 h-8" />,
      title: "Integración Perfecta con Plataformas Clave",
      description:
        "Conecta tus servicios con herramientas líderes para simplificar la gestión y el soporte. 🔗🚀",
    },
    {
      id: 5,
      icon: <RiCustomerServiceLine className="w-8 h-8" />,
      title: "Soporte Multicanal",
      description:
        "Lleva tus capacitaciones y servicios a múltiples plataformas con herramientas integradas para una experiencia fluida. 🌐📲",
    },
    {
      id: 6,
      icon: <RiCalendarLine className="w-8 h-8" />,
      title: "Planificación y Programación de Proyectos",
      description:
        "Organiza tus capacitaciones y servicios con antelación, asegurando que tus clientes siempre estén informados y preparados. 📅⏰",
    },
  ],
};

export const PLANS_CONTENT = {
  sectionTitle: "Choose Your Plan",
  sectionDescription:
    "Streamerzz offers flexible pricing plans to fit every streamer’s needs, from beginner to pro.",
  popularBadge: "Most Popular",
  ctaText: "Get Started",
  plans: [
    {
      name: "Basic",
      price: "$9.99/month",
      description:
        "Perfect for beginners just starting their streaming journey.",
      features: [
        "Basic analytics",
        "Custom overlays",
        "Viewer engagement tools",
        "Stream up to 720p",
      ],
    },
    {
      name: "Pro",
      price: "$19.99/month",
      description:
        "For streamers who want more advanced tools to grow their audience.",
      features: [
        "Advanced analytics",
        "Custom alerts & notifications",
        "HD streaming up to 1080p",
        "Real-time audience insights",
        "Unlimited support",
      ],
      popular: true,
    },
    {
      name: "Elite",
      price: "$49.99/month",
      description:
        "For professional streamers who need cutting-edge tools and insights.",
      features: [
        "Premium analytics & reporting",
        "4K Ultra HD streaming",
        "Dedicated account manager",
        "Full API access",
        "Custom branding & overlays",
      ],
    },
  ],
};

export const TESTIMONIALS_CONTENT = {
  sectionTitle: "Consejos Tecnológicos Esenciales",
  sectionDescription:
    "Explora recomendaciones expertas que ayudarán a tu empresa a fortalecer su seguridad digital y optimizar sus procesos. Con estos consejos, estarás un paso adelante en la protección de tu infraestructura y datos.",
  reviews: [
    {
      name: "Josué Vásquez",
      title: "Chief Information Security Officer",
      review:
        "Realiza copias de seguridad periódicas de tus datos críticos y verifica su integridad. Con este paso sencillo, puedes minimizar el impacto de posibles ciberataques o fallos del sistema y garantizar la continuidad de tu negocio.",
      image: user,
    },
    {
      name: "Josué Vásquez",
      title: "Chief Information Security Officer",
      review:
        "Implementar herramientas de detección de amenazas impulsadas por IA te permite identificar y neutralizar actividades sospechosas de forma proactiva. Gracias a estas herramientas, hemos reforzado la seguridad y reducido el tiempo de respuesta ante incidentes.",
      image: user,
    },
    {
      name: "Abimael Cano",
      title: "Chief Technology Officer",
      review:
        "Capacitar a tus empleados sobre prácticas de ciberseguridad, como reconocer correos maliciosos y evitar sitios web inseguros, es crucial. La educación continua es la mejor defensa para proteger tu entorno de trabajo.",
      image: user,
    },
    {
      name: "Josué Vásquez",
      title: "Chief Information Security Officer",
      review:
        "Mantener un control de acceso estricto y asignar permisos mínimos a los usuarios según sus roles ayuda a evitar accesos indebidos. Esta práctica simple ha mejorado la protección de nuestra información confidencial.",
      image: user,
    },
    {
      name: "Josué Vásquez",
      title: "Chief Information Security Officer",
      review:
        "Monitorear la actividad de la red en tiempo real y analizar patrones de tráfico anómalos ha sido clave para detectar y mitigar posibles brechas de seguridad antes de que se conviertan en un problema",
      image: user,
    },
    {
      name: "Josué Vásquez",
      title: "Chief Information Security Officer",
      review:
        "Automatizar actualizaciones y parches de seguridad asegura que tu software esté siempre protegido contra las últimas vulnerabilidades. No mantener tu infraestructura al día puede dejar puertas abiertas a los atacantes.",
      image: user,
    },
  ],
};

export const checklistItems = [
  {
    title: "La Fusión de Servicios es Ahora Sencilla",
    description:
      "Integramos capacitaciones y soporte en un solo lugar para que te enfoques en lo que realmente importa. 🤝🔧",
  },
  {
    title: "Revisión y Soporte sin Preocupaciones",
    description:
      "Confía en nuestro equipo para mantener la calidad y seguridad de tus operaciones. ✔️🛡️",
  },
  {
    title: "Asistencia Personalizada con Tecnología Avanzada",
    description:
      "Utilizamos herramientas de última generación para reducir tiempos y maximizar resultados. 🤖⏱️",
  },
  {
    title: "Monitoreo y Análisis Detallado",
    description:
      "Seguimos el desempeño de tus sistemas y te proporcionamos información valiosa para mejorar cada proceso. 📊🔍",
  },
];


export const checklisServices = [
  {
    title: "Capacitación en Ciberseguridad",
    description:
      "Ofrecemos cursos especializados para empoderar a tu equipo con conocimientos en ciberseguridad y protección de datos. 🛡️💻",
  },
  {
    title: "Desarrollo de Software Personalizado",
    description:
      "Creamos soluciones de software a medida que se adaptan a las necesidades específicas de tu negocio. 📈🔧",
  },
  {
    title: "Mantenimiento y Soporte Técnico",
    description:
      "Proporcionamos soporte técnico integral para garantizar el óptimo funcionamiento de tus sistemas y equipos. 🔧🛠️",
  },
  {
    title: "Implementación de Infraestructura de Red",
    description:
      "Diseñamos e implementamos redes seguras y eficientes para mejorar la conectividad de tu organización. 🌐⚙️",
  },
  {
    title: "Consultoría en Transformación Digital",
    description:
      "Asesoramos en la adopción de tecnologías digitales que optimizan procesos y mejoran la competitividad. 📊🚀",
  },
  {
    title: "Soluciones de Almacenamiento en la Nube",
    description:
      "Ofrecemos servicios de almacenamiento en la nube seguros y accesibles desde cualquier lugar. ☁️🔒",
  },
  {
    title: "Auditoría de Seguridad Informática",
    description:
      "Realizamos auditorías para evaluar y mejorar la seguridad de tus sistemas y redes. 🔍🛡️",
  },
  {
    title: "Implementación de Sistemas ERP",
    description:
      "Desarrollamos y configuramos sistemas ERP para integrar todos tus procesos empresariales en una sola plataforma. 📊🔗",
  },
  {
    title: "Soporte en Comercio Electrónico",
    description:
      "Asesoramos y apoyamos en la creación y optimización de plataformas de comercio electrónico. 🛒💻",
  },
  {
    title: "Desarrollo de Estrategias de Marketing Digital",
    description:
      "Creamos y ejecutamos estrategias de marketing digital que aumentan la visibilidad y ventas de tu negocio. 📈💡",
  },
]

export const FOOTER_CONTENT = {
  sections: [
    {
      title: "HERRAMIENTAS Y SERVICIOS",
      links: [
        { text: "Capacitaciones en Ciberseguridad", url: "https://wa.me/+50233283075" },
        { text: "Consultoría en Comercio Electrónico", url: "#" },
        { text: "Mantenimiento de Sistemas", url: "#" },
        { text: "Manejo de redes sociales", url: "#" },
        { text: "Desarrollo de sistemas", url: "#" },
        { text: "Implementaciones de Chatbots", url: "#" },
      ],
    },
    {
      title: "APOYO Y RECURSOS",
      links: [
        { text: "Planes de Capacitación", url: "#" },
        { text: "Preguntas Frecuentes", url: "#" },
        { text: "Blog de Tecnología", url: "#" },
      ],
    },
    {
      title: "CONÉCTATE CON NOSOTROS",
      links: [
        { text: "Twitter", url: "#" },
        { text: "Facebook", url: "#" },
        { text: "LinkedIn", url: "#" },
      ],
    },
    {
      title: "APRENDER Y EXPLORAR",
      links: [
        { text: "Consejos de Ciberseguridad para Empresas", url: "#" },
        { text: "Estrategias para el Comercio Electrónico", url: "#" },
        { text: "Mejores Prácticas de Seguridad Informática", url: "#" },
        { text: "Cómo Proteger Datos Sensibles", url: "#" },
        { text: "Tendencias en Comercio Electrónico", url: "#" },
        { text: "Uso de IA en la Ciberseguridad", url: "#" },
        { text: "Gestión de Riesgos en Proyectos Tecnológicos", url: "#" },

      ],    
    },
  ],
  
  platformsText:
    "Plataformas | X | Discord | Facebook | Linkedin",
  copyrightText: "© 2024 WHITEBOX, Inc. All rights reserved.",
};
