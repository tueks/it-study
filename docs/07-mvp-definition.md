# IT Study — Definición del MVP

## 1. Identificación y propósito

- **Proyecto:** IT Study.
- **Documento:** Definición del Minimum Viable Product (MVP).
- **Nombre oficial:** IT Study — Definición del MVP.
- **Ruta oficial:** `docs/07-mvp-definition.md`.
- **Estado:** aprobado como definición normativa del MVP.
- **Fecha:** 2026-07-20.
- **Fecha de aprobación:** 2026-07-20.
- **Propósito:** delimitar la primera versión capaz de validar el mapa de conocimiento y glosario contextual de IT Study.
- **Alcance:** valor, usuarios, capacidades, cobertura, cantidades, exclusiones, flujos, terminación, aceptación, riesgos y dependencias del MVP; no implementación ni diseño visual.
- **Audiencia:** coordinación del proyecto, ChatGPT Trabajo, revisores humanos, Codex y futuros responsables de contenido, producto, arquitectura y experiencia.
- **Documentos de autoridad, en orden:**
  1. `00-bootstrap-brief.md`;
  2. `docs/00-project-charter.md`;
  3. `docs/01-scope-and-audience.md`;
  4. `docs/02-taxonomy.md`;
  5. `docs/03-content-model.md`;
  6. `docs/04-editorial-guidelines.md`;
  7. `docs/05-relationship-rules.md`;
  8. `docs/06-design-boundaries.md`.

### 1.1 Propósito

Este documento convierte la visión, el alcance y los contratos aprobados en una primera versión publicable y verificable. Define el valor que debe validar el MVP, sus usuarios y casos de uso prioritarios, capacidades, cobertura educativa, composición cuantitativa, exclusiones, recorridos completos y condiciones de terminación.

Su función es impedir dos extremos: un prototipo sin contenido suficiente para demostrar el valor de IT Study y una primera versión que intente cubrir exhaustivamente IT. También establece límites para producir contenido por lotes, preparar inventarios y ejemplos canónicos y orientar después la arquitectura y UX/UI sin anticipar sus decisiones.

### 1.2 Alcance y audiencia de este documento

Aplica a la coordinación del proyecto, ChatGPT Trabajo, revisores humanos, Codex y futuros responsables de contenido, producto, arquitectura y experiencia. Su audiencia de producto es la aprobada en `docs/01-scope-and-audience.md`: personas que trabajan, estudian o colaboran en entornos de IT y necesitan comprender vocabulario y conversaciones fuera de su especialidad, sin presuponer programación, experiencia laboral ni dominio del inglés técnico.

### 1.3 Decisiones que define

Este documento define:

- interpretación de mínimo, viable y producto para IT Study;
- hipótesis de valor y evidencia mínima esperada;
- casos de uso prioritarios y propuesta de valor del MVP;
- capacidades obligatorias, aplazadas y excluidas;
- representación mínima de los doce dominios aprobados;
- cantidades iniciales, objetivos y límites de producción;
- distribución, prioridad y profundidad editorial;
- estados publicables y requisitos funcionales generales de fuentes;
- flujos de extremo a extremo;
- condiciones de terminación, aceptación e indicadores iniciales;
- riesgos y dependencias del MVP.

### 1.4 Decisiones reservadas

No define tecnología, generador estático, motor de búsqueda, estructura ejecutable, proveedores, despliegue, métricas técnicas finales, pantallas, arquitectura de información concreta, componentes, layouts, colores, iconografía ni visualizaciones. Tampoco crea fichas, inventarios, ejemplos o contratos operativos.

Quedan reservados:

- lotes, tamaños de lote y secuencia detallada: `docs/08-production-batches.md`;
- severidades, tolerancias, métricas y umbrales finales: `docs/09-quality-criteria.md`;
- excepciones y cambios de decisiones: `docs/10-decision-log.md`;
- investigación, producción, fuentes y revisión operativa: documentos de `work/`;
- selección exacta de entradas: `inventories/`;
- ejemplos de conformidad: `examples/`;
- arquitectura técnica e implementación: fase posterior;
- flujos, interacción y sistema visual: fase UX/UI posterior.

## 2. Definición de MVP para IT Study

### 2.1 Mínimo

“Mínimo” es el menor conjunto coherente de contenido y capacidades que permite completar la consulta directa, la exploración estructurada y la continuación relacional en una cobertura transversal. No significa una demostración vacía, fichas incompletas, relaciones genéricas ni reducción de los contratos aprobados.

El mínimo debe incluir contenido suficiente para que búsqueda, glosario, dominios, relaciones, comparaciones, escenarios y rutas produzcan resultados reales. Una función sin contenido representativo no se considera incluida.

### 2.2 Viable

“Viable” significa que una persona de la audiencia puede obtener valor educativo completo sin asistencia del equipo del proyecto: localizar un término, reconocer su significado y clasificación, entender su contexto, resolver una confusión y continuar hacia conocimientos relacionados. El producto debe ser publicable, comprensible, accesible, trazable, mantenible y consistente aunque no cubra exhaustivamente IT.

La viabilidad exige contenido `approved`, relaciones verificables, referencias resueltas, navegación funcional y ausencia de errores estructurales bloqueantes. No se sacrifica consistencia para aumentar el volumen.

### 2.3 Producto

“Producto” es una experiencia integrada de consulta y exploración, no una colección de archivos ni un prototipo visual. Comprende una propuesta de entrada clara, búsqueda, glosario, exploración de los doce dominios, fichas, relaciones y estructuras editoriales que operan juntas sobre una fuente canónica reutilizable.

### 2.4 Límites de interpretación

El MVP:

- valida IT Study como mapa de conocimiento y glosario contextual;
- es útil sin cubrir todo IT ni todas las entradas de cada dominio;
- ofrece recorridos completos de consulta y exploración;
- utiliza contenido aprobado, fuentes normalizadas y relaciones verificables;
- no es un prototipo visual vacío ni una maqueta con texto provisional;
- no es la versión final ni demuestra todas las extensiones posibles;
- prioriza consistencia, comprensión y transversalidad sobre cantidad;
- no convierte fichas en tutoriales, cursos o manuales operativos;
- conserva el contenido independiente del diseño, canal y dispositivo.

## 3. Hipótesis de valor

Las condiciones siguientes son mínimos de aceptación del valor, no un diseño de pruebas de usabilidad ni de analítica.

| N.º | Hipótesis | Evidencia esperada | Función o contenido que la valida | Condición mínima de aceptación | Riesgo de validación falsa |
|---:|---|---|---|---|---|
| 1 | Una persona puede comprender un término de IT sin leer un curso completo. | La persona puede explicar qué es, para qué existe y en qué contexto aparece. | Búsqueda, `summary`, `definition`, `purpose`, `problemSolved`, contexto y ejemplo de una ficha. | El flujo de consulta directa termina en una ficha `approved` de profundidad adecuada y ofrece una comprensión autónoma, sin instrucciones externas. | Elegir solo términos conocidos, confundir lectura con comprensión o usar fichas tan largas que funcionen como cursos abreviados. |
| 2 | La clasificación por dominios y tipos ayuda a construir un mapa mental. | La persona ubica una entrada en su dominio y distingue su naturaleza, por ejemplo concepto, práctica, rol o estándar. | Exploración de los doce dominios, tipo, dominio principal, subdominios y filtros esenciales. | Toda entidad publicable tiene tipo válido y dominio principal, salvo excepción admitida por el modelo; cada dominio está representado. | El usuario puede acertar por familiaridad previa o la interfaz puede insinuar una jerarquía no presente en la taxonomía. |
| 3 | Las relaciones aportan más valor que un glosario aislado. | Desde una ficha se descubre al menos un prerrequisito, uso, implementación, contraste o conocimiento relacionado que aclara el término. | Relaciones específicas, campos de autoridad, inversas derivadas y navegación por IDs. | Las entradas esenciales tienen relaciones deliberadas y se puede continuar sin enlaces rotos ni asociaciones arbitrarias. | Contar enlaces como valor, mostrar relaciones generales o crear aristas solo para habilitar navegación. |
| 4 | Alias y términos en inglés facilitan encontrar vocabulario profesional. | Una consulta por sigla, traducción o término inglés conduce a la entrada canónica. | Índice de `title`, `canonicalName`, `englishName`, `aliases` y acrónimos. | Las variantes aprobadas recuperan la misma ficha sin duplicarla e indican cuando la coincidencia fue por alias. | Probar únicamente alias idénticos al título, mantener sinónimos de búsqueda no gobernados o crear duplicados por idioma. |
| 5 | Las comparaciones reducen confusiones frecuentes. | La persona identifica semejanzas, diferencias y criterio contextual entre términos confundibles. | Comparaciones con razón y dimensiones explícitas; `confusedWith` o `confused-with` cuando corresponda. | Cada comparación mínima usa entradas existentes, dos o más dimensiones pertinentes y no declara un ganador universal. | Comparar términos evidentemente distintos, formular dimensiones tendenciosas o medir recuerdo inmediato sin comprensión. |
| 6 | Los escenarios ayudan a comprender colaboración multidisciplinaria. | La persona reconoce participantes, dominios, decisiones, artefactos y consecuencias de un caso plausible. | Escenarios introductorios que referencian entradas existentes. | Cada escenario mínimo involucra al menos tres dominios y conserva su carácter educativo, no prescriptivo. | Elegir un caso donde la colaboración ya es obvia, mencionar dominios sin participación real o confundir secuencia narrativa con procedimiento. |
| 7 | Las rutas permiten iniciar una exploración ordenada. | La persona entiende el objetivo, el punto de partida, el orden y el resultado esperado de una ruta. | Rutas introductorias con audiencia, prerrequisitos, entradas, checkpoints y finalización. | Cada ruta mínima usa fichas existentes, justifica su orden y puede completarse sin prometer especialización. | Ordenar por conveniencia editorial sin dependencia pedagógica o considerar clics como aprendizaje. |
| 8 | El contenido puede reutilizarse sin depender del diseño. | La misma fuente produce al menos dos representaciones o supera las pruebas conceptuales de sustitución sin cambiar significado. | Modelo estructurado, referencias por ID, ausencia de HTML de presentación y separación de capas. | Cambiar tema, representación de ficha o salida imprimible no exige modificar contenido, taxonomía ni relaciones. | Generar dos vistas casi idénticas o ocultar acoplamiento en configuración específica de cada ficha. |
| 9 | La cobertura transversal aporta valor sin ser exhaustiva. | La persona puede iniciar exploración en cualquiera de los doce dominios y atravesar fronteras relevantes. | Representación mínima por dominio, conceptos puente, disciplinas y relaciones entre dominios. | Los doce dominios cumplen la definición de representación y la revisión no detecta vacíos fundamentales que invaliden su propósito. | Cumplir una cuota con entradas periféricas, igualar cantidades artificialmente o concentrar la profundidad real en desarrollo de software. |

