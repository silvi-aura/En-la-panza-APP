/* ============================================================
   CRECER EN LA PANZA · Contenido completo (semanas 4 a 41 + posparto)
   ------------------------------------------------------------
   Se carga desde index.html, antes del
   código de la app. Define cinco objetos:

   SEMANAS[4…41]  contenido de cada semana de embarazo
   POSPARTO[1, 2] las dos semanas después del nacimiento
                  (se activan con el botón "¡Ya nació!")
   PREMATURO      bloque extra si nació antes de la semana 37
   MENSAJES       textos generales (bienvenida, pausa, final…)
   BIBLIOTECA     artículos que se abren dentro de la app

   Campos de cada semana:
     titulo, tamano, medida  → cabecera de la semana
     notificacion            → texto del aviso push
     imagen                  → ruta de la imagen (generada con Gemini)
     promptImagen            → prompt usado para generarla
     bebe, cuerpo, pendiente → bloques de texto (HTML simple)
     tips                    → [título, explicación]
     alarma                  → lista "Consultá enseguida si…"
     leeMas                  → botón externo a fuente oficial
                               (si url está vacía, la app NO muestra el botón)
     explorar                → ids de artículos de la BIBLIOTECA
   ============================================================ */

window.SEMANAS = window.SEMANAS || {};
window.BIBLIOTECA = window.BIBLIOTECA || {};

Object.assign(window.SEMANAS, {

  /* ---------------------------- SEMANA 4 ---------------------------- */
  4: {
    titulo: "Todo empieza",
    tamano: "Como una semillita de chía",
    medida: "1 mm",
    notificacion: "¡Semana 4! 🌱 Es del tamaño de una semillita de chía, pero ya está trabajando a full.",
    imagen: "img/semanas/semana-04.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of a tiny early human embryo at 4 weeks nestled into the soft velvety uterine lining, glowing cluster of cells, delicate organic textures, soft warm golden light, dreamy shallow depth of field, gentle caramel and soft turquoise tones, scientific yet tender, no text, vertical 4:5",
    bebe: `
      <p>Hace pocos días terminó de instalarse en la pared de tu útero, que lo esperaba blandita y llena de vasos sanguíneos. Ahora es un grupito de células que se divide sin parar y se organiza en capas: hoy tiene dos y en pocos días van a ser tres. De cada capa salen órganos distintos: de una, el cerebro, la piel y el pelo; de otra, el corazón, los músculos y los huesos; y de la tercera, los pulmones y la pancita.</p>
      <p>Las células de afuera empiezan a formar la placenta y a fabricar hCG, la hormona que detectan los tests de embarazo. En estas primeras semanas su cantidad se duplica cada dos o tres días. Alrededor del bebé también se forman la bolsa donde va a flotar y el saco vitelino, que lo alimenta hasta que la placenta esté lista.</p>
      <p>Un dato que confunde a muchas: aunque la concepción fue hace unas dos semanas, el embarazo se cuenta desde el primer día de tu última menstruación. Por eso ya estás de 4 semanas.</p>`,
    cuerpo: `
      <p>Es la semana en que se atrasa el período y muchas se enteran. Algunas tienen un manchado rosado o marrón que dura unas horas o un par de días: es el sangrado de implantación, y es normal (aunque no todas lo tienen). También pueden aparecer cólicos suaves, como los menstruales.</p>
      <p>La progesterona, otra hormona del embarazo, ya está trabajando: por eso podés sentir los pechos hinchados y sensibles, mucho sueño, un gusto metálico en la boca o los olores más fuertes que nunca.</p>`,
    tips: [
      ["Descansá sin culpa", "La progesterona da sueño de verdad. No es pereza: tu cuerpo está trabajando muchísimo."],
      ["Corpiño cómodo, sin aro", "Alivia mucho la sensibilidad de los pechos, sobre todo para dormir."],
      ["Algo liviano cada 3 horas", "El estómago vacío revuelve más. Unas galletitas o una fruta alcanzan."],
      ["Agua siempre a mano", "Tu cuerpo ya está aumentando su volumen de sangre y necesita más líquido."],
      ["Si tenés gato, la piedrita no", "Que la limpie otra persona, o hacelo con guantes. No hace falta separarte de tu gato."]
    ],
    pendiente: `
      <p>Confirmá el embarazo con un análisis de sangre (beta) y pedí turno para tu primer control. Si venías tomando ácido fólico, seguí; si no, consultá ya con tu médico o médica qué suplementos necesitás.</p>
      <p>No te asustes si en una ecografía temprana "todavía no se ve nada": a esta altura es normal. El saquito empieza a verse alrededor de la semana 5 y el latido, entre la 6 y la 7.</p>`,
    alarma: [
      "Tenés un sangrado abundante, como una menstruación.",
      "Sentís un dolor fuerte en un costado de la panza, o en el hombro sin motivo.",
      "Te mareás mucho o te desmayás."
    ],
    leeMas: { texto: "Ácido fólico · Ministerio de Salud", url: "https://www.argentina.gob.ar/node/28991" },
    explorar: ["como-se-cuentan-las-semanas", "test-orina-o-sangre", "que-evitar-desde-el-primer-dia"]
  },

  /* ---------------------------- SEMANA 5 ---------------------------- */
  5: {
    titulo: "Su corazón se está formando",
    tamano: "Como una semilla de sésamo",
    medida: "2 mm",
    notificacion: "Semana 5 💛 Esta semana su corazoncito da los primeros latidos.",
    imagen: "img/semanas/semana-05.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of a 5-week human embryo, tiny curved body with a forming heart tube and neural tube, small yolk sac beside it, translucent delicate skin, soft warm golden light, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, scientific yet tender, no text, vertical 4:5",
    bebe: `
      <p>Mide unos 2 milímetros y en estos días pasa algo enorme: se forma su corazón. Empieza como un tubito que, hacia el final de la semana, da sus primeros latidos. Todavía no se puede escuchar, pero ya está ahí, trabajando.</p>
      <p>Las tres capas de células ya están listas y cada una empezó su tarea. Se está formando el tubo neural, del que van a salir el cerebro y la médula espinal, y que termina de cerrarse alrededor de la semana 6.</p>
      <p>Por ahora lo alimenta el saco vitelino, una bolsita que le da lo que necesita hasta que la placenta pueda hacerse cargo, hacia el final del primer trimestre.</p>`,
    cuerpo: `
      <p>Las hormonas suben rápido y pueden aparecer los primeros síntomas fuertes: más cansancio, ganas de hacer pis a cada rato y, en algunas, las primeras náuseas. Las areolas pueden oscurecerse y los pechos seguir sensibles.</p>
      <p>Si no tenés casi síntomas, también es normal: cada cuerpo es distinto y eso no significa que algo ande mal. En lo emocional es común sentir alegría, miedo y dudas al mismo tiempo, aunque el embarazo haya sido muy buscado.</p>`,
    tips: [
      ["Una siesta corta", "Si podés, 20 o 30 minutos a la tarde te devuelven energía sin quitarte el sueño de la noche."],
      ["Botellita de agua", "Tomá de a sorbos durante todo el día; ayuda con el cansancio y el dolor de cabeza."],
      ["Ropa cómoda", "Nada que apriete la cintura: la panza todavía no se nota, pero ya puede sentirse hinchada."],
      ["No lo atravieses sola", "Contale a alguien de confianza cómo te sentís, aunque todavía no se lo cuentes a todo el mundo."],
      ["Anotá tus preguntas", "Llevalas escritas al primer control para no olvidarte de nada."]
    ],
    pendiente: `
      <p>Cargá en la app la fecha de tu última menstruación para conocer tu fecha probable de parto, y pedí turno para tu primer control prenatal.</p>
      <p>Si tomás alguna medicación habitual (para la tiroides, la presión, la epilepsia, la ansiedad o la depresión), no la suspendas por tu cuenta: consultá cuanto antes para que te indiquen cómo seguir.</p>`,
    alarma: [
      "Tenés un sangrado abundante o con coágulos.",
      "Sentís un dolor fuerte en un costado de la panza o en el hombro.",
      "Te mareás mucho o te desmayás.",
      "Tenés fiebre."
    ],
    leeMas: { texto: "Más información oficial", url: "" }, // PENDIENTE: link oficial a verificar
    explorar: ["fecha-probable-de-parto", "sangrados-primer-trimestre", "emociones-del-principio"]
  },

  /* ---------------------------- SEMANA 6 ---------------------------- */
  6: {
    titulo: "Su corazón ya late",
    tamano: "Como una lenteja",
    medida: "5 mm",
    notificacion: "Semana 6 💛 Su corazoncito ya late. Entrá a ver todo lo que está pasando.",
    imagen: "img/semanas/semana-06.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of a 6-week human embryo floating inside the amniotic sac, tiny curled body with large head and small limb buds, translucent delicate skin, soft warm golden light, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, scientific yet tender, no text, vertical 4:5",
    bebe: `
      <p>Mide apenas unos milímetros, pero ya tiene un corazón que late a unos 110 latidos por minuto. Se va a ir acelerando hasta la semana 9 o 10, cuando lata casi el doble de rápido que el tuyo. Con una ecografía transvaginal, a veces ya se puede ver ese latido esta semana o la próxima.</p>
      <p>La cabeza es grande en comparación con el resto del cuerpo, porque el cerebro crece a toda velocidad. Esta semana termina de cerrarse el tubo neural, que va a formar el cerebro y la médula. Asoman los brotecitos que van a ser los brazos y las piernas, y aparecen las marcas donde van a estar los ojos y unas fositas donde se formarán los oídos.</p>
      <p>Por dentro también hay mucho movimiento: empiezan a formarse el intestino, los primeros esbozos de los pulmones y unos riñones provisorios.</p>`,
    cuerpo: `
      <p>Para muchas, acá arrancan las náuseas, un cansancio que no se va con nada y los pechos sensibles. También es común hacer pis más seguido, sentir los olores mucho más fuertes y tener más saliva de lo habitual.</p>
      <p>Todo esto es obra de las hormonas del embarazo, que están en plena subida. En la mayoría de las mujeres estas molestias aflojan al terminar el primer trimestre.</p>`,
    tips: [
      ["Poco y seguido", "El estómago vacío empeora las náuseas. Mejor 5 o 6 comidas chicas que 3 grandes."],
      ["Galletitas en la mesa de luz", "Comé un par antes de levantarte, todavía en la cama."],
      ["Jengibre", "En té o rallado en la comida; a muchas embarazadas les calma el estómago."],
      ["Líquidos entre comidas", "Tomá de a sorbos entre una comida y otra, no todo junto con el plato."],
      ["Comidas frías o tibias", "Largan menos olor que las calientes y suelen caer mejor."]
    ],
    pendiente: `
      <p>Si todavía no lo hiciste, pedí tu primer control prenatal: lo ideal es antes de la semana 12. Y seguí con los suplementos en la dosis que te indicaron.</p>`,
    alarma: [
      "Vomitás todo y no podés retener ni el agua.",
      "Hacés muy poco pis o es muy oscuro.",
      "Tenés un sangrado abundante o un dolor fuerte en un costado de la panza.",
      "Tenés fiebre."
    ],
    leeMas: { texto: "Ácido fólico · Ministerio de Salud", url: "https://www.argentina.gob.ar/node/28991" },
    explorar: ["acido-folico", "nauseas", "primer-control-prenatal"]
  },

  /* ---------------------------- SEMANA 7 ---------------------------- */
  7: {
    titulo: "Duplicó su tamaño",
    tamano: "Como un arándano",
    medida: "1 cm",
    notificacion: "Semana 7 🫐 ¡En una semana duplicó su tamaño! Ya mide como un arándano.",
    imagen: "img/semanas/semana-07.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of a 7-week human embryo inside the amniotic sac, curled body about one centimeter long, large head, paddle-shaped hands and feet, umbilical cord visible, translucent delicate skin, soft warm golden light, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, scientific yet tender, no text, vertical 4:5",
    bebe: `
      <p>En apenas una semana duplicó su tamaño: ya mide alrededor de un centímetro. Su cerebro sigue creciendo a un ritmo impresionante y por eso la cabeza todavía es la parte más grande del cuerpo.</p>
      <p>Las manos y los pies tienen forma de paletitas, y muy pronto se van a empezar a marcar los dedos. En la carita aparecen las fosas de la nariz y se forman los cristalinos de los ojos. Ya tiene cordón umbilical, el "cable" que lo une a la placenta para recibir alimento y oxígeno.</p>
      <p>Su corazón late cada vez más rápido, el hígado empieza a fabricar glóbulos rojos y comienzan a formarse sus riñones definitivos.</p>`,
    cuerpo: `
      <p>Tu útero ya creció, aunque desde afuera todavía no se nota. Las náuseas pueden estar llegando a su punto más intenso, y es común sentir rechazo por comidas que antes te encantaban. Muchas tienen más saliva de lo normal.</p>
      <p>La progesterona hace más lenta la digestión: por eso pueden aparecer la hinchazón, los gases y el estreñimiento. Y como el útero crece y aprieta la vejiga, las idas al baño siguen siendo muchas.</p>`,
    tips: [
      ["Contra el estreñimiento", "Agua, frutas, verduras y una caminata corta todos los días ayudan a que el intestino se mueva."],
      ["Si tenés mucha saliva", "Cepillate los dientes y enjuagate seguido; masticar una galletita ayuda a tragarla."],
      ["Colaciones con proteína", "Un huevo duro, un yogur o un puñado de frutos secos sostienen más que algo dulce."],
      ["Escuchá tus rechazos", "Si algo te da asco, reemplazalo por otro alimento parecido. No hace falta forzarte."],
      ["Aire fresco", "Abrir una ventana o salir unos minutos alivia la sensación de náusea."]
    ],
    pendiente: `
      <p>Muchas mujeres se hacen la primera ecografía entre esta semana y la 9. Es un momento muy emocionante: llevá tus preguntas anotadas y, si querés, pedí ir acompañada.</p>`,
    alarma: [
      "Vomitás todo y no retenés líquidos por más de un día.",
      "Tenés un sangrado abundante o con coágulos.",
      "Sentís un dolor fuerte en la panza, en un costado o en el hombro.",
      "Tenés fiebre."
    ],
    leeMas: { texto: "Más información oficial", url: "" }, // PENDIENTE: link oficial a verificar
    explorar: ["primera-ecografia", "contar-la-noticia", "actividad-fisica"]
  }
});


/* ============================================================
   BIBLIOTECA · artículos que se abren dentro de la app
   ============================================================ */
