# IT Study — Alcance y audiencia

## 1. Identificación del documento

- **Proyecto:** IT Study
- **Documento:** Alcance y audiencia
- **Ruta oficial:** `docs/01-scope-and-audience.md`
- **Fuentes principales, en orden de autoridad:**
  1. `00-bootstrap-brief.md`
  2. `docs/00-project-charter.md`
- **Estado:** Documento inicial de definición. Las decisiones marcadas como pendientes deberán resolverse en los documentos especializados o registrarse en `docs/10-decision-log.md`.

## 2. Propósito del documento

Este documento define formalmente qué comprende IT Study, qué queda fuera, para quién se construye y bajo qué límites deberá evolucionar durante la fase inicial.

Su función es establecer una frontera común para:

- orientar la taxonomía sin convertir todavía la propuesta candidata en definitiva;
- delimitar el contenido que podrá incorporarse al proyecto;
- distinguir el alcance del producto, el alcance funcional y el alcance del contenido;
- precisar los perfiles de usuario y sus necesidades;
- evitar que la plataforma derive hacia formación práctica especializada, directorios comerciales, noticias o cobertura exhaustiva;
- proporcionar restricciones de entrada para `docs/02-taxonomy.md`, `docs/03-content-model.md` y `docs/07-mvp-definition.md`.

Este documento no define la arquitectura técnica de la aplicación, el diseño visual, el inventario inicial de términos, las cantidades definitivas del MVP ni la taxonomía final.

## 3. Distinción de alcances

Para evitar ambigüedades, IT Study distingue tres dimensiones de alcance.

### 3.1 Alcance del producto

Define la naturaleza, propósito y límites generales de IT Study como producto educativo. Responde qué clase de solución se busca construir, qué problema atiende y qué experiencia general deberá ofrecer.

### 3.2 Alcance funcional

Define las capacidades que la primera versión deberá ofrecer al usuario para consultar, explorar y relacionar el contenido. Describe comportamientos esperados sin seleccionar todavía frameworks, dependencias, componentes visuales ni decisiones de implementación.

### 3.3 Alcance del contenido

Define qué materias, tipos de conocimiento, niveles de profundidad y clases de términos son candidatos a formar parte de la base educativa. No constituye todavía un inventario ni una taxonomía definitiva.

Estas tres dimensiones deberán mantenerse relacionadas, pero no mezcladas. Una decisión de presentación no deberá alterar el significado del contenido; una categoría editorial no deberá depender de un componente visual; y una capacidad funcional no deberá forzar contenido específico dentro de la interfaz.

## 4. Alcance general del producto

IT Study es una iniciativa educativa de alfabetización integral en Tecnologías de la Información. Su producto inicial será una plataforma web estática de consulta, concebida como mapa de conocimiento y glosario contextual.

El producto deberá permitir que una persona:

- reconozca términos utilizados en distintas disciplinas de IT;
- comprenda qué representan y por qué existen;
- identifique el dominio o contexto profesional en el que aparecen;
- distinga conceptos, roles, prácticas, metodologías, herramientas y otras clases de conocimiento;
- entienda relaciones y diferencias entre términos;
- siga conversaciones técnicas fuera de su especialidad sin necesidad de dominar la implementación;
- explore posibles áreas profesionales antes de iniciar una especialización.

El alcance es transversal, no exhaustivo. IT Study deberá representar las principales áreas de IT con suficiente diversidad para construir un mapa mental general, pero no intentará cubrir todas las tecnologías, productos, puestos o variantes existentes.

## 5. Alcance educativo

### 5.1 Objetivo educativo

El objetivo educativo es desarrollar reconocimiento y comprensión contextual del ecosistema de IT.

El contenido deberá ayudar al usuario a responder, según corresponda:

1. ¿Qué es este término?
2. ¿Qué clase de elemento representa?
3. ¿A qué área o dominio pertenece?
4. ¿Qué problema busca resolver?
5. ¿Por qué existe?
6. ¿Quién suele utilizarlo o intervenir en él?
7. ¿En qué contexto profesional aparece?
8. ¿Qué conocimientos previos facilitan su comprensión?
9. ¿Con qué conceptos se relaciona?
10. ¿Con qué suele confundirse?
11. ¿Qué ejemplo sencillo permite comprenderlo?
12. ¿Cuáles son sus ventajas, limitaciones o implicaciones generales?

### 5.2 Orientación pedagógica

El producto seguirá estas orientaciones:

- contexto antes que implementación;
- relaciones antes que listas aisladas;
- claridad sin sacrificar precisión técnica;
- neutralidad tecnológica al explicar capacidades generales;
- profundidad controlada;
- progresión desde conceptos generales hacia conceptos más específicos;
- exposición explícita de conocimientos previos y relaciones relevantes;
- comparación de términos que suelen confundirse.

### 5.3 Límite educativo

La plataforma no tendrá como objetivo principal desarrollar competencia práctica, dominio operativo o especialización profesional. Podrá mencionar ejemplos, escenarios, artefactos o tecnologías para facilitar la comprensión, pero las fichas principales no deberán convertirse en:

- tutoriales paso a paso;
- cursos completos;
- laboratorios técnicos;
- ejercicios de implementación extensos;
- guías de preparación integral para certificaciones;
- manuales de operación de productos.

El conocimiento práctico de nivel avanzado podrá considerarse en fases posteriores mediante enlaces, recursos complementarios o rutas especializadas, siempre que no desplace el propósito principal del producto. Esta posibilidad continúa pendiente de definición.

## 6. Alcance funcional inicial

La experiencia funcional inicial contempla, sin definir todavía su implementación técnica exacta:

- una plataforma web estática y responsiva;
- un mapa general de dominios o agrupaciones de IT;
- un glosario consultable;
- búsqueda directa por término o alias;
- fichas individuales de contenido;
- navegación por dominios;
- navegación por clasificaciones;
- glosario alfabético;
- acceso a conceptos relacionados;
- comparaciones entre términos similares;
- escenarios que conecten varias disciplinas;
- rutas introductorias de exploración;
- navegación entre conocimientos previos y posteriores cuando dichas relaciones estén definidas;
- filtros generados a partir de metadatos y relaciones;
- contenido almacenado en archivos estructurados;
- validaciones de consistencia editorial y estructural;
- capacidad de cambiar la presentación visual sin reescribir el contenido educativo.

El documento semilla contempla modo claro y oscuro como parte del alcance inicial. Su especificación visual y técnica corresponde a documentos posteriores y no altera la obligación de mantener contenido y diseño separados.

Las siguientes decisiones funcionales continúan pendientes:

- estrategia exacta de búsqueda local;
- comportamiento y prioridad de los filtros;
- representación de mapas y relaciones;
- estructura concreta de las rutas guiadas;
- criterios de ordenamiento y relevancia;
- reglas de accesibilidad medibles;
- tecnología del generador de sitio estático;
- mecanismos exactos de validación y compilación.

## 7. Alcance del contenido

El contenido de IT Study deberá representar conocimiento relevante para comprender el ecosistema profesional de IT. La inclusión no dependerá únicamente de la popularidad de un término, sino de su utilidad contextual, estabilidad conceptual, relación con otros elementos y valor para la audiencia.

El alcance contempla, de forma no exhaustiva:

- definiciones;
- resúmenes;
- explicaciones contextuales;
- propósito y problema atendido;
- ejemplos sencillos;
- dominios y clasificaciones;
- relaciones entre elementos;
- conocimientos previos;
- comparaciones;
- escenarios profesionales;
- ventajas, limitaciones e implicaciones generales;
- roles participantes;
- fuentes y metadatos editoriales.

El contenido deberá redactarse principalmente en español. Los términos técnicos en inglés deberán conservarse cuando sean la forma habitual en la industria, acompañados de explicación o alias cuando resulte útil.

No se generará todavía el inventario de términos. La selección concreta de entradas deberá realizarse posteriormente mediante el proceso de inventario y producción por lotes.

## 8. Áreas de IT contempladas inicialmente

Las siguientes áreas constituyen una lista candidata inicial derivada del documento semilla. Su presencia en este documento delimita el universo de exploración, pero no establece una taxonomía definitiva, jerarquía final, equivalencia entre niveles ni obligación de incluirlas todas en el MVP.

- Fundamentos de computación.
- Hardware y arquitectura de computadores.
- Sistemas operativos.
- Programación.
- Algoritmos y estructuras de datos.
- Desarrollo frontend.
- Desarrollo backend.
- Desarrollo full stack.
- Desarrollo móvil.
- Desarrollo de escritorio.
- Desarrollo de videojuegos.
- Sistemas embebidos y firmware.
- Ingeniería de software.
- Arquitectura de software.
- Arquitectura de soluciones.
- Arquitectura empresarial.
- Calidad y pruebas.
- Redes y telecomunicaciones.
- Infraestructura.
- Virtualización.
- Cloud computing.
- Contenedores y orquestación.
- DevOps.
- Site Reliability Engineering.
- Platform Engineering.
- Observabilidad.
- Soporte técnico e IT Service Management.
- Ciberseguridad.
- Identidad y acceso.
- Privacidad, riesgo y cumplimiento.
- Bases de datos.
- Ingeniería de datos.
- Business Intelligence y analítica.
- Ciencia de datos.
- Machine Learning.
- Inteligencia artificial generativa.
- Gobierno de datos e inteligencia artificial.
- Integración y APIs.
- Mensajería y sistemas orientados a eventos.
- Sistemas empresariales.
- Producto digital.
- Análisis de negocio.
- UX y UI.
- Gestión de proyectos.
- Agilidad y Lean.
- Gobierno de IT.
- Gestión financiera de tecnología.
- Liderazgo tecnológico.
- IoT, robótica y tecnologías especializadas.

`docs/02-taxonomy.md` deberá revisar esta lista para detectar solapamientos, distintos niveles de abstracción, términos que funcionan mejor como subdominios y agrupaciones que requieran separación o consolidación.

