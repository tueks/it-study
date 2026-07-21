# Registro normativo de decisiones de IT Study

## 1. Identificación y propósito

| Campo | Valor |
|---|---|
| Proyecto | IT Study |
| Nombre oficial | Registro normativo de decisiones de IT Study |
| Ruta | `docs/10-decision-log.md` |
| Estado | `approved` — registro base vigente |
| Versión del registro | `1.2.0` |
| Fecha | `2026-07-21` |
| Autoridad de aprobación | Responsable del proyecto |
| Documentos de autoridad | `00-bootstrap-brief.md`; `docs/00-project-charter.md`; `docs/01-scope-and-audience.md`; `docs/02-taxonomy.md`; `docs/03-content-model.md`; `docs/04-editorial-guidelines.md`; `docs/05-relationship-rules.md`; `docs/06-design-boundaries.md`; `docs/07-mvp-definition.md`; `docs/08-production-batches.md`; `docs/09-quality-criteria.md` |

### 1.1 Propósito

Este documento conserva el registro normativo y acumulativo de las decisiones materiales de IT Study. Su función es permitir reconstruir qué se decidió, por qué se decidió, quién tuvo autoridad, qué consecuencias produjo, qué documentos condiciona y cómo deberá cambiarse sin perder trazabilidad.

El registro deberá:

- resumir las decisiones adoptadas sin duplicar íntegramente los contratos especializados;
- distinguir decisiones vigentes de propuestas, excepciones, migraciones, deprecaciones y asuntos pendientes;
- impedir cambios materiales silenciosos;
- conservar decisiones antiguas aunque dejen de estar vigentes;
- registrar tensiones conocidas sin resolverlas anticipadamente;
- servir como referencia para coordinación, ChatGPT Trabajo, revisores, Codex, arquitectura, UX/UI, QA y publicación.

### 1.2 Alcance

El registro administra decisiones que afecten de manera material:

- propósito, audiencia, propuesta de valor o alcance del producto;
- taxonomía, clasificaciones, tipos, campos, IDs, namespaces y estados;
- idioma, profundidad y lineamientos editoriales;
- catálogo de relaciones, dirección, inversas, cardinalidad y campos de autoridad;
- cantidades, porcentajes, límites, exclusiones y capacidades del MVP;
- fases, lotes, entregables, revisión, integración y cierre;
- severidades, tolerancias, puertas de calidad y publicación;
- migraciones, deprecaciones, sustituciones, excepciones y aceptación de riesgo;
- arquitectura o UX/UI cuando condicionen contratos, semántica, accesibilidad o reutilización.

### 1.3 Audiencia

- responsable del proyecto;
- chat coordinador;
- ChatGPT Trabajo;
- revisores editoriales, taxonómicos, técnicos, de fuentes, relaciones, accesibilidad y calidad;
- Codex y futuros agentes;
- responsables de producto, arquitectura, UX/UI, QA, integración y publicación.

### 1.4 Decisiones que no administra

Este documento no sustituye:

- los contratos especializados `docs/00` a `docs/09`;
- el contenido educativo de las fichas;
- inventarios, manifiestos y reportes de lote;
- la política detallada de fuentes;
- schemas, validadores, CI o código;
- decisiones visuales intercambiables sin impacto semántico;
- decisiones locales y reversibles de implementación que respeten completamente los contratos vigentes.

Este archivo queda aprobado como registro inicial de decisiones base del proyecto.

## 2. Naturaleza del registro

`docs/10-decision-log.md` es:

- un registro de decisiones, no una colección de notas;
- una fuente de trazabilidad, no un sustituto de los contratos especializados;
- un historial acumulativo;
- un registro que no elimina decisiones antiguas;
- un mecanismo para documentar cambios materiales;
- la autoridad para identificar excepciones autorizadas y su vigencia;
- una referencia para migraciones y rollback;
- un instrumento para impedir reinterpretaciones silenciosas.

Las entradas se añaden y evolucionan mediante estados explícitos. Una decisión antigua permanece visible cuando sea `superseded`, `deprecated`, `rejected`, `expired` o `cancelled`.

Una conversación, comentario, instrucción temporal, prototipo, ejemplo o comportamiento existente no constituye una decisión final. Cuando el asunto sea material, solo adquiere autoridad al quedar registrado en el repositorio con estado `accepted` y al coordinarse con los documentos especializados afectados.

## 3. Qué debe registrarse

Debe crearse una entrada cuando ocurra cualquiera de los siguientes casos:

- aprobación de una decisión estructural;
- cambio de taxonomía;
- cambio del modelo de contenido;
- cambio de IDs o namespaces;
- cambio de estados editoriales;
- cambio del catálogo de relaciones;
- cambio de autoridad entre campos, documentos o capas;
- cambio de lineamientos editoriales;
- cambio de idioma o tratamiento de términos técnicos;
- cambio de cantidades, porcentajes, límites o exclusiones del MVP;
- cambio de fases, lotes, estados o entregables;
- cambio de puertas, severidades, tolerancias o criterios de calidad;
- excepción material;
- migración;
- deprecación;
- sustitución de una decisión;
- contradicción entre documentos;
- adopción de arquitectura que condicione contratos;
- decisión UX/UI con impacto semántico potencial;
- política que afecte múltiples lotes;
- aceptación consciente de riesgo;
- aplazamiento de una capacidad `Should have`;
- autorización para superar un límite aprobado;
- respuesta urgente que modifique temporalmente el comportamiento normativo.

## 4. Qué no requiere una entrada

No requiere una decisión independiente:

- corrección ortográfica sin cambio de significado;
- reformulación que conserve exactamente la decisión;
- actualización de una fecha administrativa que no modifique vigencia, plazo ni autoridad;
- corrección técnica exigida directamente por un contrato vigente;
- aplicación ordinaria de una regla ya aprobada;
- selección de términos dentro de un inventario autorizado;
- cierre ordinario de un lote sin excepción;
- modificación visual que no afecte contenido, taxonomía, relaciones, navegación semántica o accesibilidad;
- regeneración de artefactos derivados;
- actualización de enlaces que conserve la misma fuente y evidencia;
- decisión local reversible de implementación que no cambie contratos.

Cuando exista duda sobre la materialidad, el cambio deberá registrarse como `proposed` antes de aplicarse. La duda no autoriza un cambio silencioso.

## 5. Tipos de decisión

Para evitar una clasificación ambigua se adoptan dos dimensiones: `decisionType`, que expresa la naturaleza del registro, y `decisionAreas`, que identifica las materias afectadas.

### 5.1 `decisionType`

Cada entrada utiliza exactamente un tipo:

| Valor | Definición |
|---|---|
| `baseline` | Decisión fundacional ya aprobada al inicializar la versión `1.0.0` del registro. |
| `change` | Modificación compatible o incompatible de una decisión vigente. |
| `exception` | Desviación temporal, limitada y autorizada que no cambia permanentemente la regla general. |
| `migration` | Transición controlada entre modelos, campos, IDs, relaciones, formatos o representaciones. |
| `deprecation` | Retiro controlado de una decisión, campo, clave, capacidad o contrato. |
| `pending-resolution` | Asunto reconocido que todavía no cuenta con decisión final. |

### 5.2 `decisionAreas`

Cada entrada declara una o más áreas:

| Valor | Materia |
|---|---|
| `architecture` | Dependencias técnicas duraderas, capas, formatos, persistencia e integración. |
| `product` | Propósito, alcance, capacidades, cantidades y exclusiones. |
| `editorial` | Redacción, profundidad, idioma, términos, neutralidad y estructura educativa. |
| `taxonomy` | Clasificación, dominios, subdominios, disciplinas, familias y tipos. |
| `quality` | Puertas, severidades, tolerancias, evidencia y publicación. |
| `operational` | Producción, lotes, revisión, coordinación, integración y mantenimiento. |
| `ux` | Experiencia, navegación, accesibilidad y representación con impacto transversal. |
| `security-risk` | Aceptación, mitigación, retiro o tratamiento explícito de riesgo. |

Reglas:

- `decisionType` explica qué clase de entrada es; `decisionAreas` explica qué afecta.
- Una excepción técnica usa `decisionType: exception` y añade `architecture` en `decisionAreas`.
- Una decisión pendiente usa `decisionType: pending-resolution` y un estado no vigente.
- `baseline` no se utilizará para decisiones nuevas posteriores a la versión inicial.
- No se permiten tipos o áreas libres. Modificar estos vocabularios requiere una decisión `change`.

## 6. Estados de una decisión

| Estado | Significado | Quién puede asignarlo | ¿Vigente? | ¿Puede implementarse? | Condiciones de entrada | Condiciones de salida y fechas |
|---|---|---|---|---|---|---|
| `proposed` | Propuesta redactada sin revisión final. | Propietario, chat coordinador o ChatGPT Trabajo bajo instrucción. | No. | No, salvo prueba aislada que no modifique fuentes ni contratos. | Problema, alcance, responsable y alternativas iniciales identificados. | Pasa a `under-review`, `cancelled` o permanece abierta. `dateProposed` obligatoria. |
| `under-review` | Propuesta sometida a evaluación formal. | Chat coordinador o responsable del proyecto. | No. | No. | Evidencia, alternativas, impacto y documentos afectados disponibles. | Pasa a `accepted`, `rejected`, `cancelled` o vuelve a `proposed`. La revisión debe quedar fechada. |
| `accepted` | Decisión aprobada y vigente desde `effectiveFrom`. | Responsable del proyecto o autoridad delegada. | Sí, mientras no expire, se depreque o sustituya. | Sí, después de actualizar coordinadamente contratos afectados. | Revisión completada, decisión inequívoca, autoridad, fechas, consecuencias y propietarios. | Puede pasar a `superseded`, `deprecated` o `expired`. `dateDecided` y `decisionMaker` obligatorios. |
| `rejected` | Propuesta evaluada y no aceptada. | La misma autoridad que podría aceptarla. | No. | No. | Revisión suficiente y fundamento de rechazo. | Terminal para esa propuesta; reconsiderarla exige una nueva entrada relacionada. `dateDecided` obligatoria. |
| `superseded` | Decisión antes aceptada sustituida total o parcialmente. | Autoridad de la decisión sustituta. | No en la parte sustituida. | No para trabajo nuevo; solo para trazabilidad o migración. | Existe una decisión aceptada que declara `supersedes`. | Debe incluir `supersededBy`, fecha y alcance sustituido. |
| `deprecated` | Decisión retirada del uso ordinario, conservada por compatibilidad o historia. | Responsable del proyecto o autoridad especializada. | No para trabajo nuevo. | Solo durante transición autorizada. | Motivo, fecha, consumidores afectados y sustituto cuando exista. | Permanece histórica o es sustituida; nunca se elimina. |
| `expired` | Decisión temporal cuya fecha o condición terminó. | Propietario y coordinación verifican la expiración. | No. | No, salvo retiro ya autorizado. | `expiresAt` o condición de salida alcanzada. | Requiere fecha efectiva y revisión de impacto; continuar la necesidad exige nueva decisión. |
| `cancelled` | Propuesta o revisión retirada antes de aceptación. | Proponente, propietario o coordinación. | No. | No. | La entrada no era vigente. | Terminal; conserva motivo y fecha. Un nuevo intento usa un ID distinto. |