Object.assign(window.BIBLIOTECA, {

  "como-se-cuentan-las-semanas": {
    titulo: "¿Cómo se cuentan las semanas de embarazo?",
    icono: "📅",
    html: `
      <p>El embarazo se cuenta desde el primer día de tu última menstruación, aunque la concepción haya sido unas dos semanas después. Se hace así porque es la única fecha que casi todas las mujeres saben: el día exacto de la concepción casi nunca se conoce.</p>
      <p>Desde esa fecha, un embarazo dura unas 40 semanas (280 días). Se considera "a término" cuando el bebé nace entre la semana 37 y la 41, y muy pocos nacen justo el día de la fecha probable de parto.</p>
      <p>Los médicos hablan en semanas porque en estos meses cada semana trae cambios distintos. Los trimestres se reparten así:</p>
      <ul>
        <li><b>Primer trimestre:</b> semanas 1 a 13</li>
        <li><b>Segundo trimestre:</b> semanas 14 a 27</li>
        <li><b>Tercer trimestre:</b> semana 28 hasta el parto</li>
      </ul>
      <p>Por eso los famosos "nueve meses" en realidad son un poquito más largos: 40 semanas equivalen a 9 meses y una semana.</p>
      <p>Si tus ciclos son irregulares o no te acordás de la fecha, no pasa nada: la primera ecografía, midiendo al bebé, permite calcular la edad del embarazo con mucha precisión.</p>`
  },

  "test-orina-o-sangre": {
    titulo: "Test de orina o análisis de sangre: ¿cuál conviene?",
    icono: "🧪",
    html: `
      <p>Los dos buscan lo mismo: la hormona hCG, que solo se produce en el embarazo.</p>
      <p><b>El test de orina</b> se hace en casa y funciona bien desde el día en que se atrasa la menstruación. Es más confiable con el primer pis de la mañana, que está más concentrado. Si lo hacés muy temprano, puede dar negativo aunque estés embarazada.</p>
      <p><b>El análisis de sangre (beta cuantitativa)</b> es más sensible: detecta el embarazo unos días antes y además da un número. Si hay dudas, se repite a las 48 horas para ver que ese número suba como corresponde.</p>
      <ul>
        <li><b>Si el test casero dio positivo,</b> pedí la beta y turno con tu médico o médica para confirmarlo.</li>
        <li><b>Si dio negativo pero el período sigue sin venir,</b> repetilo en 3 a 5 días o hacé el análisis de sangre.</li>
        <li><b>No compares tu número de beta con el de otras mujeres:</b> varía muchísimo de una a otra. Lo que importa es cómo va evolucionando el tuyo.</li>
      </ul>`
  },

  "que-evitar-desde-el-primer-dia": {
    titulo: "Qué evitar desde el primer día",
    icono: "🚫",
    html: `
      <p><b>Alcohol:</b> no hay ninguna cantidad segura en el embarazo, ni siquiera una copa en un brindis.</p>
      <p><b>Cigarrillo y vapeo:</b> tampoco conviene quedarse en ambientes con humo.</p>
      <p><b>Medicamentos por tu cuenta:</b> consultá antes de tomar cualquiera, aunque sea de venta libre. Lo mismo vale para tés de hierbas y suplementos: "natural" no siempre significa seguro en el embarazo.</p>
      <p><b>Alimentos de riesgo:</b></p>
      <ul>
        <li>Carnes crudas o poco cocidas, y embutidos crudos como el salame o el jamón crudo (riesgo de toxoplasmosis).</li>
        <li>Lácteos sin pasteurizar y quesos blandos de origen dudoso (riesgo de listeria).</li>
        <li>Pescados y mariscos crudos, como el sushi o el ceviche.</li>
        <li>Huevos crudos o poco cocidos, incluida la mayonesa casera.</li>
        <li>Frutas y verduras mal lavadas.</li>
        <li>Pescados con mucho mercurio, como el cazón o el pez espada.</li>
      </ul>
      <p><b>Cafeína:</b> el límite recomendado es de unos 200 mg por día, que equivalen a 1 o 2 tazas de café. El mate y el té también tienen cafeína y suman.</p>
      <p><b>Calor extremo:</b> evitá saunas y bañeras muy calientes en el primer trimestre.</p>
      <p><b>Radiografías:</b> antes de cualquier estudio, avisá siempre que estás embarazada.</p>`
  },

  "fecha-probable-de-parto": {
    titulo: "Fecha probable de parto: cómo se calcula",
    icono: "🗓️",
    html: `
      <p>La forma clásica de calcularla es con la fecha del primer día de tu última menstruación: a esa fecha <b>sumale 7 días, restale 3 meses y sumale 1 año.</b></p>
      <p><b>Ejemplo:</b> si tu última menstruación empezó el 10 de enero de 2026, sumás 7 días (17 de enero), restás 3 meses (17 de octubre de 2025) y sumás un año: tu fecha probable de parto es el <b>17 de octubre de 2026.</b></p>
      <p>Esta cuenta supone ciclos de 28 días. Si tus ciclos son más largos, más cortos o irregulares, la ecografía del primer trimestre ajusta la fecha midiendo al bebé, y es la que manda.</p>
      <p>Si el embarazo fue por fertilización asistida, la fecha se calcula a partir del día de la transferencia y es todavía más precisa.</p>
      <p>Tené en cuenta que es una <b>estimación</b>: un bebé que nace entre la semana 37 y la 41 nace a término, y muy pocos llegan justo ese día. Ayuda pensar en "el mes del parto" más que en un día exacto.</p>
      <p>La app calcula tu fecha sola cuando cargás tu última menstruación. Si tu médico o médica te da otra fecha por ecografía, cambiala en la app para que las semanas coincidan.</p>`
  },

  "sangrados-primer-trimestre": {
    titulo: "Sangrados en el primer trimestre: cuándo es normal y cuándo no",
    icono: "🩸",
    html: `
      <p>Tener alguna pérdida de sangre al principio del embarazo es más común de lo que se cree, y muchas veces el embarazo sigue adelante con total normalidad. Pero siempre conviene avisar.</p>
      <p><b>Causas frecuentes y en general tranquilas:</b></p>
      <ul>
        <li>El sangrado de implantación, cerca de la fecha en que te tenía que venir.</li>
        <li>El cuello del útero, que en el embarazo está más irrigado y puede sangrar un poco después de tener relaciones o de un examen ginecológico.</li>
      </ul>
      <p><b>Causas que necesitan atención:</b> una amenaza de pérdida del embarazo, un embarazo fuera del útero (ectópico) o una infección. Por eso nunca hay que quedarse con la duda.</p>
      <p><b>Qué hacer:</b> usá toallita (no tampón) para ver la cantidad y el color, descansá y comunicate con tu médico o médica.</p>
      <p><b>Andá a la guardia enseguida si:</b></p>
      <ul>
        <li>Sangrás como una menstruación o más, o con coágulos.</li>
        <li>Tenés cólicos fuertes o un dolor intenso en un costado de la panza.</li>
        <li>Te duele el hombro sin motivo, te mareás o te desmayás.</li>
        <li>Tenés fiebre.</li>
      </ul>
      <p>Si tu grupo sanguíneo es <b>Rh negativo</b>, avisalo siempre que tengas un sangrado: puede que necesites una inyección para proteger a este bebé y a futuros embarazos. Tu equipo de salud lo decide.</p>
      <p>Si el embarazo no sigue, es importante que sepas que <b>no es por algo que hiciste:</b> la mayoría de las pérdidas tempranas se deben a alteraciones que aparecen al formarse el embrión. Si eso pasa, desde Ajustes podés pausar las notificaciones de la app.</p>`
  },

  "emociones-del-principio": {
    titulo: "Las emociones del principio: todo junto, y está bien",
    icono: "💭",
    html: `
      <p>Alegría, miedo, ilusión, dudas, ganas de llorar sin motivo… todo eso puede pasarte en un mismo día, aunque este embarazo haya sido muy buscado. Es normal.</p>
      <p>Las hormonas tienen mucho que ver, pero no son lo único: un embarazo cambia la forma en que te imaginás tu vida, tu cuerpo, tu pareja, tu trabajo y tu economía. Sentir ambivalencia no te hace peor madre.</p>
      <p><b>Algunas cosas que ayudan:</b></p>
      <ul>
        <li>Ponerle palabras: hablarlo con alguien de confianza o escribirlo.</li>
        <li>Descansar: el cansancio agranda cualquier preocupación.</li>
        <li>No compararte con otras embarazadas ni con lo que se ve en las redes.</li>
        <li>Buscar información en fuentes confiables y no quedarte leyendo casos extremos en foros.</li>
      </ul>
      <p><b>Pedí ayuda profesional si:</b></p>
      <ul>
        <li>Te sentís triste o angustiada la mayor parte del día durante más de dos semanas.</li>
        <li>Ya no disfrutás de casi nada.</li>
        <li>La ansiedad no te deja dormir ni comer, o tenés ataques de pánico.</li>
      </ul>
      <p>La depresión y la ansiedad en el embarazo son frecuentes y tienen tratamiento. Contáselo a tu médico o médica en el próximo control.</p>
      <p>Si en algún momento tenés pensamientos de hacerte daño, <b>no esperes: andá a una guardia o llamá a emergencias ya.</b></p>`
  },

  "acido-folico": {
    titulo: "Ácido fólico: para qué sirve y hasta cuándo tomarlo",
    icono: "💊",
    html: `
      <p>El ácido fólico es una vitamina del grupo B que cumple un papel clave en las primeras semanas del embarazo: ayuda a que se cierre bien el tubo neural, la estructura que se convierte en el cerebro y la médula espinal del bebé. Ese cierre ocurre muy temprano, alrededor de la semana 6.</p>
      <p>Tomado en la dosis adecuada desde antes de quedar embarazada, reduce mucho el riesgo de malformaciones como la espina bífida. Por eso lo ideal es empezar unos tres meses antes de buscar el embarazo.</p>
      <p><b>¿Cuánto?</b> La dosis habitual es de 0,4 mg por día. Algunas mujeres necesitan una dosis mayor, por ejemplo si tuvieron un bebé con un defecto del tubo neural o si toman ciertos medicamentos. La dosis y hasta cuándo tomarlo te lo indica tu médico o médica; muchas veces se sigue durante el embarazo junto con hierro, para prevenir la anemia.</p>
      <p><b>¿Y la comida?</b> Está en las legumbres (lentejas, garbanzos), las verduras de hoja verde (espinaca, acelga), el brócoli y los cítricos. En Argentina, además, las harinas de trigo están enriquecidas con ácido fólico por ley. Aun así, con la alimentación sola no alcanza: por eso se indica el suplemento.</p>
      <p><b>Si te enteraste tarde y no lo tomabas:</b> no te culpes. La gran mayoría de los bebés nacen sanos igual, y los controles del embarazo incluyen estudios para revisar su desarrollo. Consultá y seguí las indicaciones que te den desde ahora.</p>
      <p><b>Un truco:</b> tomalo siempre a la misma hora y poné una alarma en el celular.</p>`
  },

  "nauseas": {
    titulo: "Náuseas: lo que funciona y lo que no",
    icono: "🍋",
    html: `
      <p>Las náuseas afectan a la mayoría de las embarazadas. Aunque les dicen "matutinas", pueden aparecer a cualquier hora del día.</p>
      <p><b>¿Cuándo pasan?</b> Suelen empezar alrededor de la semana 6, ser más intensas entre la 8 y la 10, y mejorar entre la 12 y la 14. En la mayoría de las mujeres desaparecen antes de la semana 20.</p>
      <p><b>Lo que suele ayudar:</b></p>
      <ul>
        <li>Comer poco y seguido, sin dejar que el estómago se vacíe.</li>
        <li>Algo seco antes de levantarte, como galletitas de agua.</li>
        <li>Colaciones con proteína: yogur, queso, huevo duro, frutos secos.</li>
        <li>Comidas frías o tibias, que largan menos olor.</li>
        <li>Jengibre, en té o en la comida.</li>
        <li>Tomar líquidos de a sorbos entre comidas.</li>
        <li>Descansar: el cansancio empeora las náuseas.</li>
        <li>Si las vitaminas te revuelven, tomarlas con comida o antes de dormir, y consultar si hay otra opción.</li>
      </ul>
      <p><b>Lo que conviene evitar:</b> comidas muy grasosas, fritas o condimentadas, los olores que te disparan el malestar y tomar remedios para el vómito por tu cuenta.</p>
      <p>Si las náuseas te complican el día a día, consultá: hay medicamentos seguros para el embarazo que tu médico o médica puede indicarte.</p>
      <p><b>Cuándo consultar enseguida:</b> si vomitás todo, no retenés líquidos por más de un día, hacés muy poco pis, estás bajando de peso o te mareás al pararte. Puede tratarse de hiperemesis gravídica, una forma intensa de náuseas que necesita tratamiento. No es exagerar ni falta de voluntad.</p>`
  },

  "primer-control-prenatal": {
    titulo: "Tu primer control prenatal: qué te van a pedir",
    icono: "🩺",
    html: `
      <p><b>¿Cuándo?</b> Lo antes posible, idealmente antes de la semana 12. Es el control más largo, porque se arma toda tu historia.</p>
      <p><b>Qué llevar:</b></p>
      <ul>
        <li>DNI y credencial de obra social o prepaga, si tenés.</li>
        <li>La fecha de tu última menstruación.</li>
        <li>La lista de medicamentos o suplementos que tomás.</li>
        <li>Tus antecedentes: enfermedades, cirugías y embarazos anteriores.</li>
        <li>Tu carnet de vacunas, si lo tenés.</li>
        <li>Tus preguntas anotadas.</li>
      </ul>
      <p><b>Qué te van a hacer:</b> preguntas sobre tu salud y la de tu familia, peso, talla, presión y un examen general. Te van a dar un carné perinatal, donde se anota todo lo que pasa en cada control: llevalo siempre.</p>
      <p><b>Análisis habituales:</b> grupo sanguíneo y factor Rh, hemograma (para ver si hay anemia), glucemia, orina completa y urocultivo, y estudios para detectar infecciones como VIH, sífilis, hepatitis B, toxoplasmosis y Chagas. Según dónde vivas, pueden sumar otros.</p>
      <p><b>Además:</b> te van a indicar la primera ecografía y te van a contar qué vacunas te corresponden en el embarazo y en qué momento.</p>
      <p>Después vas a tener controles periódicos: más espaciados al principio y más seguidos hacia el final. Este es tu espacio para preguntar todo, sin vergüenza.</p>`
  },

  "primera-ecografia": {
    titulo: "La primera ecografía",
    icono: "🖥️",
    html: `
      <p>Muchas mujeres se hacen la primera ecografía entre las semanas 6 y 9, aunque depende de cada equipo de salud.</p>
      <p>En esta etapa suele ser <b>transvaginal</b>: se introduce un transductor fino en la vagina porque así se ve mucho mejor algo tan chiquito. Puede dar una pequeña molestia, pero no duele, no le hace nada al bebé y no usa radiación.</p>
      <p><b>Qué se puede ver:</b></p>
      <ul>
        <li>Que el embarazo esté dentro del útero.</li>
        <li>El saco, el embrión y, desde la semana 6 o 7, el latido.</li>
        <li>Si hay más de un bebé.</li>
        <li>Cuánto mide el embrión, lo que permite ajustar la edad del embarazo y la fecha probable de parto.</li>
      </ul>
      <p><b>Si todavía no se ve el latido:</b> cuando la ecografía es muy temprana, puede pasar. En ese caso suelen repetirla en una o dos semanas. Tratá de no sacar conclusiones antes de hablar con tu médico o médica.</p>
      <p><b>Las que vienen:</b> alrededor de las semanas 11 a 14 se hace una ecografía de control del primer trimestre; entre la 20 y la 24, la morfológica, que revisa la anatomía del bebé; y en el tercer trimestre, otras para ver cómo crece.</p>
      <p>Un consejo: preguntá si podés ir acompañada y si podés grabar el sonido del latido. Es un recuerdo hermoso.</p>`
  },

  "contar-la-noticia": {
    titulo: "¿Cuándo contar que estás embarazada?",
    icono: "🎁",
    html: `
      <p>No hay un momento correcto: es una decisión tuya (y de tu pareja, si la tenés).</p>
      <p>Muchas esperan al final del primer trimestre, alrededor de la semana 12 o 13, porque a partir de ahí el riesgo de una pérdida temprana baja mucho. Otras prefieren contarlo antes a una o dos personas muy cercanas, para tener apoyo si algo no sale como esperaban. Las dos opciones están bien.</p>
      <p><b>En el trabajo:</b> contalo cuando te sientas lista, pero informate antes. En Argentina, la protección contra el despido por embarazo corre desde que lo notificás formalmente a tu empleador, con un certificado médico. En otros países las reglas cambian: averiguá las de donde vivís.</p>
      <p><b>En las redes:</b> pensalo dos veces antes de publicar. Una vez que está ahí, ya no controlás quién se entera ni cómo.</p>
      <p><b>Ideas lindas para contarlo:</b> regalarle a los futuros abuelos un portarretratos con la ecografía, una cajita con unas medias de bebé, o una taza que diga "abuela" o "tía".</p>`
  },

  "actividad-fisica": {
    titulo: "Moverte en el embarazo: qué sí y qué no",
    icono: "🚶‍♀️",
    html: `
      <p>Si tu embarazo viene bien, moverte es seguro y muy recomendable. La Organización Mundial de la Salud aconseja al menos 150 minutos por semana de actividad moderada, por ejemplo 30 minutos, cinco días por semana.</p>
      <p><b>Beneficios:</b> mejora el ánimo y el sueño, reduce el dolor de espalda, ayuda a prevenir la diabetes del embarazo y te prepara para el parto.</p>
      <p><b>Buenas opciones:</b> caminar, nadar, aquagym, bicicleta fija, yoga o pilates para embarazadas y bailar suave.</p>
      <p><b>Mejor evitar:</b></p>
      <ul>
        <li>Deportes de contacto o con riesgo de caídas (hockey, fútbol, equitación, patín, esquí).</li>
        <li>El buceo.</li>
        <li>Hacer ejercicio intenso con mucho calor.</li>
        <li>En la segunda mitad del embarazo, ejercicios que te dejen mucho rato acostada boca arriba.</li>
      </ul>
      <p><b>La prueba del habla:</b> mientras te movés, tenés que poder conversar. Si no podés decir una frase sin quedarte sin aire, bajá la intensidad.</p>
      <p>Si no hacías nada antes, empezá de a poco: 10 minutos por día ya suman. Tomá agua y usá ropa y corpiño cómodos.</p>
      <p><b>Pará y consultá si tenés:</b> sangrado, pérdida de líquido, mareos, dolor en el pecho, falta de aire antes de empezar, dolor de cabeza fuerte, dolor o hinchazón en una pantorrilla, o contracciones dolorosas.</p>
      <p>Si tenés alguna indicación especial en tu embarazo, preguntá antes qué actividad podés hacer.</p>`
  }
});
/* ---------------- LOTE 2 · Semanas 8 a 13 ---------------- */
Object.assign(window.SEMANAS, {

  8: {
    titulo: "Ya se mueve",
    tamano: "Como una frambuesa",
    medida: "1,6 cm · 1 g",
    notificacion: "Semana 8 🍇 Ya hace sus primeros movimientos, aunque todavía no los sentís.",
    imagen: "img/semanas/semana-08.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of an 8-week human embryo inside the amniotic sac, curled body with webbed fingers and toes starting to form, tiny bent elbows and knees, eyelids beginning to cover the eyes, umbilical cord, translucent delicate skin, soft warm golden light, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, scientific yet tender, no text, vertical 4:5",
    bebe: `
      <p>Mide un poco más de un centímetro y medio y ya hace sus primeros movimientos espontáneos: pequeños sacudones que se pueden ver en una ecografía, aunque vos todavía no los sentís. La colita que tenía al final de la columna está desapareciendo.</p>
      <p>Los dedos de las manos y los pies se están formando, todavía unidos por una membrana. Ya se marcan los codos y las rodillas, los párpados empiezan a cubrir los ojos y, desde la garganta hasta los pulmones, se ramifican los conductos por donde va a respirar. En su cerebro, las neuronas se multiplican y empiezan a conectarse entre sí.</p>`,
    cuerpo: `
      <p>Tu útero ya tiene más o menos el tamaño de una naranja, y los pechos siguen creciendo: muchas necesitan cambiar el talle del corpiño en estas semanas. Las náuseas y el cansancio pueden estar en su punto más alto.</p>
      <p>Algunas mujeres notan sueños muy intensos o raros. Es por los cambios hormonales y porque te despertás más veces a la noche, así que recordás más lo que soñás.</p>`,
    tips: [
      ["Corpiño de tu talle", "Uno de algodón, sin aro y con buen sostén es una inversión que vas a usar todo el embarazo."],
      ["Dormí más temprano", "Adelantar media hora la hora de ir a la cama ayuda más que una siesta larga."],
      ["Frutas y verduras de colores", "Si las náuseas te dejan, sumá una por comida: aportan vitaminas y ayudan con el estreñimiento."],
      ["Pedí ayuda en casa", "Delegar tareas no es un lujo: tu cuerpo está haciendo un trabajo enorme."]
    ],
    pendiente: `<p>Preguntá en tu control cuándo te corresponde la ecografía y los análisis del primer trimestre, que se hacen entre las semanas 11 y 14.</p>`,
    alarma: [
      "Tenés un sangrado abundante o con coágulos.",
      "Sentís un dolor fuerte en la panza o en un costado.",
      "Vomitás todo y no retenés líquidos.",
      "Tenés fiebre."
    ],
    leeMas: { texto: "Más información oficial", url: "" },
    explorar: ["cansancio-primer-trimestre", "alimentacion-saludable", "primera-ecografia"]
  },

  9: {
    titulo: "Tiene todo lo básico",
    tamano: "Como una aceituna",
    medida: "2,3 cm · 2 g",
    notificacion: "Semana 9 🫒 Ya tiene formada toda la estructura básica de su cuerpo.",
    imagen: "img/semanas/semana-09.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of a 9-week human embryo inside the amniotic sac, more baby-like shape, tail gone, closed fused eyelids, tiny ear lobes, separated fingers starting, umbilical cord, translucent delicate skin, soft warm golden light, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, scientific yet tender, no text, vertical 4:5",
    bebe: `
      <p>Ya tiene formada toda la estructura básica de su cuerpo, y de ahora en más sus órganos van a crecer y perfeccionarse. La colita desapareció por completo y cada día se parece más a un bebé.</p>
      <p>Su corazón ya se dividió en cuatro cavidades y se están formando las válvulas. Debajo de las encías aparecen los brotes de los dientes, en las orejas se asoman los lóbulos y los párpados se cerraron sobre los ojos: van a quedar así hasta el tercer trimestre. Los genitales externos empiezan a formarse, pero todavía no se puede saber si es nena o varón.</p>`,
    cuerpo: `
      <p>Es muy común sentirse hinchada y con gases, aunque la panza todavía no se vea. La progesterona relaja los músculos del intestino y hace más lenta la digestión.</p>
      <p>También pueden aparecer cambios de humor bruscos: pasar de la risa al llanto en minutos es parte de este momento, y suele aflojar en el segundo trimestre.</p>`,
    tips: [
      ["Ropa que no apriete", "Nada ajustado en la cintura: alivia mucho la hinchazón."],
      ["Comé sentada y despacio", "Masticar bien y no apurarte ayuda a tragar menos aire."],
      ["Caminatas cortas", "Diez o quince minutos después de comer ayudan a que el intestino se mueva."],
      ["Líquidos entre comidas", "Tomar mucho junto con el plato aumenta la sensación de llenura."]
    ],
    pendiente: `<p>Si todavía no tenés turno para la ecografía y los análisis del primer trimestre (semanas 11 a 14), es buen momento para pedirlo.</p>`,
    alarma: [
      "Tenés un sangrado abundante o con coágulos.",
      "Sentís un dolor fuerte en la panza.",
      "Vomitás todo o hacés muy poco pis.",
      "Tenés fiebre."
    ],
    leeMas: { texto: "Más información oficial", url: "" },
    explorar: ["gases-hinchazon-estrenimiento", "nauseas", "emociones-del-principio"]
  },

  10: {
    titulo: "Adiós embrión, hola feto",
    tamano: "Como una frutilla",
    medida: "3,1 cm · 4 g",
    notificacion: "Semana 10 🍓 ¡Ya no es un embrión! A partir de ahora se llama feto.",
    imagen: "img/semanas/semana-10.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of a 10-week human fetus inside the amniotic sac, distinctly baby-shaped, separated fingers and toes, proportional head, closed eyelids, umbilical cord and early placenta, translucent delicate skin, soft warm golden light, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, scientific yet tender, no text, vertical 4:5",
    bebe: `
      <p>Esta semana deja de llamarse embrión y pasa a ser un feto. La etapa más delicada, en la que se forman todos los órganos, ya terminó; ahora empieza la de crecer y madurar.</p>
      <p>Los dedos ya están separados y empiezan a asomar las uñas. Sus huesos comienzan a endurecerse, puede doblar brazos y piernas, y sus riñones empiezan a producir orina. En las próximas tres semanas va a crecer muchísimo.</p>`,
    cuerpo: `
      <p>En alguno de los próximos controles quizás puedas escuchar su corazón con un Doppler, un aparatito que se apoya sobre la panza. Si no se escucha todavía, no te preocupes: a veces hay que esperar a la semana 12.</p>
      <p>Las venas de los pechos y la panza se notan más, porque tenés más sangre circulando. Y es común tener más saliva y un flujo vaginal más abundante.</p>`,
    tips: [
      ["Pedí ir acompañada", "Escuchar el corazón por primera vez es un momento para compartir."],
      ["Si tenés mucha saliva", "Cepillate y enjuagate seguido; masticar algo ayuda a tragarla."],
      ["Agua, siempre", "Ayuda a prevenir infecciones urinarias, que son más frecuentes en el embarazo."],
      ["No aguantes el pis", "Andá al baño cada vez que tengas ganas."]
    ],
    pendiente: `<p>Confirmá la fecha de tu ecografía de las semanas 11 a 14: tiene un rango corto y no conviene pasarse.</p>`,
    alarma: [
      "Tenés ardor al hacer pis junto con fiebre o dolor en la espalda.",
      "Tenés un sangrado abundante o con coágulos.",
      "Sentís un dolor fuerte en la panza.",
      "Vomitás todo y no retenés líquidos."
    ],
    leeMas: { texto: "Más información oficial", url: "" },
    explorar: ["sexo-en-el-embarazo", "infecciones-urinarias", "que-evitar-desde-el-primer-dia"]
  },

  11: {
    titulo: "Se estira y patea",
    tamano: "Como una lima",
    medida: "4,1 cm · 7 g",
    notificacion: "Semana 11 💛 Se estira, patea y da vueltas. ¡Ya es un pequeño acróbata!",
    imagen: "img/semanas/semana-11.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of an 11-week human fetus stretching inside the amniotic sac, very thin translucent skin with visible fine blood vessels, formed fingers and toes, large head, umbilical cord, soft warm golden light, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, scientific yet tender, no text, vertical 4:5",
    bebe: `
      <p>Está casi completamente formado. Su piel es tan finita que es casi transparente y deja ver las venitas. Algunos huesos se siguen endureciendo y los dedos de las manos y los pies ya están completos: muy pronto va a poder abrir y cerrar los puños.</p>
      <p>Se mueve muchísimo: patea, se estira y da vueltas en el líquido, aunque todavía es tan chiquito que no lo vas a sentir. También se está formando su diafragma, el músculo que más adelante le va a dar hipo.</p>`,
    cuerpo: `
      <p>Si las náuseas no te dejaron comer bien o no subiste de peso, no te preocupes: en el primer trimestre lo habitual es aumentar poco, y algunas mujeres incluso bajan un poco.</p>
      <p>Para muchas, las náuseas empiezan a aflojar entre esta semana y la 14. De a poco vuelve el apetito.</p>`,
    tips: [
      ["Vitaminas con comida", "Si te revuelven, tomalas con el plato o antes de dormir."],
      ["Colaciones inteligentes", "Fruta, yogur o frutos secos sostienen mejor que algo dulce."],
      ["Anotá tus dudas", "La ecografía de esta etapa es larga: es un buen momento para preguntar."],
      ["Movete un poco", "Caminar todos los días ayuda con el ánimo y la digestión."]
    ],
    pendiente: `<p>Esta semana se abre el período para la ecografía y los análisis del primer trimestre (semanas 11 a 14). Si te los indicaron, este es el momento.</p>`,
    alarma: [
      "Tenés un sangrado abundante o con coágulos.",
      "Sentís un dolor fuerte en la panza.",
      "Tenés fiebre.",
      "Vomitás todo y no retenés líquidos."
    ],
    leeMas: { texto: "Más información oficial", url: "" },
    explorar: ["estudios-primer-trimestre", "aumento-de-peso", "alimentacion-saludable"]
  },

  12: {
    titulo: "Un bebé completo en miniatura",
    tamano: "Como una ciruela",
    medida: "5,4 cm · 14 g",
    notificacion: "Semana 12 🫐 Ya tiene reflejos: si tocás tu panza, se mueve (aunque no lo sientas).",
    imagen: "img/semanas/semana-12.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of a 12-week human fetus in profile inside the amniotic sac, complete tiny baby with defined face, hand near the mouth, curled toes, umbilical cord, translucent delicate skin, soft warm golden light, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, scientific yet tender, no text, vertical 4:5",
    bebe: `
      <p>Aunque es muy chiquito, ya es un bebé completo: los ojos y las orejas están en su lugar, igual que casi todos sus órganos. Sus intestinos, que crecieron tan rápido que se asomaban un poco por el cordón, vuelven a acomodarse dentro de la pancita.</p>
      <p>Ya tiene reflejos: abre y cierra los dedos, encoge los de los pies y, si tocás tu panza, reacciona moviéndose. También aparece el reflejo de succión, que va a necesitar para alimentarse cuando nazca. En su cerebro se forman conexiones a toda velocidad.</p>`,
    cuerpo: `
      <p>Tu útero ya asoma por encima del hueso del pubis, y en los controles se puede palpar. Probablemente todavía no necesites ropa de embarazada, pero la cintura se ensancha y vas a estar más cómoda con ropa suelta.</p>
      <p>Puede aparecer la acidez: un ardor que sube desde el estómago hasta la garganta. Es por las hormonas, que aflojan la válvula que separa el esófago del estómago.</p>`,
    tips: [
      ["Esperá para acostarte", "Dejá pasar al menos una hora después de comer."],
      ["Una almohada extra", "Dormir con la cabeza y el pecho un poco elevados ayuda con la acidez."],
      ["Ojo con los gatillos", "Fritos, picantes, chocolate, café y bebidas con gas suelen empeorarla."],
      ["Platos más chicos", "Comer poco y seguido evita que el estómago quede muy lleno."]
    ],
    pendiente: `<p>Si todavía no hiciste la ecografía del primer trimestre, tenés tiempo hasta la semana 14. Muchas parejas eligen este momento para empezar a contar la noticia.</p>`,
    alarma: [
      "Tenés un sangrado abundante o con coágulos.",
      "Sentís un dolor fuerte en la panza.",
      "Tenés fiebre.",
      "Tenés ardor al hacer pis con fiebre o dolor de espalda."
    ],
    leeMas: { texto: "Más información oficial", url: "" },
    explorar: ["acidez", "cuidado-de-belleza", "contar-la-noticia"]
  },

  13: {
    titulo: "Últimos días del primer trimestre",
    tamano: "Como un durazno",
    medida: "7,4 cm · 23 g",
    notificacion: "Semana 13 🍑 Última semana del primer trimestre. ¡Ya tiene sus huellitas digitales en formación!",
    imagen: "img/semanas/semana-13.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of a 13-week human fetus inside the amniotic sac, better proportioned body with head about one third of its length, tiny hands with visible finger detail, umbilical cord, translucent rosy skin, soft warm golden light, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, scientific yet tender, no text, vertical 4:5",
    bebe: `
      <p>Su cuerpo está mucho más proporcionado que hace unas semanas: la cabeza sigue siendo grande, pero ya ocupa más o menos un tercio de su largo. En las yemas de sus dedos empiezan a formarse las huellas digitales, únicas para siempre.</p>
      <p>Se están formando sus cuerdas vocales y sus intestinos ya están en su lugar. Si es nena, sus ovarios ya guardan millones de óvulos. Lo más delicado de su desarrollo ya pasó.</p>`,
    cuerpo: `
      <p>Es la última semana del primer trimestre. A partir de ahora el riesgo de una pérdida baja mucho, y muchas mujeres empiezan a recuperar la energía y a sentir menos náuseas.</p>
      <p>Aunque faltan meses, tus pechos ya pueden empezar a fabricar calostro, la primera leche. También es normal tener más flujo vaginal, blanco y sin olor fuerte.</p>`,
    tips: [
      ["Ropa interior de algodón", "Ayuda a mantener la zona seca y evita irritaciones."],
      ["Nada de duchas vaginales", "Alteran el equilibrio natural y aumentan el riesgo de infecciones."],
      ["Jabones neutros", "Evitá perfumes, desodorantes íntimos y toallitas con aroma."],
      ["Celebrá", "Cerrar el primer trimestre es un hito. Date un gusto."]
    ],
    pendiente: `<p>Si trabajás, informate sobre tus derechos antes de contarlo en el trabajo: hay pasos que conviene hacer por escrito.</p>`,
    alarma: [
      "Tenés un sangrado abundante o con coágulos.",
      "Tu flujo cambia de color, tiene mal olor o te pica o arde.",
      "Sentís un dolor fuerte en la panza.",
      "Tenés fiebre."
    ],
    leeMas: { texto: "Más información oficial", url: "" },
    explorar: ["flujo-vaginal", "derechos-trabajo", "estudios-primer-trimestre"]
  }
});