## 9. Tipos de conocimiento contemplados

Los siguientes tipos constituyen clasificaciones candidatas y no definitivas:

- área;
- dominio;
- subdominio;
- disciplina;
- rol;
- puesto;
- responsabilidad;
- competencia;
- concepto;
- principio;
- paradigma;
- filosofía;
- metodología;
- framework de trabajo;
- proceso;
- práctica;
- técnica;
- patrón;
- antipatrón;
- estilo arquitectónico;
- modelo;
- protocolo;
- estándar;
- tecnología;
- herramienta;
- plataforma;
- servicio;
- artefacto;
- métrica;
- certificación;
- comparación;
- escenario;
- ruta de aprendizaje.

La taxonomía deberá validar si cada elemento representa realmente una clasificación independiente, un subtipo, una relación, una estructura editorial o un formato de navegación. Este documento no resuelve esas distinciones.

## 10. Nivel de profundidad esperado

### 10.1 Nivel principal: reconocimiento

El usuario deberá poder identificar:

- qué es el término;
- a qué contexto o dominio pertenece;
- qué tipo de elemento representa;
- qué problema general atiende.

### 10.2 Nivel principal: comprensión contextual

El usuario deberá poder comprender:

- por qué existe;
- cuándo se utiliza;
- quién lo utiliza o participa;
- con qué conceptos se relaciona;
- qué conocimientos previos resultan útiles;
- cuáles son sus ventajas, limitaciones o implicaciones generales;
- cómo se diferencia de términos similares;
- un ejemplo suficientemente sencillo para ubicarlo.

### 10.3 Nivel no prioritario: conocimiento práctico

La implementación, configuración, operación detallada y práctica especializada quedan fuera del objetivo general. Cuando sean necesarias para dar contexto, deberán presentarse de manera breve y subordinada a la explicación conceptual.

Los criterios editoriales exactos de longitud, complejidad, uso de ejemplos y profundidad por tipo de contenido siguen pendientes y deberán establecerse en `docs/04-editorial-guidelines.md`.

## 11. Casos de uso principales

### 11.1 Consultar un término escuchado

El usuario escucha un término en una reunión, entrevista, clase, artículo o conversación y desea comprender rápidamente qué significa, a qué área pertenece y por qué es relevante.

### 11.2 Explorar un área fuera de la especialidad propia

Un profesional con experiencia en una disciplina explora otra área para comprender su vocabulario, responsabilidades, prácticas y relación con su trabajo.

### 11.3 Construir un mapa mental de IT

Un estudiante o persona en transición profesional recorre dominios, clasificaciones y relaciones para entender cómo se organiza el ecosistema tecnológico.

### 11.4 Diferenciar términos similares

El usuario consulta una comparación para distinguir conceptos, roles, metodologías, prácticas o tecnologías que suelen utilizarse como equivalentes de forma incorrecta.

### 11.5 Comprender colaboración multidisciplinaria

El usuario revisa un escenario para identificar cómo participan desarrollo, producto, seguridad, datos, infraestructura, operaciones, calidad u otras áreas en una situación común.

### 11.6 Identificar conocimientos previos y siguientes pasos

El usuario descubre qué conceptos necesita comprender antes de abordar un tema y qué elementos relacionados puede explorar posteriormente.

### 11.7 Explorar rutas profesionales

Una persona revisa roles, responsabilidades, competencias y dominios para conocer posibles trayectorias sin recibir todavía una ruta de especialización completa.

### 11.8 Apoyar comunicación técnica

Un líder, analista, diseñador, responsable de producto o integrante no especializado consulta conceptos para participar con mayor claridad en decisiones y conversaciones de equipos tecnológicos.

## 12. Elementos explícitamente fuera del alcance

Quedan fuera del alcance de la primera versión:

- sustituir cursos especializados;
- enseñar programación paso a paso;
- incluir laboratorios técnicos completos;
- proporcionar preparación integral para certificaciones;
- ofrecer formación práctica exhaustiva por disciplina;
- cubrir todas las tecnologías existentes con el mismo nivel de detalle;
- mantener un directorio exhaustivo de productos comerciales;
- publicar noticias tecnológicas;
- comparar precios, planes o proveedores;
- proporcionar recomendaciones personalizadas mediante inteligencia artificial;
- ofrecer cuentas de usuario;
- implementar autenticación;
- implementar comunidad, comentarios, foros o contenido generado por usuarios;
- utilizar un backend o base de datos propios en el MVP;
- incluir seguimiento personalizado del progreso;
- establecer evaluaciones, calificaciones o credenciales propias;
- incorporar decisiones visuales, HTML de presentación, estilos o componentes dentro del contenido educativo;
- implementar la aplicación durante la fase documental actual.

Los enlaces a recursos externos, referencias prácticas y futuras extensiones educativas podrán evaluarse posteriormente. Su inclusión, formato y alcance están pendientes.

## 13. Límites del MVP

