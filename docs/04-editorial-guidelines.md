# IT Study — Lineamientos editoriales

## 1. Identificación y propósito

- **Proyecto:** IT Study.
- **Documento:** Lineamientos editoriales.
- **Ruta oficial:** `docs/04-editorial-guidelines.md`.
- **Documentos de autoridad, en orden:**
  1. `00-bootstrap-brief.md`;
  2. `docs/00-project-charter.md`;
  3. `docs/01-scope-and-audience.md`;
  4. `docs/02-taxonomy.md`;
  5. `docs/03-content-model.md`.
- **Estado:** lineamientos editoriales iniciales aprobables para orientar autoría y revisión; no constituyen fichas, política completa de fuentes ni contrato operativo por lote.
- **Fecha:** 2026-07-20.

### 1.1 Propósito

Este documento transforma el propósito educativo, la taxonomía y el modelo de contenido aprobados en reglas concretas de redacción, profundidad, extensión, claridad, consistencia y revisión. Su función es permitir que ChatGPT Trabajo, revisores humanos y futuros agentes produzcan lotes con una voz uniforme, contenido reutilizable y suficiente contexto profesional.

Las reglas buscan impedir cuatro desviaciones principales: convertir las fichas en tutoriales, reducirlas a definiciones superficiales, redactarlas como documentación comercial o hacer que su significado dependa de una presentación visual.

### 1.2 Alcance

Este documento define:

- objetivo educativo del texto;
- principios, voz, tono, idioma y terminología;
- profundidad y extensión editorial recomendadas;
- redacción de los campos educativos aprobados;
- orientaciones por familia de contenido;
- tratamiento editorial de ejemplos, comparaciones, escenarios y rutas;
- uso editorial de fuentes y citas;
- manejo de información cambiante e incertidumbre;
- flujo y lista de revisión editorial.

### 1.3 Audiencia del documento

Está dirigido a:

- ChatGPT Trabajo y otros agentes de investigación o autoría;
- revisores editoriales, técnicos y taxonómicos;
- responsables de lotes y aprobación;
- Codex, únicamente para implementar validaciones sin reinterpretar el contenido;
- futuros mantenedores de documentación, inventarios y contratos operativos.

### 1.4 Decisiones editoriales definidas

Se definen la voz común, los límites de profundidad, los rangos de extensión, las reglas de cada campo educativo, los criterios para ejemplos y afirmaciones contextuales, y el tratamiento de términos técnicos, marcas, información cambiante y dudas editoriales.

### 1.5 Materias reservadas

Quedan reservados:

- catálogo, dirección, reciprocidad y cardinalidad final de relaciones: `docs/05-relationship-rules.md`;
- fronteras técnicas entre contenido y presentación: `docs/06-design-boundaries.md`;
- cantidades y cobertura del MVP: `docs/07-mvp-definition.md`;
- severidades, umbrales y aceptación medible: `docs/09-quality-criteria.md`;
- política completa de selección, suficiencia y jerarquía de fuentes: `work/SOURCE-POLICY.md`;
- flujo operativo por lotes: `work/CONTENT-PRODUCTION-CONTRACT.md`;
- contrato de revisión ejecutable: `work/REVIEW-CHECKLIST.md`;
- ejemplos canónicos: `examples/`.

## 2. Objetivo educativo del contenido

El contenido principal debe permitir que una persona, sin especialización previa en el tema:

1. reconozca el término;
2. comprenda qué es;
3. identifique qué tipo de conocimiento representa;
4. lo ubique en su dominio principal y entienda el contexto de dominios secundarios;
5. comprenda qué problema atiende;
6. comprenda por qué existe;
7. reconozca quién lo utiliza o quién interviene;
8. identifique cuándo aparece en un contexto profesional;
9. conozca sus prerrequisitos relevantes;
10. lo relacione con otros conceptos;
11. lo diferencie de términos similares;
12. comprenda ventajas, limitaciones, compromisos e implicaciones generales;
13. lo ubique mediante un ejemplo sencillo.

El objetivo general es **reconocimiento y comprensión contextual**, no dominio práctico. La persona debe poder seguir una conversación, formular preguntas informadas y decidir qué estudiar después. No se espera que pueda implementar, configurar, operar, auditar o certificar el elemento únicamente con la ficha.

## 3. Principios editoriales generales

1. **Contexto antes que implementación.** Explicar primero qué es, por qué existe, qué problema atiende y dónde encaja.
2. **Claridad sin perder precisión.** Simplificar la expresión, no el significado. Toda simplificación debe conservar límites y condiciones relevantes.
3. **Una idea principal por sección.** Cada apartado responde una pregunta editorial identificable y evita mezclar definición, historia, procedimiento y opinión.
4. **Relaciones antes que listas aisladas.** Las enumeraciones deben explicar por qué los elementos se conectan y qué aporta esa conexión.
5. **Neutralidad tecnológica.** Separar capacidad, especificación, implementación, proveedor, marca y oferta comercial.
6. **Profundidad controlada.** Incluir lo necesario para comprender conversaciones y decisiones generales; derivar el detalle operativo a referencias futuras.
7. **Lenguaje profesional y accesible.** Escribir para una audiencia multidisciplinaria sin infantilizarla ni asumir especialización.
8. **Definición antes que opinión.** Establecer el significado y el contexto antes de presentar valoraciones, controversias o preferencias.
9. **Evidencia antes que afirmación.** Respaldar hechos verificables, atribuciones institucionales, versiones, historia, adopción y afirmaciones controvertidas.
10. **Explicación duradera antes que novedad.** Priorizar fundamentos, capacidades y relaciones que sobrevivan a cambios de proveedor o versión.
11. **Consistencia terminológica.** Usar el mismo término para el mismo significado y respetar `canonicalName`, `englishName` y `aliases`.
12. **Ausencia de contenido promocional.** No vender, recomendar compras ni reproducir superlativos de proveedores.
13. **Separación absoluta entre contenido y diseño.** El significado debe conservarse sin HTML de presentación, estilos, iconos, posición o componentes.
14. **Utilidad multidisciplinaria.** Explicar la función del elemento dentro y fuera de su dominio hogar cuando el contexto transversal sea sustantivo.
15. **Respeto del modelo aprobado.** No inventar campos, tipos, estados, IDs, relaciones ni valores de vocabularios controlados para resolver una dificultad editorial.
16. **Ausencia significativa.** Omitir campos opcionales que no aplican; no rellenarlos con texto genérico, listas vacías o reformulaciones de otro campo.

## 4. Voz y tono

### 4.1 Voz adoptada

La voz de IT Study es clara, profesional, didáctica, neutral, directa, respetuosa y técnicamente precisa. Explica a personas no especializadas sin asumir ignorancia, evita exhibir complejidad innecesaria y reconoce los límites del conocimiento disponible.

### 4.2 Reglas de tono

- Preferir verbos concretos y oraciones declarativas.
- Explicar la jerga necesaria en la primera aparición.
- Usar calificadores como “en este contexto”, “puede” o “suele” cuando la afirmación dependa de condiciones.
- Evitar construcciones excesivamente académicas cuando una expresión directa conserve el significado.
- Eliminar frases de relleno como “cabe destacar”, “es importante mencionar” o “como todos sabemos” si no añaden información.
- No usar tono publicitario, llamadas a la acción ni superlativos no demostrados.
- No presentar una opinión, convención comunitaria o decisión de IT Study como hecho universal.
- Evitar metáforas que oculten diferencias relevantes. Si se usa una analogía, declarar su alcance y límite.
- No afirmar que una tecnología es “mejor”, “más moderna” o “superior” sin dimensión, contexto, evidencia y compromisos.

