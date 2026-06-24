// Contenido REAL de la Unidad 0 (30 páginas) — estructurado en bloques.
// Bloques: def | prose | list(sq|check) | concepts | idea | dato | embed
// img = ID de wixstatic (se construye la URL en render); null => figura con ícono del tema.

const site = {
  title: 'Unidad 0 · Biología 2.º BGU',
  unidad: 'Unidad 0',
  heroTitleA: 'El origen de la vida y las ',
  heroTitleU: 'biomoléculas orgánicas',
  heroLead: 'El origen de la vida y las biomoléculas orgánicas estudian cómo surgieron los primeros seres vivos en la Tierra y las sustancias fundamentales que forman y permiten el funcionamiento de los organismos vivos.',
  homeVideo: 'KsYN_q1mMsU',
  autor: {
    nombre: 'Lic. Xavier Martínez Chamorro',
    rol: 'Biología · 2.º BGU',
    email: 'vxmartinez@uce.edu.ec',
    tel: '099 872 1403',
    curso: 'Curso: Séptimo «B»',
  },
  recursos: [
    { title: 'Teorías del origen de la vida', meta: 'Presentación · SlideShare', icon: 'slides', tema: 0, url: 'https://es.slideshare.net/slideshow/teoras-del-origen-de-la-vida-67639004/67639004' },
    { title: 'Biomoléculas orgánicas', meta: 'Presentación · SlideShare', icon: 'doc', tema: 1, url: 'https://es.slideshare.net/slideshow/biomolculas-orgnicas-74167457/74167457' },
  ],
};

const IMG = 'https://static.wixstatic.com/media/';