El MVP deberá validar el valor central de IT Study como mapa de conocimiento y glosario contextual, sin intentar demostrar todas las posibilidades futuras del producto.

### 13.1 Límites confirmados

- Será una experiencia web estática.
- No requerirá backend propio.
- No incluirá autenticación ni cuentas.
- No incluirá comunidad ni comentarios.
- Mantendrá contenido y diseño separados.
- Utilizará contenido estructurado.
- Deberá permitir consulta y exploración contextual.
- Tendrá cobertura transversal, pero no exhaustiva.
- La profundidad será teórica y contextual.
- La producción se realizará mediante lotes pequeños y revisables.

### 13.2 Capacidades candidatas del MVP

Las siguientes capacidades forman parte del alcance inicial previsto, pero su composición exacta deberá aprobarse en `docs/07-mvp-definition.md`:

- mapa general de áreas o dominios;
- búsqueda de términos o alias;
- glosario;
- fichas individuales;
- navegación por dominios y clasificaciones;
- relaciones entre términos;
- comparaciones;
- escenarios multidisciplinarios;
- rutas introductorias;
- filtros y navegación por conocimientos previos o relacionados;
- presentación responsiva;
- modo claro y oscuro;
- validaciones editoriales y estructurales.

### 13.3 Cantidades y cobertura

No se establecen en este documento:

- cantidad de dominios del MVP;
- cantidad de términos;
- cantidad de comparaciones;
- cantidad de escenarios;
- cantidad de rutas;
- número de lotes;
- porcentaje de cobertura;
- umbrales cuantitativos de calidad.

Estas cantidades permanecen pendientes y deberán definirse con criterios de viabilidad, representatividad transversal y capacidad de revisión.

## 14. Audiencia

### 14.1 Usuario objetivo principal

El usuario objetivo principal es una persona que trabaja, estudia o colabora en entornos de IT y necesita ampliar su cultura tecnológica general para comprender términos y conversaciones fuera de su especialidad.

No se presupone conocimiento transversal previo. La persona puede tener experiencia profunda en un área, experiencia inicial en varias o únicamente exposición profesional al vocabulario tecnológico.

### 14.2 Perfiles de usuario secundarios

#### 14.2.1 Desarrollador especializado

Profesional de frontend, backend, móvil, datos u otra especialidad que necesita comprender áreas adyacentes y colaborar con equipos multidisciplinarios.

#### 14.2.2 Líder técnico o arquitecto en desarrollo

Persona que coordina decisiones o equipos y requiere una visión más amplia de producto, seguridad, infraestructura, calidad, datos, operaciones y gobierno.

#### 14.2.3 Estudiante o persona en formación inicial

Usuario que necesita construir una estructura mental antes de elegir cursos, tecnologías o rutas de especialización.

#### 14.2.4 Analista de negocio o responsable de producto

Profesional que participa en definición, priorización y comunicación de soluciones, y necesita interpretar conceptos técnicos sin implementar cada tecnología.

#### 14.2.5 Diseñador UX/UI

Profesional que colabora con producto y desarrollo y necesita comprender arquitectura, datos, restricciones técnicas, calidad y operación en un nivel contextual.

#### 14.2.6 Responsable de proyectos o coordinación

Persona que participa en planificación, seguimiento, riesgos y comunicación entre áreas tecnológicas.

#### 14.2.7 Profesional de soporte, operaciones, infraestructura, seguridad o datos

Especialista que necesita comprender cómo su disciplina se relaciona con desarrollo, producto y otras funciones.

#### 14.2.8 Persona que explora una transición profesional

Usuario que busca reconocer áreas, roles y competencias antes de elegir una especialización o programa formativo.

#### 14.2.9 Colaborador no técnico en un entorno tecnológico

Persona que participa en reuniones, decisiones o procesos de una organización tecnológica y necesita entender vocabulario esencial sin convertirse en especialista.

## 15. Necesidades por perfil

| Perfil | Necesidades principales |
|---|---|
| Usuario objetivo principal | Encontrar términos, comprender su contexto, reconocer su clasificación y relacionarlos con otras áreas |
| Desarrollador especializado | Comprender disciplinas adyacentes, integraciones, responsabilidades compartidas y vocabulario de otras áreas |
| Líder técnico o arquitecto en desarrollo | Construir visión transversal, diferenciar niveles de decisión y comunicar conceptos entre perfiles diversos |
| Estudiante o persona en formación | Obtener un mapa ordenado, reconocer prerrequisitos y evitar aprender tecnologías sin contexto |
| Analista de negocio o producto | Entender implicaciones técnicas, roles participantes, restricciones generales y términos usados por ingeniería |
| Diseñador UX/UI | Comprender dependencias técnicas, colaboración multidisciplinaria y efectos generales de arquitectura, datos y calidad |
| Responsable de proyectos | Interpretar conceptos, riesgos, artefactos, procesos y responsabilidades para coordinar trabajo tecnológico |
| Especialista de soporte, operaciones, infraestructura, seguridad o datos | Comprender conexiones con desarrollo, producto y otras especialidades sin abandonar el contexto de su disciplina |
| Persona en transición profesional | Explorar dominios, roles, competencias y relaciones antes de seleccionar una ruta de aprendizaje |
| Colaborador no técnico | Obtener explicaciones accesibles y suficientes para seguir conversaciones y tomar decisiones informadas |