### 4.3 Ejemplos breves

| No aceptable | Aceptable |
|---|---|
| “Kubernetes es la mejor solución para cualquier aplicación moderna.” | “Kubernetes coordina cargas en contenedores y puede ser adecuado cuando se requieren capacidades de orquestación; también introduce complejidad operativa.” |
| “La observabilidad te permite verlo todo.” | “La observabilidad aporta evidencia para razonar sobre el estado interno de un sistema, pero depende de instrumentación y señales adecuadas.” |
| “Un API Gateway es como un portero mágico.” | “Un API gateway concentra determinadas funciones de entrada para consumidores de APIs; no sustituye la lógica ni la seguridad interna de los servicios.” |
| “Obviamente, todo equipo serio usa CI/CD.” | “La integración y la entrega continuas pueden reducir el riesgo de cambios al acortar ciclos de integración y automatizar verificaciones.” |

## 5. Idioma y terminología

### 5.1 Idioma principal

El cuerpo se redactará en español. Se conservará el término inglés cuando sea la forma profesional predominante, no exista traducción asentada o traducirlo introduzca ambigüedad. La explicación circundante continuará en español.

### 5.2 Nombre canónico, nombre inglés y alias

- `canonicalName` contiene la denominación normalizada adoptada por IT Study.
- `englishName` registra el nombre inglés cuando sea diferente, relevante o predominante.
- `aliases` registra siglas, abreviaturas, traducciones frecuentes, grafías y nombres históricos equivalentes.
- El cuerpo emplea preferentemente el nombre canónico; puede introducir el nombre inglés para reconocimiento profesional y búsqueda.
- Una traducción o sigla no crea una entrada duplicada.

### 5.3 Traducciones y préstamos

- Usar traducciones asentadas cuando sean claras: “integración continua” para *continuous integration*.
- Conservar formas como `backend`, `frontend` o `Site Reliability Engineering` cuando la traducción no sea predominante o pueda confundir.
- No inventar traducciones literales. Ante falta de traducción estable, mantener el término original y explicar su significado.
- Evitar anglicismos innecesarios cuando exista un equivalente español claro y profesional: “despliegue” en lugar de *deployment*, salvo que el término inglés sea objeto de la entrada o necesario como alias.
- Aplicar cursivas a un extranjerismo ocasional en prosa solo cuando ayude a distinguirlo; no aplicarlas mecánicamente a nombres canónicos, siglas, código o marcas.

### 5.4 Acrónimos, siglas y abreviaturas

1. Desarrollar un acrónimo la primera vez que aparezca en el cuerpo: “interfaz de programación de aplicaciones (API)”.
2. Usar después la sigla si mejora legibilidad.
3. Registrar la sigla y, cuando proceda, la expansión en `aliases`.
4. No desarrollar una sigla en cada sección si la entrada se lee como unidad; el `summary` debe seguir siendo autónomo y puede requerir desarrollo propio.
5. Respetar las mayúsculas reconocidas: API, HTTP, ISO, SRE. No pluralizar siglas con apóstrofo; escribir “las API” o “varias API”.

### 5.5 Mayúsculas, singular y plural

- Usar minúscula en conceptos comunes, prácticas, roles y disciplinas, salvo inicio de oración.
- Respetar grafía oficial de marcas, productos, estándares y nombres propios.
- Preferir singular para entidades individuales y plural para familias convencionalmente nombradas, como “bases de datos” o “redes”.
- No usar mayúsculas para conferir importancia editorial.

### 5.6 Marcas, productos, estándares y versiones

- No usar una marca como sinónimo de una capacidad general: “orquestación de contenedores” no equivale a “Kubernetes”.
- Identificar proveedor o emisor cuando ayude a comprender gobierno, alcance o vigencia.
- Escribir nombres de estándares conforme a su designación oficial y registrar versión cuando cambie el significado o la vigencia.
- Evitar versiones efímeras en el título y en la explicación general. Incluirlas cuando la entrada represente una edición conceptualmente distinta o una afirmación dependa de ella.
- No añadir símbolos de marca de manera rutinaria; hacerlo solo si una exigencia legal o de identificación lo justifica.

### 5.7 Polisemia y alias históricos

- Declarar el contexto de un término polisémico antes de desarrollar su significado.
- Usar una entrada con `senses[]` cuando las acepciones compartan núcleo conceptual.
- Usar entradas calificadas solo cuando las definiciones o relaciones sean incompatibles, conforme al modelo.
- Registrar nombres históricos como alias `historical`, con periodo o nota cuando resulte útil.
- Si la diferencia es solo nominal, tratarla como alias; no crear una comparación.

## 6. Nivel de profundidad

El valor de `knowledgeLevel` expresa la profundidad editorial objetivo, no dificultad, seniority, madurez, longitud ni competencia práctica.

### 6.1 `recognition`

- **Objetivo:** permitir identificar rápidamente el elemento y ubicarlo.
- **Preguntas mínimas:** ¿qué es?, ¿qué tipo representa?, ¿cuál es su dominio?, ¿qué problema general atiende?
- **Profundidad esperada:** definición breve, resumen autónomo, clasificación y contexto indispensable.
- **Contenido permitido:** una diferencia esencial, un ejemplo mínimo y prerrequisitos solo si son necesarios para no inducir error.
- **Excede el nivel:** historia detallada, variantes, arquitectura interna, procedimientos, catálogos de herramientas y evaluación extensa de compromisos.
- **Uso típico:** términos de apoyo, entradas introductorias o candidatos cuya cobertura inicial solo necesita reconocimiento.

### 6.2 `contextual-understanding`

- **Objetivo:** comprender por qué existe el elemento, cuándo aparece, quién interviene y qué implica.
- **Preguntas:** además de las anteriores, ¿para qué existe?, ¿cuándo se usa?, ¿quién lo utiliza?, ¿con qué se relaciona?, ¿con qué se confunde?, ¿qué ventajas, límites y consecuencias tiene?
- **Profundidad esperada:** suficiente para seguir una conversación multidisciplinaria y reconocer decisiones contextuales.
- **Contenido permitido:** contexto profesional, ejemplos breves, prerrequisitos, confusiones, ventajas, limitaciones, implicaciones y referencias relevantes.
- **Excede el nivel:** tutorial paso a paso, configuración, comandos extensos, laboratorio, manual operativo o preparación completa para certificación.
- **Uso típico:** nivel predeterminado de las fichas principales de IT Study.

### 6.3 `future-expanded-reference`

- **Objetivo:** reservar una ampliación futura de referencia para temas cuyo contexto necesite mayor desarrollo sin alterar la ficha base.
- **Preguntas:** las de comprensión contextual, más variantes conceptuales, evolución, decisiones o marcos de aplicación necesarios para consulta ampliada.
- **Profundidad esperada:** referencia explicativa organizada y selectiva; no formación práctica exhaustiva.
- **Contenido permitido:** secciones adicionales justificadas, comparaciones derivadas, evolución conceptual y referencias especializadas.
- **Excede el nivel:** curso, tutorial integral, runbook, laboratorio, documentación completa de producto o ruta de certificación.
- **Uso típico:** posibilidad futura; no autoriza ampliar automáticamente el contenido principal.