Reglas adicionales:

- `proposed` y `under-review` no pueden utilizarse como autoridad vigente.
- `rejected`, `superseded`, `deprecated`, `expired` y `cancelled` permanecen visibles.
- La fecha por sí sola no cambia un estado.
- Una decisión temporal `accepted` debe tener `expiresAt` o condición de salida verificable.
- Los estados del decision log no sustituyen `editorialStatus` ni los estados de lote.

## 7. Convención de IDs

### 7.1 Formato adoptado

```text
decision-<NNNN>-<descriptive-name>
```

Reglas:

- prefijo obligatorio `decision`;
- secuencia numérica de cuatro dígitos, comenzando en `0001`;
- descripción breve en ASCII minúsculo y `kebab-case`;
- unicidad global;
- estabilidad durante toda la vida de la entrada;
- no reutilización, incluso después de rechazo, cancelación, expiración o deprecación;
- conservación del ID cuando cambie el título visible;
- prohibición de renumerar decisiones;
- asignación de la siguiente secuencia disponible sin rellenar huecos históricos;
- referencias desde contenido, lotes, reportes, excepciones, commits y migraciones mediante el ID completo.

Ejemplos válidos:

- `decision-0001-project-purpose`;
- `decision-0003-taxonomy-structure`;
- `decision-0012-related-relations-migration`.

Ejemplos inválidos:

- `Decision-0001-purpose` — mayúsculas;
- `decision-1-purpose` — secuencia no normalizada;
- `decision_0001_purpose` — guiones bajos;
- `decision-0001-propósito` — diacrítico;
- `decision-0001/purpose` — barra;
- reutilizar `decision-0015-dark-mode-delivery` después de cancelarlo;
- renumerar una decisión porque cambió su título.

Los IDs de decisión no sustituyen IDs canónicos de contenido, lote, fuente, comparación, escenario, ruta ni otro namespace.

## 8. Estructura de una entrada

### 8.1 Convenciones

- **R:** obligatorio en toda entrada.
- **C:** obligatorio cuando aplica la condición indicada.
- **O:** opcional; se omite cuando no aplica.
- Fechas: `YYYY-MM-DD`.
- Referencias internas: IDs o rutas estables del repositorio.
- Listas: valores únicos y sin ciclos.
- Texto: Markdown conciso, verificable y sin decisiones implícitas.

### 8.2 Plantilla normativa

| Campo | Req. | Significado y aplicabilidad | Formato y validación | Cuándo se omite |
|---|---:|---|---|---|
| `id` | R | Identidad estable de la decisión. | Patrón de la sección 7; único y no reutilizable. | Nunca. |
| `title` | R | Título humano y específico. | Texto breve; no usar títulos genéricos como “cambio”. | Nunca. |
| `status` | R | Estado de la sección 6. | Enum controlado y coherente con fechas y relaciones. | Nunca. |
| `decisionType` | R | Naturaleza del registro. | Un valor de la sección 5.1. | Nunca. |
| `decisionAreas` | R | Materias afectadas. | Lista no vacía de valores de la sección 5.2. | Nunca. |
| `dateProposed` | C | Fecha de propuesta. | Obligatoria desde `proposed`; no posterior a `dateDecided`. | Solo en baselines históricos cuya propuesta no se conservó. |
| `dateDecided` | C | Fecha de aceptación o disposición final. | Obligatoria para `accepted`, `rejected`, `superseded`, `deprecated`, `expired` y `cancelled`. | Mientras siga propuesta o en revisión. |
| `effectiveFrom` | C | Inicio de vigencia. | Obligatoria para `accepted`; no anterior a `dateDecided`, salvo baseline documentado. | Cuando no existe efecto normativo. |
| `reviewDue` | O/C | Próxima revisión requerida. | Fecha posterior a la decisión; obligatoria si riesgo, volatilidad o compromiso temporal lo exige. | Decisión estable sin revisión programada. |
| `expiresAt` | C | Fin de vigencia temporal. | Obligatoria para excepciones con fecha y decisiones temporales; posterior a `effectiveFrom`. | Decisiones permanentes o con condición de salida explícita. |
| `decisionMaker` | C | Autoridad que decide. | Persona, rol o cuerpo identificable; obligatorio al decidir. | Mientras sea propuesta. |
| `owners` | R | Responsables de ejecución, seguimiento y revisión. | Lista no vacía de personas o roles identificables. | Nunca. |
| `context` | R | Circunstancias que originan la decisión. | Hechos y antecedentes pertinentes. | Nunca. |
| `problem` | R | Problema o tensión que debe resolverse. | Pregunta o condición concreta, sin anticipar solución. | Nunca. |
| `decision` | R | Regla adoptada o, si está pendiente, regla de contención vigente. | Declaración inequívoca; no agrupar asuntos independientes. | Nunca. |
| `rationale` | R | Justificación de la decisión. | Vinculada con propósito, evidencia y contratos. | Nunca. |
| `alternativesConsidered` | O/C | Alternativas reales evaluadas. | Lista con disposición y motivo; obligatoria para cambios, arquitectura, excepciones y migraciones materiales. | Baseline cuyo historial de alternativas no se conservó. |
| `consequences` | R | Efectos generales y compromisos. | Lista o párrafos verificables. | Nunca. |
| `positiveConsequences` | O | Beneficios esperados. | Lista sin lenguaje promocional. | Cuando ya están claros en `consequences`. |
| `negativeConsequences` | O | Costos y restricciones. | Lista explícita; no ocultar deuda. | Solo si no existen y se justifica en `notes`. |
| `risks` | O/C | Resultados adversos posibles. | Lista con impacto; obligatoria para excepción, arquitectura, migración y `security-risk`. | Baseline sin riesgo específico adicional. |
| `mitigations` | O/C | Controles para los riesgos. | Deben corresponder a riesgos registrados. | Si no hay riesgos. |
| `affectedArtifacts` | R | Documentos, contenido, lotes, schemas, código, UI o procesos afectados. | Rutas o clases de artefacto. | Nunca. |
| `authorityRefs` | R | Fuentes normativas que autorizan o condicionan. | Rutas del repositorio y, cuando aplique, IDs de decisión. | Nunca. |
| `evidenceRefs` | O/C | Evidencia que sustenta el análisis. | IDs, rutas o referencias estables; obligatoria cuando depende de pruebas o investigación. | Cuando la autoridad documental basta para un baseline. |
| `supersedes` | C | Decisiones reemplazadas por la nueva. | IDs existentes y alcance total o parcial explícito. | Si no sustituye otra decisión. |
| `supersededBy` | C | Decisión que reemplaza a esta. | Obligatoria en estado `superseded`; debe apuntar a una decisión aceptada. | En cualquier otro estado. |
| `relatedDecisions` | O | Decisiones relacionadas sin sustitución. | IDs existentes y relación explicada. | Sin relaciones relevantes. |
| `implementationStatus` | R | Estado de aplicación. | `not-started`, `planned`, `in-progress`, `implemented`, `verified`, `blocked` o `not-applicable`. | Nunca. |
| `migrationPlan` | C | Transición entre estados o representaciones. | Obligatorio para `migration`, cambios incompatibles, consolidación, división o modificación de ID/contrato. | Sin migración. |
| `rollbackPlan` | C | Reversión sin pérdida de trazabilidad. | Obligatorio para excepciones, migraciones y cambios técnicos riesgosos. | Baseline sin acción reversible. |
| `followUpActions` | O/C | Acciones posteriores con responsable y cierre. | Lista; cada acción material debe tener propietario. | Decisión aplicada y verificada sin acciones abiertas. |
| `exceptionScope` | C | Límite exacto de una excepción. | Regla, unidades, duración, publicación y condición de salida. | Si no es `exception`. |
| `notes` | O | Aclaraciones no normativas. | No puede introducir decisiones nuevas. | Sin aclaraciones. |

### 8.3 Reglas de validación de la plantilla

- No se rellenan campos con `N/A`, listas vacías o texto artificial; se omiten cuando no aplican.
- Una entrada no agrupa decisiones independientes.
- `accepted` exige decisión inequívoca, autoridad, fechas y artefactos afectados.
- `pending-resolution` no formula una solución como si estuviera adoptada.
- Una excepción sin alcance, vigencia y retiro es inválida.
- Una migración sin estado objetivo, validaciones y rollback es inválida.
- Una decisión sustituida conserva enlaces bidireccionales coherentes.

## 9. Autoridad y precedencia

### 9.1 Reglas generales

1. Los documentos aprobados especializados conservan autoridad sobre su materia.
2. El decision log registra por qué existe una decisión, cuándo cambia y qué impacto tiene.
3. Una entrada no puede contradecir silenciosamente un documento especializado vigente.
4. Cuando una decisión cambie un contrato deberán actualizarse coordinadamente:
   - la entrada del decision log;
   - el documento especializado;
   - los artefactos dependientes;
   - las migraciones, schemas y validaciones necesarias.
5. Una decisión aceptada más reciente sustituye otra únicamente si declara `supersedes`.
6. La fecha por sí sola no sustituye una decisión.
7. El orden numérico no determina mayor autoridad.
8. Una excepción no modifica permanentemente la regla general.
9. Una decisión aceptada que aún no actualizó el contrato afectado no habilita implementación.
10. El repositorio aprobado prevalece sobre conversaciones y copias externas.

### 9.2 Resolución de conflictos aparentes

| Artefacto | Autoridad ordinaria | Tratamiento ante conflicto |
|---|---|---|
| Documento normativo especializado | Autoridad principal en su materia. | Prevalece mientras no exista cambio aceptado y actualización coordinada. |
| Decisión registrada | Autoridad sobre contexto, cambio, excepción, sustitución y vigencia. | Debe declarar impacto; no sustituye silenciosamente el contrato. |
| Manifiesto de lote | Autoridad operativa dentro del alcance autorizado. | No puede cambiar contratos, cantidades globales ni taxonomía. |
| Inventario | Instrumento de planificación y selección. | Se corrige contra taxonomía, modelo, MVP y decisiones vigentes. |
| Ejemplo | Ilustración no normativa. | Nunca prevalece sobre un contrato. |
| Schema | Implementación verificable de contratos. | Si discrepa, se corrige o se registra un cambio; no redefine la norma. |
| Código | Implementación. | Debe ajustarse a contratos; el comportamiento existente no crea autoridad. |
| Configuración | Política técnica o de producto dentro de límites. | No cambia identidad, clasificación ni significado. |
| Conversación | Contexto o propuesta. | No constituye autoridad final. |

