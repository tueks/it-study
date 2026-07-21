# IT Study — Criterios de calidad

## 1. Identificación y propósito

- **Proyecto:** IT Study.
- **Documento:** Criterios de calidad.
- **Nombre oficial:** IT Study — Criterios de calidad.
- **Ruta oficial:** `docs/09-quality-criteria.md`.
- **Estado:** aprobado
- **Versión del contrato de calidad:** `1.0`.
- **Fecha:** 2026-07-20.
- **Documentos de autoridad, en orden:**
  1. `00-bootstrap-brief.md`;
  2. `docs/00-project-charter.md`;
  3. `docs/01-scope-and-audience.md`;
  4. `docs/02-taxonomy.md`;
  5. `docs/03-content-model.md`;
  6. `docs/04-editorial-guidelines.md`;
  7. `docs/05-relationship-rules.md`;
  8. `docs/06-design-boundaries.md`;
  9. `docs/07-mvp-definition.md`;
  10. `docs/08-production-batches.md`.

### 1.1 Propósito

Este documento establece el sistema normativo y medible de calidad de IT Study. Convierte los contratos aprobados en criterios verificables para decidir si una entrada puede pasar a `approved`, si una relación o una fuente son aceptables, si una estructura editorial cumple su propósito, si un lote puede aceptarse, integrarse y cerrarse, si una fase puede avanzar, si la cobertura acumulada representa el MVP y si un build o una versión candidata pueden publicarse.

El contrato sirve como autoridad para ChatGPT Trabajo, revisores humanos, coordinación, futuros agentes, Codex, responsables de integración y responsables de publicación. No sustituye la revisión humana ni permite que una puntuación agregada o una validación sintáctica oculten un incumplimiento material.

### 1.2 Alcance

Este documento define:

- el modelo multidimensional de calidad;
- severidades y tratamiento de hallazgos;
- puertas de entrada, aprobación, lote, fase, build y publicación;
- criterios estructurales, taxonómicos, editoriales, técnicos, relacionales, de fuentes, vigencia, cobertura, balance, accesibilidad e integración;
- política medible de `needs-update`;
- tolerancias y condiciones de excepción;
- evidencia mínima y responsabilidades;
- reglas automatizables y límites de Codex;
- indicadores que permiten tomar decisiones sin confundir calidad con volumen.

### 1.3 Audiencia

Está dirigido a:

- responsable del proyecto y chat coordinador;
- ChatGPT Trabajo y otros agentes de investigación o autoría;
- revisores editoriales, taxonómicos, técnicos, de fuentes, relaciones y accesibilidad;
- Codex y responsables futuros de integración;
- responsables de inventarios, ejemplos, arquitectura, UX/UI, build y publicación.

### 1.4 Decisiones que define

Define el modelo de calidad, la clasificación definitiva de hallazgos, la regla general de aceptación, las puertas de calidad, los umbrales de cobertura y balance ya aprobados, la política de `needs-update`, las condiciones de aceptación, integración y cierre de lotes, la evidencia exigible y los límites entre validación automática y juicio humano.

### 1.5 Asuntos reservados

Quedan reservados para documentos posteriores:

- selección, jerarquía operativa, formato de citas y procedimiento detallado de investigación: `work/SOURCE-POLICY.md` y `work/RESEARCH-PROTOCOL.md`;
- pasos ejecutables, plantillas, firmas y flujo diario: documentos de `work/`;
- decisiones materiales y excepciones: `docs/10-decision-log.md`;
- selección concreta de entradas: `inventories/`;
- ejemplos de conformidad: `examples/`;
- schemas, validadores, CI, arquitectura, framework, build, búsqueda y despliegue: fase técnica posterior;
- pantallas, interacción, componentes y métricas de usabilidad: fase UX/UI posterior.

Este documento no implementa ninguna de esas materias.

## 2. Definición de calidad en IT Study

La calidad de IT Study es la conformidad demostrable y mantenible de una unidad con su propósito educativo, los contratos aprobados y la evidencia disponible. Se compone de:

- precisión conceptual;
- claridad educativa;
- clasificación correcta;
- consistencia estructural;
- relaciones relevantes y específicas;
- fuentes suficientes y trazables;
- vigencia proporcional a la estabilidad;
- ausencia de duplicación canónica;
- cobertura representativa y balanceada;
- accesibilidad cognitiva y técnica;
- reutilización del contenido;
- separación entre contenido y diseño;
- integridad técnica;
- capacidad de mantenimiento y reconstrucción.

La calidad se evalúa por dimensión y por puerta. No se adopta una puntuación única capaz de compensar fallos: una dimensión fuerte no neutraliza un hallazgo bloqueante en otra.

Calidad no equivale a:

- mayor cantidad de palabras;
- mayor número de relaciones;
- más fuentes sin autoridad o relevancia;
- cumplimiento aislado de cuotas;
- popularidad de un término;
- complejidad técnica;
- presentación visual atractiva;
- ausencia de errores sintácticos;
- aprobación previa de otro elemento relacionado;
- velocidad de producción o cumplimiento de calendario.

## 3. Principios de calidad

1. **Cero errores bloqueantes antes de aprobar, integrar o publicar.**
2. **Precisión antes que volumen.** Se reduce alcance antes de aceptar contenido débil.
3. **Evidencia antes que certeza aparente.** La ausencia de evidencia se declara.
4. **Una entrada canónica por significado.** Alias, idiomas, dominios secundarios y vistas no crean copias.
5. **Relación específica antes que asociación genérica.** `related-to` es último recurso.
6. **Ausencia significativa de campos opcionales.** Un campo se omite cuando no aplica; no se rellena por simetría.
7. **Profundidad proporcional al papel de la entrada.** Fundamentos, puentes y entradas centrales requieren contexto suficiente.
8. **Cobertura real antes que cuotas.** Una cantidad habilita revisión, no demuestra valor.
9. **Revisión independiente antes de aprobación.** La autoevaluación no sustituye al revisor.
10. **Calidad acumulada antes que avance por calendario.** Ninguna fase avanza solo por fecha o volumen.
11. **Validación automática complementada por juicio editorial.** Lo automatizable no resuelve significado.
12. **Contenido aprobado antes de integración ordinaria.** Las excepciones son explícitas, limitadas y trazables.
13. **Fuentes de autoridad adecuadas al tipo de afirmación.** Una fuente comercial no gobierna afirmaciones generales por sí sola.
14. **Incertidumbre explícita antes que falsa precisión.** Se separan hecho, interpretación y decisión de IT Study.
15. **Separación obligatoria entre contenido y presentación.** La interfaz no escribe semántica de regreso.
16. **Accesibilidad como condición de producto.** No es mejora opcional posterior.
17. **Excepciones documentadas, limitadas y trazables.** Toda excepción tiene alcance, riesgo, vigencia y retiro.
18. **Ningún agente puede aprobar silenciosamente su propio trabajo.** Debe existir una perspectiva independiente registrada.
19. **Un resultado generado nunca sustituye la fuente canónica.** Índices, JSON, páginas y mapas son reconstruibles.
20. **Los términos técnicos en inglés prevalecen cuando sean la forma profesional habitual.** El texto explicativo permanece en español.

## 4. Unidades evaluables

| Unidad | Qué se evalúa | Evaluación principal | Evidencia requerida | Automatización posible | Juicio humano necesario | Decisiones posibles |
|---|---|---|---|---|---|---|
| Documento normativo | Autoridad, coherencia, alcance, decisiones y reservas | Coordinación y revisión documental | Diff, matriz de autoridad, contradicciones y aprobación | Enlaces, rutas, estructura y referencias | Coherencia y suficiencia normativa | Aprobar, devolver, registrar decisión |
| Dominio | Identidad, propósito, fronteras, representación y conexiones | Revisión taxonómica/editorial | Registro, fuentes y reporte de cobertura | Campos, IDs, padre/hijos y conteos | Frontera, vacío fundamental y valor | Representado, deuda menor, no representado |
| Subdominio | Padre único, alcance y utilidad de agrupación | Revisión taxonómica | Registro y matriz de pertenencia | Padre, IDs y duplicados | Diferencia frente a dominio o entrada | Aprobar, consolidar, dividir, rechazar |
| Disciplina | Transversalidad, hogar y aplicaciones sustantivas | Revisión taxonómica/técnica | Registro y aplicaciones justificadas | IDs, hogar y duplicados | Valor transversal y no duplicación | Aprobar, corregir, rechazar |
| Entidad de conocimiento | Estructura, clasificación, precisión, claridad, fuentes, relaciones y vigencia | Revisores especializados | Ficha, fuentes, reportes y revisión | Schema, referencias, fechas, longitudes y vocabularios | Semántica, pedagogía y suficiencia | `approved`, corrección, `rejected`, `needs-update` |
| Fuente normalizada | Identidad, autoridad, versión, disponibilidad y uso | Revisor de fuentes | Registro y secciones utilizadas | Formato, URL, fechas, duplicados | Autoridad, relevancia y suficiencia | Aceptar, complementar, descartar |
| Relación | Destino, tipo, dirección, evidencia, relevancia y autoridad | Revisor de relaciones | Arista/campo, nota y fuentes cuando apliquen | Compatibilidad, ciclos, duplicados e inversas | Relevancia y alcance contextual | Aceptar, corregir, eliminar, posponer |
| Comparación | Razón, dimensiones equivalentes y orientación contextual | Revisión editorial/técnica | Estructura, entradas y fuentes | Referencias, completitud y estado | Equivalencia de dimensiones y neutralidad | Aprobar, devolver, rechazar |
| Escenario | Plausibilidad, colaboración, secuencia y carácter ilustrativo | Revisión multidisciplinaria | Estructura, referencias y fuentes | Campos, orden, IDs y dominios | Plausibilidad, riesgos y causalidad | Aprobar, devolver, rechazar |
| Ruta de aprendizaje | Audiencia, progresión, prerrequisitos y finalización | Revisión pedagógica/editorial | Estructura y entradas aprobadas | Orden, referencias y estados | Saltos pedagógicos y adecuación | Aprobar, reordenar, devolver |
| Inventario | Selección, clasificación, balance, prioridad y dependencias | Coordinación y revisión taxonómica | Archivo y reporte de cobertura | IDs, columnas, duplicados y conteos | Valor, prioridad y aplazamiento | Aprobar, ajustar, congelar |
| Lote | Alcance, entregables, contenido, hallazgos y cobertura | Revisión independiente y coordinación | Paquete completo y decisión | Estructura, conteos, referencias y reportes | Aceptación del contenido y excepciones | Devolver, aceptar, integrar, cancelar |
| Fase de producción | Prerrequisitos, mínimos, calidad acumulada y deuda | Coordinación | Reportes acumulados y decisión de salida | Conteos, estados y bloqueos | Suficiencia y riesgo de avance | Avanzar, continuar, retroceder |
| Contenido acumulado del MVP | Cobertura, balance, profundidad, fuentes y flujos | Producto, contenido y calidad | Tablero y dossier acumulado | Conteos, porcentajes, referencias | Representatividad y valor | Completar mínimo, ampliar, detener, publicar |
| Artefacto generado | Fidelidad, procedencia y reproducibilidad | Codex/QA | Fuente, versión de build y diff | Comparación fuente-derivado | Interpretación de diferencias | Regenerar, corregir fuente, rechazar |
| Build | Reproducibilidad, integridad, flujos y accesibilidad | QA, Codex y responsables técnicos | Reporte de build y pruebas | Build, enlaces, referencias y derivados | Accesibilidad funcional y riesgo | Candidato, fallido, corregir |
| Versión candidata | Cumplimiento integral y autorización de publicación | Responsable de publicación y coordinación | Dossier, rollback y aprobaciones | Puertas técnicas y cobertura | Riesgo residual y autorización final | Publicar, aplazar, retirar candidato |

Una persona puede cubrir varias funciones, pero la evidencia debe identificar la perspectiva aplicada. La misma ejecución no puede figurar simultáneamente como autoevaluación y revisión independiente.

## 5. Dimensiones de calidad

El modelo adoptado se denomina **Modelo de Calidad por Dimensiones y Puertas de IT Study**. Cada dimensión produce hallazgos, evidencia y una decisión local; las puertas combinan esas decisiones sin promediar incumplimientos.

