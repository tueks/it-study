# IT Study — Taxonomía inicial

## 1. Identificación y propósito

- **Proyecto:** IT Study
- **Documento:** Taxonomía inicial
- **Ruta oficial:** `docs/02-taxonomy.md`
- **Documentos de autoridad, en orden:**
  1. `00-bootstrap-brief.md`;
  2. `docs/00-project-charter.md`;
  3. `docs/01-scope-and-audience.md`.
- **Estado:** taxonomía inicial aprobada para continuar la fase de definición. Las recomendaciones taxonómicas de la sección 14.2 fueron ratificadas el 2026-07-20; permanecen reservadas únicamente las decisiones asignadas a documentos posteriores.
- **Fecha de elaboración y consulta de fuentes:** 2026-07-19.
- **Fecha de ratificación de decisiones taxonómicas:** 2026-07-20.

Esta taxonomía organiza el conocimiento necesario para la alfabetización teórica y contextual en tecnologías de la información. Su finalidad es que una persona pueda reconocer un término, ubicarlo, comprender su propósito y relacionarlo con disciplinas vecinas sin exigir dominio práctico.

No pretende reproducir la estructura de una universidad, una empresa, una certificación o el mercado laboral; tampoco inventariar todas las tecnologías, especialidades, productos o variantes de puestos. Es una estructura educativa estable sobre la que posteriormente podrán definirse el modelo de contenido, las relaciones, el MVP y los lotes de producción.

### 1.1 Convención de evidencia y decisión

Para evitar confundir fuentes con decisiones propias:

- **Definición respaldada:** definición o frontera contrastada con una fuente institucional incluida en la sección 15.
- **Decisión IT Study:** normalización elegida para satisfacer el propósito, audiencia y restricciones del proyecto; no se presenta como taxonomía universal.
- **Pendiente:** propuesta que todavía necesita aprobación o detalle en un documento posterior.

Las fuentes externas confirman que las disciplinas de computación se solapan y que la terminología no es uniforme entre países y comunidades [S4]. En consecuencia, la jerarquía propuesta es deliberadamente pragmática y contextual.

## 2. Principios taxonómicos

1. **Claridad semántica.** Cada categoría tendrá una intención diferenciable y criterios de uso; el nombre por sí solo no decidirá la clasificación.
2. **Consistencia de niveles.** Un dominio agrupará problemas y conocimiento de amplitud comparable; una herramienta, rol o práctica no se elevará a dominio.
3. **Cobertura transversal sin exhaustividad.** Se representarán las principales conversaciones de IT, no todos sus términos ni especialidades.
4. **Extensibilidad controlada.** La estructura admitirá nuevas entradas y subdominios sin reorganizarse por cada tendencia.
5. **Mínima duplicación.** Cada término tendrá una entrada canónica y podrá vincularse con varios dominios.
6. **Neutralidad tecnológica.** Se explicarán primero capacidades, conceptos y estándares; las marcas serán implementaciones o ejemplos cuando resulte pertinente.
7. **Separación entre clasificación y presentación.** La pertenencia semántica no dependerá de menús, tarjetas, colores, páginas o rutas visuales.
8. **Estabilidad de fundamentos.** Se priorizarán categorías duraderas frente a proveedores, versiones y productos cambiantes.
9. **Clasificación múltiple controlada.** Se permitirá un dominio principal y dominios secundarios justificados, evitando copias de la misma ficha.
10. **Trazabilidad.** Altas, divisiones, consolidaciones, alias, deprecaciones y migraciones deberán registrar motivo, impacto y referencias afectadas.
11. **Contexto explícito.** Los términos polisémicos declararán el sentido utilizado; no se forzará una definición única entre comunidades incompatibles.
12. **Proporcionalidad.** Una distinción solo se materializará como categoría independiente si mejora búsqueda, comprensión, validación o relaciones.

## 3. Definición de niveles estructurales

### 3.1 Área

- **Qué representa:** agrupación amplia y legible para orientación editorial o navegación, por ejemplo, “Construcción y operación de sistemas digitales”.
- **Cuándo usarla:** para presentar varios dominios relacionados a una audiencia inicial o planificar cobertura.
- **Qué no representa:** una pertenencia técnica verificable ni un contenedor obligatorio de datos.
- **Relación:** puede reunir dominios, pero no forma parte de la jerarquía canónica inicial.
- **Ejemplo:** el área editorial “Creación de productos digitales” podría mostrar desarrollo de software, ingeniería y producto.
- **Ambigüedad:** en el lenguaje común “área” y “dominio” suelen intercambiarse.
- **Decisión IT Study:** conservarla únicamente como estructura editorial opcional, fuera de la jerarquía canónica. Su representación técnica podrá definirse en `docs/03-content-model.md`, pero no alterará este carácter no taxonómico.

### 3.2 Dominio

- **Qué representa:** campo principal de conocimiento y práctica, definido por una familia coherente de problemas, propósitos y capacidades.
- **Cuándo usarlo:** como primera pertenencia estable de una entrada y unidad de cobertura temática.
- **Qué no representa:** un departamento, puesto, producto, metodología o página de la interfaz.
- **Relación:** contiene subdominios y sirve de hogar principal a términos y disciplinas.
- **Ejemplo:** Redes y telecomunicaciones.
- **Ambigüedad:** un dominio puede ser una disciplina académica en otro marco; aquí prima su utilidad educativa.
- **Decisión IT Study:** conservarlo como nivel jerárquico principal.

### 3.3 Subdominio

- **Qué representa:** partición temática recurrente de un dominio, con alcance más específico pero todavía capaz de agrupar múltiples tipos de contenido.
- **Cuándo usarlo:** cuando mejora la ubicación y permite producir lotes coherentes.
- **Qué no representa:** una ficha individual, una tecnología, una técnica o una subdivisión obligatoria de profundidad uniforme.
- **Relación:** pertenece a un dominio principal y puede relacionarse con otros dominios.
- **Ejemplo:** Computación en la nube dentro de Infraestructura, cloud y operación de servicios.
- **Ambigüedad:** una especialidad madura puede parecer dominio; se evaluará su autonomía, audiencia y volumen antes de promoverla.
- **Decisión IT Study:** conservarlo como segundo y último nivel jerárquico inicial.

### 3.4 Disciplina

- **Qué representa:** cuerpo coherente de prácticas, conocimientos y responsabilidades profesionales que puede atravesar varios dominios.
- **Cuándo usarla:** cuando interesa explicar una capacidad compartida sin duplicar entradas, por ejemplo, accesibilidad u observabilidad.
- **Qué no representa:** un tercer nivel obligatorio bajo subdominio ni un sinónimo automático de dominio.
- **Relación:** tiene un dominio hogar cuando sea razonable y alcance secundario en otros dominios.
- **Ejemplo:** seguridad de software tiene hogar en Ciberseguridad y aplicación en Ingeniería de software.
- **Ambigüedad:** ciertas disciplinas, como ciberseguridad, tienen suficiente autonomía para ser además dominio.
- **Decisión IT Study:** conservarla como clasificación transversal, no como nivel jerárquico.

### 3.5 Estructura adoptada

La jerarquía canónica inicial será `dominio > subdominio`. `Disciplina` será una clasificación transversal y `área` una agrupación editorial opcional. No se añade un tercer nivel estructural hasta demostrar que aporta más claridad que relaciones y filtros. Esta simplificación es una **decisión IT Study adoptada inicialmente**.

## 4. Taxonomía principal propuesta

Los identificadores `DOM-01` a `DOM-12` son **identificadores candidatos estables** para discusión y trazabilidad. No constituyen el esquema técnico final de IDs.

### DOM-01 — Fundamentos de computación / Computing Foundations

- **Definición:** bases matemáticas, lógicas, conceptuales y algorítmicas necesarias para comprender cómo se representa y procesa información.
- **Propósito en IT:** ofrecer vocabulario y modelos mentales independientes de lenguajes y productos.
- **Incluye:** lógica y matemática discreta; teoría de la computación; representación de datos; algoritmos y estructuras de datos; fundamentos de programación; complejidad; principios generales de sistemas.
- **Excluye:** construcción profesional de aplicaciones, administración de infraestructura y electrónica de implementación.
- **Subdominios candidatos:** teoría y modelos de computación; algoritmos y estructuras de datos; fundamentos de programación; información y representación; pensamiento computacional.
- **Dominios vecinos:** Sistemas de cómputo; Desarrollo de software; Datos e IA.
- **Solapamientos:** programación introductoria puede aparecer aquí como fundamento y en DOM-03 como práctica de construcción.
- **Justificación:** proporciona el sustrato estable y neutral que evita explicar cada tecnología de forma aislada; CC2020 distingue fundamentos compartidos y perfiles disciplinares [S4].