Las diferencias de experiencia entre perfiles deberán atenderse mediante claridad, relaciones, conocimientos previos y navegación progresiva, no mediante versiones separadas y duplicadas del mismo contenido salvo que una decisión posterior lo justifique.

## 16. Conocimientos previos esperados

IT Study no deberá exigir conocimientos previos uniformes para toda la plataforma.

Se asume que el usuario puede:

- reconocer el uso básico de computadoras y servicios digitales;
- leer explicaciones profesionales en español;
- encontrar términos técnicos en inglés sin que ello implique dominarlos;
- comprender ejemplos sencillos de contextos laborales o tecnológicos.

No se deberá asumir que el usuario:

- sabe programar;
- conoce redes, seguridad, cloud o bases de datos;
- comprende acrónimos sin explicación;
- distingue previamente metodologías, herramientas, roles y arquitecturas;
- posee experiencia laboral en IT;
- domina inglés técnico.

Cada contenido deberá declarar o relacionar conocimientos previos cuando sean relevantes. La forma exacta de representarlos corresponderá a `docs/03-content-model.md` y `docs/05-relationship-rules.md`.

## 17. Contextos de uso

IT Study deberá ser útil en contextos como:

- consulta inmediata durante o después de una reunión;
- preparación para una conversación técnica o entrevista;
- exploración personal de un área desconocida;
- estudio introductorio y autodidacta;
- incorporación a un equipo tecnológico;
- transición entre roles o disciplinas;
- preparación contextual antes de tomar un curso especializado;
- comunicación entre perfiles técnicos y no técnicos;
- revisión de conceptos relacionados con una decisión de producto o arquitectura;
- comprensión de artículos, documentación, vacantes o presentaciones técnicas.

El producto no deberá depender de sesiones largas o recorridos lineales. La búsqueda rápida será un caso prioritario, pero deberá coexistir con exploración estructurada y navegación relacional.

## 18. Criterios de inclusión de un término

Un término podrá proponerse para inclusión cuando cumpla uno o varios de los siguientes criterios y supere la revisión editorial correspondiente:

1. Es relevante para comprender una o más áreas de IT contempladas.
2. Aparece con frecuencia razonable en contextos profesionales, educativos o documentales.
3. Representa un fundamento estable o una relación importante dentro del ecosistema.
4. Ayuda a comprender conversaciones entre distintas disciplinas.
5. Es necesario como conocimiento previo de otros términos relevantes.
6. Permite diferenciar conceptos que suelen confundirse.
7. Representa un rol, práctica, estándar, protocolo, herramienta, artefacto u otro tipo de conocimiento pertinente a la taxonomía aprobada.
8. Tiene suficiente significado propio para justificar una ficha o tratamiento estructurado.
9. Puede explicarse con precisión mediante fuentes confiables.
10. Su inclusión aporta cobertura transversal o completa un vacío relevante.
11. Es una tecnología emergente con impacto suficiente para comprender cambios actuales del ecosistema.
12. Es una herramienta o producto comercial cuya relevancia ayuda a explicar una capacidad general, un estándar de facto o un contexto profesional extendido.

La inclusión deberá valorar la relevancia para la audiencia, no únicamente la actualidad, popularidad o demanda comercial del término.

## 19. Criterios de exclusión de un término

Un término deberá excluirse, aplazarse o integrarse como alias, ejemplo o mención secundaria cuando:

1. Es demasiado específico para aportar valor a la comprensión general.
2. Solo representa una variante menor sin significado contextual propio.
3. Duplica un término existente y puede resolverse mediante alias o comparación.
4. Es principalmente promocional, comercial o de corta duración.
5. No puede respaldarse con fuentes suficientemente confiables.
6. Requiere un nivel de implementación que excede el propósito educativo de la plataforma.
7. Solo resulta relevante para una organización, vacante o proveedor particular.
8. Su inclusión convertiría el proyecto en un directorio exhaustivo de productos.
9. Es una noticia, versión puntual, precio, plan comercial o dato operativo altamente volátil sin valor conceptual duradero.
10. No puede ubicarse razonablemente dentro de la taxonomía o sus relaciones sin inventar categorías.
11. Su alcance es tan amplio que requiere descomposición antes de producir contenido útil.
12. Su significado es ambiguo y todavía no existe una decisión editorial para tratarlo.
13. Pertenece a una disciplina contemplada, pero no es prioritario para el MVP o lote autorizado.

La exclusión del MVP no implica exclusión permanente del proyecto. Los términos aplazados podrán conservarse como candidatos en un mecanismo que deberá definirse posteriormente.

## 20. Tratamiento de herramientas, marcas y productos comerciales