| Dimensión | Propósito y preguntas | Criterios principales | Evidencia | Responsable | Automatización posible | Fallos típicos | Relación con otras dimensiones |
|---|---|---|---|---|---|---|---|
| 1. Integridad estructural | ¿La unidad puede validarse, resolverse y mantenerse? | IDs, formato, campos, tipos, fechas, estados y referencias | Validador y diff | Codex + revisor | Alta | ID duplicado, frontmatter inválido | Base de todas las demás |
| 2. Conformidad taxonómica | ¿Qué es y dónde tiene hogar? | Tipo específico, dominio, subdominio, disciplina y fronteras | Matriz taxonómica | Revisor taxonómico | Media | Categoría inventada, padre múltiple | Condiciona relaciones y cobertura |
| 3. Calidad editorial | ¿Se comprende sin especialización ni tutorial? | Voz, autonomía, campos diferenciados, inglés técnico, ejemplos y extensión | Checklist y revisión | Revisor editorial | Media-baja | Relleno, promoción, acrónimos opacos | Depende de precisión y accesibilidad |
| 4. Precisión técnica y conceptual | ¿El significado, límites y afirmaciones son correctos? | Definición, causalidad, versiones, límites y neutralidad | Revisión y fuentes | Revisor técnico | Baja | Definición falsa, garantía absoluta | Condiciona estado y fuentes |
| 5. Fuentes y trazabilidad | ¿La evidencia existe y cubre lo afirmado? | Autoridad, relevancia, actualidad, secciones y disponibilidad | Registros y mapa afirmación-fuente | Revisor de fuentes | Media | Fuente inventada, proveedor único | Sostiene precisión, relaciones y vigencia |
| 6. Calidad de relaciones | ¿La conexión es específica, válida y educativa? | Destino, clave, dirección, autoridad, evidencia y relevancia | Reporte relacional | Revisor de relaciones | Alta para forma; baja para relevancia | Ciclo, relación débil, inversa duplicada | Conecta cobertura y rutas |
| 7. Ausencia de duplicados | ¿Existe una sola identidad por significado? | IDs, nombres, aliases, acepciones, versiones y migración | Reporte de duplicados | Taxonomía/editorial | Media | Dos fichas equivalentes | Protege búsqueda y conteos |
| 8. Vigencia y estabilidad | ¿La afirmación sigue siendo válida? | Revisión, versión, verificación, sustitución y disponibilidad | Metadatos y fuentes | Revisor técnico/fuentes | Media | Producto obsoleto presentado como vigente | Puede activar `needs-update` |
| 9. Cobertura educativa | ¿Se responden las preguntas necesarias? | Fundamentos, tipos, contextos y relaciones | Matriz de cobertura | Responsable de contenido | Alta para conteos; baja para vacíos | Cobertura nominal | Alimenta balance y MVP |
| 10. Balance del MVP | ¿La cobertura es transversal y no manipulada? | Distribución por dominio, prioridad, profundidad y familias | Tablero acumulado | Coordinación | Alta | Concentración en software o herramientas | Condiciona fases y publicación |
| 11. Accesibilidad del contenido | ¿El significado puede entenderse sin una percepción o interfaz concreta? | Jerarquía, lenguaje, alternativas, orden y no dependencia espacial | Revisión de contenido | Revisor de accesibilidad/editorial | Media | Color como significado, alt text vacío | Se complementa con implementación |
| 12. Separación contenido-diseño | ¿Puede cambiar la presentación sin reescribir la fuente? | Ausencia de propiedades visuales, URLs como identidad y contenido duplicado | Pruebas de sustitución | Arquitectura/calidad | Alta + revisión | HTML, CSS, componente en ficha | Protege reutilización e integración |
| 13. Estructuras editoriales | ¿Comparación, escenario o ruta cumplen su función propia? | Contratos especializados y referencias aprobadas | Revisión de estructura | Editorial/técnica | Media | Copiar definiciones, orden injustificado | Depende de entidades aprobadas |
| 14. Calidad operativa del lote | ¿La entrega es acotada, completa y revisable? | Manifiesto, reportes, alcance y hallazgos | Paquete del lote | Coordinación/revisor | Alta | Entregable ausente, alcance silencioso | Habilita integración y fases |
| 15. Integridad de integración y derivados | ¿Lo aceptado se incorporó sin cambios silenciosos? | Fuente canónica, validación postintegración y reproducibilidad | Reporte técnico y diff | Codex/QA | Alta | Derivado editado, cambio editorial oculto | Precede build y cierre |
| 16. Preparación para publicación | ¿El producto completo satisface valor, integridad y riesgo? | Mínimos, flujos, accesibilidad, documentación y rollback | Dossier de publicación | Responsable de publicación | Alta + decisión humana | Publicar con deuda material | Integra todas las dimensiones |

## 6. Clasificación de hallazgos

### 6.1 Bloqueante

Hallazgo que invalida significado, identidad, referencias, autoridad o seguridad; contradice un contrato aprobado; impide validar cobertura; o exige una decisión antes de continuar.

Ejemplos: ID duplicado, referencia obligatoria inexistente, clasificación incompatible, definición materialmente falsa, relación prohibida, fuente inventada, propiedad visual en contenido, contenido publicado sin estado autorizado, dependencia central inexistente o duplicación canónica sin resolver.

### 6.2 Mayor

Defecto significativo que no destruye inmediatamente la estructura, pero impide aprobar el elemento al nivel requerido. Incluye definición incompleta, fuente insuficiente para una afirmación central, dominio secundario injustificado, relación importante mal dirigida, profundidad inferior, comparación defectuosa, escenario sin colaboración sustantiva o ruta con salto pedagógico importante.

### 6.3 Menor

Defecto acotado que no altera el significado central y puede corregirse sin rediseñar la unidad: inconsistencia terminológica localizada, acrónimo sin desarrollar, ejemplo poco claro, nota relacional extensa, metadato no crítico incompleto, desviación leve de extensión o redacción mejorable.

### 6.4 Recomendación

Mejora no obligatoria para la decisión actual. No puede utilizarse para rebajar una regla obligatoria.

### 6.5 Pregunta

Duda que requiere aclaración y todavía no constituye defecto confirmado. Se vuelve bloqueante o mayor cuando la respuesta es indispensable para identidad, precisión, alcance o seguridad.

### 6.6 Propuesta de cambio

Sugiere modificar taxonomía, modelo, relaciones, alcance, cantidades, estados o contratos. Se separa del lote ordinario y no puede aplicarse sin autoridad.

### 6.7 Efectos operativos

| Categoría | Aprobación de elemento | Integración | Cierre de lote | Responsable de resolución | Evidencia de cierre | Aplazamiento |
|---|---|---|---|---|---|---|
| Bloqueante | Prohibida | Prohibida | Prohibido | Autor/revisor/coordinación según materia | Corrección validada y nueva revisión | Prohibido dentro del alcance afectado |
| Mayor | Prohibida ordinariamente | Prohibida para contenido afectado | Prohibido si forma parte del alcance aceptado | Autor y revisor especializado | Diff, fuente o revisión específica | Solo mediante decisión excepcional; no cuenta para mínimos |
| Menor | Permitida solo si se corrige o acepta dentro de tolerancia | Permitida con registro | Permitido con deuda explícita limitada | Autor/revisor | Corrección o aceptación razonada | Permitido si no se acumula ni afecta publicación |
| Recomendación | Permitida | Permitida | Permitido | Planificación futura | Registro de disposición | Sí |
| Pregunta | Depende de su impacto | No si afecta semántica o referencia | No si permanece ambigua dentro del alcance | Autoridad competente | Respuesta o declaración formal de no bloqueo | Sí, solo si no bloqueante |
| Propuesta de cambio | No se resuelve como contenido ordinario | No se aplica | El lote puede cerrar si queda fuera de alcance | Coordinación | Remisión y registro de decisión | Sí; siempre separada |

## 7. Severidad frente a tipo de validación

La severidad se determina por impacto, no por el origen del hallazgo.

- Un error automático no es bloqueante por ser técnico; lo es si rompe identidad, contrato, referencia, integridad o publicación.
- Una advertencia automática puede convertirse en mayor después de revisión semántica.
- Un hallazgo editorial puede ser bloqueante si induce una definición falsa, clasificación incompatible, riesgo o dependencia inexistente.
- Una recomendación nunca oculta una obligación.
- `review-report.md` registra la severidad definitiva, la unidad afectada, la puerta, el responsable y la disposición.
- `validation-report.md` conserva la categoría técnica original, regla, ubicación y resultado bruto.
- Cuando la decisión humana cambia la severidad automática, debe registrar fundamento y evidencia; no puede simplemente suprimir el hallazgo.

## 8. Puertas de calidad

| Puerta | Condiciones obligatorias | Tolerancia | Evidencia | Responsable | Permitido | Prohibido | Decisiones y devolución |
|---|---|---|---|---|---|---|---|
| 1. Entrada a producción | Manifiesto `authorized`, alcance, dependencias, responsables, límites, estrategia de fuentes y duplicados iniciales | Ajuste de hasta una entrada solo dentro del rango autorizado y registrado | `batch-manifest.md` | Coordinación | Preguntas no bloqueantes identificadas | Dependencia obligatoria ausente, ambigüedad material, alcance implícito | Autorizar, dividir, posponer o cancelar |
| 2. Entrega para revisión | Paquete completo, autoevaluación, validación, IDs y fuentes registrados, sin propiedades visuales | Menores ya identificados pueden acompañar la entrega | Todos los entregables | Responsable de producción | Recomendaciones y preguntas explícitas | Entregable ausente, alcance excedido, duplicado no declarado | Pasar a `in-review` o devolver a producción |
| 3. Aprobación de entrada | Cero bloqueantes y mayores; revisión independiente; fuentes suficientes; estado, vigencia y profundidad válidos | Menores corregidos o aceptados de forma explícita y limitada | Ficha, reportes y aprobación | Revisor autorizado | Recomendaciones | Incertidumbre central no delimitada, posible duplicado abierto | `approved`, `changes-requested`, `rejected` o `needs-update` para contenido previamente aprobado |
| 4. Aceptación de lote | Alcance vigente, entregables completos, contenido aceptable, duplicados y preguntas bloqueantes resueltos | Menores limitados sin efecto acumulado | `review-report.md` y paquete | Revisor/coordinación | Recomendaciones y candidatos fuera de alcance | Bloqueantes, mayores en contenido aceptado, excepción no autorizada | `accepted` o `changes-requested` |
| 5. Integración de lote | Lote `accepted`, contenido ordinariamente `approved`, referencias resueltas y validación postintegración | Ninguna corrección editorial silenciosa | Reporte de integración y diff | Codex/responsable técnico | Cambios mecánicos reproducibles | Integrar borradores, reinterpretar semántica | `integrated` o devolver a corrección |
| 6. Cierre de lote | Integración confirmada, cobertura y decisiones actualizadas, acciones asignadas | Deuda menor documentada que no afecte mínimos | Dossier final | Coordinación | Propuestas futuras resueltas como fuera de alcance | Deuda bloqueante, entregables ambiguos | `closed`, corrección o cancelación documentada |
| 7. Salida de fase | Criterios específicos F0–F7, evidencia acumulada y bloqueos resueltos | Menores que no comprometan la fase siguiente | Reportes acumulados y decisión | Coordinación | Deuda explícita con capacidad reservada | Avance por calendario, deuda que se propaga | Avanzar, continuar o retroceder |
| 8. Terminación del contenido mínimo | Mínimos aprobados, 12 dominios representados, balance y estructuras conformes | Ningún elemento `needs-update` cuenta | Tablero y dossier del MVP | Contenido/producto/calidad | Objetivo no alcanzado si el mínimo ya valida valor | Conteo artificial, contenido provisional o duplicado | Declarar mínimo completo o autorizar corrección |
| 9. Build candidato | Build reproducible, validadores, referencias, flujos, accesibilidad y documentación | Solo hallazgos menores no funcionales aceptados | Reporte de build y pruebas | QA/Codex/arquitectura | Mejoras `Should have` aplazadas por decisión | Bloqueantes, referencias internas rotas, contenido no autorizado | Candidato o fallido |
| 10. Publicación | Puertas previas, autorización humana, rollback y cero riesgo material conocido | Excepciones extraordinarias solo con decision log y sin contar contenido afectado | Dossier de publicación | Responsable de publicación + coordinación | Recomendaciones y deuda menor explícita | Información materialmente falsa/riesgosa, incumplimiento estructural fundamental | Publicar, aplazar o retirar candidato |