### DOM-02 — Sistemas de cómputo y sistemas ciberfísicos / Computer Systems and Cyber-Physical Systems

- **Definición:** diseño y funcionamiento de componentes físicos, software de sistema y sistemas que interactúan estrechamente con el mundo físico.
- **Propósito en IT:** explicar qué ejecuta el software y cómo se integran hardware, sistema operativo, firmware y dispositivos.
- **Incluye:** arquitectura de computadores; hardware; sistemas operativos; firmware; sistemas embebidos; IoT; robótica; sistemas ciberfísicos y aceleradores de cómputo.
- **Excluye:** administración cotidiana de infraestructura, redes como disciplina principal y desarrollo general de aplicaciones.
- **Subdominios candidatos:** hardware y arquitectura de computadores; sistemas operativos; embebidos y firmware; IoT y sistemas ciberfísicos; robótica.
- **Dominios vecinos:** Fundamentos; Redes; Infraestructura; Desarrollo; IA.
- **Solapamientos:** edge computing e IoT combinan dispositivo, red, cloud, datos y seguridad; el componente físico tendrá hogar aquí.
- **Justificación:** la integración hardware-software constituye una frontera reconocible de la ingeniería de computación [S4] y evita dispersar firmware, IoT y robótica.

El contenedor genérico `computación especializada` no se conserva. Cada especialidad futura deberá evaluarse por fundamentos propios, relevancia profesional, estabilidad terminológica, fuentes confiables y capacidad de ubicarse en los dominios existentes.

### DOM-03 — Desarrollo de software / Software Development

- **Definición:** construcción de software mediante programación, bibliotecas, entornos y prácticas de implementación para distintas superficies de ejecución.
- **Propósito en IT:** ubicar conversaciones sobre cómo se implementan aplicaciones y qué caracteriza cada especialidad de desarrollo.
- **Incluye:** programación aplicada; frontend; backend; full stack como perfil combinado; móvil; escritorio; videojuegos; scripting y desarrollo de interfaces o servicios.
- **Excluye:** gobierno completo del ciclo de vida, arquitectura como disciplina, operación de producción y gestión de producto.
- **Subdominios candidatos:** desarrollo web frontend; backend y servicios; móvil; escritorio; videojuegos y medios interactivos; desarrollo multiplataforma; prácticas de implementación.
- **Dominios vecinos:** Fundamentos; Ingeniería de software; Integración; Producto; Sistemas de cómputo.
- **Solapamientos:** full stack no es un dominio autónomo sino combinación de frontend y backend; videojuegos combinan software, gráficos, experiencia y sistemas especializados.
- **Justificación:** conserva una puerta de entrada familiar para la audiencia sin confundir programación con la totalidad de la ingeniería de software [S4].

### DOM-04 — Ingeniería, arquitectura y calidad de software / Software Engineering, Architecture and Quality

- **Definición:** aplicación sistemática de principios, procesos y decisiones para especificar, diseñar, construir, evolucionar y evaluar software confiable y mantenible.
- **Propósito en IT:** contextualizar el ciclo de vida, los compromisos de diseño y la calidad más allá de escribir código.
- **Incluye:** requisitos de software; diseño; arquitectura de software; arquitectura de soluciones; ciclo de vida; mantenimiento; configuración; entrega; calidad; pruebas; aseguramiento de calidad; seguridad y accesibilidad aplicadas al software.
- **Excluye:** arquitectura empresarial como gobierno de capacidades organizacionales, operación de servicios como hogar principal y técnicas de programación sin contexto de ingeniería.
- **Subdominios candidatos:** ingeniería de requisitos; diseño y arquitectura de software; arquitectura de soluciones; ciclo de vida y evolución; calidad y pruebas; ingeniería de entrega.
- **Dominios vecinos:** Desarrollo; Producto; Infraestructura; Ciberseguridad; Integración; Gobierno tecnológico.
- **Solapamientos:** calidad, seguridad, accesibilidad, confiabilidad y arquitectura son transversales; aquí se aloja su aplicación al software. ISO/IEC 25010 ofrece un modelo de calidad de producto, no un dominio organizacional [S6].
- **Justificación:** la ingeniería de software utiliza rigor para producir sistemas confiables y abarca más que programación [S4]; calidad y arquitectura dependen estrechamente del ciclo de vida.

### DOM-05 — Redes y telecomunicaciones / Networking and Telecommunications

- **Definición:** transmisión, interconexión y control de comunicaciones entre dispositivos, sistemas y redes.
- **Propósito en IT:** explicar conectividad, direccionamiento, protocolos, medios, topologías y servicios de comunicación.
- **Incluye:** fundamentos de redes; modelos por capas; redes locales y amplias; Internet; redes inalámbricas; telecomunicaciones; routing y switching; servicios de red; rendimiento y disponibilidad de red.
- **Excluye:** administración general de servidores, seguridad completa de la organización y protocolos exclusivos de una aplicación como hogar principal.
- **Subdominios candidatos:** fundamentos y protocolos; redes empresariales; Internet y servicios de red; redes inalámbricas y móviles; telecomunicaciones; operación de redes.
- **Dominios vecinos:** Infraestructura; Ciberseguridad; Sistemas de cómputo; Integración.
- **Solapamientos:** seguridad de red se relaciona con DOM-07; redes cloud con DOM-06; protocolos de aplicación con DOM-10.
- **Justificación:** posee fundamentos, tecnologías y responsabilidades propias, y es prerequisito de cloud, sistemas distribuidos y seguridad.

### DOM-06 — Infraestructura, cloud y operación de servicios / Infrastructure, Cloud and Service Operations

- **Definición:** provisión, operación, automatización y soporte de los recursos y servicios tecnológicos sobre los que funcionan los sistemas digitales.
- **Propósito en IT:** conectar infraestructura tradicional, cloud, operación, confiabilidad, plataformas internas y gestión de servicios.
- **Incluye:** cómputo, almacenamiento e infraestructura; virtualización; cloud; contenedores y orquestación; automatización operativa; DevOps; SRE; Platform Engineering; observabilidad; soporte técnico; ITSM; continuidad y operación de servicios.
- **Excluye:** desarrollo funcional de aplicaciones, gobierno empresarial de IT y seguridad como cuerpo completo.
- **Agrupaciones internas aprobadas:** (1) infraestructura, virtualización, cloud, contenedores y orquestación; (2) entrega, automatización DevOps e ingeniería de plataformas; (3) confiabilidad, SRE y observabilidad; (4) soporte técnico, continuidad e ITSM. Estas agrupaciones podrán materializarse como subdominios relacionados en el modelo de contenido.
- **Dominios vecinos:** Redes; Ingeniería de software; Ciberseguridad; Gobierno; Integración.
- **Solapamientos:** DevOps es una orientación sociotécnica y conjunto de prácticas; SRE trata operación como problema de software [S9]; Platform Engineering crea capacidades y plataformas internas [S10]; ITSM gestiona productos y servicios digitales [S11]. No se asumen como sinónimos.
- **Justificación:** todos convergen en entregar y operar capacidades tecnológicas, pero se conservan como subdominios o disciplinas para enseñar sus diferencias.

### DOM-07 — Ciberseguridad, privacidad y riesgo tecnológico / Cybersecurity, Privacy and Technology Risk

- **Definición:** protección y gestión de riesgos que afectan sistemas, información, identidades, personas y organizaciones en entornos digitales.
- **Propósito en IT:** explicar prevención, protección, detección, respuesta, recuperación y gobierno de riesgos, manteniendo privacidad y cumplimiento como preocupaciones diferenciadas.
- **Incluye:** fundamentos de seguridad; seguridad ofensiva y defensiva; identidad y acceso; seguridad de aplicaciones, datos, infraestructura y redes; privacidad; riesgo; continuidad; cumplimiento; gobierno de seguridad.
- **Excluye:** cumplimiento jurídico exhaustivo, auditoría financiera general y controles operativos sin componente tecnológico.
- **Subdominios candidatos:** fundamentos y arquitectura de seguridad; identidad y acceso; seguridad de aplicaciones; seguridad de infraestructura y cloud; operaciones de seguridad; privacidad; riesgo y cumplimiento.
- **Dominios vecinos:** todos, especialmente Infraestructura, Redes, Software, Datos y Gobierno.
- **Solapamientos:** NIST trata ciberseguridad y privacidad como ámbitos conectados pero no equivalentes [S7]; la seguridad mantiene hogar aquí y aplicación secundaria en cada dominio.
- **Justificación:** posee vocabulario, marcos, roles y ciclo de riesgo propios; NIST CSF 2.0 la aborda como gestión organizacional del riesgo, incluyendo gobierno [S7].

### DOM-08 — Datos y analítica / Data and Analytics