Ante dos decisiones vigentes incompatibles se bloquea el alcance afectado, se registra la contradicción y se crea una decisión de resolución. No se elige por fecha, número o conveniencia técnica.

## 10. Proceso para proponer una decisión

1. identificar el problema;
2. comprobar si una decisión vigente ya lo resuelve;
3. delimitar alcance e impacto;
4. recopilar evidencia;
5. redactar la propuesta con `status: proposed`;
6. identificar alternativas;
7. analizar consecuencias y riesgos;
8. identificar documentos afectados;
9. asignar responsables y autoridad;
10. pasar a `under-review` cuando esté completa;
11. revisar desde las perspectivas afectadas;
12. aceptar, rechazar, cancelar o aplazar;
13. registrar fecha, autoridad y vigencia;
14. actualizar documentos afectados;
15. implementar o migrar después de la actualización normativa;
16. verificar el resultado;
17. cerrar acciones posteriores o crear decisiones relacionadas.

No deberá aplicarse primero un cambio material para documentarlo después, salvo respuesta urgente conforme a la sección 16 y registrada inmediatamente.

## 11. Proceso para excepciones

Toda excepción deberá tener `decisionType: exception`, aprobación explícita y, antes de aplicarse:

- regla afectada;
- motivo;
- alcance exacto;
- unidades afectadas;
- responsable;
- evidencia;
- riesgo;
- alternativa descartada;
- mitigación;
- duración;
- fecha de expiración o condición de salida;
- fecha de revisión;
- impacto sobre calidad;
- impacto sobre cobertura;
- impacto sobre publicación;
- plan de retiro;
- rollback;
- autoridad de aprobación.

Una excepción:

- es limitada;
- no modifica automáticamente el contrato;
- no convierte contenido deficiente en contenido contable;
- no debe renovarse indefinidamente;
- no puede ocultarse en un reporte de lote;
- puede expirar;
- debe revisarse;
- puede revocarse;
- debe figurar en `exceptions-report.md` y referenciar su decisión.

Al expirar, el responsable debe retirar la desviación, completar la migración o solicitar una nueva decisión con evidencia actualizada.

## 12. Reglas no exceptuables ordinariamente

No pueden exceptuarse mediante el proceso ordinario:

- unicidad y no reutilización de IDs;
- referencias internas mediante IDs;
- prohibición de fuentes inventadas;
- ausencia de información materialmente falsa o riesgosa;
- una entrada canónica por significado;
- autoridad del repositorio;
- trazabilidad de aprobación;
- revisión independiente;
- prohibición de relaciones creadas únicamente por navegación;
- prohibición de tratar artefactos generados como fuente;
- prohibición de cambios materiales silenciosos.

Modificar estos principios exige reabrir formalmente los fundamentos del proyecto y no puede presentarse como excepción ordinaria.

## 13. Cambios y sustitución

### 13.1 Tratamiento de cambios

| Caso | Tratamiento obligatorio |
|---|---|
| Modificación compatible | Nueva decisión `change`; conserva identidad y añade comportamiento compatible; actualiza versión menor cuando aplique. |
| Modificación incompatible | Nueva decisión `change`; declara `supersedes`, versión mayor, migración, compatibilidad y rollback. |
| Ampliación | Registra alcance, límites, dependencias y efecto acumulado; no convierte máximos en metas. |
| Reducción | Declara qué deja de ser obligatorio y su impacto sobre hipótesis, cobertura y publicación. |
| Sustitución | La nueva decisión apunta a la anterior mediante `supersedes`; la anterior pasa a `superseded`. |
| Deprecación | Entrada `deprecation` con fecha, motivo, consumidores, sustituto y última vigencia. |
| Reversión | Nueva decisión que identifica la decisión revertida, estado restaurado, consecuencias y rollback ejecutado. |
| Corrección de una decisión | Si no cambia significado, corrección administrativa trazada; si cambia significado, nueva decisión. |
| División | Crea decisiones nuevas por asunto independiente y registra correspondencia con la anterior. |
| Consolidación | Crea una decisión canónica que sustituye las anteriores y explica qué se conserva. |
| Cambio de responsable | Puede actualizar `owners` si no cambia autoridad; cambiar autoridad requiere `change`. |
| Cambio de fecha sin cambio semántico | Corrección administrativa si no altera vigencia, revisión o expiración. |

### 13.2 Reglas de sustitución

Una decisión sustituida debe:

- conservarse;
- apuntar a la decisión nueva;
- indicar qué parte dejó de estar vigente;
- registrar consecuencias;
- identificar migración cuando aplique;
- evitar cadenas ambiguas o ciclos.

La cadena debe poder resolverse hasta una decisión vigente. A no puede sustituir B si B sustituye A.

## 14. Migraciones

### 14.1 Cuándo se necesita plan

Se requiere plan de migración ante:

- cambio de ID;
- cambio de namespace;
- cambio de tipo;
- cambio de dominio principal;
- cambio de campo;
- cambio de autoridad;
- cambio de estado o vocabulario;
- consolidación de duplicados;
- división de una entrada;
- cambio de relación persistida;
- cambio de estructura física;
- cambio de formato;
- cambio de contrato;
- cambio de fuentes canónicas.

### 14.2 Contenido mínimo

Una migración debe incluir:

- estado inicial;
- estado objetivo;
- elementos afectados;
- compatibilidad temporal;
- tabla de correspondencias;
- orden de ejecución;
- validaciones antes, durante y después;
- rollback;
- responsables;
- condición de terminación;
- tratamiento de IDs históricos y reservas;
- efecto sobre derivados y consumidores;
- criterio para retirar compatibilidad temporal.

No se elimina un ID histórico ni se reutiliza una clave retirada. Una migración termina cuando fuentes, consumidores, validadores, derivados y documentación coinciden con el estado objetivo.

## 15. Decisiones de arquitectura y UX/UI

Debe registrarse una decisión técnica o visual cuando:

- introduce una dependencia duradera;
- cambia la autoridad de una capa;
- limita formatos o consumidores futuros;
- modifica URLs como contrato;
- exige duplicar contenido;
- introduce backend o estado persistente;
- cambia capacidades del MVP;
- modifica accesibilidad;
- impide una prueba de sustitución;
- altera búsqueda, filtros o navegación semántica;
- cambia el tratamiento de contenido generado;
- requiere excepción a documentos aprobados;
- modifica schemas de forma incompatible;
- acepta un riesgo que afecte publicación, privacidad o integridad.

No requiere entrada una implementación intercambiable, reversible y totalmente compatible con los contratos vigentes.

## 16. Decisiones urgentes

Para incidentes, información riesgosa o bloqueos que exijan acción inmediata:

1. registrar una decisión provisional;
2. indicar urgencia y motivo;
3. limitar alcance;
4. identificar riesgos y mitigación;
5. fijar expiración o condición de salida;
6. asignar revisión posterior;
7. retirar temporalmente contenido riesgoso cuando proceda;
8. impedir que la medida provisional se consolide automáticamente;
9. actualizar, sustituir o revertir después de la revisión.

La urgencia no autoriza publicar información falsa, omitir trazabilidad, reutilizar IDs ni evitar el proceso ordinario por conveniencia.

## 17. Evidencia

Puede utilizarse como evidencia:

- documentos oficiales;
- estándares;
- fuentes normalizadas;
- reportes de investigación;
- reportes de revisión;
- resultados de validación;
- reportes de build;
- pruebas de accesibilidad;
- pruebas de sustitución;
- métricas;
- inventarios;
- análisis de impacto;
- prototipos o pruebas técnicas pertinentes;
- diffs y commits reproducibles.

Una conversación puede aportar contexto, pero la evidencia final debe preservarse en el repositorio o mediante referencia estable autorizada. Un prototipo demuestra viabilidad o limitación; no constituye un contrato por sí solo.

## 18. Responsabilidades

### 18.1 Responsable del proyecto

- aceptar o rechazar decisiones materiales;
- aprobar excepciones;
- decidir cambios de alcance;
- autorizar publicación con riesgo residual permitido;
- asignar responsables y autoridades delegadas.

### 18.2 Chat coordinador

- detectar decisiones que deben registrarse;
- preparar o coordinar propuestas;
- comprobar dependencias y documentos afectados;
- actualizar referencias y matriz;
- impedir cambios silenciosos;
- dar seguimiento a acciones, expiraciones y migraciones.

### 18.3 ChatGPT Trabajo

- identificar decisiones pendientes durante investigación;
- aportar evidencia y alternativas;
- registrar propuestas bajo instrucción;
- declarar incertidumbre;
- no decidir cambios contractuales por cuenta propia.

### 18.4 Revisores

- evaluar impacto desde su perspectiva;
- identificar riesgos y contradicciones;
- comprobar alternativas y evidencia;
- verificar que la implementación respete la decisión;
- mantener revisión independiente cuando sea obligatoria.

### 18.5 Codex

- implementar decisiones `accepted` y contratos coordinados;
- verificar migraciones;
- detectar incompatibilidades;
- producir hallazgos trazables;
- no aceptar excepciones;
- no reinterpretar decisiones ambiguas;
- no corregir semántica silenciosamente.

### 18.6 Repositorio

- conservar historial;
- actuar como fuente oficial;
- mantener decisiones sustituidas, rechazadas, deprecadas y expiradas;
- permitir trazabilidad mediante commits, referencias y evidencia.

## 19. Validaciones del registro

### 19.1 Errores bloqueantes

- ID duplicado;
- ID reutilizado;
- estado desconocido;
- tipo o área de decisión desconocidos;
- decisión `accepted` sin fecha o responsable;
- decisión `superseded` sin `supersededBy`;
- referencia a decisión inexistente;
- ciclo de sustitución;
- excepción sin alcance;
- excepción sin expiración o condición de salida;
- excepción material sin autorización;
- decisión que contradice un contrato sin registrar actualización;
- eliminación de una decisión histórica;
- migración sin estado objetivo;
- dos decisiones vigentes incompatibles sin resolución;
- modificación material sin entrada;
- implementación de una propuesta como autoridad;
- decisión pendiente formulada como solución aprobada.

