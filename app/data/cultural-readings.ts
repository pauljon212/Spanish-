// Cultural Readings for Spanish Learning
export interface CulturalReading {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  content: string;
  vocabulary: { word: string; meaning: string }[];
  discussion: string[];
}

export const culturalReadings: CulturalReading[] = [
  {
    id: 'culture-1',
    title: 'Saludos y Besos en el Mundo Hispanohablante',
    description: 'Understanding greetings and physical affection in Spanish-speaking cultures',
    level: 'beginner',
    content: `
En los países hispanohablantes, los saludos son muy importantes. No es solo decir "Hola", es una forma de mostrar respeto y amistad.

En España, es común saludarse con dos besos en la mejilla - uno en cada lado. Esto se hace entre amigos, familiares y colegas. Los hombres generalmente se saludan con un apretón de manos o un abrazo.

En América Latina, el saludo varía según el país. En México y partes de América Central, un apretón de manos es lo más común en situaciones formales. Entre amigos, un abrazo es muy típico. En Argentina, Uruguay y Paraguay, también se usan dos besos como en España.

Las mujeres frecuentemente se saludan con besos, incluso entre conocidas. Los hombres a menudo se abrazan o se dan la mano. Es importante notar que la distancia personal es más corta en las culturas hispanohablantes comparada con culturas anglosajonas.

Cuando no conoces a una persona, es más seguro esperar a ver cómo ella te saluda. Esto demuestra respeto por las diferencias culturales.
    `,
    vocabulary: [
      { word: 'Mejilla', meaning: 'Cheek' },
      { word: 'Apretón de manos', meaning: 'Handshake' },
      { word: 'Abrazo', meaning: 'Hug' },
      { word: 'Distancia personal', meaning: 'Personal space' },
      { word: 'Conocida', meaning: 'Acquaintance' },
    ],
    discussion: [
      'How do greetings differ in your culture?',
      'Would you feel comfortable with two-kiss greeting?',
      'Why might cultural understanding of greetings be important?',
    ],
  },
  {
    id: 'culture-2',
    title: 'La Importancia de la Familia Hispana',
    description: 'The central role of family in Hispanic culture',
    level: 'intermediate',
    content: `
La familia es el centro de la vida hispanohablante. Mientras que en muchas culturas occidentales la independencia es muy valorada, en las culturas hispanas la familia mantiene un papel central durante toda la vida.

Las comidas familiares son sagradas. La cena es el momento donde toda la familia se reúne para compartir no solo la comida, sino también los eventos del día. Esto refuerza los lazos familiares y la comunicación.

Los abuelos tienen un papel importante en la familia extendida. A menudo viven con la familia o muy cerca, y son respetados como fuentes de sabiduría y estabilidad. Los nietos frecuentemente pasan mucho tiempo con sus abuelos.

El compadrazgo es una institución única. Los padrinos y madrinas (godparents) tienen responsabilidades importantes en la vida del niño y son considerados parte de la familia extendida.

Los hijos salen de casa más tardíamente que en otros países. Es común que los jóvenes adultos vivan con sus padres hasta casarse, especialmente en algunos países como España e Italia.

La lealtad familiar es fundamental. Los miembros de la familia se apoyan mutuamente en tiempos difíciles, y se espera que se ayuden con decisiones importantes.
    `,
    vocabulary: [
      { word: 'Lazos familiares', meaning: 'Family ties' },
      { word: 'Compadrazgo', meaning: 'Godparent relationship' },
      { word: 'Padrinos', meaning: 'Godparents' },
      { word: 'Extendida', meaning: 'Extended' },
      { word: 'Sabiduría', meaning: 'Wisdom' },
    ],
    discussion: [
      'How important is the extended family in your culture?',
      'What role do godparents play?',
      'How do family values influence daily life?',
    ],
  },
  {
    id: 'culture-3',
    title: 'Las Fiestas y Celebraciones Hispanas',
    description: 'Important holidays and celebrations in Spanish-speaking countries',
    level: 'intermediate',
    content: `
Las fiestas son una parte integral de la cultura hispana. Cada país y región tiene sus propias celebraciones, pero hay algunas que son reconocidas en todo el mundo hispanohablante.

El Día de Muertos (Día de los Difuntos) en México es una celebración única. Contrario a lo que muchos piensan, no es una fiesta triste. Es una oportunidad para recordar y honrar a los seres queridos que han fallecido. Las familias crean ofrendas con flores, velas, fotos y comida favorita del difunto. El libro "Cien años de soledad" de Gabriel García Márquez menciona esta tradición.

La Navidad en el mundo hispanohablante tiene características distintas. Mientras que en Estados Unidos el día principal es el 25 de diciembre, en muchos países hispanos el 24 de diciembre (Nochebuena) es el día principal. Los Reyes Magos el 6 de enero también es importante, especialmente para los niños.

La Semana Santa es una semana de celebraciones religiosas. Las procesiones son especialmente elaboradas en España. En ciudades como Sevilla, las imágenes religiosas se llevan por las calles con solemnidad.

El Carnaval antes de la Cuaresma es celebrado en muchos lugares, especialmente en Brasil y algunas ciudades españolas. Es conocido por su música, baile y disfraces.

Las fiestas locales (fiestas patronales) honran al santo patrón de cada pueblo. Incluyen desfiles, música, comida y diversión, y son oportunidades para que toda la comunidad se reúna.
    `,
    vocabulary: [
      { word: 'Difuntos', meaning: 'Deceased' },
      { word: 'Ofrendas', meaning: 'Offerings' },
      { word: 'Nochebuena', meaning: 'Christmas Eve' },
      { word: 'Reyes Magos', meaning: 'Three Wise Men' },
      { word: 'Procesiones', meaning: 'Processions' },
      { word: 'Santo patrón', meaning: 'Patron saint' },
    ],
    discussion: [
      'Which Hispanic celebration interests you most?',
      'How do holidays in Spanish-speaking countries differ from yours?',
      'Why are family gatherings central to these celebrations?',
    ],
  },
  {
    id: 'culture-4',
    title: 'La Comida Hispanohablante',
    description: 'Food culture and traditions across Spanish-speaking regions',
    level: 'intermediate',
    content: `
La comida es más que sustento en el mundo hispanohablante; es una expresión de cultura, tradición e identidad.

Cada país hispanohablante tiene su propia cocina distintiva. México es famosa por sus tamales, moles, tacos y quesadillas. La cocina mexicana fue declarada Patrimonio Inmaterial de la Humanidad por la UNESCO.

España es conocida por la paella (un arroz con mariscos), el gazpacho (sopa fría de tomate), y el jamón ibérico. En el norte de España, los mariscos son muy populares.

Argentina es famosa por sus carnes asadas (asados) y empanadas. El tango argentino está inseparablemente ligado a la carne y el vino.

Perú tiene una cocina muy sofisticada con influencias indígenas. El ceviche, un plato de pescado crudo marinado en jugo de limón, es un ejemplo. La papa tiene origen peruano - hay miles de variedades diferentes en Perú.

Colombia es conocida por su café de alta calidad. El ajiaco bogotano es un caldo tradicional de la capital.

Las bebidas también son importantes. El mate en Argentina es una bebida social - se pasa de persona a persona como un acto de comunidad. El café es importante en toda la región hispanohablante, especialmente en Colombia y América Central.

Las comidas son eventos sociales. La sobremesa - el tiempo después de comer donde la gente continúa conversando - es una tradición importante.
    `,
    vocabulary: [
      { word: 'Tamales', meaning: 'Traditional corn dough dish' },
      { word: 'Paella', meaning: 'Spanish rice dish' },
      { word: 'Asados', meaning: 'Grilled meats' },
      { word: 'Ceviche', meaning: 'Raw fish dish' },
      { word: 'Mate', meaning: 'South American tea' },
      { word: 'Sobremesa', meaning: 'Time after meal spent conversing' },
    ],
    discussion: [
      'What is your favorite Hispanic dish?',
      'How does food culture bring communities together?',
      'Why might regional cuisines be so distinct?',
    ],
  },
  {
    id: 'culture-5',
    title: 'La Literatura Hispanohablante',
    description: 'Major authors and works of Spanish-speaking literature',
    level: 'advanced',
    content: `
La literatura hispanohablante es una de las más ricas y reconocidas del mundo. Ha producido varios ganadores del Premio Nobel de Literatura.

Miguel de Cervantes escribió "Don Quijote" (1605), considerada una de las novelas más importantes de todos los tiempos. La historia de un hidalgo que pierde la razón y emprende aventuras como caballero andante es una crítica satírica de las novelas de caballerías.

Gabriel García Márquez, colombiano, escribió "Cien años de soledad" (1967), que introduce el realismo mágico a la literatura mundial. La novela cuenta la historia de la familia Buendía en el pueblo ficticio de Macondo a lo largo de siete generaciones.

Carlos Fuentes de México escribió "La muerte de Artemio Cruz", una novela modernista que juega con la estructura narrativa y el tiempo.

Pablo Neruda, poeta chileno, es conocido por su poesía de amor y política. "Veinte poemas de amor y una canción de desesperación" es su obra más famosa.

Federico García Lorca, poeta español, es conocido por su poesía lírica y su drama "La casa de Bernarda Alba". Su obra combina tradición folk española con modernismo.

Isabel Allende, escritora chilena contemporánea, ha escrito novelas exitosas como "La casa de los espíritus" que combinan realismo mágico con historia política.

Estos autores y sus obras no solo son importantes literariamente, sino que también reflejan la historia, la política y los valores de sus sociedades.
    `,
    vocabulary: [
      { word: 'Caballero andante', meaning: 'Knight errant' },
      { word: 'Realismo mágico', meaning: 'Magical realism' },
      { word: 'Generaciones', meaning: 'Generations' },
      { word: 'Poesía lírica', meaning: 'Lyric poetry' },
      { word: 'Modernismo', meaning: 'Modernism' },
      { word: 'Patrimonio', meaning: 'Heritage' },
    ],
    discussion: [
      'Which author interests you most?',
      'How does magical realism differ from other literary styles?',
      'What role does literature play in preserving culture?',
    ],
  },
];