- **Definición:** captura, modelado, almacenamiento, movimiento, gobierno, calidad y uso analítico de datos.
- **Propósito en IT:** distinguir la administración de datos de su explotación analítica y de los sistemas de IA.
- **Incluye:** bases de datos; modelado y administración; ingeniería de datos; integración de datos; almacenamiento analítico; BI; analítica; ciencia de datos; visualización; calidad, metadatos y gobierno de datos.
- **Excluye:** aprendizaje automático como hogar principal, integración general de aplicaciones y gobierno corporativo completo.
- **Subdominios candidatos:** bases de datos; arquitectura y gestión de datos; ingeniería de datos; BI y analítica; ciencia de datos; gobierno y calidad de datos.
- **Dominios vecinos:** IA; Integración; Ciberseguridad; Producto; Gobierno.
- **Solapamientos:** ciencia de datos puede usar ML; gobierno de datos se coordina con gobierno de IT e IA; las bases de datos son tecnología y también disciplina de gestión.
- **Justificación:** agrupa el ciclo de vida del dato sin reducirlo a bases de datos ni mezclarlo automáticamente con IA; ISO/IEC 25012 reconoce calidad de datos como objeto específico [S16].

### DOM-09 — Inteligencia artificial / Artificial Intelligence

- **Definición:** estudio y construcción de sistemas capaces de realizar tareas asociadas con percepción, razonamiento, aprendizaje, generación, decisión o interacción inteligente.
- **Propósito en IT:** ubicar fundamentos, familias técnicas, ciclo de vida y riesgos propios de sistemas de IA.
- **Incluye:** fundamentos de IA; machine learning; deep learning; modelos generativos; lenguaje natural; visión; sistemas de recomendación; MLOps/LLMOps; evaluación, seguridad y gobierno de IA.
- **Excluye:** analítica descriptiva sin IA, productos comerciales concretos como dominios y especulación sin base estable.
- **Subdominios candidatos:** fundamentos y sistemas inteligentes; machine learning; IA generativa; percepción y lenguaje; ingeniería y operación de IA; IA responsable, evaluación y gobierno.
- **Dominios vecinos:** Datos; Software; Sistemas especializados; Ciberseguridad; Producto; Gobierno.
- **Solapamientos:** ML utiliza datos y estadística, MLOps usa prácticas de operación, y gobierno de IA integra riesgo, privacidad y gobierno; NIST AI RMF estructura esos riesgos alrededor de gobernar, mapear, medir y gestionar [S8].
- **Justificación:** su autonomía conceptual y relevancia transversal justifican dominio propio, sin convertir cada modelo o proveedor en categoría principal.

### DOM-10 — Integración y sistemas empresariales / Integration and Enterprise Systems

- **Definición:** conexión de aplicaciones, datos, procesos y capacidades organizacionales mediante interfaces, mensajería y plataformas empresariales.
- **Propósito en IT:** explicar cómo cooperan sistemas heterogéneos y cómo la tecnología soporta procesos de una organización.
- **Incluye:** APIs; integración de aplicaciones y datos; protocolos de aplicación; mensajería; sistemas orientados a eventos; middleware; interoperabilidad; ERP, CRM y otras familias de sistemas empresariales; sistemas de información.
- **Excluye:** marcas específicas como dominios, diseño interno completo de cada aplicación y arquitectura empresarial como gobierno principal.
- **Subdominios candidatos:** APIs e interoperabilidad; mensajería y eventos; middleware e integración; sistemas de información; sistemas empresariales; integración B2B.
- **Dominios vecinos:** Software; Datos; Redes; Producto; Gobierno.
- **Solapamientos:** una API es interfaz, artefacto y posible servicio según contexto; la ingeniería de datos tiene integración de datos como propósito secundario.
- **Justificación:** hace visible la colaboración entre sistemas y negocio, dimensión que no queda cubierta por desarrollo aislado; CC2020 reconoce sistemas de información como puente entre computación y contexto organizacional [S4].

### DOM-11 — Producto digital, análisis de negocio y experiencia humana / Digital Product, Business Analysis and Human Experience

- **Definición:** descubrimiento, definición, diseño y evaluación de productos y cambios digitales orientados a necesidades, valor y experiencia de las personas.
- **Propósito en IT:** conectar necesidades de usuarios y negocio con soluciones tecnológicas comprensibles y utilizables.
- **Incluye:** gestión de producto digital; análisis de negocio; investigación de usuarios; UX; UI; interacción humano-computadora; diseño de servicios; accesibilidad; experimentación y métricas de producto.
- **Excluye:** dirección temporal de proyectos como hogar principal, implementación de software y diseño visual específico de IT Study.
- **Subdominios candidatos:** producto digital; análisis de negocio; investigación y UX; UI e interacción; accesibilidad y diseño inclusivo; analítica y experimentación de producto.
- **Dominios vecinos:** Software; Datos; Integración; Gobierno; Calidad.
- **Solapamientos:** IIBA define análisis de negocio como práctica de habilitar cambio mediante necesidades y soluciones de valor [S13]; accesibilidad es transversal y WCAG aporta estándares aplicables al contenido web [S15].
- **Justificación:** reúne disciplinas centradas en valor y personas, diferenciándolas de gestión de proyectos y construcción técnica.

### DOM-12 — Estrategia, gobierno y liderazgo tecnológico / Technology Strategy, Governance and Leadership

- **Definición:** dirección, supervisión, priorización y coordinación de tecnología para generar valor, gestionar recursos y riesgos y alinear capacidades con objetivos organizacionales.
- **Propósito en IT:** ubicar decisiones organizacionales que atraviesan productos, proyectos, arquitectura, finanzas, personas y proveedores.
- **Incluye:** estrategia de tecnología; gobierno de IT; arquitectura empresarial; portafolios, programas y proyectos; agilidad y Lean; gestión financiera de tecnología; liderazgo; organización y capacidades; sourcing; gobierno transversal de datos e IA.
- **Excluye:** administración técnica cotidiana, contabilidad general y una metodología particular como definición total del dominio.
- **Subdominios candidatos:** estrategia y gobierno de IT; arquitectura empresarial; portafolios, programas y proyectos; agilidad y Lean; finanzas y economía tecnológica; liderazgo y organización; gobierno de datos e IA.
- **Dominios vecinos:** todos, especialmente Producto, Datos, IA, Ciberseguridad e Infraestructura.
- **Solapamientos:** COBIT distingue gobierno y gestión de información y tecnología [S12]; PMI define gestión de proyectos por la aplicación coordinada de conocimientos, habilidades, herramientas y técnicas [S14]; el Manifiesto Ágil expresa valores, no un método universal [S17].
- **Justificación:** evita dispersar las capacidades de dirección y aclara que arquitectura empresarial, agilidad, finanzas y liderazgo operan a escala organizacional.

## 5. Disciplinas y capacidades transversales

Una capacidad transversal merece **dominio propio** cuando tiene propósito autónomo, vocabulario extenso, prácticas, roles y rutas de aprendizaje reconocibles, y cuando usarla solo como etiqueta ocultaría conocimiento esencial. Funciona como **disciplina** cuando conserva identidad pero su aplicación depende de varios dominios. Se representa como **relación** cuando solo describe cómo dos entradas colaboran. Aparece en varios dominios mediante referencias cuando el contenido base es único y cada aplicación aporta contexto específico.

| Elemento | Tratamiento inicial | Dominio hogar | Aplicación transversal |
|---|---|---|---|
| Seguridad | Dominio y disciplina | DOM-07 | Software, redes, cloud, datos, IA, producto y gobierno |
| Arquitectura | Familia de disciplinas | DOM-04 para software/soluciones; DOM-12 para empresarial | Todos los dominios que diseñan sistemas o capacidades |
| Observabilidad | Disciplina y subdominio | DOM-06 | Software, redes, datos, IA y seguridad |
| Automatización | Capacidad transversal | DOM-06 cuando es operativa | Desarrollo, pruebas, datos, seguridad e IA |
| Accesibilidad | Disciplina transversal | DOM-11 | Producto, software, calidad, contenido y soporte |
| Calidad | Disciplina transversal | DOM-04 | Datos, servicios, IA, redes, seguridad y producto |
| Gobierno | Capacidad y familia de disciplinas | DOM-12 | Datos, IA, seguridad, arquitectura y servicios |
| Integración | Dominio y capacidad | DOM-10 | Software, datos, cloud y sistemas empresariales |
| Confiabilidad | Atributo de calidad y disciplina operativa | DOM-06; referencia de calidad en DOM-04 | Software, redes, datos, IA y servicios |
| Gestión de riesgos | Disciplina transversal | DOM-07 para riesgo tecnológico; DOM-12 para riesgo de gobierno | Proyectos, datos, IA, proveedores y continuidad |
| Privacidad | Disciplina con identidad propia | DOM-07 | Datos, producto, software, IA y cumplimiento |
| Liderazgo | Competencia y disciplina organizacional | DOM-12 | Cualquier dominio con coordinación de personas y decisiones |