### 19.2 Advertencias

- decisión sin alternativas cuando deberían existir;
- consecuencias vagas;
- documentos afectados incompletos;
- acción posterior sin responsable;
- fecha de revisión vencida;
- excepción próxima a expirar;
- decisión aceptada sin evidencia suficiente;
- demasiadas decisiones agrupadas;
- duplicación de una decisión existente;
- título demasiado general;
- propuesta abandonada sin estado final;
- implementación incompleta;
- entrada aceptada sin actualización coordinada del contrato.

### 19.3 Recomendaciones

- dividir una decisión;
- añadir evidencia;
- aclarar consecuencias;
- asignar propietario;
- añadir migración o rollback;
- consolidar propuestas duplicadas;
- cerrar acciones posteriores;
- actualizar documentos afectados;
- establecer `reviewDue` según riesgo.

Estas validaciones son conceptuales. Su implementación queda reservada para Codex, schemas y CI.

## 20. Revisión periódica

No se adopta un calendario único. La frecuencia depende de estabilidad, expiración, riesgo y cambio material.

Deben revisarse:

- decisiones aceptadas con efectos duraderos cuando cambien sus supuestos;
- excepciones antes de `reviewDue` y `expiresAt`;
- decisiones emergentes ante evidencia nueva;
- decisiones técnicas dependientes de herramientas o proveedores;
- migraciones hasta su terminación;
- decisiones con riesgos abiertos;
- asuntos `pending-resolution` al alcanzar su condición de decisión;
- decisiones con acciones sin cerrar;
- decisiones que condicionen una nueva fase, build o publicación.

Confirmar vigencia no exige una nueva decisión. Cambiar significado, alcance, autoridad o riesgo aceptado sí exige una entrada `change`.

## 21. Registro inicial de decisiones base

### decision-0001-project-purpose — Propósito del proyecto

| Campo | Valor |
|---|---|
| `status` | `accepted` |
| `decisionType` | `baseline` |
| `decisionAreas` | `product`, `editorial` |
| `dateDecided` / `effectiveFrom` | `2026-07-20` |
| `decisionMaker` | Responsable del proyecto |
| `owners` | Responsable del proyecto; coordinación; contenido |
| `implementationStatus` | `verified` |
| `authorityRefs` | `docs/00-project-charter.md`; `docs/01-scope-and-audience.md` |

**Contexto y problema.** IT Study debe orientar sobre la amplitud de IT sin convertirse en un programa de especialización práctica.

**Decisión.** IT Study es un mapa de conocimiento conectado y un glosario contextual. Su valor principal es la comprensión teórica y contextual. Quedan excluidos del propósito vigente la formación práctica exhaustiva, los cursos completos y la preparación integral para certificaciones.

**Justificación.** La audiencia necesita reconocer conceptos y seguir conversaciones multidisciplinarias sin dominar cada disciplina.

**Consecuencias.** El contenido prioriza significado, propósito, contexto, relaciones, diferencias y límites; no añade laboratorios o tutoriales extensos como extensión ordinaria.

**Artefactos afectados.** Alcance, modelo, lineamientos, MVP, inventarios, rutas, UX/UI y publicación.

### decision-0002-audience-depth — Audiencia y profundidad

| Campo | Valor |
|---|---|
| `status` | `accepted` |
| `decisionType` | `baseline` |
| `decisionAreas` | `product`, `editorial` |
| `dateDecided` / `effectiveFrom` | `2026-07-20` |
| `decisionMaker` | Responsable del proyecto |
| `owners` | Producto; contenido; revisión editorial |
| `implementationStatus` | `verified` |
| `authorityRefs` | `docs/01-scope-and-audience.md`; `docs/03-content-model.md`; `docs/04-editorial-guidelines.md` |
| `relatedDecisions` | `decision-0001-project-purpose` |

**Contexto y problema.** La audiencia tiene experiencias técnicas y no técnicas distintas y necesita comprender términos de múltiples dominios.

**Decisión.** La audiencia es transversal y no tiene prerrequisitos obligatorios de programación. El nivel principal es `contextual-understanding`; `recognition` se reserva para apoyo periférico y `future-expanded-reference` no se produce ordinariamente en el MVP.

**Justificación.** La profundidad contextual permite seguir conversaciones profesionales sin prometer especialización.

**Consecuencias.** Fundamentos, conceptos puente y entradas centrales de comparaciones, escenarios y rutas deben alcanzar profundidad contextual.

**Artefactos afectados.** Fichas, rutas, escenarios, comparaciones, inventarios, lotes y revisión.

### decision-0003-taxonomy-structure — Estructura taxonómica

| Campo | Valor |
|---|---|
| `status` | `accepted` |
| `decisionType` | `baseline` |
| `decisionAreas` | `taxonomy` |
| `dateDecided` / `effectiveFrom` | `2026-07-20` |
| `decisionMaker` | Responsable del proyecto |
| `owners` | Taxonomía; coordinación |
| `implementationStatus` | `verified` |
| `authorityRefs` | `docs/02-taxonomy.md` |

**Contexto y problema.** El mapa necesita cobertura transversal sin jerarquías arbitrarias ni duplicación de temas aplicables en varios dominios.

**Decisión.** Se adoptan doce dominios. La única jerarquía canónica es `domain > subdomain`. `discipline` es transversal y no constituye un tercer nivel. `area` es agrupación editorial opcional y no concede pertenencia taxonómica.

**Justificación.** La estructura conserva hogares principales claros y permite aplicaciones cruzadas sin duplicar definiciones.

**Consecuencias.** Un subdominio tiene un solo padre; una disciplina se define una vez; menús, filtros y áreas no cambian clasificación. `DOM-01` a `DOM-12` son referencias documentales, no IDs canónicos de contenido.

**Artefactos afectados.** Taxonomía materializada, inventarios, navegación, filtros, lotes y validadores.

### decision-0004-knowledge-classifications — Clasificaciones de conocimiento

| Campo | Valor |
|---|---|
| `status` | `accepted` |
| `decisionType` | `baseline` |
| `decisionAreas` | `taxonomy`, `editorial` |
| `dateDecided` / `effectiveFrom` | `2026-07-20` |
| `decisionMaker` | Responsable del proyecto |
| `owners` | Taxonomía; modelo; editorial |
| `implementationStatus` | `verified` |
| `authorityRefs` | `docs/02-taxonomy.md`; `docs/03-content-model.md` |
| `relatedDecisions` | `decision-0003-taxonomy-structure` |

**Contexto y problema.** El vocabulario inicial mezclaba roles, puestos, metodologías, prácticas, tecnologías, productos y otras clases no equivalentes.

**Decisión.** Se adoptan las familias y tipos definidos por taxonomía y modelo. Comparación, escenario y ruta son estructuras editoriales. `product` es tipo; `brand` es metadato; `competency` es entidad; `responsibility` se conserva principalmente como objeto estructurado y solo excepcionalmente como ficha autónoma.

**Justificación.** Clasificar por naturaleza evita que el uso coloquial, marketing o necesidades de interfaz cambien significado.

**Consecuencias.** Se utiliza el tipo más específico. Los aliases no crean fichas. Significados incompatibles reciben IDs separados.

**Artefactos afectados.** Modelo, schemas, inventarios, fichas, filtros, comparaciones y revisión taxonómica.

### decision-0005-content-format-and-identifiers — Formato e identificadores

| Campo | Valor |
|---|---|
| `status` | `accepted` |
| `decisionType` | `baseline` |
| `decisionAreas` | `architecture`, `operational` |
| `dateDecided` / `effectiveFrom` | `2026-07-20` |
| `decisionMaker` | Responsable del proyecto |
| `owners` | Modelo; Codex; arquitectura |
| `implementationStatus` | `verified` |
| `authorityRefs` | `docs/03-content-model.md` |

**Contexto y problema.** Las fuentes deben ser legibles, revisables, validables, reutilizables y estables frente a cambios de interfaz o rutas.

**Decisión.** Las fuentes editoriales principales usan Markdown UTF-8 con frontmatter YAML y un archivo por entrada canónica. Los IDs globales siguen `<namespace>-<semantic-key>`, ASCII minúsculo y `kebab-case`; son estables, únicos, inmutables y no reutilizables. Las referencias internas usan IDs.

**Justificación.** El formato favorece autoría, diffs, validación, generación estática y separación del diseño; los IDs desacoplan identidad de títulos y URLs.

**Consecuencias.** Títulos, slugs, URLs y nombres de archivo no son identidad. Una migración de ID es excepcional, atómica y conserva resolución histórica.

**Artefactos afectados.** Contenido, fuentes, inventarios, schemas, validadores, índices, build y migraciones.

### decision-0006-editorial-language-policy — Política editorial e idioma

| Campo | Valor |
|---|---|
| `status` | `accepted` |
| `decisionType` | `baseline` |
| `decisionAreas` | `editorial` |
| `dateDecided` / `effectiveFrom` | `2026-07-20` |
| `decisionMaker` | Responsable del proyecto |
| `owners` | Editorial; revisores; ChatGPT Trabajo |
| `implementationStatus` | `verified` |
| `authorityRefs` | `docs/04-editorial-guidelines.md` |
| `relatedDecisions` | `decision-0002-audience-depth` |

**Contexto y problema.** El proyecto necesita claridad en español sin perder el vocabulario profesional que se utiliza habitualmente en inglés.

**Decisión.** El texto explicativo se redacta en español. Los términos técnicos en inglés prevalecen cuando son la forma profesional habitual o predominante. Los acrónimos se desarrollan cuando corresponde. La voz es profesional, didáctica, neutral, directa y no promocional.

**Justificación.** La política facilita comprensión y búsqueda sin crear traducciones artificiales ni alejarse del uso profesional.

**Consecuencias.** `canonicalName`, `englishName` y `aliases` conservan funciones distintas; una traducción no crea ID. Se evitan tutoriales, lenguaje comercial, afirmaciones absolutas y relleno.

**Artefactos afectados.** Fichas, relaciones, estructuras editoriales, búsqueda y revisión.

### decision-0007-relationship-governance — Gobierno de relaciones

| Campo | Valor |
|---|---|
| `status` | `accepted` |
| `decisionType` | `baseline` |
| `decisionAreas` | `taxonomy`, `quality`, `operational` |
| `dateDecided` / `effectiveFrom` | `2026-07-20` |
| `decisionMaker` | Responsable del proyecto |
| `owners` | Revisión de relaciones; modelo; Codex |
| `implementationStatus` | `verified` |
| `authorityRefs` | `docs/05-relationship-rules.md` |
| `relatedDecisions` | `decision-0012-related-relations-migration`; `decision-0013-symmetric-relations-storage`; `decision-0014-certification-issuer-model` |