La expresión `extended-reference` no es un valor aprobado del modelo. Cuando aparezca en solicitudes o notas, deberá interpretarse como referencia descriptiva al nivel aprobado `future-expanded-reference` o registrarse como discrepancia; no debe persistirse como enum.

### 6.4 Cuándo justificar mayor profundidad

Una entrada puede requerir mayor profundidad cuando su significado cambia sustancialmente por contexto, es prerrequisito de muchas entradas, concentra confusiones de alto impacto, representa una decisión transversal o no puede delimitarse con precisión dentro del nivel actual. La popularidad, el interés comercial o la disponibilidad de material no bastan. Toda ampliación debe conservar el objetivo de comprensión contextual y registrarse conforme al gobierno del modelo.

## 7. Extensión editorial

Los rangos orientan la edición y futuras advertencias automáticas. No obligan a llenar campos innecesarios. “Flexible” indica que superar el rango recomendado requiere revisión; “máximo con justificación” exige una razón registrada y revisión editorial. Los conteos de texto se expresan en palabras, salvo `title`.

### 7.1 Campos y listas

| Elemento | Rango recomendado | Límite flexible | Máximo con justificación |
|---|---:|---:|---:|
| `title` | 2–8 palabras y hasta 60 caracteres | 10 palabras o 80 caracteres | 12 palabras o 100 caracteres |
| `summary` | 18–40 palabras | 55 | 70 |
| `definition` | 35–90 palabras | 130 | 180 |
| `problemSolved` | 20–60 palabras | 90 | 130 |
| `purpose` | 15–45 palabras | 70 | 100 |
| Cada `contextNotes.note` | 20–70 palabras | 100 | 140 |
| Cada ejemplo | 35–100 palabras | 150 | 220 |
| Cada ventaja | 8–30 palabras | 45 | 60 |
| Cada limitación | 8–35 palabras | 50 | 70 |
| Cada nota de relación | 10–40 palabras | 60 | 90 |
| Cada elemento de alcance incluido | 2–15 palabras | 25 | 40 |
| Cada elemento de alcance excluido | 2–18 palabras | 30 | 45 |

Recomendación ordinaria: uno o dos ejemplos; dos a cinco ventajas o limitaciones cuando ambos campos apliquen; y únicamente notas contextuales o relacionales que aporten una distinción real. La cantidad final no se fuerza por simetría.

### 7.2 Estructuras completas

| Estructura | Rango recomendado | Límite flexible | Máximo con justificación |
|---|---:|---:|---:|
| Ficha `recognition` | 180–450 palabras | 600 | 800 |
| Ficha `contextual-understanding` | 450–1,000 palabras | 1,300 | 1,700 |
| Referencia `future-expanded-reference` | 900–1,800 palabras | 2,300 | 3,000 |
| Comparación | 500–1,200 palabras | 1,600 | 2,200 |
| Escenario | 600–1,400 palabras | 1,900 | 2,600 |
| Ruta de aprendizaje | 500–1,200 palabras | 1,600 | 2,200 |

Los conteos incluyen cuerpo educativo, no frontmatter ni registros normalizados de fuentes. Una estructura que exceda el máximo debe dividirse, reducir duplicación o justificar por qué una unidad mayor mejora comprensión.

### 7.3 Excepciones válidas

Pueden justificar una extensión mayor: polisemia incompatible de comprimir, estándar con límites normativos relevantes, comparación con más de dos entradas y dimensiones necesarias, escenario multidisciplinario que perdería causalidad al reducirse, o dominio que requiere alcance incluido y excluido amplio. No justifican extensión: repetir definiciones, acumular ejemplos equivalentes, copiar fuentes, narrar historia accesoria o documentar implementación.

## 8. Reglas para `summary`

El resumen debe funcionar de forma independiente en búsqueda, resultados compactos y vistas derivadas. Debe identificar rápidamente la naturaleza del elemento y su función o contexto principal.

Reglas:

- comenzar por la clase o naturaleza del elemento cuando sea útil;
- evitar repetir literalmente el título;
- excluir historia, implementación, listas, detalles secundarios y citas extensas;
- usar lenguaje accesible y neutral;
- no introducir afirmaciones promocionales;
- no intentar sustituir la definición completa;
- desarrollar acrónimos si el resumen podría leerse aislado y la sigla no es universal para la audiencia.

| Calidad | Ejemplo |
|---|---|
| Aceptable | “Práctica que integra cambios de software con frecuencia y ejecuta verificaciones automáticas para detectar problemas tempranamente.” |
| Deficiente | “Integración continua: la integración continua es cuando haces integración de manera continua y moderna.” |
| Deficiente | “La revolucionaria práctica que acelera drásticamente a todos los equipos.” |

## 9. Reglas para `definition`

La definición responde **qué es** el elemento y cuál es su frontera semántica. Debe:

- indicar su naturaleza con el tipo de conocimiento correcto;
- expresar el significado esencial antes de historia, beneficios o implementación;
- evitar definiciones circulares y dependencia de una marca;
- distinguirse de propósito y problema resuelto;
- declarar contexto en términos polisémicos;
- mencionar límites semánticos cuando evitarlos produciría una clasificación errónea.

Ejemplos orientativos, no fichas:

| Tipo | Definición editorial adecuada |
|---|---|
| Concepto | “La idempotencia es una propiedad por la que repetir una operación conserva el mismo efecto observable que ejecutarla una vez, dentro del contexto definido.” |
| Rol | “El responsable de incidentes es un rol temporal que coordina decisiones y comunicación durante la atención de un incidente.” |
| Práctica | “La revisión de código es una práctica en la que una o más personas evalúan un cambio antes de integrarlo.” |
| Estándar | “WCAG es un estándar del W3C que establece criterios verificables para la accesibilidad del contenido web.” |
| Herramienta | “Git es una herramienta de control de versiones distribuido que registra y relaciona cambios en archivos.” |
| Plataforma | “Una plataforma interna ofrece capacidades reutilizables y autoservicio a equipos que construyen u operan productos digitales.” |

No iniciar con “fue creado en…”, “sirve para…”, “es una solución líder…” o instrucciones de uso. Esa información pertenece, si aplica, a otros campos.

## 10. `problemSolved`, `purpose`, `definition` y `contextNotes`

| Campo | Pregunta | Obligación general | Regla contra duplicación |
|---|---|---|---|
| `definition` | ¿Qué es? | Obligatoria para entidades y taxonomía | Describe naturaleza y frontera, no beneficio ni intención |
| `problemSolved` | ¿Qué dificultad, necesidad o condición atiende? | Condicional para soluciones e implementaciones; opcional en otros tipos | Formula el problema previo o recurrente, no la acción del elemento |
| `purpose` | ¿Para qué existe o qué función cumple dentro del contexto? | Obligatorio salvo fuente | Expresa resultado buscado o función, no redefine la naturaleza |
| `contextNotes` | ¿Qué cambia según comunidad, región, acepción o situación? | Opcional | Añade una variación localizada, no un cajón de contenido sobrante |