Regla de no duplicación: la entrada canónica define el elemento; las aplicaciones por dominio añaden relaciones o secciones contextuales, no copias completas.

## 6. Clasificaciones de conocimiento

Los niveles estructurales no son tipos de ficha equivalentes. Las entidades describen conocimiento; las relaciones conectan entradas; las estructuras editoriales organizan una experiencia de lectura. El modelo técnico que materialice estas decisiones corresponde a `docs/03-content-model.md`.

### 6.1 Niveles taxonómicos

| Candidato | Definición y criterio de uso | Diferencia y ejemplo | Estado propuesto |
|---|---|---|---|
| Área | Agrupación amplia para orientación o planificación. | No es pertenencia canónica. Ej.: “Creación de productos digitales”. | Conservar únicamente como estructura editorial opcional. |
| Dominio | Campo principal con familia coherente de problemas y capacidades. | Más estable y amplio que un subdominio. Ej.: Datos y analítica. | Conservar. |
| Subdominio | Partición temática de un dominio. | Agrupa múltiples entradas; no es una ficha. Ej.: Ingeniería de datos. | Conservar. |
| Disciplina | Cuerpo de conocimiento y práctica con aplicación profesional, a menudo transversal. | No es un tercer nivel. Ej.: accesibilidad. | Conservar como clasificación transversal. |

### 6.2 Tipos de contenido o entidades

| Candidato | Definición y criterio de uso | Diferencia o ejemplo | Estado propuesto |
|---|---|---|---|
| Rol | Función contextual asumida por una persona o equipo. | “Revisor de código”; no implica contrato ni título. | Conservar. |
| Puesto | Designación organizacional que agrupa roles, responsabilidades y nivel. | “Backend Developer Senior”. | Conservar separado de rol; representación técnica pendiente. |
| Responsabilidad | Resultado, obligación o ámbito del que alguien responde. | “Aprobar cambios”; no es identidad profesional. | Representar principalmente como declaración estructurada o relación; ficha propia solo cuando tenga valor transversal. |
| Competencia | Capacidad demostrable que combina conocimiento, habilidad y contexto. | “Facilitar respuesta a incidentes”. | Conservar como entidad reutilizable. |
| Concepto | Idea con significado propio necesaria para comprender IT. | “Idempotencia”. | Conservar como tipo base. |
| Principio | Regla o proposición orientadora relativamente estable. | “Mínimo privilegio”; guía decisiones, no prescribe pasos. | Conservar como subtipo conceptual. |
| Paradigma | Marco general que determina cómo se concibe o estructura una clase de soluciones. | Programación funcional. | Conservar como subtipo conceptual. |
| Filosofía | Conjunto amplio de valores y orientaciones. | Lean como pensamiento; menos operativo que un método. | Consolidar como subtipo de orientación conceptual. |
| Metodología | Sistema coherente de métodos, reglas y justificación para conducir trabajo. | Debe existir un enfoque definido, no solo una práctica popular. | Conservar con criterio restrictivo. |
| Framework de trabajo | Estructura adaptable de roles, eventos, artefactos o prácticas para organizar trabajo. | Scrum; no confundir con framework de software. | Conservar y nombrar “marco de trabajo”. |
| Proceso | Secuencia o sistema de actividades con entradas, resultados y control. | Gestión de incidentes. | Conservar. |
| Práctica | Forma recurrente de realizar trabajo para lograr un propósito. | Revisión de código. | Conservar. |
| Técnica | Procedimiento específico aplicable a una tarea. | Particionamiento por equivalencia. | Conservar. |
| Patrón | Solución general reutilizable para un problema recurrente en contexto. | Circuit breaker. | Conservar. |
| Antipatrón | Respuesta recurrente con consecuencias adversas conocidas y alternativas mejores. | God object. | Convertir en subtipo de patrón con polaridad explícita. |
| Estilo arquitectónico | Familia de restricciones y organización de alto nivel de un sistema. | Arquitectura en capas. | Conservar como subtipo arquitectónico. |
| Modelo | Representación simplificada, conceptual o analítica de una realidad. | Modelo OSI o modelo de amenazas. | Conservar; declarar propósito y contexto. |
| Protocolo | Reglas de interacción e intercambio entre participantes. | HTTP. | Conservar. |
| Estándar | Especificación o conjunto de requisitos publicado por un organismo o comunidad identificable. | ISO/IEC 25010 o WCAG. | Conservar; registrar emisor y versión. |
| Tecnología | Capacidad técnica o familia de conocimientos aplicada para resolver problemas. | Virtualización. | Conservar como categoría general, no usar si existe tipo más preciso. |
| Herramienta | Implementación utilizada para ejecutar una tarea. | Git. | Conservar; separar capacidad y marca. |
| Plataforma | Entorno integrado que ofrece capacidades a otros sistemas, equipos o usuarios. | Kubernetes como plataforma de orquestación según contexto. | Conservar; exigir descripción de consumidores y capacidades. |
| Servicio | Capacidad ofrecida mediante una interfaz o acuerdo a consumidores. | DNS administrado o servicio de identidad. | Conservar; no equivale automáticamente a producto. |
| Producto | Oferta gestionada a lo largo de un ciclo de vida para usuarios o clientes. | Puede incorporar plataforma, servicio y herramientas. | Conservar como tipo de contenido explícito. |
| Marca | Identificador comercial o institucional del proveedor u oferta. | Microsoft no es una tecnología. | Conservar como metadato, no como tipo de conocimiento principal. |
| Artefacto | Resultado tangible o registrable producido por una actividad. | ADR, backlog, diagrama o informe. | Conservar. |
| Métrica | Regla y valor de medición de una propiedad. | Latencia p95. | Conservar. |
| Indicador | Interpretación de una o varias métricas para apoyar una decisión. | Indicador de cumplimiento de SLO. | Conservar como subtipo diferenciado dentro de la familia de medición. |
| Objetivo | Estado o resultado deseado, idealmente con criterio verificable. | “99.9 % de disponibilidad mensual”. | No añadir como clasificación general; modelar según contexto. |
| Certificación | Credencial emitida tras evaluar criterios definidos. | Certificación profesional o de producto. | Conservar; diferenciar emisor, alcance y vigencia. |
| Cuerpo de conocimiento | Compilación estructurada y mantenida de conocimiento de una profesión o disciplina. | BABOK Guide. | Tratar como publicación/artefacto de referencia, no como certificación. |

Se aprueban `producto` como tipo de contenido, `marca` como metadato e `indicador` como subtipo de medición. `Cuerpo de conocimiento` se tratará como publicación o artefacto de referencia, no como certificación. El modelo técnico exacto permanece reservado a `docs/03-content-model.md`.

### 6.3 Relaciones

`pertenece a`, `requiere`, `utiliza`, `implementa`, `produce`, `mide` y `se confunde con` describen vínculos entre entidades, no tipos de entrada. Esta taxonomía solo establece esa separación. Cardinalidad, dirección, reciprocidad, validación y catálogo final corresponden a `docs/05-relationship-rules.md`.

### 6.4 Estructuras editoriales y de navegación

| Candidato | Definición y criterio | Ejemplo | Estado propuesto |
|---|---|---|---|
| Comparación | Composición editorial que contrasta entradas mediante dimensiones explícitas. | DevOps frente a SRE. | Convertir en estructura editorial. |
| Escenario | Narrativa contextual que muestra colaboración, secuencia y decisiones entre dominios. | Incidente de producción de extremo a extremo. | Convertir en estructura editorial. |
| Ruta de aprendizaje | Secuencia curada de entradas y objetivos para una audiencia o propósito. | De fundamentos de redes a cloud. | Convertir en estructura editorial y de navegación. |

## 7. Distinciones obligatorias

### 7.1 Personas, trabajo y capacidades

- **Rol frente a puesto:** el rol es una función contextual que puede rotar o combinarse; el puesto es una designación organizacional relativamente estable. Una persona con puesto “Software Engineer” puede asumir los roles de implementador, revisor o responsable de guardia.
- **Rol frente a responsabilidad:** el rol agrupa una función; la responsabilidad expresa aquello de lo que el rol debe responder. Varios roles pueden compartir una responsabilidad y un rol puede tener varias.
- **Responsabilidad frente a competencia:** la responsabilidad indica qué debe lograrse o cuidarse; la competencia indica la capacidad para hacerlo con un nivel esperado.

### 7.2 Formas de organizar el trabajo