**Contexto y problema.** El mapa necesita conexiones educativas precisas sin convertir coocurrencia, navegación o conveniencia visual en semántica.

**Decisión.** Se adopta el catálogo de relaciones, su dirección, inversas, cardinalidades, compatibilidad, ciclos, evidencia y campos de autoridad definidos en `docs/05-relationship-rules.md`. `related-to` es último recurso y requiere justificación. Se prohíben relaciones creadas solo para navegación.

**Justificación.** Un catálogo gobernado permite progresión y contexto sin asociaciones ambiguas ni duplicación entre campos e inversas.

**Consecuencias.** Los campos especializados conservan autoridad; las inversas se generan cuando corresponde; cada arista responde una pregunta educativa y usa IDs existentes.

**Artefactos afectados.** Fichas, schemas, validadores, índices, navegación, rutas, comparaciones, escenarios y reportes relacionales.

### decision-0008-content-design-separation — Separación contenido-diseño

| Campo | Valor |
|---|---|
| `status` | `accepted` |
| `decisionType` | `baseline` |
| `decisionAreas` | `architecture`, `ux`, `quality` |
| `dateDecided` / `effectiveFrom` | `2026-07-20` |
| `decisionMaker` | Responsable del proyecto |
| `owners` | Arquitectura; UX/UI; Codex; calidad |
| `implementationStatus` | `verified` |
| `authorityRefs` | `docs/06-design-boundaries.md` |

**Contexto y problema.** El conocimiento debe reutilizarse en interfaces y formatos distintos sin reescribirse según el diseño.

**Decisión.** Contenido, taxonomía, relaciones, gobierno, lógica, navegación, configuración y presentación son responsabilidades separadas. Se prohíben propiedades visuales en contenido. URLs y slugs son distintos de IDs. Los artefactos generados no son fuentes canónicas.

**Justificación.** La separación evita duplicación, acoplamiento y pérdida de significado al cambiar la interfaz.

**Consecuencias.** Menús no crean taxonomía; grafos no crean relaciones; temas no cambian contenido; los derivados se regeneran. Las pruebas de sustitución deben producir diff semántico igual a cero.

**Artefactos afectados.** Contenido, arquitectura, UX/UI, búsqueda, navegación, build, derivados y accesibilidad.

### decision-0009-mvp-scope — Alcance del MVP

| Campo | Valor |
|---|---|
| `status` | `accepted` |
| `decisionType` | `baseline` |
| `decisionAreas` | `product`, `quality` |
| `dateDecided` / `effectiveFrom` | `2026-07-20` |
| `decisionMaker` | Responsable del proyecto |
| `owners` | Producto; coordinación; contenido; arquitectura |
| `implementationStatus` | `verified` |
| `authorityRefs` | `docs/07-mvp-definition.md` |
| `relatedDecisions` | `decision-0015-dark-mode-delivery` |

**Contexto y problema.** El producto debe validar valor real con cobertura suficiente sin convertir el máximo ni las capacidades futuras en alcance obligatorio.

**Decisión.** El MVP incluye las capacidades `Must have` de `docs/07-mvp-definition.md`, representa los doce dominios y utiliza 120 entidades como piso publicable, 164 como objetivo y 210 como máximo inicial. Es un producto estático sin backend transaccional propio. Mantiene las exclusiones aprobadas.

**Justificación.** El piso permite búsqueda y cobertura reales; el objetivo orienta planificación; el máximo protege revisión y evita volumen sin valor.

**Consecuencias.** Publicar por debajo del mínimo, superar el máximo, excluir un dominio, cambiar porcentajes o introducir backend/cuentas requiere decisión registrada.

**Artefactos afectados.** Inventarios, lotes, arquitectura, UX/UI, validadores, build y publicación.

### decision-0010-production-strategy — Estrategia de producción

| Campo | Valor |
|---|---|
| `status` | `accepted` |
| `decisionType` | `baseline` |
| `decisionAreas` | `operational`, `quality` |
| `dateDecided` / `effectiveFrom` | `2026-07-20` |
| `decisionMaker` | Responsable del proyecto |
| `owners` | Chat coordinador; producción; revisores; Codex |
| `implementationStatus` | `verified` |
| `authorityRefs` | `docs/08-production-batches.md` |

**Contexto y problema.** La producción debe controlar dependencias, revisión, balance y cobertura acumulada sin mezclar contenido base con estructuras dependientes o implementación.

**Decisión.** Se adoptan fases F0–F7 y ondas de fundamentos, sistemas/construcción, conectividad/operación/protección, datos/IA/integración, producto/experiencia/gobierno y conexiones/cierre. El plan mínimo contiene 26 lotes y el objetivo 32. Los fundamentos preceden las estructuras editoriales y la revisión precede la expansión. Se adoptan los estados y entregables de lote de la autoridad.

**Justificación.** Los lotes revisables permiten corrección temprana, cobertura trazable y detención al validar valor.

**Consecuencias.** Ningún lote inicia sin manifiesto autorizado ni cierra sin aceptación, integración, cobertura y decisiones actualizadas. Comparaciones, escenarios y rutas dependen de entradas aprobadas.

**Artefactos afectados.** Documentos `work/`, entregas, inventarios, reportes, integración y tablero de cobertura.

### decision-0011-quality-model — Modelo de calidad

| Campo | Valor |
|---|---|
| `status` | `accepted` |
| `decisionType` | `baseline` |
| `decisionAreas` | `quality`, `operational` |
| `dateDecided` / `effectiveFrom` | `2026-07-20` |
| `decisionMaker` | Responsable del proyecto |
| `owners` | Calidad; revisores; coordinación; Codex |
| `implementationStatus` | `verified` |
| `authorityRefs` | `docs/09-quality-criteria.md` |

**Contexto y problema.** La calidad no puede reducirse a sintaxis, conteos o una puntuación promedio que compense errores materiales.

**Decisión.** Se adopta el Modelo de Calidad por Dimensiones y Puertas, con revisión independiente, cero bloqueantes y mayores abiertos en contenido aceptado y diez puertas. Se adoptan U1, U2 y U3 de `needs-update`. Los mínimos, máximos y porcentajes son puertas.

**Justificación.** El modelo combina validación automática y juicio humano sin permitir que cantidad o apariencia oculten defectos semánticos.

**Consecuencias.** `needs-update` no cuenta para mínimos. Publicación exige contenido contable `approved`, integración, accesibilidad, pruebas de sustitución, build reproducible y autorización humana. Codex produce hallazgos, no decisiones semánticas.

**Artefactos afectados.** Entradas, relaciones, fuentes, lotes, fases, inventarios, schemas, CI, build y publicación.

## 22. Registro inicial de asuntos pendientes

Las entradas siguientes no son autoridad para adoptar una solución. Su `decisionType` es `pending-resolution` y su estado es `proposed`. Mientras no se acepten, prevalecen los contratos actuales y se prohíben cambios silenciosos.

### decision-0012-related-relations-migration — Migración de `related` a `relations[]`

| Campo | Valor |
|---|---|
| `status` | `proposed` |
| `decisionType` | `pending-resolution` |
| `decisionAreas` | `architecture`, `operational` |
| `dateProposed` | `2026-07-20` |
| `owners` | Modelo; relaciones; arquitectura; Codex |
| `implementationStatus` | `blocked` |
| `authorityRefs` | `docs/03-content-model.md`; `docs/05-relationship-rules.md`; `docs/08-production-batches.md` |
| `relatedDecisions` | `decision-0005-content-format-and-identifiers`; `decision-0007-relationship-governance` |

**Contexto.** `related` es una comodidad transitoria, mientras `relations[]` es el contenedor relacional final.

**Problema.** Su coexistencia puede producir duplicación, ambigüedad de autoridad y consumidores divergentes.

**Regla de contención vigente.** No se elimina ni depreca `related`, no se duplica automáticamente en `relations[]` y no se cambia el modelo silenciosamente.

**Alternativas a considerar.** Migración completa inmediata; migración gradual por lote; compatibilidad temporal de lectura; clasificación previa de valores; conservación prolongada de ambos campos.

**Condición para resolver.** Inventario de usos, schema objetivo, tabla de correspondencias, estrategia de compatibilidad, consumidores identificados, validaciones, rollback y autoridad de deprecación.

**Plan de migración requerido.** Clasificar cada valor; convertirlo en relación específica o `related-to`; actualizar consumidores e índices; conservar compatibilidad temporal; deprecar solo después de verificar contenido e integración.

**Artefactos afectados.** Modelo, contenido, schemas, validadores, índices, reportes, lotes de corrección y consumidores.

### decision-0013-symmetric-relations-storage — Representación física de relaciones simétricas

| Campo | Valor |
|---|---|
| `status` | `proposed` |
| `decisionType` | `pending-resolution` |
| `decisionAreas` | `architecture` |
| `dateProposed` | `2026-07-20` |
| `owners` | Arquitectura; Codex; relaciones |
| `implementationStatus` | `not-started` |
| `authorityRefs` | `docs/05-relationship-rules.md`; `docs/08-production-batches.md`; `docs/09-quality-criteria.md` |
| `relatedDecisions` | `decision-0007-relationship-governance` |

**Contexto.** La semántica aprobada establece una sola arista lógica para relaciones simétricas.

**Problema.** La representación física quedó reservada para schemas e integración.

**Opciones.** Persistir una sola arista con orden canónico; persistir ambos extremos; persistir un extremo y generar la inversa; utilizar una representación normalizada intermedia.

**Regla de contención vigente.** No se escriben ambos lados de forma contradictoria ni se infiere autoridad desde la UI. La semántica y el conteo de una sola arista lógica permanecen vigentes.

**Condición para resolver.** Schema candidato, análisis de edición y diff, resolución determinista, validación de duplicados, efecto en consultas, migración y rollback.

**Artefactos afectados.** Schema relacional, validadores, integración, índices, reportes y build.

### decision-0014-certification-issuer-model — Modelo de emisor de certificación

| Campo | Valor |
|---|---|
| `status` | `proposed` |
| `decisionType` | `pending-resolution` |
| `decisionAreas` | `taxonomy`, `architecture` |
| `dateProposed` | `2026-07-20` |
| `owners` | Taxonomía; modelo; relaciones |
| `implementationStatus` | `blocked` |
| `authorityRefs` | `docs/03-content-model.md`; `docs/05-relationship-rules.md` |
| `relatedDecisions` | `decision-0004-knowledge-classifications`; `decision-0007-relationship-governance` |