## 4. Usuario y casos de uso prioritarios

### 4.1 Usuario primario

El usuario primario es una persona que trabaja, estudia o colabora en IT y consulta un término escuchado en una reunión, entrevista, clase, lectura o conversación. Necesita una respuesta rápida, técnicamente precisa y contextual, sin cursar primero una especialización.

El **caso de uso primario** es: buscar por nombre, alias o sigla; abrir la entrada canónica; comprender definición, propósito y contexto; ubicarla por dominio y tipo; y continuar mediante una relación relevante.

### 4.2 Casos de uso secundarios del MVP

- comprender un área fuera de la especialidad propia;
- diferenciar términos similares o usados incorrectamente como equivalentes;
- identificar prerrequisitos indispensables y progresión recomendada;
- explorar relaciones entre disciplinas, roles, prácticas, estándares e implementaciones;
- entender colaboración multidisciplinaria mediante escenarios;
- recorrer una ruta introductoria con orden y criterio de finalización;
- apoyar una conversación, entrevista, clase, vacante, decisión o lectura técnica;
- construir un mapa mental inicial de IT mediante dominios, tipos y conceptos puente.

Estos casos atienden a los perfiles secundarios aprobados: desarrolladores especializados, líderes técnicos o arquitectos en desarrollo, estudiantes, analistas de negocio o producto, diseñadores UX/UI, responsables de proyectos, especialistas de soporte, operaciones, infraestructura, seguridad o datos, personas en transición y colaboradores no técnicos.

### 4.3 Casos válidos pero aplazados

- seguimiento personal de aprendizaje y progreso;
- rutas adaptativas o recomendaciones personalizadas;
- evaluación formal, calificaciones o credenciales;
- práctica mediante laboratorios complejos;
- colaboración social, comentarios o contenido generado por usuarios;
- uso completo sin conexión, aplicación móvil nativa o sincronización entre dispositivos;
- edición editorial desde la web;
- localización integral a otros idiomas.

Su aplazamiento no autoriza a preparar infraestructura anticipada ni a modificar el alcance general.

## 5. Propuesta de valor del MVP

IT Study permitirá buscar un término de IT por nombre, término profesional en inglés, alias o sigla y obtener una explicación breve pero contextual: qué es, por qué existe, qué problema atiende, qué tipo de conocimiento representa, cuál es su dominio principal, con qué se relaciona, de qué se diferencia y hacia qué conocimientos puede continuar la exploración.

La primera versión ofrecerá esa experiencia sobre una cobertura transversal de los doce dominios y una sola fuente canónica reutilizable. No promete dominio profesional, formación práctica completa, preparación integral para certificaciones, personalización avanzada, cobertura exhaustiva ni actualización en tiempo real.

## 6. Principios de selección del MVP

1. **Valor educativo antes que volumen.** Una entrada se incluye si mejora reconocimiento, contexto, relación o cobertura; no para alcanzar una cifra.
2. **Cobertura transversal antes que exhaustividad.** Todos los dominios se representan, pero su profundidad varía conforme a amplitud, prerrequisitos y valor para la audiencia.
3. **Fundamentos antes que tendencias.** Se priorizan bases estables que permiten comprender varias entradas.
4. **Relaciones específicas antes que cantidad de enlaces.** Se utiliza la clave más precisa y solo si responde una pregunta educativa.
5. **Consistencia antes que velocidad.** El contenido incompleto o incompatible no se publica para aumentar cobertura aparente.
6. **Contenido aprobado antes que provisional.** Las funciones públicas usan ordinariamente contenido `approved`.
7. **Búsqueda rápida junto con exploración estructurada.** Ninguna sustituye a la otra.
8. **Una sola fuente canónica.** Alias, idiomas, vistas y dispositivos no duplican fichas.
9. **Accesibilidad y reutilización.** El significado se conserva sin color, visualización o dispositivo específico.
10. **Complejidad técnica proporcional.** Solo se implementa lo necesario para validar casos e hipótesis aprobados.
11. **Ausencia de funciones sin contenido suficiente.** Una capacidad no se declara terminada si sus resultados son escasos, provisionales o artificiales.
12. **Ampliación por lotes.** La composición admite crecimiento sin redefinir contratos ni reabrir el MVP.
13. **Neutralidad tecnológica.** Se explican capacidades antes que productos y se limita la presencia comercial.
14. **Revisión humana viable.** El tamaño, las dependencias y el lote deben permitir revisión conceptual y editorial real.

## 7. Alcance funcional obligatorio

### 7.1 Página o punto de entrada

Debe comunicar, sin depender de una forma visual concreta:

- qué es IT Study y qué problema resuelve;
- qué tipos de contenido pueden consultarse;
- cómo iniciar una búsqueda;
- cómo comenzar una exploración por los doce dominios;
- qué rutas o materiales introductorios aprobados están disponibles;
- que el producto ofrece comprensión contextual y no cursos completos.

El criterio es semántico y funcional; layout, jerarquía visual, componentes y apariencia corresponden a UX/UI.

### 7.2 Búsqueda

La búsqueda es `Must have` y debe indexar, como mínimo, `title`, `canonicalName`, `englishName`, `aliases`, acrónimos y `summary`. Puede utilizar términos confundibles como vía de descubrimiento cuando exista una relación aprobada, sin tratar la confusión como alias.

Comportamiento mínimo:

- aceptar consultas sin exigir conocer la clasificación;
- normalizar diferencias ordinarias de mayúsculas y diacríticos sin alterar los IDs;
- resolver nombre español, término profesional en inglés, sigla y alias hacia la misma entrada;
- mostrar resultados que permitan reconocer título, resumen, tipo y dominio principal;
- identificar de forma comprensible una coincidencia por alias o acrónimo;
- abrir la ficha canónica mediante ID resuelto;
- excluir de resultados ordinarios estados no publicables;
- ante ausencia de resultados, informar con claridad, permitir ajustar la consulta y ofrecer acceso a glosario o dominios, sin inventar respuestas ni candidatos.

Límites: no requiere personalización, historial, búsqueda semántica mediante IA, tolerancia avanzada, ranking adaptativo, autocompletado complejo ni búsqueda en tiempo real sobre un backend. Algoritmo, pesos, tokenización, límites y librería se reservan a arquitectura y configuración.

### 7.3 Glosario

Debe permitir exploración alfabética de entradas publicables, independiente de la navegación por dominios. Cada elemento debe permitir reconocer nombre, resumen breve y acceso a la ficha. El orden se deriva por nombre y locale; no se persiste como significado. El glosario no crea tipos, jerarquías ni copias de contenido.

### 7.4 Exploración por dominio

Debe permitir consultar los doce dominios aprobados, conocer su propósito, alcance incluido y excluido, reconocer sus subdominios representados, acceder a entidades esenciales y descubrir disciplinas o relaciones transversales relevantes.

La exploración consume `domain`, `subdomain`, campos de pertenencia y relaciones aprobadas. No añade niveles, no convierte `area` en jerarquía y no reclasifica una entrada por su ubicación visual.

### 7.5 Ficha individual

La ficha debe mostrar o permitir acceder, conforme al tipo y a la aplicabilidad de campos, a:

- `title`, `canonicalName`, `englishName`, alias y acrónimos;
- tipo y subtipo;
- dominio principal, subdominios, dominios secundarios y disciplinas;
- `summary`, `definition`, `problemSolved`, `purpose` y contexto;
- prerrequisitos y relaciones relevantes;
- términos confundibles y comparaciones aplicables;
- ejemplos, ventajas, limitaciones e implicaciones;
- fuentes, fechas, vigencia, estabilidad, verificación, deprecación y sustitución cuando corresponda.

La ausencia significativa de un campo opcional se respeta. La interfaz no debe rellenarlo, duplicar definiciones ni imponer que todas las fichas tengan las mismas secciones. La selección de componentes o representación visual se reserva a UX/UI.

### 7.6 Relaciones

Debe ser posible navegar relaciones específicas directas, inversas o derivadas autorizadas y abrir sus destinos mediante IDs resueltos. La experiencia debe conservar nombre y dirección semántica, diferenciar prerrequisito, uso, implementación, composición, medición, comparación, evolución y asociación general, y evitar vínculos creados solo por coocurrencia o navegación.

El contenido deprecado o sustituido conserva identidad y trazabilidad. Cuando se acceda conscientemente a él debe indicarse su condición semántica y, si existe, ofrecer el sustituto; no se presentará como contenido vigente. El MVP no exige grafo, mapa visual ni visualización avanzada.