- **Filosofía:** valores y supuestos amplios que orientan decisiones; por ejemplo, pensamiento Lean.
- **Metodología:** sistema coherente que explica cómo abordar una clase de trabajo y por qué.
- **Marco de trabajo:** estructura adaptable de elementos y reglas que guía la aplicación; no equivale a una biblioteca de software.
- **Proceso:** actividades relacionadas con entradas, controles y resultados.
- **Práctica:** forma recurrente de trabajo que puede insertarse en varios procesos.
- **Técnica:** procedimiento específico para ejecutar una tarea.

La frontera se decide por la naturaleza del término, no por cómo lo promocione una comunidad. “Ágil” se tratará inicialmente como filosofía y familia de enfoques; cada método o marco recibirá su clasificación propia.

### 7.3 Ideas y estructuras de solución

- **Paradigma:** visión general que condiciona cómo se formulan soluciones.
- **Principio:** regla orientadora para evaluar decisiones.
- **Patrón:** solución general reutilizable a un problema recurrente y contextualizado.
- **Estilo arquitectónico:** restricciones y organización de alto nivel aplicadas a un sistema completo o familia de sistemas.
- **Modelo frente a arquitectura:** un modelo representa o explica; una arquitectura define estructuras, elementos, relaciones y decisiones de una solución o empresa. Una arquitectura puede documentarse mediante varios modelos.

### 7.4 Especificaciones e implementaciones

- **Protocolo frente a estándar:** un protocolo define reglas de interacción; un estándar es una especificación publicada y gobernada. Un protocolo puede estar estandarizado, pero no todo estándar es protocolo.
- **Tecnología:** capacidad o familia técnica general.
- **Herramienta:** implementación que ayuda a realizar una tarea.
- **Plataforma:** entorno que ofrece capacidades integradas a consumidores.
- **Servicio:** capacidad suministrada a través de una interfaz o acuerdo.
- **Producto:** oferta gestionada para un mercado o grupo de usuarios, potencialmente compuesta por servicios, plataformas y herramientas.
- **Marca:** identificador comercial o institucional; no describe por sí mismo la naturaleza de la oferta.

Una misma implementación puede ser herramienta en un contexto y plataforma en otro; la ficha debe declarar el sentido principal y los secundarios.

### 7.5 Medición y acreditación

- **Métrica:** definición y resultado de una medición.
- **Indicador:** interpretación contextual que apoya una decisión o seguimiento.
- **Objetivo:** resultado deseado contra el que pueden evaluarse indicadores.
- **Certificación:** credencial otorgada a una persona, organización o producto conforme a criterios.
- **Cuerpo de conocimiento:** publicación estructurada de una disciplina; puede servir de referencia para una certificación, pero no acredita por sí mismo.

## 8. Reglas de pertenencia

1. **Dominio principal por propósito.** Asignar el dominio que mejor explique el problema central, no el equipo que usa el término ni el proveedor que lo vende.
2. **Prueba de independencia.** Si el término puede definirse plenamente dentro de un dominio sin perder su intención principal, ese será su hogar.
3. **Dominios secundarios con evidencia.** Añadirlos solo cuando el término tenga aplicación sustantiva, no por una asociación remota.
4. **Multidisciplinariedad sin copias.** Mantener una ficha canónica y representar otras perspectivas mediante relaciones y contexto.
5. **Alias, no duplicados.** Variantes lingüísticas, siglas, traducciones y nombres históricos remiten a la entrada canónica.
6. **Sentidos distintos.** Mantener una entrada con acepciones cuando estas compartan un núcleo conceptual; crear entradas diferenciadas y calificadas cuando los significados o relaciones sean incompatibles, por ejemplo, “framework (software)” y “marco de trabajo (gestión)”.
7. **Capacidad antes que comercio.** Clasificar primero el concepto general; vincular productos o marcas como implementaciones cuando tengan relevancia contextual.
8. **Tecnología emergente.** Ubicarla por el problema duradero que aborda y declarar madurez o inestabilidad; no crear dominio por popularidad.
9. **Especificidad proporcional.** Aplazar variantes menores, versiones, funcionalidades efímeras o términos que no justifiquen significado propio.
10. **Conceptos que evolucionan.** Conservar identidad y alias históricos; cambiar su dominio solo mediante propuesta registrada y migración.
11. **Empate razonable.** Si dos dominios son igualmente plausibles, escoger el que reduzca prerequisitos para la audiencia y registrar la alternativa.
12. **Sin dominio forzado.** Cuando no exista justificación suficiente, mantener el término como candidato pendiente en vez de inventar una categoría.

### 8.1 Prueba mínima de clasificación

Antes de aprobar una entrada deberán responderse estas preguntas:

1. ¿Qué problema o capacidad representa?
2. ¿Cuál es su tipo de contenido más específico y estable?
3. ¿Cuál es su dominio principal y por qué?
4. ¿Qué dominios secundarios aportan contexto real?
5. ¿Existe ya una entrada equivalente o un alias?
6. ¿El nombre depende de proveedor, versión, puesto empresarial o uso local?
7. ¿La decisión puede verificarse sin recurrir a la presentación visual?

## 9. Convenciones de nombres

1. Usar **nombre canónico en español**, preciso y en singular cuando nombre una entidad: `patrón`, `protocolo`, `arquitectura empresarial`.
2. Conservar el término inglés como alias cuando sea predominante o necesario para búsqueda: `computación en la nube` / `cloud computing`.
3. Mantener en inglés términos sin traducción asentada o cuya traducción cause ambigüedad, como `backend` o `Site Reliability Engineering`; explicar la expansión en español.
4. Desarrollar el acrónimo en la primera mención y registrarlo como alias: `gestión de servicios de tecnologías de la información (ITSM)`.
5. Preferir minúscula para conceptos comunes y respetar mayúsculas normativas de siglas, estándares y marcas.
6. Usar plural solo para familias convencionales (`bases de datos`, `redes`) y singular para entradas individuales.
7. Registrar nombres históricos y traducciones frecuentes como alias sin crear fichas duplicadas.
8. Identificar marcas y símbolos registrados cuando sea pertinente, pero no usarlos como nombre de una capacidad general.
9. Calificar términos polisémicos por contexto. Usar una entrada con acepciones si comparten el núcleo conceptual y entradas separadas, como `servicio (arquitectura)` y `servicio (gestión)`, cuando sus significados o relaciones sean incompatibles.
10. Evitar nombres ligados a una versión salvo que la versión sea parte esencial del estándar o documento.

Los slugs, prefijos, longitud, formato verificable y política final de IDs quedan **pendientes** para `docs/03-content-model.md` o `docs/10-decision-log.md`.

## 10. Matriz de trazabilidad de áreas candidatas

Las dos fuentes que enumeran áreas (`00-bootstrap-brief.md` y `docs/01-scope-and-audience.md`) contienen la misma lista. Cada elemento se registra una sola vez y la decisión aplica a ambas apariciones.

