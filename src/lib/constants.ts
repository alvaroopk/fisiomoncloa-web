export const SITE = {
  name: "Fisiomoncloa",
  fullName: "Fisiomoncloa — Centro de Fisioterapia en Madrid",
  phone: "635 80 49 92",
  phoneHref: "tel:+34635804992",
  email: "info@fisiomoncloa.es",
  address: "Calle de Cea Bermúdez, 36, 1ºC, 28003 Madrid",
  hours: "Lunes a Viernes: 9:00 — 22:00",
  whatsapp: "https://wa.me/34635804992?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20cita",
  instagram: "https://www.instagram.com/clinicafisiomoncloa/",
  facebook: "https://www.facebook.com/sarazeituun/",
  twitter: "https://x.com/fisiomoncloa",
  tiktok: "https://www.tiktok.com/@fisiomoncloa.es",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.5!2d-3.7060!3d40.4440!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228804b67de8b%3A0x1!2sCalle+de+Cea+Berm%C3%BAdez+36+Madrid!5e0!3m2!1ses!2ses!4v1",
  mapsLink: "https://maps.app.goo.gl/ferYXd8QewxNxCf17",
};

export const NAV_LINKS = [
  { label: "Equipo", href: "/equipo" },
  { label: "Especialidades", href: "/especialidades" },
  { label: "Tarifas", href: "/tarifas" },
  { label: "Contacto", href: "/contacto" },
];

export const VALUE_PROPS = [
  {
    icon: "award",
    title: "+15 años de experiencia",
    text: "Más de una década cuidando a pacientes en el centro de Madrid, con un enfoque completamente personalizado.",
  },
  {
    icon: "zap",
    title: "Tecnología exclusiva en Chamberí",
    text: "Únicos en el barrio con Indiba y NESA, la tecnología más avanzada para tu recuperación.",
  },
  {
    icon: "map-pin",
    title: "En el corazón de Madrid",
    text: "A menos de 5 minutos de las paradas de metro Islas Filipinas y Canal. Fácil acceso desde toda la ciudad.",
  },
];

export const SPECIALTIES_PREVIEW = [
  {
    title: "Suelo Pélvico",
    description:
      "Preparación al parto, recuperación postparto, incontinencia y mucho más.",
    image: "/assets/servicio_suelo_pelvico.webp",
    alt: "Fisioterapia del suelo pélvico en Fisiomoncloa Madrid",
  },
  {
    title: "Fisioterapia Deportiva",
    description:
      "Recupera tu rendimiento y vuelve a lo que más te gusta sin dolor.",
    image: "/assets/servicio_deportiva.webp",
    alt: "Fisioterapia deportiva en Madrid",
  },
  {
    title: "Osteopatía",
    description:
      "Tratamiento holístico que trabaja el origen de tu dolor, no solo el síntoma.",
    image: "/assets/servicio_osteopatia.webp",
    alt: "Osteopatía en Madrid Fisiomoncloa",
  },
  {
    title: "Drenaje Linfático",
    description:
      "Mejora tu circulación y reduce la inflamación con técnica manual especializada.",
    image: "/assets/servicio_drenaje.webp",
    alt: "Drenaje linfático manual en Madrid",
  },
  {
    title: "Rehabilitación Postquirúrgica",
    description:
      "Recuperación segura y efectiva tras tu operación.",
    image: "/assets/servicio_rehab_post.webp",
    alt: "Rehabilitación postquirúrgica en Fisiomoncloa",
  },
  {
    title: "Dolor Orofacial y ATM",
    description:
      "Aliviamos el bruxismo, cefaleas y dolores mandibulares.",
    image: "/assets/servicio_orofacial.webp",
    alt: "Tratamiento dolor orofacial y ATM Madrid",
  },
];