### 7.7 Comparaciones

Las comparaciones son `Must have` porque validan una hipótesis central y el caso de confusión. Deben atender confusiones frecuentes o decisiones conceptuales relevantes, declarar `comparisonReason`, usar dos o más entradas canónicas, incluir dimensiones y criterios equivalentes, explicar similitudes y diferencias y ofrecer orientación contextual sin ganador universal.

Una nota o relación `confused-with` basta para una diferencia simple. Se crea una comparación cuando varias dimensiones, compromisos o alternativas aportan una comprensión que no cabe razonablemente en una nota.

### 7.8 Escenarios

Los escenarios son `Must have`. El mínimo es de tres escenarios introductorios, cada uno con al menos tres dominios participantes de manera sustantiva y, en conjunto, al menos ocho dominios distintos. El objetivo recomendado es cuatro escenarios que, en conjunto, den participación sustantiva a los doce dominios.

Cada escenario debe declarar objetivo, contexto, participantes, dominios, situación inicial, secuencia, decisiones ilustrativas, conceptos, artefactos, riesgos, resultado y aprendizaje. Debe referenciar entradas existentes y ser educativo, no política, runbook ni procedimiento obligatorio.

### 7.9 Rutas de aprendizaje

Las rutas son `Must have`. El mínimo es de tres rutas introductorias con audiencias y objetivos distintos, por ejemplo: mapa general de IT, comprensión transversal para un perfil técnico y comprensión para colaboración no especializada. Los nombres y contenidos reales se decidirán en inventarios y lotes.

Cada ruta debe declarar audiencia, nivel inicial, objetivo, resultados esperados, prerrequisitos, entradas existentes en orden justificado, opcionales, checkpoints y criterios de finalización. No debe prometer especialización, dominio práctico ni preparación integral para una certificación.

### 7.10 Filtros

Solo son obligatorios los filtros que ayudan a validar clasificación y cobertura:

- **Must have:** dominio y tipo;
- **Should have:** subdominio y disciplina, si el inventario objetivo ofrece opciones suficientes y diferenciables;
- **Could have:** prioridad, profundidad y estabilidad, tras comprobar que su exposición ayuda al usuario y no solo al equipo editorial;
- **Won't have in MVP:** filtro público por estado editorial, porque el índice ordinario contiene solo contenido publicable; filtros derivados de color, layout, popularidad no gobernada, marca o etiquetas libres.

La presencia de un filtro nunca convierte un atributo en categoría taxonómica. Orden, combinación, selección inicial y etiquetas visibles pertenecen a configuración y UX/UI.

### 7.11 Responsive design y temas

La experiencia adaptable a dispositivos es `Must have`: todos los flujos obligatorios deben poder completarse en dispositivos pequeños y grandes sin pérdida de significado, orden pedagógico, relaciones, avisos o accesibilidad.

El modo claro y oscuro es `Should have`. Puede aplazarse de la primera publicación únicamente mediante decisión justificada si existe un tema base accesible y el contenido no depende del tema. En cualquier modo, color, tamaño, posición y dispositivo no pueden cambiar clasificación, prioridad, vigencia ni significado.

## 8. Clasificación de capacidades

La categoría expresa prioridad del MVP, no prominencia visual ni orden de implementación.

| Capacidad | Categoría | Valor validado | Dependencia | Criterio de aceptación | Riesgo de exclusión |
|---|---|---|---|---|---|
| Punto de entrada explicativo | **Must have** | Propuesta de valor y orientación inicial | Definición del MVP y contenido introductorio aprobado | Explica propósito, alcance y vías de inicio sin asistencia externa | Desorientación y percepción de glosario aislado |
| Búsqueda por nombre, inglés, alias y sigla | **Must have** | Consulta directa y vocabulario profesional | Alias gobernados, contenido mínimo e índice | Recupera la entrada canónica y resuelve ausencia de resultados | Fracaso del caso de uso primario |
| Glosario alfabético | **Must have** | Consulta independiente de clasificación | Entradas publicables y orden por locale | Permite reconocer y abrir todas las entradas publicables | Dependencia excesiva de búsqueda o taxonomía |
| Exploración de los doce dominios | **Must have** | Mapa mental y transversalidad | Dominios y subdominios representados | Todos cumplen la definición de representación | Cobertura aparente centrada en pocos dominios |
| Ficha individual contextual | **Must have** | Comprensión autónoma | Modelo, lineamientos, fuentes y estado `approved` | Campos aplicables accesibles sin inventar ausencias | Prototipo sin valor educativo completo |
| Navegación de relaciones específicas | **Must have** | Mapa conectado y progresión | IDs resueltos y catálogo aprobado | Destinos válidos, semántica distinguible y sin asociaciones arbitrarias | Glosario aislado |
| Comparaciones | **Must have** | Reducción de confusiones | Entradas aprobadas y dimensiones explícitas | Al menos ocho comparaciones conformes | Hipótesis de contraste no validada |
| Escenarios multidisciplinarios | **Must have** | Colaboración entre dominios | Entradas, roles, dominios y artefactos aprobados | Al menos tres escenarios conformes y cobertura conjunta mínima | Transversalidad solo nominal |
| Rutas introductorias | **Must have** | Exploración ordenada | Entradas y prerrequisitos aprobados | Al menos tres rutas completas y recorribles | El usuario no sabe cómo continuar |
| Filtros por dominio y tipo | **Must have** | Utilidad de la clasificación | Cobertura suficiente de ambas facetas | Filtran sin reclasificar ni perder acceso canónico | Difícil validar el mapa por clasificación |
| Responsive design funcional | **Must have** | Acceso en distintos dispositivos | UX/UI e implementación accesible | Los seis flujos se completan en tamaños representativos | Exclusión de uso móvil y pérdida semántica |
| Integridad y validación automática | **Must have** | Confianza, mantenibilidad y referencias | Esquemas y criterios posteriores | Cero errores bloqueantes al construir/publicar | Referencias rotas y degradación silenciosa |
| Trazabilidad de fuentes y vigencia | **Must have** | Confianza y mantenimiento | Registros normalizados y metadatos | Toda entrada publicable cumple los requisitos aplicables | Contenido no verificable u obsoleto |
| Filtros por subdominio y disciplina | **Should have** | Exploración específica y transversal | Suficientes valores poblados | Aportan elecciones útiles y no categorías vacías | Menor descubrimiento transversal; no bloquea el valor central |
| Modo claro y oscuro | **Should have** | Adaptabilidad de presentación | Sistema visual posterior | Ambos conservan contraste y significado | Menor comodidad; no invalida contenido ni flujos |
| Salida imprimible o exportación básica | **Should have** | Reutilización de contenido | Separación de capas y renderer posterior | Mantiene orden, texto y referencias esenciales | Reutilización demostrada solo conceptualmente |
| Filtros por prioridad, profundidad o estabilidad | **Could have** | Exploración editorial especializada | Distribución suficiente y microcopy comprensible | Su uso responde preguntas reales del usuario | Complejidad y confusión con prominencia visual |
| Visualización gráfica de relaciones | **Could have** | Exploración adicional | Relaciones suficientes y representación accesible | Es alternativa, no única vía, y no crea aristas | Sobrecosto y acoplamiento prematuro |
| Autocompletado o tolerancia avanzada de búsqueda | **Could have** | Mejora de localización | Estrategia de búsqueda posterior | Mejora hallazgos sin sinónimos no gobernados | Complejidad sin evidencia inicial |
| Cuentas, progreso, comunidad, edición web, personalización o backend transaccional | **Won't have in MVP** | No requerido por hipótesis centrales | Decisión futura de alcance | Ausencia comprobada en arquitectura y experiencia del MVP | Su inclusión desviaría alcance y mantenimiento |

Una capacidad `Should have` puede aplazarse solo mediante una decisión registrada con motivo, impacto, alternativa disponible y condición de reconsideración. Una `Could have` no debe desplazar contenido o validación `Must have`.

## 9. Cobertura taxonómica

### 9.1 Regla de cobertura

El MVP debe representar los doce dominios aprobados, sin exigir igual cantidad, profundidad o variedad de tipos en cada uno:

1. Fundamentos de computación;
2. Sistemas de cómputo y sistemas ciberfísicos;
3. Desarrollo de software;
4. Ingeniería, arquitectura y calidad de software;
5. Redes y telecomunicaciones;
6. Infraestructura, cloud y operación de servicios;
7. Ciberseguridad, privacidad y riesgo tecnológico;
8. Datos y analítica;
9. Inteligencia artificial;
10. Integración y sistemas empresariales;
11. Producto digital, análisis de negocio y experiencia humana;
12. Estrategia, gobierno y liderazgo tecnológico.

### 9.2 Dominio representado

Un dominio está representado únicamente cuando cumple todas estas condiciones:

- registro de dominio completo y `approved`, conforme al modelo;
- propósito, alcance incluido, alcance excluido y dominios vecinos comprensibles;
- al menos dos subdominios principales aprobados que, en conjunto, cubran su núcleo para el MVP;
- al menos seis entidades `essential` o `important` distribuidas en tres familias de tipos aplicables cuando la naturaleza del dominio lo permita;
- al menos una entidad con valor de fundamento o prerrequisito dentro del dominio;
- al menos una relación específica y revisada hacia una entrada de otro dominio;
- revisión de cobertura que no detecte un vacío fundamental capaz de falsear su propósito.

Seis entidades son un piso de representación, no una cuota objetivo ni prueba suficiente de calidad. Los dominios más amplios o con más dependencias recibirán mayor cobertura.

### 9.3 Subdominios, disciplinas y puentes