IT Study deberá mantener neutralidad tecnológica y distinguir capacidades generales de implementaciones comerciales.

### 20.1 Regla principal

Cuando un concepto pueda explicarse sin depender de una marca, se explicará primero la capacidad, estándar, patrón o problema general. Los productos se utilizarán como ejemplos o implementaciones relevantes, no como definición del concepto.

### 20.2 Inclusión como contenido propio

Una herramienta, plataforma o producto podrá recibir tratamiento propio cuando:

- tenga relevancia profesional amplia;
- represente un estándar de facto o una referencia frecuente;
- sea necesario para comprender conversaciones técnicas comunes;
- presente características conceptuales que permitan diferenciarlo de alternativas;
- pueda describirse de manera neutral, verificable y no promocional.

### 20.3 Exclusiones comerciales

No se pretende:

- mantener catálogos exhaustivos;
- cubrir todas las alternativas del mercado;
- comparar precios o planes;
- recomendar compras;
- reproducir mensajes promocionales;
- actualizar cada versión o característica menor;
- convertir la plataforma en documentación de un proveedor.

### 20.4 Marcas y nombres

Las marcas deberán identificarse como tales y no confundirse con categorías generales. Cuando un nombre comercial se utilice coloquialmente como categoría, el contenido deberá aclarar la diferencia.

Los criterios exactos para separar `tecnología`, `herramienta`, `plataforma`, `servicio` y `producto` siguen pendientes de la taxonomía.

## 21. Tratamiento de tecnologías emergentes

Las tecnologías emergentes podrán incluirse cuando su impacto conceptual, profesional o transversal justifique su presencia.

Su tratamiento deberá:

- diferenciar fundamentos relativamente estables de productos o tendencias temporales;
- explicar el problema y contexto antes que la novedad;
- indicar, cuando corresponda, que la terminología o adopción todavía están evolucionando;
- evitar afirmaciones especulativas presentadas como hechos consolidados;
- limitar la profundidad a comprensión contextual;
- relacionarlas con áreas y conceptos existentes;
- evitar reorganizar toda la taxonomía por una tendencia no validada.

La popularidad reciente no será suficiente por sí sola para justificar una entrada. La política exacta de madurez, relevancia y revisión de tecnologías emergentes permanece pendiente.

## 22. Tratamiento de información cambiante

La información de IT puede cambiar a diferentes velocidades. El proyecto deberá distinguir, al menos de forma conceptual, entre:

- fundamentos y principios relativamente estables;
- estándares y protocolos sujetos a evolución controlada;
- herramientas y plataformas con cambios frecuentes;
- versiones, planes, precios y noticias de alta volatilidad.

### 22.1 Prioridad editorial

Se priorizará contenido cuyo valor educativo permanezca útil aunque cambien proveedores o versiones. Para tecnologías cambiantes, la explicación deberá centrarse en capacidades, contexto, relaciones y características duraderas.

### 22.2 Información de alta volatilidad

Los precios, planes, disponibilidad regional, versiones puntuales, noticias y comparativas coyunturales quedan fuera del alcance ordinario del producto.

### 22.3 Actualización y vigencia

Las fichas deberán poder conservar metadatos de fuente, revisión y estado editorial. El modelo exacto y la política de actualización permanecen pendientes y deberán definirse en:

- `docs/03-content-model.md`;
- `docs/04-editorial-guidelines.md`;
- `work/SOURCE-POLICY.md`;
- `docs/09-quality-criteria.md`.

No se asumirá que una entrada es permanentemente válida por haber sido aprobada una vez.

## 23. Separación entre contenido y diseño dentro del alcance

La separación entre contenido y diseño constituye una restricción fundamental y no una preferencia de implementación.

### 23.1 El contenido podrá definir

- texto educativo;
- clasificación;
- relaciones;
- alias;
- conocimientos previos;
- ejemplos;
- fuentes;
- metadatos editoriales;
- estados y datos estructurados aprobados.

### 23.2 El contenido no podrá definir

- HTML de presentación;
- clases CSS;
- colores;
- tipografías;
- tamaños visuales;
- posiciones de pantalla;
- componentes de interfaz;
- layouts;
- comportamiento específico de un tema visual;
- instrucciones de diseño ligadas a una ficha concreta.

### 23.3 Consecuencia para el alcance

Las funciones de búsqueda, filtrado, navegación y visualización deberán consumir metadatos y relaciones sin convertir decisiones visuales en propiedades semánticas del contenido.

`docs/06-design-boundaries.md` deberá formalizar esta separación con mayor detalle.

## 24. Supuestos