La devolución identifica hallazgo, severidad, unidad, criterio, evidencia faltante, responsable y puerta de reentrada. No se devuelve un lote con instrucciones vagas como “mejorar calidad”.

## 9. Regla general de aceptación

Una unidad puede aceptarse únicamente cuando:

- no existe ningún hallazgo bloqueante abierto;
- no existe ningún hallazgo mayor abierto en el contenido que vaya a aprobarse o integrarse;
- los hallazgos menores están corregidos o aceptados expresamente dentro de la tolerancia aplicable;
- las recomendaciones están registradas sin obligación de ejecución inmediata;
- las preguntas están resueltas o declaradas no bloqueantes por la autoridad competente;
- las propuestas de cambio están separadas del lote y remitidas al proceso de decisión;
- las validaciones estructurales aplicables han sido superadas;
- existe revisión independiente;
- la evidencia queda conservada.

No existe aceptación por puntuación promedio ni por mayoría de checks. Una excepción nunca puede permitir ordinariamente IDs duplicados, referencias internas rotas, fuente inventada, contenido materialmente incorrecto o riesgoso, relación prohibida, autoridad invertida entre capas o publicación de contenido no autorizado.

Requieren `docs/10-decision-log.md`, entre otros casos: publicación con un hallazgo mayor, superación de máximos, cambio de porcentajes, alteración de autoridad, integración de contenido no aceptado, excepción a una relación prohibida, mantenimiento de `needs-update` fuera de tolerancia o modificación de un contrato aprobado.

## 10. Calidad estructural

Leyenda: **B** bloqueante, **M** mayor, **m** menor, **A** advertencia inicial sujeta a revisión.

| Criterio | Regla verificable | Severidad ordinaria si falla |
|---|---|---|
| ID válido | Cumple namespace, ASCII minúsculo, `kebab-case` y patrón aprobado | B |
| Unicidad global | Ningún ID activo, histórico o reservado se repite | B |
| No reutilización | Un ID retirado o cancelado permanece reservado | B |
| Namespace correcto | El prefijo corresponde a la clase de registro | B |
| Formato aprobado | Markdown con frontmatter YAML para fuentes editoriales aplicables | M; B si impide lectura o autoridad |
| UTF-8 | El archivo se decodifica sin pérdida | B si hay corrupción; M en otro caso |
| Saltos LF | No contiene finales incompatibles; termina con salto de línea | m |
| Frontmatter válido | YAML parseable, delimitado y sin claves duplicadas | B |
| Campos obligatorios | Presentes según tipo, estado y condición | B si identidad/referencia/estado; M en otros casos |
| Ausencia significativa | Campos opcionales ausentes cuando no aplican; sin listas o texto de relleno | M si distorsiona; m si localizado |
| Tipos lógicos | Cada valor corresponde a su tipo aprobado | B |
| Enums | Solo vocabularios vigentes | B |
| Fechas ISO | Fechas válidas y normalizadas | M; B si afecta aprobación o vigencia material |
| Coherencia de fechas | `createdAt` ≤ `reviewedAt` < `reviewDueAt`; vigencias ordenadas | M; B si se publica con revisión imposible |
| Estados válidos | Solo `editorialStatus` aprobado y coherente con metadatos | B |
| Versión de contrato | `contractVersion` reconocida y compatible | B |
| Referencias por ID | No se usan títulos, rutas, slugs, URLs o nombres de archivo como identidad | B |
| Referencias existentes | Todo destino obligatorio existe y es resoluble | B |
| Una entrada por archivo | No se mezclan identidades canónicas | B |
| Estructura de carpetas | Compatible con la clase; la carpeta no concede semántica | M |
| Fuentes y generados separados | Derivados no se editan ni tratan como autoridad | B |
| Campos desconocidos | Ninguna propiedad no aprobada altera significado o presentación | B si visual/semántica; M si metadato inocuo |

Una advertencia automática se eleva cuando revela un patrón sistémico, una pérdida de significado o un intento de eludir el contrato.

## 11. Calidad taxonómica

Una clasificación es conforme cuando:

- `primaryDomain` existe, corresponde al propósito principal y es único cuando aplica;
- cada subdominio pertenece a ese dominio principal;
- un subdominio tiene exactamente un `parentDomain`;
- `secondaryDomains` son únicos, distintos al principal y justifican aplicaciones sustantivas;
- una disciplina tiene identidad transversal, hogar cuando es razonable y aplicaciones verificables;
- `type` y `subtype` pertenecen al vocabulario y se usa el tipo más específico;
- rol, puesto, responsabilidad y competencia no se usan como equivalentes;
- metodología, `work-framework`, proceso, práctica y técnica conservan sus fronteras;
- protocolo, estándar, tecnología, herramienta, plataforma, servicio y producto se distinguen por naturaleza;
- producto permanece como tipo y marca como metadato;
- `discipline` no se convierte en tercer nivel;
- `area` no concede pertenencia;
- no se inventan categorías para resolver navegación, marketing o una vacante.

Son bloqueantes: padre múltiple, dominio incompatible que altera identidad, tipo inexistente, subtipo incompatible, disciplina usada como jerarquía, producto/brand confundidos de forma estructural o categoría inventada persistida.

Son mayores: dominio secundario injustificado, tipo demasiado general cuando existe uno específico, hogar disciplinar dudoso, confusión rol-puesto o práctica-proceso que afecta la explicación. Una frontera ambigua se remite a revisión taxonómica y no se aprueba por conveniencia.

## 12. Calidad editorial

| Criterio | Regla | Validación |
|---|---|---|
| Autonomía de `summary` | Identifica naturaleza y contexto sin depender de la ficha | Humana + longitud semiautomática |
| Precisión de `definition` | Explica qué es y su frontera; no historia, beneficio ni marca | Humana |
| Distinción de campos | `definition`, `problemSolved`, `purpose` y `contextNotes` responden preguntas distintas | Semiautomática + humana |
| Audiencia no especializada | Jerga necesaria explicada y prerrequisitos no asumidos | Humana |
| Contexto profesional | Explica cuándo aparece, participantes, decisiones y consecuencias | Humana |
| Prerrequisitos | Solo indispensables o recomendados con razón | Humana + grafo |
| Confusiones | Explica similitud, diferencia e importancia | Humana |
| Ejemplos | Aclaran una idea y no son tutoriales ni universales | Humana |
| Ventajas y limitaciones | Condicionadas, equilibradas y sin garantías | Humana |
| Implicaciones | No confunden riesgo, defecto, limitación o causalidad | Humana |
| Neutralidad | Sin promoción, compra, superioridad ni concentración comercial | Semiautomática + humana |
| Acrónimos | Se desarrollan cuando corresponde; grafía profesional conservada | Semiautomática |
| Inglés técnico | Prevalece la forma profesional habitual; traducciones funcionan como apoyo o alias | Humana |
| Nombres y aliases | Consistentes con `canonicalName`, `englishName` y `aliases` | Automática + humana |
| Incertidumbre | Delimitada, atribuida y reflejada en verificación/vigencia | Humana + metadatos |
| Ausencia de tutoriales | Sin comandos extensos, procedimientos completos o laboratorios | Semiautomática + humana |
| Ausencia de relleno | Cada sección aporta información no duplicada | Humana |
| Extensión | Dentro de rangos o con justificación válida | Automática + humana |
| Ausencia visual | Sin color, posición, componente, tema o instrucción de pantalla | Automática + humana |

La validación exclusivamente automática puede comprobar longitudes, términos prohibidos evidentes, campos y consistencia nominal. La claridad, profundidad, neutralidad, utilidad pedagógica y fidelidad semántica requieren juicio humano.

## 13. Tolerancias de extensión

Los rangos aprobados no se modifican.

### 13.1 Campos y listas

| Elemento | Recomendado | Límite flexible | Máximo con justificación |
|---|---:|---:|---:|
| `title` | 2–8 palabras y ≤60 caracteres | 10 palabras o 80 caracteres | 12 palabras o 100 caracteres |
| `summary` | 18–40 palabras | 55 | 70 |
| `definition` | 35–90 | 130 | 180 |
| `problemSolved` | 20–60 | 90 | 130 |
| `purpose` | 15–45 | 70 | 100 |
| Cada `contextNotes.note` | 20–70 | 100 | 140 |
| Cada ejemplo | 35–100 | 150 | 220 |
| Cada ventaja | 8–30 | 45 | 60 |
| Cada limitación | 8–35 | 50 | 70 |
| Cada nota de relación | 10–40 | 60 | 90 |
| Cada alcance incluido | 2–15 | 25 | 40 |
| Cada alcance excluido | 2–18 | 30 | 45 |

### 13.2 Estructuras completas

| Estructura | Recomendado | Límite flexible | Máximo con justificación |
|---|---:|---:|---:|
| Ficha `recognition` | 180–450 | 600 | 800 |
| Ficha `contextual-understanding` | 450–1,000 | 1,300 | 1,700 |
| `future-expanded-reference` | 900–1,800 | 2,300 | 3,000 |
| Comparación | 500–1,200 | 1,600 | 2,200 |
| Escenario | 600–1,400 | 1,900 | 2,600 |
| Ruta | 500–1,200 | 1,600 | 2,200 |

### 13.3 Interpretación de tolerancias

- **Dentro del rango recomendado:** conformidad de extensión; no prueba claridad ni profundidad.
- **Por encima del recomendado y hasta el flexible:** advertencia automática. Se acepta sin excepción si la revisión confirma necesidad, no duplicación y buena legibilidad.
- **Por encima del flexible y hasta el máximo:** requiere justificación en revisión. Sin justificación es hallazgo mayor; con justificación válida puede quedar como menor aceptado.
- **Por encima del máximo:** hallazgo mayor y obligación de reducir o dividir. Se vuelve bloqueante si impide reutilización, accesibilidad o revisión. Una recurrencia requiere decision log.
- **Entre 90 % y 100 % del mínimo recomendado:** advertencia por brevedad.
- **Entre 75 % y menos de 90 %:** requiere justificación de concisión y prueba explícita de que cumple el propósito.
- **Por debajo de 75 %:** hallazgo mayor ordinario. La severidad se basa finalmente en preguntas no respondidas, no en el porcentaje aislado.

Una entrada demasiado breve se amplía solo con contenido aplicable; una entrada innecesariamente extensa se reduce eliminando repetición, historia accesoria, tutoriales y ejemplos equivalentes. Polisemia, límites normativos, comparaciones múltiples o causalidad de escenarios pueden justificar extensión. Nunca la justifican el relleno, copia de fuentes o implementación detallada.

## 14. Precisión técnica y conceptual

La revisión debe verificar:

- significado esencial y frontera del concepto;
- contexto y condiciones de aplicabilidad;
- afirmaciones causales y distinción entre correlación, contribución y garantía;
- ventajas condicionadas, limitaciones y trade-offs;
- versiones y estado de estándares;
- historia, atribución y secuencia temporal;
- terminología no uniforme o dependiente de comunidad;
- afirmaciones comerciales y emergentes;
- ejemplos técnicamente posibles y no engañosos;
- neutralidad frente a implementaciones;
- consistencia con estándares y documentación oficial.

Se requiere revisión especializada cuando una afirmación afecta seguridad, privacidad, cumplimiento, interoperabilidad, arquitectura, medición, historia controvertida, tecnología emergente o una frontera taxonómica material.

Se requiere fuente primaria para requisitos normativos, protocolos, estándares, versiones, capacidades actuales de producto, historia institucional y afirmaciones del propio proveedor. Se requiere segunda fuente cuando hay controversia, comparación, afirmación general más allá de un proveedor, evidencia empírica, terminología no uniforme o riesgo de sesgo.

Se declara incertidumbre cuando la evidencia no permite una conclusión única. Se asigna `needs-update` cuando contenido previamente aprobado pierde verificación o cambia materialmente. Se rechaza cuando el significado central es incorrecto, la evidencia necesaria no existe, el contenido depende de una afirmación insostenible o la corrección exigiría otra identidad.

## 15. Calidad de fuentes

Sin sustituir `work/SOURCE-POLICY.md`, una fuente se evalúa por:

- existencia e identidad verificables;
- autoridad apropiada para la afirmación;
- relevancia directa;
- actualidad y versión;
- disponibilidad o preservación;
- trazabilidad hasta afirmaciones y relaciones;
- `sectionsUsed` reales;
- fecha de consulta para recursos web;
- idioma y posibilidad de interpretación fiel;
- independencia respecto de otras fuentes;
- concentración por proveedor u organización;
- conflictos y limitaciones;
- papel de fuentes secundarias;
- respaldo específico de relaciones cuando sea obligatorio.

Requisitos generales:

| Materia | Evidencia esperada |
|---|---|
| Fundamentos | Fuente primaria, académica, institucional o publicación de referencia estable |
| Estándares | Texto o registro oficial con emisor, versión y estado |
| Protocolos | Especificación oficial o autoridad técnica primaria |
| Productos/servicios | Documentación oficial para capacidades propias; fuente independiente para afirmaciones generales o comparativas |
| Tecnología emergente | Fuentes actuales, diversidad, incertidumbre y revisión prevista |
| Historia | Fuente primaria o histórica identificable; secundaria fuerte para síntesis |
| Comparaciones | Evidencia equivalente para cada elemento y dimensión |
| Contenido cambiante | Fecha, versión, consulta y revisión prevista |
| Sustitución/evolución | Evidencia explícita de linaje o reemplazo; no mera cronología |

No existe una cantidad uniforme de fuentes por ficha. Una fuente excelente puede ser suficiente para una afirmación directa; diez fuentes débiles pueden ser insuficientes.

## 16. Suficiencia de fuentes

La suficiencia se decide mediante un **mapa de afirmaciones**: cada afirmación central, factual, normativa, temporal, comparativa o controvertida debe estar cubierta por evidencia adecuada.

- Una sola fuente es suficiente cuando es autoridad directa, vigente, inequívoca y cubre completamente la afirmación.
- Se requieren múltiples fuentes cuando hay diversidad de perspectivas, controversia, comparación, generalización entre proveedores, historia disputada o evidencia empírica.
- Una fuente de proveedor es adecuada para describir su producto, versión o capacidad declarada.
- Una fuente de proveedor es insuficiente por sí sola para afirmar superioridad, adopción general, efecto causal, ausencia de alternativas o comparación imparcial.
- Una fuente secundaria es aceptable para contexto, síntesis o terminología si no sustituye una fuente primaria necesaria.
- Una afirmación no puede aprobarse cuando carece de evidencia rastreable, la única fuente contradice el alcance, la versión es desconocida y material, o la evidencia disponible no permite formularla con seguridad.

La cantidad nunca sustituye autoridad, relevancia, independencia ni cobertura. `sources-report.md` debe identificar afirmaciones centrales, fuentes utilizadas, vacíos, conflictos y decisión.

## 17. Calidad de relaciones

Toda relación debe cumplir:

- `targetId` canónico existente;
- `relationType` aprobado y persistible en ese lugar;
- dirección correcta;
- inversa generada o simetría tratada según contrato;
- compatibilidad de tipos;
- cardinalidad válida;
- ausencia de ciclo prohibido;
- `sourceIds` cuando son obligatorios;
- `note` contextual cuando aplica;
- autoridad correcta entre campo, relación persistida, inversa o estructura especializada;
- ausencia de duplicación;
- relevancia educativa y especificidad;
- uso restringido de `related-to`;
- destino en estado adecuado;
- tratamiento consciente de contenido `deprecated`, futuro o pendiente.

| Caso | Severidad ordinaria |
|---|---|
| Destino inexistente o alias/URL como destino | Bloqueante |
| Autorreferencia prohibida | Bloqueante |
| Ciclo en `requires`, jerarquía, `part-of`, sustitución o `supersedes` | Bloqueante |
| Sustitución circular | Bloqueante |
| Tipo o dirección incompatible | Bloqueante si altera semántica; mayor en caso corregible sin impacto externo |
| Relación derivada persistida y contradictoria | Bloqueante |
| Relación débil o basada en coocurrencia | Mayor si cuenta para cobertura; menor si secundaria |
| Evidencia obligatoria ausente | Mayor; bloqueante en gobierno, sustitución o afirmación riesgosa |
| Inversa duplicada | Mayor; bloqueante si contradice |
| Relación creada solo para navegación o dibujo | Bloqueante |
| Nota ausente cuando es obligatoria | Mayor |
| Relación hacia `needs-update` | Advertencia; mayor si sostiene contenido central |
| Relación futura contada como válida | Bloqueante |

## 18. Umbrales de densidad relacional

Los umbrales son señales de revisión, no cuotas uniformes.

### 18.1 Entradas aisladas

- Una entidad `essential`, concepto puente, fundamento o entrada central con **cero relaciones semánticas o campos de autoridad relacional**, además de pertenencia taxonómica, genera hallazgo mayor.
- Una entidad `important` aislada genera advertencia y revisión; se vuelve mayor si su aislamiento impide contexto o cobertura.
- Una entidad periférica `recognition` puede tener una sola relación específica si su papel está justificado.

### 18.2 Exceso de relaciones

- Más de **8 relaciones directas no taxonómicas** en una entrada genera advertencia.
- Más de **12** requiere justificación individual y comparación con entradas del mismo tipo y prioridad.
- Una entrada con más de **3 veces la mediana** de su grupo y al menos 9 relaciones se revisa por centralización artificial.
- Se convierte en hallazgo mayor cuando no puede explicarse qué pregunta distinta responde cada relación o cuando las relaciones dominan la ficha.

### 18.3 Uso de `related-to`

- Más de una relación `related-to` por entrada genera revisión de especificidad.
- Más de dos, o más de 33 % de sus relaciones contables, constituye hallazgo mayor salvo justificación excepcional.
- A nivel acumulado, más de 15 % de las relaciones contables como `related-to` activa revisión de fase; más de 20 % bloquea salida de fase o publicación hasta clasificar, justificar o eliminar el exceso.
- `related-to` nunca puede ser el único respaldo de un concepto puente ni de representación externa de un dominio.

### 18.4 Concentración y cadenas

- Más de tres tipos de relación distintos hacia el mismo destino exige revisar si se duplicó significado.
- Una cadena directa de `requires` superior a seis niveles genera advertencia; superior a ocho exige revisión pedagógica y es mayor si afecta una ruta introductoria.
- Más de cinco prerrequisitos directos en una entrada genera advertencia; más de siete requiere justificación de indispensabilidad.
- Un grafo donde el 5 % de entradas concentra más de 30 % de relaciones genera revisión por hub artificial.
- Una disciplina sin aplicaciones sustantivas o un dominio sin conexión externa es mayor y bloquea su representación.

Las excepciones se justifican por naturaleza de la entrada, no por deseo de una visualización densa.

## 19. Calidad de aliases y control de duplicados

Se revisan ID, `title`, `canonicalName`, `englishName`, siglas, traducciones, grafías, nombres históricos, acepciones, productos/capacidades, lotes anteriores, contenido `deprecated`, versiones y migraciones.

Resultados:

- **Alias correcto:** misma identidad y significado; se registra en la entrada canónica.
- **Posible duplicado:** similitud suficiente para requerir decisión; bloquea aprobación de ambos candidatos.
- **Duplicado confirmado:** mismo significado; se conserva una entrada, se migran referencias y se depreca la otra cuando ya tuvo identidad pública.
- **Acepción compatible:** comparte núcleo; se expresa dentro de la misma entrada mediante contexto aprobado.
- **Significado incompatible:** recibe ID separado y calificador estable.
- **Entrada histórica:** conserva contexto y no se presenta como vigente.
- **Versión:** solo tiene identidad propia cuando la versión cambia significado o merece tratamiento editorial autónomo.
- **Migración:** conserva `legacyIds`, aliases, reservas y referencias trazables.

Un nombre diferente no prueba significado diferente. `confused-with` no resuelve duplicados. Ningún posible duplicado puede pasar a `approved` sin decisión explícita.

## 20. Vigencia, estabilidad y actualización

| Estabilidad | Expectativa de calidad |
|---|---|
| `stable-foundation` | Significado durable, revisión y verificación; cambio solo por nueva evidencia material |
| `slow-evolution` | Revisión ante cambios reconocibles y contexto actualizado |
| `versioned-standard` | Emisor, versión, estado, vigencia, sucesión y reemplazo |
| `changing-technology` | `reviewedAt`, `reviewDueAt`, verificación y fuentes actuales |
| `changing-tool-product` | Proveedor/brand, capacidades fechadas, disponibilidad y revisión prevista |
| `emerging` | Incertidumbre, evidencia diversa, terminología no uniforme y revisión prioritaria |
| `deprecated` | Fecha, motivo, sustitución cuando exista y acceso histórico controlado |

Se evalúan `reviewedAt`, `reviewDueAt`, `verificationStatus`, versión, disponibilidad de fuentes, sustituciones, información conocida como incorrecta, cambios materiales y avisos.

Pasa a `needs-update` cuando una fuente central pierde disponibilidad sin respaldo alternativo, vence una revisión material, cambia una versión que afecta la explicación, aparece evidencia contradictoria relevante, se detecta una afirmación obsoleta o la verificación deja de ser confiable.

Puede permanecer temporalmente accesible solo bajo la política de la sección 21. Se retira del índice cuando existe riesgo material, error central, sustitución incompatible o incertidumbre que impide una comprensión segura. Se depreca cuando el significado u objeto dejó de ser vigente y existe razón de conservación histórica. Vuelve a `approved` únicamente tras corrección, fuentes suficientes, nueva revisión independiente y metadatos actualizados.

## 21. Política de `needs-update`

### 21.1 Condiciones de asignación

`needs-update` solo se asigna a contenido previamente `approved` cuando:

- una afirmación material puede haber cambiado;
- la fuente o versión central deja de ser verificable;
- vence una revisión requerida y la estabilidad impide presumir continuidad;
- se detecta conflicto de fuentes no resuelto;
- una sustitución, deprecación o cambio de contexto exige revisión;
- un cambio de contrato aprobado obliga a revalidar la entrada.

Puede asignarlo un revisor autorizado, coordinación o un proceso de vigencia que produzca evidencia verificable. Una detección automática propone el estado; no lo resuelve ni lo retira por sí sola.

### 21.2 Categorías de atención

| Categoría | Condición | Tratamiento público | Puerta |
|---|---|---|---|
| **U1 — crítica** | Información materialmente incorrecta, riesgosa, normativa falsa o sustitución que cambia el significado | Retiro inmediato de búsqueda, glosario, rutas y descubrimiento; acceso directo solo si es necesario para trazabilidad y con aviso | Bloquea publicación y dependencias |
| **U2 — prioritaria** | Duda material o versión cambiante que no vuelve falsa toda la ficha | Acceso directo temporal con aviso; excluida como entrada central de comparación, escenario o ruta | Debe resolverse antes del siguiente candidato de publicación |
| **U3 — ordinaria** | Desactualización no central, enlace secundario o mejora de contexto | Puede seguir accesible con aviso y exclusión de conteos | Se atiende en el siguiente ciclo de mantenimiento aplicable |

### 21.3 Reglas obligatorias

- `needs-update` no cuenta como `approved` para mínimos, porcentajes, representación, conceptos puente ni estructuras centrales.
- La información conocida como materialmente falsa o riesgosa no puede mantenerse públicamente.
- El aviso debe nombrar el estado, la naturaleza del riesgo, la última revisión y, cuando exista, el sustituto; no puede depender solo de color.
- Búsqueda y glosario ordinarios excluyen U1 y pueden excluir U2; el acceso histórico por ID mantiene trazabilidad.
- Una relación hacia U1 se desactiva del descubrimiento ordinario y se revisa. Una relación hacia U2 genera advertencia y no puede sostener una ruta o comparación central.
- Para corregir se requieren evidencia actual, actualización de afirmaciones, revisión de relaciones y nueva aprobación.
- Se depreca cuando el contenido ya no representa conocimiento vigente o no puede repararse sin cambiar identidad.

Mantener U1 o U2 fuera de estas condiciones requiere `docs/10-decision-log.md` y nunca permite contarlo para el MVP.

## 22. Calidad de dominios

Un dominio se considera representado solo cuando cumple la definición aprobada:

- registro completo y `approved`;
- propósito, alcance incluido y excluido;
- dominios vecinos y fronteras comprensibles;
- al menos dos subdominios aprobados;
- al menos seis entidades `essential` o `important`;
- tres familias de tipos cuando sea aplicable;
- al menos una entrada fundamental o prerrequisito;
- al menos una relación específica con otro dominio;
- ausencia de vacío fundamental.

