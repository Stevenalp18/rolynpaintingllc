export type Lang = "en" | "es";

export const PHONE_DISPLAY = "(703) 832-6540";
export const PHONE_TEL = "+17038326540";
export const EMAIL = "rolyn_perez@icloud.com";

export const homePath = (lang: Lang) => (lang === "es" ? "/es/" : "/");

const W = "/assets/work/";

/** Photo and chip color (from the logo's color fan) are shared across languages. */
export const serviceMeta = [
  { img: W + "foyer-staircase.jpg", chip: "#054676", code: "RP-01", place: "" },
  { img: W + "casino.jpg", chip: "#008B95", code: "RP-02", place: "National Harbor, MD" },
  { img: W + "staircase-railing.jpg", chip: "#EEC71C", code: "RP-03", place: "" },
  { img: W + "drywall-finishing.jpg", chip: "#A8185F", code: "RP-04", place: "" },
  { img: W + "deck-red-stain.jpg", chip: "#D8601A", code: "RP-05", place: "" },
  { img: W + "exterior-townhouse.jpg", chip: "#78A830", code: "RP-06", place: "" },
];

export type Cat = "interior" | "exterior" | "commercial" | "drywall";

/** Gallery photos in display order; alt text is per language. */
export const gallery: { src: string; cat: Cat; en: string; es: string }[] = [
  { src: W + "living-room.jpg", cat: "interior", en: "Living room with a navy accent wall and coffered ceiling", es: "Sala con pared de acento azul marino y techo artesonado" },
  { src: W + "casino.jpg", cat: "commercial", en: "Casino sportsbook lounge at National Harbor", es: "Salón de casino en National Harbor" },
  { src: W + "deck-red-stain.jpg", cat: "exterior", en: "Deck, railings and furniture stained red cedar", es: "Deck, barandas y muebles teñidos color cedro" },
  { src: W + "foyer-staircase.jpg", cat: "interior", en: "Two-story foyer with wainscoting and staircase", es: "Vestíbulo de dos pisos con zócalo de madera y escalera" },
  { src: W + "exterior-red-house.jpg", cat: "exterior", en: "Red shingle siding and white trim being repainted", es: "Fachada roja de tejuelas y molduras blancas en pintura" },
  { src: W + "staircase-railing.jpg", cat: "interior", en: "Staircase with refinished treads and black handrail", es: "Escalera con peldaños restaurados y pasamanos negro" },
  { src: W + "dental-office.jpg", cat: "commercial", en: "Medical office hallway with dark accent walls", es: "Pasillo de consultorio con paredes de acento oscuras" },
  { src: W + "kitchen-cabinets.jpg", cat: "interior", en: "Kitchen cabinets painted white", es: "Gabinetes de cocina pintados de blanco" },
  { src: W + "drywall-finishing.jpg", cat: "drywall", en: "Finishing a drywall ceiling from scaffolding", es: "Acabado de drywall en el techo desde andamio" },
  { src: W + "deck-pergola.jpg", cat: "exterior", en: "Deck and pergola stained gray", es: "Deck y pérgola teñidos de gris" },
  { src: W + "upstairs-hall.jpg", cat: "interior", en: "Upstairs hallway with crown molding", es: "Pasillo del segundo piso con molduras de corona" },
  { src: W + "office.jpg", cat: "commercial", en: "Office conference room repainted light gray", es: "Sala de juntas pintada de gris claro" },
  { src: W + "exterior-townhouse.jpg", cat: "exterior", en: "Townhouse exterior after cleaning and paint", es: "Exterior de casa adosada después de limpieza y pintura" },
  { src: W + "drywall-coffered.jpg", cat: "drywall", en: "New drywall taped and mudded, ready for sanding", es: "Drywall nuevo con cinta y masilla, listo para lijar" },
  { src: W + "vaulted-room.jpg", cat: "interior", en: "Painting a vaulted living room from scaffolding", es: "Pintando una sala de techo alto desde andamio" },
  { src: W + "storefront.jpg", cat: "commercial", en: "Retail storefront exterior", es: "Exterior de local comercial" },
  { src: W + "gray-walls.jpg", cat: "interior", en: "Fresh greige walls and white trim", es: "Paredes recién pintadas y molduras blancas" },
  { src: W + "primed-great-room.jpg", cat: "drywall", en: "New-construction great room primed", es: "Sala de obra nueva con imprimación" },
  { src: W + "siding.jpg", cat: "exterior", en: "Siding cleaned and prepped for paint", es: "Revestimiento limpio y preparado para pintar" },
  { src: W + "basement-bar.jpg", cat: "interior", en: "Basement bar area being painted", es: "Bar del sótano en pintura" },
  { src: W + "drywall-sanding.jpg", cat: "drywall", en: "Sanding a ceiling patch", es: "Lijando un parche en el techo" },
  { src: W + "drywall-new-room.jpg", cat: "drywall", en: "Drywall finishing in a new home", es: "Acabado de drywall en una casa nueva" },
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
      work: "Our work",
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
      photoAlt: "Living room with a navy accent wall and coffered ceiling, painted by Rolyn Painting",
      caption: "Accent wall & coffered ceiling",
    },
    services: {
      label: "What we do",
      title: "No project too big or too small.",
      intro: "Every photo on this site is from one of our own jobs.",
      items: [
        { name: "Residential painting", body: "Interior and exterior repaints — walls, ceilings, trim, doors and cabinets.", alt: "Painted two-story foyer with white wainscoting" },
        { name: "Commercial painting", body: "Offices, retail and hospitality spaces, scheduled around your hours.", alt: "Casino lounge painted by Rolyn Painting at National Harbor" },
        { name: "Carpentry & trim", body: "Stairs, railings, trim and wood repairs so the paint goes on a sound surface.", alt: "Staircase with refinished treads and black handrail" },
        { name: "Drywall repair", body: "Holes, cracks and water damage patched, sanded and blended in.", alt: "Finishing a drywall ceiling from scaffolding" },
        { name: "Deck staining", body: "Cleaning, sanding and staining to bring tired decks back.", alt: "Deck and railings stained red cedar" },
        { name: "Power washing", body: "Siding, decks, fences and walkways, cleaned before paint or on their own.", alt: "Townhouse exterior after power washing and paint" },
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
    work: {
      label: "Our work",
      title: "Recent jobs, start to finish.",
      intro: "From drywall to the final coat. Tap any photo to see it larger.",
      filterLabel: "Filter photos",
      all: "All",
      cats: { interior: "Interior", exterior: "Exterior & decks", commercial: "Commercial", drywall: "Drywall & prep" },
      close: "Close",
      prev: "Previous photo",
      next: "Next photo",
      of: "of",
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
      options: ["Interior painting", "Exterior painting", "Commercial painting", "Cabinet painting", "Carpentry", "Drywall repair", "Deck staining", "Power washing", "Something else"],
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
      work: "Trabajos",
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
      photoAlt: "Sala con pared de acento azul marino y techo artesonado, pintada por Rolyn Painting",
      caption: "Pared de acento y techo artesonado",
    },
    services: {
      label: "Lo que hacemos",
      title: "Ningún proyecto es demasiado grande ni pequeño.",
      intro: "Todas las fotos de este sitio son de nuestros propios trabajos.",
      items: [
        { name: "Pintura residencial", body: "Interiores y exteriores — paredes, techos, molduras, puertas y gabinetes.", alt: "Vestíbulo de dos pisos pintado con zócalo blanco" },
        { name: "Pintura comercial", body: "Oficinas, tiendas y espacios de hospitalidad, según su horario.", alt: "Salón de casino pintado por Rolyn Painting en National Harbor" },
        { name: "Carpintería y molduras", body: "Escaleras, barandas, molduras y reparaciones de madera para pintar sobre una superficie firme.", alt: "Escalera con peldaños restaurados y pasamanos negro" },
        { name: "Reparación de drywall", body: "Agujeros, grietas y daños por agua, resanados, lijados y emparejados.", alt: "Acabado de drywall en el techo desde andamio" },
        { name: "Tinte de decks", body: "Limpieza, lijado y tinte para renovar decks desgastados.", alt: "Deck y barandas teñidos color cedro" },
        { name: "Lavado a presión", body: "Fachadas, decks, cercas y caminos, antes de pintar o por sí solo.", alt: "Exterior de casa adosada después de lavado a presión y pintura" },
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
    work: {
      label: "Nuestros trabajos",
      title: "Trabajos recientes, de principio a fin.",
      intro: "Del drywall a la última mano. Toque cualquier foto para verla más grande.",
      filterLabel: "Filtrar fotos",
      all: "Todas",
      cats: { interior: "Interiores", exterior: "Exteriores y decks", commercial: "Comercial", drywall: "Drywall y preparación" },
      close: "Cerrar",
      prev: "Foto anterior",
      next: "Foto siguiente",
      of: "de",
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
      options: ["Pintura interior", "Pintura exterior", "Pintura comercial", "Pintura de gabinetes", "Carpintería", "Reparación de drywall", "Tinte de decks", "Lavado a presión", "Otro"],
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