Object.assign(window.BIBLIOTECA, {

  "cansancio-primer-trimestre": {
    titulo: "El cansancio del primer trimestre",
    icono: "😴",
    html: `
      <p>Muchas mujeres dicen que en los primeros meses se sienten agotadas como nunca. No es exageración: tu cuerpo está fabricando la placenta, aumentando el volumen de sangre y adaptando cada órgano. Además, la progesterona da sueño.</p>
      <p>La buena noticia es que, para la mayoría, la energía vuelve en el segundo trimestre.</p>
      <p><b>Qué ayuda:</b></p>
      <ul>
        <li>Acostarte más temprano y, si podés, hacer una siesta corta.</li>
        <li>Comer cada 3 o 4 horas, sin saltear comidas.</li>
        <li>Moverte un poco: aunque parezca contradictorio, una caminata corta da energía.</li>
        <li>Bajar la exigencia: no todo tiene que estar perfecto.</li>
        <li>Pedir y aceptar ayuda en casa y en el trabajo.</li>
      </ul>
      <p><b>Consultá si</b> el cansancio es extremo, si te falta el aire con poco esfuerzo, si estás muy pálida o si te mareás seguido: puede tratarse de anemia, que se detecta con un análisis simple. También consultá si el cansancio viene con tristeza que no se va.</p>`
  },

  "alimentacion-saludable": {
    titulo: "Comer bien en el embarazo",
    icono: "🥗",
    html: `
      <p>Comer bien en el embarazo no es comer por dos: es comer mejor. En el primer trimestre no hace falta sumar calorías, y en el segundo y el tercero alcanza con un poco más, el equivalente a una colación extra.</p>
      <p><b>Una guía simple para cada día:</b></p>
      <ul>
        <li><b>Frutas y verduras:</b> la mitad del plato, de distintos colores.</li>
        <li><b>Proteínas:</b> carnes bien cocidas, huevo cocido, legumbres, pescado cocido.</li>
        <li><b>Lácteos:</b> leche, yogur y quesos pasteurizados, por el calcio.</li>
        <li><b>Cereales:</b> mejor integrales, por la fibra.</li>
        <li><b>Agua:</b> 8 vasos por día, más si hace calor.</li>
      </ul>
      <p><b>Nutrientes que importan especialmente:</b> hierro (carnes, legumbres, verduras de hoja), calcio (lácteos), ácido fólico, omega 3 (pescados bajos en mercurio, como la merluza o el salmón) y yodo (sal yodada, con moderación).</p>
      <p>Si tu alimentación es vegetariana o vegana, contalo en tu control: se puede llevar un embarazo saludable, pero conviene revisar algunos suplementos, como la vitamina B12.</p>
      <p>Y si un día solo podés comer galletitas por las náuseas, está bien. Lo que cuenta es el conjunto de las semanas.</p>`
  },

  "gases-hinchazon-estrenimiento": {
    titulo: "Gases, hinchazón y estreñimiento",
    icono: "🎈",
    html: `
      <p>La progesterona relaja los músculos del intestino, y eso hace que la digestión vaya más lenta. Resultado: gases, panza hinchada y, muchas veces, estreñimiento. Más adelante, el útero que crece y algunos suplementos de hierro pueden sumar.</p>
      <p><b>Para aliviar los gases y la hinchazón:</b></p>
      <ul>
        <li>Comé despacio, sentada y masticando bien.</li>
        <li>Hacé comidas más chicas y más seguidas.</li>
        <li>Limitá las bebidas con gas y los alimentos que te caen pesados.</li>
        <li>Usá ropa que no apriete la cintura.</li>
      </ul>
      <p><b>Para el estreñimiento:</b></p>
      <ul>
        <li>Tomá al menos 8 vasos de agua por día.</li>
        <li>Sumá fibra: frutas con cáscara, verduras, legumbres, avena y cereales integrales.</li>
        <li>Caminá todos los días.</li>
        <li>No aguantes las ganas de ir al baño.</li>
        <li>Apoyar los pies sobre un banquito en el inodoro ayuda.</li>
      </ul>
      <p>No tomes laxantes por tu cuenta. Si el estreñimiento no mejora, consultá: hay opciones seguras para el embarazo.</p>
      <p><b>Consultá enseguida</b> si tenés dolor de panza fuerte que no se va, vómitos, o si ves sangre en la materia fecal.</p>`
  },

  "sexo-en-el-embarazo": {
    titulo: "Sexo en el embarazo: dudas frecuentes",
    icono: "💞",
    html: `
      <p>Si tu embarazo viene bien, las relaciones sexuales son seguras durante todo el embarazo. El bebé está protegido por el líquido amniótico, la bolsa y el cuello del útero cerrado.</p>
      <p><b>El deseo cambia:</b> en el primer trimestre el cansancio y las náuseas suelen bajarlo; en el segundo, muchas sienten más ganas; y al final, la panza y la incomodidad pueden volver a frenarlo. Todo es normal, y lo mismo le puede pasar a tu pareja.</p>
      <p><b>Algunas cosas útiles para saber:</b></p>
      <ul>
        <li>Después del orgasmo puede sentirse la panza dura un ratito. Es una contracción leve y es normal.</li>
        <li>El cuello del útero está más irrigado y puede sangrar un poquito después de una relación. Si es poco y se va solo, no es grave, pero contalo en tu control.</li>
        <li>A medida que crece la panza, conviene buscar posiciones cómodas, de costado o con vos arriba.</li>
        <li>El sexo no adelanta el parto en un embarazo normal.</li>
      </ul>
      <p><b>Consultá antes</b> si tuviste sangrados, si te dijeron que tenés placenta baja, si tenés pérdida de líquido o riesgo de parto prematuro: en esos casos te van a indicar si conviene esperar.</p>
      <p>Si tu pareja cambió, o no estás segura de su situación de salud, usá preservativo: protege de infecciones que pueden afectar al bebé.</p>`
  },

  "infecciones-urinarias": {
    titulo: "Infecciones urinarias en el embarazo",
    icono: "💧",
    html: `
      <p>En el embarazo las infecciones urinarias son más frecuentes, porque las hormonas y el útero que crece hacen que la orina circule más lento. Por eso en los controles te piden un urocultivo, aunque no tengas síntomas: a veces hay bacterias sin que lo notes, y conviene tratarlas.</p>
      <p><b>Síntomas para tener en cuenta:</b> ardor o dolor al hacer pis, ganas urgentes de ir aunque salga poco, orina turbia o con mal olor, molestia en la parte baja de la panza.</p>
      <p><b>Para prevenirlas:</b></p>
      <ul>
        <li>Tomá mucha agua.</li>
        <li>No aguantes las ganas de hacer pis.</li>
        <li>Limpiate siempre de adelante hacia atrás.</li>
        <li>Hacé pis después de las relaciones sexuales.</li>
        <li>Usá ropa interior de algodón.</li>
      </ul>
      <p>Si te indican antibióticos, tomalos completos aunque te sientas mejor antes: hay varios que son seguros en el embarazo.</p>
      <p><b>Andá a la guardia</b> si tenés fiebre, escalofríos, dolor en la espalda a la altura de la cintura o vómitos: puede ser una infección del riñón, que necesita tratamiento rápido.</p>`
  },

  "estudios-primer-trimestre": {
    titulo: "Los estudios del primer trimestre",
    icono: "🔬",
    html: `
      <p>Entre las semanas 11 y 14 se puede hacer una evaluación especial del bebé. Tiene un rango corto, por eso conviene pedir el turno con tiempo.</p>
      <p><b>La ecografía de las semanas 11 a 14</b> confirma la edad del embarazo, mira cómo se está formando el bebé y mide la translucencia nucal, un pequeño espacio con líquido en la nuca. Suele combinarse con un análisis de sangre.</p>
      <p>Juntos, esos estudios forman el <b>tamizaje del primer trimestre</b>: calculan la probabilidad de algunas alteraciones cromosómicas, como el síndrome de Down. Es importante entender que no dan un diagnóstico, sino un riesgo: alto o bajo.</p>
      <p><b>El ADN fetal en sangre materna</b> es otro estudio de tamizaje, más preciso, que se puede hacer desde la semana 10. No siempre lo cubren las obras sociales y su costo es alto.</p>
      <p><b>Si el resultado indica riesgo alto,</b> te van a ofrecer estudios que sí confirman o descartan, como la punción de vellosidades coriales o la amniocentesis. Hacerlos o no es tu decisión, con toda la información.</p>
      <p>Ningún estudio es obligatorio. Preguntá todo lo que necesites para decidir qué hacer.</p>`
  },

  "aumento-de-peso": {
    titulo: "¿Cuánto peso se sube en el embarazo?",
    icono: "⚖️",
    html: `
      <p>No hay un número único: depende de cuánto pesabas antes de quedar embarazada. Como referencia general, en un embarazo de un solo bebé:</p>
      <ul>
        <li><b>Si tu peso era bajo:</b> entre 12,5 y 18 kg.</li>
        <li><b>Si tu peso era adecuado:</b> entre 11,5 y 16 kg.</li>
        <li><b>Si tenías sobrepeso:</b> entre 7 y 11,5 kg.</li>
        <li><b>Si tenías obesidad:</b> entre 5 y 9 kg.</li>
      </ul>
      <p>En el primer trimestre se aumenta poco, y algunas mujeres bajan un poco por las náuseas. Después, si tu peso era adecuado, lo habitual es aumentar de forma gradual unos 400 gramos por semana; con sobrepeso u obesidad, algo menos.</p>
      <p><b>¿A dónde va ese peso?</b> No es todo grasa: incluye al bebé, la placenta, el líquido amniótico, el útero que crece, el aumento de sangre, los pechos y las reservas que tu cuerpo guarda para la lactancia.</p>
      <p>Tu médico o médica va a controlar tu peso en cada visita. No hace falta pesarte todos los días ni hacer dietas: en el embarazo no se recomienda bajar de peso. Lo importante es comer variado y moverte.</p>
      <p><b>Consultá enseguida</b> si aumentás mucho peso de golpe en pocos días, sobre todo si se te hinchan la cara o las manos.</p>`
  },

  "acidez": {
    titulo: "Acidez: por qué aparece y cómo calmarla",
    icono: "🔥",
    html: `
      <p>La acidez es ese ardor que sube desde el estómago hasta la garganta. En el embarazo es muy común: las hormonas aflojan la válvula que cierra el estómago, y más adelante el útero empuja todo hacia arriba.</p>
      <p><b>Qué ayuda:</b></p>
      <ul>
        <li>Comer poco y seguido, masticando bien.</li>
        <li>Esperar al menos una hora después de comer para acostarte.</li>
        <li>Dormir con la cabeza y el pecho un poco elevados.</li>
        <li>Evitar fritos, comidas muy grasosas o picantes, chocolate, café, cítricos y bebidas con gas, si notás que te caen mal.</li>
        <li>No tomar mucho líquido junto con las comidas.</li>
        <li>Usar ropa que no apriete la cintura.</li>
      </ul>
      <p>Si con esto no alcanza, consultá: hay antiácidos que se pueden usar en el embarazo, pero que te los indique tu médico o médica.</p>
      <p><b>Consultá enseguida</b> si el dolor está en la boca del estómago y viene con dolor de cabeza, visión borrosa o hinchazón, sobre todo en la segunda mitad del embarazo. No siempre es acidez.</p>`
  },

  "cuidado-de-belleza": {
    titulo: "Pelo, uñas y piel: qué se puede y qué no",
    icono: "💅",
    html: `
      <p>Cuidarte y sentirte linda también es parte del embarazo. La mayoría de los tratamientos de belleza son seguros, con algunas precauciones.</p>
      <p><b>Tintura de pelo:</b> en general se considera de bajo riesgo, porque la piel absorbe muy poco. Muchas prefieren esperar al segundo trimestre. Hacelo en un lugar ventilado y elegí, si podés, tinturas sin amoníaco.</p>
      <p><b>Alisados:</b> evitá los que contienen formol, porque largan vapores tóxicos. Preguntá siempre la composición.</p>
      <p><b>Uñas:</b> se pueden hacer, en lugares bien ventilados.</p>
      <p><b>Depilación:</b> la cera y la depilación con máquina son seguras. Tu piel puede estar más sensible.</p>
      <p><b>Cremas para la cara:</b> evitá las que tienen retinoides (como la tretinoína o la isotretinoína), hidroquinona o ácido salicílico en dosis altas. Revisá las etiquetas o consultá.</p>
      <p><b>Protector solar:</b> sí, todos los días. Ayuda a evitar las manchas del embarazo.</p>
      <p><b>Saunas y baños muy calientes:</b> mejor evitarlos, sobre todo en el primer trimestre.</p>`
  },

  "flujo-vaginal": {
    titulo: "Flujo vaginal: qué es normal y qué no",
    icono: "🌸",
    html: `
      <p>Durante el embarazo es normal tener más flujo. Por el aumento de estrógeno y de la circulación en la zona, la vagina produce más secreciones para protegerse de infecciones.</p>
      <p><b>El flujo normal</b> es blanco o transparente, de consistencia fina o cremosa, con poco olor, y no pica ni arde.</p>
      <p><b>Para estar cómoda:</b></p>
      <ul>
        <li>Usá ropa interior de algodón y cambiala seguido.</li>
        <li>Si usás protector diario, que sea sin perfume, y cambialo varias veces por día.</li>
        <li>Lavá la zona solo con agua o jabón neutro, por fuera.</li>
        <li>Evitá duchas vaginales, desodorantes íntimos y pantalones muy ajustados.</li>
      </ul>
      <p><b>Consultá si</b> el flujo cambia de color (amarillo, verde, gris), tiene mal olor, es espeso como ricota, o si sentís picazón, ardor o dolor en las relaciones. Las infecciones vaginales son frecuentes en el embarazo y se tratan fácilmente.</p>
      <p><b>Consultá enseguida</b> si tenés una pérdida de líquido transparente y acuoso que moja la ropa, o flujo con sangre.</p>`
  },

  "derechos-trabajo": {
    titulo: "Trabajo y embarazo: tus derechos",
    icono: "💼",
    html: `
      <p>Si trabajás en relación de dependencia en Argentina, la ley te protege durante el embarazo. Estos son los puntos principales:</p>
      <p><b>Notificá por escrito:</b> la protección empieza cuando le comunicás formalmente el embarazo a tu empleador, con un certificado médico que indique la fecha probable de parto. Guardá una constancia de que lo entregaste.</p>
      <p><b>Protección contra el despido:</b> si te despiden dentro de los siete meses y medio anteriores o posteriores al parto, la ley presume que fue por tu embarazo, y la indemnización es mayor.</p>
      <p><b>Licencia por maternidad:</b> son 90 días, en general 45 antes y 45 después del parto. Podés reducir la licencia previa hasta 30 días y sumar el resto a la de después. Durante la licencia cobrás una asignación de ANSES equivalente a tu sueldo.</p>
      <p><b>Al volver:</b> tenés derecho a pausas para amamantar durante el primer año de tu bebé. También existe la opción de pedir un período de excedencia sin goce de sueldo.</p>
      <p><b>Si no tenés un trabajo registrado:</b> consultá en ANSES por la Asignación por Embarazo, que se puede pedir a partir de la semana 12.</p>
      <p>Las normas pueden cambiar y hay convenios con beneficios mayores. Confirmá tu caso con ANSES, tu área de recursos humanos o tu gremio. Si vivís en otro país, averiguá las reglas de allá.</p>`
  }
});
/* ---------------- LOTE 3 · Semanas 14 a 20 ---------------- */
Object.assign(window.SEMANAS, {

  14: {
    titulo: "Bienvenida al segundo trimestre",
    tamano: "Como un limón",
    medida: "8,7 cm · 43 g",
    notificacion: "Semana 14 🍋 ¡Empieza el segundo trimestre! Ya puede fruncir el ceño y hacer muecas.",
    imagen: "img/semanas/semana-14.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of a 14-week human fetus inside the amniotic sac, sucking its thumb, visible neck, proportional arms, very fine lanugo hair on the skin, umbilical cord, translucent rosy skin, soft warm golden light, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, scientific yet tender, no text, vertical 4:5",
    bebe: `
      <p>¡Empieza el segundo trimestre! Los músculos de su cara ya funcionan: puede fruncir el ceño, apretar los ojos, hacer muecas y hasta chuparse el dedo. Sus riñones producen orina, que pasa al líquido que lo rodea.</p>
      <p>Ahora su cuerpo crece más rápido que la cabeza: ya se le ve el cuello y los brazos quedaron proporcionados. Por todo el cuerpo empieza a aparecerle un vello muy finito, el lanugo, que lo ayuda a mantenerse abrigado.</p>`,
    cuerpo: `
      <p>Para muchas, esta etapa es la más linda del embarazo: vuelve la energía, bajan las náuseas y el cuerpo se siente más cómodo. La panza empieza a notarse, sobre todo si no es tu primer embarazo.</p>
      <p>Es un buen momento para disfrutar, planear y hacer cosas que más adelante, con la panza grande, van a costar más.</p>`,
    tips: [
      ["Aprovechá la energía", "Es buen momento para empezar o retomar una actividad física suave."],
      ["Ordená pendientes", "Trámites, turnos y compras grandes se hacen mejor ahora que al final."],
      ["Tiempo para vos", "Hacé algo que te guste: leer, bailar, salir con amigas."],
      ["Hablá de lo que te preocupa", "Con tu pareja, tu familia o tus amigas. Compartir alivia."]
    ],
    pendiente: `<p>Revisá tu carnet de vacunas: la antigripal se puede aplicar en cualquier trimestre del embarazo. Consultá en tu control o en el vacunatorio.</p>`,
    alarma: [
      "Tenés un sangrado vaginal.",
      "Perdés líquido por la vagina.",
      "Tenés fiebre.",
      "Sentís un dolor fuerte en la panza que no se va."
    ],
    leeMas: { texto: "Vacunas en el embarazo · Ministerio de Salud", url: "https://www.argentina.gob.ar/salud/vacunas/embarazadas" },
    explorar: ["segundo-trimestre", "vacunas-en-el-embarazo", "actividad-fisica"]
  },

  15: {
    titulo: "Ya percibe la luz",
    tamano: "Como una manzana",
    medida: "10 cm · 70 g",
    notificacion: "Semana 15 🍎 Con los ojitos cerrados, ya percibe la luz que llega a tu panza.",
    imagen: "img/semanas/semana-15.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of a 15-week human fetus floating inside the amniotic sac, legs longer than arms, closed eyes, delicate fine lanugo, transparent rosy skin with fine vessels, umbilical cord, soft warm golden light filtering through, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, scientific yet tender, no text, vertical 4:5",
    bebe: `
      <p>Ya mide unos 10 centímetros. Sus piernas son más largas que los brazos y puede mover todas las articulaciones. Aunque tiene los ojos cerrados, ya percibe la claridad: si una luz fuerte apunta a tu panza, se mueve.</p>
      <p>Hace movimientos parecidos a respirar con el líquido amniótico, una práctica para sus pulmones. También se está desarrollando el gusto: los sabores de lo que comés llegan al líquido que lo rodea, y algunos estudios muestran que eso influye en lo que le gusta después.</p>`,
    cuerpo: `
      <p>Quizás notes la nariz tapada o que te sangra un poco al sonarte. Es muy común: las hormonas inflaman las mucosas y tenés más volumen de sangre. Se llama rinitis del embarazo y se va después del parto.</p>
      <p>Cada mujer aumenta de peso a su ritmo. Lo importante no es el número de una semana, sino cómo evoluciona en el tiempo.</p>`,
    tips: [
      ["Solución salina", "Unas gotas o un spray de agua salina en cada fosa nasal ayudan a destapar."],
      ["Humedad en el ambiente", "Un recipiente con agua cerca de la estufa o un humidificador alivian la sequedad."],
      ["Cabeza elevada", "Una almohada extra a la noche ayuda a respirar mejor."],
      ["Comé variado", "Le estás presentando sabores a tu bebé desde ahora."]
    ],
    pendiente: `<p>No uses descongestivos nasales sin consultar: algunos no son recomendables en el embarazo.</p>`,
    alarma: [
      "Tenés un sangrado vaginal.",
      "Perdés líquido por la vagina.",
      "Tenés fiebre.",
      "La nariz te sangra mucho y no para después de 15 minutos de presionar."
    ],
    leeMas: { texto: "Más información oficial", url: "" },
    explorar: ["como-saber-el-sexo", "rinitis-del-embarazo", "alimentacion-saludable"]
  },

  16: {
    titulo: "Pronto vas a sentirlo",
    tamano: "Como una palta",
    medida: "11,6 cm · 100 g",
    notificacion: "Semana 16 🥑 En estas semanas podrías sentir sus primeros movimientos. ¡Prestá atención!",
    imagen: "img/semanas/semana-16.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of a 16-week human fetus inside the amniotic sac, eyes moved to the front of the face, ears near final position, tiny toenails, straighter head, umbilical cord, translucent rosy skin, soft warm golden light, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, scientific yet tender, no text, vertical 4:5",
    bebe: `
      <p>Está en pleno estirón: en las próximas tres semanas va a duplicar su peso. Su cabeza está más derecha, los ojos se acomodaron hacia el frente de la cara y las orejas están casi en su lugar definitivo.</p>
      <p>Debajo de los párpados cerrados ya mueve los ojos, y empezaron a crecerle las uñitas de los pies. Las uñas crecen todo el embarazo, así que no te sorprendas si hay que cortárselas al poco tiempo de nacer.</p>`,
    cuerpo: `
      <p>Más sangre circulando en la piel le da ese brillo que muchas llaman "la luz del embarazo". Y se acerca uno de los momentos más lindos: sentir que se mueve.</p>
      <p>En un primer embarazo se suele sentir entre las semanas 18 y 22; si ya tuviste hijos, a veces antes. Al principio parecen burbujitas, cosquillas o un aleteo de mariposa.</p>`,
    tips: [
      ["Ropa de embarazada", "Pantalones con faja elástica y remeras largas te van a acompañar varios meses."],
      ["Corpiño que crezca con vos", "Los de algodón con varias posiciones de abrochado se adaptan mejor."],
      ["Telas frescas", "Tu temperatura corporal está más alta: el algodón ayuda."],
      ["Prestá atención en reposo", "Los primeros movimientos se notan mejor recostada y en silencio."]
    ],
    pendiente: `<p>Si no lo sentís todavía, no te preocupes: es muy pronto. La placenta en la cara de adelante del útero también puede hacer que se note más tarde.</p>`,
    alarma: [
      "Tenés un sangrado vaginal.",
      "Perdés líquido por la vagina.",
      "Tenés fiebre.",
      "Sentís un dolor fuerte en la panza que no se va."
    ],
    leeMas: { texto: "Más información oficial", url: "" },
    explorar: ["primeras-pataditas", "ropa-y-corpinos", "segundo-trimestre"]
  },

  17: {
    titulo: "Sus huesos se endurecen",
    tamano: "Como una granada",
    medida: "13 cm · 140 g",
    notificacion: "Semana 17 🦴 Sus más de 200 huesitos empiezan a endurecerse.",
    imagen: "img/semanas/semana-17.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of a 17-week human fetus inside the amniotic sac, stretching its legs, thick strong umbilical cord, delicate skeleton subtly visible through translucent skin, soft warm golden light, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, scientific yet tender, no text, vertical 4:5",
    bebe: `
      <p>Su esqueleto, que hasta ahora era casi todo cartílago blandito, empieza a convertirse en hueso. Son más de 200 huesitos los que se están endureciendo, y por eso el calcio es tan importante en esta etapa.</p>
      <p>El cordón umbilical, su conexión con la placenta, está cada vez más grueso y fuerte. Se están formando sus glándulas del sudor y empieza a acumular un poquito de grasa debajo de la piel.</p>`,
    cuerpo: `
      <p>Con el peso de la panza cambia tu centro de equilibrio y podés sentirte un poco torpe. También es común sentir un pinchazo a los costados de la panza al pararte rápido, toser o estornudar: son los ligamentos que sostienen el útero, que se estiran.</p>
      <p>Si te pica la piel de la panza y los pechos, es porque se está estirando. Una crema hidratante ayuda.</p>`,
    tips: [
      ["Zapatos bajos y cómodos", "Te ayudan con el equilibrio y cuidan tu espalda."],
      ["Movimientos lentos", "Para pararte o darte vuelta en la cama, hacelo despacio."],
      ["Calcio todos los días", "Leche, yogur y quesos pasteurizados. Si no comés lácteos, consultá."],
      ["Cinturón bien puesto", "La banda de abajo va por debajo de la panza, sobre las caderas."]
    ],
    pendiente: `<p>Si vas a viajar en las próximas semanas, el segundo trimestre es el momento más cómodo. Leé las recomendaciones antes de salir.</p>`,
    alarma: [
      "Tenés un sangrado vaginal.",
      "Perdés líquido por la vagina.",
      "Tenés un dolor fuerte en la panza que no se va o viene con fiebre.",
      "Tuviste una caída o un golpe en la panza."
    ],
    leeMas: { texto: "Más información oficial", url: "" },
    explorar: ["dolores-en-la-panza", "viajar-embarazada", "alimentacion-saludable"]
  },

  18: {
    titulo: "Sus orejitas ya están en su lugar",
    tamano: "Como un morrón",
    medida: "14,2 cm · 190 g",
    notificacion: "Semana 18 🫑 Sus orejas ya están en su lugar y se mueve muchísimo.",
    imagen: "img/semanas/semana-18.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of an 18-week human fetus inside the amniotic sac, actively flexing arms and legs, ears in final position, fine blood vessels visible through thin skin, umbilical cord, soft warm golden light, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, scientific yet tender, no text, vertical 4:5",
    bebe: `
      <p>Se mueve casi todo el tiempo: flexiona los brazos, estira las piernas y da vueltas. Sus orejas ya están en su posición definitiva y su oído se está preparando para empezar a captar sonidos.</p>
      <p>Alrededor de sus nervios se forma una capa protectora que va a ayudar a que los mensajes del cerebro viajen más rápido. Si es nena, ya tiene formados el útero y las trompas; si es varón, ya se pueden ver sus genitales en una ecografía, si se deja.</p>`,
    cuerpo: `
      <p>Si las náuseas quedaron atrás, es probable que tengas más hambre. Elegí bien: frutas, lácteos, frutos secos y comidas caseras te sostienen más que los dulces.</p>
      <p>Tu presión suele estar más baja en esta etapa, y por eso podés marearte si te parás de golpe o pasás mucho tiempo de pie.</p>`,
    tips: [
      ["Tres comidas y dos o tres colaciones", "Saltear comidas puede bajarte el azúcar y marearte."],
      ["Levantate en dos tiempos", "Primero sentate en el borde de la cama y después parate."],
      ["Dormí de costado", "Con una almohada entre las piernas vas a estar más cómoda."],
      ["Cuidá tu espalda", "Para levantar algo del piso, doblá las rodillas en vez de agacharte."]
    ],
    pendiente: `<p>Pedí el turno para la ecografía morfológica, que se hace entre las semanas 20 y 24. Suele haber demora para conseguirlo.</p>`,
    alarma: [
      "Tenés un sangrado vaginal o pérdida de líquido.",
      "Tenés un dolor de cabeza fuerte o poco habitual.",
      "Te desmayás.",
      "Tenés fiebre."
    ],
    leeMas: { texto: "Más información oficial", url: "" },
    explorar: ["dormir-bien", "dolor-de-espalda", "primeras-pataditas"]
  },

  19: {
    titulo: "Tu voz, su sonido favorito",
    tamano: "Como un mango",
    medida: "15,3 cm · 240 g",
    notificacion: "Semana 19 🥭 Su oído se está desarrollando. Muy pronto tu voz va a ser su sonido favorito.",
    imagen: "img/semanas/semana-19.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of a 19-week human fetus inside the amniotic sac, peaceful expression, first fine hair on the scalp, proportional arms and legs, thin creamy protective coating starting on the skin, umbilical cord, soft warm golden light, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, scientific yet tender, no text, vertical 4:5",
    bebe: `
      <p>Sus brazos y piernas ya están proporcionados con el resto del cuerpo y empieza a crecerle el pelo. Su piel se cubre de a poco con una capa blanca y cremosa, la vérnix, que la protege del líquido en el que flota.</p>
      <p>Sus sentidos se desarrollan rápido: el cerebro está organizando las zonas del olfato, el gusto, el oído, la vista y el tacto. En las próximas semanas va a empezar a reaccionar a los sonidos, y tu voz va a ser de las que más escuche.</p>`,
    cuerpo: `
      <p>Pueden aparecer manchas en la cara, una línea oscura desde el ombligo hacia abajo y las areolas más oscuras. Es por un aumento temporal de la melanina, y en la mayoría de los casos se aclara después del parto.</p>
      <p>Los pechos siguen creciendo porque se preparan para amamantar.</p>`,
    tips: [
      ["Protector solar diario", "Factor 30 o más, aunque esté nublado: el sol oscurece las manchas."],
      ["Sombrero o gorra", "Una barrera más para la cara cuando estés al aire libre."],
      ["Hablale a tu panza", "Contale cómo fue tu día, cantale o leele algo. Es un primer vínculo."],
      ["Que tu pareja también le hable", "Las voces que escucha seguido le van a resultar familiares al nacer."]
    ],
    pendiente: `<p>Evitá cremas aclarantes o despigmentantes durante el embarazo. Si las manchas no se van después del parto, consultá con dermatología.</p>`,
    alarma: [
      "Tenés un sangrado vaginal o pérdida de líquido.",
      "Tenés dolor de cabeza fuerte, visión borrosa o ves lucecitas.",
      "Sentís un dolor fuerte en la panza.",
      "Tenés fiebre."
    ],
    leeMas: { texto: "Más información oficial", url: "" },
    explorar: ["hablarle-a-la-panza", "manchas-en-la-piel", "ecografia-morfologica"]
  },

  20: {
    titulo: "¡Mitad del camino!",
    tamano: "Como una banana",
    medida: "25 cm · 300 g",
    notificacion: "Semana 20 🍌 ¡Llegaste a la mitad del embarazo! Hoy medimos a tu bebé de la cabeza a los pies.",
    imagen: "img/semanas/semana-20.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of a 20-week human fetus inside the amniotic sac, full body visible from head to feet, skin covered with a thin white creamy vernix, swallowing, umbilical cord and placenta, soft warm golden light, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, scientific yet tender, no text, vertical 4:5",
    bebe: `
      <p>¡Llegaste a la mitad! Desde esta semana se lo mide desde la cabeza hasta los talones, y por eso el número parece dar un salto: antes se medía hasta la cola, porque tenía las piernas recogidas.</p>
      <p>Traga líquido amniótico todos los días, una práctica para su sistema digestivo. En sus intestinos se va acumulando el meconio, una sustancia oscura y pegajosa que va a aparecer en sus primeros pañales.</p>`,
    cuerpo: `
      <p>La parte de arriba de tu útero ya llega más o menos a la altura del ombligo. Necesitás más hierro, porque tu volumen de sangre aumentó mucho.</p>
      <p>Muchas embarazadas notan que les sangran las encías al cepillarse: las hormonas las inflaman. Es un buen momento para visitar a tu dentista, que puede atenderte sin problema en el embarazo.</p>`,
    tips: [
      ["Hierro en tu plato", "Carnes, legumbres y verduras verdes, acompañadas de una fruta con vitamina C."],
      ["El mate, lejos de las comidas", "El mate, el té y el café dificultan que el cuerpo absorba el hierro."],
      ["Cepillo suave", "Cepillate dos veces por día y usá hilo dental con cuidado."],
      ["Celebrá la mitad", "Una foto de la panza de perfil cada mes es un lindo recuerdo."]
    ],
    pendiente: `<p>Desde esta semana te corresponde la vacuna triple bacteriana acelular, que protege a tu bebé de la tos convulsa en sus primeros meses. Y si no la hiciste, es la semana de la ecografía morfológica (20 a 24).</p>`,
    alarma: [
      "Tenés un sangrado vaginal o pérdida de líquido.",
      "Tenés dolor de cabeza fuerte, visión borrosa o ves lucecitas.",
      "Se te hinchan de golpe la cara o las manos.",
      "Tenés fiebre."
    ],
    leeMas: { texto: "Vacunas en el embarazo · Ministerio de Salud", url: "https://www.argentina.gob.ar/salud/vacunas/embarazadas" },
    explorar: ["ecografia-morfologica", "encias-y-dientes", "vacunas-en-el-embarazo"]
  }
});