| Nombre original | Tratamiento propuesto | Ubicación | Nivel | Consolidado con | Transversal | Se aplaza | Justificación |
|---|---|---|---|---|---|---|---|
| Fundamentos de computación | Conservar y normalizar | DOM-01 | Dominio | — | No | No | Base estable de los demás dominios. |
| Hardware y arquitectura de computadores | Conservar | DOM-02 | Subdominio | — | No | No | Describe estructura física y ejecución. |
| Sistemas operativos | Conservar | DOM-02 | Subdominio | — | Sí | No | Software de sistema con impacto en desarrollo e infraestructura. |
| Programación | Dividir por intención | DOM-01 y DOM-03 | Subdominio/capacidad | Fundamentos y desarrollo aplicado | Sí | No | Fundamento conceptual y práctica de implementación. |
| Algoritmos y estructuras de datos | Conservar | DOM-01 | Subdominio | — | Sí | No | Fundamento reutilizado por software, datos e IA. |
| Desarrollo frontend | Conservar | DOM-03 | Subdominio | Desarrollo por superficie | Sí | No | Especialidad de implementación orientada a interfaces cliente. |
| Desarrollo backend | Conservar | DOM-03 | Subdominio | Desarrollo por superficie | Sí | No | Especialidad de servicios y lógica del lado servidor. |
| Desarrollo full stack | Reclasificar | DOM-03 | Perfil/alcance combinado | Frontend + backend | Sí | No | Combina especialidades; no constituye dominio independiente. |
| Desarrollo móvil | Conservar | DOM-03 | Subdominio | Desarrollo por superficie | Sí | No | Superficie con restricciones y ecosistemas propios. |
| Desarrollo de escritorio | Conservar | DOM-03 | Subdominio | Desarrollo por superficie | Sí | No | Superficie de aplicación diferenciable. |
| Desarrollo de videojuegos | Conservar como especialización | DOM-03 | Subdominio | — | Sí | No | Integra software, gráficos, UX y sistemas, con hogar en desarrollo. |
| Sistemas embebidos y firmware | Conservar | DOM-02 | Subdominio | — | Sí | No | Fuerte acoplamiento hardware-software. |
| Ingeniería de software | Conservar y ampliar como agrupación | DOM-04 | Dominio | Arquitectura y calidad de software | Sí | No | Cubre el ciclo de vida más allá de programación. |
| Arquitectura de software | Conservar | DOM-04 | Subdominio y disciplina | Familia de arquitectura | Sí | No | Se aplica a estructuras y decisiones del software. |
| Arquitectura de soluciones | Conservar | DOM-04 | Subdominio y disciplina | Familia de arquitectura | Sí | No | Integra componentes para una necesidad de solución. |
| Arquitectura empresarial | Reubicar | DOM-12 | Subdominio y disciplina | Estrategia y gobierno | Sí | No | Opera sobre capacidades y alineación organizacional. |
| Calidad y pruebas | Conservar, sin dominio propio | DOM-04 | Subdominio y disciplina | Ingeniería de software | Sí | No | Calidad atraviesa dominios; pruebas son una de sus prácticas. |
| Redes y telecomunicaciones | Conservar | DOM-05 | Dominio | — | Sí | No | Cuerpo autónomo de conectividad y comunicación. |
| Infraestructura | Conservar y ampliar | DOM-06 | Dominio | Cloud y operación | Sí | No | Sustrato de provisión y operación tecnológica. |
| Virtualización | Reclasificar | DOM-06 | Subdominio/tecnología | Infraestructura | Sí | No | Mecanismo, no dominio de igual amplitud. |
| Cloud computing | Conservar como subdominio | DOM-06 | Subdominio/modelo tecnológico | Infraestructura y servicios | Sí | No | Modelo de provisión definido por capacidades y servicios [S5]. |
| Contenedores y orquestación | Reclasificar | DOM-06 | Subdominio/tecnología | Infraestructura cloud | Sí | No | Conjunto tecnológico de ejecución y operación. |
| DevOps | Reclasificar | DOM-06 | Filosofía/familia de prácticas | Operación y entrega | Sí | No | No es fase, puesto ni herramienta única. |
| Site Reliability Engineering | Conservar como disciplina | DOM-06 | Subdominio y disciplina | Confiabilidad operativa | Sí | No | Aplica ingeniería de software a operación y confiabilidad [S9]. |
| Platform Engineering | Conservar como disciplina | DOM-06 | Subdominio y disciplina | Plataformas internas | Sí | No | Ofrece capacidades reutilizables a equipos consumidores [S10]. |
| Observabilidad | Reclasificar | DOM-06 | Disciplina transversal | Operación | Sí | No | Capacidad para comprender estado interno mediante señales. |
| Soporte técnico e IT Service Management | Separar internamente | DOM-06 | Subdominios relacionados | Operación de servicios | Sí | No | Soporte ejecuta asistencia; ITSM gobierna creación y gestión de servicios. |
| Ciberseguridad | Conservar | DOM-07 | Dominio y disciplina | — | Sí | No | Autonomía profesional y responsabilidad en todo IT. |
| Identidad y acceso | Reclasificar | DOM-07 | Subdominio | Ciberseguridad | Sí | No | Controla identidades, autenticación y autorización. |
| Privacidad, riesgo y cumplimiento | Separar internamente | DOM-07 y DOM-12 | Subdominios/disciplinas | Riesgo tecnológico y gobierno | Sí | No | Son conceptos relacionados, no equivalentes. |
| Bases de datos | Conservar | DOM-08 | Subdominio | Datos | Sí | No | Mecanismos y disciplina de persistencia y gestión. |
| Ingeniería de datos | Conservar | DOM-08 | Subdominio y disciplina | Datos | Sí | No | Construye flujos y plataformas de datos. |
| Business Intelligence y analítica | Separar internamente | DOM-08 | Subdominios | Datos y decisión | Sí | No | BI enfatiza información empresarial; analítica es más amplia. |
| Ciencia de datos | Conservar | DOM-08 | Subdominio y disciplina | Datos | Sí | No | Combina métodos para extraer conocimiento; ML puede ser secundario. |
| Machine Learning | Reubicar | DOM-09 | Subdominio | Inteligencia artificial | Sí | No | Familia técnica de IA basada en aprendizaje a partir de datos. |
| Inteligencia artificial generativa | Reclasificar | DOM-09 | Subdominio | Inteligencia artificial | Sí | No | Especialización de IA, no dominio par. |
| Gobierno de datos e inteligencia artificial | Separar por objeto | DOM-08, DOM-09 y DOM-12 | Disciplinas transversales | Gobierno tecnológico | Sí | No | Comparte principios, pero gobierna activos y riesgos distintos. |
| Integración y APIs | Separar internamente | DOM-10 | Subdominios/capacidades | Integración | Sí | No | API es mecanismo; integración es propósito más amplio. |
| Mensajería y sistemas orientados a eventos | Conservar | DOM-10 | Subdominio/estilo | Integración | Sí | No | Mensajería implementa comunicación; orientación a eventos organiza soluciones. |
| Sistemas empresariales | Conservar | DOM-10 | Subdominio | Sistemas de información | Sí | No | Familias de sistemas que soportan procesos organizacionales. |
| Producto digital | Conservar | DOM-11 | Subdominio y disciplina | Valor y experiencia | Sí | No | Gestiona resultados y ciclo de vida del producto. |
| Análisis de negocio | Conservar | DOM-11 | Subdominio y disciplina | Producto y cambio | Sí | No | Define necesidades y soluciones que entregan valor [S13]. |
| UX y UI | Separar y relacionar | DOM-11 | Subdominios/disciplinas | Experiencia humana | Sí | No | UX abarca experiencia; UI se centra en interfaz e interacción visual. |
| Gestión de proyectos | Conservar | DOM-12 | Subdominio y disciplina | Portafolios y programas | Sí | No | Coordina trabajo temporal para resultados definidos [S14]. |
| Agilidad y Lean | Separar por naturaleza | DOM-12 | Filosofías/familias de métodos | Formas de trabajo | Sí | No | Tienen orígenes y alcances distintos, aunque se relacionan. |
| Gobierno de IT | Conservar y normalizar | DOM-12 | Subdominio | Estrategia y gobierno | Sí | No | Evalúa, dirige y supervisa información y tecnología [S12]. |
| Gestión financiera de tecnología | Conservar | DOM-12 | Subdominio y disciplina | Gobierno tecnológico | Sí | No | Trata costo, inversión, valor y economía de servicios tecnológicos. |
| Liderazgo tecnológico | Reclasificar | DOM-12 | Disciplina/competencia | Estrategia y organización | Sí | No | Capacidad humana y organizacional, no tecnología. |
| IoT, robótica y tecnologías especializadas | Descomponer y eliminar el contenedor genérico | DOM-02 para IoT y robótica; otras especialidades se evaluarán individualmente | Subdominios y candidatos individuales | Sistemas ciberfísicos | Sí | Parcial | IoT y robótica se conservan; “tecnologías especializadas” no se mantiene como categoría y cada especialidad futura deberá superar criterios de admisión. |

Ningún tema concreto se elimina. La etiqueta abierta `tecnologías especializadas` deja de ser categoría taxonómica; las especialidades no enumeradas quedan aplazadas para evaluación individual mediante los criterios de evolución de la sección 12.

## 11. Ambigüedades y solapamientos