Evidencia: registro de dominio, matriz de subdominios, lista contable de entidades, familias, fundamento, relación externa, fuentes y revisión de vacío.

Clasificación:

- **Representado:** cumple todos los criterios sin hallazgo mayor.
- **Representado con deuda menor:** cumple el contrato; solo quedan menores que no afectan comprensión ni conteo.
- **No representado:** falta cualquiera de los requisitos obligatorios o existe vacío fundamental.
- **Representación aparente/artificial:** cumple números mediante entradas periféricas, duplicados, `recognition` impropio, relaciones débiles o familias forzadas; se trata como no representado.

## 23. Calidad de subdominios y disciplinas

### 23.1 Subdominios

Deben tener padre único, alcance delimitado, utilidad recurrente de agrupación, ausencia de tercer nivel implícito, diferencia clara frente a una entrada y cobertura real. Un subdominio creado solo para equilibrar cantidades es mayor; padre múltiple o jerarquía adicional es bloqueante.

### 23.2 Disciplinas

Deben tener identidad transversal, dominio hogar cuando sea razonable, aplicaciones sustantivas, una sola entrada canónica, relaciones útiles y valor educativo. No se duplican por dominio ni se presentan como dominio/subdominio. Una disciplina sin aplicación demostrable es mayor; duplicarla o usarla como jerarquía es bloqueante.

## 24. Calidad de comparaciones

Toda comparación exige:

- dos o más entradas existentes y `approved`;
- `comparisonReason` explícito y una confusión o decisión real;
- al menos dos dimensiones pertinentes para el mínimo del MVP;
- mismo criterio aplicado a todas las entradas;
- valores completos por dimensión;
- similitudes y diferencias;
- orientación contextual y errores frecuentes;
- ausencia de ganador universal;
- ausencia de definiciones copiadas;
- fuentes suficientes y equivalentes;
- entradas centrales en `contextual-understanding`.

Son bloqueantes: referencia inexistente/no aprobada, comparar alias o duplicados, valores faltantes que invalidan la equivalencia, dimensión diseñada para declarar superioridad universal o afirmación comparativa sin evidencia necesaria. Son mayores: razón débil, una dimensión inconsistente, fuentes desequilibradas o guía contextual insuficiente. Una desviación menor de redacción no cambia la decisión si no altera el sentido.

## 25. Calidad de escenarios

Todo escenario debe verificar:

- objetivo educativo;
- contexto plausible y supuestos;
- participantes y dominios;
- situación inicial;
- secuencia comprensible;
- decisiones, opciones y consecuencias;
- conceptos, artefactos, riesgos y resultado;
- referencias existentes y aprobadas;
- al menos tres dominios sustantivos en cada escenario mínimo;
- colaboración real, no mera mención;
- carácter ilustrativo, no procedimiento obligatorio;
- profundidad adecuada y ausencia de detalles peligrosos o innecesarios.

Bloquean: referencias inexistentes, instrucción peligrosa, presentación como política/runbook, menos de tres dominios sustantivos en un escenario que cuenta para el mínimo o causalidad central falsa. Son mayores: colaboración superficial, secuencia incoherente, decisiones sin consecuencias, resultado desconectado o dominios solo nominales. Son menores: detalle poco claro o redacción localizada.

## 26. Calidad de rutas de aprendizaje

Toda ruta debe incluir audiencia, objetivo, nivel inicial, resultados esperados, entradas existentes y `approved`, orden justificado, prerrequisitos, opcionales, checkpoints, criterios de finalización y coherencia de profundidad.

Reglas:

- no promete especialización completa, empleo, certificación o dominio práctico;
- no contiene saltos pedagógicos importantes;
- entradas centrales están en `contextual-understanding`;
- cada posición tiene `purposeInPath`;
- una entrada opcional no se vuelve prerrequisito;
- el orden interno no crea automáticamente `requires` ni `recommended-before` globales.

Un destino inexistente, un ciclo de prerrequisitos o una ruta que cuenta con contenido no aprobado es bloqueante. Un salto importante, checkpoint no verificable o promesa desproporcionada es mayor.

## 27. Calidad de inventarios

Los futuros `inventories/domains.yaml`, `inventories/classifications.yaml` e `inventories/initial-terms.csv` deberán cumplir:

- IDs válidos y reservados de forma inequívoca;
- clasificación provisional o definitiva explícita;
- ausencia de duplicados y colisiones de aliases;
- cobertura y balance por dominio/familia;
- prioridad, profundidad, estado y estabilidad coherentes;
- lote sugerido y dependencias;
- trazabilidad a decisiones;
- candidatos aplazados con motivo;
- ausencia de contenido editorial completo dentro del inventario.

Un inventario se aprueba como instrumento de planificación, no como contenido publicable. Los conteos deben distinguir candidatos, autorizados, producidos, aprobados e integrados.

## 28. Calidad del lote

Todos los entregables son obligatorios como archivos; pueden declarar “sin elementos” únicamente cuando el manifiesto y el resultado lo justifican.

| Entregable | Contenido mínimo y calidad | Puede estar sin elementos cuando | Error bloqueante |
|---|---|---|---|
| `batch-manifest.md` | ID, autorización, objetivo, alcance, fase, límites, dependencias, responsables, criterios y versión | Nunca vacío | Ausente, no autorizado o incoherente con entrega |
| `batch-summary.md` | Previsto/producido, hallazgos, decisiones y recomendación | Nunca vacío | Omite resultado o contradice reportes |
| `coverage-report.md` | Efecto por dominio, tipo, prioridad, profundidad, puentes y estructuras; estados separados | Lote sin efecto cuantitativo, pero debe declarar cero | Conteo duplicado o incluye no aprobados como publicables |
| `sources-report.md` | Reutilizadas, nuevas, descartadas, disponibilidad, versiones, vacíos y concentración | Solo si el lote no usa afirmaciones externas; debe justificar | Fuente inventada o afirmación central sin respaldo no declarada |
| `relationship-report.md` | Internas, aprobadas, pendientes, futuras, derivadas, rechazadas y fuentes | Lote sin relaciones; debe declarar cero | Destino inexistente contado o relación prohibida omitida |
| `duplicate-report.md` | Consultas, aliases, colisiones, decisiones y migraciones | Nunca sin revisión; puede concluir “sin duplicados” | Posible duplicado no evaluado |
| `new-term-proposals.md` | Candidatos fuera de alcance y disposición | Si no se descubrieron candidatos | Producción silenciosa fuera de alcance |
| `unresolved-questions.md` | Pregunta, impacto, responsable y bloqueo | Si no existen preguntas | Pregunta bloqueante ocultada |
| `exceptions-report.md` | Regla, autorización, alcance, riesgo, vigencia y retiro | Si no existen excepciones | Excepción aplicada sin autoridad |
| `self-review-report.md` | Autoevaluación por dimensión y correcciones | Nunca vacío | Ausente o presentado como revisión independiente |
| `validation-report.md` | Herramientas disponibles, resultados, limitaciones y categoría técnica | Si no existen validadores todavía, debe documentarlo | Oculta errores o afirma validación no ejecutada |
| `review-report.md` | Revisión independiente, severidad, disposición y decisión | Solo antes de `in-review`; obligatorio para aceptar | Ausente, no independiente o sin decisión |
| `content/new/` | Nuevas unidades dentro de alcance | Lote solo de corrección/cierre | Archivo fuera de alcance o identidad duplicada |
| `content/modified/` | Cambios con motivo y trazabilidad | Si no hay modificaciones | Cambio silencioso sin motivo |

Los reportes deben coincidir entre sí. Una cifra, estado o decisión contradictoria se resuelve antes de aceptación.

## 29. Calidad por estado del lote

| Estado | Puerta y evidencia | Hallazgos permitidos | Autoridad y alcance | Transición/retroceso |
|---|---|---|---|---|
| `proposed` | Borrador de manifiesto | Todos identificables | Coordinación; alcance libre | A `authorized` o `cancelled` |
| `authorized` | Manifiesto vigente | Preguntas no bloqueantes | Coordinación; cambios versionados | A `in-production`; vuelve a propuesta si cambia objetivo |
| `in-production` | Entregables en construcción | Hallazgos en resolución | Producción; sin cambio silencioso | A `in-review`, `changes-requested` o `cancelled` |
| `in-review` | Paquete completo | Menores, recomendaciones y preguntas explícitas | Revisor; alcance congelado | A `accepted` o `changes-requested` |
| `changes-requested` | Reporte y plan de corrección | Bloqueantes/mayores conocidos sin aceptar | Revisor/coordinación | A `in-production`; a `authorized` si cambia alcance |
| `accepted` | Decisión final y cero bloqueantes/mayores en lo aceptado | Menores aceptados y recomendaciones | Revisor/coordinación; sin cambiar alcance | A `integrated` |
| `integrated` | Diff y validación postintegración | Solo menores técnicos no materiales | Codex/responsable técnico | A `closed` o corrección |
| `closed` | Dossier, cobertura y decisiones actualizadas | Deuda menor explícita no bloqueante | Coordinación; terminal | Cambios posteriores por nuevo lote |
| `cancelled` | Motivo, impacto y tratamiento parcial | No aplica | Coordinación; terminal | Nuevo ID para trabajo posterior |

Estado de lote y `editorialStatus` nunca se infieren entre sí.

## 30. Aceptación de lote

Un lote llega a `accepted` únicamente cuando:

- respetó el alcance y el manifiesto vigente;
- entregó todos los archivos requeridos;
- tiene cero hallazgos bloqueantes;
- tiene cero hallazgos mayores abiertos en contenido aceptado;
- completó revisión independiente;
- utiliza fuentes suficientes;
- sus relaciones son conformes;
- resolvió duplicados y posibles duplicados;
- resolvió preguntas bloqueantes;
- toda excepción está autorizada;
- la cobertura es verificable y no duplica conteos;
- no contiene propiedades visuales;
- supera validaciones estructurales disponibles;
- el revisor emite recomendación explícita de aceptación.

Contenido excluido, rechazado o propuesto fuera de alcance no impide aceptar el lote si está claramente separado y no se cuenta.

## 31. Integración y cierre de lote

### 31.1 `integrated`

Exige:

- contenido aceptado incorporado a fuentes canónicas;
- referencias resueltas;
- validadores disponibles ejecutados;
- ausencia de cambios editoriales silenciosos;
- reportes y cobertura actualizados;
- resultado técnico, commit y diferencias registrados;
- derivados regenerados desde la fuente.

### 31.2 `closed`

Exige además:

- cobertura acumulada actualizada;
- decisiones y excepciones registradas;
- acciones futuras asignadas o descartadas;
- candidatos fuera de alcance registrados;
- entregables finales inequívocos;
- ausencia de deuda bloqueante;
- confirmación de que el lote terminó aceptado e integrado, o cancelado con tratamiento explícito.

Un lote aceptado no integrado no cuenta para publicación. Un lote integrado no se considera cerrado hasta actualizar cobertura y gobierno.

## 32. Calidad de fase

| Fase | Prerrequisitos y evidencia | Mínimos/validaciones | Permitido | Bloquea avance | Responsable y decisión |
|---|---|---|---|---|---|
| F0 Preparación | Docs 00–10, contratos operativos planificados, roles y criterios | Proceso ejecutable sin decisiones implícitas | Recomendaciones documentales | Autoridad ambigua o criterios faltantes | Coordinación: habilitar F1 |
| F1 Taxonomía materializada | F0 y taxonomía aprobada | 12 dominios; al menos 36 subdominios y 8 disciplinas listos para revisión; IDs/padres válidos | Deuda menor de redacción | Padre múltiple, duplicado o cobertura taxonómica artificial | Taxonomía/coordinación |
| F2 Fundamentos y puentes | F1 suficiente | Núcleo aprobado, sin ciclos, puentes iniciales sustantivos | Candidatos futuros | Fundamento central no aprobado o ciclo `requires` | Contenido/técnica |
| F3 Cobertura esencial | Fundamentos aplicables aprobados | Cada dominio preliminarmente: 2 subdominios, 6 esenciales/importantes, fundamento y conexión | Menores localizados | Dominio no representable o concentración material | Coordinación y revisores |
| F4 Cobertura contextual | F3 y balance | 120 entidades y 180 relaciones o autorización expresa hacia objetivo; porcentajes válidos | Extensión hacia 164/328 | Deuda de profundidad, fuentes o balance | Producto/contenido |
| F5 Estructuras editoriales | Entidades centrales `approved` | 8 comparaciones, 3 escenarios, 3 rutas conformes | Objetivo 12/4/4 | Referencias no aprobadas o estructuras artificiales | Editorial/técnica |
| F6 Cierre de cobertura | F1–F5 | Ningún dominio bajo mínimo; duplicados, balance y fuentes revisados | Deuda menor explícita | Vacío fundamental o bloqueante acumulado | Coordinación/calidad |
| F7 Preparación de publicación | Contenido aceptado e integrado | Todo lo contable `approved`, referencias resueltas, cobertura y dossier | Recomendaciones | `needs-update` contado, build no reproducible o deuda material | Responsable de publicación |