Object.assign(window.BIBLIOTECA, {

  "segundo-trimestre": {
    titulo: "El segundo trimestre: qué esperar",
    icono: "🌼",
    html: `
      <p>El segundo trimestre va de la semana 14 a la 27, y para muchas mujeres es la etapa más disfrutable del embarazo.</p>
      <p><b>Lo que suele mejorar:</b> las náuseas, el cansancio extremo y las ganas de hacer pis a cada rato. Vuelven la energía y el apetito.</p>
      <p><b>Lo que empieza:</b> la panza se nota, aparecen los primeros movimientos del bebé (entre las semanas 16 y 22) y, con ellos, una sensación nueva de que todo es real.</p>
      <p><b>Lo que puede aparecer:</b> nariz tapada, encías sensibles, manchas en la piel, acidez, calambres, dolor de espalda y alguna contracción suave.</p>
      <p><b>Controles y estudios de esta etapa:</b></p>
      <ul>
        <li>La ecografía morfológica, entre las semanas 20 y 24.</li>
        <li>La vacuna triple bacteriana acelular, desde la semana 20.</li>
        <li>La prueba de glucosa, alrededor de las semanas 24 a 28.</li>
        <li>Análisis de sangre y orina de control.</li>
      </ul>
      <p>Aprovechá para hacer las compras grandes, organizar la habitación del bebé, anotarte en un curso de preparación para el parto y, sobre todo, disfrutar.</p>`
  },

  "vacunas-en-el-embarazo": {
    titulo: "Vacunas en el embarazo",
    icono: "💉",
    html: `
      <p>Vacunarte en el embarazo te protege a vos y también a tu bebé: los anticuerpos que generás pasan por la placenta y lo cuidan en sus primeros meses de vida, cuando todavía es muy chiquito para recibir algunas vacunas.</p>
      <p><b>Las vacunas indicadas en el embarazo en Argentina son:</b></p>
      <ul>
        <li><b>Antigripal:</b> una dosis, en cualquier trimestre.</li>
        <li><b>Triple bacteriana acelular:</b> una dosis en cada embarazo, a partir de la semana 20. Protege al bebé de la tos convulsa.</li>
        <li><b>Virus sincicial respiratorio (VSR):</b> una dosis en cada embarazo, entre las semanas 32 y 36, durante la temporada en que circula el virus. Protege al bebé de la bronquiolitis.</li>
      </ul>
      <p>Según tu situación, también pueden indicarte otras, como la de hepatitis B si no la tenés completa, o la de COVID-19 según las recomendaciones vigentes.</p>
      <p>Si no recibiste la antigripal durante el embarazo, podés aplicártela dentro de los 10 días posteriores al parto.</p>
      <p>Estas vacunas son gratuitas en los vacunatorios públicos. Llevá tu carnet y el carné perinatal para que quede registrado.</p>
      <p>Si vivís en otro país, consultá el calendario de vacunas de allá.</p>`
  },

  "como-saber-el-sexo": {
    titulo: "¿Nena o varón? Cómo y cuándo se sabe",
    icono: "🎀",
    html: `
      <p><b>Por ecografía:</b> a veces se puede ver desde la semana 16, pero lo más confiable es en la ecografía morfológica, entre las semanas 20 y 24. Depende mucho de la posición del bebé: si está de espaldas o con las piernas cruzadas, puede quedar como sorpresa.</p>
      <p><b>Por análisis de sangre:</b> el estudio de ADN fetal en sangre materna, que se hace desde la semana 10 para evaluar alteraciones cromosómicas, también puede informar el sexo. Su costo es alto y no siempre lo cubren.</p>
      <p><b>Los métodos caseros</b> (la forma de la panza, los antojos, el anillo colgando, el calendario chino) son divertidos, pero no tienen ninguna base: aciertan más o menos la mitad de las veces, como tirar una moneda.</p>
      <p>Si no querés saberlo, avisalo antes de cada ecografía para que no te lo digan sin querer.</p>`
  },

  "rinitis-del-embarazo": {
    titulo: "Nariz tapada y sangrado nasal",
    icono: "👃",
    html: `
      <p>Muchas embarazadas tienen la nariz tapada durante semanas sin estar resfriadas. Las hormonas inflaman las mucosas de la nariz y aumentan la producción de moco. Se llama rinitis del embarazo y desaparece después del parto.</p>
      <p><b>Qué ayuda:</b></p>
      <ul>
        <li>Lavados con solución salina, en gotas o spray.</li>
        <li>Humedecer el ambiente, sobre todo con la calefacción prendida.</li>
        <li>Dormir con la cabeza un poco elevada.</li>
        <li>Tomar mucha agua.</li>
      </ul>
      <p>No uses descongestivos sin consultar: algunos no son recomendables en el embarazo, y los de uso nasal generan dependencia si se usan varios días.</p>
      <p><b>Si te sangra la nariz:</b> sentate, inclinate hacia adelante (no hacia atrás) y apretá la parte blanda de la nariz durante 10 minutos seguidos.</p>
      <p><b>Consultá</b> si el sangrado no para después de 15 o 20 minutos, si es muy abundante o si se repite seguido.</p>`
  },

  "primeras-pataditas": {
    titulo: "Las primeras pataditas: cuándo y cómo se sienten",
    icono: "🦋",
    html: `
      <p>Tu bebé se mueve desde la semana 8, pero es tan chiquito que todavía no lo podés sentir. Eso cambia en el segundo trimestre.</p>
      <p><b>¿Cuándo?</b> En un primer embarazo, la mayoría lo siente entre las semanas 18 y 22. Si ya tuviste hijos, a veces desde la 16, porque ya sabés reconocerlo.</p>
      <p><b>¿Cómo se siente?</b> Al principio es muy suave: burbujitas, cosquillas, un aleteo, como "mariposas en la panza". Muchas lo confunden con gases. Con las semanas se vuelve más claro: pataditas, golpecitos y vueltas.</p>
      <p><b>¿Por qué a algunas les cuesta más?</b> Si la placenta está en la cara de adelante del útero, amortigua los movimientos y se sienten más tarde. También influye estar muy ocupada: se notan más en reposo.</p>
      <p><b>Para sentirlo:</b> recostate de costado en un momento tranquilo, después de comer, y prestá atención.</p>
      <p>Al principio los movimientos son irregulares, y no hace falta contarlos. Desde el tercer trimestre vas a aprender a reconocer el ritmo de tu bebé.</p>
      <p><b>Consultá</b> si llegaste a la semana 24 y todavía no sentiste nada.</p>`
  },

  "ropa-y-corpinos": {
    titulo: "Ropa y corpiños para el embarazo",
    icono: "👚",
    html: `
      <p>No hace falta renovar todo el placard. Con algunas prendas bien elegidas vas a estar cómoda los meses que vienen.</p>
      <p><b>Lo que más sirve:</b></p>
      <ul>
        <li>Pantalones o calzas con faja elástica ancha que cubra la panza.</li>
        <li>Remeras y vestidos largos y holgados, o de tela elástica.</li>
        <li>Prendas de algodón: tu temperatura corporal está más alta.</li>
        <li>Calzado bajo y cómodo, quizás medio número más grande hacia el final.</li>
      </ul>
      <p><b>Corpiños:</b> elegí de algodón, sin aro, con breteles anchos y varias posiciones de abrochado. Hacia el final, conviene comprar directamente corpiños de lactancia, una copa más grandes, porque los pechos crecen cuando baja la leche.</p>
      <p><b>Para ahorrar:</b> pedí prestado a amigas o familiares, comprá usado o usá ropa de talle más grande con un cinto debajo del pecho.</p>`
  },

  "dolores-en-la-panza": {
    titulo: "Dolores en la panza: cuáles son normales",
    icono: "🤰",
    html: `
      <p>A medida que el útero crece, es común sentir algunas molestias. La mayoría no son graves, pero es importante saber distinguirlas.</p>
      <p><b>Suelen ser normales:</b></p>
      <ul>
        <li><b>Pinchazos a los costados de la panza</b> al pararte rápido, toser, estornudar o darte vuelta en la cama. Son los ligamentos redondos, que sostienen el útero y se estiran. Duran segundos.</li>
        <li><b>Sensación de tirantez</b> en la parte baja de la panza.</li>
        <li><b>Panza dura por momentos</b>, sin dolor o con dolor leve y sin ritmo (contracciones de Braxton Hicks, más adelante).</li>
        <li><b>Molestias por gases o estreñimiento.</b></li>
      </ul>
      <p><b>Qué ayuda:</b> moverte despacio, flexionar las rodillas hacia la panza antes de toser o estornudar, descansar de costado y aplicar calor suave (no muy caliente).</p>
      <p><b>Consultá enseguida si el dolor:</b></p>
      <ul>
        <li>Es fuerte, constante o no se va con el reposo.</li>
        <li>Viene con sangrado, pérdida de líquido o fiebre.</li>
        <li>Aparece como contracciones con ritmo antes de la semana 37.</li>
        <li>Está en la boca del estómago y viene con dolor de cabeza o visión borrosa.</li>
        <li>Aparece después de una caída o un golpe.</li>
      </ul>`
  },

  "viajar-embarazada": {
    titulo: "Viajar embarazada",
    icono: "🧳",
    html: `
      <p>El segundo trimestre es el momento más cómodo para viajar. Antes de salir, contale a tu médico o médica tus planes.</p>
      <p><b>En auto:</b></p>
      <ul>
        <li>Usá siempre el cinturón: la banda de abajo va por debajo de la panza, sobre las caderas, y la diagonal pasa entre los pechos.</li>
        <li>Si viajás adelante, alejá el asiento del tablero todo lo que puedas.</li>
        <li>En viajes largos, pará cada una o dos horas para caminar un poco y tomar agua.</li>
      </ul>
      <p><b>En avión:</b> en general se puede volar hasta la semana 36 si el embarazo viene bien, pero cada aerolínea tiene sus reglas y muchas piden un certificado médico desde la semana 28. Pedí asiento de pasillo, levantate a caminar, mové los pies y tomá agua para cuidar la circulación.</p>
      <p><b>Destino:</b> llevá tu carné perinatal y estudios, averiguá dónde queda el hospital más cercano y contratá un seguro que cubra el embarazo. Evitá zonas con brotes de enfermedades que transmiten los mosquitos, como zika.</p>
      <p><b>Dengue:</b> en zonas con mosquitos, usá repelente (es seguro en el embarazo), ropa clara de manga larga y mosquiteros.</p>`
  },

  "dormir-bien": {
    titulo: "Dormir bien en el embarazo",
    icono: "🌙",
    html: `
      <p>A medida que crece la panza, encontrar una posición cómoda cuesta más. Algunas ideas para descansar mejor:</p>
      <p><b>Dormí de costado.</b> Desde la semana 28 se recomienda acostarse a dormir de costado, porque estar mucho tiempo boca arriba puede reducir la circulación hacia el bebé. Cualquiera de los dos lados está bien. Si te despertás boca arriba, no te asustes: simplemente volvé a ponerte de costado.</p>
      <p><b>Usá almohadas:</b> una entre las rodillas, otra debajo de la panza y otra en la espalda. Las almohadas largas para embarazadas son muy cómodas.</p>
      <p><b>Más ideas:</b></p>
      <ul>
        <li>Cená liviano y al menos una hora antes de acostarte.</li>
        <li>Tomá menos líquido las dos horas antes de dormir, para levantarte menos al baño.</li>
        <li>Si tenés acidez, dormí con la cabeza y el pecho más elevados.</li>
        <li>Dejá el celular un rato antes de dormir.</li>
        <li>Si no podés dormir de noche, recuperá con siestas cortas.</li>
      </ul>
      <p><b>Consultá</b> si roncás mucho y te despertás cansada, si sentís las piernas inquietas todas las noches o si el insomnio viene con mucha angustia.</p>`
  },

  "dolor-de-espalda": {
    titulo: "Dolor de espalda en el embarazo",
    icono: "🧘‍♀️",
    html: `
      <p>Más de la mitad de las embarazadas tiene dolor de espalda en algún momento. El peso de la panza cambia tu postura, los músculos del abdomen se estiran y las hormonas aflojan las articulaciones de la pelvis.</p>
      <p><b>Para prevenirlo y aliviarlo:</b></p>
      <ul>
        <li>Usá calzado bajo y cómodo.</li>
        <li>Para levantar algo del piso, doblá las rodillas y mantené la espalda derecha.</li>
        <li>Si pasás muchas horas sentada, apoyá bien la espalda y levantate cada tanto.</li>
        <li>Dormí de costado con una almohada entre las rodillas.</li>
        <li>Aplicá calor suave (una bolsa tibia, no caliente) en la zona que duele.</li>
        <li>Hacé actividad física: caminar, nadar y yoga para embarazadas ayudan mucho.</li>
        <li>Probá el ejercicio del gato: en cuatro patas, arqueá la espalda hacia arriba y después volvé a la posición recta, despacio.</li>
      </ul>
      <p>Un masaje con alguien formado en embarazo y una faja de sostén para embarazadas también pueden aliviar.</p>
      <p><b>Consultá</b> si el dolor es muy fuerte, si baja por una pierna con hormigueo, si viene con fiebre o ardor al orinar, o si aparece como un dolor que va y viene con ritmo antes de la semana 37.</p>`
  },

  "hablarle-a-la-panza": {
    titulo: "Hablarle, cantarle: el vínculo antes de nacer",
    icono: "🎶",
    html: `
      <p>El vínculo con tu bebé empieza mucho antes de tenerlo en brazos. Desde el segundo trimestre su oído se desarrolla, y hacia las semanas 24 a 26 ya reacciona a los sonidos.</p>
      <p>Tu voz le llega de una forma especial: la escucha desde afuera y también a través de tu cuerpo. Al nacer, los bebés reconocen la voz de su mamá y se calman más fácilmente con ella.</p>
      <p><b>Ideas para conectar:</b></p>
      <ul>
        <li>Contale cómo fue tu día, en voz alta.</li>
        <li>Cantale siempre la misma canción: puede que después de nacer lo tranquilice.</li>
        <li>Leele un cuento cada noche.</li>
        <li>Poné música que te guste y bailá suave.</li>
        <li>Acariciá tu panza y prestá atención a cómo responde.</li>
        <li>Invitá a tu pareja, a los hermanos o a los abuelos a hablarle también.</li>
      </ul>
      <p>No se trata de estimularlo para que sea "más inteligente": se trata de conocerse. Y si te da vergüenza hablarle a la panza, no pasa nada: también podés pensarlo, escribirle una carta o simplemente acariciarla.</p>`
  },

  "manchas-en-la-piel": {
    titulo: "Manchas en la piel durante el embarazo",
    icono: "☀️",
    html: `
      <p>Las hormonas aumentan la producción de melanina, el pigmento que da color a la piel. Por eso en el embarazo pueden aparecer:</p>
      <ul>
        <li><b>Melasma o cloasma:</b> manchas marrones en la frente, los pómulos o arriba del labio. Se lo llama "la máscara del embarazo".</li>
        <li><b>Línea nigra:</b> una línea oscura desde el pubis hasta el ombligo, o más arriba.</li>
        <li><b>Areolas, pezones, axilas e ingles más oscuros.</b></li>
        <li>Pecas y lunares que se oscurecen.</li>
      </ul>
      <p><b>Cómo cuidarte:</b></p>
      <ul>
        <li>Protector solar de amplio espectro, factor 30 o más, todos los días, y renovalo cada dos o tres horas si estás afuera.</li>
        <li>Sombrero de ala ancha o gorra.</li>
        <li>Evitá el sol del mediodía.</li>
        <li>Podés usar maquillaje para emparejar el tono.</li>
      </ul>
      <p>No uses cremas aclarantes o despigmentantes durante el embarazo. La mayoría de las manchas se aclaran solas en los meses siguientes al parto; si no, consultá con dermatología.</p>
      <p><b>Consultá</b> si un lunar cambia de forma, de color o de tamaño, o si sangra.</p>`
  },

  "ecografia-morfologica": {
    titulo: "La ecografía morfológica",
    icono: "🩻",
    html: `
      <p>Se hace entre las semanas 20 y 24 y es una de las ecografías más importantes del embarazo. Se revisa, órgano por órgano, cómo se está formando tu bebé.</p>
      <p><b>Qué se evalúa:</b></p>
      <ul>
        <li>El cerebro, la cara, la columna, el corazón, los pulmones, el estómago, los riñones, los brazos y las piernas.</li>
        <li>El crecimiento del bebé, comparado con la edad del embarazo.</li>
        <li>La ubicación de la placenta y la cantidad de líquido amniótico.</li>
        <li>Si querés, el sexo del bebé.</li>
      </ul>
      <p><b>Cómo es:</b> se hace sobre la panza, no duele y dura entre media hora y una hora. Si el bebé está en una posición que no deja ver bien algo, pueden pedirte que camines un poco o que vuelvas otro día. Es normal y no significa que haya un problema.</p>
      <p><b>Consejos:</b> pedí el turno con tiempo, preguntá si podés ir acompañada y llevá tus estudios anteriores. Si no querés saber el sexo, avisá al empezar.</p>
      <p>Es un estudio muy completo, pero ninguna ecografía puede detectar el cien por ciento de los problemas. Ante cualquier hallazgo, te van a explicar los pasos a seguir.</p>`
  },

  "encias-y-dientes": {
    titulo: "Encías y dientes en el embarazo",
    icono: "🦷",
    html: `
      <p>Muchas embarazadas notan que les sangran las encías al cepillarse. Las hormonas las inflaman y las vuelven más sensibles: se llama gingivitis del embarazo y es muy común.</p>
      <p><b>Cómo cuidarlas:</b></p>
      <ul>
        <li>Cepillate al menos dos veces por día con un cepillo de cerdas suaves.</li>
        <li>Usá hilo dental con suavidad, todos los días.</li>
        <li>Limitá los dulces y las bebidas azucaradas entre comidas.</li>
        <li><b>Si vomitaste,</b> no te cepilles enseguida: enjuagate con agua y esperá media hora, porque el ácido ablanda el esmalte.</li>
      </ul>
      <p><b>Visitá al dentista</b> al menos una vez durante el embarazo, aunque no tengas molestias. Las limpiezas, los arreglos y la anestesia local son seguros; avisá siempre que estás embarazada.</p>
      <p>Cuidar tu boca también es cuidar tu embarazo: las infecciones de encías no tratadas se asocian con algunas complicaciones.</p>
      <p><b>Consultá</b> si tenés dolor de muelas, encías muy inflamadas o un bulto en la encía que sangra fácil.</p>`
  }
});
/* ---------------- LOTE 4 · Semanas 21 a 27 ---------------- */
Object.assign(window.SEMANAS, {

  21: {
    titulo: "Gimnasia en la panza",
    tamano: "Como una zanahoria",
    medida: "26,7 cm · 360 g",
    notificacion: "Semana 21 🥕 Se mueve muchísimo, sobre todo cuando vos descansás.",
    imagen: "img/semanas/semana-21.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of a 21-week human fetus kicking inside the amniotic sac, visible eyebrows, slender body with thin vernix coating, umbilical cord, soft warm golden light, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, scientific yet tender, no text, vertical 4:5",
    bebe: `
      <p>Ya pesa unos 360 gramos y se le notan las cejas. Se mueve muchísimo: patea, gira y se estira. Esos movimientos no son solo juego: ayudan a que se desarrollen sus músculos y su cerebro.</p>
      <p>Quizás notes que se mueve más a la noche. En realidad se mueve también de día, pero cuando estás quieta lo sentís más. Su médula ósea empieza a fabricar células de la sangre.</p>`,
    cuerpo: `
      <p>Pueden aparecer várices en las piernas y calambres en las pantorrillas, sobre todo a la noche. El volumen de sangre aumentó y el útero presiona las venas que vuelven de las piernas.</p>
      <p>Quizás sientas que la panza se pone dura por momentos, sin dolor. Son contracciones de Braxton Hicks, una especie de "entrenamiento" del útero. Son normales si no tienen ritmo y se van con el reposo.</p>`,
    tips: [
      ["Pies en alto", "Varias veces por día, unos minutos con las piernas elevadas."],
      ["No cruces las piernas", "Al sentarte, apoyá los dos pies en el piso."],
      ["Estirá contra el calambre", "Con la pierna estirada, llevá la punta del pie hacia vos."],
      ["Caminá todos los días", "Mejora la circulación y previene las várices."]
    ],
    pendiente: `<p>Si todavía no te aplicaste la vacuna triple bacteriana acelular, ya te corresponde. Y si no hiciste la morfológica, tenés tiempo hasta la semana 24.</p>`,
    alarma: [
      "Una pierna se te hincha, se pone roja, caliente o te duele.",
      "Tenés contracciones con ritmo o más de cuatro en una hora.",
      "Tenés un sangrado vaginal o pérdida de líquido.",
      "Tenés dolor de cabeza fuerte o visión borrosa."
    ],
    leeMas: { texto: "Controles de las semanas 20 a 26 · Ministerio de Salud", url: "https://www.argentina.gob.ar/node/8037" },
    explorar: ["calambres-y-varices", "braxton-hicks", "hablarle-a-la-panza"]
  },

  22: {
    titulo: "Un recién nacido en miniatura",
    tamano: "Como un zucchini",
    medida: "27,8 cm · 430 g",
    notificacion: "Semana 22 💛 Ya se ve como un recién nacido en miniatura.",
    imagen: "img/semanas/semana-22.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of a 22-week human fetus inside the womb, looks like a miniature newborn, slightly wrinkled skin with fine lanugo, defined lips and eyebrows, hand grasping the umbilical cord, soft warm golden light, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, scientific yet tender, no text, vertical 4:5",
    bebe: `
      <p>Ya se ve como un recién nacido en miniatura: labios, cejas y párpados bien definidos. Su piel todavía está arrugada, pero se va a ir alisando a medida que acumule grasa.</p>
      <p>Debajo de las encías se forman los dientes que van a salir recién después del nacimiento. Sus ojos ya están formados, aunque el iris todavía no tiene color. Si roza el cordón con la mano, puede agarrarlo: es el reflejo de prensión.</p>`,
    cuerpo: `
      <p>Quizás aparezcan estrías: líneas rosadas o violáceas en la panza, las caderas, los pechos o los muslos. Tienen mucho que ver con la genética y con lo rápido que se estira la piel.</p>
      <p>El ombligo puede empezar a salir hacia afuera. Es temporal: después del parto vuelve a su lugar.</p>`,
    tips: [
      ["Hidratá tu piel", "No previene las estrías, pero alivia la picazón y la tirantez."],
      ["Aumento de peso gradual", "Darle tiempo a la piel para estirarse es lo que más ayuda."],
      ["Tiempo en pareja", "Es buen momento para una salida o una escapada antes del tercer trimestre."],
      ["Empezá a pensar nombres", "Hacer una lista con tiempo saca presión al final."]
    ],
    pendiente: `<p>Si trabajás, es un buen momento para planificar con tiempo tu licencia y contarle a tu empleador las fechas aproximadas.</p>`,
    alarma: [
      "Tenés contracciones con ritmo o más de cuatro en una hora.",
      "Tenés un sangrado vaginal o pérdida de líquido.",
      "Tenés dolor de cabeza fuerte o visión borrosa.",
      "Tenés fiebre."
    ],
    leeMas: { texto: "Más información oficial", url: "" },
    explorar: ["estrias", "pareja-y-embarazo", "elegir-el-nombre"]
  },

  23: {
    titulo: "Siente cómo te movés",
    tamano: "Como un pomelo",
    medida: "28,9 cm · 500 g",
    notificacion: "Semana 23 💃 Ya siente tus movimientos. ¡Le encanta cuando caminás o bailás suave!",
    imagen: "img/semanas/semana-23.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of a 23-week human fetus inside the womb, rosy wrinkled translucent skin, peaceful sleeping expression, umbilical cord and placenta, soft warm golden light, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, scientific yet tender, no text, vertical 4:5",
    bebe: `
      <p>Ya pesa alrededor de medio kilo y percibe tus movimientos: cuando caminás o bailás suave, lo siente. Su piel es rosada y arrugadita, porque todavía es fina y deja ver los vasos sanguíneos, sin importar el color que vaya a tener después.</p>
      <p>En sus pulmones se desarrollan los vasos que más adelante le van a permitir respirar. Todavía faltan varias semanas para que estén maduros.</p>`,
    cuerpo: `
      <p>Es común que se te hinchen un poco los pies y los tobillos, sobre todo al final del día o con calor. Los cambios en la sangre hacen que los tejidos retengan más líquido.</p>
      <p>Esa hinchazón suave es normal. Lo que no es normal es que se te hinchen de golpe la cara o las manos: eso hay que consultarlo enseguida.</p>`,
    tips: [
      ["Pies en alto", "Siempre que puedas, apoyalos sobre un almohadón."],
      ["Medias de descanso", "Póntelas a la mañana, antes de que aparezca la hinchazón."],
      ["Agua, aunque parezca raro", "Mantenerte hidratada ayuda a retener menos líquido."],
      ["Menos sal y ultraprocesados", "Fiambres, snacks y comidas de paquete tienen mucho sodio."]
    ],
    pendiente: `<p>En cada control te van a tomar la presión. Si tenés tensiómetro en casa, aprendé a usarlo y anotá los valores para llevarlos.</p>`,
    alarma: [
      "Se te hinchan de golpe la cara o las manos.",
      "Tenés dolor de cabeza fuerte, visión borrosa, lucecitas o zumbidos.",
      "Sentís dolor fuerte en la boca del estómago.",
      "Tenés un sangrado vaginal o pérdida de líquido."
    ],
    leeMas: { texto: "Más información oficial", url: "" },
    explorar: ["hinchazon-pies", "preeclampsia", "alimentacion-saludable"]
  },

  24: {
    titulo: "Escucha cada vez más",
    tamano: "Como un choclo",
    medida: "30 cm · 600 g",
    notificacion: "Semana 24 🌽 Ya escucha los ruidos de tu casa y se sobresalta con los fuertes.",
    imagen: "img/semanas/semana-24.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of a 24-week human fetus inside the womb, slim but well proportioned body, hands near the face as if listening, thin rosy skin, umbilical cord, soft warm golden light, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, scientific yet tender, no text, vertical 4:5",
    bebe: `
      <p>Mide unos 30 centímetros y crece de forma proporcionada. Su cerebro se desarrolla muy rápido y ya tiene las papilas gustativas.</p>
      <p>Escucha cada vez más: si hay un ruido fuerte se sobresalta, pero también se va acostumbrando a los sonidos de tu casa, como el perro, la aspiradora o las voces de siempre. Por eso muchos recién nacidos duermen tranquilos con esos ruidos.</p>`,
    cuerpo: `
      <p>Tu útero ya está por encima del ombligo. Es común que te pique la piel de la panza, que tengas los ojos secos y que los zapatos empiecen a apretarte: las hormonas aflojan los ligamentos y el pie se ensancha.</p>
      <p>Entre las semanas 24 y 28 te van a indicar la prueba de glucosa, para detectar la diabetes del embarazo.</p>`,
    tips: [
      ["Zapatos medio número más", "Sin cordones ni hebillas, para no tener que agacharte."],
      ["Lágrimas artificiales", "Alivian los ojos secos. Consultá cuáles podés usar."],
      ["Crema hidratante", "Después de bañarte, con la piel todavía húmeda."],
      ["Conocé los signos de parto prematuro", "Saberlos te da tranquilidad y te permite actuar a tiempo."]
    ],
    pendiente: `<p>Pedí la orden para la prueba de glucosa (semanas 24 a 28). Se hace en ayunas y dura un par de horas: llevá algo para entretenerte.</p>`,
    alarma: [
      "Tenés contracciones con ritmo o más de cuatro en una hora.",
      "Perdés líquido o tenés un sangrado vaginal.",
      "Sentís que se mueve menos que de costumbre.",
      "Tenés dolor de cabeza fuerte o visión borrosa."
    ],
    leeMas: { texto: "Controles de las semanas 20 a 26 · Ministerio de Salud", url: "https://www.argentina.gob.ar/node/8037" },
    explorar: ["diabetes-gestacional", "parto-prematuro-signos", "braxton-hicks"]
  },

  25: {
    titulo: "Más llenito",
    tamano: "Como una coliflor chica",
    medida: "34,6 cm · 660 g",
    notificacion: "Semana 25 💛 Se lo ve más llenito, y su pelo ya tiene color.",
    imagen: "img/semanas/semana-25.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of a 25-week human fetus inside the womb, fuller rounder body, smoother skin, soft hair with color on the head, umbilical cord, soft warm golden light, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, scientific yet tender, no text, vertical 4:5",
    bebe: `
      <p>Su cuerpo se ve más llenito, menos largo y flaquito que antes, y la piel empieza a alisarse. Cada día se parece más al bebé que vas a conocer.</p>
      <p>Su pelo ya tiene color y textura, aunque puede cambiar mucho después de nacer: hay bebés que nacen con pelo oscuro y después se aclaran, y al revés.</p>`,
    cuerpo: `
      <p>Quizás notes el pelo más abundante y brillante: no es que crezca más, sino que se te cae menos. Después del parto se va a caer ese "extra", y es normal.</p>
      <p>En los análisis de esta etapa suelen controlar si tenés anemia. En el embarazo es frecuente que los glóbulos rojos bajen, porque la sangre se diluye.</p>`,
    tips: [
      ["Hierro + vitamina C", "Una fruta cítrica junto a las legumbres o la carne mejora la absorción."],
      ["Suplemento con agua o jugo", "Si te indicaron hierro, no lo tomes con mate, té, café ni lácteos."],
      ["Empezá la lista del bebé", "Lo esencial es menos de lo que parece."],
      ["Pedí prestado", "Ropa, cochecito y moisés usados están perfectos, salvo la silla de auto."]
    ],
    pendiente: `<p>Si no hiciste la prueba de glucosa, tenés tiempo hasta la semana 28. Llevá los resultados a tu próximo control.</p>`,
    alarma: [
      "Tenés contracciones con ritmo o más de cuatro en una hora.",
      "Perdés líquido o tenés un sangrado vaginal.",
      "Sentís que se mueve menos que de costumbre.",
      "Tenés dolor de cabeza fuerte o visión borrosa."
    ],
    leeMas: { texto: "Más información oficial", url: "" },
    explorar: ["anemia-hierro", "lista-bebe", "acidez"]
  },

  26: {
    titulo: "Pronto abre los ojos",
    tamano: "Como una lechuga",
    medida: "35,6 cm · 760 g",
    notificacion: "Semana 26 👀 Sus párpados se están separando: muy pronto va a abrir los ojos.",
    imagen: "img/semanas/semana-26.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of a 26-week human fetus inside the womb, eyelids just starting to part, fuller cheeks, thin layer of fat under rosy skin, hand near the face, umbilical cord, soft warm golden light, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, scientific yet tender, no text, vertical 4:5",
    bebe: `
      <p>Hasta que nazca, su peso se va a triplicar. Empieza a acumular grasa debajo de la piel, que lo va a ayudar a mantener la temperatura afuera y le va a dar energía en sus primeros días.</p>
      <p>Sus párpados, cerrados desde el primer trimestre, empiezan a separarse: muy pronto va a abrir los ojos. Responde más a los sonidos de afuera y practica movimientos de respiración con el líquido amniótico.</p>`,
    cuerpo: `
      <p>Tu presión puede subir un poco, volviendo a los valores de antes del embarazo. Es un buen momento para conocer los síntomas de la preeclampsia, que suele aparecer en el último trimestre.</p>
      <p>Si te pica mucho la piel, sobre todo las palmas de las manos y las plantas de los pies, y empeora a la noche, contalo enseguida: puede ser un problema del hígado que se detecta con un análisis.</p>`,
    tips: [
      ["Fibra y agua", "El estreñimiento es frecuente en esta etapa, y más si tomás hierro."],
      ["Dormí de costado", "Desde ahora conviene ir acostumbrándose a esa posición."],
      ["Repartí las tareas", "Hacé con tu pareja o tu familia una lista de lo que hay que hacer en casa."],
      ["Anotá cómo se mueve", "Empezá a notar en qué momentos del día está más activo."]
    ],
    pendiente: `<p>Si tu factor sanguíneo es Rh negativo, preguntá en tu próximo control cuándo te corresponde la inyección de inmunoglobulina.</p>`,
    alarma: [
      "Te pican mucho las palmas de las manos o las plantas de los pies.",
      "Se te hinchan de golpe la cara o las manos, o tenés dolor de cabeza fuerte.",
      "Tenés contracciones con ritmo o pérdida de líquido.",
      "Sentís que se mueve menos que de costumbre."
    ],
    leeMas: { texto: "Controles de las semanas 20 a 26 · Ministerio de Salud", url: "https://www.argentina.gob.ar/node/8037" },
    explorar: ["picazon-en-el-embarazo", "preeclampsia", "dormir-bien"]
  },

  27: {
    titulo: "¡Tiene hipo!",
    tamano: "Como un brócoli grande",
    medida: "36,6 cm · 875 g",
    notificacion: "Semana 27 💓 Si sentís golpecitos con ritmo, ¡es hipo! Termina el segundo trimestre.",
    imagen: "img/semanas/semana-27.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of a 27-week human fetus inside the womb, eyes softly open, thumb in mouth, rounder body taking most of the space, umbilical cord, soft warm golden light, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, scientific yet tender, no text, vertical 4:5",
    bebe: `
      <p>Ocupa casi todo el espacio de tu útero. Abre y cierra los ojos, se chupa el dedo y ya tiene momentos regulares de sueño y de actividad. Su cerebro está cada vez más activo.</p>
      <p>Si de repente sentís unos golpecitos suaves con ritmo, seguramente tiene hipo. Es muy común desde ahora, dura poco y no le molesta.</p>`,
    cuerpo: `
      <p>Termina el segundo trimestre. Es común que aparezcan dolor de espalda, calambres en las piernas y, a la noche, una sensación de inquietud en las piernas que te obliga a moverlas.</p>
      <p>Es un buen momento para anotarte en un curso de preparación para el parto, que suele empezar en el tercer trimestre.</p>`,
    tips: [
      ["Baño tibio antes de dormir", "Relaja la espalda y las piernas."],
      ["Menos cafeína a la tarde", "Ayuda con las piernas inquietas y con el sueño."],
      ["Ejercicio del gato", "En cuatro patas, arqueá la espalda y volvé despacio. Alivia la zona lumbar."],
      ["Anotate al curso", "Preguntá en tu maternidad, hospital u obra social."]
    ],
    pendiente: `<p>Desde la semana 28 los controles suelen ser más seguidos. Confirmá cuándo es tu próximo turno.</p>`,
    alarma: [
      "Tenés contracciones con ritmo o más de cuatro en una hora.",
      "Perdés líquido o tenés un sangrado vaginal.",
      "Sentís que se mueve menos que de costumbre.",
      "Tenés dolor de cabeza fuerte, visión borrosa o hinchazón repentina."
    ],
    leeMas: { texto: "Más información oficial", url: "" },
    explorar: ["preparacion-para-el-parto", "calambres-y-varices", "dolor-de-espalda"]
  }
});