### 10.1 Ejemplo comparativo

- **Definición:** “Un balanceador de carga es un componente que distribuye solicitudes entre varios destinos disponibles.”
- **Problema resuelto:** “Evita que todo el tráfico dependa de un único destino y permite repartir demanda.”
- **Propósito:** “Favorecer capacidad, disponibilidad o utilización equilibrada según la estrategia configurada.”
- **Nota contextual:** “En redes, aplicaciones y plataformas cloud, el balanceo puede operar en capas y con criterios diferentes.”

### 10.2 Omisión y obligatoriedad

`problemSolved` puede omitirse en una publicación de referencia, un rol o una métrica cuando formular un problema resulte artificial. En patrones, herramientas, plataformas, servicios, productos y técnicas orientadas a resolver una necesidad, debe tratarse como condicionalmente obligatorio. `contextNotes` se omite si no existe variación útil. `purpose` no se rellena con “existir para ser usado”; debe expresar una función real.

### 10.3 Evitar antropomorfismo

No atribuir intención humana a una propiedad o modelo. En lugar de “la consistencia eventual quiere que todos los nodos coincidan”, escribir “la consistencia eventual describe un modelo en el que las réplicas pueden converger después de un intervalo”. Para elementos cuyo valor dependa del contexto, usar “puede contribuir”, “se utiliza para” o “resulta útil cuando”, y declarar condiciones.

## 11. Contexto profesional

La explicación contextual debe aclarar, según corresponda:

- cuándo aparece el término y qué situación lo vuelve relevante;
- qué equipos, roles o consumidores intervienen;
- qué decisiones se relacionan con él;
- qué artefactos puede producir, modificar o consumir;
- qué consecuencias generales puede tener su adopción, ausencia o uso incorrecto;
- por qué el dominio principal es su hogar;
- qué aportan los dominios secundarios sin duplicar la ficha.

El contexto se redacta como explicación causal o situacional, no como catálogo de enlaces. Debe ayudar a entender “qué ocurre alrededor” del elemento. Las relaciones técnicas, sus nombres y cardinalidades se almacenarán conforme a `docs/05-relationship-rules.md`; esta sección no anticipa ese catálogo.

## 12. Prerrequisitos y progresión

La redacción debe distinguir:

- **prerrequisito indispensable:** sin él, la definición o decisión central no puede comprenderse correctamente;
- **conocimiento previo recomendable:** reduce esfuerzo o añade contexto, pero no bloquea la comprensión básica;
- **concepto relacionado:** amplía o contrasta el tema sin precedencia pedagógica;
- **siguiente paso sugerido:** tema que profundiza o aplica lo aprendido después.

Reglas:

- explicar por qué un conocimiento previo es necesario o útil;
- no convertir toda relación conceptual en prerrequisito;
- evitar cadenas artificiales basadas en orden académico tradicional o preferencia del autor;
- no exigir conocimientos que la propia ficha puede explicar brevemente;
- preferir el prerrequisito mínimo que evita una interpretación errónea;
- no definir aquí claves finales de relación; usar la explicación editorial y los campos aprobados de forma provisional conforme al modelo.

## 13. Ejemplos educativos

### 13.1 Criterios de un buen ejemplo

Un ejemplo debe aclarar una idea específica, ser breve, reconocible y proporcional al nivel. Debe mostrar contexto sin convertirse en tutorial; declarar supuestos relevantes; evitar dependencia innecesaria de una marca; y no presentar una implementación como universal.

Los ejemplos deben diferenciarse de la definición, evitar precios, versiones o datos volátiles y señalar el límite de una analogía cuando pueda inducir una inferencia falsa.

### 13.2 Tipos de ejemplo

- **Conceptual:** muestra una propiedad o distinción abstracta.
- **Profesional:** ubica el término en una conversación o decisión de trabajo.
- **Técnico simplificado:** ilustra comportamiento con pseudodatos o secuencia breve, sin instrucciones ejecutables extensas.
- **Organizacional:** muestra colaboración, responsabilidades o gobierno sin universalizar organigramas.
- **Comparativo:** aplica la misma situación a dos elementos para revelar una diferencia.
- **Negativo o contraejemplo:** muestra un caso que parece cumplir la definición, pero no lo hace.

### 13.3 Ejemplos aceptables y deficientes

| Evaluación | Texto |
|---|---|
| Aceptable | “Si un cliente repite la misma solicitud después de perder la respuesta, una operación idempotente conserva el estado final previsto. Esto no garantiza que toda la transacción sea atómica.” |
| Aceptable | “Un equipo puede usar una métrica de latencia para observar tiempos y convertirla en indicador cuando define cómo interpretarla frente a un objetivo.” |
| Deficiente | “Instala la herramienta, ejecuta diez comandos, copia este archivo y despliega el clúster.” |
| Deficiente | “Un microservicio es como una habitación independiente”; la analogía omite datos, comunicación, operación y límites de autonomía. |

## 14. Ventajas, limitaciones e implicaciones

### 14.1 Reglas generales

- Redactar cada ventaja o limitación dentro de un contexto identificable.
- Usar “puede”, “favorece” o “reduce” cuando el resultado dependa de condiciones.
- No presentar una ventaja como garantía.
- No confundir limitación con defecto: una limitación puede ser una consecuencia inherente del enfoque.
- Separar limitación inherente, riesgo contextual y mala implementación.
- Evitar listas universales o copiadas entre fichas.
- Equilibrar beneficios y costos cuando la elección implique compromisos.
- No comparar sin una dimensión explícita.
- Evitar lenguaje de venta, miedo o desacreditación.

### 14.2 Distinciones

- `advantages`: beneficios potenciales bajo condiciones declaradas.
- `limitations`: fronteras, costos o condiciones que restringen aplicabilidad.
- **Trade-off o compromiso:** mejora una dimensión mientras introduce costo o reducción en otra.
- **Riesgo:** resultado adverso incierto asociado a contexto, decisión o implementación.
- **Implicación:** consecuencia general que no es por sí misma ventaja ni limitación.

Ejemplo: “Separar servicios puede permitir despliegues independientes” es una ventaja condicionada; “aumenta la coordinación de red y operación” es un compromiso; “una observabilidad insuficiente puede dificultar el diagnóstico” es un riesgo contextual; “requiere definir límites de responsabilidad” es una implicación.

## 15. Confusiones frecuentes

Una nota de confusión debe explicar:

1. por qué ocurre la confusión;
2. qué comparten los términos;
3. cuál es la diferencia principal;
4. cuándo importa distinguirlos;
5. qué afirmación simplista debe evitarse.

Crear una estructura `comparison` cuando la confusión sea recurrente, afecte decisiones, requiera varias dimensiones equivalentes o involucre al menos dos entradas existentes. Basta una nota breve cuando una sola frontera resuelva la duda. Si las denominaciones representan el mismo significado, el problema es un alias; no corresponde comparación. Si el término posee acepciones compatibles o incompatibles, aplicar las reglas de polisemia del modelo.

Este documento no define ni materializa la relación técnica `confused-with`; esa decisión pertenece a `docs/05-relationship-rules.md`.

## 16. Redacción por familia de contenido

### 16.1 Personas y capacidades

#### Rol