- El MVP incluirá entre 36 y 60 subdominios, con objetivo de 48, seleccionados por valor de orientación y producción; no se crea un tercer nivel.
- Incluirá entre 8 y 16 disciplinas transversales, con objetivo de 12, cada una con dominio hogar cuando sea razonable y aplicaciones sustantivas verificadas.
- Incluirá como subconjunto de las entidades al menos 12 conceptos puente, con objetivo de 18, que conecten dos o más dominios por una relación específica o aplicación sustantiva.
- Cada dominio tendrá al menos una conexión saliente o entrante con otro dominio; el conjunto debe evitar islas temáticas.
- La profundidad podrá variar. Fundamentos y conceptos puente se priorizan por su efecto sobre varias rutas y dominios; herramientas cambiantes reciben cobertura más selectiva.

## 10. Composición cuantitativa

### 10.1 Reglas de conteo

- **Entrada** es un registro canónico con ID propio. Alias, traducciones, `contextualTypes`, relaciones inversas y secciones de una ficha no cuentan como entradas.
- **Entidad de conocimiento** comprende los tipos de la sección 10 de `docs/03-content-model.md`; excluye dominios, subdominios, disciplinas, fuentes, comparaciones, escenarios y rutas.
- Las filas de tipos de entidad son particiones del total y no deben contarse dos veces.
- Conceptos puente, prioridades y profundidades son subconjuntos, no cantidades adicionales.
- Una relación cuenta una sola vez desde su autoridad. Inversas generadas, taxonomía derivada y duplicados simétricos no aumentan la cifra.
- Una cantidad solo habilita revisión; no demuestra cobertura temática, precisión, profundidad ni calidad.

### 10.2 Cantidades adoptadas

| Categoría | Mínimo de aceptación | Objetivo recomendado | Máximo inicial recomendado | Justificación y criterio de priorización | Dependencia |
|---|---:|---:|---:|---|---|
| Dominios | 12 | 12 | 12 | La transversalidad exige representar todos los dominios aprobados; no se añaden ni eliminan aquí. | Taxonomía y registros de dominio. |
| Subdominios | 36 | 48 | 60 | Promedio orientativo de 3–4 por dominio, con variación por amplitud. Se eligen los que mejor orienten y agrupen lotes. | Registros de dominio y futuro inventario. |
| Disciplinas transversales | 8 | 12 | 16 | Deben demostrar aplicación cruzada sin duplicar entradas; se priorizan seguridad, calidad, accesibilidad, observabilidad, arquitectura, gobierno, confiabilidad y automatización u otras aprobadas por inventario. | Dominio hogar y aplicaciones válidas. |
| **Entidades de conocimiento, total** | **120** | **164** | **210** | Es suficiente para ofrecer búsquedas reales, representar dominios y mantener revisión humana por lotes. El máximo evita inventario inmanejable antes de validar valor. | Suma de las diez filas siguientes. |
| Roles | 10 | 14 | 18 | Roles transversales o frecuentes que aclaren colaboración; no inventario laboral. | Escenarios, competencias y `usedByRoles`. |
| Puestos | 0 | 2 | 4 | No son obligatorios para validar el MVP; solo se incluyen cuando una designación organizacional aporta contexto autónomo y no duplica un rol. | Roles típicos y notas organizacionales. |
| Competencias | 6 | 10 | 14 | Capacidades reutilizables entre roles, rutas y dominios; no listas exhaustivas de habilidades. | Roles, puestos y rutas. |
| Conceptos, principios, paradigmas, orientaciones y modelos | 42 | 52 | 64 | Constituyen la base más estable del mapa mental y de los prerrequisitos. | Fundamentos, comparaciones y relaciones. |
| Metodologías, marcos de trabajo, procesos, prácticas y técnicas | 18 | 24 | 30 | Permiten distinguir formas de trabajo sin sobrerrepresentar marcos populares. | Roles, artefactos y escenarios. |
| Patrones y estilos arquitectónicos | 8 | 12 | 16 | Cubren soluciones recurrentes y decisiones de alto nivel; se priorizan los de valor transversal. | Conceptos previos y comparaciones. |
| Estándares y protocolos | 10 | 14 | 18 | Aportan interoperabilidad, gobierno y lenguaje profesional estable; requieren versión cuando aplique. | Fuentes institucionales y relaciones `implements`/`governed-by`. |
| Tecnologías, herramientas, plataformas, servicios y productos | 16 | 22 | 28 | Se limita la obsolescencia y concentración comercial. Se priorizan capacidades y referencias de facto necesarias para conversaciones comunes. | Conceptos generales, marcas y vigencia. |
| Artefactos | 6 | 8 | 10 | Hacen visibles entradas, salidas y colaboración sin convertir el producto en catálogo documental. | Procesos, roles y escenarios. |
| Métricas e indicadores | 4 | 6 | 8 | Demuestran medición y decisión en varios dominios; se seleccionan por valor conceptual. | Propiedades medidas, fuentes y escenarios. |
| Relaciones específicas persistidas o de campos de autoridad | 180 | 328 | 525 | Equivale aproximadamente a 1.5, 2 y 2.5 por entidad total, como control de escala, no cuota por ficha. Se priorizan prerrequisitos, implementación, uso, producción, medición, gobierno, comparación y evolución. | Destinos aprobados, compatibilidad y evidencia. |
| Conceptos puente, subconjunto | 12 | 18 | 24 | Garantizan conexiones sustantivas entre dominios sin crear una categoría nueva. | Entidades y relaciones entre dominios. |
| Comparaciones | 8 | 12 | 16 | Cubren confusiones de alto valor con dimensiones explícitas; menos de ocho ofrece evidencia débil y más de dieciséis eleva revisión antes de validar. | Entradas confundibles aprobadas. |
| Escenarios | 3 | 4 | 6 | Tres permiten contrastar más de un contexto; cuatro pueden dar participación conjunta a los doce dominios. | Roles, entidades, artefactos y relaciones. |
| Rutas de aprendizaje | 3 | 4 | 6 | Tres validan audiencias distintas sin crear un catálogo de formación. | Entradas, prerrequisitos y checkpoints. |
| Fuentes normalizadas | 50 | 80 | 120 | Promueve trazabilidad y reutilización sin imponer una fuente distinta por entrada. El número no sustituye suficiencia, autoridad ni diversidad. | Política de fuentes y afirmaciones producidas. |

La suma de los máximos no es meta de producción. Alcanzar el máximo de una categoría exige comprobar que no desplaza fundamentos, revisión o cobertura de otro dominio. El total de 164 entidades es el objetivo de planificación inicial; 120 es el piso publicable y 210 el límite para la primera decisión de alcance, salvo excepción en `docs/10-decision-log.md`.

Las responsabilidades se conservan principalmente como objetos estructurados y no cuentan como entradas. Una ficha excepcional de `responsibility` o `certification` puede incluirse solo si aporta valor autónomo; consume una plaza del total de entidades y sustituye otra selección, sin elevar mínimos, objetivos o máximos. La preparación integral para certificaciones continúa excluida.

### 10.3 Relaciones, cobertura y calidad

La cifra de relaciones excluye `belongs-to-domain`, `belongs-to-subdomain`, inversas generadas y cierres transitivos. No se obliga a todas las entradas a tener el mismo número: una entrada fundamental puede necesitar varias relaciones y una herramienta especializada solo una o dos. `related-to` repetido, destinos no producidos o relaciones débiles no ayudan a cumplir el mínimo.

La cobertura se evalúa por preguntas educativas respondidas, fundamentos, conexiones, variedad pertinente de tipos y ausencia de vacíos; la profundidad, por cumplimiento del nivel editorial; la calidad, por revisión y validación. Ninguna se deduce del conteo.

## 11. Distribución de contenido

### 11.1 Criterios de distribución

1. Asignar primero fundamentos que funcionen como prerrequisitos de varios dominios.
2. Dar más entradas a dominios con mayor amplitud interna o más casos de uso, sin convertir el tamaño en importancia.
3. Reservar capacidad para conceptos puente y disciplinas transversales antes de añadir variantes especializadas.
4. Mantener contenido cambiante por debajo del volumen de fundamentos estables.
5. Representar temas técnicos, producto, experiencia humana, gobierno y liderazgo; no reducir IT a desarrollo y operación.
6. Equilibrar conceptos generales con implementaciones: toda herramienta o producto incluido debe apuntar a la capacidad, estándar, práctica o problema que contextualiza.
7. Evitar que DOM-03 y DOM-04, juntos, superen el 30 % de las entidades salvo justificación de dependencias y revisión de balance.
8. Evitar que tecnologías, herramientas, plataformas, servicios y productos superen el 18 % del total de entidades objetivo.
9. Incluir al menos una entrada de colaboración, medición, calidad, seguridad o gobierno aplicable en cada dominio mediante hogar o aplicación transversal.

### 11.2 Revisión de desequilibrios

Antes de aprobar inventario y cada cierre de lote se revisará:

- dominios por debajo de la definición de representación;
- concentración de entradas, palabras o relaciones en uno o dos dominios;
- proporción de fundamentos frente a productos cambiantes;
- dominios con muchas herramientas y pocos conceptos explicativos;
- ausencia de producto, UX/UI, análisis de negocio, gobierno, riesgo o liderazgo;
- duplicación de temas transversales en vez de una entrada canónica;
- rutas y escenarios que repiten siempre los mismos dominios o roles;
- concentración de fuentes en proveedores;
- cobertura nominal con fichas solo `recognition`.

Un desequilibrio no se corrige rellenando cuotas. Se revisan prioridad, dependencias, selección de entradas y alcance de lotes.

## 12. Prioridad editorial