Object.assign(window.BIBLIOTECA, {

  "calambres-y-varices": {
    titulo: "Calambres y várices",
    icono: "🦵",
    html: `
      <p><b>Calambres:</b> son contracciones fuertes y dolorosas, casi siempre en las pantorrillas y a la noche. Aparecen sobre todo en el segundo y tercer trimestre.</p>
      <ul>
        <li>Cuando aparezca uno, estirá la pierna y llevá la punta del pie hacia vos. Masajeá la zona.</li>
        <li>Estirá las pantorrillas antes de acostarte.</li>
        <li>Caminá todos los días y tomá suficiente agua.</li>
        <li>Si son muy frecuentes, consultá antes de tomar cualquier suplemento.</li>
      </ul>
      <p><b>Várices:</b> son venas dilatadas, azuladas o violáceas, en las piernas y a veces en la vulva. El volumen de sangre aumenta, las hormonas relajan las paredes de las venas y el útero presiona la circulación. La herencia también influye.</p>
      <ul>
        <li>Elevá las piernas varias veces por día.</li>
        <li>No pases mucho tiempo de pie ni sentada sin moverte, y no cruces las piernas.</li>
        <li>Preguntá por las medias de compresión: ayudan mucho.</li>
        <li>Dormí de costado.</li>
      </ul>
      <p>Muchas várices mejoran después del parto.</p>
      <p><b>Andá a la guardia</b> si una pierna se hincha de golpe, se pone roja, caliente o te duele, sobre todo si es una sola: puede ser un coágulo y necesita atención rápida.</p>`
  },

  "braxton-hicks": {
    titulo: "Contracciones de Braxton Hicks",
    icono: "🌊",
    html: `
      <p>Son contracciones de "entrenamiento": el útero se pone duro durante 30 a 60 segundos y después se relaja. Pueden empezar en el segundo trimestre y se vuelven más frecuentes al final.</p>
      <p><b>Cómo reconocerlas:</b></p>
      <ul>
        <li>Son irregulares: no tienen un ritmo fijo.</li>
        <li>No duelen, o dan una molestia leve.</li>
        <li>No se vuelven más fuertes ni más seguidas con el tiempo.</li>
        <li>Se calman al cambiar de posición, descansar, tomar agua o vaciar la vejiga.</li>
      </ul>
      <p><b>Las contracciones de parto, en cambio,</b> tienen ritmo, se van haciendo más seguidas y más intensas, y no se van con el reposo.</p>
      <p><b>Si estás antes de la semana 37, consultá enseguida si:</b></p>
      <ul>
        <li>Tenés más de cuatro contracciones en una hora, aunque no duelan.</li>
        <li>Las contracciones tienen ritmo.</li>
        <li>Sentís presión en la pelvis, dolor tipo menstrual o dolor en la parte baja de la espalda.</li>
        <li>Perdés líquido, sangre o cambia tu flujo.</li>
      </ul>`
  },

  "estrias": {
    titulo: "Estrías: lo que sí y lo que no",
    icono: "🌙",
    html: `
      <p>Las estrías son líneas que aparecen cuando la piel se estira rápido. En el embarazo son muy frecuentes, sobre todo en la panza, los pechos, las caderas y los muslos. Al principio son rosadas o violáceas.</p>
      <p><b>Lo que influye:</b> sobre todo la genética (si tu mamá las tuvo, es más probable), y también lo rápido que se estira la piel.</p>
      <p><b>Lo que hay que saber:</b> ninguna crema ni aceite demostró que prevenga las estrías, aunque la publicidad diga lo contrario. Hidratar la piel sí alivia la picazón y la sensación de tirantez, y se siente bien.</p>
      <p><b>Lo que ayuda:</b> aumentar de peso de forma gradual, dentro de lo recomendado, para darle tiempo a la piel.</p>
      <p><b>La buena noticia:</b> después del parto se van aclarando de a poco y, con los meses, se vuelven líneas plateadas mucho menos visibles.</p>
      <p>Si después de la lactancia querés tratarlas, consultá con dermatología: hay tratamientos que sirven, pero que no se recomiendan en el embarazo.</p>`
  },

  "pareja-y-embarazo": {
    titulo: "La pareja durante el embarazo",
    icono: "🤝",
    html: `
      <p>El embarazo no solo cambia tu cuerpo: también cambia la relación. Aparecen ilusiones, miedos y expectativas nuevas para los dos.</p>
      <p><b>Lo que suele preocupar a la pareja:</b> si va a poder cuidar y sostener a la familia, cómo va a reaccionar en el parto, si va a seguir habiendo tiempo para los dos. Muchas veces no lo dicen.</p>
      <p><b>Ideas que ayudan:</b></p>
      <ul>
        <li>Hablen de lo que sienten, también de lo que da miedo.</li>
        <li>Invitá a tu pareja a los controles y las ecografías.</li>
        <li>Repartan las tareas de la casa: hagan una lista y elijan juntos.</li>
        <li>Conversen sobre cómo se imaginan la crianza, el parto y los primeros meses.</li>
        <li>Guarden momentos para estar solos, sin hablar del bebé.</li>
      </ul>
      <p>Si estás transitando el embarazo sin pareja, armá tu red: una amiga, tu mamá, una hermana o una vecina pueden acompañarte en los controles y en el parto.</p>
      <p>Si en tu relación hay gritos, control o violencia, pedí ayuda. En Argentina, la Línea 144 atiende las 24 horas, es gratuita y confidencial.</p>`
  },

  "elegir-el-nombre": {
    titulo: "Elegir el nombre",
    icono: "✨",
    html: `
      <p>Elegir el nombre es una de las decisiones más lindas, y a veces de las más discutidas. Algunas ideas:</p>
      <ul>
        <li>Hagan cada uno una lista y busquen coincidencias.</li>
        <li>Díganlo en voz alta con el apellido completo.</li>
        <li>Piensen en apodos, iniciales y cómo se escribe.</li>
        <li>Busquen el significado.</li>
        <li>Si no quieren opiniones de todo el mundo, guárdenlo hasta el nacimiento.</li>
      </ul>
      <p><b>En Argentina, la ley establece algunas reglas:</b> se pueden inscribir hasta tres nombres; no se puede usar un apellido como nombre; el primer nombre no puede ser igual al de un hermano vivo; y no se aceptan nombres extravagantes. El apellido puede ser el de cualquiera de los dos, o ambos en el orden que acuerden.</p>
      <p>El nacimiento se inscribe en el Registro Civil en los días siguientes al parto; muchas maternidades tienen una oficina del Registro dentro del hospital. Preguntá con tiempo qué documentación necesitan llevar.</p>`
  },

  "hinchazon-pies": {
    titulo: "Pies y tobillos hinchados",
    icono: "🦶",
    html: `
      <p>En la segunda mitad del embarazo es muy común que se hinchen los pies, los tobillos y a veces las manos. Los cambios en la sangre hacen que los tejidos retengan líquido, y el útero dificulta la vuelta de la sangre desde las piernas. Empeora al final del día, con calor y si pasás mucho tiempo de pie.</p>
      <p><b>Qué ayuda:</b></p>
      <ul>
        <li>Elevar los pies siempre que puedas.</li>
        <li>No estar mucho tiempo de pie ni sentada sin moverte.</li>
        <li>Caminar o nadar.</li>
        <li>Usar medias de descanso o de compresión, puestas desde la mañana.</li>
        <li>Tomar mucha agua.</li>
        <li>Dormir de costado.</li>
        <li>Usar calzado cómodo y sacarte los anillos si te aprietan.</li>
      </ul>
      <p>Después del parto vas a eliminar ese líquido extra: es normal hacer mucho pis y transpirar los primeros días.</p>
      <p><b>Consultá enseguida si:</b></p>
      <ul>
        <li>Se te hinchan de golpe la cara, las manos o los párpados.</li>
        <li>La hinchazón viene con dolor de cabeza, visión borrosa o dolor en la boca del estómago.</li>
        <li>Una sola pierna está hinchada, roja o dolorida.</li>
      </ul>`
  },

  "preeclampsia": {
    titulo: "Preeclampsia: qué es y cómo reconocerla",
    icono: "🩺",
    html: `
      <p>La preeclampsia es una complicación del embarazo en la que sube la presión arterial y pueden afectarse otros órganos, como los riñones y el hígado. Aparece después de la semana 20, con más frecuencia en el tercer trimestre, y también puede presentarse en las semanas posteriores al parto.</p>
      <p>Por eso en cada control te toman la presión y te piden análisis de orina: muchas veces se detecta antes de que haya síntomas.</p>
      <p><b>Síntomas para reconocer:</b></p>
      <ul>
        <li>Dolor de cabeza fuerte que no se va.</li>
        <li>Visión borrosa, lucecitas o puntos frente a los ojos.</li>
        <li>Zumbidos en los oídos.</li>
        <li>Dolor en la boca del estómago o debajo de las costillas del lado derecho.</li>
        <li>Hinchazón repentina de la cara, las manos o los párpados.</li>
        <li>Aumento de peso muy rápido en pocos días.</li>
        <li>Náuseas o vómitos que aparecen en la segunda mitad del embarazo.</li>
      </ul>
      <p><b>Ante cualquiera de estos síntomas, andá a la guardia ese mismo día.</b> No esperes al próximo control.</p>
      <p>Si tenés más riesgo (por ejemplo, presión alta antes del embarazo, preeclampsia en un embarazo anterior, diabetes o embarazo múltiple), tu médico o médica puede indicarte medidas para prevenirla. Cumplir con todos los controles es la mejor protección.</p>`
  },

  "diabetes-gestacional": {
    titulo: "Diabetes del embarazo y la prueba de glucosa",
    icono: "🍬",
    html: `
      <p>La diabetes gestacional es un aumento del azúcar en la sangre que aparece durante el embarazo. Las hormonas de la placenta hacen que la insulina funcione peor, y a veces el cuerpo no logra compensarlo.</p>
      <p>Muchas veces no da síntomas, por eso se busca a todas las embarazadas entre las semanas 24 y 28, con la <b>prueba de tolerancia oral a la glucosa</b>.</p>
      <p><b>Cómo es la prueba:</b> vas en ayunas, te sacan sangre, tomás una bebida muy dulce y te vuelven a sacar sangre a las dos horas. Durante ese tiempo tenés que quedarte sentada y sin comer. No hace falta hacer dieta los días previos: comé normalmente.</p>
      <p><b>Si da alterada:</b> en la mayoría de los casos se controla con cambios en la alimentación y actividad física, y a veces hace falta insulina. Controlarla bien es importante para tu salud y para que el bebé crezca de forma adecuada.</p>
      <p>Casi siempre desaparece después del parto, pero conviene repetir un control de glucosa en los meses siguientes, porque aumenta el riesgo de tener diabetes más adelante.</p>
      <p><b>Tienen más riesgo</b> las mujeres con sobrepeso, con familiares con diabetes, que tuvieron diabetes gestacional antes, un bebé de más de 4 kilos o síndrome de ovario poliquístico.</p>`
  },

  "parto-prematuro-signos": {
    titulo: "Signos de parto prematuro",
    icono: "⏰",
    html: `
      <p>Un parto es prematuro cuando ocurre antes de la semana 37. Reconocer las señales a tiempo permite actuar: hay tratamientos que pueden frenar las contracciones o ayudar a que los pulmones del bebé maduren.</p>
      <p><b>Consultá enseguida si, antes de la semana 37, tenés:</b></p>
      <ul>
        <li>Contracciones con ritmo, o más de cuatro en una hora, aunque no duelan.</li>
        <li>Dolor tipo menstrual en la parte baja de la panza.</li>
        <li>Dolor sordo en la parte baja de la espalda, que va y viene.</li>
        <li>Sensación de presión en la pelvis, como si el bebé empujara hacia abajo.</li>
        <li>Pérdida de líquido por la vagina, aunque sea poca.</li>
        <li>Cambio en el flujo: más acuoso, mucoso o con sangre.</li>
        <li>Sangrado vaginal.</li>
      </ul>
      <p><b>Qué hacer:</b> no esperes a ver si se pasa. Andá a tu maternidad o guardia y contá cuántas semanas tenés.</p>
      <p>Las infecciones urinarias no tratadas, el cigarrillo y algunas condiciones del embarazo aumentan el riesgo. Ir a todos los controles ayuda a detectarlas.</p>`
  },

  "anemia-hierro": {
    titulo: "Anemia y hierro en el embarazo",
    icono: "🩸",
    html: `
      <p>En el embarazo tu volumen de sangre aumenta muchísimo, y el bebé y la placenta necesitan hierro para crecer. Por eso la anemia es frecuente, sobre todo en el segundo y tercer trimestre. Se detecta con un análisis de sangre.</p>
      <p><b>Síntomas posibles:</b> mucho cansancio, palidez, falta de aire con poco esfuerzo, mareos, palpitaciones o ganas de comer cosas raras, como hielo o tierra.</p>
      <p><b>Alimentos con hierro:</b></p>
      <ul>
        <li>Carnes rojas magras, pollo y pescado, bien cocidos.</li>
        <li>Legumbres: lentejas, garbanzos, porotos.</li>
        <li>Verduras de hoja verde: espinaca, acelga.</li>
        <li>Cereales y harinas fortificados.</li>
      </ul>
      <p><b>Para absorber mejor el hierro:</b> acompañá las comidas con una fruta o verdura con vitamina C (naranja, mandarina, kiwi, tomate, morrón). Y dejá el mate, el té y el café para un rato antes o después: dificultan la absorción.</p>
      <p><b>Si te indicaron un suplemento:</b> tomalo con agua o jugo, lejos de los lácteos. Puede oscurecer la materia fecal y dar estreñimiento: es esperable. Si te cae muy mal, consultá, pero no lo dejes por tu cuenta.</p>`
  },

  "lista-bebe": {
    titulo: "Qué necesitás de verdad para el bebé",
    icono: "🧸",
    html: `
      <p>La lista de "cosas para el bebé" puede ser infinita. Lo realmente necesario para los primeros meses es bastante menos.</p>
      <p><b>Para dormir:</b> cuna o moisés con colchón firme y del tamaño justo, sábanas ajustables y una mantita liviana.</p>
      <p><b>Para vestirlo (talle recién nacido y 0-3 meses):</b> 6 a 8 bodys, 4 a 6 enteritos, 2 o 3 abrigos o camperitas, gorritos, medias y un saco para salir.</p>
      <p><b>Para cambiarlo:</b> pañales de recién nacido, algodón o toallitas sin perfume, crema para la cola y un cambiador.</p>
      <p><b>Para bañarlo:</b> bañera, toallón con capucha y jabón neutro para bebés.</p>
      <p><b>Para salir:</b> silla de auto tipo "huevito", obligatoria para viajar en auto desde el primer día, y un cochecito o portabebé.</p>
      <p><b>Otros:</b> termómetro digital, tijerita o lima de uñas para bebé, y un bolso.</p>
      <p><b>Lo que no hace falta (y puede ser peligroso):</b> protectores acolchados de cuna, almohadas, peluches y posicionadores para dormir.</p>
      <p>Comprar usado o heredar ropa, cuna y cochecito está perfecto. La única excepción es la silla de auto: si es usada, que sepas su historia y que no haya tenido choques.</p>`
  },

  "picazon-en-el-embarazo": {
    titulo: "Picazón en el embarazo: cuándo consultar",
    icono: "🌿",
    html: `
      <p>Es muy común que pique la piel de la panza y los pechos: se está estirando y se seca. En general se alivia con crema hidratante, baños tibios (no calientes) y ropa de algodón.</p>
      <p><b>Pero hay una picazón que hay que consultar enseguida:</b> la que aparece en las palmas de las manos y las plantas de los pies, es muy intensa, empeora a la noche y aparece sin manchas ni granitos en la piel.</p>
      <p>Puede ser <b>colestasis del embarazo</b>, un problema del hígado que aparece sobre todo en el tercer trimestre. Se diagnostica con un análisis de sangre y necesita controles, porque puede afectar al bebé. Avisá aunque te parezca una tontería.</p>
      <p><b>También consultá si</b> aparecen granitos o ronchas que pican mucho sobre las estrías de la panza, que se extienden a los muslos. Suele ser una erupción benigna del embarazo, pero tiene que verla un médico o médica.</p>
      <p>No uses cremas con corticoides ni antialérgicos por tu cuenta.</p>`
  },

  "preparacion-para-el-parto": {
    titulo: "Curso de preparación para el parto",
    icono: "🎓",
    html: `
      <p>Muchas maternidades, hospitales y obras sociales ofrecen cursos de preparación integral para la maternidad, que antes se llamaban de "psicoprofilaxis". Suelen empezar en el tercer trimestre, alrededor de las semanas 28 a 32.</p>
      <p><b>Qué se aprende:</b></p>
      <ul>
        <li>Cómo reconocer el trabajo de parto y cuándo ir a la maternidad.</li>
        <li>Respiración, posiciones y recursos para el dolor.</li>
        <li>Qué pasa en el parto y en la cesárea.</li>
        <li>Lactancia y cuidados del recién nacido.</li>
        <li>Cómo puede acompañar tu pareja o tu acompañante.</li>
      </ul>
      <p>Además, conocer a otras embarazadas en la misma etapa ayuda mucho.</p>
      <p><b>Tus derechos:</b> en Argentina, la ley de parto respetado te garantiza, entre otras cosas, recibir información sobre las intervenciones, estar acompañada por la persona que elijas durante el trabajo de parto, el parto y el posparto, y tener a tu bebé con vos desde el nacimiento si su salud lo permite.</p>
      <p>Preguntá en tu control o en la maternidad dónde elegiste tener a tu bebé.</p>`
  }
});
/* ---------------- LOTE 5 · Semanas 28 a 34 ---------------- */
Object.assign(window.SEMANAS, {

  28: {
    titulo: "Bienvenida al tercer trimestre",
    tamano: "Como una berenjena grande",
    medida: "37,6 cm · 1 kg",
    notificacion: "Semana 28 👁️ ¡Tercer trimestre! Ya abre y cierra los ojos, y tiene pestañas.",
    imagen: "img/semanas/semana-28.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of a 28-week human fetus inside the womb, eyes open with tiny eyelashes, rounder face, curled comfortable position, umbilical cord, soft warm golden light, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, scientific yet tender, no text, vertical 4:5",
    bebe: `
      <p>¡Empieza el tercer trimestre! Ya pesa alrededor de un kilo y abre y cierra los ojos, que tienen pestañas. Todavía no ve como vamos a ver nosotros, pero muy pronto va a poder mirarte.</p>
      <p>Sigue acumulando grasa y su cerebro madura rápido. Tiene ciclos de sueño, y algunos estudios sugieren que ya tiene una fase de sueño en la que se mueven los ojos, como cuando soñamos.</p>`,
    cuerpo: `
      <p>Desde ahora los controles suelen ser más seguidos, cada dos o tres semanas. Es posible que te repitan algunos análisis de sangre y orina.</p>
      <p>A la noche pueden aparecer las piernas inquietas: un hormigueo que te obliga a moverlas. Es común en esta etapa y se va después del parto.</p>`,
    tips: [
      ["Acostate de costado", "Desde esta semana se recomienda dormir de costado. Cualquier lado sirve."],
      ["Conocé su ritmo", "Notá en qué momentos se mueve más. Vas a aprender a reconocerlo."],
      ["Masajes en las pantorrillas", "Alivian las piernas inquietas antes de dormir."],
      ["Menos cafeína", "Especialmente a la tarde y a la noche."]
    ],
    pendiente: `<p>Si sos Rh negativo, preguntá por la inyección de inmunoglobulina, que suele indicarse alrededor de esta semana. Y anotate al curso de preparación para el parto si todavía no lo hiciste.</p>`,
    alarma: [
      "Sentís que se mueve menos o distinto de lo habitual.",
      "Tenés contracciones con ritmo o pérdida de líquido.",
      "Tenés dolor de cabeza fuerte, visión borrosa o hinchazón repentina.",
      "Tenés un sangrado vaginal."
    ],
    leeMas: { texto: "Más información oficial", url: "" },
    explorar: ["tercer-trimestre", "movimientos-del-bebe", "dormir-bien"]
  },

  29: {
    titulo: "Crece a toda velocidad",
    tamano: "Como un zapallo anco chico",
    medida: "38,6 cm · 1,15 kg",
    notificacion: "Semana 29 🎃 Crece a toda velocidad y necesita mucho calcio para sus huesos.",
    imagen: "img/semanas/semana-29.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of a 29-week human fetus inside the womb, strong kicking legs, larger head, fuller body, umbilical cord, soft warm golden light, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, scientific yet tender, no text, vertical 4:5",
    bebe: `
      <p>Está creciendo muy rápido. Sus músculos y pulmones siguen madurando y su cabeza crece para hacerle lugar a un cerebro cada vez más grande.</p>
      <p>Sus huesos se siguen endureciendo: cada día guarda una buena cantidad de calcio. Por eso ahora necesita mucho de vos: proteínas, hierro, calcio y vitaminas. Sus pataditas son cada vez más fuertes.</p>`,
    cuerpo: `
      <p>Desde ahora vas a sentir sus movimientos con mucha claridad, y es importante que prestes atención a su ritmo: si notás que se mueve menos, hay que consultar.</p>
      <p>En el tercer trimestre pueden volver la acidez, los gases y el estreñimiento, y aparecer hemorroides. Suelen mejorar después del parto.</p>`,
    tips: [
      ["Lácteos todos los días", "Leche, yogur o queso pasteurizado, por el calcio."],
      ["Fibra y agua", "Son la mejor prevención para el estreñimiento y las hemorroides."],
      ["No hagas fuerza en el baño", "Y no te quedes mucho rato sentada en el inodoro."],
      ["Un ratito de conexión", "Recostate después de comer y prestá atención a sus movimientos."]
    ],
    pendiente: `<p>Si te indicaron análisis de control del tercer trimestre, hacelos con tiempo para llevar los resultados al próximo turno.</p>`,
    alarma: [
      "Sentís que se mueve menos o distinto de lo habitual.",
      "Tenés contracciones con ritmo o pérdida de líquido.",
      "Tenés sangrado al ir de cuerpo que no para, o sangrado vaginal.",
      "Tenés dolor de cabeza fuerte o visión borrosa."
    ],
    leeMas: { texto: "Más información oficial", url: "" },
    explorar: ["hemorroides", "movimientos-del-bebe", "alimentacion-saludable"]
  },

  30: {
    titulo: "Distingue la luz de la oscuridad",
    tamano: "Como un repollo",
    medida: "39,9 cm · 1,3 kg",
    notificacion: "Semana 30 🥬 Ya distingue la luz de la oscuridad y puede seguir una luz con los ojos.",
    imagen: "img/semanas/semana-30.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of a 30-week human fetus inside the womb, eyes open looking toward a soft glow of light coming through the belly, fuller cheeks, umbilical cord, soft warm golden light, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, scientific yet tender, no text, vertical 4:5",
    bebe: `
      <p>Ya distingue la luz de la oscuridad, y puede seguir con los ojos una luz que se mueve. Cuando nazca va a ver mejor de cerca: más o menos la distancia entre tu pecho y tu cara cuando lo tengas en brazos.</p>
      <p>Flota en una buena cantidad de líquido amniótico, pero a medida que crezca va a tener cada vez menos espacio. Su cerebro empieza a formar los pliegues que le permiten tener más neuronas.</p>`,
    cuerpo: `
      <p>Puede volver el cansancio, sobre todo si dormís mal, y sentirte más torpe: el peso extra cambia tu equilibrio y las articulaciones están más flojas.</p>
      <p>También pueden volver los cambios de humor. Es normal, pero si te sentís triste o irritable la mayor parte del tiempo, hablalo en tu control.</p>`,
    tips: [
      ["Agarrate de la baranda", "En escaleras y en la ducha, con calma y sin apuro."],
      ["Calzado con suela de goma", "Y nada de subirte a sillas o escaleras."],
      ["Empezá tu plan de parto", "Pensá qué te gustaría y qué no para ese día."],
      ["Descansá de día", "Aunque sea media hora con los pies en alto."]
    ],
    pendiente: `<p>Si vas a trabajar hasta cerca del parto, confirmá la fecha en que empieza tu licencia y dejá organizadas tus tareas.</p>`,
    alarma: [
      "Sentís que se mueve menos o distinto de lo habitual.",
      "Tenés contracciones con ritmo o pérdida de líquido.",
      "Tuviste una caída o un golpe en la panza.",
      "Tenés dolor de cabeza fuerte, visión borrosa o hinchazón repentina."
    ],
    leeMas: { texto: "Más información oficial", url: "" },
    explorar: ["plan-de-parto", "dormir-bien", "pareja-y-embarazo"]
  },

  31: {
    titulo: "Gira la cabeza",
    tamano: "Como un coco",
    medida: "41,1 cm · 1,5 kg",
    notificacion: "Semana 31 🥥 Ya gira la cabeza de un lado al otro, y sus bracitos están más llenitos.",
    imagen: "img/semanas/semana-31.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of a 31-week human fetus inside the womb, turning its head to the side, chubby arms and legs, smooth skin, umbilical cord, soft warm golden light, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, scientific yet tender, no text, vertical 4:5",
    bebe: `
      <p>Ya pesa alrededor de un kilo y medio y puede girar la cabeza de un lado al otro. La grasa que acumuló hace que sus brazos y piernas se vean más llenitos.</p>
      <p>Sus cinco sentidos ya funcionan: siente el tacto, escucha, percibe la luz, saborea el líquido amniótico y tiene olfato. Se prepara para un nuevo estirón.</p>`,
    cuerpo: `
      <p>Las contracciones de Braxton Hicks pueden ser más frecuentes. Si no tienen ritmo y se van con el reposo, son normales.</p>
      <p>Quizás notes que te sale un poquito de líquido amarillento de los pechos: es calostro, la primera leche. No pasa nada si no te sale: no significa que vayas a tener menos leche.</p>`,
    tips: [
      ["Protectores para el corpiño", "Si te sale calostro, unos discos absorbentes evitan manchas."],
      ["Corpiño de lactancia", "Si vas a comprar, comprá ya de lactancia, una copa más grande."],
      ["Informate sobre la lactancia", "Saber cómo es la prendida te ayuda mucho los primeros días."],
      ["Contá las contracciones", "Si notás muchas, contá cuántas tenés en una hora."]
    ],
    pendiente: `<p>Pensá dónde vas a buscar ayuda con la lactancia: puericultora, grupo de apoyo o consultorio de lactancia de tu maternidad.</p>`,
    alarma: [
      "Tenés más de cuatro contracciones en una hora, o con ritmo.",
      "Perdés líquido o tenés un sangrado vaginal.",
      "Sentís que se mueve menos o distinto de lo habitual.",
      "Sentís presión en la pelvis o dolor de espalda baja que va y viene."
    ],
    leeMas: { texto: "Más información oficial", url: "" },
    explorar: ["lactancia-preparacion", "braxton-hicks", "parto-prematuro-signos"]
  },

  32: {
    titulo: "Practica respirar",
    tamano: "Como un ananá",
    medida: "42,4 cm · 1,7 kg",
    notificacion: "Semana 32 🍍 Practica respirar y sube unos 200 gramos por semana. ¡Y te toca la vacuna contra el VSR!",
    imagen: "img/semanas/semana-32.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of a 32-week human fetus curled inside the womb taking up most of the space, complete fingernails, soft hair on the head, chubby limbs, umbilical cord, soft warm golden light, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, scientific yet tender, no text, vertical 4:5",
    bebe: `
      <p>Ya ocupa casi todo el espacio del útero. Sus uñas están completas, practica movimientos de respiración y sube unos 200 gramos por semana.</p>
      <p>Aunque tenga menos lugar, <b>no debería moverse menos</b>: lo que cambia es el tipo de movimiento. En vez de grandes vueltas, vas a sentir más empujones, estiramientos y codazos. Si notás que se mueve menos, consultá ese mismo día.</p>`,
    cuerpo: `
      <p>Estás subiendo de peso más rápido, porque el bebé crece mucho. El útero empuja hacia arriba y presiona el diafragma: por eso es común sentir que te falta el aire y tener acidez.</p>
      <p>El peso en la panza también cambia tu postura, y puede doler la parte baja de la espalda.</p>`,
    tips: [
      ["Hombros hacia atrás", "Una buena postura le deja más espacio a tus pulmones."],
      ["Almohadas extra para dormir", "Respirás mejor con la cabeza y el pecho elevados."],
      ["Movete 15 minutos", "Una caminata o bailar suave te devuelve energía."],
      ["Vacunate", "La vacuna contra el VSR protege a tu bebé de la bronquiolitis en sus primeros meses."]
    ],
    pendiente: `<p>Entre las semanas 32 y 36 te corresponde la vacuna contra el virus sincicial respiratorio (VSR), durante la temporada en que circula el virus. Preguntá en tu control o en el vacunatorio.</p>`,
    alarma: [
      "Sentís que se mueve menos o distinto de lo habitual.",
      "Te falta el aire de golpe, tenés dolor en el pecho o los labios azulados.",
      "Tenés contracciones con ritmo o pérdida de líquido.",
      "Tenés dolor de cabeza fuerte, visión borrosa o hinchazón repentina."
    ],
    leeMas: { texto: "Vacuna contra el VSR · Ministerio de Salud", url: "https://www.argentina.gob.ar/node/417502" },
    explorar: ["vacunas-en-el-embarazo", "falta-de-aire", "movimientos-del-bebe"]
  },

  33: {
    titulo: "Su cabecita flexible",
    tamano: "Como un melón chico",
    medida: "43,7 cm · 1,9 kg",
    notificacion: "Semana 33 🍈 Su piel ya está más lisa. Y los huesos de su cabeza siguen flexibles para el parto.",
    imagen: "img/semanas/semana-33.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of a 33-week human fetus inside the womb, head down position, smooth plump skin, peaceful face, umbilical cord, soft warm golden light, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, scientific yet tender, no text, vertical 4:5",
    bebe: `
      <p>Gracias a la grasa que acumuló, su piel está más lisa y perdió el aspecto arrugadito. La mayoría de sus huesos se endurecen, pero los de la cabeza siguen separados y flexibles, para poder acomodarse al pasar por el canal de parto.</p>
      <p>Por eso algunos bebés nacen con la cabeza un poco alargada: es normal y en pocos días se redondea. Esos espacios entre los huesos, las fontanelas, se cierran recién entre los 9 y los 18 meses. Además, está recibiendo tus anticuerpos a través de la placenta.</p>`,
    cuerpo: `
      <p>Es común sentir hormigueo, adormecimiento o dolor en las manos y las muñecas, sobre todo a la noche o al despertar. Los tejidos retienen líquido y aprietan un nervio que pasa por la muñeca.</p>
      <p>Es un buen momento para preparar el bolso de la maternidad.</p>`,
    tips: [
      ["Manos en alto", "A la noche, apoyá el brazo sobre una almohada."],
      ["Muñeca derecha", "Una muñequera que la mantenga recta para dormir puede ayudar."],
      ["Pausas al escribir", "Si trabajás con computadora, estirá las manos seguido."],
      ["Armá el bolso", "Dejalo listo antes de la semana 36."]
    ],
    pendiente: `<p>Prepará el bolso para vos y para el bebé, y averiguá en tu maternidad qué piden que lleves. Si vas a viajar en auto, instalá con tiempo la silla para el bebé.</p>`,
    alarma: [
      "Sentís que se mueve menos o distinto de lo habitual.",
      "Tenés contracciones con ritmo o pérdida de líquido.",
      "Tenés dolor de cabeza fuerte, visión borrosa o hinchazón repentina.",
      "Perdés fuerza en las manos o se te caen las cosas."
    ],
    leeMas: { texto: "Más información oficial", url: "" },
    explorar: ["hormigueo-en-las-manos", "bolso-maternidad", "lactancia-preparacion"]
  },

  34: {
    titulo: "Sus pulmones casi listos",
    tamano: "Como un melón",
    medida: "45 cm · 2,1 kg",
    notificacion: "Semana 34 🍈 Sus pulmones están casi listos. ¡Ya pesa más de 2 kilos!",
    imagen: "img/semanas/semana-34.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of a 34-week human fetus head down inside the womb, plump body filling the space, smooth skin, closed relaxed eyes, umbilical cord, soft warm golden light, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, scientific yet tender, no text, vertical 4:5",
    bebe: `
      <p>Ya pesa más de dos kilos. Su sistema nervioso sigue madurando y sus pulmones están casi listos.</p>
      <p>Si naciera ahora, sería prematuro: muchos bebés que nacen entre las semanas 34 y 37 necesitan algunos días de cuidados en neonatología, pero en general evolucionan muy bien. La mayoría ya está con la cabeza hacia abajo, aunque todavía tiene tiempo para darse vuelta.</p>`,
    cuerpo: `
      <p>Podés sentir mareos si te parás rápido, si hace calor o si estás mucho rato boca arriba: el útero presiona una vena grande y baja la presión. Se pasa al ponerte de costado.</p>
      <p>Es muy común sentir cansancio, ganas de que llegue el día y, a la vez, miedo al parto. Prepararte e informarte ayuda.</p>`,
    tips: [
      ["Levantate despacio", "Primero sentate y después parate."],
      ["Nada de mucho calor", "Duchas tibias y lugares ventilados."],
      ["Comidas chicas y seguidas", "Evitan las bajas de azúcar que marean."],
      ["Preguntá cómo viene", "En el control, consultá si está cabeza abajo."]
    ],
    pendiente: `<p>Si todavía no te aplicaste la vacuna contra el VSR, tenés tiempo hasta el final de la semana 36. Y confirmá si tu bolso ya está listo.</p>`,
    alarma: [
      "Sentís que se mueve menos o distinto de lo habitual.",
      "Tenés contracciones con ritmo o pérdida de líquido.",
      "Ves borroso de golpe, tenés dolor de cabeza fuerte o hinchazón repentina.",
      "Tenés un sangrado vaginal."
    ],
    leeMas: { texto: "Vacunas en el embarazo · Ministerio de Salud", url: "https://www.argentina.gob.ar/salud/vacunas/embarazadas" },
    explorar: ["posicion-del-bebe", "bolso-maternidad", "preparacion-para-el-parto"]
  }
});