| Conflicto | Problema | Opciones consideradas | Decisión propuesta | Consecuencia | Estado |
|---|---|---|---|---|---|
| Desarrollo de software frente a ingeniería de software | En uso cotidiano se intercambian, pero difieren en amplitud y rigor. | Unirlos; separarlos por ciclo de vida; tratar desarrollo como práctica. | DOM-03 cubre implementación por superficies; DOM-04 cubre ciclo de vida, diseño, arquitectura y calidad. | Una entrada puede relacionarse con ambos sin duplicarse. | Adoptada inicialmente. |
| Arquitectura de software, soluciones y empresarial | Comparten vocabulario, pero cambian objeto, alcance y decisiones. | Un solo dominio; tres dominios; disciplinas con hogares. | Software y soluciones en DOM-04; empresarial en DOM-12; familia transversal “arquitectura”. | Permite comparación explícita y evita tres dominios principales. | Adoptada inicialmente. |
| Infraestructura frente a cloud | Cloud no sustituye toda infraestructura y también es modelo de servicio. | Dominios separados; cloud como subdominio; cloud transversal. | Cloud es subdominio de DOM-06 con relaciones a redes, seguridad y finanzas. | Se prioriza capacidad sobre proveedor. | Adoptada inicialmente. |
| DevOps frente a SRE y Platform Engineering | Se presentan con frecuencia como sinónimos, etapas o puestos. | Dominio por término; consolidación total; disciplinas relacionadas. | DevOps: filosofía/familia de prácticas; SRE: disciplina de confiabilidad; Platform Engineering: disciplina de plataformas internas, todas en DOM-06. | Las comparaciones deberán explicar objetivos, consumidores y mecanismos. | Adoptada inicialmente. |
| Datos, bases de datos, BI, ciencia de datos e IA | Mezcla activos, infraestructura, análisis y sistemas inteligentes. | Un macrodominio; dominios por especialidad; datos e IA separados. | DOM-08 cubre ciclo del dato y analítica; DOM-09 cubre IA. Bases de datos, BI y ciencia de datos son subdominios. | ML tiene hogar en IA y relación fuerte con datos. | Adoptada inicialmente. |
| Seguridad propia y transversal | Si solo es dominio, se aísla; si solo es etiqueta, pierde profundidad. | Dominio único; disciplina distribuida; modelo dual. | DOM-07 como hogar y seguridad como disciplina transversal. | Una entrada canónica con aplicaciones por dominio. | Adoptada inicialmente. |
| Producto digital frente a gestión de proyectos | Ambos coordinan trabajo, pero uno gestiona valor continuo y otro esfuerzo temporal. | Unirlos; separar por objeto; tratar ambos como roles. | Producto en DOM-11; proyectos en DOM-12. | Se podrá explicar colaboración sin asumir que producto es proyecto. | Adoptada inicialmente. |
| Agilidad como filosofía, métodos o dominio | El término cambia según comunidad y suele usarse como etiqueta genérica. | Dominio propio; metodología única; familia tipada. | Agilidad es filosofía/familia; cada marco, método o práctica se clasifica por su naturaleza en DOM-12. | Evita convertir “ágil” en contenedor indiferenciado. | Adoptada inicialmente. |
| Gobierno de IT, datos e IA | Comparten supervisión y riesgo, pero tienen objetos y marcos distintos. | Consolidación completa; dominios separados; gobierno federado. | Gobierno tecnológico en DOM-12; gobierno de datos en DOM-08 y de IA en DOM-09 como disciplinas relacionadas. | Las reglas finales deberán expresar coordinación y alcance. | Adoptada inicialmente; detalle pendiente. |
| Calidad como dominio o atributo | Calidad posee prácticas propias pero se concreta en múltiples objetos. | Dominio principal; subdominio de software; disciplina transversal. | Hogar en DOM-04 y disciplina aplicable a servicios, datos, IA, seguridad y producto. | El modelo deberá evitar reducir calidad a pruebas. | Adoptada inicialmente. |
| Soporte técnico frente a ITSM | Soporte es una función operativa; ITSM abarca gobierno y gestión del servicio. | Una sola categoría; dominios separados; subdominios relacionados. | Ambos en DOM-06, separados internamente y relacionados con DOM-12. | Conserva una ruta simple sin declararlos equivalentes. | Adoptada inicialmente. |
| “Tecnologías de la información” como campo y disciplina | En algunos países IT denomina todo el campo y en otros una disciplina concreta [S4]. | Elegir una acepción universal; duplicar; declarar contexto. | IT Study usa “IT” como ecosistema amplio; las entradas académicas deberán calificar su contexto. | La búsqueda conservará alias, pero la definición indicará región o marco. | Adoptada inicialmente. |

No se identificaron contradicciones materiales entre las tres fuentes de autoridad. Sí existen **decisiones deliberadamente aplazadas** y vocabulario candidato ambiguo. La frase del documento semilla “deberá distinguir, como mínimo” no se interpreta como obligación de convertir cada candidato en tipo independiente porque las mismas fuentes ordenan validarlos y evitar redundancias; se conserva cada distinción semántica, aunque algunas pasen a subtipo, relación o estructura editorial.

## 12. Criterios de evolución

### 12.1 Añadir un dominio

Un nuevo dominio requerirá:

1. problema y propósito autónomos;
2. cobertura que no pueda representarse razonablemente como subdominio o disciplina;
3. vocabulario, prácticas y relaciones suficientes;
4. relevancia transversal para la audiencia;
5. análisis de solapamientos y migración;
6. decisión registrada y actualización de la matriz de trazabilidad.

La popularidad, una marca, una vacante o una tecnología emergente no bastan.

### 12.2 Dividir o consolidar

- Dividir cuando un dominio acumule propósitos incompatibles, reglas de pertenencia inestables o subdominios autónomos difíciles de navegar.
- Consolidar cuando dos categorías produzcan duplicación sostenida y su distinción pueda conservarse mediante subdominios o disciplinas.
- Mantener identificadores previos como alias o redirecciones; no reutilizarlos para otro significado.
- Publicar una tabla de migración `anterior -> vigente`, motivo, fecha y entradas afectadas.

### 12.3 Deprecar y renombrar

Un nombre deprecado no se borra silenciosamente. Se conservará como alias histórico con estado, reemplazo y motivo. Un cambio de etiqueta que no altere significado podrá conservar el identificador; un cambio semántico requerirá nueva identidad y migración.

### 12.4 Migrar términos

Cambiar el dominio principal exige revisar dominios secundarios, prerequisitos, comparaciones, escenarios y rutas que lo referencian. La referencia estable debe sobrevivir cuando el significado no cambie.

### 12.5 Revisar tecnologías emergentes

Las candidatas se revisarán por impacto conceptual, adopción profesional, estabilidad terminológica, calidad de fuentes y capacidad de ubicarse en dominios existentes. Podrán permanecer con estado experimental y fecha de revisión. La periodicidad y estados exactos quedan pendientes de `docs/03-content-model.md`, `docs/04-editorial-guidelines.md` y `docs/09-quality-criteria.md`.

### 12.6 Registrar cambios

Todo cambio estructural deberá incluir:

- descripción y motivo;
- evidencia o fuentes;
- estado de aprobación;
- impacto en IDs y relaciones;
- plan de migración;
- actualización de documentos e inventarios afectados;
- registro en `docs/10-decision-log.md` cuando corresponda.

## 13. Impacto en documentos posteriores

| Documento o inventario | Condicionamiento de esta taxonomía |
|---|---|
| `docs/03-content-model.md` | Deberá representar dominio principal, dominios secundarios, subdominio, disciplina, tipo, alias, sentidos y estado sin codificar presentación. Formalizará IDs, cardinalidades y tipos técnicos. |
| `docs/04-editorial-guidelines.md` | Deberá aplicar las distinciones semánticas, declarar contexto y evitar que productos definan capacidades generales. Establecerá profundidad y estilo de citas. |
| `docs/05-relationship-rules.md` | Deberá convertir los vínculos candidatos en catálogo dirigido y verificable, incluido `pertenece a`, prerequisitos, implementaciones, medición y confusión. |
| `docs/07-mvp-definition.md` | Seleccionará representación equilibrada de los 12 dominios sin asumir cobertura exhaustiva ni fijar aquí cantidades. |
| `docs/08-production-batches.md` | Organizará lotes por subdominio o pregunta educativa y controlará dependencias transversales, sin duplicar fichas. |
| `inventories/domains.yaml` | Materializará, tras aprobación, identificadores, nombres, alias, definiciones, alcance y estado de dominios/subdominios. Este documento no crea el archivo. |
| `inventories/classifications.yaml` | Formalizará tipos conservados, subtipos y restricciones; no deberá reintroducir como tipos las estructuras editoriales. |
| `inventories/initial-terms.csv` | Asignará cada término a un dominio principal, secundarios y tipo conforme a las reglas; no se genera todavía. |

## 14. Decisiones adoptadas y reservadas

### 14.1 Decisiones taxonómicas iniciales adoptadas

- Se aprueban 12 dominios principales, enumerados en la sección 4.
- La jerarquía inicial utiliza únicamente dominio y subdominio.
- Área queda como agrupación editorial opcional; disciplina, como clasificación transversal.
- Cada término tendrá una entrada canónica, un dominio principal cuando sea razonable y dominios secundarios justificados.
- Seguridad es dominio y disciplina transversal.
- Calidad, arquitectura, observabilidad, automatización, accesibilidad, gobierno, confiabilidad, privacidad, riesgo y liderazgo se modelan con hogar y alcance transversal.
- Desarrollo se separa de ingeniería de software.
- Datos se separa de IA; bases de datos, BI, analítica y ciencia de datos no se elevan a dominios pares.
- DevOps, SRE y Platform Engineering se mantienen diferenciados dentro de DOM-06.
- Arquitectura empresarial se ubica en DOM-12; arquitectura de software y de soluciones, en DOM-04.
- Comparación, escenario y ruta de aprendizaje son estructuras editoriales, no categorías taxonómicas.
- Antipatrón se consolida como subtipo de patrón; filosofía como orientación conceptual; marca como metadato.
- Los identificadores `DOM-01` a `DOM-12` son candidatos de trazabilidad, no esquema técnico definitivo.