- `essential`: núcleo obligatorio. El MVP debe incluir todos los `essential` seleccionados en el inventario aprobado y suficientes para sostener dominios, prerrequisitos, búsquedas y rutas.
- `important`: cobertura necesaria para contexto, relaciones y variedad. Puede constituir una parte sustantiva del MVP.
- `specialized`: inclusión limitada cuando cubre un vacío, una relación o un contexto profesional que no puede demostrarse con entradas más generales.
- `emerging`: inclusión selectiva cuando tiene impacto conceptual o transversal, fuentes suficientes, incertidumbre explícita y revisión prevista.

En el inventario publicable mínimo:

- al menos 60 % de las entidades serán `essential`;
- `essential` e `important` sumarán al menos 90 %;
- `specialized` y `emerging` juntos no superarán 10 %;
- `emerging` no superará 4 %.

Estos porcentajes son límites de composición, sujetos a los umbrales finales de calidad. Prioridad no equivale a popularidad, prominencia visual, orden en portada, demanda comercial, longitud ni calidad.

## 13. Profundidad del MVP

El nivel principal es `contextual-understanding`. Al menos 80 % de las entidades publicables, y todas las entradas que sostengan comparaciones, escenarios o rutas como conocimiento central, deberán alcanzar ese nivel.

Una entrada puede publicarse inicialmente con `recognition` solo cuando:

- es apoyo periférico y no fundamento de varias entradas;
- su resumen, definición, tipo, dominio y problema general son suficientes para no inducir error;
- no sostiene por sí sola una dimensión de comparación, decisión de escenario o checkpoint principal;
- su menor profundidad está declarada y revisada;
- el conjunto de entradas `recognition` no supera 20 %.

`contextual-understanding` exige, cuando aplique, propósito, contexto profesional, participantes, relaciones, confusiones, ejemplo, ventajas, limitaciones e implicaciones. La ausencia de un campo opcional debe ser significativa, no una forma de reducir trabajo.

`future-expanded-reference` queda fuera del alcance ordinario del MVP. Puede conservarse como profundidad prevista futura, pero no se produce para cumplir cantidades. Ninguna profundidad autoriza tutoriales, comandos extensos, laboratorios, runbooks, manuales de producto ni cursos.

## 14. Idioma y términos técnicos

- El contenido explicativo se redacta principalmente en español.
- Los términos técnicos en inglés prevalecen en la prosa cuando son la forma profesional habitual o predominante.
- `canonicalName`, `englishName` y `aliases` conservan sus funciones estructurales; búsqueda reconoce español, inglés, siglas, abreviaturas y nombres históricos aprobados.
- Una traducción no crea ficha ni ID duplicado.
- Los acrónimos se desarrollan en su primera aparición cuando corresponde.
- La localización completa a otros idiomas queda fuera del MVP; su incorporación futura requiere decisión expresa y conserva IDs y significado.

## 15. Estados editoriales publicables

No se redefinen los estados aprobados.

| Estado | Tratamiento en el MVP público |
|---|---|
| `planned` | No publicable ni indexable; puede existir en inventarios internos. |
| `draft` | No publicable ni indexable. |
| `in-review` | No publicable ni indexable; no cuenta para cobertura ni cantidades de aceptación. |
| `approved` | Único estado ordinariamente publicable e indexable. Debe tener revisión, fuentes y vigencia conforme a los contratos. |
| `needs-update` | Publicación condicional. Solo puede permanecer temporalmente accesible si procede de contenido previamente aprobado, no contiene información conocida como materialmente incorrecta o riesgosa y muestra aviso semántico de revisión; de otro modo se retira del índice público. La política medible final corresponde a calidad. |
| `deprecated` | No se presenta como vigente ni cuenta para cobertura. Puede conservar acceso histórico mediante ID o referencia consciente, con fecha, motivo y sustituto cuando exista; se excluye de descubrimiento ordinario salvo política justificada. |
| `rejected` | No publicable ni indexable; conserva motivo y la identidad que exija trazabilidad. |

Las sustituciones se resuelven por IDs. Un aviso de vigencia no depende solo de color ni transforma estado editorial en estado visual. `docs/09-quality-criteria.md` fijará tolerancias, plazos y condiciones medibles de `needs-update`.

## 16. Fuentes mínimas para el MVP

Sin sustituir `work/SOURCE-POLICY.md`, el MVP debe:

- registrar fuentes como entradas normalizadas con ID estable;
- permitir rastrear desde una ficha o relación las fuentes utilizadas;
- diferenciar `institutional-source`, `standard`, `official-documentation`, `secondary-source` y las demás clases aprobadas;
- registrar organización o autor, título, URL o referencia, fecha de consulta para recursos web, secciones usadas, idioma y disponibilidad;
- registrar versión, emisor y vigencia cuando cambien el significado;
- usar `sourceIds` en relaciones cuando el catálogo lo exige;
- impedir aprobación de contenido sin respaldo suficiente para sus afirmaciones;
- indicar incertidumbre y disponibilidad parcial, archivada o no disponible;
- preferir capacidades y hechos duraderos frente a información comercial volátil.

El mínimo de fuentes normalizadas no implica número fijo por ficha. Autoridad, suficiencia, diversidad, fuentes de proveedor y tratamiento de enlaces caídos serán definidos por la política especializada.

## 17. Contenido fuera del MVP

### 17.1 Fuera del MVP, candidato posterior sin compromiso

| Elemento | Clasificación | Condición para reconsiderar |
|---|---|---|
| Cuentas, autenticación y perfiles personales | Temporal, fuera del MVP | Caso de uso aprobado que no pueda resolverse localmente y revisión de privacidad/seguridad. |
| Seguimiento individual de progreso | Temporal | Evidencia de valor posterior, cuentas aprobadas y modelo pedagógico específico. |
| Panel administrativo y edición desde la web | Temporal | Flujo editorial aprobado que justifique abandonar edición en fuentes canónicas. |
| Sincronización en tiempo real | Temporal | Necesidad operativa demostrada y arquitectura aprobada. |
| Traducción completa a varios idiomas | Temporal | Estrategia de localización, responsables y capacidad de revisión. |
| Aplicación móvil nativa | Temporal | Evidencia de necesidad que no cubra una web adaptable. |
| Integraciones externas no esenciales | Temporal | Caso de uso, contrato de datos, mantenimiento y seguridad aprobados. |
| Visualizaciones avanzadas | Temporal | Relaciones o datos suficientes y alternativa accesible garantizada. |
| Impresión o exportación avanzada | Temporal | Necesidad de formato que exceda la salida básica `Should have`. |
| Gamificación | Temporal, no prioritaria | Objetivo educativo explícito y prueba de que no distorsiona prioridad ni profundidad. |

### 17.2 Fuera del propósito general actual

Estos elementos son exclusiones **permanentes respecto del propósito vigente**. Su incorporación exigiría reabrir el acta o alcance y registrarse en `docs/10-decision-log.md`; no se considera extensión ordinaria:

- comentarios, comunidad y foros;
- contenido generado por usuarios;
- recomendaciones personalizadas mediante IA;
- laboratorios complejos y formación práctica exhaustiva;
- cursos completos;
- preparación integral para certificaciones;
- evaluaciones formales, calificaciones o credenciales propias;
- noticias tecnológicas;
- precios, planes y comparativas comerciales;
- directorio exhaustivo de productos;
- promoción comercial o recomendaciones de compra.

### 17.3 Exclusiones de arquitectura del MVP

Un backend transaccional propio y una base de datos operativa están excluidos temporalmente porque ninguna capacidad `Must have` los requiere. Solo podrían reconsiderarse después del MVP si una capacidad aprobada los necesita; no se implementan preventivamente.

La personalización avanzada también queda fuera del MVP. A diferencia de una preferencia de tema, implica estado o perfil individual y requiere una decisión posterior. Todas las exclusiones de esta sección son obligatorias para la primera versión.

## 18. Requerimientos no funcionales de producto

Sin elegir tecnología ni métricas finales, el MVP debe satisfacer estas expectativas:

| Aspecto | Expectativa del MVP |
|---|---|
| Contenido estático | Las fuentes aprobadas pueden transformarse en una experiencia consultable sin depender de edición o datos transaccionales en ejecución. |
| Sin backend propio | Consulta, navegación y búsqueda ordinarias funcionan sin servicio transaccional propio. |
| Accesibilidad | Los flujos y significados permanecen disponibles mediante estructura semántica, teclado y alternativas textuales. |
| Responsive design | La experiencia se adapta sin crear fichas por dispositivo ni perder contenido autorizado. |
| Navegación comprensible | Siempre es posible reconocer la entrada actual, su clasificación y una vía para continuar o volver a un índice. |
| Consulta razonable | La búsqueda y apertura no introducen espera desproporcionada para un producto estático; umbrales posteriores pertenecen a calidad/arquitectura. |
| Integridad | IDs, referencias, estados, dominios y relaciones se validan antes de publicar. |
| Trazabilidad | Se puede identificar fuente, revisión, lote, vigencia y decisión cuando corresponda. |
| Mantenibilidad | Corregir una fuente canónica y regenerar no exige editar múltiples vistas. |
| Reutilización | El contenido puede alimentar web, glosario, impresión o consumidores futuros sin reescritura semántica. |
| Impresión/exportación | El significado debe ser compatible con una salida lineal o imprimible, aunque la exportación avanzada no sea `Must have`. |
| Degradación funcional | Si una mejora no esencial falla, siguen disponibles títulos, texto, enlaces y recorridos básicos; una visualización nunca es la única vía. |
| Privacidad | Al no existir cuentas ni seguimiento individual, no se recolectan datos personales para operar el valor central. Cualquier telemetría futura exige decisión separada. |
| Seguridad | La publicación estática minimiza superficie; activos, dependencias, enlaces y configuración no deben introducir ejecución o secretos innecesarios. |
| Disponibilidad | El contenido publicado puede servirse como artefactos reproducibles; proveedor y objetivo técnico se reservan. |
| Enlaces externos | Un enlace caído no rompe la ficha ni su significado; se registra disponibilidad y existe referencia suficiente para mantenimiento. |