Definir la función contextual, su alcance, responsabilidades típicas, colaboración y límites. No convertirlo en título contractual ni asumir dedicación exclusiva.

#### Puesto

Explicar que es una designación organizacional que puede agrupar roles, competencias y nivel. Declarar que títulos, seniority y alcance varían entre organizaciones.

#### Competencia

Describir una capacidad demostrable mediante resultados y contexto. No confundir conocimiento de un tema con capacidad para aplicarlo, ni años de experiencia con evidencia automática de competencia.

#### Responsabilidad estructurada

Redactar el resultado u obligación por la que alguien responde, sin convertirla en identidad profesional. Una ficha propia es excepcional y requiere reutilización transversal.

Debe evitarse presentar puestos como universales, asumir un mismo organigrama, convertir responsabilidades en identidades o equiparar experiencia y competencia.

### 16.2 Ideas y orientaciones

Para concepto, principio, paradigma, orientación conceptual y modelo, explicar nivel de abstracción, intención, alcance, límites y diferencia frente a elementos cercanos.

- Un **concepto** expresa una idea con significado propio.
- Un **principio** orienta decisiones, pero no prescribe pasos.
- Un **paradigma** condiciona cómo se concibe una familia de soluciones.
- Una **orientación conceptual** reúne valores y supuestos amplios.
- Un **modelo** representa una realidad con un propósito y límites.

No atribuir a un modelo toda la realidad ni presentar un principio como regla mecánica sin excepciones.

### 16.3 Formas de trabajo

- **Metodología:** explicar sistema, métodos, reglas y justificación.
- **Marco de trabajo:** explicar estructura adaptable, elementos y grado de prescripción.
- **Proceso:** describir entradas, actividades, resultados y controles sin convertirlo en procedimiento obligatorio universal.
- **Práctica:** presentar forma recurrente de trabajo y resultado esperado.
- **Técnica:** resumir tarea, procedimiento y condiciones sin desarrollar un tutorial.

No usar estos términos como equivalentes. La clasificación se decide por naturaleza, no por la etiqueta promocional o coloquial de una comunidad.

### 16.4 Soluciones y estructuras

Para patrón, antipatrón y estilo arquitectónico, incluir problema recurrente, contexto, fuerzas o restricciones, solución general, consecuencias, límites y alternativas relevantes.

- Un patrón no es código obligatorio ni receta universal.
- Un antipatrón debe explicar consecuencias adversas y alternativas, sin convertir el nombre en insulto.
- Un estilo arquitectónico organiza elementos e interacciones a alto nivel; no equivale a una implementación o diagrama específico.

### 16.5 Especificaciones e implementaciones

Para protocolo, estándar, tecnología, herramienta, plataforma, servicio y producto, distinguir:

- capacidad general;
- especificación o reglas;
- implementación;
- proveedor y marca;
- consumidores;
- contexto de uso;
- versión cuando cambie significado o vigencia.

El tipo se decide según el sentido principal; `contextualTypes` registra sentidos secundarios compatibles. “Tecnología” solo se usa cuando no existe un tipo más preciso.

### 16.6 Resultados y medición

- **Artefacto:** explicar qué representa, quién lo produce o consume y qué información conserva.
- **Métrica:** indicar propiedad medida, cálculo o unidad cuando aplique y límites de interpretación.
- **Indicador:** explicar qué métricas interpreta, para qué decisión y bajo qué umbrales contextuales.
- **Objetivo contextual:** describir estado deseado, criterio, meta y periodo dentro de la estructura que lo contiene.

No inferir automáticamente calidad, éxito, causalidad o desempeño individual a partir de una métrica aislada.

### 16.7 Acreditación y referencia

- **Certificación:** identificar emisor, alcance, objeto acreditado, evaluación y vigencia sin presentarla como garantía absoluta de competencia.
- **Publicación o cuerpo de conocimiento:** explicar editor, mantenimiento, alcance y función de referencia; no confundirla con credencial.

No incluir precios, fechas de examen, calendarios comerciales o campañas ordinarias salvo que sean objeto histórico justificado y respaldado.

## 17. Herramientas, plataformas, productos y marcas

El contenido comercial debe:

1. explicar primero la capacidad general y el problema;
2. identificar claramente proveedor y marca cuando aplique;
3. mantener tono neutral y verificable;
4. evitar mensajes promocionales, llamadas a compra y comparaciones de precio;
5. no afirmar liderazgo de mercado sin fuente, fecha, región, dimensión y razón pedagógica;
6. centrarse en capacidades duraderas y límites;
7. indicar cuándo la información puede cambiar;
8. distinguir herramienta, plataforma, servicio y producto según el contexto;
9. usar `contextualTypes` para sentidos secundarios compatibles;
10. evitar priorizar una entrada únicamente por popularidad.

Una entrada comercial se justifica por valor contextual, relevancia profesional amplia, condición de referencia frecuente o necesidad de comprender una capacidad. No convierte a IT Study en catálogo de alternativas ni documentación de proveedor.

## 18. Tecnologías emergentes

La redacción debe:

- declarar madurez, adopción o estabilidad terminológica con precisión proporcional a la evidencia;
- separar hechos observables de expectativas, previsiones y afirmaciones de proveedores;
- indicar cuando el vocabulario todavía no es uniforme;
- relacionar la novedad con fundamentos existentes y con el problema duradero que aborda;
- evitar reorganizar la taxonomía por tendencias;
- utilizar fuentes actuales y confiables y registrar necesidad de revisión;
- marcar `stability: emerging`, `verificationStatus` y notas de incertidumbre cuando corresponda;
- evitar “revolucionario”, “disruptivo”, “definitivo” o equivalentes, salvo que sean objeto de análisis atribuido.

La falta de consenso no impide explicar el tema; obliga a delimitar lo confirmado, lo debatido y lo todavía incierto.

## 19. Información cambiante

- **Versiones:** mencionarlas cuando una afirmación dependa de ellas; evitar convertir cada versión menor en entrada.
- **Estándares actualizados:** indicar emisor, designación, versión, vigencia y reemplazo cuando aplique.
- **Productos, herramientas y servicios:** centrar la explicación en capacidades y consumidores duraderos; fechar verificaciones sensibles al cambio.
- **Prácticas emergentes:** distinguir adopción observada de promesas o pronósticos.
- **Información deprecada:** conservar contexto histórico, fecha, motivo y sustitución si existe; no presentarla como vigente.

Usar los campos aprobados `stability`, `reviewedAt`, `reviewDueAt`, `validFrom`, `validUntil`, `verificationStatus`, `deprecated`, `deprecatedAt`, `deprecationReason` y `replacedBy`. Este documento no establece frecuencias ni calendario definitivo de revisión.

## 20. Fuentes y citas dentro del contenido

### 20.1 Cuándo respaldar

Requieren respaldo, entre otras:

- definiciones o clasificaciones atribuidas a organismos;
- requisitos normativos y contenido de estándares;
- fechas, versiones, sustituciones e historia;
- cifras, adopción, rendimiento o liderazgo;
- afirmaciones controvertidas, emergentes o dependientes de proveedor;
- relaciones causales y comparaciones empíricas;
- capacidades actuales de productos o servicios.

Las explicaciones sintéticas basadas en conocimiento estable también deben derivarse de fuentes registradas, aunque no necesiten una cita en cada oración.

