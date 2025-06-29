export const emergencyInstructions = [
  {
    id: 'choking',
    title: 'Atragantamiento',
    steps: [
      'Párese detrás de la persona.',
      'Haga un puño con una mano.',
      'Realice compresiones abdominales (maniobra de Heimlich).',
      'Repita hasta que el objeto sea expulsado.',
    ],
  },
  {
    id: 'bleeding',
    title: 'Sangrado Severo',
    steps: [
      'Aplique presión directa sobre la herida.',
      'Use un paño limpio o vendaje.',
      'Eleve la extremidad lesionada por encima del corazón.',
      'Pida ayuda de emergencia si el sangrado es severo.',
    ],
  },
  {
    id: 'burns',
    title: 'Quemaduras Menores',
    steps: [
      'Enfríe la quemadura con agua corriente fría (no helada).',
      'Cubra la quemadura con un vendaje estéril.',
      'Tome un analgésico de venta libre.',
      'No use hielo ni rompa las ampollas.',
    ],
  },
  {
    id: 'heart-attack',
    title: 'Ataque Cardíaco',
    steps: [
      'Llame a los servicios de emergencia de inmediato.',
      'Mastique y trague una aspirina, si no es alérgico.',
      'Comience la RCP si la persona está inconsciente.',
      'Quédese con la persona hasta que llegue la ayuda.',
    ],
  },
  {
    id: 'stroke',
    title: 'Accidente Cerebrovascular (ACV)',
    steps: [
      'Cara: Pida a la persona que sonría. ¿Se cae un lado de la cara?',
      'Brazos: Pida a la persona que levante ambos brazos. ¿Un brazo se desvía hacia abajo?',
      'Habla: Pida a la persona que repita una frase simple. ¿Su habla es arrastrada o extraña?',
      'Tiempo: Si observa alguno de estos signos, llame al 911 de inmediato.',
    ],
  },
  {
    id: 'seizure',
    title: 'Convulsión',
    steps: [
      'Ayude a la persona a acostarse en el suelo.',
      'Gire suavemente a la persona hacia un lado para ayudar a la respiración.',
      'Despeje el área alrededor de la persona de cualquier objeto duro o afilado.',
      'Coloque algo suave y plano, como una chaqueta doblada, debajo de su cabeza.',
      'Cronometre la convulsión. Llame al 911 si dura más de 5 minutos.',
    ],
  },
  {
    id: 'allergic-reaction',
    title: 'Reacción Alérgica Grave (Anafilaxia)',
    steps: [
      'Llame al 911 de inmediato.',
      'Pregunte a la persona si tiene un autoinyector de epinefrina (EpiPen) y ayúdela a usarlo.',
      'Trate de mantener a la persona calmada.',
      'Haga que la persona se acueste de espaldas. Si está vomitando o sangrando, gírela de lado.',
      'Afloje la ropa ajustada y cubra a la persona con una manta.',
    ],
  },
];

export const healthTopics = [
  {
    slug: 'diabetes-101',
    title: 'Diabetes 101',
    summary: 'Entendiendo los conceptos básicos de la diabetes.',
    content: `La diabetes es una afección crónica que afecta la forma en que su cuerpo convierte los alimentos en energía. La mayor parte de los alimentos que come se descomponen en azúcar (también llamada glucosa) y se liberan en el torrente sanguíneo. Cuando su nivel de azúcar en la sangre sube, le indica a su páncreas que libere insulina. La insulina actúa como una llave para permitir que el azúcar en la sangre ingrese a las células de su cuerpo para usarla como energía.
    Con la diabetes, su cuerpo no produce suficiente insulina o no puede usar eficazmente la insulina que produce. Cuando no hay suficiente insulina o las células dejan de responder a la insulina, queda demasiada azúcar en el torrente sanguíneo. Con el tiempo, eso puede causar problemas de salud graves, como enfermedades cardíacas, pérdida de la visión y enfermedades renales.`,
    icon: 'Activity'
  },
  {
    slug: 'managing-hypertension',
    title: 'Manejo de la Hipertensión',
    summary: 'Consejos para controlar la presión arterial alta.',
    content: `La hipertensión, o presión arterial alta, es una afección común en la que la fuerza a largo plazo de la sangre contra las paredes de las arterias es lo suficientemente alta como para que eventualmente pueda causar problemas de salud, como enfermedades cardíacas. La presión arterial está determinada tanto por la cantidad de sangre que bombea su corazón como por la cantidad de resistencia al flujo sanguíneo en sus arterias.
    Los cambios en el estilo de vida son una parte importante del tratamiento. Estos incluyen seguir una dieta saludable para el corazón con menos sal, hacer actividad física con regularidad, mantener un peso saludable y limitar la cantidad de alcohol que bebe.`,
    icon: 'HeartPulse'
  },
  {
    slug: 'asthma-care',
    title: 'Cuidado del Asma',
    summary: 'Cómo vivir bien con asma.',
    content: `El asma es una afección en la que las vías respiratorias se estrechan e hinchan y pueden producir mucosidad adicional. Esto puede dificultar la respiración y provocar tos, un silbido (sibilancias) al exhalar y dificultad para respirar.
    Para algunas personas, el asma es una molestia menor. Para otras, puede ser un problema importante que interfiere con las actividades diarias y puede provocar un ataque de asma potencialmente mortal. El asma no se puede curar, pero sus síntomas se pueden controlar.`,
    icon: 'Wind'
  },
];