## 19. Accesibilidad mínima

El MVP debe demostrar:

- comprensión y operación sin depender solo de color, forma, posición o movimiento;
- estructura semántica con encabezados, listas, tablas y regiones en orden coherente;
- navegación completa mediante teclado y foco perceptible;
- nombres accesibles para búsquedas, filtros, enlaces y controles;
- alternativas textuales para imágenes, diagramas y otros recursos educativos;
- contraste suficiente en el tema publicado y en cualquier tema adicional;
- orden de lectura consistente con causalidad, comparación y progresión;
- reducción de movimiento cuando exista movimiento no esencial;
- contenido legible y operable en dispositivos pequeños;
- conservación de significado cuando no se carga o no se usa una visualización;
- acrónimos, términos profesionales y microcopy comprensibles para la audiencia.

Los umbrales técnicos y evidencia formal se definirán en `docs/09-quality-criteria.md` y la fase de implementación; esta reserva no reduce la obligatoriedad funcional.

## 20. Integridad y validación

El MVP no se publica con errores estructurales bloqueantes. Debe validar como mínimo:

- IDs globales únicos, válidos, inmutables y no reutilizados;
- referencias existentes y resueltas por ID canónico;
- `type` y `subtype` compatibles;
- dominio principal válido y subdominios pertenecientes a él;
- dominios secundarios y disciplinas existentes y justificados;
- relaciones compatibles en origen, destino, dirección, cardinalidad y autoridad;
- ausencia de autorreferencias, ciclos y transitividad prohibidos;
- fuentes existentes, fechas de consulta y versiones aplicables;
- estados, verificación, prioridad, profundidad y estabilidad coherentes;
- fechas ordenadas y deprecación con fecha, motivo y sustituto cuando exista;
- ausencia de propiedades visuales, HTML de presentación, clases CSS y rutas visuales;
- ausencia de títulos, slugs, URLs o nombres de archivo usados como identidad;
- ausencia de duplicados canónicos, alias incompatibles y dobles registros por idioma;
- comparaciones, escenarios y rutas que referencian entradas existentes sin copiar definiciones;
- navegación e índices generados que no se convierten en fuente ni crean relaciones;
- build que falla de manera visible ante un error bloqueante.

`docs/09-quality-criteria.md` definirá severidades, tolerancias, advertencias justificables y umbrales finales.

## 21. Flujos completos que debe soportar

| Flujo | Entrada | Pasos semánticos | Resultado | Contenido requerido | Condición de aceptación | Exclusiones |
|---|---|---|---|---|---|---|
| 1. Consulta directa | Nombre, término inglés, alias o sigla | Buscar → reconocer resultado → abrir ficha → comprender definición, propósito y contexto → abrir relación | Comprensión contextual y siguiente referencia válida | Índice, alias, ficha `approved`, relación y destino | Se completa con al menos una consulta de cada modalidad nominal sin referencia rota | Sin respuesta generada por IA, curso ni historial personal |
| 2. Exploración por dominio | Selección de uno de los doce dominios | Comprender propósito y alcance → reconocer subdominios → explorar entidades esenciales → abrir entidad | Orientación temática sin alterar taxonomía | Dominio, subdominios, entidades y disciplinas/relaciones aplicables | Los doce dominios permiten completar el recorrido y cumplen representación | Sin área tratada como jerarquía ni layout prescrito |
| 3. Confusión entre términos | Consulta de un término confundible | Abrir ficha → identificar confusión → abrir comparación → revisar similitudes y dimensiones → reconocer diferencia contextual | Distinción explicable sin ganador universal | Dos o más fichas, `confusedWith`/relación y comparación | Al menos ocho confusiones prioritarias completan el recorrido | Sin comparar alias, duplicados o términos sin razón real |
| 4. Progresión | Ficha de una entrada | Revisar prerrequisito o recomendación → distinguir necesidad de conveniencia → abrir destino → continuar exploración | Secuencia comprensible y no circular | `requires`, `recommended-before`, ruta o relaciones aplicables | No existen ciclos prohibidos y el destino explica su papel | Sin inferir que todo elemento anterior es prerrequisito |
| 5. Escenario multidisciplinario | Escenario aprobado | Comprender objetivo y contexto → reconocer participantes y dominios → seguir decisiones/consecuencias → abrir conceptos y artefactos | Comprensión de colaboración y efectos cruzados | Escenario, roles, dominios, entidades y referencias | Tres escenarios mínimos, cada uno con tres dominios sustantivos y conjunto de ocho | Sin runbook, política ni universalización de relaciones narrativas |
| 6. Ruta introductoria | Elección de ruta por audiencia u objetivo | Comprender nivel inicial y prerrequisitos → recorrer entradas en orden → usar checkpoints → verificar finalización | Resultado de reconocimiento o comprensión declarado | Ruta y fichas existentes, orden y criterios | Tres rutas completas sin saltos obligatorios ni promesa de especialización | Sin progreso persistente, laboratorio obligatorio ni certificación |

Todos los flujos deben funcionar con navegación por teclado, en dispositivos pequeños y sin depender de visualizaciones avanzadas.

## 22. Criterios de terminación

### 22.1 Terminado para desarrollo

El MVP está definido y listo para desarrollo cuando:

- `docs/00-project-charter.md` a `docs/10-decision-log.md`, según su alcance previsto, están aprobados;
- la definición del MVP y el plan de lotes no contienen contradicciones abiertas;
- criterios de calidad, instrucciones de Trabajo y contratos operativos están aprobados;
- inventarios de dominios, clasificaciones y entradas del MVP están aprobados;
- ejemplos canónicos cubren las familias y estructuras necesarias;
- están identificadas dependencias, destinos de relaciones y lotes de prerrequisitos;
- `AGENTS.md` puede instruir a Codex sin reinterpretar decisiones editoriales;
- las decisiones reservadas a arquitectura están claramente separadas de las ya adoptadas.

Este estado habilita seleccionar arquitectura e implementar validadores; no significa contenido terminado ni producto publicable.

### 22.2 Terminado para revisión

El MVP está listo para revisión integral cuando:

- se completó al menos el mínimo cuantitativo con contenido en `in-review` o `approved`;
- los doce dominios cumplen preliminarmente la definición de representación;
- comparaciones, escenarios y rutas mínimas están integrados;
- búsqueda, glosario, dominios, fichas, relaciones y filtros obligatorios funcionan sobre contenido real;
- los seis flujos completos pueden ejecutarse;
- validadores no reportan errores estructurales bloqueantes;
- build reproducible, instrucciones operativas y registro de decisiones están disponibles;
- se ejecutaron revisiones editorial, técnica, de relaciones, separación y accesibilidad;
- todos los hallazgos tienen responsable y estado.

Contenido `in-review` permite esta puerta interna, pero no publicación.

### 22.3 Terminado para publicación

El MVP está terminado y publicable únicamente cuando:

- todo contenido que cuenta para el mínimo y la cobertura está `approved`;
- existen como mínimo 12 dominios, 36 subdominios, 8 disciplinas, 120 entidades, 8 comparaciones, 3 escenarios, 3 rutas y 50 fuentes normalizadas conformes;
- los doce dominios cumplen íntegramente la definición de representación;
- se satisfacen distribución, prioridad y profundidad mínimas;
- relaciones y sustituciones están revisadas y no existen referencias rotas;
- búsqueda y navegación funcionan con nombres, términos ingleses, alias y siglas;
- los seis flujos cumplen sus condiciones de aceptación;
- no existen errores bloqueantes y advertencias restantes están resueltas o justificadas conforme a calidad;
- se superan pruebas de separación entre contenido y diseño;
- se demuestra accesibilidad mínima y responsive design;
- el build es reproducible desde fuentes canónicas y no contiene secretos ni dependencia de backend propio;
- existe documentación de construcción, validación, publicación, reversión y mantenimiento de enlaces/fuentes;
- decisiones y excepciones están registradas;
- la revisión editorial, técnica y de producto autoriza la publicación.

Una cifra alcanzada con contenido provisional, duplicado, superficial o no respaldado no satisface terminación.

## 23. Criterios de aceptación