**Contexto.** `certification.issuer` identifica al emisor, pero no existe un tipo aprobado `organization` ni una relación persistible `certified-by`.

**Problema.** Normalizar el emisor como relación exigiría una identidad referenciable que la taxonomía no adopta actualmente.

**Regla de contención vigente.** `certification.issuer` conserva autoridad. No se inventa un ID, no se añade `organization` y no se utiliza `certified-by`.

**Alternativas a considerar.** Mantener texto estructurado; normalizar issuer como ID sin nuevo tipo; adoptar un tipo referenciable mediante cambio taxonómico; derivar relación solo cuando exista una entidad compatible.

**Condición para resolver.** Necesidad demostrada en inventarios, casos de reutilización, análisis de duplicados, autoridad taxonómica, migración y compatibilidad con certificaciones existentes.

**Artefactos afectados.** Taxonomía, modelo de certificación, relaciones, schemas, inventarios y migración.

### decision-0015-dark-mode-delivery — Entrega de modo oscuro

| Campo | Valor |
|---|---|
| `status` | `proposed` |
| `decisionType` | `pending-resolution` |
| `decisionAreas` | `product`, `ux`, `quality` |
| `dateProposed` | `2026-07-20` |
| `owners` | Producto; UX/UI; accesibilidad; arquitectura |
| `implementationStatus` | `not-started` |
| `authorityRefs` | `docs/06-design-boundaries.md`; `docs/07-mvp-definition.md`; `docs/09-quality-criteria.md` |
| `relatedDecisions` | `decision-0008-content-design-separation`; `decision-0009-mvp-scope` |

**Contexto.** Modo claro y oscuro es `Should have`, mientras responsive design y un tema accesible son obligatorios.

**Problema.** Debe decidirse si ambos temas entran en la primera publicación o si el modo oscuro se aplaza sin afectar valor, accesibilidad ni significado.

**Regla de contención vigente.** El modo oscuro no se presume incluido ni excluido. Puede aplazarse solo mediante decisión justificada y con un tema base accesible. El contenido no depende del tema.

**Condición para resolver.** Antes de cerrar el alcance técnico del MVP deben existir estimación de esfuerzo, sistema base accesible, riesgos, impacto en build y pruebas, y decisión de producto.

**Artefactos afectados.** Arquitectura frontend, sistema visual, pruebas de accesibilidad, build candidato y alcance de publicación.

### División del asunto operacional combinado

El asunto inicialmente descrito como responsables, calendarios y métricas se divide en tres decisiones porque posee autoridades, evidencia, condiciones de resolución y consecuencias independientes. Agruparlo impediría cerrar una parte sin aceptar las demás.

### decision-0016-operational-ownership — Responsabilidad y autoridad operativa

| Campo | Valor |
|---|---|
| `status` | `accepted` |
| `decisionType` | `pending-resolution` |
| `decisionAreas` | `operational` |
| `dateProposed` | `2026-07-20` |
| `dateDecided` | `2026-07-21` |
| `effectiveFrom` | `2026-07-21` |
| `decisionMaker` | Responsable del proyecto |
| `owners` | Responsable del proyecto |
| `implementationStatus` | `verified` |
| `authorityRefs` | `docs/03-content-model.md`; `docs/08-production-batches.md`; `docs/09-quality-criteria.md`; contratos de `work/` |
| `relatedDecisions` | `decision-0010-production-strategy`; `decision-0011-quality-model` |

**Contexto.** Los contratos ya separan coordinación, producción, revisión, validación técnica, integración, cierre y publicación, pero la autoridad final y las reglas de delegación permanecían sin asignación estable.

**Decisión.**

- El usuario propietario de IT Study y del repositorio `tueks/it-study` es el **Responsable del proyecto** y la autoridad final de aprobación.
- El Responsable del proyecto conserva la decisión final sobre alcance, contratos normativos u operativos, decisiones materiales, excepciones, autorización y aceptación de lotes, cierre de fases y publicación.
- El chat coordinador puede preparar alcance, coordinar el flujo, consolidar evidencia y registrar decisiones expresamente aprobadas; no sustituye la aprobación del Responsable del proyecto.
- ChatGPT Trabajo y otros agentes de autoría pueden investigar, proponer, redactar, autoevaluar y corregir borradores; no pueden aprobar su propio contenido, aceptar su propio lote ni publicar.
- La revisión independiente evalúa las perspectivas asignadas, clasifica hallazgos y emite una recomendación. La autoría y la revisión independiente de una misma unidad no pueden recaer en el mismo participante.
- Codex puede validar, integrar técnicamente y mantener el repositorio dentro de un alcance autorizado; no concede aprobación editorial, no resuelve semántica y no amplía permisos por capacidad técnica.
- No existe sustitución ni delegación permanente implícita. Toda delegación debe ser explícita, registrarse en un artefacto estable del repositorio e indicar autoridad delegante, persona o rol delegado, alcance, transiciones permitidas, vigencia y condición de revocación.
- Cuando no exista una delegación aplicable, las transiciones que requieran autoridad final permanecen pendientes hasta la decisión del Responsable del proyecto.
- Los conflictos de interés, de autoridad o de interpretación se escalan al Responsable del proyecto. Ningún participante puede resolverlos ampliando silenciosamente su propio permiso.

**Justificación.** Una autoridad final inequívoca permite ejecutar lotes y cambios sin convertir agentes, revisores o capacidad técnica en fuentes de aprobación. La delegación explícita conserva trazabilidad y permite ampliar el equipo posteriormente sin reabrir el modelo de gobierno.

**Consecuencias.**

- Los contratos operativos pueden identificar al Responsable del proyecto como autoridad final.
- Las asignaciones concretas de autoría, revisión, integración o QA se registrarán por lote o entrega.
- La falta de una persona asignada a revisión independiente bloquea la aprobación de la unidad afectada, no autoriza autoaprobación.
- Las decisiones `decision-0012` a `decision-0015`, `decision-0017` y `decision-0018` conservan su estado `proposed`.

**Artefactos afectados.** `AGENTS.md`, contratos de `work/`, manifiestos, reportes de revisión, handoffs, fases, cierre y publicación.

### decision-0017-review-calendars — Calendarios de revisión por estabilidad

| Campo | Valor |
|---|---|
| `status` | `proposed` |
| `decisionType` | `pending-resolution` |
| `decisionAreas` | `operational`, `quality` |
| `dateProposed` | `2026-07-20` |
| `owners` | Calidad; fuentes; mantenimiento |
| `implementationStatus` | `not-started` |
| `authorityRefs` | `docs/03-content-model.md`; `docs/04-editorial-guidelines.md`; `docs/07-mvp-definition.md`; `docs/09-quality-criteria.md` |
| `relatedDecisions` | `decision-0011-quality-model` |

**Problema.** Se aprobaron categorías de estabilidad y `reviewDueAt`, pero no frecuencias uniformes ni calendario operacional.

**Regla de contención vigente.** No se inventa una periodicidad única. Cada fecha se justifica por estabilidad, versión, riesgo, disponibilidad de fuentes y uso como dependencia.

**Condición para resolver.** Definir políticas por `stable-foundation`, `slow-evolution`, `versioned-standard`, `changing-technology`, `changing-tool-product`, `emerging` y señales de revisión extraordinaria.

**Artefactos afectados.** `work/SOURCE-POLICY.md`, `work/REVIEW-CHECKLIST.md`, metadatos, mantenimiento y política de `needs-update`.

### decision-0018-final-technical-metrics — Métricas técnicas finales

| Campo | Valor |
|---|---|
| `status` | `proposed` |
| `decisionType` | `pending-resolution` |
| `decisionAreas` | `architecture`, `ux`, `quality` |
| `dateProposed` | `2026-07-20` |
| `owners` | Arquitectura; UX/UI; QA; calidad |
| `implementationStatus` | `blocked` |
| `authorityRefs` | `docs/07-mvp-definition.md`; `docs/09-quality-criteria.md` |
| `relatedDecisions` | `decision-0009-mvp-scope`; `decision-0011-quality-model` |

**Problema.** Las puertas funcionales están aprobadas, pero métricas finales de rendimiento, búsqueda, accesibilidad técnica, disponibilidad y operación dependen de arquitectura y flujos concretos.

**Regla de contención vigente.** No se inventan umbrales ni se seleccionan herramientas. Cero referencias internas rotas, accesibilidad mínima, build reproducible y flujos correctos siguen siendo puertas.

**Condición para resolver.** Arquitectura candidata, diseño de flujos, entornos representativos, método de medición, presupuesto técnico, evidencia y responsables.

**Artefactos afectados.** Arquitectura, UX/UI, schemas de reportes, CI, pruebas, build y dossier de publicación.

## 23. Decisiones aceptadas posteriores a la línea base

### decision-0019-reference-artifacts-and-codex-contract — Aceptación de ejemplos, inventarios y contrato operativo

| Campo | Valor |
|---|---|
| `status` | `accepted` |
| `decisionType` | `change` |
| `decisionAreas` | `operational`, `quality` |
| `dateProposed` | `2026-07-21` |
| `dateDecided` | `2026-07-21` |
| `effectiveFrom` | `2026-07-21` |
| `decisionMaker` | Responsable del proyecto |
| `owners` | Responsable del proyecto; coordinación; Codex |
| `implementationStatus` | `verified` |
| `authorityRefs` | `docs/02-taxonomy.md`; `docs/03-content-model.md`; `docs/05-relationship-rules.md`; `docs/07-mvp-definition.md`; `docs/08-production-batches.md`; `docs/09-quality-criteria.md`; `docs/10-decision-log.md` |
| `evidenceRefs` | Commits `6efe369`, `eab876f`, `7cb67d2`, `d35b01d`, `244d72a`, `0a4ab8e`, `1bffe26`, `2063a94`, `2e8df0c`, `ad8d4ba` |
| `relatedDecisions` | `decision-0003-taxonomy-structure`; `decision-0004-knowledge-classifications`; `decision-0005-content-format-and-identifiers`; `decision-0007-relationship-governance`; `decision-0009-mvp-scope`; `decision-0010-production-strategy`; `decision-0011-quality-model` |

**Contexto.** Se generaron y verificaron cinco ejemplos canónicos no productivos, tres inventarios de planificación y el contrato operativo principal de Codex a partir de los documentos normativos aprobados. El responsable del proyecto comunicó la aprobación integral de estos nueve artefactos el 2026-07-21.

**Problema.** Era necesario registrar de forma estable el alcance exacto de la aprobación sin confundir la aceptación de los artefactos con los estados editoriales de las entradas demostrativas, los dominios planificados o los 164 candidatos.

**Decisión.**