- La primera versión será una plataforma web estática.
- No se requerirá backend propio en el MVP.
- No habrá autenticación ni cuentas de usuario en el MVP.
- El contenido se almacenará en archivos estructurados; el formato exacto sigue pendiente.
- El contenido se redactará principalmente en español.
- Los términos en inglés se conservarán cuando sean habituales en la industria.
- Un término podrá relacionarse con varios dominios y tendrá un dominio principal cuando sea razonable.
- La taxonomía candidata requerirá validación antes de considerarse oficial.
- La cobertura se ampliará por lotes pequeños.
- El repositorio será la fuente oficial.
- La audiencia valorará una explicación contextual aun cuando no incluya práctica detallada.
- La búsqueda directa será uno de los casos de uso prioritarios.
- Las relaciones y comparaciones aportarán más valor que una lista aislada de definiciones.
- La revisión humana o conceptual seguirá siendo necesaria aunque existan validaciones automáticas.
- La información comercial y de alta volatilidad tendrá prioridad menor que los fundamentos y relaciones duraderas.

## 25. Riesgos relacionados con el alcance

| Riesgo | Consecuencia | Orientación inicial de mitigación |
|---|---|---|
| Intentar cubrir todo IT desde el inicio | MVP inmanejable y revisión superficial | Priorizar representatividad transversal y producir por lotes |
| Taxonomía demasiado extensa o rígida | Clasificación compleja y difícil de mantener | Validar niveles, términos y criterios antes de declararla definitiva |
| Confundir alcance transversal con exhaustividad | Crecimiento descontrolado del inventario | Aplicar criterios explícitos de inclusión, exclusión y prioridad |
| Incorporar demasiadas herramientas comerciales | Pérdida de neutralidad y obsolescencia rápida | Explicar capacidades generales y seleccionar productos solo por relevancia contextual |
| Convertir fichas en tutoriales | Desviación hacia especialización práctica | Establecer límites editoriales y profundidad controlada |
| Cobertura demasiado superficial | El usuario reconoce palabras sin comprenderlas | Exigir contexto, propósito, relaciones, diferencias y ejemplos mínimos |
| Alcance funcional excesivo para el MVP | Retraso de validación del valor central | Separar capacidades esenciales de extensiones futuras en `docs/07-mvp-definition.md` |
| Áreas candidatas con diferentes niveles de abstracción | Jerarquía inconsistente | Resolver niveles y agrupaciones en `docs/02-taxonomy.md` |
| Tipos de conocimiento redundantes o ambiguos | Clasificación incorrecta | Definir criterios y límites para cada tipo antes de producir inventario |
| Información cambiante sin política de revisión | Contenido obsoleto | Definir metadatos, frecuencia y responsables de revisión |
| Incluir tendencias por popularidad temporal | Ruido y mantenimiento innecesario | Exigir relevancia conceptual o profesional demostrable |
| Excluir perfiles no especializados mediante lenguaje excesivamente técnico | Menor accesibilidad y valor transversal | Redactar con claridad, explicar acrónimos y declarar conocimientos previos |
| Diseñar la estructura editorial alrededor de componentes visuales | Acoplamiento y retrabajo | Mantener contratos semánticos independientes de la presentación |
| No establecer prioridades entre áreas | Lotes desequilibrados | Definir criterios de selección del MVP sin fijar todavía cantidades arbitrarias |
| Duplicar contenido para cada perfil | Inconsistencia y mayor mantenimiento | Compartir contenido base y atender diferencias mediante navegación y contexto |

## 26. Decisiones pendientes

Este documento no resuelve las siguientes decisiones:

- taxonomía definitiva de áreas, dominios, subdominios y disciplinas;
- jerarquía y agrupación final de las áreas candidatas;
- lista definitiva de tipos de conocimiento;
- distinción formal entre rol, puesto, responsabilidad y competencia;
- distinción formal entre metodología, framework de trabajo, proceso, práctica y técnica;
- distinción formal entre tecnología, herramienta, plataforma, servicio y producto;
- modelo exacto de cada tipo de contenido;
- reglas y tipos de relaciones;
- convención final de IDs;
- formato definitivo de almacenamiento;
- política de fuentes y citas;
- inventario inicial de términos;
- prioridades y cobertura temática del MVP;
- cantidades de dominios, términos, comparaciones, escenarios y rutas del MVP;
- número, tamaño y secuencia de lotes;
- criterios editoriales exactos de longitud y profundidad;
- política para tecnologías emergentes;
- política de actualización y caducidad de información;
- estrategia de búsqueda y relevancia;
- representación de mapas y relaciones;
- alcance exacto de rutas de aprendizaje;
- criterios medibles de accesibilidad;
- indicadores cuantitativos de éxito;
- flujo exacto de aprobación y retiro de contenido;
- tratamiento de candidatos excluidos o aplazados;
- tecnología del generador estático;
- diseño visual y sistema de temas;
- estrategia de publicación, dominio y despliegue;
- licencias del contenido y del código.

## 27. Relación con documentos posteriores

### 27.1 Relación con `docs/02-taxonomy.md`

Este documento delimita el universo temático y los tipos candidatos que la taxonomía deberá evaluar. `docs/02-taxonomy.md` deberá:

- formalizar niveles y definiciones sin asumir que la lista candidata ya es definitiva;
- detectar áreas con distinto nivel de abstracción;
- resolver solapamientos y ambigüedades;
- separar categorías de contenido, relaciones y formatos editoriales;
- establecer criterios de pertenencia y multiclasicación;
- conservar la cobertura transversal definida aquí;
- evitar que marcas o productos comerciales se conviertan automáticamente en dominios;
- permitir evolución incremental sin intentar modelar todo IT desde el inicio.