| Dimensión | Criterio | Evidencia | Responsable futuro | Condición de aprobación | Documento que completa la regla |
|---|---|---|---|---|---|
| Valor educativo | La ficha permite reconocer, contextualizar y continuar | Revisión de flujos y muestra representativa | Responsable de producto y revisor editorial | Hipótesis 1–9 con evidencia mínima sin falsos atajos conocidos | `docs/09-quality-criteria.md` |
| Cobertura | Los doce dominios están representados sin igualdad artificial | Informe de inventario y matriz de cobertura | Responsable de contenido | Cada dominio cumple sección 9.2 y no hay vacío fundamental | `docs/08-production-batches.md`, `inventories/` |
| Consistencia | Tipos, campos, estados y profundidad respetan contratos | Validación estructural y revisión | Codex y revisor editorial | Cero incompatibilidades bloqueantes | `docs/09-quality-criteria.md` |
| Búsqueda | Nombre, inglés, alias y sigla resuelven entrada canónica | Casos de búsqueda del inventario | Responsable técnico/QA | Recuperación funcional, coincidencia explicable y ausencia manejada | Futura arquitectura y calidad |
| Navegación | Los seis flujos pueden completarse | Pruebas de recorrido | UX/UI, QA y producto | Sin callejones por referencias rotas ni taxonomía inventada | Fase UX/UI y calidad |
| Relaciones | Solo aristas relevantes, compatibles y resolubles | Validador, muestreo y revisión de catálogo | Revisor técnico/conceptual | Sin ciclos prohibidos, duplicados ni `related-to` usado como relleno | `docs/05-relationship-rules.md`, calidad |
| Calidad editorial | Voz, idioma, extensión y profundidad son adecuados | Checklist y registro de revisión | Revisor editorial | Contenido aprobado, claro, neutral y no tutorial | `docs/04-editorial-guidelines.md`, `work/REVIEW-CHECKLIST.md` |
| Integridad técnica | Build y referencias son reproducibles | Reporte de validación y build | Codex/QA | Cero errores bloqueantes | Futura arquitectura, `docs/09-quality-criteria.md` |
| Accesibilidad | Significado y operación no dependen de percepción única | Revisión y pruebas asistivas definidas después | UX/UI, frontend y QA | Cumple sección 19 y umbrales posteriores | `docs/09-quality-criteria.md`, fase UX/UI |
| Separación contenido-diseño | Cambiar representación no exige reescribir fuentes | Pruebas de sustitución | Arquitectura, Codex y revisión | Ninguna prueba obliga a modificar significado, IDs o relaciones | `docs/06-design-boundaries.md` |
| Vigencia | Contenido cambiante identifica revisión y verificación | Metadatos y fuentes | Revisor técnico/editorial | Ninguna afirmación material conocida como obsoleta se publica | `work/SOURCE-POLICY.md`, calidad |
| Documentación | Construcción, revisión, publicación y decisiones son trazables | Documentos y registros | Responsable del proyecto | No hay paso crítico dependiente solo de conversación | Documentos `work/`, `AGENTS.md` |
| Reproducibilidad | Fuentes canónicas generan el mismo producto verificable | Ejecución limpia documentada | Codex/DevOps futuro | Build completo sin edición manual de derivados | Futura arquitectura y calidad |

## 24. Indicadores iniciales de éxito

Los indicadores orientan validación; sus fórmulas, muestras y umbrales definitivos corresponden a `docs/09-quality-criteria.md`.

### 24.1 Indicadores de entrega

- proporción de contenido planificado que alcanza `approved` por lote;
- lotes aceptados sin reenvío y hallazgos por lote;
- avance respecto de mínimos y objetivos, separado por categoría;
- reproducibilidad de build y completitud documental.

### 24.2 Indicadores de cobertura

- 12 de 12 dominios representados;
- subdominios principales cubiertos frente al inventario aprobado;
- porcentaje de entidades `essential` e `important` completadas;
- número de disciplinas y conceptos puente con aplicaciones sustantivas;
- concentración de entidades y palabras por dominio y familia.

### 24.3 Indicadores de calidad

- tasa de validaciones aprobadas;
- errores bloqueantes y advertencias justificadas;
- entradas sin fuente aplicable, referencias rotas y duplicados canónicos;
- porcentaje de entradas dentro del nivel y rango editorial;
- relaciones específicas frente a `related-to`;
- contenido cambiante con revisión y verificación vigentes.

### 24.4 Indicadores de comprensión

- capacidad de una muestra de usuarios para explicar qué es, propósito, tipo y dominio de un término;
- capacidad para diferenciar pares cubiertos por comparaciones;
- capacidad para reconocer participantes y consecuencias de escenarios;
- tiempo cualitativo y esfuerzo percibido para comprender un término;
- tareas de consulta completadas sin ayuda del equipo.

### 24.5 Indicadores de búsqueda

- porcentaje de términos del inventario encontrados por nombre canónico;
- porcentaje encontrado por `englishName`, alias y acrónimo;
- consultas sin resultado para términos que sí existen;
- resultados incorrectos por colisión de alias o polisemia;
- capacidad de recuperarse de una búsqueda sin resultados.

### 24.6 Indicadores de mantenimiento

- entradas `needs-update` por estabilidad y tiempo de resolución;
- fuentes no disponibles o cambiantes detectadas;
- cambios de presentación que requirieron modificar contenido fuente, cuyo objetivo debe ser cero;
- relaciones o referencias afectadas por una deprecación;
- costo de revisión humana y hallazgos recurrentes por lote.

## 25. Riesgos del MVP

| Riesgo | Impacto | Señal temprana | Mitigación | Criterio de escalamiento |
|---|---|---|---|---|
| Exceso de alcance | Retraso, contenido provisional y arquitectura innecesaria | Nuevas capacidades sin hipótesis o categorías por encima del máximo | Aplicar MoSCoW, límites y lotes | Cualquier `Must have` se desplaza por una extensión |
| Cobertura superficial | Reconocimiento sin contexto | Muchas fichas `recognition`, campos omitidos y pocas diferencias | Priorizar `contextual-understanding` y reducir inventario | Menos de 80 % contextual o vacío fundamental en un dominio |
| Concentración en desarrollo | Transversalidad falsa | DOM-03/04 dominan inventario, escenarios y rutas | Revisar distribución y reservar capacidad no técnica | Superan 30 % sin justificación aprobada |
| Inventario demasiado grande | Revisión humana débil y dependencias abiertas | Crecimiento hacia 210 antes de cerrar mínimos | Congelar alcance y producir núcleo primero | Se propone superar el máximo o se acumulan lotes sin revisar |
| Búsqueda con poco contenido | Resultados escasos y validación artificial | Muchas consultas del vocabulario objetivo sin entrada | No publicar búsqueda hasta mínimo y alias revisados | Falla el caso primario en términos `essential` |
| Relaciones irrelevantes | Ruido y navegación engañosa | Uso alto de `related-to`, notas largas o aristas sin pregunta | Revisar por especificidad y eliminar asociaciones | Relaciones generales dominan una ficha o aparecen ciclos/errores |
| Exceso de herramientas comerciales | Obsolescencia y pérdida de neutralidad | Productos sin concepto general o fuentes de proveedor dominantes | Aplicar límite de 18 % y capacidad antes que marca | Se necesita una marca para explicar el dominio o se supera el límite |
| Contenido rápidamente obsoleto | Pérdida de confianza | `verificationStatus` pendiente y enlaces/versiones cambiantes | Limitar emergentes, registrar revisión y preferir fundamentos | Afirmación material conocida como incorrecta o `needs-update` creciente |
| Demasiadas estructuras editoriales | Costo desproporcionado y duplicación | Comparaciones/escenarios/rutas copian fichas | Respetar máximos y referencias por ID | Una estructura no valida hipótesis o supera el máximo sin razón |
| Revisión humana insuficiente | Errores conceptuales aprobados | Lotes grandes, mismos hallazgos y aprobaciones sin evidencia | Lotes pequeños, roles de revisión y checklist | Error bloqueante llega a `approved` o hay reenvíos recurrentes |
| Arquitectura anticipada | Contratos condicionados por tecnología | Campos o alcance creados para una librería/componente | Completar definición, calidad e inventarios antes de seleccionar | Se propone cambiar modelo por limitación de implementación |
| Acoplamiento al diseño | Reescritura y pérdida de reutilización | Campos visuales, URLs o instrucciones espaciales en fichas | Validaciones y pruebas de sustitución | Cualquier cambio de tema/layout obliga a modificar contenido |
| Usuarios no especializados poco representados | Lenguaje inaccesible y valor limitado | Acrónimos no explicados, prerrequisitos asumidos | Revisión cognitiva y rutas/escenarios para perfiles diversos | Fallan tareas básicas sin conocimiento previo no declarado |
| Cantidades que incentivan relleno | Entradas y relaciones débiles | Se crean variantes solo para alcanzar mínimos | Revisar cobertura por preguntas y permitir reducir alcance no obligatorio | Un revisor identifica contenido sin valor propio o duplicado |

El escalamiento implica detener el lote o capacidad afectada, registrar el hallazgo y decidir corrección, reducción de alcance o excepción. No autoriza modificar contratos silenciosamente.

## 26. Dependencias

| Dependencia | Cómo condiciona el MVP |
|---|---|
| Taxonomía | Fija doce dominios, jerarquía `domain > subdomain`, disciplinas transversales y tipos. |
| Modelo de contenido | Fija IDs, campos, familias, estados, prioridades, profundidades, estabilidad y estructuras. |
| Lineamientos editoriales | Fijan voz, idioma, extensión, profundidad, ejemplos, neutralidad e incertidumbre. |
| Reglas de relaciones | Fijan catálogo, dirección, compatibilidad, autoridad, ciclos y relevancia. |
| Fronteras de diseño | Impiden que navegación o presentación alteren contenido, clasificación o relaciones. |
| Producción por lotes | Convertirá cantidades, prerrequisitos y cobertura en entregas revisables. |
| Criterios de calidad | Fijarán severidades, tolerancias, métricas y umbrales de publicación. |
| Inventarios | Seleccionarán IDs y entradas concretas sin redefinir cantidades o taxonomía. |
| Ejemplos canónicos | Demostrarán aplicación correcta de familias, estructuras y excepciones. |
| Instrucciones de Trabajo | Convertirán contratos en investigación, redacción, revisión y entrega. |
| Instrucciones de Codex | Convertirán contratos en integración y validación sin reinterpretación. |
| Arquitectura futura | Elegirá medios técnicos proporcionales a estas capacidades y no al revés. |
| UX/UI futura | Diseñará flujos y representación conservando significado y accesibilidad. |

Una dependencia posterior puede completar cómo se ejecuta una regla, pero no reducir o contradecir una decisión adoptada aquí sin `docs/10-decision-log.md`.

## 27. Secuencia recomendada posterior