export const healthcareProviders = [
    {
    id: 1,
    name: 'Clínica Foianini',
    specialty: 'Hospital Privado de Tercer Nivel',
    address: 'Av. Irala 444, Santa Cruz de la Sierra',
    phone: '(3) 336-2211',
    image: 'https://placehold.co/100x100.png',
    aiHint: 'hospital building',
  },
  {
    id: 2,
    name: 'Hospital Japonés',
    specialty: 'Hospital Público de Tercer Nivel',
    address: 'Av. Japón, entre 2do y 3er anillo, Santa Cruz de la Sierra',
    phone: '(3) 346-2031',
    image: 'https://placehold.co/100x100.png',
    aiHint: 'modern hospital',
  },
  {
    id: 3,
    name: 'Hospital San Juan de Dios',
    specialty: 'Hospital Público de Tercer Nivel',
    address: 'C. Ayacucho 198, Santa Cruz de la Sierra',
    phone: '(3) 332-9901',
    image: 'https://placehold.co/100x100.png',
    aiHint: 'classic hospital',
  },
  {
    id: 4,
    name: 'Clínica INCOR',
    specialty: 'Instituto del Corazón',
    address: 'Av. Viedma 634, Santa Cruz de la Sierra',
    phone: '(3) 333-5566',
    image: 'https://placehold.co/100x100.png',
    aiHint: 'medical clinic',
  },
    {
    id: 5,
    name: 'Caja Nacional de Salud',
    specialty: 'Seguridad Social',
    address: 'C. La Paz 567, Santa Cruz de la Sierra',
    phone: '(3) 334-5051',
    image: 'https://placehold.co/100x100.png',
    aiHint: 'government building',
  },
  {
    id: 6,
    name: 'Clínica de las Américas',
    specialty: 'Hospital Privado',
    address: 'Av. Beni, entre 2do y 3er anillo, Santa Cruz de la Sierra',
    phone: '(3) 342-0022',
    image: 'https://placehold.co/100x100.png',
    aiHint: 'modern clinic',
  },
  {
    id: 7,
    name: 'Posta Sanitaria "El Bajío"',
    specialty: 'Centro de Salud Primaria',
    address: 'Barrio El Bajío, UV 108, Santa Cruz de la Sierra',
    phone: '(3) 325-1234',
    image: 'https://placehold.co/100x100.png',
    aiHint: 'small clinic',
  },
];

export const healthNews = [
  {
    id: 'news-1',
    title: 'Estudio de ONS sobre el bienestar mental en adultos jóvenes',
    summary: 'Un nuevo estudio de la Oficina de Estadísticas Nacionales (ONS) destaca los crecientes niveles de ansiedad entre los adultos jóvenes de 18 a 25 años.',
    date: '2023-10-26',
    source: 'ONS',
    href: '#',
  },
  {
    id: 'news-2',
    title: 'Impacto del trabajo remoto en la salud física',
    summary: 'La ONS informa sobre las implicaciones para la salud física del trabajo remoto a largo plazo, sugiriendo un aumento de los problemas musculoesqueléticos.',
    date: '2023-10-24',
    source: 'ONS',
    href: '#',
  },
  {
    id: 'news-3',
    title: 'Tasas de vacunación contra la gripe estacional para 2023',
    summary: 'Una actualización sobre el programa de vacunación contra la gripe estacional, con datos que muestran una fuerte aceptación en las poblaciones vulnerables.',
    date: '2023-10-22',
    source: 'ONS',
    href: '#',
  },
];