### 27.2 Relación con `docs/03-content-model.md`

`docs/03-content-model.md` deberá convertir el alcance editorial en estructuras verificables. Deberá definir, entre otros aspectos:

- campos obligatorios y opcionales;
- representación de alias, dominios, tipos y relaciones;
- conocimientos previos;
- fuentes y metadatos de vigencia;
- estados editoriales;
- IDs estables;
- mecanismos para separar contenido de presentación;
- tratamiento estructural de herramientas, tecnologías emergentes e información cambiante.

El modelo no deberá inventar categorías para resolver vacíos de la taxonomía ni incorporar propiedades puramente visuales dentro del contenido.

### 27.3 Relación con `docs/07-mvp-definition.md`

`docs/07-mvp-definition.md` deberá seleccionar una composición viable dentro de los límites establecidos aquí. Deberá determinar:

- qué capacidades funcionales son esenciales;
- qué áreas candidatas tendrán representación inicial;
- qué tipos de contenido son necesarios para validar el valor central;
- qué elementos se posponen;
- qué criterios de terminación y aceptación se utilizarán;
- qué cantidades y umbrales son viables;
- cómo se garantiza cobertura transversal sin perseguir exhaustividad.

La definición del MVP no podrá ampliar silenciosamente el producto hacia cuentas, backend, comunidad, noticias, recomendaciones personalizadas o formación práctica exhaustiva.

## 28. Límites que condicionan la taxonomía

Al generar `docs/02-taxonomy.md` deberán respetarse los siguientes límites:

1. La taxonomía deberá servir a la comprensión teórica y contextual, no modelar cada detalle operativo de IT.
2. La lista de áreas del documento semilla es candidata y deberá validarse, no copiarse como jerarquía definitiva.
3. Las áreas candidatas presentan diferentes niveles de abstracción; la taxonomía deberá normalizarlos o explicar sus relaciones.
4. No deberá confundirse área, dominio, subdominio y disciplina sin definiciones explícitas.
5. Los tipos de conocimiento candidatos deberán revisarse para identificar redundancias y diferencias semánticas reales.
6. Roles y puestos no deberán tratarse automáticamente como equivalentes.
7. Metodologías, frameworks de trabajo, procesos, prácticas y técnicas requerirán fronteras claras.
8. Tecnologías, herramientas, plataformas, servicios, marcas y productos comerciales deberán distinguirse.
9. Comparaciones, escenarios y rutas de aprendizaje podrían ser tipos de contenido o estructuras editoriales, no necesariamente categorías taxonómicas equivalentes a un concepto.
10. Un término podrá pertenecer a varios dominios, pero deberá existir una regla para dominio principal cuando resulte razonable.
11. La taxonomía deberá permitir relaciones transversales sin duplicar entradas.
12. La clasificación no deberá depender del diseño visual ni de la navegación elegida.
13. La taxonomía deberá evolucionar por etapas y admitir propuestas registradas sin modificaciones silenciosas.
14. No deberá crear categorías únicamente para acomodar un producto, una empresa o una tendencia temporal.
15. Deberá priorizar fundamentos y estructuras conceptuales duraderas frente a información comercial volátil.
16. Deberá ser suficientemente amplia para representar múltiples disciplinas, pero suficientemente controlada para producir y revisar contenido por lotes.
17. No deberá convertirse en un inventario de términos; la selección de entradas se realizará posteriormente.
18. No deberá fijar cantidades del MVP; su función será establecer estructura y reglas de clasificación.

## 29. Contradicciones entre las fuentes

No se identifican contradicciones materiales entre `00-bootstrap-brief.md` y `docs/00-project-charter.md` respecto al propósito, audiencia, profundidad, alcance general, restricciones del MVP o separación entre contenido y diseño.

El acta formaliza y sintetiza el documento semilla. Cuando el acta omite detalles funcionales concretos presentes en el documento semilla —por ejemplo, el modo claro y oscuro— dicha omisión no se interpreta como exclusión ni contradicción. Esos detalles permanecen sujetos a definición especializada.

## 30. Cierre

IT Study se delimita como un producto educativo transversal de consulta, orientado a reconocer y comprender el ecosistema de IT mediante contenido contextual, relaciones y comparaciones.

Su alcance inicial deberá validar el valor de un mapa de conocimiento y glosario estructurado sin intentar abarcar todo IT, enseñar cada disciplina de forma práctica ni depender de productos comerciales. La audiencia incluye perfiles técnicos, interdisciplinarios, estudiantes y colaboradores no especializados que necesitan comprender vocabulario y contexto profesional.

Las siguientes fases deberán formalizar la taxonomía, el modelo de contenido y el MVP dentro de estos límites, manteniendo la separación estricta entre contenido y diseño y registrando expresamente toda decisión todavía pendiente.