1. Aprobar esta definición del MVP.
2. Definir producción por lotes en `docs/08-production-batches.md`.
3. Definir criterios de calidad en `docs/09-quality-criteria.md`.
4. Registrar decisiones iniciales y excepciones en `docs/10-decision-log.md`.
5. Crear contratos operativos de ChatGPT Trabajo.
6. Crear y aprobar ejemplos canónicos.
7. Crear y aprobar inventarios.
8. Preparar `AGENTS.md`.
9. Seleccionar arquitectura técnica.
10. Implementar esquemas y validadores.
11. Producir e integrar lotes en orden de dependencias.
12. Implementar la experiencia de consulta y exploración.
13. Validar integralmente y publicar.

La secuencia puede solapar investigación preparatoria o validadores conceptuales cuando no anticipe decisiones reservadas. Todo cambio de orden debe declarar dependencia, beneficio y riesgo; no puede usar la implementación para redefinir contenido.

## 28. Relación con documentos posteriores

| Documento o artefacto | Condicionamiento de esta definición |
|---|---|
| `docs/08-production-batches.md` | Distribuirá 120–210 entidades y estructuras, priorizará fundamentos/destinos y fijará tamaño, dependencias y cierre de lotes. |
| `docs/09-quality-criteria.md` | Convertirá terminación, aceptación, accesibilidad e indicadores en severidades y umbrales medibles. |
| `docs/10-decision-log.md` | Registrará cantidades adoptadas, aplazamientos, excepciones y cambios de alcance. |
| `work/WORK-INSTRUCTIONS.md` | Hará operativos los límites, la autoridad documental y el proceso de entrega. |
| `work/RESEARCH-PROTOCOL.md` | Alineará preguntas de investigación con cobertura, estabilidad e hipótesis. |
| `work/CONTENT-PRODUCTION-CONTRACT.md` | Exigirá campos, estados, evidencia, cantidades por lote y criterios de reenvío. |
| `work/BATCH-TEMPLATE.md` | Reservará espacio para alcance, IDs, dependencias, relaciones, fuentes, riesgos y evidencia. |
| `work/SOURCE-POLICY.md` | Definirá suficiencia, autoridad, diversidad, versiones y enlaces no disponibles. |
| `work/REVIEW-CHECKLIST.md` | Convertirá criterios editoriales, relacionales, de separación y calidad en comprobaciones firmables. |
| `work/HANDOFF-TO-CODEX.md` | Delimitará qué integrar, qué validar y qué devolver a revisión sin corregir significado. |
| `examples/` | Cubrirá familias de entidades, comparación, escenario, ruta, fuente y casos deprecados sin ampliar el MVP. |
| `inventories/` | Seleccionará entradas concretas, prioridades, dominios, lotes y dependencias dentro de los rangos. |
| `AGENTS.md` | Obliga a preservar autoridad, alcance, estados, IDs y prohibiciones. |
| Futura arquitectura técnica | Debe soportar capacidades `Must have`, build estático, validación y reutilización sin backend propio. |
| Futura fase UX/UI | Diseñará arquitectura de información, interacción y sistema visual para los seis flujos sin crear semántica. |

## 29. Decisiones y pendientes

### 29.1 Capacidades obligatorias adoptadas

Se adoptan como `Must have`: punto de entrada explicativo; búsqueda por nombre, término inglés, alias y sigla; glosario; exploración de los doce dominios; ficha contextual; relaciones específicas; comparaciones; escenarios; rutas; filtros por dominio y tipo; responsive design; trazabilidad; integridad y validación automática.

### 29.2 Capacidades aplazadas

Se clasifican como `Should have` los filtros por subdominio/disciplina, modo claro y oscuro y salida imprimible o exportación básica. Se clasifican como `Could have` filtros editoriales adicionales, visualización gráfica de relaciones y búsqueda avanzada. Su inclusión no puede retrasar mínimos de contenido ni validación.

Cuentas, autenticación, perfiles, progreso, comunidad, edición web, personalización y backend transaccional propio son `Won't have in MVP`.

### 29.3 Cobertura y cantidades adoptadas

- doce dominios representados obligatoriamente;
- 36 subdominios, 8 disciplinas y 120 entidades como mínimos;
- objetivos de 48 subdominios, 12 disciplinas y 164 entidades;
- máximos iniciales de 60 subdominios, 16 disciplinas y 210 entidades;
- mínimo/objetivo/máximo de 8/12/16 comparaciones, 3/4/6 escenarios y 3/4/6 rutas;
- mínimo/objetivo/máximo de 50/80/120 fuentes normalizadas;
- al menos 180 relaciones específicas o de campos de autoridad, con objetivo de 328 y máximo inicial de 525;
- al menos 12 conceptos puente, con objetivo de 18;
- al menos 60 % de entidades `essential`, 90 % `essential` + `important` y 80 % en `contextual-understanding`.

### 29.4 Criterios de terminación adoptados

Se adoptan tres puertas: terminado para desarrollo, para revisión y para publicación. Solo la última autoriza publicación y exige contenido mínimo `approved`, doce dominios representados, seis flujos completos, cero errores bloqueantes, accesibilidad mínima, build reproducible, separación verificada y documentación operativa.

### 29.5 Exclusiones adoptadas

Las exclusiones temporales y las situadas fuera del propósito general quedan clasificadas en la sección 17. Ninguna se implementa como preparación anticipada. Una reconsideración requiere el nivel de decisión indicado y no altera automáticamente este MVP.

### 29.6 Decisiones heredadas

Se conservan sin modificación:

- propósito de alfabetización teórica y contextual;
- web estática sin backend propio ni cuentas;
- doce dominios y jerarquía exclusiva `domain > subdomain`;
- disciplina transversal y área editorial no taxonómica;
- tipos, IDs, campos, estados, prioridades, profundidades y estabilidad;
- términos técnicos en inglés prevalentes cuando son la forma profesional habitual;
- catálogo y autoridad de relaciones;
- una fuente canónica y referencias por ID;
- separación estricta entre contenido, taxonomía, relaciones, lógica, navegación y presentación.

### 29.7 Asuntos reservados para producción por lotes

- número exacto de lotes, tamaño, secuencia y criterios de reenvío;
- asignación de entradas y estructuras a cada lote;
- tratamiento de destinos todavía no producidos;
- checkpoints de cobertura y balance por lote.

### 29.8 Asuntos reservados para calidad

- severidades y tolerancias definitivas;
- umbrales de accesibilidad, rendimiento, búsqueda y relaciones;
- política medible de `needs-update`;
- fórmulas, muestras y objetivos de indicadores;
- evidencia necesaria para cada puerta de terminación.

### 29.9 Asuntos reservados para inventarios

- nombres e IDs concretos de subdominios, disciplinas y entidades;
- selección de roles, puestos, competencias, herramientas y conceptos puente;
- distribución exacta por dominio, prioridad, profundidad y lote;
- comparaciones, escenarios, rutas y fuentes específicas.

### 29.10 Asuntos reservados para arquitectura

- generador estático, framework y lenguaje;
- formato ejecutable de esquemas y validadores;
- índice, motor, algoritmo y configuración de búsqueda;
- estructura de módulos, build, cache, redirects, despliegue y seguridad técnica;
- estrategia de impresión/exportación, localización y telemetría, si se aprueban.

### 29.11 Asuntos reservados para UX/UI

- arquitectura de información concreta y diseño de los seis flujos;
- pantallas, componentes, layouts, tipografía, colores, iconografía y motion;
- representación de relaciones, comparaciones, escenarios, rutas, vigencia y filtros;
- comportamiento responsive detallado y pruebas de usabilidad.

### 29.12 Excepciones que requieren `docs/10-decision-log.md`

Requieren registro: cambiar una categoría MoSCoW; publicar por debajo de un mínimo; superar un máximo inicial; excluir un dominio; alterar proporciones de prioridad o profundidad; publicar un estado no permitido; introducir backend, cuentas o personalización; incorporar una capacidad situada fuera del propósito; permitir contenido visual acoplado; o aceptar una dependencia tecnológica que cambie un contrato.

Una excepción debe indicar motivo, alcance, evidencia, impacto en hipótesis, alternativa descartada, responsable, vigencia y condición de retiro.

### 29.13 Contradicciones encontradas

No se encontraron contradicciones materiales entre los ocho documentos de autoridad.

Se conservan como tensiones o pendientes ya documentados, no como contradicciones:

- `related` continúa como campo transitorio mientras `relations[]` es el contenedor final; su migración corresponde al registro de decisiones;
- la política publicable medible de `needs-update` corresponde a calidad;
- `certification.issuer` no crea un tipo `organization` ni habilita `certified-by`;
- los identificadores `DOM-01` a `DOM-12` fueron candidatos de trazabilidad y no sustituyen los IDs definitivos del modelo;
- el modo claro y oscuro figuraba como capacidad candidata del alcance inicial; aquí queda `Should have`, por lo que un tema base accesible puede permitir publicación mediante aplazamiento justificado.

Las cantidades y categorías adoptadas en este documento especializan asuntos que las fuentes anteriores reservaron expresamente al MVP; no reabren taxonomía, modelo, lineamientos, relaciones ni fronteras de diseño.

## 30. Cierre

El MVP de IT Study queda definido como una experiencia web estática, transversal y completa de consulta y exploración. Su mínimo publicable representa los doce dominios mediante contenido aprobado, ofrece 120 entidades como piso, conecta el conocimiento con relaciones específicas y demuestra comparaciones, colaboración multidisciplinaria y progresión mediante estructuras editoriales acotadas.

El producto valida comprensión contextual y mapa mental, no volumen, especialización ni posibilidades futuras. Su terminación depende tanto de contenido y cobertura como de integridad, accesibilidad, reutilización, revisión humana y separación entre significado y presentación.