### 20.2 Estilo editorial

- Las fuentes completas residen en registros normalizados y se referencian mediante IDs `source-*` en `sources` o `sourceIds`.
- El cuerpo puede incluir atribución cuando sea pedagógicamente relevante: “NIST define…”, “En el marco de Scrum…”.
- No llenar cada frase con citas si varias oraciones forman una síntesis respaldada por los mismos registros.
- Distinguir “La organización X define…” de “En IT Study se clasifica como…”.
- Al citar estándares, indicar organismo, designación y versión cuando la diferencia sea relevante.
- Parafrasear con fidelidad y conservar el alcance de la fuente.
- Evitar citas largas y no copiar extensamente textos protegidos.
- Una definición externa no se presenta como universal cuando existe diversidad terminológica.
- Ante fuentes contradictorias, exponer el punto de desacuerdo, autoridad, fecha y contexto; no fusionarlas en una certeza artificial.
- Marcar incertidumbre explícita y conservar `verificationStatus: uncertain` cuando no pueda resolverse.
- Atribuir las clasificaciones propias con fórmulas como “En IT Study se clasifica como…”.

Este apartado regula el uso editorial de evidencia; no sustituye la jerarquía, suficiencia, diversidad y selección que definirá `work/SOURCE-POLICY.md`.

## 21. Comparaciones

Toda estructura `comparison` debe:

- declarar `comparisonReason` y la confusión o decisión que justifica comparar;
- usar dimensiones equivalentes y criterios explícitos;
- explicar similitudes antes de exagerar diferencias;
- distinguir diferencias de alcance, propósito, mecanismo o contexto;
- evitar un ganador general;
- separar elección contextual de superioridad;
- referenciar entradas canónicas existentes por ID;
- no copiar definiciones completas;
- indicar cuándo elegir, utilizar o reconocer cada elemento;
- incluir errores frecuentes relevantes;
- usar dos o más entradas solo si la comparación aporta claridad.

No comparar por mera semejanza nominal ni mezclar dimensiones incompatibles. Una tabla es válida como estructura semántica Markdown, pero su significado no debe depender de color, posición o iconos.

## 22. Escenarios

Un `scenario` debe:

1. declarar objetivo educativo;
2. establecer contexto, situación inicial y supuestos;
3. identificar participantes y dominios;
4. mostrar colaboración multidisciplinaria;
5. presentar una secuencia comprensible;
6. incluir decisiones, opciones ilustrativas y consecuencias;
7. referenciar conceptos y artefactos existentes por ID;
8. distinguir narración ilustrativa de procedimiento obligatorio;
9. evitar instrucciones peligrosas, credenciales, datos sensibles o detalle operativo innecesario;
10. ajustar complejidad a `introductory`, `intermediate` o `advanced-contextual`;
11. cerrar con resultado y aprendizaje.

Un escenario puede simplificar la realidad si declara supuestos y no elimina una consecuencia necesaria para entender el tema. No debe presentarse como política, runbook o única forma correcta de actuar.

## 23. Rutas de aprendizaje

Una `learning-path` debe:

- declarar audiencia, `startingLevel` y objetivo;
- establecer resultados esperados observables en reconocimiento o comprensión;
- usar entradas existentes por ID;
- justificar el orden mediante `purposeInPath`;
- distinguir elementos obligatorios y opcionales;
- declarar prerrequisitos reales;
- incluir puntos de verificación;
- definir criterios de finalización;
- evitar copiar definiciones o contenido de las fichas;
- no prometer competencia profesional completa si solo ofrece contexto.

Los puntos de verificación deben comprobar que la persona puede reconocer, explicar, diferenciar o ubicar conceptos. No deben introducir laboratorios obligatorios salvo que una futura ampliación autorizada cambie expresamente el alcance.

## 24. Dominios, subdominios y disciplinas

### 24.1 Dominios

Cada dominio debe explicar definición, propósito, alcance incluido, alcance excluido, criterios de pertenencia, vecinos y solapamientos. La redacción debe justificar su familia coherente de problemas y capacidades, no describir un departamento o menú.

### 24.2 Subdominios

Cada subdominio pertenece a un solo `parentDomain`, delimita una partición recurrente y explica criterios de pertenencia. Sus aplicaciones externas se expresan mediante contexto o relaciones, no mediante múltiples padres.

### 24.3 Disciplinas transversales

Una disciplina no es tercer nivel. Debe declarar dominio hogar cuando sea razonable, dominios de aplicación, alcance transversal y regla de no duplicación. No se copia su definición completa en cada dominio donde aplica.

### 24.4 Áreas editoriales

Un área editorial agrupa contenido para orientación o recorrido y no concede pertenencia taxonómica. Su texto debe explicar el criterio curatorial y nunca presentarla como nivel canónico.

La jerarquía aprobada permanece `dominio > subdominio`. Los solapamientos deben explicarse con una frontera útil, no eliminarse mediante duplicación.

## 25. Inclusión, exclusión y neutralidad

Antes de producir una ficha, confirmar que el término aporta valor contextual, tiene significado autónomo, puede respaldarse y cabe en la profundidad del proyecto. Excluir, aplazar o tratar como alias, mención o ejemplo cuando sea:

- demasiado específico;
- una variante menor;
- duplicado semántico;
- una versión efímera;
- principalmente promocional;
- local de una empresa o vacante;
- un producto sin valor contextual suficiente;
- imposible de respaldar con fuentes adecuadas;
- dependiente de implementación práctica excesiva;
- ambiguo sin decisión editorial;
- ajeno al lote o a la cobertura autorizada.

Una excepción o candidato pendiente no recibe ficha definitiva. Debe conservarse en el mecanismo de candidatos o decisiones que corresponda, con motivo, evidencia disponible, clasificación provisional explícita y asunto por resolver. No se inventan tipo, dominio o relaciones para hacerlo encajar.

## 26. Accesibilidad cognitiva y legibilidad

- Preferir oraciones de una idea principal; dividir las que acumulen condiciones o subordinadas.
- Mantener párrafos ordinarios de dos a cinco oraciones y evitar bloques excesivamente densos.
- Usar encabezados jerárquicos, descriptivos y en orden; no saltar niveles por apariencia.
- Emplear listas para elementos paralelos, no para fragmentar una explicación causal.
- Desarrollar acrónimos y reducir ambigüedad mediante sujetos explícitos.
- Usar lenguaje inclusivo y profesional sin asumir género, región, estructura familiar o capacidad.
- Elegir ejemplos culturalmente comprensibles y evitar referencias locales innecesarias.
- Escribir para lectura en dispositivos pequeños: párrafos breves, tablas acotadas y frases autónomas.
- No depender de color, iconos, orientación espacial o disposición para transmitir significado.
- Conservar sentido al convertir Markdown a web, documento, audio, texto plano u otros formatos.
- Definir términos especializados antes de utilizarlos para explicar otros.

Estas reglas no definen componentes visuales ni comportamiento de interfaz.

## 27. Contenido prohibido

El contenido editorial no incluirá:

- HTML de presentación;
- clases CSS;
- colores, tipografías o tamaños;
- layouts, breakpoints o nombres de componentes;
- instrucciones de pantalla;
- iconos específicos o animaciones;
- referencias como “arriba”, “a la derecha”, “en la tarjeta azul” o equivalentes;
- llamadas comerciales, precios, afiliación o recomendaciones de compra;
- texto inventado para completar campos opcionales;
- afirmaciones sin respaldo cuando requieren fuente;
- instrucciones peligrosas fuera del propósito educativo;
- credenciales, secretos, datos personales o detalles operativos innecesarios;
- contenido práctico excesivo, comandos extensos o procedimientos completos;
- fichas duplicadas para alias, dominios secundarios o perfiles;
- relaciones expresadas con títulos cuando el modelo exige IDs;
- definiciones copiadas íntegramente dentro de comparaciones, escenarios o rutas;
- propiedades no aprobadas para resolver una necesidad de presentación.

## 28. Manejo de incertidumbre

Cuando las fuentes discrepen, la terminología varíe, el término evolucione, la clasificación dependa del contexto, no exista traducción estable o la información no pueda confirmarse:

1. identificar exactamente qué aspecto es incierto;
2. separar hechos confirmados, interpretación y decisión del proyecto;
3. atribuir afirmaciones comerciales a su fuente;
4. registrar `verificationStatus`, estabilidad y revisión cuando corresponda;
5. evitar elegir silenciosamente una postura.

Expresiones recomendadas:

- “En IT Study se clasifica como…”;
- “En este contexto…”;
- “La terminología no es uniforme…”;
- “Esta distinción depende de…”;
- “La información disponible no permite afirmar…”;
- “El proveedor describe esta capacidad como…”;
- “Las fuentes consultadas difieren en…”.

Si una decisión sigue pendiente, indicarlo y no producir contenido que presuponga su resolución. La incertidumbre bien delimitada es preferible a una precisión falsa.

## 29. Flujo de redacción y revisión

El proceso es compatible con `planned`, `draft`, `in-review`, `approved`, `needs-update`, `deprecated` y `rejected`, sin redefinir sus transiciones técnicas.

1. **Revisión de duplicados y alias.** Buscar por ID, nombres, siglas, traducciones, grafías y significados.
2. **Confirmación de tipo y dominio.** Aplicar la taxonomía aprobada y justificar dominio principal y secundarios.
3. **Búsqueda y registro de fuentes.** Crear o reutilizar IDs normalizados y registrar las secciones realmente usadas.
4. **Redacción inicial.** Completar únicamente campos aplicables con el nivel objetivo.
5. **Revisión de claridad.** Comprobar autonomía del resumen, distinción de campos, legibilidad y ausencia de jerga innecesaria.
6. **Revisión técnica.** Verificar precisión, límites, versiones, contexto y afirmaciones respaldadas.
7. **Revisión de relaciones.** Confirmar relevancia y referencias sin anticipar el catálogo definitivo.
8. **Validación estructural.** Revisar IDs, enums, campos condicionales, fechas, fuentes y ausencia de propiedades visuales.
9. **Corrección.** Resolver hallazgos o justificar excepciones; no ocultar advertencias.
10. **Aprobación.** Registrar revisión, vigencia y responsable conforme al modelo.
11. **Revisión posterior.** Cuando cambien fuentes, versiones, estabilidad o contexto, pasar a `needs-update`, corregir, deprecar o rechazar según corresponda.

Un estado no sustituye revisión: `approved` exige contenido y metadatos válidos; `needs-update` no autoriza mantener una afirmación conocida como incorrecta.

## 30. Lista de revisión editorial

- [ ] ¿La definición explica qué es?
- [ ] ¿El propósito explica para qué existe o qué función cumple?
- [ ] ¿El problema resuelto es distinto del propósito?
- [ ] ¿El lenguaje es claro para una persona no especializada?
- [ ] ¿La clasificación coincide con la taxonomía aprobada?
- [ ] ¿El dominio principal está justificado por propósito?
- [ ] ¿Los dominios secundarios aportan contexto sustantivo?
- [ ] ¿Los términos en inglés y acrónimos están tratados correctamente?
- [ ] ¿El `summary` funciona de forma independiente?
- [ ] ¿El ejemplo aclara sin convertirse en tutorial?
- [ ] ¿Las ventajas y limitaciones tienen contexto?
- [ ] ¿Se distinguen compromisos, riesgos y mala implementación?
- [ ] ¿Las afirmaciones relevantes tienen fuentes normalizadas?
- [ ] ¿Se evita tono comercial y superioridad sin dimensión?
- [ ] ¿Se evita duplicación de entradas y campos?
- [ ] ¿Se explican confusiones relevantes?
- [ ] ¿Los prerrequisitos son reales y mínimos?
- [ ] ¿La profundidad corresponde al objetivo del proyecto?
- [ ] ¿La extensión se mantiene en rango o existe justificación?
- [ ] ¿No existen propiedades visuales ni HTML de presentación?
- [ ] ¿El contenido podría reutilizarse fuera de la web?
- [ ] ¿La incertidumbre está declarada y atribuida?
- [ ] ¿La vigencia y estabilidad están tratadas conforme al modelo?
- [ ] ¿Las relaciones se referencian por IDs cuando corresponde?
- [ ] ¿Los campos opcionales ausentes realmente no aplican?
- [ ] ¿Toda excepción está identificada, justificada y trazable?

`work/REVIEW-CHECKLIST.md` convertirá estas orientaciones en un contrato operativo de revisión por lote, con evidencia, responsables y criterios de cierre.

## 31. Ejemplos de corrección editorial

| Redacción deficiente | Problema detectado | Redacción corregida |
|---|---|---|
| “Un microservicio es un servicio pequeño que es micro.” | Definición circular y criterio de tamaño engañoso. | “Un microservicio es una unidad de software desplegable de forma independiente alrededor de una capacidad delimitada, dentro de una arquitectura distribuida.” |
| “Nuestra plataforma líder revoluciona el desarrollo.” | Tono promocional, posesión impropia y afirmación sin evidencia. | “La plataforma ofrece capacidades compartidas para que equipos de desarrollo aprovisionen y operen servicios.” |
| “El sistema implementa CQRS, EDA, CDC y SAGA para optimizar el core.” | Exceso de jerga y acrónimos sin explicar. | “El sistema separa ciertos flujos de lectura y escritura y comunica cambios mediante eventos; cada patrón debe explicarse y justificarse por separado.” |
| “DevOps mejora el software.” | Explicación demasiado superficial. | “DevOps es una orientación sociotécnica y familia de prácticas que busca mejorar colaboración, flujo de entrega y operación; no designa una herramienta única.” |
| “Para entender contenedores, instala Docker, crea un archivo y ejecuta estos comandos…” | Ejemplo convertido en tutorial y dependiente de marca. | “Un contenedor empaqueta una aplicación y sus dependencias de ejecución para mantener un entorno más consistente entre etapas.” |
| “Kubernetes significa orquestación de contenedores.” | Marca usada como concepto general. | “La orquestación de contenedores es la capacidad general; Kubernetes es una plataforma que implementa esa capacidad.” |
| “Los microservicios garantizan escalabilidad.” | Ventaja presentada como garantía. | “Los microservicios pueden permitir escalar componentes de forma independiente cuando los límites, datos y operación están bien diseñados.” |
| “SRE utiliza SLO para controlar servicios.” | Acrónimo no explicado y verbo impreciso. | “Site Reliability Engineering (SRE) utiliza objetivos de nivel de servicio (SLO) para orientar decisiones sobre confiabilidad.” |
| “Esta tecnología reemplazará a todas las anteriores.” | Afirmación incierta presentada como hecho. | “La información disponible muestra adopción en determinados contextos, pero no permite afirmar que sustituirá todas las alternativas.” |
| “La definición aparece en la tarjeta azul de la derecha.” | Contenido acoplado al diseño. | “La definición expresa la naturaleza y frontera semántica del elemento.” |
| “La latencia alta demuestra que el equipo trabaja mal.” | Inferencia causal y personal no respaldada. | “Una latencia elevada indica un comportamiento que requiere investigación; por sí sola no identifica causa ni responsabilidad.” |
| “Scrum es una metodología completa para cualquier proyecto.” | Clasificación contraria a la taxonomía y universalización. | “En IT Study, Scrum se clasifica como marco de trabajo; su aplicabilidad depende del contexto y no cubre por sí solo toda la gestión de un proyecto.” |

