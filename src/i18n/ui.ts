export type Lang = "en" | "es";

export const PHONE_DISPLAY = "(703) 832-6540";
export const PHONE_TEL = "+17038326540";
export const EMAIL = "rolyn_perez@icloud.com";

export const homePath = (lang: Lang) => (lang === "es" ? "/es/" : "/");

/** Photo, chip color and project location are shared across languages. */
export const serviceMeta = [
  { img: "/assets/residential.jpg", chip: "#B8472A", code: "RP-01", place: "Fairfax, VA" },
  { img: "/assets/commercial.jpg", chip: "#2E5A78", code: "RP-02", place: "National Harbor, MD" },
  { img: "/assets/carpentry.jpg", chip: "#E3B24F", code: "RP-03", place: "Alexandria, VA" },
  { img: "/assets/drywall.jpg", chip: "#D9D2C5", code: "RP-04", place: "Washington, DC" },
  { img: "/assets/deck.jpg", chip: "#8A5A3B", code: "RP-05", place: "Alexandria, VA" },
  { img: "/assets/power-washing.jpg", chip: "#7E9C86", code: "RP-06", place: "Waldorf, MD" },
];

export const ui = {
  en: {
    meta: {
      title: "Rolyn Painting LLC | Residential & Commercial Painting in the DMV",
      description:
        "Rolyn Painting LLC — family-owned residential and commercial painting in DC, Maryland and Virginia for over 20 years. Licensed and insured. Free estimates.",
    },
    nav: {
      services: "Services",
      about: "About",
      areas: "Areas",
      contact: "Contact",
      estimate: "Free estimate",
      menu: "Menu",
      home: "Rolyn Painting home",
      switchLabel: "Español",
      switchHref: "/es/",
      switchAria: "Ver esta página en español",
    },
    hero: {
      eyebrow: "Family-owned · Licensed & insured",
      title: "Painting done carefully, by people who've been at it for 20 years.",
      body: "Rolyn Painting handles homes and businesses across DC, Maryland and Virginia — interiors, exteriors, decks and the repairs that come before a good coat of paint.",
      cta: "Get a free estimate",
      call: "Call",
      stats: [
        { n: "20+", l: "years in business" },
        { n: "DMV", l: "DC · MD · VA" },
        { n: "Free", l: "estimates, no obligation" },
      ],
      photoAlt: "Freshly painted living room in a Fairfax, VA home",
      caption: "Interior repaint · Fairfax, VA",
    },
    services: {
      label: "What we do",
      title: "No project too big or too small.",
      intro: "Each one below is a real job of ours, with the town it was in.",
      items: [
        { name: "Residential painting", body: "Interior and exterior repaints — walls, ceilings, trim, doors and cabinets.", alt: "Interior painting in a Fairfax home" },
        { name: "Commercial painting", body: "Offices, retail and hospitality spaces, scheduled around your hours.", alt: "Commercial painting project at National Harbor" },
        { name: "Carpentry", body: "Trim, siding and wood repairs so the paint goes on a sound surface.", alt: "Carpentry work on a house in Alexandria" },
        { name: "Drywall repair", body: "Holes, cracks and water damage patched, sanded and blended in.", alt: "Drywall repair in a Washington, DC home" },
        { name: "Deck staining", body: "Cleaning, sanding and staining to bring tired decks back.", alt: "Stained deck in Alexandria" },
        { name: "Power washing", body: "Siding, decks, fences and walkways, cleaned before paint or on their own.", alt: "Power-washed deck in Waldorf" },
      ],
      ask: "Something else?",
      askBody: "Tell us about it — if it's paint-related, we probably do it.",
      askCta: "Ask us",
    },
    about: {
      label: "About us",
      title: "A family business since the early 2000s.",
      p1: "Rolyn Painting started as a small family-owned company more than 20 years ago and has been working ever since. Over that time we've grown to take on projects of any size, from one bedroom to full commercial spaces.",
      p2: "Rolyn runs the operations himself, so the person who gives you the estimate is the person responsible for the work.",
      p3: "We're licensed and insured, and every estimate is free.",
      badges: ["Licensed", "Insured", "Family-owned", "Residential & commercial"],
    },
    areas: {
      label: "Where we work",
      title: "Serving the DMV.",
      regions: [
        { name: "Washington, DC", note: "All wards" },
        { name: "Maryland", note: "National Harbor, Oxon Hill, Waldorf and more" },
        { name: "Virginia", note: "Fairfax, Alexandria and more" },
      ],
      notListed: "Not sure if you're in range? Ask — we'll tell you straight.",
    },
    contact: {
      label: "Free estimate",
      title: "Tell us about your project.",
      sub: "We'll get back to you to ask questions or set up a time to see it in person.",
      orCall: "Prefer to talk?",
      orEmail: "Or email",
      subject: "New estimate request — rolynpaintingllc.com",
      name: "Name",
      email: "Email",
      phone: "Phone",
      optional: "(optional)",
      type: "Type of project",
      options: ["Interior painting", "Exterior painting", "Commercial painting", "Carpentry", "Drywall repair", "Deck staining", "Power washing", "Something else"],
      message: "What needs painting?",
      placeholder: "e.g. Repaint the living room and hallway, ceilings included. About 600 sq ft.",
      submit: "Request my free estimate",
      privacy: "We only use your details to reply about this project.",
    },
    footer: {
      tag: "Residential & commercial painting · DC · MD · VA",
      licensed: "Licensed & insured",
      siteBy: "Site by",
    },
  },

  es: {
    meta: {
      title: "Rolyn Painting LLC | Pintura residencial y comercial en DC, MD y VA",
      description:
        "Rolyn Painting LLC — empresa familiar de pintura residencial y comercial en DC, Maryland y Virginia por más de 20 años. Con licencia y seguro. Presupuestos gratis.",
    },
    nav: {
      services: "Servicios",
      about: "Nosotros",
      areas: "Zonas",
      contact: "Contacto",
      estimate: "Presupuesto gratis",
      menu: "Menú",
      home: "Inicio de Rolyn Painting",
      switchLabel: "English",
      switchHref: "/",
      switchAria: "View this page in English",
    },
    hero: {
      eyebrow: "Empresa familiar · Con licencia y seguro",
      title: "Pintura hecha con cuidado, por gente con más de 20 años en el oficio.",
      body: "Rolyn Painting trabaja en casas y negocios en DC, Maryland y Virginia — interiores, exteriores, decks y las reparaciones que van antes de una buena mano de pintura.",
      cta: "Pida su presupuesto gratis",
      call: "Llame",
      stats: [
        { n: "20+", l: "años en el negocio" },
        { n: "DMV", l: "DC · MD · VA" },
        { n: "Gratis", l: "presupuestos, sin compromiso" },
      ],
      photoAlt: "Sala recién pintada en una casa de Fairfax, VA",
      caption: "Pintura interior · Fairfax, VA",
    },
    services: {
      label: "Lo que hacemos",
      title: "Ningún proyecto es demasiado grande ni pequeño.",
      intro: "Cada foto es un trabajo real nuestro, con la ciudad donde se hizo.",
      items: [
        { name: "Pintura residencial", body: "Interiores y exteriores — paredes, techos, molduras, puertas y gabinetes.", alt: "Pintura interior en una casa de Fairfax" },
        { name: "Pintura comercial", body: "Oficinas, tiendas y espacios de hospitalidad, según su horario.", alt: "Proyecto de pintura comercial en National Harbor" },
        { name: "Carpintería", body: "Reparación de molduras, revestimiento y madera para pintar sobre una superficie firme.", alt: "Carpintería en una casa de Alexandria" },
        { name: "Reparación de drywall", body: "Agujeros, grietas y daños por agua, resanados, lijados y emparejados.", alt: "Reparación de drywall en Washington, DC" },
        { name: "Tinte de decks", body: "Limpieza, lijado y tinte para renovar decks desgastados.", alt: "Deck teñido en Alexandria" },
        { name: "Lavado a presión", body: "Fachadas, decks, cercas y caminos, antes de pintar o por sí solo.", alt: "Deck lavado a presión en Waldorf" },
      ],
      ask: "¿Algo más?",
      askBody: "Cuéntenos — si tiene que ver con pintura, probablemente lo hacemos.",
      askCta: "Pregúntenos",
    },
    about: {
      label: "Nosotros",
      title: "Una empresa familiar desde principios de los 2000.",
      p1: "Rolyn Painting comenzó como una pequeña empresa familiar hace más de 20 años y ha trabajado sin parar desde entonces. Con el tiempo hemos crecido para hacer proyectos de cualquier tamaño, desde un cuarto hasta espacios comerciales completos.",
      p2: "Rolyn dirige las operaciones personalmente, así que quien le da el presupuesto es quien responde por el trabajo.",
      p3: "Tenemos licencia y seguro, y todos los presupuestos son gratis.",
      badges: ["Con licencia", "Asegurados", "Empresa familiar", "Residencial y comercial"],
    },
    areas: {
      label: "Dónde trabajamos",
      title: "Al servicio del DMV.",
      regions: [
        { name: "Washington, DC", note: "Toda la ciudad" },
        { name: "Maryland", note: "National Harbor, Oxon Hill, Waldorf y más" },
        { name: "Virginia", note: "Fairfax, Alexandria y más" },
      ],
      notListed: "¿No sabe si llegamos a su zona? Pregunte — le decimos claramente.",
    },
    contact: {
      label: "Presupuesto gratis",
      title: "Cuéntenos sobre su proyecto.",
      sub: "Le responderemos con preguntas o para coordinar una visita.",
      orCall: "¿Prefiere hablar?",
      orEmail: "O escriba a",
      subject: "Nueva solicitud de presupuesto (español) — rolynpaintingllc.com",
      name: "Nombre",
      email: "Correo electrónico",
      phone: "Teléfono",
      optional: "(opcional)",
      type: "Tipo de proyecto",
      options: ["Pintura interior", "Pintura exterior", "Pintura comercial", "Carpintería", "Reparación de drywall", "Tinte de decks", "Lavado a presión", "Otro"],
      message: "¿Qué necesita pintar?",
      placeholder: "Ej.: Pintar la sala y el pasillo, techos incluidos. Unos 600 pies cuadrados.",
      submit: "Pedir mi presupuesto gratis",
      privacy: "Solo usamos sus datos para responderle sobre este proyecto.",
    },
    footer: {
      tag: "Pintura residencial y comercial · DC · MD · VA",
      licensed: "Con licencia y seguro",
      siteBy: "Sitio por",
    },
  },
} as const;