Object.assign(window.BIBLIOTECA, {

  "tercer-trimestre": {
    titulo: "El tercer trimestre: controles y estudios",
    icono: "📋",
    html: `
      <p>El tercer trimestre va desde la semana 28 hasta el parto. Es la etapa en que el bebé más engorda y en la que se preparan tu cuerpo y el suyo para el nacimiento.</p>
      <p><b>Controles más seguidos:</b> en general cada dos o tres semanas y, desde la semana 36, cada semana. En cada uno te toman la presión, el peso, miden la altura del útero y escuchan los latidos.</p>
      <p><b>Estudios habituales de esta etapa:</b></p>
      <ul>
        <li>Análisis de sangre y orina de control, incluidos los de infecciones.</li>
        <li>Urocultivo.</li>
        <li>Ecografía para ver el crecimiento del bebé, la placenta y el líquido.</li>
        <li>Si sos Rh negativo, la inyección de inmunoglobulina alrededor de la semana 28.</li>
        <li>El hisopado para estreptococo del grupo B, entre las semanas 35 y 37.</li>
        <li>Monitoreo fetal cerca de la fecha de parto.</li>
        <li>La vacuna contra el VSR, entre las semanas 32 y 36.</li>
      </ul>
      <p><b>Lo que puede aparecer:</b> más cansancio, falta de aire, acidez, dolor de espalda, hinchazón, hemorroides, ganas de hacer pis seguido y contracciones de Braxton Hicks.</p>
      <p><b>Lo más importante:</b> conocer el ritmo de movimientos de tu bebé y los signos de alarma. Ante cualquier duda, consultá ese mismo día.</p>`
  },

  "movimientos-del-bebe": {
    titulo: "Los movimientos del bebé: cómo saber que está bien",
    icono: "👣",
    html: `
      <p>En el tercer trimestre los movimientos de tu bebé son una de las mejores señales de que está bien. Cada bebé tiene su propio ritmo, y lo importante es que vos lo conozcas.</p>
      <p><b>Lo que hay que saber:</b></p>
      <ul>
        <li>No es cierto que los bebés se muevan menos al final del embarazo. Cambia el tipo de movimiento (más empujones y estiramientos que vueltas), pero no la cantidad.</li>
        <li>Tienen momentos de sueño de 20 a 40 minutos en los que están quietos.</li>
        <li>Suelen moverse más a la tarde y a la noche.</li>
      </ul>
      <p><b>Una forma de prestarle atención:</b> una vez por día, en un momento en que suele estar activo, recostate de costado y concentrate en sus movimientos. Muchos equipos de salud usan como referencia sentir al menos 10 movimientos en 2 horas. Pero lo que más importa es que notes si algo cambia respecto de lo habitual.</p>
      <p><b>Si sentís que se mueve menos o distinto:</b></p>
      <ul>
        <li>No esperes al día siguiente ni al próximo control.</li>
        <li>No intentes "despertarlo" con comidas dulces o bebidas frías y quedarte tranquila.</li>
        <li>Comunicate con tu maternidad o andá a la guardia ese mismo día. Con un monitoreo pueden revisar que esté todo bien.</li>
      </ul>
      <p>Consultar por los movimientos nunca es una molestia ni una exageración.</p>`
  },

  "hemorroides": {
    titulo: "Hemorroides en el embarazo",
    icono: "🌸",
    html: `
      <p>Las hemorroides son venas dilatadas en la zona del ano. En el embarazo son muy frecuentes, sobre todo en el tercer trimestre y después del parto: el útero presiona las venas de la pelvis, aumenta el volumen de sangre y el estreñimiento suma.</p>
      <p><b>Pueden dar:</b> picazón, ardor, dolor al ir de cuerpo, un bultito en la zona o un poquito de sangre roja al limpiarte.</p>
      <p><b>Para prevenirlas y aliviarlas:</b></p>
      <ul>
        <li>Evitá el estreñimiento: agua, fibra y movimiento todos los días.</li>
        <li>Andá al baño apenas tengas ganas, sin hacer fuerza ni quedarte mucho rato sentada.</li>
        <li>Apoyá los pies en un banquito cuando estés en el inodoro.</li>
        <li>Hacé baños de asiento con agua tibia, de 10 a 15 minutos.</li>
        <li>Probá compresas frías envueltas en un paño.</li>
        <li>Limpiate con papel suave sin perfume o con agua.</li>
        <li>Hacé ejercicios de Kegel: mejoran la circulación de la zona.</li>
      </ul>
      <p>Hay cremas y supositorios que se pueden usar en el embarazo: que te los indique tu médico o médica.</p>
      <p><b>Consultá</b> si el sangrado es abundante, si el dolor es muy fuerte o si el bulto se pone duro y muy doloroso.</p>`
  },

  "plan-de-parto": {
    titulo: "El plan de parto",
    icono: "📝",
    html: `
      <p>El plan de parto es un documento breve donde escribís tus preferencias para el trabajo de parto, el nacimiento y las primeras horas con tu bebé. Sirve para pensar qué querés, conversarlo con tu equipo y que lo tengan en cuenta ese día.</p>
      <p><b>Algunos temas para incluir:</b></p>
      <ul>
        <li>Quién te va a acompañar.</li>
        <li>Si querés moverte, tomar líquidos o elegir la posición para parir.</li>
        <li>Qué recursos te gustaría usar para el dolor, y si querés anestesia peridural.</li>
        <li>Contacto piel a piel inmediato con tu bebé.</li>
        <li>Esperar para cortar el cordón umbilical.</li>
        <li>Amamantar en la primera hora.</li>
        <li>Tus preferencias si hace falta una cesárea.</li>
      </ul>
      <p><b>Importante:</b> el plan expresa deseos, no garantías. Si surge algo inesperado, puede ser necesario cambiar el rumbo por tu salud o la del bebé. Lo valioso es que estés informada y te expliquen cada decisión.</p>
      <p>En Argentina, la ley de parto respetado te da derecho a recibir información, a estar acompañada por quien elijas y a tener a tu bebé con vos desde el nacimiento, si su salud lo permite.</p>
      <p>Llevá dos copias al parto: una para vos y otra para el equipo.</p>`
  },

  "lactancia-preparacion": {
    titulo: "Prepararte para la lactancia",
    icono: "🤱",
    html: `
      <p>Amamantar es natural, pero se aprende: el bebé y vos van a ir aprendiendo juntos. Informarte antes ayuda mucho a que los primeros días sean más fáciles.</p>
      <p><b>Lo que no hace falta:</b> "preparar" los pezones, frotarlos ni usar cremas especiales. Tampoco importa el tamaño de los pechos: no tiene relación con cuánta leche vas a tener.</p>
      <p><b>Lo que sí ayuda saber antes:</b></p>
      <ul>
        <li><b>La primera hora:</b> el contacto piel a piel después del nacimiento ayuda a que el bebé busque el pecho solo.</li>
        <li><b>El calostro:</b> los primeros días sale poca leche, espesa y amarillenta. Es justo lo que tu bebé necesita.</li>
        <li><b>A demanda:</b> los recién nacidos toman pecho entre 8 y 12 veces por día, también a la noche.</li>
        <li><b>La prendida:</b> el bebé abre bien grande la boca y toma gran parte de la areola, no solo el pezón. Si duele mucho, hay que corregir la posición.</li>
        <li><b>La bajada de la leche:</b> suele ser entre el segundo y el cuarto día.</li>
      </ul>
      <p>La recomendación es lactancia exclusiva hasta los 6 meses, y después seguir junto con otros alimentos.</p>
      <p><b>Armá tu red de ayuda desde ahora:</b> preguntá si tu maternidad tiene consultorio de lactancia, buscá una puericultora o un grupo de apoyo. Pedir ayuda a tiempo cambia todo.</p>`
  },

  "falta-de-aire": {
    titulo: "Falta de aire al final del embarazo",
    icono: "🌬️",
    html: `
      <p>En el tercer trimestre muchas embarazadas sienten que les cuesta respirar hondo o que se agitan con poco esfuerzo. El útero empuja el diafragma hacia arriba y los pulmones tienen menos espacio. Además, las hormonas hacen que respires más seguido.</p>
      <p><b>Qué ayuda:</b></p>
      <ul>
        <li>Tomar las cosas con calma y hacer pausas.</li>
        <li>Sentarte derecha, con los hombros hacia atrás.</li>
        <li>Dormir con la cabeza y el pecho elevados con almohadas.</li>
        <li>Levantar los brazos por encima de la cabeza: abre el pecho por un momento.</li>
        <li>Respirar lento y profundo.</li>
      </ul>
      <p>Muchas sienten alivio en las últimas semanas, cuando el bebé baja hacia la pelvis.</p>
      <p><b>Andá a la guardia enseguida si:</b> la falta de aire aparece de golpe, tenés dolor en el pecho, tos con sangre, palpitaciones fuertes, los labios o los dedos azulados, o te falta el aire estando en reposo.</p>`
  },

  "hormigueo-en-las-manos": {
    titulo: "Hormigueo y dolor en las manos",
    icono: "✋",
    html: `
      <p>En el tercer trimestre es común sentir hormigueo, adormecimiento o dolor en los dedos, las manos y las muñecas, sobre todo a la noche o al despertar. Se llama síndrome del túnel carpiano: los tejidos de la muñeca se hinchan por el líquido que retiene el cuerpo y presionan un nervio.</p>
      <p><b>Qué ayuda:</b></p>
      <ul>
        <li>No dormir sobre las manos ni con las muñecas dobladas.</li>
        <li>Apoyar el brazo sobre una almohada a la noche.</li>
        <li>Usar una muñequera que mantenga la muñeca recta para dormir.</li>
        <li>Si al despertar tenés la mano dormida, sacudila suavemente.</li>
        <li>Hacer pausas si trabajás con computadora o con movimientos repetitivos.</li>
        <li>Mover y estirar las manos varias veces por día.</li>
      </ul>
      <p>En la gran mayoría de los casos mejora sola en las semanas posteriores al parto.</p>
      <p><b>Consultá</b> si perdés fuerza, se te caen las cosas, el dolor no te deja dormir o si el hormigueo viene con hinchazón repentina de la cara o dolor de cabeza.</p>`
  },

  "bolso-maternidad": {
    titulo: "El bolso de la maternidad",
    icono: "👜",
    html: `
      <p>Lo ideal es tenerlo listo antes de la semana 36. Preguntá en tu maternidad qué piden que lleves: algunas proveen pañales u otros elementos.</p>
      <p><b>Documentación:</b></p>
      <ul>
        <li>DNI y credencial de obra social o prepaga.</li>
        <li>Carné perinatal y estudios (ecografías, análisis, grupo y factor).</li>
        <li>Plan de parto, si lo hiciste.</li>
      </ul>
      <p><b>Para vos:</b></p>
      <ul>
        <li>2 o 3 camisones o pijamas abiertos adelante, para amamantar.</li>
        <li>Corpiños de lactancia y discos absorbentes.</li>
        <li>Apósitos o toallas de posparto, bien absorbentes.</li>
        <li>Bombachas de algodón (o descartables) de talle grande.</li>
        <li>Ojotas, bata, artículos de higiene, cargador del celular.</li>
        <li>Ropa cómoda para volver a casa: todavía vas a tener panza.</li>
      </ul>
      <p><b>Para el bebé:</b></p>
      <ul>
        <li>3 o 4 mudas en talle recién nacido: body, enterito, medias y gorrito.</li>
        <li>Una mantita y un abrigo según la estación.</li>
        <li>Pañales de recién nacido, si no los proveen.</li>
        <li>La ropa para la salida.</li>
      </ul>
      <p><b>Para el viaje:</b> la silla de auto tipo "huevito", instalada de antemano.</p>`
  },

  "posicion-del-bebe": {
    titulo: "¿Cómo viene el bebé? Su posición para nacer",
    icono: "🔄",
    html: `
      <p>Durante buena parte del embarazo tu bebé cambia de posición muchas veces. Hacia las semanas 32 a 36, la mayoría se acomoda con la cabeza hacia abajo, que es la posición más favorable para un parto vaginal. Se la llama <b>cefálica</b>.</p>
      <p><b>Otras posiciones posibles:</b></p>
      <ul>
        <li><b>Podálica o "de nalgas":</b> con la cola o los pies hacia abajo. Al llegar al término la tiene una minoría de bebés.</li>
        <li><b>Transversa:</b> atravesado, de costado.</li>
      </ul>
      <p><b>Cómo se sabe:</b> tu médico o médica lo puede palpar en la panza o confirmarlo con una ecografía. Vos también podés notarlo: si sentís las patadas arriba, cerca de las costillas, probablemente esté cabeza abajo.</p>
      <p><b>Si no se da vuelta:</b> según el caso, te pueden ofrecer una maniobra para girarlo desde afuera, llamada versión cefálica externa, que se hace alrededor de las semanas 36 o 37 en un lugar con monitoreo. Si no gira, suele indicarse una cesárea.</p>
      <p>Todavía tiene tiempo: muchos bebés se dan vuelta en las últimas semanas.</p>`
  }
});
/* ---------------- LOTE 6 · Semanas 35 a 41 ---------------- */
Object.assign(window.SEMANAS, {

  35: {
    titulo: "Cada vez más apretadito",
    tamano: "Como un zapallo",
    medida: "46 cm · 2,4 kg",
    notificacion: "Semana 35 💛 Ya está apretadito en la panza, pero debe seguir moviéndose igual que siempre.",
    imagen: "img/semanas/semana-35.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of a 35-week human fetus snugly curled head down inside the womb, plump cheeks, folded arms and legs, little remaining space, umbilical cord, soft warm golden light, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, scientific yet tender, no text, vertical 4:5",
    bebe: `
      <p>Ya pesa unos dos kilos y medio y está cada vez más apretadito: no flota como antes ni da grandes vueltas. Pero debe seguir moviéndose con la misma frecuencia de siempre.</p>
      <p>Sus riñones ya están completamente desarrollados y su hígado empieza a funcionar. Lo más importante de su desarrollo físico ya está hecho: en las próximas semanas se dedica sobre todo a engordar.</p>`,
    cuerpo: `
      <p>Tu útero ya llega hasta debajo de las costillas y presiona todo: por eso las idas al baño, la acidez y la sensación de que no te entra nada.</p>
      <p>Entre esta semana y la 37 te van a hacer un hisopado para detectar una bacteria llamada estreptococo del grupo B. No duele y es muy importante para cuidar a tu bebé en el parto.</p>`,
    tips: [
      ["Almohada bajo la panza", "Acostada de costado, alivia la espalda y la presión."],
      ["Cambiá de posición seguido", "Sentada o acostada, moverte evita contracturas."],
      ["Ejercicio contra la pared", "Apoyá toda la espalda en la pared, con las rodillas flexionadas, cinco segundos, y soltá."],
      ["Repasá los signos de parto", "Que tu acompañante también los conozca."]
    ],
    pendiente: `<p>Pedí la orden para el hisopado de estreptococo del grupo B (semanas 35 a 37). Y repasá con quién te vas a ir a la maternidad y cómo.</p>`,
    alarma: [
      "Sentís que se mueve menos o distinto de lo habitual.",
      "Perdés líquido por la vagina, aunque sea poco.",
      "Tenés contracciones con ritmo o un sangrado vaginal.",
      "Tenés dolor de cabeza fuerte, visión borrosa o hinchazón repentina."
    ],
    leeMas: { texto: "Más información oficial", url: "" },
    explorar: ["estreptococo-b", "lactancia-preparacion", "posicion-del-bebe"]
  },

  36: {
    titulo: "La recta final",
    tamano: "Como una papaya grande",
    medida: "47,4 cm · 2,6 kg",
    notificacion: "Semana 36 🌟 ¡Recta final! Desde ahora, los controles son cada semana.",
    imagen: "img/semanas/semana-36.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of a 36-week human fetus head down deep in the pelvis inside the womb, chubby full-term looking baby, vernix on the skin, umbilical cord, soft warm golden light, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, scientific yet tender, no text, vertical 4:5",
    bebe: `
      <p>¡Recta final! Pesa alrededor de dos kilos y seiscientos gramos y está pegando el último estirón. La mayoría de los bebés ya está con la cabeza hacia abajo.</p>
      <p>Se le está cayendo el lanugo, ese vello fino que lo cubría, y conserva parte de la vérnix que protege su piel. Su succión es cada vez más fuerte: se está preparando para tomar la teta.</p>`,
    cuerpo: `
      <p>En estas semanas el bebé puede "encajarse", bajando hacia la pelvis. Si pasa, vas a respirar mejor y tener menos acidez, pero vas a sentir más presión abajo y ganas de hacer pis todavía más seguido.</p>
      <p>Desde ahora los controles suelen ser cada semana. Es normal sentir ansiedad: ya falta poco.</p>`,
    tips: [
      ["Bolso en la puerta", "Y los documentos a mano."],
      ["Plan de viaje", "Quién te lleva, por dónde, y un plan B por si no está."],
      ["Comidas en el freezer", "Cocinar de más ahora te va a salvar las primeras semanas."],
      ["Descansá todo lo que puedas", "Siestas, pies en alto y nada de culpa."]
    ],
    pendiente: `<p>Si no te aplicaste la vacuna contra el VSR, esta es la última semana para hacerlo. Y repasá los signos de trabajo de parto con tu acompañante.</p>`,
    alarma: [
      "Sentís que se mueve menos o distinto de lo habitual.",
      "Rompiste bolsa o perdés líquido, sobre todo si es verde o marrón.",
      "Tenés un sangrado como una menstruación.",
      "Tenés dolor de cabeza fuerte, visión borrosa o hinchazón repentina."
    ],
    leeMas: { texto: "Vacunas en el embarazo · Ministerio de Salud", url: "https://www.argentina.gob.ar/salud/vacunas/embarazadas" },
    explorar: ["signos-de-trabajo-de-parto", "bolso-maternidad", "plan-de-parto"]
  },

  37: {
    titulo: "¡Ya es un bebé a término!",
    tamano: "Como una acelga grande",
    medida: "48,6 cm · 2,9 kg",
    notificacion: "Semana 37 🎉 ¡Tu bebé ya es a término! Practica respirar, chupar y agarrar.",
    imagen: "img/semanas/semana-37.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of a 37-week full-term human fetus head down inside the womb, plump healthy body, hand grasping near the face, umbilical cord, soft warm golden light, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, scientific yet tender, no text, vertical 4:5",
    bebe: `
      <p>¡Ya es un bebé a término! Desde esta semana, si naciera, ya no se lo considera prematuro. Igual, cada día que pasa en la panza sigue madurando, sobre todo su cerebro y sus pulmones.</p>
      <p>Practica todo lo que va a necesitar afuera: respirar, chupar, tragar y agarrar con fuerza. Sigue sumando grasa, que le va a dar esos cachetes y pliegues tan lindos.</p>`,
    cuerpo: `
      <p>Puede salir el tapón mucoso: una secreción espesa, transparente o con hilos rosados o marrones. Significa que el cuello del útero se está preparando, pero el parto puede empezar en horas o en días.</p>
      <p>Muchas sienten de golpe ganas de limpiar y ordenar todo: el famoso instinto de "armar el nido". Aprovechalo, pero sin agotarte.</p>`,
    tips: [
      ["Caminá", "Mantenerte activa ayuda a tu cuerpo a prepararse."],
      ["Practicá respiraciones", "Inhalar por la nariz y exhalar lento por la boca te va a servir en las contracciones."],
      ["Charlá con tu acompañante", "Repasen juntos el plan de parto y lo que necesitás de esa persona."],
      ["Celular cargado", "Y los números importantes guardados."]
    ],
    pendiente: `<p>Si no te hicieron el hisopado de estreptococo del grupo B, esta es la semana. Llevá el resultado al parto.</p>`,
    alarma: [
      "Sentís que se mueve menos o distinto de lo habitual.",
      "Rompiste bolsa o perdés líquido, sobre todo si es verde o marrón.",
      "Tenés un sangrado como una menstruación.",
      "Tenés dolor de cabeza fuerte, visión borrosa, fiebre o un dolor de panza constante."
    ],
    leeMas: { texto: "Más información oficial", url: "" },
    explorar: ["etapas-del-parto", "alivio-del-dolor", "signos-de-trabajo-de-parto"]
  },

  38: {
    titulo: "Todo listo para nacer",
    tamano: "Como una calabaza",
    medida: "49,8 cm · 3,1 kg",
    notificacion: "Semana 38 💛 Sus órganos ya están maduros. Puede nacer en cualquier momento.",
    imagen: "img/semanas/semana-38.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of a 38-week human fetus head down inside the womb, fully developed plump newborn-like baby with soft hair, peaceful face, umbilical cord, soft warm golden light, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, scientific yet tender, no text, vertical 4:5",
    bebe: `
      <p>Sus órganos ya están maduros y listos para la vida afuera. Sus pulmones siguen fabricando una sustancia que los va a ayudar a abrirse con el primer llanto.</p>
      <p>Pesa más de tres kilos, aunque cada bebé tiene su tamaño. Puede nacer en cualquier momento.</p>`,
    cuerpo: `
      <p>Es normal sentir mucha impaciencia, cansancio y también miedo. Hinchazón en los pies, dolor en la pelvis y noches difíciles son parte de esta etapa.</p>
      <p>Si tenés una cesárea programada, este suele ser el momento: preguntá todas tus dudas antes.</p>`,
    tips: [
      ["Hacé cosas que te distraigan", "Una película, una caminata, una salida corta."],
      ["Comé liviano y seguido", "Te va a dar energía para el trabajo de parto."],
      ["Contestá menos mensajes", "Avisá que vas a contar las novedades cuando llegue el momento."],
      ["Confiá en tu cuerpo", "Está preparado para esto."]
    ],
    pendiente: `<p>Repasá qué hacer si rompés bolsa y cuándo ir a la maternidad. Si tenés cesárea programada, confirmá la hora de ayuno y qué llevar.</p>`,
    alarma: [
      "Sentís que se mueve menos o distinto de lo habitual.",
      "Rompiste bolsa o perdés líquido, sobre todo si es verde o marrón.",
      "Tenés un sangrado como una menstruación o un dolor de panza constante.",
      "Tenés dolor de cabeza fuerte, visión borrosa o fiebre."
    ],
    leeMas: { texto: "Más información oficial", url: "" },
    explorar: ["cesarea", "alivio-del-dolor", "signos-de-trabajo-de-parto"]
  },

  39: {
    titulo: "Ya casi",
    tamano: "Como una sandía chica",
    medida: "50,7 cm · 3,3 kg",
    notificacion: "Semana 39 💛 Ya casi. Cada día que pasa, su cerebro sigue madurando.",
    imagen: "img/semanas/semana-39.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of a 39-week human fetus head down inside the womb ready for birth, fully formed plump baby, calm face, umbilical cord, soft warm golden light, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, scientific yet tender, no text, vertical 4:5",
    bebe: `
      <p>Está listo para conocerte. Su cerebro sigue creciendo rápido, y por eso cada día de más en la panza le suma.</p>
      <p>Sigue acumulando grasa para mantener su temperatura afuera. Cuando nazca, lo primero que va a necesitar es tu calor, tu olor y tu voz, que ya conoce.</p>`,
    cuerpo: `
      <p>Quizás sientas contracciones que van y vienen, presión abajo o dolor en la cintura. Prestá atención a si se vuelven regulares.</p>
      <p>Es buen momento para leer sobre las primeras horas de tu bebé: qué le van a hacer, por qué y cómo podés acompañarlo.</p>`,
    tips: [
      ["Medí las contracciones", "Anotá cada cuánto vienen y cuánto duran."],
      ["Ducha tibia", "Relaja y ayuda a distinguir contracciones falsas de verdaderas."],
      ["Descansá entre contracción y contracción", "El trabajo de parto puede ser largo."],
      ["Leé sobre las primeras horas", "Saber qué esperar te da tranquilidad."]
    ],
    pendiente: `<p>Confirmá con tu equipo qué pasa si llegás a la fecha probable de parto sin contracciones: cuándo es el próximo control o monitoreo.</p>`,
    alarma: [
      "Sentís que se mueve menos o distinto de lo habitual.",
      "Rompiste bolsa o perdés líquido, sobre todo si es verde o marrón.",
      "Tenés un sangrado como una menstruación o un dolor de panza constante.",
      "Tenés dolor de cabeza fuerte, visión borrosa o fiebre."
    ],
    leeMas: { texto: "Más información oficial", url: "" },
    explorar: ["primeras-horas-del-bebe", "signos-de-trabajo-de-parto", "etapas-del-parto"]
  },

  40: {
    titulo: "Tu fecha probable de parto",
    tamano: "Como una sandía",
    medida: "51 cm · 3,4 kg",
    notificacion: "Semana 40 🍉 ¡Llegó tu fecha probable de parto! Muy pocos bebés nacen justo hoy.",
    imagen: "img/semanas/semana-40.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of a 40-week full-term human baby curled head down inside the womb, ready to be born, soft glowing light, umbilical cord, plump healthy skin, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, tender and hopeful, no text, vertical 4:5",
    bebe: `
      <p>¡Llegó tu fecha probable de parto! Tu bebé está completamente listo. Mide alrededor de 50 centímetros y pesa unos tres kilos y medio, aunque cada bebé tiene su tamaño.</p>
      <p>Muy pocos bebés nacen justo el día de la fecha probable: es normal que el parto llegue unos días antes o después.</p>`,
    cuerpo: `
      <p>Es común sentir ansiedad, impaciencia, preguntas de todo el mundo y ganas de que ya sea el día. Respirá: está todo bien si tu bebé se mueve y los controles están bien.</p>
      <p>Desde ahora, tu equipo te va a controlar más seguido para asegurarse de que el bebé siga bien hasta que nazca.</p>`,
    tips: [
      ["Seguí con tu rutina", "Caminá, salí un poco, hacé cosas que te gusten."],
      ["Atenta a los movimientos", "Es la señal más importante en estos días."],
      ["Un mensaje para todos", "\"Les aviso cuando nazca\" te ahorra cientos de preguntas."],
      ["Mimate", "Un baño tibio, tu comida favorita, una serie."]
    ],
    pendiente: `<p>Asistí a todos los controles y monitoreos que te indiquen. Preguntá qué pasa si llegás a la semana 41 sin trabajo de parto.</p>`,
    alarma: [
      "Sentís que se mueve menos o distinto de lo habitual.",
      "Rompiste bolsa o perdés líquido, sobre todo si es verde o marrón.",
      "Tenés un sangrado como una menstruación o un dolor de panza constante.",
      "Tenés dolor de cabeza fuerte, visión borrosa o fiebre."
    ],
    leeMas: { texto: "Más información oficial", url: "" },
    explorar: ["fecha-pasada-induccion", "primeras-horas-del-bebe", "signos-de-trabajo-de-parto"]
  },

  41: {
    titulo: "Pasaste la fecha",
    tamano: "Listo para conocerte",
    medida: "Alrededor de 51 cm · 3,5 kg",
    notificacion: "Semana 41 💛 Pasaste la fecha y es normal. Seguí atenta a sus movimientos y a tus controles.",
    imagen: "img/semanas/semana-41.jpg",
    promptImagen: "Hyperrealistic 3D medical illustration of a full-term human baby curled head down inside the womb, calm and ready, warm glowing light, umbilical cord, plump healthy skin, dreamy shallow depth of field, gentle caramel and soft turquoise background tones, tender and hopeful, no text, vertical 4:5",
    bebe: `
      <p>Tu bebé sigue creciendo y madurando. Que todavía no haya nacido no significa que algo esté mal: un embarazo se considera a término hasta la semana 41 y es frecuente llegar hasta acá, sobre todo en el primer embarazo.</p>
      <p>En estos días tu equipo va a controlar que la placenta siga funcionando bien y que haya suficiente líquido amniótico.</p>`,
    cuerpo: `
      <p>Es muy normal sentir frustración, cansancio y ansiedad. Tratá de descansar y de no estar todo el tiempo pendiente de cada sensación.</p>
      <p>Te van a hacer controles más seguidos, como monitoreos y ecografías. Si el parto no empieza solo, alrededor de esta semana o la próxima suelen ofrecer inducirlo.</p>`,
    tips: [
      ["Hacé todos los controles", "Son los que permiten esperar tranquilas."],
      ["Movimientos, siempre", "Cualquier cambio, consultá ese mismo día."],
      ["Preguntá por la inducción", "Cómo es, cuándo se haría y qué opciones hay."],
      ["Apagá un rato el celular", "Las preguntas de todos pueden esperar."]
    ],
    pendiente: `<p>Confirmá con tu equipo el plan para estos días: cuándo es cada control y, si se propone una inducción, cuándo y dónde.</p>`,
    alarma: [
      "Sentís que se mueve menos o distinto de lo habitual.",
      "Rompiste bolsa o perdés líquido, sobre todo si es verde o marrón.",
      "Tenés un sangrado como una menstruación o un dolor de panza constante.",
      "Tenés fiebre, dolor de cabeza fuerte o visión borrosa."
    ],
    leeMas: { texto: "Más información oficial", url: "" },
    explorar: ["fecha-pasada-induccion", "movimientos-del-bebe", "signos-de-trabajo-de-parto"]
  }
});