No se avanza por fecha, número de archivos ni porcentaje de trabajo iniciado.

## 33. Cobertura acumulada del MVP

### 33.1 Perfiles aprobados

| Categoría | Mínimo publicable | Objetivo recomendado | Máximo inicial |
|---|---:|---:|---:|
| Dominios | 12 | 12 | 12 |
| Subdominios | 36 | 48 | 60 |
| Disciplinas | 8 | 12 | 16 |
| Entidades | 120 | 164 | 210 |
| Relaciones | 180 | 328 | 525 |
| Comparaciones | 8 | 12 | 16 |
| Escenarios | 3 | 4 | 6 |
| Rutas | 3 | 4 | 6 |
| Fuentes | 50 | 80 | 120 |

### 33.2 Reglas de cálculo

- Cuenta una entrada canónica con ID propio y `approved`.
- Alias, traducciones, `contextualTypes`, secciones, responsabilidades estructuradas e IDs históricos no cuentan.
- Entidades excluyen dominios, subdominios, disciplinas, fuentes y estructuras editoriales.
- Una relación cuenta una vez desde su campo de autoridad o arista persistida.
- Inversas, pertenencia taxonómica derivada, cierres transitivos y duplicados simétricos no cuentan.
- `deprecated`, `rejected`, `planned`, `draft`, `in-review` y `needs-update` no cuentan para mínimos públicos.
- Una fuente cuenta si está normalizada, utilizada por contenido aprobado y cumple identidad/disponibilidad aplicable.
- Una comparación, escenario o ruta cuenta solo si está `approved` y sus entradas centrales también.

La evidencia de calidad incluye representación de dominios, fuentes suficientes, profundidad, relaciones específicas, ausencia de duplicados, revisión independiente, flujos completos y balance; no solo conteos.

## 34. Balance por dominio

Reglas obligatorias:

- cada dominio tiene al menos seis entidades `essential` o `important`;
- al menos dos subdominios;
- al menos un fundamento o prerrequisito;
- al menos una relación específica externa;
- tres familias cuando aplique;
- DOM-03 y DOM-04 juntos no superan 30 % de entidades;
- tecnologías, herramientas, plataformas, servicios y productos no superan 18 % del total objetivo aplicable;
- existe presencia equilibrada de producto, experiencia, gobierno, liderazgo, datos, seguridad y operación;
- no hay islas temáticas ni cobertura nominal con elementos periféricos.

Señales:

- **Concentración:** un dominio o pareja absorbe entidades, palabras, relaciones o estructuras sin razón de amplitud.
- **Subrepresentación:** cumple menos del mínimo o carece de fundamento/familias/conexión.
- **Relleno:** entradas de bajo valor creadas para una cifra.
- **Cobertura artificial:** elementos `recognition`, duplicados o relaciones generales simulan representación.
- **Dependencia excesiva de herramientas:** marcas sin conceptos generales o fuentes de proveedor dominantes.
- **Falta de puentes:** dominios conectados solo por `related-to` o escenarios nominales.

Superar 30 % o 18 % bloquea salida de fase/publicación salvo decisión registrada. No se corrige reclasificando entradas sin fundamento.

## 35. Balance por prioridad

Reglas:

- mínimo 60 % `essential`;
- mínimo 90 % combinado `essential` + `important`;
- máximo 10 % combinado `specialized` + `emerging`;
- máximo 4 % `emerging`;
- mínimos se redondean hacia arriba y máximos hacia abajo.

| Perfil | `essential` mín. | `essential` + `important` mín. | `specialized` + `emerging` máx. | `emerging` máx. |
|---|---:|---:|---:|---:|
| 120 | 72 | 108 | 12 | 4 |
| 164 | 99 | 148 | 16 | 6 |
| 210 | 126 | 189 | 21 | 8 |

Se calcula al autorizar lotes, cerrar lotes, salir de fase y publicar. Para publicación solo cuentan entidades `approved`. No existe tolerancia porcentual automática: un entero fuera del límite exige corrección, reducción o decisión. Se prohíbe reclasificar para hacer pasar el cálculo; toda reclasificación requiere evidencia del valor educativo real.

## 36. Balance por profundidad

Reglas:

- mínimo 80 % en `contextual-understanding`;
- máximo 20 % en `recognition`;
- cero producción ordinaria en `future-expanded-reference`;
- entradas centrales de comparaciones, escenarios y rutas son contextuales;
- fundamentos y conceptos puente son ordinariamente contextuales.

| Perfil | Contextuales mín. | Recognition máx. |
|---|---:|---:|
| 120 | 96 | 24 |
| 164 | 132 | 32 |
| 210 | 168 | 42 |

Si una fase cae por debajo de la trayectoria necesaria, se congelan lotes de expansión y se autoriza corrección de profundidad. No se permite publicar esperando ampliar después una entrada central. Una ficha no demuestra profundidad por longitud: debe responder las preguntas del nivel.

## 37. Calidad de conceptos puente

Un concepto puente cuenta cuando:

- tiene significado canónico propio;
- conecta al menos dos dominios de forma sustantiva;
- no depende únicamente de `related-to`;
- aporta `requires`, `applies-to`, `uses`, `implements`, `governed-by`, `supports` u otra relación específica, o un campo transversal de autoridad;
- está en `contextual-understanding`;
- no se duplica por dominio;
- tiene al menos dos aplicaciones o relaciones entre dominios revisadas.

Para el mínimo de 12 o el objetivo de 18, cada concepto debe figurar en un registro de puentes con dominios, relaciones, evidencia y revisión. Una mención en varios dominios no basta.

## 38. Calidad y accesibilidad

### 38.1 Contenido

Debe ofrecer:

- significado independiente del color;
- títulos descriptivos y jerarquía semántica;
- texto alternativo educativo;
- descripción de tablas y diagramas cuando sea necesaria;
- lenguaje comprensible;
- acrónimos desarrollados;
- ausencia de referencias espaciales;
- uso sin visualización;
- orden pedagógico preservado;
- ejemplos culturalmente comprensibles.

La ausencia de alternativa para un recurso central es mayor; depender solo de color, posición o imagen para significado es bloqueante.

### 38.2 Implementación futura

Debe demostrar navegación por teclado, foco visible y predecible, nombres accesibles, contraste suficiente, orden de lectura, reducción de movimiento, responsive design, avisos de estado accesibles y compatibilidad con tecnologías de asistencia.

El contenido aporta significado y alternativas; la implementación aporta interacción y presentación accesibles. Ninguna capa puede trasladar su responsabilidad a la otra.

## 39. Separación entre contenido y diseño

Son bloqueantes:

- propiedades visuales en fichas;
- HTML de presentación o CSS;
- componentes, layouts o rutas visuales;
- URLs, slugs o títulos usados como identidad;
- posición de pantalla o referencias espaciales;
- iconos obligatorios;
- definiciones dependientes de color o ubicación;
- contenido duplicado por dispositivo, vista o tema;
- relaciones inventadas para navegación;
- taxonomía derivada de menús;
- contenido generado tratado como fuente.

Pruebas de sustitución obligatorias: cambiar tema, reemplazar tarjetas por lista, generar salida imprimible, glosario, aplicación móvil, cambiar URLs, reorganizar portada, añadir idioma, generar grafo y retirar visualización. La evidencia debe identificar fuentes antes/después, diff semántico esperado igual a cero y cualquier ajuste limitado a presentación, configuración o derivados.

Una prueba falla si obliga a modificar definición, clasificación, ID, relación, estado o fuente canónica.

## 40. Calidad de búsqueda y descubrimiento

Sin seleccionar tecnología, la aceptación funcional exige:

1. buscar por `title`;
2. buscar por término profesional en inglés;
3. resolver alias, sigla y nombre histórico aprobado;
4. devolver una sola entrada canónica;
5. indicar coincidencia por alias cuando aporte claridad;
6. no mostrar duplicados de la misma identidad;
7. manejar cero resultados sin inventar contenido;
8. permitir abrir la ficha por ID resuelto;
9. ofrecer glosario de todo contenido publicable;
10. filtrar por dominio y tipo sin reclasificar;
11. navegar relaciones directas, inversas y derivadas autorizadas.

Pruebas de aceptación: casos por cada modalidad nominal, colisiones de alias, polisemia, contenido no publicable, cero resultados, filtro combinado, destino de relación, deprecación y `needs-update`. Los umbrales técnicos de latencia o ranking quedan reservados a arquitectura; ningún resultado puede ser semánticamente incorrecto para mejorar rendimiento.

## 41. Calidad de referencias y enlaces externos

- Toda referencia interna usa ID y debe resolverse; una interna rota es bloqueante.
- Una URL de fuente debe estar disponible, archivada o marcada con `availabilityStatus`; no puede quedar rota y no registrada.
- Una redirección se revisa para confirmar identidad, versión y ausencia de cambio de contenido.
- Un recurso archivado es aceptable si conserva evidencia suficiente y se registra.
- Una referencia no web debe identificar obra, versión, sección o página cuando aplique.
- Un enlace de proveedor es aceptable para su producto, no para afirmaciones generales sin apoyo.
- Un enlace no esencial caído genera `needs-update` U3 si la afirmación sigue respaldada.
- Una fuente central inaccesible sin alternativa genera hallazgo mayor o U2; si impide verificar una afirmación material, bloquea aprobación/publicación.

“Cero enlaces rotos” significa que ninguna referencia queda en estado roto no tratado: debe corregirse, sustituirse, archivarse o registrarse formalmente como no disponible con la decisión correspondiente.

## 42. Artefactos generados e integración

Índices, JSON, búsquedas, inversas, mapas, páginas, feeds y reportes técnicos deben ser:

- reproducibles;
- derivados de fuentes canónicas;
- no editados como autoridad;
- coherentes con IDs, estados y relaciones;
- regenerables;
- libres de contenido no autorizado;
- trazables a una versión de fuentes y build.

Pruebas:

- regeneración limpia produce resultado semánticamente equivalente;
- cada registro derivado apunta a un ID canónico;
- ningún campo aparece solo en el derivado;
- conteos e inversas coinciden con autoridades;
- eliminar derivados no destruye información fuente;
- un diff inesperado se corrige en la fuente o transformador, nunca manualmente en la salida.

## 43. Build candidato a publicación

Un build candidato exige:

- ejecución reproducible desde repositorio limpio;
- validadores completados y resultados conservados;
- cero bloqueantes;
- cero referencias internas rotas y enlaces externos tratados;
- cobertura mínima cumplida;
- contenido ordinario en `approved`;
- tratamiento válido de `needs-update` y `deprecated`;
- flujos funcionales de búsqueda, glosario, dominio, ficha, relaciones, comparación, escenario y ruta;
- separación contenido-diseño;
- accesibilidad mínima;
- fuentes trazables;
- documentación de versión;
- reporte de calidad;
- rollback o reconstrucción posible desde el repositorio;
- ausencia de secretos, contenido provisional o backend no autorizado.

## 44. Criterios de publicación

### 44.1 Terminado para desarrollo

Evidencia:

- contratos `docs/00`–`docs/10` aprobados según alcance;
- inventarios y ejemplos previstos identificados;
- responsabilidades y decisiones reservadas claras;
- reglas suficientes para schemas, validadores y arquitectura sin reinterpretación.

No significa contenido terminado.

### 44.2 Terminado para revisión

Evidencia:

- mínimo cuantitativo en `in-review` o `approved`;
- doce dominios preliminarmente representados;
- estructuras mínimas integradas;
- flujos sobre contenido real;
- build reproducible;
- revisiones ejecutadas y hallazgos asignados.

No autoriza publicación con contenido `in-review`.

### 44.3 Terminado para publicación

Evidencia:

- todo lo que cuenta está `approved`;
- mínimos, balance, profundidad y representación completos;
- seis flujos del MVP y búsqueda por aliases verificados;
- cero bloqueantes y mayores;
- accesibilidad y sustitución demostradas;
- build reproducible y rollback documentado;
- fuentes y vigencia trazables;
- decisiones y excepciones registradas;
- autorización editorial, técnica, de producto y publicación.

## 45. Matriz de aceptación

| Unidad | Dimensión | Criterio | Regla/métrica | Mínimo | Evidencia | Responsable | Severidad si falla | Puerta | Autoridad |
|---|---|---|---|---|---|---|---|---|---|
| Entrada | Estructura | ID único | Un ID global, válido y no reutilizado | 100 % | Validador | Codex | B | Aprobación | Modelo |
| Entrada | Editorial | Comprensión contextual | Preguntas del nivel respondidas | Según `knowledgeLevel` | Revisión | Editorial | M | Aprobación | Lineamientos |
| Entrada | Técnica | Definición correcta | Sin error material | 100 % | Fuentes/revisión | Técnico | B | Aprobación | Calidad |
| Entrada | Fuentes | Evidencia suficiente | Mapa de afirmaciones cubierto | Todas las centrales | Reporte | Fuentes | M/B | Aprobación | Calidad/SOURCE-POLICY |
| Relación | Integridad | Destino y clave válidos | 100 % resoluble/compatible | 100 % | Validador | Codex/relaciones | B | Aprobación/integración | Relaciones |
| Relación | Relevancia | Pregunta educativa concreta | Sin relleno | 100 % | Revisión | Relaciones | M | Aprobación | Relaciones/calidad |
| Dominio | Cobertura | Representación | 2 subdominios, 6 E/I, fundamento, relación externa | Todos | Coverage report | Contenido | B para publicación | Fase/MVP | MVP |
| Comparación | Estructura | Dimensiones equivalentes | ≥2 para mínimo, valores completos | 100 % | Revisión | Editorial/técnico | B/M | Aprobación | Modelo/lineamientos |
| Escenario | Transversalidad | Dominios sustantivos | ≥3 por escenario mínimo | 3 | Matriz de participación | Revisor multidisciplinario | B | MVP | MVP |
| Ruta | Progresión | Orden justificado | Sin salto mayor ni ciclo | 100 % | Revisión | Pedagógico | M/B | Aprobación | Modelo/calidad |
| Lote | Operación | Entregables completos | 12 reportes/archivos + content dirs | 100 % | Paquete | Coordinación | B | Revisión/aceptación | Producción |
| Lote | Hallazgos | Deuda abierta | 0 B, 0 M en aceptado | 0 | Review report | Revisor | B | Aceptación | Calidad |
| Fase | Calidad acumulada | Criterio de salida | Cumplimiento específico F0–F7 | 100 % | Dossier | Coordinación | B | Salida de fase | Producción/calidad |
| MVP | Cantidad | Entidades | 120/164/210 | 120 | Tablero | Contenido | B publicación | Contenido mínimo | MVP |
| MVP | Relaciones | Aristas contables | 180/328/525 | 180 | Reporte relacional | Relaciones | B publicación | Contenido mínimo | MVP |
| MVP | Prioridad | `essential` | ≥60 % | 72 de 120 | Tablero | Coordinación | B publicación | MVP | MVP/calidad |
| MVP | Profundidad | Contextual | ≥80 % | 96 de 120 | Tablero | Editorial | B publicación | MVP | MVP/calidad |
| MVP | Balance | DOM-03+04 | ≤30 % | ≤36 de 120 | Tablero | Coordinación | M/B | Fase/publicación | MVP |
| MVP | Balance | Implementaciones | ≤18 % del perfil aplicable | Según total | Tablero | Coordinación | M/B | Fase/publicación | MVP |
| Fuente | Trazabilidad | Secciones y consulta | Campos aplicables completos | 100 % web/versionadas | Registro | Fuentes | M | Aprobación | Modelo/calidad |
| Contenido | Diseño | Independencia | 0 propiedades visuales | 0 | Validador/pruebas | Arquitectura | B | Todas | Fronteras |
| Build | Integridad | Reproducible | Build limpio y derivados coherentes | 1 ejecución limpia | Reporte | Codex/QA | B | Build | Calidad |
| Producto | Accesibilidad | Flujos operables | Teclado, foco, orden y alternativas | Todos los flujos | Pruebas | Accesibilidad/QA | B publicación | Publicación | MVP/calidad |
| Versión | Publicación | Autorización | Dossier y aprobaciones completas | 100 % | Dossier | Publicación | B | Publicación | Calidad |

## 46. Muestreo frente a revisión completa

Se revisa al 100 %:

- IDs, referencias, campos obligatorios, enums, estados y fechas críticas;
- relaciones estructurales, cardinalidad y ciclos;
- propiedades visuales prohibidas;
- cobertura y porcentajes;
- todo contenido publicable;
- entradas centrales, fundamentos y conceptos puente;
- todas las comparaciones, escenarios y rutas;
- todos los entregables de lote;
- contenido `needs-update`, deprecaciones y sustituciones.

Puede utilizarse muestreo únicamente para:

- estilo menor después de aprobación individual;
- consistencia secundaria en lotes homogéneos;
- enlaces externos de baja criticidad ya registrados;
- artefactos derivados repetitivos cuando la generación determinista está probada.

El plan de muestreo debe declarar población, criterio, tamaño, riesgo y acción ante fallo. Un fallo sistémico amplía la revisión al 100 %. El muestreo nunca sustituye validaciones estructurales ni aprobación editorial de contenido publicable.

## 47. Evidencia de calidad

| Evidencia | Información mínima |
|---|---|
| `self-review-report.md` | Unidad, dimensión, checks, hallazgos, correcciones y limitaciones |
| `validation-report.md` | Validador/versión, alcance, resultados brutos, regla, ubicación y limitaciones |
| `review-report.md` | Revisor/perspectiva, hallazgos, severidad final, disposición, decisión y fecha |
| `coverage-report.md` | Estados separados, conteos, porcentajes, dominios, balance, deuda y variación |
| `sources-report.md` | Fuentes, afirmaciones, autoridad, disponibilidad, versión, conflicto y vacíos |
| `relationship-report.md` | Aristas, autoridad, estado, evidencia, rechazadas, pendientes y conteo |
| `duplicate-report.md` | Consultas, candidatos, aliases, decisiones, migraciones y referencias afectadas |
| `exceptions-report.md` | Regla, decisión, alcance, riesgo, vigencia, mitigación y retiro |
| Reporte de build | Commit, entorno, pasos, resultado, derivados, errores y reproducibilidad |
| Pruebas de accesibilidad | Flujo, método, resultado, hallazgo, severidad y evidencia |
| Pruebas de sustitución | Cambio de representación, fuentes invariantes, diff y resultado |
| Registro de decisiones | ID, contexto, decisión, alternativas, impacto, responsable y fecha |

La evidencia debe residir en el repositorio o en una referencia estable autorizada. Una conversación no es evidencia final suficiente.

## 48. Excepciones

Puede solicitarse una excepción cuando una regla aplicable produce un costo o restricción desproporcionada y existe evidencia de que el propósito se conserva. La solicitud debe incluir:

- regla afectada;
- alcance exacto;
- responsable;
- justificación y evidencia;
- riesgo;
- alternativa descartada;
- mitigación;
- duración o condición de expiración;
- fecha de revisión;
- plan de retiro;
- impacto en publicación;
- referencia de decisión.

No se exceptúan ordinariamente: unicidad/no reutilización de IDs, referencias internas por ID, fuente no inventada, ausencia de información materialmente falsa o riesgosa, prohibición de relación creada por navegación, autoridad canónica, revisión independiente y trazabilidad de aprobación.

Requieren `docs/10-decision-log.md`:

- superar máximos del MVP;
- publicar con hallazgo mayor;
- mantener `needs-update` fuera de tolerancia;
- aceptar contenido dependiente de diseño;
- relajar unicidad de IDs;
- omitir cobertura de un dominio;
- cambiar porcentajes;
- integrar contenido no aceptado;
- alterar autoridad entre capas;
- permitir una relación prohibida;
- cambiar estados, catálogo, cantidades o contrato.

Una excepción nunca convierte el contenido afectado en contable para el mínimo si no cumple la calidad base.

## 49. Métricas e indicadores de calidad

Las métricas obligatorias de puerta se distinguen de indicadores diagnósticos.

### 49.1 Contenido

| Métrica | Tipo | Decisión habilitada |
|---|---|---|
| Entradas `approved` | Puerta | Cumplimiento de mínimos |
| Bloqueantes/mayores por entrada | Puerta | Aprobar o devolver |
| Menores y recomendaciones | Indicador | Detectar deuda/patrones |
| Deuda de profundidad | Puerta acumulada | Congelar expansión/corregir |
| Posibles/confirmados duplicados | Puerta | Bloquear aprobación/consolidar |
| Fuentes insuficientes | Puerta | Aprobar, reducir o investigar |
| Contenido `needs-update` por U1/U2/U3 | Puerta/indicador | Retirar, priorizar o mantener |
| Relaciones rechazadas y `related-to` | Indicador con umbral | Revisar especificidad |

### 49.2 Lotes

- tasa de aceptación;
- devoluciones e iteraciones;
- variación de alcance;
- hallazgos por dimensión;
- correcciones y recurrencia;
- esfuerzo cualitativo de revisión;
- proporción `accepted` → `integrated` → `closed`.

Cero bloqueantes/mayores es puerta; tasas y tiempos son indicadores de mejora del proceso.

### 49.3 Cobertura

- dominios representados;
- subdominios y disciplinas;
- familias/tipos;
- prioridad y profundidad;
- conceptos puente;
- relaciones entre dominios;
- concentración DOM-03/04 e implementaciones.

Mínimos y máximos son puertas. Distribuciones internas adicionales son indicadores para corregir balance.

### 49.4 Producto

- búsquedas resueltas mediante alias;
- flujos completables;
- referencias rotas no tratadas;
- hallazgos de accesibilidad;
- pruebas de reutilización;
- build reproducible.

Flujos, referencias internas, accesibilidad mínima y build son puertas; tasas de alias y esfuerzo de uso son indicadores hasta que UX/UI defina métricas finales.

## 50. Riesgos de calidad

| Riesgo | Señal | Impacto | Prevención | Respuesta | Escalamiento |
|---|---|---|---|---|---|
| Medir solo cantidad | Conteos crecen sin preguntas respondidas | Cobertura falsa | Matriz cualitativa | Reducir alcance | Elemento sin valor autónomo |
| Sintaxis como calidad | Validador verde, contenido incorrecto | Error aprobado | Revisión humana | Devolver | Hallazgo material en `approved` |
| Revisión no independiente | Autor y revisor coinciden sin perspectiva separada | Sesgo | Roles registrados | Reasignar revisión | Aprobación sin evidencia |
| Normalización excesiva | Se eliminan diferencias contextuales | Pérdida semántica | Revisar acepciones | Separar sentidos | Fusión incompatible |
| Fuentes numerosas débiles | Muchas referencias sin cobertura | Falsa confianza | Mapa de afirmaciones | Sustituir/complementar | Afirmación central sin autoridad |
| Concentración comercial | Proveedor domina fuentes y ejemplos | Sesgo/obsolescencia | Límites y diversidad | Reequilibrar | Afirmación general depende de marketing |
| Profundidad insuficiente | Fundamentos en `recognition` | Comprensión superficial | Trayectoria 80 % | Lote de corrección | Porcentaje o entrada central incumple |
| Relaciones artificiales | `related-to` y hubs crecen | Navegación engañosa | Umbrales y revisión | Eliminar/reclasificar | Umbral de fase excedido |
| Deuda acumulada | Menores recurrentes y lotes abiertos | Mantenimiento débil | Cierre explícito | Congelar expansión | Deuda afecta puerta siguiente |
| Excepciones permanentes | No tienen expiración | Contrato erosionado | Fecha y retiro | Revocar/escalar | Excepción vence |
| Aprobado obsoleto | Versiones/fuentes cambiaron | Pérdida de confianza | Vigencia | `needs-update`/retiro | Error material conocido |
| Lote cerrado sin integración | Conteo no coincide con fuente | Cobertura falsa | Estados separados | Reabrir por corrección | Contenido contado sin integración |
| Accesibilidad aplazada | Flujos solo visuales | Exclusión | Puerta obligatoria | Corregir antes de publicar | Significado inaccesible |
| Diseño oculta defectos | UI compensa texto o referencias | Acoplamiento | Sustitución | Corregir fuente | Cambio visual altera significado |
| Casos fáciles | Pruebas solo con términos obvios | Falsa validación | Casos de borde | Ampliar pruebas | Alias/polisemia fallan |
| Reclasificación manipulada | Prioridad/profundidad cambia por porcentaje | Métrica inválida | Evidencia de cambios | Restaurar y revisar | Cambio sin fundamento |