export const ALL_SPECIALTIES = [
  ...SPECIALTIES_PREVIEW,
  {
    title: "Rehabilitación Prequirúrgica",
    description:
      "Preparación física antes de una cirugía para optimizar la recuperación posterior.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    alt: "Rehabilitación prequirúrgica fisioterapia",
  },
  {
    title: "Tratamiento Miofascial",
    description:
      "Técnicas manuales sobre el tejido conectivo para resolver restricciones que provocan dolor y pérdida de movilidad.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
    alt: "Tratamiento miofascial fisioterapia",
  },
  {
    title: "Fisioterapia Pediátrica",
    description:
      "Atención especializada para bebés y niños con retrasos madurativos, trastornos del movimiento y cólicos.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    alt: "Fisioterapia pediátrica bebés niños",
  },
  {
    title: "Indiba",
    description:
      "Radiofrecuencia que acelera la regeneración tisular y reduce el dolor desde la primera sesión. Únicos en Chamberí.",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80",
    alt: "Tratamiento Indiba fisioterapia Madrid",
  },
  {
    title: "NESA — Neuromodulación",
    description:
      "Tecnología exclusiva para tratar el dolor crónico, mejorar el sueño y optimizar el sistema nervioso. Únicos en Chamberí.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    alt: "NESA neuromodulación no invasiva Madrid",
  },
  {
    title: "Unidad del Sueño",
    description:
      "Tratamiento especializado de trastornos del sueño e insomnio crónico mediante tecnología NESA.",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&q=80",
    alt: "Unidad del sueño insomnio tratamiento",
  },
];

export const TEAM = [
  {
    name: "Sara Zeitun Eguino",
    role: "Directora clínica",
    description:
      "Sara fundó Fisiomoncloa hace más de 15 años con un objetivo claro: ofrecer fisioterapia de verdad, sin atajos. Especializada en suelo pélvico, acompaña a sus pacientes desde el embarazo hasta la recuperación postparto.",
    image: "/assets/equipo_sara.png",
  },
  {
    name: "Ainhoa Ramos Antelo",
    role: "Fisioterapeuta",
    description:
      "Ainhoa combina técnicas manuales con tecnología avanzada para ofrecer tratamientos personalizados, con enfoque en la recuperación funcional y la prevención de lesiones.",
    image: "/assets/equipo_ainhoa.png",
  },
  {
    name: "Azael Durán Vela",
    role: "Fisioterapeuta deportivo",
    description:
      "Azael trabaja con deportistas de todos los niveles. Su objetivo es que vuelvas a hacer lo que más te gusta lo antes posible y con las menores probabilidades de recaída.",
    image: "/assets/equipo_azael.webp",
  },
  {
    name: "Romina Martínez Herrera",
    role: "Fisioterapeuta y preparadora física",
    description:
      "Romina aporta una visión integral que combina la fisioterapia con el entrenamiento físico, ideal para pacientes que quieren recuperarse y mejorar su condición física.",
    image: "/assets/equipo_romina.webp",
  },
];

export const PRICING = [
  {
    category: "Fisioterapia General, Osteopatía y Drenaje",
    note: "Incluye Indiba y EPTE",
    rows: [
      { label: "Sesión individual", price: "60 €" },
      { label: "Bono 5 sesiones", price: "285 €" },
      { label: "Bono 10 sesiones", price: "550 €" },
    ],
  },
  {
    category: "Suelo Pélvico, Embarazo y Posparto",
    note: "",
    rows: [
      { label: "Sesión de valoración", price: "70 €" },
      { label: "Sesión individual", price: "67 €" },
      { label: "Bono 5 sesiones", price: "325 €" },
      { label: "Bono 10 sesiones", price: "600 €" },
    ],
  },
  {
    category: "Hipopresivos y Pilates Terapéutico",
    note: "Individual",
    rows: [
      { label: "Sesión individual", price: "60 €" },
      { label: "Bono 5 sesiones", price: "275 €" },
      { label: "Bono 10 sesiones", price: "500 €" },
    ],
  },
  {
    category: "Fisioestética",
    note: "",
    rows: [
      { label: "Sesión individual", price: "70 €" },
      { label: "Bono 5 sesiones", price: "325 €" },
      { label: "Bono 10 sesiones", price: "600 €" },
    ],
  },
  {
    category: "Presoterapia",
    note: "",
    rows: [
      { label: "Sesión individual", price: "25 €" },
      { label: "Bono 5 sesiones", price: "115 €" },
      { label: "Bono 10 sesiones", price: "210 €" },
    ],
  },
  {
    category: "Cólicos del Lactante",
    note: "",
    rows: [
      { label: "Sesión individual", price: "60 €" },
      { label: "Bono 5 sesiones", price: "275 €" },
    ],
  },
  {
    category: "NESA — Neuromodulación",
    note: "",
    rows: [
      { label: "Sesión de valoración", price: "70 €" },
      { label: "Sesión individual", price: "60 €" },
      { label: "Bono 10 sesiones", price: "450 €" },
    ],
  },
];