/* ============================================================
   POSPARTO · se activa con el botón "¡Ya nació!"
   alarma = señales de alarma de la mamá · alarmaBebe = del bebé
   ============================================================ */
window.POSPARTO = {

  1: {
    titulo: "Bienvenido al mundo",
    notificacion: "💛 ¡Bienvenido al mundo! Mirá todo lo que pasa en esta primera semana juntos.",
    imagen: "img/posparto/posparto-1.jpg",
    promptImagen: "Hyperrealistic tender photograph of a newborn baby sleeping skin to skin on the mother's bare chest, mother's face not visible, mother's hand gently holding the baby's back, soft warm golden light, cozy blanket, caramel and soft turquoise tones, no text, vertical 4:5",
    bebe: `
      <p>En sus primeros días tu bebé duerme mucho, entre 16 y 18 horas por día, en ratitos cortos. Se despierta para comer seguido: entre 8 y 12 veces en 24 horas, también a la noche.</p>
      <p>Es normal que pierda un poco de peso los primeros días y que lo recupere hacia los 10 o 14 días. Sus primeras cacas son negras y pegajosas (el meconio) y después cambian a verdosas y luego amarillas. El resto del cordón se va a secar y caer solo, en general entre la primera y la tercera semana.</p>
      <p>Muchos bebés se ponen un poco amarillos entre el segundo y el cuarto día. Suele ser leve, pero siempre tiene que verlo el pediatra.</p>`,
    cuerpo: `
      <p>Vas a tener un sangrado llamado loquios, abundante los primeros días, que se va aclarando y disminuyendo durante varias semanas. Al amamantar podés sentir contracciones parecidas a cólicos: son los entuertos, y ayudan al útero a volver a su tamaño.</p>
      <p>Entre el segundo y el cuarto día suele bajar la leche: los pechos se ponen grandes, duros y calientes. Y es muy común sentir ganas de llorar sin motivo: se llama tristeza posparto y suele pasar sola en unos días.</p>`,
    tips: [
      ["Piel a piel", "Tené a tu bebé sobre tu pecho, solo con pañal: lo calma, lo abriga y ayuda a la lactancia."],
      ["Dormí cuando duerme", "Las tareas pueden esperar. Tu descanso, no."],
      ["Aceptá ayuda", "Que otros cocinen, laven y hagan los mandados."],
      ["Limitá las visitas", "Primero ustedes. Las visitas pueden esperar unos días."]
    ],
    pendiente: `<p>Llevá a tu bebé al primer control pediátrico, que suele ser a los pocos días del alta. Confirmá que le hicieron la pesquisa neonatal (prueba del talón), las vacunas del nacimiento y el estudio de audición. Si no recibiste la vacuna antigripal en el embarazo, podés aplicártela dentro de los 10 días posteriores al parto.</p>`,
    alarma: [
      "Tenés fiebre de 38 °C o más.",
      "Sangrás tanto que empapás una toalla en una hora, o tenés coágulos grandes.",
      "Tenés dolor de cabeza fuerte, visión borrosa o hinchazón repentina.",
      "Te duele o se hincha una pierna, o te falta el aire.",
      "La herida o los puntos están rojos, calientes o supuran.",
      "Tenés una zona del pecho roja, dura y dolorosa, con fiebre.",
      "Tenés pensamientos de hacerte daño o de hacerle daño a tu bebé."
    ],
    alarmaBebe: [
      "Tiene fiebre de 38 °C o más, o está muy frío.",
      "Le cuesta respirar, se queja al respirar o se pone morado.",
      "No quiere comer, o está muy dormido y no se despierta para las tomas.",
      "Está amarillo en las primeras 24 horas, o lo amarillo llega a la panza o las piernas.",
      "Moja muy pocos pañales o vomita verde.",
      "El ombligo está rojo, con pus o mal olor."
    ],
    leeMas: { texto: "Vacunas en el embarazo y el puerperio · Ministerio de Salud", url: "https://www.argentina.gob.ar/salud/vacunas/embarazadas" },
    explorar: ["lactancia-primeros-dias", "cuidados-posparto-mama", "baby-blues-y-depresion-posparto"]
  },

  2: {
    titulo: "Conociéndose",
    notificacion: "💛 Segunda semana juntos. Ya te reconoce por tu olor y tu voz.",
    imagen: "img/posparto/posparto-2.jpg",
    promptImagen: "Hyperrealistic tender photograph of a two-week-old newborn baby lying on its back in a safe crib with a fitted sheet and nothing else, swaddled in a light cotton sleep sack, peaceful sleeping face, soft warm golden light, caramel and soft turquoise tones, no text, vertical 4:5",
    bebe: `
      <p>Tu bebé ya te reconoce por tu olor y tu voz. Ve mejor a unos 20 o 30 centímetros, justo la distancia a tu cara cuando toma la teta. Empieza a tener ratitos despierto y atento.</p>
      <p>Hacia esta semana suele recuperar el peso con el que nació. Alrededor de los 10 días a las 3 semanas muchos bebés tienen un "estirón": piden comer muchísimo, casi todo el tiempo. Es normal y dura unos días.</p>`,
    cuerpo: `
      <p>Los loquios se van aclarando y son menos abundantes. El cansancio es grande: dormís en ratitos, como tu bebé.</p>
      <p>La tristeza de los primeros días debería ir pasando. Si sigue, o se vuelve más intensa, pedí ayuda: la depresión posparto es frecuente y tiene tratamiento.</p>`,
    tips: [
      ["Siempre boca arriba", "Para dormir, en su cuna, sin almohadas ni peluches."],
      ["Comé y tomá agua", "Tené a mano una botella y algo para picar mientras amamantás."],
      ["Salí a tomar aire", "Una caminata corta con tu bebé te va a hacer bien."],
      ["Contá lo que sentís", "Decir \"estoy agotada\" no te hace peor madre."]
    ],
    pendiente: `<p>Pedí el turno para tu control posparto con tu obstetra, y seguí con los controles pediátricos que te indicaron.</p>
      <p>Esta es la última semana de Crecer en la panza. Desde acá, te esperamos en <b>Crecer de 0 a 5</b>, para acompañarte mes a mes con la alimentación y la estimulación de tu bebé.</p>`,
    alarma: [
      "Tenés fiebre de 38 °C o más.",
      "El sangrado vuelve a ser abundante, con coágulos grandes, o tiene mal olor.",
      "Te duele o se hincha una pierna, o te falta el aire.",
      "Tenés una zona del pecho roja, dura y dolorosa, con fiebre.",
      "La tristeza no pasa, no podés dormir aunque el bebé duerma o no disfrutás de nada.",
      "Tenés pensamientos de hacerte daño o de hacerle daño a tu bebé."
    ],
    alarmaBebe: [
      "Tiene fiebre de 38 °C o más, o está muy frío.",
      "Le cuesta respirar o se pone morado.",
      "No quiere comer o está muy dormido.",
      "Sigue amarillo o lo amarillo aumenta.",
      "Llora de una forma distinta y no hay nada que lo calme.",
      "Vomita verde o en chorro varias veces."
    ],
    leeMas: { texto: "Más información oficial", url: "" },
    explorar: ["sueno-seguro", "llanto-del-bebe", "alarma-recien-nacido"]
  }
};


/* ============================================================
   PREMATURO · se suma al posparto si nació antes de la semana 37
   ============================================================ */