## 51. Responsabilidades

- **Responsable del proyecto:** autoridad de alcance, excepciones, fases y publicación.
- **Chat coordinador:** autoriza lotes, controla dependencias, cobertura y decisiones.
- **ChatGPT Trabajo:** investiga, redacta, registra fuentes/relaciones, se autoevalúa y entrega evidencia; no se autoaprueba.
- **Revisor editorial:** claridad, voz, profundidad, extensión, neutralidad y accesibilidad cognitiva.
- **Revisor taxonómico:** tipos, dominios, subdominios, disciplinas, aliases y duplicados.
- **Revisor técnico:** precisión, límites, versiones, causalidad y contexto profesional.
- **Revisor de fuentes:** identidad, autoridad, suficiencia, diversidad, vigencia y conflicto.
- **Revisor de relaciones:** clave, dirección, relevancia, evidencia, ciclos, densidad y autoridad.
- **Revisor de accesibilidad:** independencia perceptiva del contenido y, después, accesibilidad funcional.
- **Codex:** valida estructura, integra contenido aceptado y genera derivados reproducibles sin reinterpretar.
- **Repositorio:** conserva autoridad, historial, evidencia, IDs reservados y decisiones.
- **Futuro responsable de publicación:** verifica dossier, riesgo residual, rollback y autorización final.

Una persona puede ocupar varias funciones, pero cada perspectiva debe quedar identificada y la revisión independiente debe ser real.

## 52. Integración posterior con Codex

Codex podrá automatizar sin reinterpretación:

- patrón, unicidad y reserva de IDs;
- schemas, tipos lógicos, campos y dependencias condicionales;
- enums, fechas y coherencia temporal;
- referencias y estados;
- cardinalidades, ciclos, direcciones e inversas;
- claves de relación y autoridad de campos;
- duplicados técnicos y colisiones nominales como candidatos;
- porcentajes, conteos y cobertura;
- propiedades prohibidas;
- estructura y entregables de lotes;
- diferencias entre fuentes y derivados;
- enlaces y disponibilidad técnica;
- build y reproducibilidad.

Codex no podrá decidir:

- precisión semántica;
- suficiencia conceptual;
- clasificación ambigua;
- calidad pedagógica;
- relevancia final de una relación;
- autoridad final o suficiencia de una fuente;
- aceptación de excepciones;
- resolución de contradicciones;
- aprobación editorial;
- cambio de estado por juicio semántico sin autoridad.

Los validadores deben producir hallazgos trazables, no correcciones silenciosas.

## 53. Lista maestra de revisión

### 53.1 Entrada

- [ ] Identidad, namespace, formato, campos, enums y fechas válidos.
- [ ] Tipo, dominio, subdominio, prioridad, profundidad y estabilidad correctos.
- [ ] `summary`, definición, propósito y demás campos cumplen función propia.
- [ ] Precisión, contexto, límites, fuentes, vigencia e incertidumbre revisados.
- [ ] Relaciones específicas, destinos aprobados y duplicados resueltos.
- [ ] Sin tutorial, promoción, relleno ni propiedades visuales.
- [ ] Revisión independiente y cero bloqueantes/mayores.

### 53.2 Relación

- [ ] Destino, clave, dirección, compatibilidad, cardinalidad y ciclos válidos.
- [ ] Autoridad persistida/derivada correcta.
- [ ] Nota y fuente presentes cuando aplican.
- [ ] Valor educativo real y clave más específica.
- [ ] No duplica inversa, campo o relación simétrica.

### 53.3 Fuente

- [ ] Identidad, autor/organización, título, tipo y referencia.
- [ ] Versión, fecha, consulta, secciones e idioma cuando aplican.
- [ ] Autoridad, relevancia, disponibilidad y conflicto evaluados.
- [ ] Cubre una afirmación concreta; no solo aparece en lista.

### 53.4 Comparación

- [ ] Entradas aprobadas, razón real y dimensiones equivalentes.
- [ ] Valores completos, similitudes, diferencias y orientación contextual.
- [ ] Fuentes equilibradas, sin ganador universal ni definiciones copiadas.

### 53.5 Escenario

- [ ] Objetivo, contexto, participantes, ≥3 dominios sustantivos, secuencia y decisiones.
- [ ] Conceptos/artefactos/riesgos/resultados referenciados.
- [ ] Plausible, ilustrativo, seguro y no prescriptivo.

### 53.6 Ruta

- [ ] Audiencia, objetivo, nivel, resultados, prerrequisitos y finalización.
- [ ] Entradas aprobadas, orden justificado, opcionales y checkpoints.
- [ ] Sin saltos, ciclos ni promesa de especialización.

### 53.7 Lote

- [ ] Manifiesto autorizado y alcance respetado.
- [ ] Todos los entregables coherentes.
- [ ] Cero bloqueantes/mayores en contenido aceptado.
- [ ] Fuentes, relaciones, duplicados, excepciones y cobertura revisados.
- [ ] Recomendación de aceptación explícita.

### 53.8 Fase

- [ ] Prerrequisitos y criterio de salida específicos cumplidos.
- [ ] Cobertura, balance, profundidad, deuda y dependencias actualizados.
- [ ] Ningún bloqueo se propaga a la siguiente fase.

### 53.9 MVP

- [ ] 12 dominios representados y mínimos completos.
- [ ] Porcentajes de prioridad/profundidad y límites de concentración válidos.
- [ ] Comparaciones, escenarios, rutas, fuentes y puentes conformes.
- [ ] Todo lo contable `approved`, integrado y vigente.

### 53.10 Build candidato

- [ ] Reproducible desde repositorio limpio.
- [ ] Validadores, referencias, derivados y flujos conformes.
- [ ] Accesibilidad y sustitución demostradas.
- [ ] Dossier, versión, rollback y autorización disponibles.

## 54. Relación con documentos posteriores

| Documento/artefacto | Condicionamiento |
|---|---|
| `docs/10-decision-log.md` | Registrará excepciones, cambios materiales, migraciones y decisiones que este contrato no permite resolver ordinariamente |
| `work/WORK-INSTRUCTIONS.md` | Convertirá puertas y responsabilidades en pasos diarios |
| `work/RESEARCH-PROTOCOL.md` | Operacionalizará investigación, conflicto e incertidumbre |
| `work/CONTENT-PRODUCTION-CONTRACT.md` | Hará exigibles campos, estados, entrega y reenvío |
| `work/BATCH-TEMPLATE.md` | Materializará manifiesto y reportes mínimos |
| `work/SOURCE-POLICY.md` | Precisará jerarquía, selección, suficiencia, diversidad y citas |
| `work/REVIEW-CHECKLIST.md` | Convertirá la lista maestra y matrices en verificaciones firmables |
| `work/HANDOFF-TO-CODEX.md` | Definirá paquete técnico, resultados y devolución de defectos |
| `examples/` | Demostrará conformidad y fallos sin ampliar contratos |
| `inventories/` | Aplicará cobertura, balance, prioridad y dependencias a candidatos concretos |
| `AGENTS.md` | Obligará a agentes a respetar autoridad, puertas y prohibiciones |
| Schemas/validadores | Implementarán reglas literales automatizables y conservarán hallazgos |
| CI | Ejecutará validaciones y bloqueará builds según severidad |
| Arquitectura futura | Separará fuentes, transformación, derivados, configuración y presentación |
| UX/UI | Diseñará flujos y accesibilidad sin crear semántica |
| Publicación | Usará la puerta final, dossier y rollback definidos aquí |

## 55. Decisiones y pendientes

### 55.1 Modelo de calidad adoptado

Se adopta el Modelo de Calidad por Dimensiones y Puertas, sin puntuación compensatoria y con revisión independiente.

### 55.2 Severidades adoptadas

Se adoptan `bloqueante`, `mayor`, `menor`, `recomendación`, `pregunta` y `propuesta de cambio`, con efectos definidos sobre aprobación, integración y cierre.

### 55.3 Puertas adoptadas

Se adoptan diez puertas: entrada a producción, entrega a revisión, aprobación de entrada, aceptación, integración y cierre de lote, salida de fase, terminación del contenido mínimo, build candidato y publicación.

### 55.4 Regla general y tolerancias

Se adopta cero bloqueantes y mayores abiertos en contenido aceptado, menores corregidos o aceptados dentro de tolerancia, preguntas resueltas/no bloqueantes, propuestas separadas y evidencia conservada. Se preservan todos los rangos editoriales y se define su tratamiento como advertencia, justificación o hallazgo.

### 55.5 Política de `needs-update`

Se adoptan categorías U1 crítica, U2 prioritaria y U3 ordinaria; ninguna cuenta para mínimos. La información materialmente falsa o riesgosa se retira.

### 55.6 Lotes, fases, cobertura y publicación

Se adoptan los criterios de aceptación, integración y cierre; las salidas F0–F7; los perfiles 12/36/8/120/180/8/3/3/50, 12/48/12/164/328/12/4/4/80 y máximos 12/60/16/210/525/16/6/6/120; los balances aprobados; y las tres condiciones de terminado para desarrollo, revisión y publicación.

### 55.7 Decisiones heredadas

Se conservan taxonomía, modelo, lineamientos, catálogo relacional, fronteras de diseño, MVP, fases, estados, lotes, cantidades, porcentajes, exclusiones, inglés técnico profesional y autoridad del repositorio.

### 55.8 Reservado para `work/SOURCE-POLICY.md`

- jerarquía operacional de fuentes;
- formato completo de citas;
- estrategia de búsqueda y archivo;
- criterios detallados por clase y controversia;
- procedimiento de sustitución de enlaces.

### 55.9 Reservado para `work/REVIEW-CHECKLIST.md`

- formato de firma y responsables nominales;
- checks ejecutables por tipo;
- muestreo operacional;
- plantilla de disposición y reenvío.

### 55.10 Reservado para Codex

- schemas y validadores;
- formato de salida de hallazgos;
- normalización física de relaciones simétricas;
- CI, build, enlaces y derivados;
- implementación del tablero de cobertura.

### 55.11 Reservado para arquitectura

- tecnología, módulos, motor de búsqueda, rendimiento, despliegue, seguridad técnica, cache, redirects y rollback concreto.

### 55.12 Reservado para UX/UI

- pantallas, componentes, sistema visual, interacción, pruebas de usabilidad y métricas técnicas finales de accesibilidad.

### 55.13 Excepciones y decisiones materiales

Toda excepción listada en la sección 48 requiere decisión proporcional; las que cambian contratos, máximos, estados, autoridad, cobertura, porcentajes o publicación requieren `docs/10-decision-log.md`.

### 55.14 Contradicciones encontradas

No se encontraron contradicciones materiales entre los diez documentos de autoridad.

Se conservan como tensiones o decisiones posteriores, no como contradicciones:

- coexistencia temporal de `related` y `relations[]`, pendiente de migración registrada;
- representación física de relaciones simétricas, reservada a schema/integración;
- `certification.issuer` sin tipo `organization` ni relación `certified-by`;
- IDs documentales `DOM-01` a `DOM-12` distintos de IDs canónicos;
- modo claro/oscuro como `Should have`, aplazable solo con tema base accesible y decisión;
- responsables nominales, calendarios detallados por estabilidad y métricas técnicas finales, reservados a documentos y fases posteriores.

## 56. Cierre

Este contrato permite evaluar contenido, relaciones, fuentes, lotes, fases, cobertura, builds y publicación mediante reglas verificables sin confundir cantidad, sintaxis o apariencia con calidad. Su aplicación protege el valor educativo, la autoridad del repositorio, la revisión independiente, la trazabilidad, la accesibilidad y la reutilización de IT Study.

Ninguna automatización, excepción, calendario o decisión visual puede sustituir la precisión conceptual, la evidencia suficiente y la aprobación humana exigidas por las puertas de calidad.