### 14.2 Decisiones ratificadas el 2026-07-20

| N.º | Decisión aprobada | Consecuencia taxonómica |
|---|---|---|
| 1 | Aprobar los 12 dominios principales. | Constituyen la taxonomía inicial de referencia para los documentos posteriores. |
| 2 | Renombrar DOM-02 como `Sistemas de cómputo y sistemas ciberfísicos`. | Se elimina del nombre el contenedor ambiguo “computación especializada”. |
| 3 | Mantener DOM-06 como un dominio único con cuatro agrupaciones internas. | Se conserva una jerarquía controlada sin confundir infraestructura, plataformas, confiabilidad y gestión de servicios. |
| 4 | Incorporar `producto` como tipo de contenido. | Podrá distinguirse de herramienta, plataforma, servicio y marca. |
| 5 | Representar `marca` como metadato. | Una marca no constituirá por sí sola una categoría técnica. |
| 6 | Utilizar `área` solo como agrupación editorial opcional. | No formará parte de la jerarquía canónica `dominio > subdominio`. |
| 7 | Conservar `competencia` como entidad reutilizable. | Podrá relacionarse con diferentes roles, puestos, disciplinas y rutas. |
| 8 | Representar `responsabilidad` principalmente como declaración o relación. | Solo tendrá ficha propia cuando aporte valor transversal suficiente. |
| 9 | Diferenciar métrica e indicador dentro de una familia de medición. | Ambos conservarán significado propio sin elevar `objetivo` a clasificación global. |
| 10 | No conservar el contenedor genérico `tecnologías especializadas`. | Cada especialidad futura se evaluará individualmente mediante criterios de admisión. |
| 11 | Separar acepciones polisémicas únicamente cuando sean incompatibles. | Los sentidos compatibles compartirán entrada; los incompatibles tendrán entradas calificadas. |
| 12 | Reservar IDs, catálogo de relaciones y cantidades del MVP para documentos especializados. | La taxonomía define principios, pero no anticipa contratos técnicos ni cobertura de producto. |

No quedan propuestas taxonómicas de esta sección pendientes de aprobación. La materialización técnica de las decisiones se realizará en los documentos indicados en la sección 14.3.

### 14.3 Decisiones reservadas a documentos posteriores

- esquema técnico y convención verificable de IDs;
- campos, cardinalidades, estados y formato de almacenamiento;
- catálogo final y semántica de relaciones;
- política editorial de fuentes, longitud y vigencia;
- cobertura, prioridades y cantidades del MVP;
- inventario inicial, lotes y criterios de aprobación;
- navegación visual, componentes y diseño;
- frecuencia de revisión de tecnologías emergentes;
- indicadores y umbrales cuantitativos de éxito.

### 14.4 Contradicciones entre fuentes

No se encontraron contradicciones materiales. Las tres fuentes coinciden en propósito, audiencia, profundidad, neutralidad tecnológica, separación entre contenido y presentación y carácter candidato de las listas. La diferencia de redacción sobre “distinguir como mínimo” se resuelve conservando las distinciones conceptuales sin obligar a que todas sean categorías independientes; esta interpretación queda registrada, no silenciosa.

## 15. Fuentes

### 15.1 Fuentes internas de autoridad

| Ref. | Organización o autor | Documento | Propósito de consulta | Fecha |
|---|---|---|---|---|
| S1 | IT Study | `00-bootstrap-brief.md` | Visión, principios, áreas y clasificaciones candidatas, restricciones y decisiones pendientes. | 2026-07-19 |
| S2 | IT Study | `docs/00-project-charter.md` | Propósito, autoridad documental, responsabilidades y criterios generales de éxito. | 2026-07-19 |
| S3 | IT Study | `docs/01-scope-and-audience.md` | Alcance, audiencia, inclusión/exclusión, tratamiento comercial y límites de la taxonomía. | 2026-07-19 |

### 15.2 Fuentes externas consultadas

| Ref. | Organización o autor | Documento y enlace | Propósito de consulta | Fecha |
|---|---|---|---|---|
| S4 | ACM e IEEE Computer Society | [Computing Curricula 2020: Paradigms for Global Computing Education](https://www.acm.org/binaries/content/assets/education/curricula-recommendations/cc2020.pdf) | Contrastar disciplinas de computación, sus solapamientos, fundamentos compartidos y variación terminológica internacional. | 2026-07-19 |
| S5 | NIST, P. Mell y T. Grance | [SP 800-145 — The NIST Definition of Cloud Computing](https://csrc.nist.gov/pubs/sp/800/145/final) | Delimitar cloud como modelo de acceso y provisión de recursos, no como sinónimo de toda infraestructura. | 2026-07-19 |
| S6 | ISO/IEC JTC 1/SC 7 | [ISO/IEC 25010:2023 — Product quality model](https://www.iso.org/standard/78176.html) | Contrastar calidad como modelo de características aplicable a productos ICT y software. | 2026-07-19 |
| S7 | NIST | [Cybersecurity Framework 2.0 Resource Center](https://www.nist.gov/cyberframework) y [Cybersecurity and Privacy](https://www.nist.gov/cybersecurity-and-privacy) | Delimitar ciberseguridad, gobierno de riesgo y relación con privacidad. | 2026-07-19 |
| S8 | NIST | [AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) | Contrastar ciclo de riesgo, confianza y gobierno específico de sistemas de IA. | 2026-07-19 |
| S9 | Google | [Site Reliability Engineering](https://sre.google/) | Diferenciar SRE como aplicación de ingeniería de software a problemas de operación y confiabilidad. | 2026-07-19 |
| S10 | CNCF TAG App Delivery | [CNCF Platforms White Paper](https://tag-app-delivery.cncf.io/whitepapers/platforms/) | Delimitar plataformas internas, consumidores y valor de Platform Engineering. | 2026-07-19 |
| S11 | PeopleCert | [ITIL framework](https://www.peoplecert.org/Frameworks-Professionals/ITIL-framework) | Contrastar gestión de productos y servicios digitales y diferenciarla de soporte técnico. | 2026-07-19 |
| S12 | ISACA | [COBIT](https://www.isaca.org/resources/cobit) | Contrastar gobierno y gestión integral de información y tecnología. | 2026-07-19 |
| S13 | IIBA | [The Business Analysis Standard](https://www.iiba.org/knowledgehub/the-business-analysis-standard/) | Delimitar análisis de negocio como práctica de cambio, necesidades y valor. | 2026-07-19 |
| S14 | Project Management Institute | [What Is Project Management](https://www.pmi.org/about/what-is-project-management) | Diferenciar gestión de proyectos de producto, operación y liderazgo general. | 2026-07-19 |
| S15 | W3C Web Accessibility Initiative | [WCAG 2 Overview](https://www.w3.org/WAI/standards-guidelines/wcag/) | Contrastar accesibilidad como disciplina transversal respaldada por estándares. | 2026-07-19 |
| S16 | ISO/IEC JTC 1/SC 7 | [ISO/IEC 25012:2008 — Data quality model](https://www.iso.org/standard/35736.html) | Distinguir calidad y gobierno de datos de calidad general de software. | 2026-07-19 |
| S17 | Autores del Manifiesto Ágil | [Manifesto for Agile Software Development](https://agilemanifesto.org/) | Confirmar que el núcleo original de Agile expresa valores orientadores y no un marco único. | 2026-07-19 |
| S18 | The Open Group | [The TOGAF Standard](https://www.opengroup.org/togaf) | Contrastar arquitectura empresarial como metodología y marco de alcance organizacional. | 2026-07-19 |
| S19 | ISO, IEC e IEEE | [ISO/IEC/IEEE 24765:2017 — Systems and software engineering vocabulary](https://www.iso.org/standard/71952.html) | Usar un vocabulario institucional común como referencia para distinciones de ingeniería de sistemas y software. | 2026-07-19 |

## 16. Cierre

La propuesta convierte una lista heterogénea de áreas en una estructura inicial de 12 dominios, con subdominios y disciplinas transversales explícitas. Conserva la cobertura integral de IT Study sin confundir jerarquía, tipo de contenido, relación y navegación editorial.

La taxonomía queda suficientemente definida para orientar el modelo de contenido y las reglas editoriales, pero no se declara definitiva. Su aprobación, materialización técnica y evolución deberán seguir la autoridad documental y trazabilidad establecidas por el proyecto.