window.PREMATURO = {
  titulo: "Si tu bebé nació antes de tiempo",
  imagen: "img/posparto/prematuro.jpg",
  promptImagen: "Hyperrealistic tender photograph of a tiny premature baby in kangaroo care, skin to skin on a parent's chest inside a calm neonatal unit, tiny knit hat, parent's face not visible, soft warm light, caramel and soft turquoise tones, hopeful atmosphere, no text, vertical 4:5",
  html: `
    <p>Si tu bebé nació antes de la semana 37, es prematuro. Muchos necesitan pasar unos días o semanas en neonatología, donde los ayudan a respirar, a mantener la temperatura y a alimentarse hasta que pueden hacerlo solos.</p>
    <p><b>Vos sos parte de su cuidado.</b> Tu voz, tu contacto y tu leche lo ayudan muchísimo. Preguntá al equipo cuándo podés estar con tu bebé y cómo participar de sus cuidados.</p>
    <ul>
      <li><b>Piel a piel (método canguro):</b> en cuanto el equipo lo permita, tené a tu bebé sobre tu pecho. Ayuda a regular su temperatura, su respiración y su ritmo cardíaco.</li>
      <li><b>Tu leche:</b> si todavía no puede tomar la teta, empezá a extraerte leche lo antes posible después del parto. Hasta unas gotas de calostro son valiosísimas.</li>
      <li><b>Edad corregida:</b> para seguir su crecimiento y desarrollo se usa la edad corregida, que descuenta las semanas que se adelantó.</li>
      <li><b>Cuidate vos también:</b> tener un bebé internado es muy duro. Comé, descansá y pedí apoyo emocional.</li>
    </ul>
    <p>Cada bebé prematuro tiene su propio camino. El equipo de neonatología es tu mejor aliado: preguntá todo, cuantas veces necesites.</p>`,
  explorar: ["metodo-canguro", "extraccion-de-leche", "edad-corregida"]
};


/* ============================================================
   MENSAJES GENERALES DE LA APP
   ============================================================ */
window.MENSAJES = {
  bienvenida: {
    titulo: "Bienvenida a Crecer en la panza",
    texto: "Vamos a acompañarte semana a semana, desde la semana 4 hasta las dos primeras semanas con tu bebé en brazos. Cada semana te va a llegar una novedad: cómo crece tu bebé, qué pasa en tu cuerpo, consejos para sentirte mejor y temas para explorar. Para empezar, cargá la fecha de tu última menstruación o tu fecha probable de parto."
  },
  medidas: "Las medidas y las comparaciones son aproximadas: cada bebé crece a su propio ritmo.",
  aviso: "Esta app acompaña e informa, pero no reemplaza la consulta con tu médico o médica. Ante cualquier duda o síntoma de alarma, consultá.",
  lupa: "Vas a salir de la app para buscar en internet. Recordá que la información que encuentres no reemplaza la consulta con tu equipo de salud.",
  yaNacio: "¡Felicitaciones! 💛 Contanos la fecha en que nació tu bebé y te acompañamos en sus primeras dos semanas.",
  pausa: {
    titulo: "Pausar la app",
    texto: "Si tu embarazo no siguió, lo sentimos muchísimo. Podés pausar las notificaciones y la app va a quedar en silencio. No es por algo que hayas hecho. Date tiempo, apoyate en las personas que te quieren y, si lo necesitás, pedí acompañamiento profesional. Cuando quieras, podés volver."
  },
  final: {
    titulo: "Terminamos esta etapa juntas",
    texto: "Gracias por dejarnos acompañarte en este camino. Tu bebé ya está en tus brazos, y ahora empieza una etapa nueva. Para seguir acompañándote mes a mes con su alimentación y su estimulación, te esperamos en Crecer de 0 a 5.",
    boton: "Conocer Crecer de 0 a 5",
    url: "https://silvi-aura.github.io/estimulacion-0-5-APP/"
  }
};


/* ============================================================
   BIBLIOTECA · artículos del lote 6
   ============================================================ */
Object.assign(window.BIBLIOTECA, {

  "estreptococo-b": {
    titulo: "El hisopado de estreptococo del grupo B",
    icono: "🧫",
    html: `
      <p>El estreptococo del grupo B es una bacteria que vive en el intestino y la vagina de muchas personas sanas, sin causar ningún problema. Entre un 10 y un 30 por ciento de las embarazadas la tienen sin saberlo.</p>
      <p>A vos no te hace daño, pero durante el parto se le puede pasar al bebé y, en algunos casos, causarle una infección grave en sus primeros días.</p>
      <p><b>Cómo se detecta:</b> entre las semanas 35 y 37 te hacen un hisopado, pasando un hisopo por la vagina y el recto. No duele y dura segundos. En Argentina es un estudio obligatorio y gratuito. Se hace en esas semanas porque la bacteria aparece y desaparece sola.</p>
      <p><b>Si da positivo:</b> no tenés que hacer ningún tratamiento antes. Durante el trabajo de parto te van a dar antibióticos por vena, que reducen muchísimo el riesgo de que el bebé se contagie. Avisá al llegar a la maternidad y llevá el resultado.</p>
      <p>Tener estreptococo no tiene nada que ver con la higiene ni con algo que hayas hecho.</p>`
  },

  "signos-de-trabajo-de-parto": {
    titulo: "Signos de trabajo de parto: cuándo ir a la maternidad",
    icono: "🚗",
    html: `
      <p><b>Señales de que el parto se acerca (pueden pasar días):</b></p>
      <ul>
        <li>Sale el tapón mucoso, a veces con hilitos de sangre.</li>
        <li>El bebé baja y respirás mejor, pero sentís más presión abajo.</li>
        <li>Contracciones irregulares que van y vienen.</li>
      </ul>
      <p><b>Señales de trabajo de parto:</b></p>
      <ul>
        <li><b>Contracciones regulares</b> que se hacen cada vez más seguidas, más largas y más intensas, y no se van con el reposo ni con una ducha tibia.</li>
        <li><b>Rotura de bolsa:</b> sale líquido claro, de golpe o de a poco, que no podés controlar.</li>
      </ul>
      <p><b>Cuándo ir:</b> en un primer embarazo, una referencia útil es ir cuando las contracciones vienen cada 5 minutos, duran alrededor de un minuto y siguen así durante una hora. Si ya tuviste partos, o vivís lejos, conviene ir antes. Preguntá en tu control qué te recomiendan a vos.</p>
      <p><b>Si rompés bolsa:</b> fijate la hora y el color del líquido, ponete una toalla y andá a la maternidad, aunque no tengas contracciones.</p>
      <p><b>Andá enseguida si:</b></p>
      <ul>
        <li>El líquido es verde, marrón o con sangre.</li>
        <li>Sangrás como una menstruación.</li>
        <li>Sentís que el bebé se mueve menos.</li>
        <li>Tenés fiebre, un dolor de panza constante, dolor de cabeza fuerte o visión borrosa.</li>
      </ul>`
  },

  "etapas-del-parto": {
    titulo: "Las etapas del parto",
    icono: "🌅",
    html: `
      <p>Cada parto es distinto, pero en general tiene tres etapas.</p>
      <p><b>1. Dilatación.</b> Las contracciones abren de a poco el cuello del útero hasta los 10 centímetros.</p>
      <ul>
        <li>Al principio (fase latente) las contracciones son más espaciadas y suaves. Puede durar muchas horas, y gran parte se puede pasar en casa.</li>
        <li>Después (fase activa, desde unos 5 o 6 centímetros) las contracciones son más intensas y seguidas, y la dilatación avanza más rápido.</li>
      </ul>
      <p><b>2. Expulsivo.</b> Con la dilatación completa, aparecen las ganas de pujar y el bebé baja por el canal de parto hasta nacer. En un primer parto puede durar de minutos a un par de horas.</p>
      <p><b>3. Alumbramiento.</b> Después del nacimiento sale la placenta, en general en los siguientes 30 minutos. Mientras tanto, ya podés tener a tu bebé sobre tu pecho.</p>
      <p><b>¿Cuánto dura todo?</b> En un primer parto suele ser más largo; en los siguientes, más corto. No hay un tiempo "correcto": tu equipo va a controlar que avance bien.</p>
      <p>Moverte, cambiar de posición, tomar líquidos y tener a tu lado a alguien de confianza ayuda mucho en todas las etapas.</p>`
  },

  "alivio-del-dolor": {
    titulo: "Opciones para el dolor en el parto",
    icono: "🫶",
    html: `
      <p>Hay muchas formas de transitar el dolor del trabajo de parto, y podés combinarlas. No hay una opción "mejor": lo importante es que puedas elegir con información.</p>
      <p><b>Recursos sin medicación:</b></p>
      <ul>
        <li>Moverte, caminar y cambiar de posición.</li>
        <li>Usar la pelota de esferodinamia.</li>
        <li>Ducha o agua tibia.</li>
        <li>Masajes en la zona lumbar.</li>
        <li>Respiraciones lentas y concentración en cada contracción.</li>
        <li>Música, luz baja y un ambiente tranquilo.</li>
        <li>El acompañamiento de alguien de confianza.</li>
      </ul>
      <p><b>Anestesia peridural:</b> se coloca un catéter finito en la espalda por donde pasa la medicación. Alivia mucho el dolor y te deja despierta y consciente. Puede hacer más lento el período de pujos, y a veces baja la presión o da picazón. Preguntá con tiempo si tu maternidad la ofrece y en qué momento se puede colocar.</p>
      <p>Podés tener una preferencia y cambiar de idea en el momento. Las dos cosas están bien.</p>`
  },

  "cesarea": {
    titulo: "La cesárea: qué esperar",
    icono: "🏥",
    html: `
      <p>La cesárea es una cirugía en la que el bebé nace a través de un corte en la parte baja de la panza. Puede estar programada (por ejemplo, si el bebé viene de nalgas o por la ubicación de la placenta) o hacerse de urgencia durante el trabajo de parto.</p>
      <p><b>Cómo es:</b> en general se hace con anestesia en la espalda, así que estás despierta y podés escuchar a tu bebé al nacer. En muchas maternidades puede estar tu acompañante. Si el bebé está bien, pedí hacer piel a piel lo antes posible, incluso en el quirófano.</p>
      <p><b>La recuperación:</b></p>
      <ul>
        <li>Te van a ayudar a levantarte y caminar en las primeras horas: previene complicaciones.</li>
        <li>Tomá la medicación para el dolor que te indiquen: así podés moverte y amamantar mejor.</li>
        <li>Lavá la herida con agua y jabón, secala bien y revisala todos los días.</li>
        <li>No levantes cosas más pesadas que tu bebé durante unas semanas.</li>
        <li>Para amamantar, probá posiciones que no apoyen al bebé sobre la herida, como acostada de costado.</li>
      </ul>
      <p>Tener una cesárea no impide que en un próximo embarazo puedas tener un parto vaginal: en muchos casos es posible. Conversalo con tu equipo.</p>
      <p><b>Consultá enseguida</b> si la herida se pone roja, caliente, supura o se abre, o si tenés fiebre.</p>`
  },

  "primeras-horas-del-bebe": {
    titulo: "Las primeras horas de tu bebé",
    icono: "👶",
    html: `
      <p><b>Apenas nace:</b> si está bien, lo pueden apoyar directamente sobre tu pecho, piel a piel, y secarlo ahí. Ese contacto lo abriga, lo calma y lo ayuda a buscar la teta.</p>
      <p><b>El cordón:</b> se recomienda esperar un poco antes de cortarlo, porque así le llega más sangre de la placenta.</p>
      <p><b>La primera hora:</b> es un momento muy especial para el vínculo y para que tome la teta por primera vez. Pedí que, si es posible, no los separen.</p>
      <p><b>Lo que le van a hacer en las primeras horas o días:</b></p>
      <ul>
        <li>Pesarlo, medirlo y revisarlo.</li>
        <li>Darle vitamina K, que previene sangrados.</li>
        <li>Aplicarle unas gotas o pomada en los ojos para prevenir infecciones.</li>
        <li>Aplicarle las vacunas del nacimiento (en Argentina, la de hepatitis B y la BCG).</li>
        <li>La pesquisa neonatal o prueba del talón, que detecta enfermedades que se pueden tratar a tiempo.</li>
        <li>Un estudio de audición.</li>
      </ul>
      <p>Tenés derecho a recibir información sobre cada cosa que le hacen y a acompañarlo.</p>`
  },

  "fecha-pasada-induccion": {
    titulo: "Si pasa la fecha: controles e inducción",
    icono: "📅",
    html: `
      <p>La fecha probable de parto es una estimación. Es muy frecuente que el parto llegue después, sobre todo en el primer embarazo. Un embarazo se considera a término hasta el final de la semana 41.</p>
      <p><b>Qué controles te van a hacer:</b> monitoreos para escuchar el corazón del bebé y ver cómo responde, y ecografías para medir el líquido amniótico. Así se asegura que la placenta siga funcionando bien.</p>
      <p><b>La inducción:</b> si el parto no empieza solo, alrededor de las semanas 41 y 42 suelen proponer inducirlo, es decir, ayudar a que empiece. También se induce antes si hay algún motivo médico.</p>
      <p><b>Cómo se hace:</b> según cómo esté el cuello del útero, se pueden usar medicamentos que lo ablandan, una sonda con un pequeño balón, romper la bolsa o una medicación por vena que genera contracciones. Puede llevar horas o incluso un par de días.</p>
      <p>Preguntá todo lo que necesites: por qué te lo proponen, cómo sería y qué opciones tenés.</p>
      <p><b>Mientras tanto,</b> prestá mucha atención a los movimientos de tu bebé y consultá ese mismo día ante cualquier cambio.</p>`
  },

  "lactancia-primeros-dias": {
    titulo: "Lactancia: los primeros días",
    icono: "🍼",
    html: `
      <p><b>El calostro alcanza.</b> Los primeros días sale poca leche, espesa y amarillenta. La pancita de tu bebé es muy chiquita y ese calostro es justo lo que necesita.</p>
      <p><b>A demanda:</b> ofrecé el pecho cada vez que muestre hambre (se chupa las manos, mueve la boca, busca), sin esperar a que llore. Lo normal son entre 8 y 12 tomas en 24 horas.</p>
      <p><b>Una buena prendida:</b></p>
      <ul>
        <li>La panza del bebé pegada a la tuya, su cabeza y su cuerpo en línea.</li>
        <li>Boca bien abierta, labios hacia afuera, el mentón tocando el pecho.</li>
        <li>Toma gran parte de la areola, no solo el pezón.</li>
        <li>Se escucha o se ve que traga.</li>
      </ul>
      <p>Al principio puede molestar un poco al prenderse, pero <b>si duele durante toda la toma o se lastiman los pezones, hay que corregir la prendida.</b> Pedí ayuda.</p>
      <p><b>Cuando baja la leche</b> (entre el segundo y el cuarto día) los pechos se ponen duros. Si están tan tensos que el bebé no puede prenderse, sacate un poco de leche antes para ablandar la areola. Entre tomas, el frío alivia.</p>
      <p><b>Cómo saber si come bien:</b> desde el quinto día, al menos 6 pañales bien mojados y cacas amarillas por día, y que vaya recuperando peso.</p>
      <p><b>Consultá</b> si el bebé está muy dormido y no pide, moja pocos pañales o tenés el pecho rojo y dolorido con fiebre.</p>`
  },

  "cuidados-posparto-mama": {
    titulo: "Tu cuerpo después del parto",
    icono: "🌷",
    html: `
      <p><b>Los loquios:</b> después del parto (también de una cesárea) vas a tener un sangrado que los primeros días es rojo y abundante, y que de a poco se vuelve rosado, marrón y amarillento. Puede durar entre 4 y 6 semanas. Usá apósitos, no tampones.</p>
      <p><b>Los entuertos:</b> son contracciones del útero, parecidas a cólicos, que se sienten más al amamantar. Ayudan a que el útero vuelva a su tamaño.</p>
      <p><b>Si tuviste puntos:</b> lavá la zona con agua al hacer pis y secá con suavidad. El frío envuelto en un paño alivia la inflamación.</p>
      <p><b>Si tuviste cesárea:</b> cuidá la herida, caminá un poco cada día y no levantes peso.</p>
      <p><b>Otros cambios normales:</b> transpiración y mucho pis los primeros días, hemorroides, cansancio y caída de pelo unos meses después.</p>
      <p><b>Cuidate:</b> comé bien, tomá agua, descansá cuando tu bebé duerme y aceptá ayuda.</p>
      <p><b>Tu control posparto:</b> pedí turno con tu obstetra. Es el momento para revisar cómo te recuperás, hablar de cómo te sentís y elegir un método anticonceptivo, porque podés quedar embarazada aunque estés amamantando y no te haya vuelto la menstruación.</p>
      <p>Las relaciones sexuales se retoman cuando te sientas lista, en general después del control.</p>`
  },

  "baby-blues-y-depresion-posparto": {
    titulo: "Tristeza posparto y depresión posparto",
    icono: "💭",
    html: `
      <p><b>La tristeza posparto</b> es muy frecuente: le pasa a la mayoría de las mujeres en los primeros días. Ganas de llorar sin motivo, irritabilidad, sensibilidad, sentirte superada. Se debe a la caída brusca de hormonas, el cansancio y el cambio enorme. Suele empezar entre el tercer y el quinto día y pasa sola en unas dos semanas.</p>
      <p><b>La depresión posparto</b> es distinta: es más intensa y no se va sola. Le pasa a alrededor de una de cada siete mujeres, y puede aparecer en cualquier momento del primer año. Tiene tratamiento.</p>
      <p><b>Pedí ayuda si:</b></p>
      <ul>
        <li>La tristeza dura más de dos semanas o empeora.</li>
        <li>No disfrutás de nada, ni siquiera de tu bebé.</li>
        <li>Sentís culpa o que sos una mala madre todo el tiempo.</li>
        <li>No podés dormir aunque el bebé duerma, o dormís todo el día.</li>
        <li>Tenés mucha ansiedad, miedos constantes o ataques de pánico.</li>
        <li>Sentís que no podés cuidar a tu bebé.</li>
      </ul>
      <p>Contáselo a tu obstetra, al pediatra de tu bebé o a alguien de confianza. No es debilidad ni falta de amor.</p>
      <p><b>Andá a una guardia o llamá a emergencias ya si</b> tenés pensamientos de hacerte daño o de hacerle daño a tu bebé, o si sentís confusión, ves u oís cosas que otros no, o tenés ideas muy extrañas.</p>
      <p>Las parejas también pueden deprimirse después de un nacimiento. Cuídense entre los dos.</p>`
  },

  "sueno-seguro": {
    titulo: "Sueño seguro para tu bebé",
    icono: "🛏️",
    html: `
      <p>Estas recomendaciones ayudan a prevenir la muerte súbita del lactante y los accidentes durante el sueño:</p>
      <ul>
        <li><b>Siempre boca arriba,</b> para todas las siestas y a la noche. No de costado ni boca abajo.</li>
        <li><b>En su cuna o moisés,</b> con un colchón firme del tamaño justo y una sábana ajustable.</li>
        <li><b>Nada más en la cuna:</b> sin almohadas, chichoneras, peluches, mantas sueltas ni posicionadores.</li>
        <li><b>En tu habitación,</b> idealmente durante los primeros 6 meses, pero en su propia cuna.</li>
        <li><b>Sin humo:</b> nadie fuma cerca del bebé ni en la casa.</li>
        <li><b>Sin abrigarlo de más:</b> con una capa más de ropa que la que usás vos alcanza. Sin gorro para dormir adentro.</li>
        <li><b>La lactancia protege.</b></li>
      </ul>
      <p><b>Compartir la cama</b> es más riesgoso si alguien fuma, tomó alcohol o medicación que da sueño, si el bebé es prematuro o muy chiquito, o si es en un sillón o sofá: nunca te duermas con tu bebé en un sillón.</p>
      <p>Cuando está despierto y alguien lo mira, ponelo un ratito boca abajo para que fortalezca el cuello.</p>`
  },

  "llanto-del-bebe": {
    titulo: "El llanto del bebé: qué hacer",
    icono: "🌙",
    html: `
      <p>Llorar es la forma que tiene tu bebé de comunicarse. Es normal que llore varias horas por día, y el llanto suele aumentar hasta alrededor de las 6 semanas y después ir bajando.</p>
      <p><b>Repasá lo básico:</b> ¿tiene hambre? ¿pañal sucio? ¿frío o calor? ¿sueño? ¿quiere upa?</p>
      <p><b>Cosas que suelen calmar:</b></p>
      <ul>
        <li>Upa, piel a piel o en un portabebé.</li>
        <li>Mecerlo suave o caminar con él.</li>
        <li>Un sonido constante tipo "shhh", o el ruido de un ventilador.</li>
        <li>Ofrecerle el pecho.</li>
        <li>Un baño tibio o un masaje en la panza.</li>
        <li>Bajar las luces y los estímulos.</li>
      </ul>
      <p>Muchos bebés tienen momentos de llanto difícil de calmar a la tarde o a la noche. No es tu culpa.</p>
      <p><b>Muy importante:</b> si sentís que perdés la paciencia, dejá a tu bebé en un lugar seguro (su cuna, boca arriba), salí unos minutos de la habitación, respirá y pedí ayuda. <b>Nunca sacudas a un bebé:</b> puede causarle un daño muy grave.</p>
      <p><b>Consultá</b> si el llanto es distinto al habitual, si viene con fiebre, vómitos o rechazo del alimento, o si no hay nada que lo calme durante horas.</p>`
  },

  "alarma-recien-nacido": {
    titulo: "Señales de alarma en el recién nacido",
    icono: "🚨",
    html: `
      <p>Llevá a tu bebé a la guardia pediátrica enseguida si:</p>
      <ul>
        <li><b>Tiene fiebre:</b> 38 °C o más. En un recién nacido siempre hay que consultar. También si está muy frío.</li>
        <li><b>Le cuesta respirar:</b> respira muy rápido, se le hunden las costillas, se queja al respirar o se pone morado alrededor de la boca.</li>
        <li><b>No come:</b> rechaza varias tomas seguidas o está tan dormido que no se despierta para comer.</li>
        <li><b>Está amarillo</b> en las primeras 24 horas de vida, o el color amarillo se extiende a la panza y las piernas.</li>
        <li><b>Vomita verde</b> o vomita en chorro varias veces.</li>
        <li><b>Moja pocos pañales:</b> después del quinto día, menos de 6 por día.</li>
        <li><b>El ombligo</b> está rojo, hinchado, con pus o mal olor.</li>
        <li><b>Está decaído:</b> muy flojito, no responde como siempre o llora de una forma muy distinta.</li>
        <li><b>Tiene movimientos raros</b> o rígidos que no podés detener.</li>
      </ul>
      <p>Confiá en tu intuición: si sentís que algo no está bien, consultá. Nunca es una exageración.</p>`
  },

  "metodo-canguro": {
    titulo: "El método canguro",
    icono: "🦘",
    html: `
      <p>El método canguro es el contacto piel a piel entre tu bebé y vos (o el otro papá o mamá): el bebé, solo con pañal y gorrito, se apoya en posición vertical sobre el pecho desnudo del adulto, cubierto con una manta o una faja.</p>
      <p><b>Por qué es tan importante en los prematuros:</b></p>
      <ul>
        <li>Ayuda a regular su temperatura, su respiración y su ritmo cardíaco.</li>
        <li>Favorece la producción de leche y la lactancia.</li>
        <li>Lo ayuda a dormir mejor y a ganar peso.</li>
        <li>Fortalece el vínculo y les da tranquilidad a los dos.</li>
      </ul>
      <p><b>Cómo hacerlo:</b> el equipo de neonatología te va a indicar cuándo empezar y cómo acomodarlo con los cables y sondas que tenga. Lo ideal son sesiones largas, de al menos una hora, para que el bebé no tenga que adaptarse a cambios seguidos.</p>
      <p>Usá ropa que se abra adelante, quitate perfumes y, si podés, comé y andá al baño antes de empezar.</p>
      <p>Si en algún momento te sentís insegura, pedí ayuda al equipo. Están para acompañarte.</p>`
  },

  "extraccion-de-leche": {
    titulo: "Extracción y conservación de la leche",
    icono: "🥛",
    html: `
      <p>Si tu bebé no puede tomar el pecho (por ejemplo, porque es prematuro o está internado), extraerte leche te permite alimentarlo y mantener tu producción.</p>
      <p><b>Cuándo empezar:</b> lo antes posible después del parto, idealmente en las primeras horas. Al principio salen solo unas gotas de calostro: son valiosísimas, guardalas.</p>
      <p><b>Con qué frecuencia:</b> cada 2 o 3 horas durante el día y al menos una vez a la noche, unas 8 veces en 24 horas.</p>
      <p><b>Cómo:</b> lavate las manos. Podés hacerlo a mano o con un sacaleches. Un masaje suave en el pecho antes ayuda a que salga la leche.</p>
      <p><b>Cómo conservarla (bebé sano en casa):</b></p>
      <ul>
        <li>A temperatura ambiente: hasta 4 horas.</li>
        <li>En la heladera (no en la puerta): hasta 4 días.</li>
        <li>En el freezer: lo ideal es usarla dentro de los 6 meses.</li>
      </ul>
      <p>Guardala en recipientes limpios con tapa y anotá la fecha. Para usarla, descongelala en la heladera o bajo agua tibia. Nunca en microondas, y no la vuelvas a congelar.</p>
      <p><b>Si tu bebé está internado,</b> seguí las indicaciones del lactario o de neonatología: para los prematuros suelen ser más estrictas.</p>`
  },

  "edad-corregida": {
    titulo: "Qué es la edad corregida",
    icono: "📆",
    html: `
      <p>Cuando un bebé nace antes de tiempo, para seguir su crecimiento y su desarrollo se usa la <b>edad corregida</b>: la edad que tendría si hubiera nacido en la fecha esperada.</p>
      <p><b>Cómo se calcula:</b> a la edad real se le restan las semanas que se adelantó (40 menos las semanas en que nació).</p>
      <p><b>Ejemplo:</b> si tu bebé nació en la semana 32, se adelantó 8 semanas (2 meses). Cuando tenga 4 meses de vida, su edad corregida va a ser de 2 meses. Entonces lo esperable es que haga lo que hace un bebé de 2 meses.</p>
      <p><b>Para qué se usa:</b> para evaluar el peso, la talla, los logros del desarrollo (sonreír, sostener la cabeza, sentarse, caminar) y el momento de empezar con otros alimentos, según te indique el pediatra. En general se usa hasta los 2 años.</p>
      <p><b>Para qué no se usa:</b> las vacunas se aplican según la edad real, desde el día del nacimiento.</p>
      <p>Si usás Crecer de 0 a 5, tenelo en cuenta para seguir las actividades de acuerdo con su edad corregida.</p>`
  }
});