- Se aprueban `examples/domain-example.md`, `examples/concept-example.md`, `examples/role-example.md`, `examples/comparison-example.md` y `examples/scenario-example.md` como ejemplos canónicos no productivos de los contratos vigentes.
- Se aprueban `inventories/domains.yaml`, `inventories/classifications.yaml` e `inventories/initial-terms.csv` como inventarios de definición y planificación para las fases posteriores.
- Se aprueba `AGENTS.md` como contrato operativo principal de Codex para todo el repositorio.
- Esta aprobación opera al nivel de los nueve artefactos. No cambia `editorialStatus`, `candidateStatus`, `verificationStatus` ni otro estado interno.
- Los ejemplos conservan `editorialStatus: draft` porque no son contenido productivo. Los dominios conservan `editorialStatus: planned` y los candidatos conservan `editorial_status: planned` y `verification_status: pending` hasta completar el flujo editorial aplicable.
- Ninguno de los 164 candidatos queda aprobado, integrado, publicado ni contabilizable como entrada terminada del MVP por efecto de esta decisión.
- `decision-0012` a `decision-0018` permanecen `proposed` y no se resuelven, anticipan ni implementan.
- La generación de `README.md` continúa fuera del alcance de esta aprobación y requiere una ejecución separada.

**Justificación.** La distinción entre aprobación documental, estado editorial y estado de lote preserva la semántica aprobada, evita que artefactos demostrativos o inventarios se traten como contenido publicable y permite usar una línea base revisada en trabajos posteriores.

**Alternativas consideradas.**

- Promover todas las filas y ejemplos a `approved`: rechazada porque omitiría producción, fuentes, revisión editorial y aceptación por lote.
- Registrar la aprobación solo en comentarios o en la conversación: rechazada porque no aportaría autoridad estable ni trazabilidad dentro del repositorio.
- Posponer la aceptación de los nueve artefactos: rechazada porque la revisión consolidada terminó sin contradicciones propias conocidas y el responsable del proyecto los aprobó expresamente.

**Consecuencias.**

- Los nueve artefactos pueden utilizarse como línea base aprobada dentro de su alcance declarado.
- La producción editorial, revisión, aceptación de lotes, integración y publicación conservan sus puertas independientes.
- Cualquier cambio material posterior deberá aplicar este registro y los contratos afectados.
- La aprobación no amplía el MVP ni autoriza arquitectura, framework, UI, backend o capacidades excluidas.

**Riesgos.**

- Consumidores posteriores podrían interpretar “aprobado” como sinónimo de contenido editorial `approved`.
- Los IDs demostrativos o provisionales podrían confundirse con IDs productivos.

**Mitigaciones.**

- Mantener las advertencias no productivas en `examples/` y las advertencias de planificación en `inventories/`.
- Validar estados internos y namespace antes de cualquier producción, handoff o integración.
- Citar esta decisión cuando se utilice la línea base.

**Artefactos afectados.**

- `examples/domain-example.md`;
- `examples/concept-example.md`;
- `examples/role-example.md`;
- `examples/comparison-example.md`;
- `examples/scenario-example.md`;
- `inventories/domains.yaml`;
- `inventories/classifications.yaml`;
- `inventories/initial-terms.csv`;
- `AGENTS.md`;
- `docs/10-decision-log.md`.

**Rollback.** Si se demuestra un defecto material, conservar esta entrada y el historial, revertir únicamente el cambio afectado mediante un commit explícito y registrar una decisión correctiva o sustituta con el alcance, la migración y la evidencia correspondientes.

### decision-0020-batch-plan-authorization — Autorización del plan de lotes y estado de continuidad

| Campo | Valor |
|---|---|
| `status` | `accepted` |
| `decisionType` | `change` |
| `decisionAreas` | `operational`, `quality` |
| `dateProposed` | `2026-07-21` |
| `dateDecided` | `2026-07-21` |
| `effectiveFrom` | `2026-07-21` |
| `decisionMaker` | Responsable del proyecto |
| `owners` | Responsable del proyecto; coordinación; Codex; producción |
| `implementationStatus` | `verified` |
| `authorityRefs` | `docs/08-production-batches.md`; `docs/09-quality-criteria.md`; contratos `work/`; `decision-0016-operational-ownership` |
| `evidenceRefs` | `PROJECT-STATUS.md`; `work/BATCH-AUTHORIZATION-REGISTER.md`; manifiestos y reportes de B001/B002 |
| `relatedDecisions` | `decision-0009-mvp-scope`; `decision-0010-production-strategy`; `decision-0011-quality-model`; `decision-0016-operational-ownership`; `decision-0019-reference-artifacts-and-codex-contract` |

**Contexto.** B001 y B002 fueron aceptados e integrados, pero el README y algunos campos de sus artefactos conservaban estados anteriores. El plan normativo B003–B042 existía sin una autorización operativa acumulativa, lo que obligaba a reconstruir el punto de continuidad desde varios documentos.

**Decisión.**

- Se reconcilian y cierran `batch-001-taxonomy-domains` y `batch-002-taxonomy-subdomains-core-a` con evidencia de 48/48 archivos idénticos entre entregas y fuentes canónicas, cero referencias de fuentes rotas y cero padres inexistentes.
- Se aprueba `PROJECT-STATUS.md` como punto de reanudación operativo, subordinado a las autoridades de `AGENTS.md` y actualizable después de cada transición material.
- Se aprueba `work/BATCH-AUTHORIZATION-REGISTER.md` y se autorizan los IDs planificados B003–B042 dentro del alcance, cantidades, dependencias, criterios de entrada y salida, riesgos y niveles definidos en `docs/08-production-batches.md`.
- B003–B032 quedan autorizados como plan base/objetivo. B033–B042 quedan expresamente autorizados como extensiones o correcciones opcionales, pero bloqueados hasta cumplir sus activadores, demostrar necesidad y cerrar las dependencias previas.
- La autorización reserva IDs de lote y permite preparar manifiestos. La producción de cada lote solo comienza cuando su manifiesto o instrucción equivalente contiene el alcance exacto, los candidatos o criterio autorizado, límites, dependencias, entregables y revisión, y la puerta de entrada está satisfecha.
- La selección concreta de entradas, IDs de contenido, fuentes y relaciones no se infiere del plan y debe registrarse antes de redactar.
- La autorización no cambia estados editoriales, no aprueba contenido futuro y no delega aceptación, integración, cierre o publicación.
- Las decisiones 0012–0015, 0017 y 0018 conservan `proposed`; cualquier dependencia material de ellas bloquea el alcance correspondiente.

**Justificación.** Una autorización acumulativa reduce ambigüedad entre sesiones sin eliminar las puertas que protegen identidad, dependencias, revisión y cobertura. El estado separado evita que el README, las conversaciones o un inventario de planificación se conviertan en autoridad paralela.

**Consecuencias.**

- B003 es la próxima preparación ejecutable; debe materializar un alcance exacto de 18 subdominios antes de redactar.
- Los lotes posteriores no requieren una nueva autorización general, pero sí su manifiesto exacto y el cumplimiento demostrable de dependencias.
- Un lote autorizado puede permanecer bloqueado; `authorized` no equivale a `in-production`.
- B001 y B002 no se reabren; cambios posteriores requieren un lote de corrección.
- Cierre no equivale a publicación y la aplicación web continúa fuera de alcance.

**Riesgos y mitigaciones.** El principal riesgo es interpretar la autorización general como permiso para producir listas abiertas o saltar dependencias. Se mitiga mediante el registro de puertas, el manifiesto exacto obligatorio, la comprobación inicial de cada sesión y la prohibición de inventar alcance.

**Artefactos afectados.** `PROJECT-STATUS.md`, `README.md`, `work/BATCH-AUTHORIZATION-REGISTER.md`, `docs/10-decision-log.md` y los manifiestos/resúmenes reconciliados de B001/B002.

**Rollback.** Conservar esta decisión y el historial. Una revocación debe identificar los lotes afectados, detener nuevas transiciones, preservar trabajo ya producido y registrar una decisión sustituta; no se reutilizan IDs ni se borran cierres históricos.

## 24. Matriz acumulativa de decisiones