const temas = [
  /* ===================== TEMA 1 ===================== */
  {
    n: '01', slug: 'origen-de-la-vida', short: 'Origen', title: 'Origen de la vida',
    icon: 'origen', c: '#5B4DF0', ct: '#ECEAFE', cd: '#2A1F8E',
    blurb: 'Cómo aparecieron los primeros seres vivos en la Tierra y las teorías que lo explican.',
    img: '5740dc_d444a10d4dc949d6a603591a8c987ff1~mv2.png',
    video: '5A0IBsbSOSI',
    quizzes: ['https://wordwall.net/es/resource/4012487/origen-de-la-vida', 'https://wordwall.net/es/resource/35267420/origen-de-la-vida'],
    intro: 'El origen de la vida estudia cómo aparecieron los primeros seres vivos en la Tierra hace millones de años. Existen diferentes teorías que intentan explicar este proceso, como la generación espontánea y la teoría de la evolución química propuesta por Oparin y Haldane. Además, el experimento de Miller y Urey demostró que en condiciones similares a las de la Tierra primitiva podían formarse moléculas orgánicas esenciales para la vida.',
    subs: [
      { slug: 'teoria-creacionista', title: 'Teoría creacionista', img: '5740dc_e374d81761ad40899104407b6fe6a5f6~mv2.png', blocks: [
        { t: 'def', text: 'La teoría creacionista sostiene que el origen de la vida y del universo fue creado por un ser divino o superior.' },
        { t: 'list', label: 'Importancia', kind: 'sq', items: ['Fue una de las primeras explicaciones sobre el origen de la vida.', 'Está basada en creencias religiosas y culturales.', 'Influyó en muchas sociedades y religiones del mundo.'] },
        { t: 'list', label: 'Características', kind: 'check', items: ['Explica que la vida fue creada de manera inmediata.', 'Se basa en la fe y en textos sagrados.', 'Considera que los seres vivos fueron creados tal como existen.'] },
        { t: 'idea', text: 'Un ser supremo creó el universo, la Tierra y todos los seres vivos.' },
        { t: 'dato', text: 'No es una teoría científica porque no puede comprobarse mediante experimentos.' },
      ]},
      { slug: 'generacion-espontanea', title: 'Generación espontánea', img: '5740dc_59f29cbe769d45edab24c788cb50aa52~mv2.png', blocks: [
        { t: 'def', text: 'La generación espontánea era una idea antigua que decía que los seres vivos podían surgir de la materia sin vida.' },
        { t: 'list', label: 'Importancia', kind: 'sq', items: ['Fue una de las primeras explicaciones sobre el origen de la vida.', 'Ayudó al desarrollo de investigaciones científicas posteriores.'] },
        { t: 'list', label: 'Características', kind: 'check', items: ['Creía que la vida aparecía de forma automática.', 'Se basaba en observaciones sin experimentos científicos.', 'Fue aceptada durante muchos años.'] },
        { t: 'idea', text: 'La vida puede originarse a partir de materia inerte.' },
        { t: 'dato', text: 'El experimento de Louis Pasteur demostró que esta teoría era incorrecta.' },
      ]},
      { slug: 'teoria-panspermia', title: 'Teoría de la panspermia', img: '5740dc_81b3a06629a74b73b347c16164507b53~mv2.png', blocks: [
        { t: 'def', text: 'La teoría de la panspermia propone que la vida llegó a la Tierra desde el espacio a través de meteoritos, cometas o polvo cósmico.' },
        { t: 'list', label: 'Importancia', kind: 'sq', items: ['Plantea una explicación diferente sobre el origen de la vida.', 'Ayudó a ampliar las investigaciones sobre vida extraterrestre.'] },
        { t: 'list', label: 'Características', kind: 'check', items: ['Afirma que microorganismos viajaron por el universo.', 'Relaciona el origen de la vida con el espacio.', 'Sugiere que la vida puede existir en otros planetas.'] },
        { t: 'idea', text: 'La vida no se originó en la Tierra, sino que vino del espacio.' },
        { t: 'dato', text: 'Esta teoría no explica cómo se creó la vida, solo cómo pudo llegar a la Tierra.' },
      ]},
      { slug: 'oparin-haldane', title: 'Teoría de Oparin y Haldane', img: '5740dc_cf3c2e6757564e38873960c99ccefce7~mv2.png', blocks: [
        { t: 'def', text: 'La teoría de Oparin y Haldane explica que la vida se originó en la Tierra primitiva a partir de sustancias químicas simples.' },
        { t: 'list', label: 'Importancia', kind: 'sq', items: ['Fue una de las primeras teorías científicas sobre el origen de la vida.', 'Sirvió de base para muchos experimentos e investigaciones.'] },
        { t: 'list', label: 'Características', kind: 'check', items: ['La atmósfera primitiva no tenía oxígeno.', 'La energía del Sol, rayos y volcanes ayudó a formar moléculas orgánicas.', 'Las moléculas se unieron poco a poco hasta formar los primeros seres vivos.'] },
        { t: 'idea', text: 'La vida surgió por procesos químicos en los océanos primitivos.' },
        { t: 'dato', text: 'Esta teoría fue apoyada después por el experimento de Stanley Miller y Harold Urey.' },
      ]},
      { slug: 'miller-urey', title: 'Experimento de Miller y Urey', img: '5740dc_36e93b87fb004ed2abb0ee31e433027f~mv2.png', blocks: [
        { t: 'def', text: 'El experimento de Miller y Urey intentó demostrar cómo pudieron formarse las primeras moléculas orgánicas en la Tierra primitiva.' },
        { t: 'list', label: 'Importancia', kind: 'sq', items: ['Apoyó la teoría de Oparin y Haldane.', 'Demostró que las moléculas necesarias para la vida podían formarse de manera natural.'] },
        { t: 'list', label: 'Características', kind: 'check', items: ['Simuló las condiciones de la Tierra primitiva.', 'Utilizó gases, agua y descargas eléctricas.', 'Produjo aminoácidos, sustancias importantes para la vida.'] },
        { t: 'idea', text: 'Las moléculas orgánicas pueden formarse a partir de sustancias simples y energía.' },
        { t: 'dato', text: 'El experimento fue realizado por Stanley Miller y Harold Urey en 1953.' },
      ]},
    ],
  },

  /* ===================== TEMA 2 ===================== */
  {
    n: '02', slug: 'biomoleculas-organicas', short: 'Biomoléculas', title: 'Biomoléculas orgánicas',
    icon: 'biomoleculas', c: '#F59E0B', ct: '#FEF1D6', cd: '#7A4E00',
    blurb: 'Las sustancias que forman y dan energía a los seres vivos.',
    img: '5740dc_724c66145b174b02afb21d81d2bf59d3~mv2.png',
    video: 'G2VcCAAEQso',
    quizzes: ['https://es.educaplay.com/recursos-educativos/6056231-las_biomoleculas.html', 'https://es.educaplay.com/recursos-educativos/4342989-biomoleculas.html'],
    intro: 'Las biomoléculas orgánicas son sustancias químicas presentes en todos los seres vivos. Están formadas principalmente por carbono, hidrógeno, oxígeno y nitrógeno, y cumplen funciones esenciales para el funcionamiento del organismo. Estas moléculas permiten obtener energía, formar estructuras celulares y transmitir información genética. Las principales biomoléculas orgánicas son los carbohidratos, lípidos, proteínas y ácidos nucleicos.',
    subs: [
      { slug: 'carbohidratos', title: 'Carbohidratos', img: '5740dc_29157f5f7bde4749a32c9d6cda866ccc~mv2.png', blocks: [
        { t: 'prose', text: 'Los carbohidratos son biomoléculas orgánicas formadas principalmente por carbono, hidrógeno y oxígeno. También son conocidos como glúcidos o azúcares y constituyen la principal fuente de energía para los seres vivos. Se encuentran en alimentos como pan, arroz, pasta, cereales, frutas, papa y maíz.' },
        { t: 'prose', label: 'Funciones de los carbohidratos', text: 'La función principal de los carbohidratos es proporcionar energía inmediata al organismo para realizar actividades diarias como caminar, estudiar, correr y pensar. Además, ayudan al funcionamiento del cerebro y de los músculos. Algunos carbohidratos también cumplen funciones estructurales en plantas y otros organismos.' },
        { t: 'concepts', label: 'Tipos de carbohidratos', items: [
          { name: 'Monosacáridos', desc: 'Son los carbohidratos más simples y están formados por una sola molécula de azúcar.', ex: 'glucosa · fructosa · galactosa' },
          { name: 'Disacáridos', desc: 'Se forman por la unión de dos monosacáridos.', ex: 'sacarosa · lactosa · maltosa' },
          { name: 'Polisacáridos', desc: 'Son cadenas largas de azúcares y sirven como reserva de energía o estructura.', ex: 'almidón · glucógeno · celulosa' },
        ]},
        { t: 'embed', kind: 'tiktok', label: 'TikTok te ayuda', text: 'Video de apoyo de @nutribabys26 sobre los carbohidratos.', url: 'https://www.tiktok.com/@nutribabys26' },
      ]},
      { slug: 'lipidos', title: 'Lípidos', img: '5740dc_4d69c98b96b14ed48570169a3e7bfac5~mv2.png', blocks: [
        { t: 'prose', text: 'Los lípidos son biomoléculas orgánicas formadas principalmente por carbono, hidrógeno y oxígeno. Son sustancias insolubles en agua y se encuentran en alimentos como aceites, mantequilla, aguacate, frutos secos, semillas y pescado.' },
        { t: 'list', label: 'Funciones de los lípidos', kind: 'check', items: ['Almacenan energía a largo plazo.', 'Protegen órganos internos.', 'Ayudan a mantener la temperatura corporal.', 'Forman parte de las membranas celulares.', 'Participan en la producción de hormonas.'] },
        { t: 'concepts', label: 'Tipos de lípidos', items: [
          { name: 'Grasas saturadas', desc: 'Se encuentran principalmente en alimentos de origen animal como mantequilla y carnes.' },
          { name: 'Grasas insaturadas', desc: 'Son consideradas más saludables y están presentes en aceites vegetales, aguacate y frutos secos.' },
          { name: 'Fosfolípidos', desc: 'Forman parte de la membrana celular y ayudan al funcionamiento de las células.' },
        ]},
      ]},
      { slug: 'proteinas', title: 'Proteínas', img: '5740dc_85d158f5e50e454499e898a77983f0f4~mv2.png', blocks: [
        { t: 'prose', text: 'Las proteínas son biomoléculas orgánicas formadas por aminoácidos y son esenciales para el crecimiento y funcionamiento del organismo. Se encuentran en alimentos como carne, pescado, huevos, leche, queso, yogur y legumbres.' },
        { t: 'list', label: 'Funciones de las proteínas', kind: 'check', items: ['Forman músculos, tejidos y órganos.', 'Ayudan al crecimiento y reparación celular.', 'Transportan sustancias en el organismo.', 'Participan en la defensa del cuerpo mediante anticuerpos.', 'Actúan como enzimas en procesos químicos.'] },
        { t: 'idea', text: 'Las proteínas permiten el crecimiento, mantenimiento y reparación de los tejidos del cuerpo. También ayudan al sistema inmunológico y participan en múltiples procesos vitales del organismo.' },
      ]},
      { slug: 'acidos-nucleicos', title: 'Ácidos nucleicos', img: '5740dc_48fa6b966374448388a39fe92ccbeb6d~mv2.png', blocks: [
        { t: 'prose', text: 'Los ácidos nucleicos son biomoléculas orgánicas encargadas de almacenar y transmitir la información genética de los seres vivos.' },
        { t: 'list', label: 'Funciones de los ácidos nucleicos', kind: 'check', items: ['Almacenar información genética.', 'Transmitir características hereditarias.', 'Controlar funciones celulares.', 'Participar en la producción de proteínas.', 'Permitir la reproducción celular.'] },
        { t: 'concepts', label: 'Tipos de ácidos nucleicos', items: [
          { name: 'ADN (Ácido desoxirribonucleico)', desc: 'Contiene la información genética hereditaria de los organismos. Se encuentra principalmente en el núcleo de las células.' },
          { name: 'ARN (Ácido ribonucleico)', desc: 'Participa en la síntesis de proteínas y ayuda a transportar la información genética necesaria para el funcionamiento celular.' },
        ]},
      ]},
    ],
  },

  /* ===================== TEMA 3 ===================== */
  {
    n: '03', slug: 'evolucion', short: 'Evolución', title: 'Evolución de los seres vivos',
    icon: 'evolucion', c: '#14B8A6', ct: '#D6F5F1', cd: '#075E59',
    blurb: 'Las ideas y pruebas que explican cómo cambian las especies con el tiempo.',
    img: '5740dc_a0b241c2f55d4b9f8cc6e7b53d0ac90c~mv2.png',
    video: null,
    infoExtra: 'https://es.slideshare.net/slideshow/la-evolucin-de-los-seres-vivos/1218593',
    quizzes: ['https://wordwall.net/es/resource/7008936/darwin-y-la-evoluci%C3%B3n-de-los-seres-vivos', 'https://wordwall.net/es/resource/64915870/evoluci%C3%B3n-de-los-seres-vivos'],
    intro: 'La evolución es el proceso mediante el cual los seres vivos experimentan cambios a lo largo del tiempo. Estos cambios permiten que las especies se adapten a las condiciones de su entorno, aumentando sus posibilidades de supervivencia y reproducción.',
    subs: [
      { slug: 'charles-darwin', title: 'Charles Darwin y la selección natural', img: '5740dc_b6cce08fcdac478ab7be3c6177ae2c4e~mv2.png', blocks: [
        { t: 'prose', label: '¿Quién fue Charles Darwin?', text: 'Charles Darwin fue un naturalista británico nacido en 1809, reconocido por desarrollar la teoría de la evolución mediante la selección natural. Durante su viaje alrededor del mundo a bordo del barco HMS Beagle, observó una gran diversidad de plantas, animales y fósiles que le permitieron comprender cómo cambian las especies a lo largo del tiempo.' },
        { t: 'prose', label: '¿Qué es la selección natural?', text: 'La selección natural es el proceso mediante el cual los organismos que poseen características favorables para sobrevivir en su ambiente tienen mayores posibilidades de vivir, reproducirse y transmitir esas características a sus descendientes.' },
      ]},
      { slug: 'evidencias-evolucion', title: 'Evidencias de la evolución', img: '5740dc_a870aaf25272459984f9110b5539227c~mv2.png', blocks: [
        { t: 'def', text: 'Las evidencias de la evolución son pruebas científicas que demuestran que los seres vivos han cambiado a lo largo del tiempo y que todas las especies comparten un origen común.' },
        { t: 'list', label: 'Evidencias de la evolución', kind: 'sq', items: ['Registro fósil', 'Anatomía comparada', 'Evidencia genética y molecular', 'Embriología comparada', 'Órganos vestigiales', 'Biogeografía'] },
        { t: 'prose', label: 'Importancia', text: 'Las evidencias de la evolución permiten comprender el origen y la diversidad de los seres vivos. Gracias a ellas, los científicos pueden explicar cómo las especies han cambiado a lo largo del tiempo, cómo están relacionadas entre sí y cómo se han adaptado a diferentes ambientes.' },
      ]},
      { slug: 'adaptacion', title: 'Adaptación de los seres vivos', img: '5740dc_f75f3ed6e277471c999b6dfd9674c881~mv2.png', blocks: [
        { t: 'def', text: 'La adaptación es el proceso mediante el cual los seres vivos desarrollan características que les permiten sobrevivir y reproducirse en su ambiente.' },
        { t: 'concepts', label: 'Tipos de adaptación', items: [
          { name: 'Adaptaciones morfológicas', desc: 'Cambios en la estructura física o apariencia de los organismos que les ayudan a sobrevivir.' },
          { name: 'Adaptaciones fisiológicas', desc: 'Cambios relacionados con el funcionamiento interno del organismo.' },
          { name: 'Adaptaciones conductuales', desc: 'Comportamientos que ayudan a los seres vivos a sobrevivir.' },
          { name: 'Camuflaje', desc: 'Adaptación que permite a algunos organismos confundirse con su entorno para evitar depredadores o capturar presas.' },
        ]},
      ]},
      { slug: 'evolucion-humana', title: 'Evolución humana', img: '5740dc_66608cd6ffad4cc7b8378db1828ef869~mv2.png', blocks: [
        { t: 'def', text: 'La evolución humana es el proceso de cambios biológicos que experimentó el ser humano a lo largo de millones de años desde sus antepasados primates hasta la aparición del ser humano actual. Este proceso ocurrió gradualmente mediante la evolución y la selección natural, permitiendo el desarrollo de características que favorecieron la supervivencia y adaptación a diferentes ambientes.' },
        { t: 'list', label: 'Principales etapas de la evolución humana', kind: 'sq', items: ['Australopithecus', 'Homo habilis', 'Homo erectus', 'Homo neanderthalensis', 'Homo sapiens'] },
      ]},
    ],
  },

  /* ===================== TEMA 4 ===================== */
  {
    n: '04', slug: 'diversidad', short: 'Diversidad', title: 'Diversidad de los seres vivos',
    icon: 'diversidad', c: '#22A55B', ct: '#DCF3E3', cd: '#155B2C',
    blurb: 'Cómo se organiza y se cuida la enorme variedad de la vida.',
    img: '5740dc_f6cb47b4479246c3a9f7dfe9ee90b6bc~mv2.png',
    video: 'DZekZBQJoPQ',
    quizzes: ['https://es.educaplay.com/recursos-educativos/5532931-diversidad_de_los_seres_vivos.html', 'https://es.educaplay.com/recursos-educativos/26192867-evaluacion_de_seres_vivos_4to_grado.html'],
    intro: 'La biodiversidad es la variedad de seres vivos que existen en la Tierra, incluyendo animales, plantas, hongos y microorganismos. También comprende las diferencias genéticas entre los organismos y los ecosistemas donde habitan. La biodiversidad es el resultado de millones de años de evolución y adaptación al ambiente. Gracias a ella, los ecosistemas funcionan de manera equilibrada y los seres vivos pueden obtener alimento, refugio y recursos necesarios para sobrevivir.',
    subs: [
      { slug: 'niveles-biodiversidad', title: 'Niveles de biodiversidad', img: '5740dc_3495f670851f4d41a8a19f9dcc62ba7b~mv2.jpg', blocks: [
        { t: 'prose', text: 'La biodiversidad puede estudiarse en diferentes niveles, los cuales permiten comprender la gran variedad de vida que existe en el planeta.' },
        { t: 'concepts', label: 'Niveles de biodiversidad', items: [
          { name: 'Diversidad genética', desc: 'Se refiere a las diferencias que existen entre los individuos de una misma especie. Estas variaciones permiten que las poblaciones se adapten a los cambios ambientales y aumenten sus posibilidades de supervivencia.', img: '5740dc_58b2950536b34a20b3b86b2643edc365~mv2.png' },
          { name: 'Diversidad de especies', desc: 'Corresponde a la variedad de especies que habitan un determinado lugar. Cuanto mayor sea el número de especies en un ecosistema, mayor será su biodiversidad.', img: '5740dc_cb1af624a9914e10bea00eada9517aef~mv2.jpg' },
          { name: 'Diversidad de ecosistemas', desc: 'Hace referencia a la variedad de ecosistemas existentes, como bosques, selvas, desiertos, océanos y páramos. Cada ecosistema posee características propias y alberga diferentes formas de vida.', img: '5740dc_3495f670851f4d41a8a19f9dcc62ba7b~mv2.jpg' },
        ]},
      ]},
      { slug: 'clasificacion-seres-vivos', title: 'Clasificación de los seres vivos', img: '5740dc_6696fc0aa775449895aef36517fee0ba~mv2.png', blocks: [
        { t: 'prose', text: 'La clasificación de los seres vivos es un sistema que permite organizar a los organismos según sus características y relaciones evolutivas. Esta clasificación facilita el estudio de la diversidad biológica y ayuda a comprender las semejanzas y diferencias entre las especies.' },
        { t: 'concepts', label: 'Los cinco reinos', items: [
          { name: 'Reino Plantae', desc: 'Incluye todas las plantas, desde pequeños musgos hasta grandes árboles. Son organismos multicelulares y autótrofos: producen su propio alimento mediante la fotosíntesis usando la energía del Sol, agua y dióxido de carbono.', img: '5740dc_6696fc0aa775449895aef36517fee0ba~mv2.png' },
          { name: 'Reino Animalia', desc: 'Está formado por todos los animales. Son organismos multicelulares y heterótrofos: no pueden fabricar su propio alimento y obtienen energía alimentándose de otros seres vivos.', img: '5740dc_a22618655c3e4d7c9e5bfa6bece875a5~mv2.jpg' },
          { name: 'Reino Fungi', desc: 'Comprende a los hongos, organismos que obtienen nutrientes absorbiendo materia orgánica del medio. Algunos hongos son descomponedores.', img: '5740dc_17d9f54dfb75454d8082c8969bf3687c~mv2.jpg' },
          { name: 'Reino Protista', desc: 'Está formado por organismos simples, principalmente unicelulares, aunque algunos pueden ser pluricelulares. Habitan en ambientes acuáticos o húmedos.', img: '5740dc_d7a2781542ac494da8ab8d4adeeb2c81~mv2.jpg' },
          { name: 'Reino Monera', desc: 'Agrupa a las bacterias y otros organismos procariotas, con una estructura celular sencilla y sin núcleo definido.', img: '5740dc_1938e48020ad41999fb31f62cf08e036~mv2.jpg' },
        ]},
      ]},
      { slug: 'importancia-biodiversidad', title: 'Importancia de la biodiversidad', img: null, tiktok: '7642767693346606356', blocks: [
        { t: 'prose', paras: ['La biodiversidad es fundamental para mantener el equilibrio de los ecosistemas y garantizar la supervivencia de los seres vivos. Gracias a ella obtenemos alimentos, medicinas, materias primas y recursos indispensables para la vida. Además, contribuye a la regulación del clima, la fertilidad de los suelos, la purificación del agua y la polinización de las plantas.', 'La pérdida de biodiversidad puede afectar gravemente el funcionamiento de los ecosistemas y disminuir la capacidad de los organismos para adaptarse a los cambios ambientales. Por ello, su protección es una responsabilidad compartida por toda la sociedad.'] },
        { t: 'idea', text: 'La biodiversidad sostiene la vida: nos da alimentos, medicinas y un ambiente equilibrado.' },
      ]},
      { slug: 'conservacion-biodiversidad', title: 'Conservación de la biodiversidad', img: null, blocks: [
        { t: 'prose', text: 'La conservación de la biodiversidad consiste en proteger las especies, los ecosistemas y los recursos naturales.' },
        { t: 'list', label: 'Acciones de conservación', kind: 'check', items: ['Creación de áreas protegidas.', 'Reforestación.', 'Uso responsable de los recursos naturales.', 'Reducción de la contaminación.', 'Educación ambiental.'] },
        { t: 'idea', text: 'Conservar la biodiversidad es responsabilidad de toda la sociedad.' },
      ]},
    ],
  },

  /* ===================== TEMA 5 ===================== */
  {
    n: '05', slug: 'la-celula', short: 'La célula', title: 'La célula',
    icon: 'celula', c: '#E0379E', ct: '#FCE3F1', cd: '#7E1857',
    blurb: 'La unidad básica de la vida: organización, división y ciclo celular.',
    img: '5740dc_459dd50866264057b17980fa2247b74d~mv2.png',
    video: 'Ps54eXe8YHY',
    quizzes: ['https://wordwall.net/es/resource/3809215/la-celula-viva', 'https://wordwall.net/es/resource/25657941/celula'],
    intro: 'La célula es la unidad básica de los seres vivos: la estructura más pequeña capaz de realizar las funciones vitales. Todos los organismos están formados por una o más células, y en ellas ocurren los procesos que permiten la vida, el crecimiento y la reproducción.',
    subs: [
      { slug: 'tipos-organizacion-celular', title: 'Tipos de organización celular', img: null, bigImage: '5740dc_9d2e0da402a04e7bb9f9b6caa812d465~mv2.jpg', blocks: [
        { t: 'prose', text: 'La vida celular se divide fundamentalmente en dos grandes categorías de organización, basadas en cómo manejan su material genético y su estructura interna.' },
        { t: 'concepts', label: 'Tipos de organización', items: [
          { name: 'Células procariotas', desc: 'Las procariotas (bacterias y arqueas) son evolutivamente más antiguas y presentan una estructura minimalista pero altamente eficiente para la supervivencia y reproducción rápida.' },
          { name: 'Células eucariotas', desc: 'Las eucariotas forman a los animales, plantas, hongos y protistas. Su éxito biológico radica en la compartimentalización: dividen su espacio interno en organelos delimitados por membranas, lo que permite realizar múltiples funciones complejas de forma simultánea.' },
        ]},
        { t: 'embed', kind: 'tiktok', label: 'TikTok nos ayuda', text: 'Video de apoyo sobre los tipos de organización celular.', url: 'https://www.tiktok.com' },
      ]},
      { slug: 'division-celular', title: 'División celular', img: null, bigImage: '5740dc_42fc6253449146018c5f2d5f7f80fcc9~mv2.png', blocks: [
        { t: 'prose', text: 'La división celular no es solo un proceso de multiplicación; es un mecanismo de supervivencia y continuidad.' },
        { t: 'concepts', label: 'Tipos de división', items: [
          { name: 'Mitosis', desc: 'Proceso mediante el cual una célula madre se divide para formar dos células hijas genéticamente idénticas. Ocurre en las células somáticas (todas las del cuerpo, excepto las sexuales).' },
          { name: 'Meiosis', desc: 'Tipo de división celular más especializada y exclusiva de los órganos reproductores. Su única función es producir gametos (células sexuales).' },
        ]},
        { t: 'pinterest', label: 'Videos', pins: ['914864111788203240', '1548181185276441'] },
      ]},
      { slug: 'ciclo-celular', title: 'Ciclo celular', img: null, noFigure: true, blocks: [
        { t: 'prose', text: 'Para que la información sea fácil de seguir, el ciclo celular se divide en dos grandes etapas: la Interfase (que abarca G1, S y G2) y la Fase M. Cada fase ocurre en orden, una después de la otra:' },
        { t: 'timeline', label: 'Fases del ciclo celular (en orden)', steps: [
          { name: 'G1', tag: 'Crecimiento', desc: 'Primera fase de crecimiento celular. La célula recién «nacida» aumenta su tamaño y volumen, sintetiza proteínas y ARN, duplica sus organelos (mitocondrias, ribosomas) y cumple sus funciones normales en el tejido.' },
          { name: 'S', tag: 'Síntesis', desc: 'Fase crítica donde ocurre la replicación del ADN. La célula copia toda su información genética; al final, cada cromosoma tiene su copia (dos cromátidas hermanas).' },
          { name: 'G2', tag: 'Preparación', desc: 'Segunda fase de crecimiento, más corta. La célula revisa que el ADN se haya copiado sin errores (control de calidad) y sintetiza las proteínas necesarias para separar los cromosomas.' },
          { name: 'M', tag: 'Mitosis', desc: 'Aquí ocurre la mitosis: la separación del material genético en dos núcleos distintos.' },
        ]},
      ]},
    ],
  },

  /* ===================== TEMA 6 ===================== */
  {
    n: '06', slug: 'funciones-vitales', short: 'Funciones', title: 'Nutrición, relación y reproducción',
    icon: 'funciones', c: '#FB6A3C', ct: '#FEE6DA', cd: '#8C3115',
    blurb: 'Las tres funciones vitales de todos los seres vivos.',
    img: null,
    video: 'NX6CwdDKzDw',
    videoNoEmbed: true,
    infoExtra: 'https://es.scribd.com/presentation/501239729/Presentacion-sobre-la-funcion-y-nutricion',
    quizzes: ['https://wordwall.net/es/resource/38160955/nutrici%C3%B3n-relaci%C3%B3n-reproducci%C3%B3n', 'https://wordwall.net/es/resource/88182100/301%C2%BA-funciones-de-los-seres-vivos-nutrici%C3%B3n-reproducci%C3%B3n-y'],
    intro: 'La nutrición, la relación y la reproducción son funciones vitales que realizan todos los seres vivos para mantenerse con vida, interactuar con su entorno y asegurar la continuidad de las especies. Gracias a estas funciones, los organismos pueden obtener energía, responder a estímulos y transmitir sus características a las siguientes generaciones.',
    subs: [
      { slug: 'nutricion', title: 'Nutrición', img: null, bigImage: '5740dc_a9bad86feaf34f64a5c4fec6a788af65~mv2.jpg', blocks: [
        { t: 'def', text: 'La nutrición es la función vital mediante la cual los seres vivos obtienen y aprovechan los nutrientes y la energía necesarios para crecer, desarrollarse y realizar todas sus actividades.' },
        { t: 'concepts', label: 'Tipos de nutrición', items: [
          { name: 'Nutrición autótrofa', desc: 'Los organismos fabrican su propio alimento a partir de sustancias simples del medio (agua, dióxido de carbono y sales minerales). Se conocen como productores y son la base de las cadenas alimenticias.', ex: 'plantas · algas · algunas bacterias' },
          { name: 'Nutrición heterótrofa', desc: 'Los organismos no pueden fabricar su propio alimento, por lo que obtienen nutrientes y energía alimentándose de otros seres vivos o de materia orgánica.', ex: 'seres humanos · animales · hongos · bacterias descomponedoras' },
        ]},
      ]},
      { slug: 'relacion', title: 'Relación', img: null, noFigure: true, blocks: [
        { t: 'def', text: 'La relación es la capacidad que tienen los seres vivos para captar estímulos del ambiente o de su propio organismo y responder a ellos.' },
        { t: 'concepts', label: 'Claves de la función de relación', items: [
          { name: 'Concepto de relación', desc: 'Consiste en captar información del medio, procesarla y generar una respuesta. Por ejemplo, una planta orienta sus hojas hacia la luz y un animal huye de un depredador.', img: '5740dc_da4c44b7de734853b6236df98697ad39~mv2.avif' },
          { name: 'Estímulos y respuestas', desc: 'Un estímulo es cualquier cambio del ambiente o del organismo que puede percibirse (luz, sonido, temperatura, contacto, olor, sabor…). La respuesta es la reacción del organismo frente a ese estímulo.', img: '5740dc_f76c1d9a0ad1421a829b1788ed4cff4e~mv2.jpg' },
          { name: 'Órganos receptores y efectores', desc: 'Los receptores captan los estímulos (en los animales, los órganos de los sentidos) y los efectores ejecutan las respuestas (generalmente músculos y glándulas).', img: '5740dc_4cab87e5c3dd4e77a8cd60f5c7886287~mv2.jpg' },
          { name: 'Adaptación al medio', desc: 'Capacidad de ajustarse a las condiciones del ambiente para aumentar la supervivencia. Puede ser física, fisiológica o conductual, y se desarrolla a través de la evolución.', img: '5740dc_9e0c932148a7499fa6468586309db695~mv2.jpg' },
        ]},
      ]},
      { slug: 'reproduccion', title: 'Reproducción', img: null, noFigure: true, blocks: [
        { t: 'def', text: 'La reproducción es una de las funciones vitales de los seres vivos y consiste en la capacidad de originar nuevos individuos de la misma especie.' },
        { t: 'concepts', label: 'Tipos de reproducción', items: [
          { name: 'Reproducción asexual', desc: 'Ocurre cuando un solo organismo da origen a nuevos individuos, sin la participación de células sexuales o gametos.' },
          { name: 'Reproducción sexual', desc: 'Ocurre cuando intervienen dos progenitores. En este proceso se unen dos células sexuales llamadas gametos: el masculino y el femenino.' },
        ]},
        { t: 'pinterest', label: 'Videos', pins: ['2885187258556127', '29695678788103006'] },
      ]},
    ],
  },
];

module.exports = { site, temas, IMG };