## 32. Relación con documentos posteriores

| Documento o artefacto | Condicionamiento editorial |
|---|---|
| `docs/05-relationship-rules.md` | Deberá convertir referencias y explicaciones de contexto en relaciones semánticas sin cambiar la voz ni duplicar contenido. |
| `docs/06-design-boundaries.md` | Hará exigible que el contenido conserve significado sin propiedades ni referencias visuales. |
| `docs/09-quality-criteria.md` | Definirá severidades, métricas, umbrales y aceptación a partir de estos criterios. |
| `work/WORK-INSTRUCTIONS.md` | Traducirá voz, profundidad y proceso en instrucciones de ejecución para ChatGPT Trabajo. |
| `work/RESEARCH-PROTOCOL.md` | Alineará investigación, incertidumbre y trazabilidad con las necesidades editoriales. |
| `work/CONTENT-PRODUCTION-CONTRACT.md` | Determinará entregables, estados, responsables y evidencia por lote respetando estos rangos y campos. |
| `work/SOURCE-POLICY.md` | Completa selección, jerarquía y suficiencia de fuentes; este documento solo regula su uso en la redacción. |
| `work/REVIEW-CHECKLIST.md` | Convertirá la sección 30 en verificaciones operativas y resultados registrables. |
| `examples/` | Mostrará aplicaciones aprobadas del modelo y de estas reglas; no ampliará taxonomía ni campos. |
| `inventories/` | Registrará candidatos, clasificaciones y estados sin sustituir fichas ni introducir texto promocional. |
| `AGENTS.md` | Obligará a los agentes técnicos a preservar significado, IDs, estados y separación entre contenido y diseño. |

## 33. Decisiones y pendientes

### 33.1 Decisiones editoriales adoptadas

- Voz clara, profesional, didáctica, neutral, directa y no promocional.
- Español como idioma principal, con conservación controlada de términos profesionales en inglés.
- Desarrollo de acrónimos en la primera aparición y registro de siglas o traducciones como alias.
- Nivel predeterminado `contextual-understanding`, con límites explícitos frente a tutoriales.
- Rangos recomendados, flexibles y máximos justificados para campos y estructuras.
- Distinción obligatoria entre definición, problema resuelto, propósito y notas contextuales.
- Ejemplos breves, contextuales, no universales y no procedimentales.
- Ventajas y limitaciones condicionadas, equilibradas y separadas de garantías, defectos y riesgos.
- Atribución en prosa solo cuando aporte valor pedagógico; fuentes completas mediante registros normalizados.
- Declaración expresa de incertidumbre, variación terminológica y decisiones propias.
- Prohibición de contenido visual, comercial, peligroso o práctico excesivo.

### 33.2 Decisiones heredadas de la taxonomía

- Doce dominios aprobados sin reapertura.
- Jerarquía `dominio > subdominio`.
- Disciplina transversal fuera de la jerarquía y área editorial sin pertenencia taxonómica.
- Tipos y distinciones de las siete familias de contenido.
- Producto como tipo, marca como metadato, competencia como entidad y responsabilidad principalmente estructurada.
- Comparación, escenario y ruta como estructuras editoriales.
- Una entrada canónica, dominio principal razonable y secundarios justificados.

### 33.3 Decisiones heredadas del modelo

- IDs globales `<namespace>-<semantic-key>` y referencias exclusivamente por ID.
- Markdown UTF-8 con frontmatter YAML como formato editorial principal.
- Campos comunes, contratos especializados y `contextualTypes`.
- Estados `planned`, `draft`, `in-review`, `approved`, `needs-update`, `deprecated` y `rejected`.
- Profundidades `recognition`, `contextual-understanding` y `future-expanded-reference`.
- Fuentes normalizadas, metadatos de estabilidad, vigencia, verificación y deprecación.
- Ausencia significativa de campos opcionales.

### 33.4 Reservado para `docs/05-relationship-rules.md`

- catálogo final de relaciones;
- nombres, dirección, reciprocidad, cardinalidad y compatibilidad;
- semántica definitiva de prerrequisitos, confusión, uso, producción y sustitución;
- ciclos, relevancia y equivalencias de campos de conveniencia.

### 33.5 Reservado para `docs/09-quality-criteria.md`

- severidades de errores y advertencias;
- umbrales automáticos definitivos;
- tolerancias de extensión;
- criterios cuantitativos de aceptación y publicación;
- tratamiento publicable de `needs-update`.

### 33.6 Reservado para `work/SOURCE-POLICY.md`

- jerarquía y selección de fuentes;
- suficiencia, diversidad y número de fuentes;
- tratamiento definitivo de fuentes comerciales, históricas y no disponibles;
- formato completo de registros y comprobación de disponibilidad.

### 33.7 Reservado para `work/REVIEW-CHECKLIST.md`

- evidencias exigidas por verificación;
- responsables y firmas de revisión;
- resultado operativo por lote;
- manejo de hallazgos, excepciones y reenvíos.

### 33.8 Excepciones que requieren `docs/10-decision-log.md`

Requieren registro: superar máximos de extensión de forma recurrente; introducir o retirar un principio editorial; aceptar contenido práctico fuera del límite general; alterar el idioma o la convención terminológica; permitir una fuente o afirmación excepcional con riesgo material; publicar incertidumbre no resuelta; añadir un campo, tipo, enum o estructura; o adoptar una interpretación que contradiga un documento de autoridad.

Las excepciones puntuales dentro de un campo también deberán quedar justificadas en notas de revisión o en el mecanismo operativo correspondiente, aunque no todas requieran una decisión de alcance general.

### 33.9 Contradicciones encontradas

No se encontraron contradicciones materiales entre los cinco documentos de autoridad. La taxonomía y el modelo especializan correctamente las listas candidatas de los documentos anteriores.

Se detectó una discrepancia terminológica entre el encargo de este documento, que menciona `extended-reference`, y el enum aprobado en `docs/03-content-model.md`, que establece `future-expanded-reference`. Por el orden de autoridad y la prohibición de modificar el modelo, se conserva exclusivamente `future-expanded-reference`; la otra expresión no constituye alias técnico ni valor válido.

No se fijan aquí calendario de revisión, catálogo final de relaciones, cantidades del MVP, política completa de fuentes ni umbrales definitivos de calidad.