| ID | Título | Tipo / áreas | Estado | Fecha | Fuente de autoridad | Artefactos afectados | Próxima acción | Responsable | Sustituye o asunto relacionado |
|---|---|---|---|---|---|---|---|---|---|
| `decision-0001-project-purpose` | Propósito del proyecto | `baseline` / product, editorial | `accepted` | 2026-07-20 | Docs `00`, `01` | Producto, contenido, MVP | Preservar ante cambios de propósito | Responsable del proyecto | — |
| `decision-0002-audience-depth` | Audiencia y profundidad | `baseline` / product, editorial | `accepted` | 2026-07-20 | Docs `01`, `03`, `04` | Fichas, rutas, revisión | Aplicar en inventarios y lotes | Contenido/editorial | Relacionada con 0001 |
| `decision-0003-taxonomy-structure` | Estructura taxonómica | `baseline` / taxonomy | `accepted` | 2026-07-20 | Doc `02` | Taxonomía, inventarios, navegación | Materializar sin tercer nivel | Taxonomía | — |
| `decision-0004-knowledge-classifications` | Clasificaciones de conocimiento | `baseline` / taxonomy, editorial | `accepted` | 2026-07-20 | Docs `02`, `03` | Modelo, fichas, filtros | Aplicar tipos específicos | Taxonomía/editorial | Relacionada con 0003 |
| `decision-0005-content-format-and-identifiers` | Formato e identificadores | `baseline` / architecture, operational | `accepted` | 2026-07-20 | Doc `03` | Contenido, schemas, referencias | Implementar validación literal | Codex/arquitectura | — |
| `decision-0006-editorial-language-policy` | Política editorial e idioma | `baseline` / editorial | `accepted` | 2026-07-20 | Doc `04` | Contenido y búsqueda | Aplicar en producción y revisión | Editorial | Relacionada con 0002 |
| `decision-0007-relationship-governance` | Gobierno de relaciones | `baseline` / taxonomy, quality, operational | `accepted` | 2026-07-20 | Doc `05` | Relaciones, navegación, validadores | Implementar catálogo sin reinterpretar | Relaciones/Codex | Relacionada con 0012–0014 |
| `decision-0008-content-design-separation` | Separación contenido-diseño | `baseline` / architecture, ux, quality | `accepted` | 2026-07-20 | Doc `06` | Contenido, UI, build, derivados | Ejecutar pruebas de sustitución | Arquitectura/UX/QA | — |
| `decision-0009-mvp-scope` | Alcance del MVP | `baseline` / product, quality | `accepted` | 2026-07-20 | Doc `07` | Inventarios, arquitectura, publicación | Producir mínimo antes de expansiones | Producto/coordinación | Relacionada con 0015 |
| `decision-0010-production-strategy` | Estrategia de producción | `baseline` / operational, quality | `accepted` | 2026-07-20 | Doc `08` | Lotes, reportes, integración | Operacionalizar en documentos `work/` | Coordinación | — |
| `decision-0011-quality-model` | Modelo de calidad | `baseline` / quality, operational | `accepted` | 2026-07-20 | Doc `09` | Entradas, lotes, build, publicación | Convertir en checklist, schemas y CI | Calidad/Codex | — |
| `decision-0012-related-relations-migration` | Migración de `related` | `pending-resolution` / architecture, operational | `proposed` | 2026-07-20 | Docs `03`, `05`, `08` | Modelo, schemas, consumidores | Diseñar y aprobar migración | Modelo/relaciones/arquitectura | Relacionada con 0007 |
| `decision-0013-symmetric-relations-storage` | Relaciones simétricas | `pending-resolution` / architecture | `proposed` | 2026-07-20 | Docs `05`, `08`, `09` | Schema, integración, índices | Evaluar representación física | Arquitectura/Codex | Relacionada con 0007 |
| `decision-0014-certification-issuer-model` | Emisor de certificación | `pending-resolution` / taxonomy, architecture | `proposed` | 2026-07-20 | Docs `03`, `05` | Certificaciones, relaciones, schema | Resolver con necesidad demostrada | Taxonomía/modelo | Relacionada con 0004 y 0007 |
| `decision-0015-dark-mode-delivery` | Entrega de modo oscuro | `pending-resolution` / product, ux, quality | `proposed` | 2026-07-20 | Docs `06`, `07`, `09` | Alcance técnico, UX/UI, build | Decidir antes del cierre técnico | Producto/UX/accesibilidad | Relacionada con 0008 y 0009 |
| `decision-0016-operational-ownership` | Responsabilidad y autoridad operativa | `pending-resolution` / operational | `accepted` | 2026-07-21 | Docs `03`, `08`, `09`; contratos `work/` | `AGENTS.md`, contratos `work/`, revisiones y publicación | Aplicar autoridad y registrar delegaciones por alcance | Responsable del proyecto | Relacionada con 0010–0011 |
| `decision-0017-review-calendars` | Calendarios por estabilidad | `pending-resolution` / operational, quality | `proposed` | 2026-07-20 | Docs `03`, `04`, `07`, `09` | Mantenimiento, `needs-update` | Definir frecuencias por riesgo | Calidad/fuentes | Relacionada con 0011 |
| `decision-0018-final-technical-metrics` | Métricas técnicas finales | `pending-resolution` / architecture, ux, quality | `proposed` | 2026-07-20 | Docs `07`, `09` | Arquitectura, UX/UI, QA, CI | Definir después de arquitectura | Arquitectura/UX/QA | Relacionada con 0009 y 0011 |
| `decision-0019-reference-artifacts-and-codex-contract` | Aceptación de ejemplos, inventarios y contrato operativo | `change` / operational, quality | `accepted` | 2026-07-21 | Docs `02`, `03`, `05`, `07`–`10` | `examples/`, `inventories/`, `AGENTS.md` | Usar como línea base sin promover estados internos | Responsable del proyecto; coordinación; Codex | Relacionada con 0003–0011 |
| `decision-0020-batch-plan-authorization` | Autorización del plan de lotes y estado de continuidad | `change` / operational, quality | `accepted` | 2026-07-21 | Docs `08`–`10`; contratos `work/` | `PROJECT-STATUS.md`; registro B003–B042; B001/B002 | Iniciar preflight y producción autorizada de B003 | Responsable del proyecto; coordinación; Codex | Relacionada con 0009–0011, 0016 y 0019 |

## 25. Relación con excepciones de calidad

Requieren decision log, entre otros:

- superar máximos del MVP;
- publicar con un hallazgo mayor;
- mantener `needs-update` fuera de tolerancia;
- aceptar contenido dependiente del diseño;
- relajar unicidad de IDs;
- omitir cobertura de un dominio;
- cambiar porcentajes;
- integrar contenido no aceptado;
- alterar autoridad entre capas;
- permitir una relación prohibida;
- cambiar estados, catálogo, cantidades o contratos;
- superar límites de concentración o profundidad;
- reabrir un lote cerrado sin un lote nuevo;
- aplazar una capacidad `Should have` cuando afecte el alcance técnico aprobado.

Este documento no autoriza ninguna excepción activa. Toda excepción futura debe cumplir las secciones 11 y 12 y figurar también en `exceptions-report.md`. Una excepción nunca permite contar contenido que no cumple la calidad base.

## 26. Relación con documentos y artefactos posteriores

| Documento o artefacto | Condicionamiento del decision log |
|---|---|
| `work/WORK-INSTRUCTIONS.md` | Debe indicar cuándo detener trabajo, proponer una decisión y comprobar autoridad. |
| `work/RESEARCH-PROTOCOL.md` | Debe conservar evidencia, incertidumbre, alternativas y preguntas que puedan originar decisiones. |
| `work/CONTENT-PRODUCTION-CONTRACT.md` | Debe exigir `decisionRefs`, autoridad, excepciones y prohibición de ampliar contratos. |
| `work/BATCH-TEMPLATE.md` | Debe incluir decisiones aplicables, propuestas, excepciones, migraciones y acciones. |
| `work/SOURCE-POLICY.md` | Debe enlazar cambios de política, conflictos y excepciones materiales con este registro. |
| `work/REVIEW-CHECKLIST.md` | Debe verificar decisiones vigentes, expiraciones, sustituciones y permisos. |
| `work/HANDOFF-TO-CODEX.md` | Debe entregar únicamente decisiones aceptadas y distinguir pendientes o excepciones. |
| `examples/` | Debe demostrar contratos vigentes; un ejemplo no puede introducir una decisión. |
| `inventories/` | Debe usar `decisionRefs`, respetar cantidades y mantener candidatos pendientes fuera de autoridad. |
| `AGENTS.md` | Debe obligar a agentes a consultar el registro y no reinterpretar decisiones. |
| Arquitectura técnica | Debe registrar dependencias duraderas, incompatibilidades, migraciones y riesgos materiales. |
| UX/UI | Debe registrar aplazamientos, impactos semánticos, accesibilidad y fallos de sustitución. |
| Schemas y validadores | Deben validar IDs, estados, referencias, sustitución, excepciones y campos condicionales sin decidir semántica. |
| CI | Debe detectar cambios materiales sin entrada y bloquear errores conforme a calidad. |
| Publicación | Debe verificar decisiones, excepciones vigentes, expiraciones, rollback y riesgo residual. |

## 27. Decisiones y pendientes del propio documento

### 26.1 Decisiones adoptadas

- convención `decision-NNNN-descriptive-name`;
- clasificación separada entre `decisionType` y `decisionAreas`;
- estados `proposed`, `under-review`, `accepted`, `rejected`, `superseded`, `deprecated`, `expired` y `cancelled`;
- plantilla normativa y reglas de omisión;
- autoridad y precedencia;
- proceso de propuesta;
- proceso de excepción;
- proceso de sustitución;
- proceso de migración;
- procedimiento urgente;
- responsabilidades;
- validaciones conceptuales;
- revisión basada en estabilidad, riesgo, expiración y cambio material;
- decisiones base `decision-0001` a `decision-0011`;
- asuntos pendientes `decision-0012` a `decision-0015`, `decision-0017` y `decision-0018`;
- resolución de autoridad operativa mediante `decision-0016-operational-ownership`.
- aceptación documental de ejemplos, inventarios y contrato operativo mediante `decision-0019-reference-artifacts-and-codex-contract`.

La siguiente secuencia disponible es `decision-0021-*`.

### 26.2 Reservado para documentos `work/`

- formato operativo de propuestas y firmas;
- aplicación de responsables y delegaciones conforme a `decision-0016-operational-ownership`;
- evidencia mínima por revisión;
- flujo de escalamiento y reenvío;
- ejecución de excepciones en lotes;
- políticas detalladas de fuentes y calendarios;
- paquete de handoff a Codex.

### 26.3 Reservado para Codex

- schema ejecutable del decision log;
- validadores de IDs, estados, referencias y ciclos;
- detección de modificaciones materiales;
- formato técnico de hallazgos;
- integración con CI;
- normalización física de relaciones simétricas;
- automatización de matrices y enlaces.

### 26.4 Reservado para arquitectura

- framework, lenguaje, generador estático y módulos;
- representación física de relaciones;
- motor e índice de búsqueda;
- build, cache, redirects, despliegue y rollback concreto;
- métricas técnicas finales;
- estrategia física de migración y compatibilidad.

### 26.5 Reservado para UX/UI

- arquitectura de información concreta;
- pantallas, componentes, layouts e interacción;
- sistema visual, tipografía, colores, iconografía y motion;
- representación de relaciones, comparaciones, escenarios, rutas y estados;
- decisión de modo oscuro;
- pruebas de usabilidad y métricas técnicas de accesibilidad.

### 26.6 Contradicciones encontradas

No se encontraron contradicciones materiales entre los documentos de autoridad `00` a `09`.

Se registran como tensiones o asuntos pendientes, no como contradicciones:

- coexistencia temporal de `related` y `relations[]`;
- representación física de relaciones simétricas;
- `certification.issuer` sin tipo `organization` ni relación `certified-by`;
- IDs documentales `DOM-01` a `DOM-12` distintos de IDs canónicos;
- modo claro/oscuro como `Should have`, aplazable solo con tema base accesible y decisión;
- delegaciones concretas por alcance, calendarios detallados por estabilidad y métricas técnicas finales reservados.

La discrepancia histórica entre `extended-reference` y `future-expanded-reference` ya fue resuelta por la autoridad del modelo y los lineamientos: el único enum vigente es `future-expanded-reference`; no permanece como decisión pendiente.

## 28. Cierre

Este registro establece la línea base trazable para explicar, mantener y cambiar las decisiones de IT Study. Las decisiones aceptadas son autoridad únicamente dentro de su materia y en coordinación con los contratos especializados. Las propuestas y asuntos pendientes permanecen visibles sin convertirse en reglas vigentes.

Ningún agente, revisor, lote, schema, código, configuración, conversación o decisión visual puede modificar silenciosamente el propósito, taxonomía, modelo, relaciones, fronteras, alcance, producción o calidad del proyecto. Todo cambio material debe conservar contexto, autoridad, consecuencias, migración y evidencia suficiente para reconstruir por qué se adoptó.
