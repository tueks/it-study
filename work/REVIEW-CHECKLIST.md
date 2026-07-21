# IT Study — Checklist operativo de revisión independiente

## 1. Identificación y propósito

| Campo | Valor |
|---|---|
| Proyecto | IT Study |
| Nombre oficial | IT Study — Checklist operativo de revisión independiente |
| Ruta oficial | `work/REVIEW-CHECKLIST.md` |
| Estado | **Propuesta pendiente de aprobación** |
| Versión | `0.1.0` |
| Fecha | `2026-07-20` |
| Autoridad de aprobación requerida | Responsable del proyecto, mediante instrucción explícita registrada |
| Ámbito | Revisión independiente de contenido, relaciones, fuentes, lotes, cobertura, estructuras editoriales, fases y evidencia asociada |

### 1.1 Documentos de autoridad

Este checklist se interpreta conforme a los siguientes documentos, en este orden:

1. `00-bootstrap-brief.md`;
2. `docs/00-project-charter.md`;
3. `docs/01-scope-and-audience.md`;
4. `docs/02-taxonomy.md`;
5. `docs/03-content-model.md`;
6. `docs/04-editorial-guidelines.md`;
7. `docs/05-relationship-rules.md`;
8. `docs/06-design-boundaries.md`;
9. `docs/07-mvp-definition.md`;
10. `docs/08-production-batches.md`;
11. `docs/09-quality-criteria.md`;
12. `docs/10-decision-log.md`;
13. `work/WORK-INSTRUCTIONS.md`;
14. `work/RESEARCH-PROTOCOL.md`;
15. `work/CONTENT-PRODUCTION-CONTRACT.md`;
16. `work/BATCH-TEMPLATE.md`;
17. `work/SOURCE-POLICY.md`.

Todos están aprobados en la fecha de elaboración. Sus asuntos expresamente pendientes conservan ese estado. En particular, `decision-0016-operational-ownership` y `decision-0017-review-calendars` permanecen `proposed`; este checklist no asigna responsables nominales, permisos no aprobados ni calendarios uniformes.

### 1.2 Propósito

Este documento materializa un procedimiento ejecutable manualmente para comprobar el cumplimiento de los contratos de IT Study, registrar evidencia, clasificar hallazgos, verificar correcciones y emitir una recomendación independiente sin confundir revisión con autoría, aceptación de lote, integración o publicación.

Debe permitir que una revisión pueda reconstruirse desde el repositorio sin depender de conversaciones, memoria del revisor, interfaces o herramientas específicas.

### 1.3 Audiencia

Se dirige al responsable del proyecto, coordinación, revisores independientes por perspectiva, responsables de producción, ChatGPT Trabajo, Codex y responsables de integración, calidad y mantenimiento, dentro de la autoridad asignada a cada rol.

## 2. Naturaleza, alcance y límites

Este documento sí define:

- condiciones para iniciar una revisión independiente;
- declaración de independencia y conflictos;
- perspectivas y alcance de revisión;
- checks completos y campos de evidencia;
- reglas de revisión al 100 % y muestreo autorizado;
- clasificación y disposición de hallazgos;
- procedimiento de devolución, corrección, reenvío y verificación;
- contenido mínimo del `review-report.md`;
- atestación del revisor por rol y recomendación final;
- criterios para recomendar `accepted`, `changes-requested` u otra disposición autorizada.

Este documento no:

- autoriza lotes ni producción;
- sustituye la autoevaluación del autor;
- crea severidades, puertas, tolerancias, estados o relaciones nuevas;
- asigna personas, grupos, permisos o delegaciones nominales;
- fija periodicidades uniformes;
- aprueba automáticamente contenido o lotes;
- integra contenido, ejecuta builds ni autoriza publicación;
- define schemas, validadores, CI, código, arquitectura o UX/UI;
- modifica fuentes, fichas o reportes durante la revisión;
- permite que ChatGPT Trabajo simule independencia;
- permite que Codex resuelva ambigüedad semántica;
- sustituye `work/HANDOFF-TO-CODEX.md` para recepción e integración técnica.

## 3. Precedencia y autoridad

Los documentos normativos aprobados prevalecen sobre los operativos; entre estos últimos se aplica el orden de la sección 1.1. El manifiesto vigente delimita el lote, pero no modifica contratos. Los reportes y el contenido constituyen evidencia del trabajo, no autoridad para alterar reglas.

Una conversación, comentario, resultado automático o recomendación no sustituye una decisión registrada. Una propuesta no es regla vigente. Toda excepción material requiere autoridad, vigencia y referencia conforme a `docs/10-decision-log.md`.

El revisor interpreta y aplica criterios vigentes, pero no crea política durante la revisión. Si un criterio es contradictorio, insuficiente o exige cambio material, debe emitir una `pregunta` o `propuesta de cambio` y escalar; no debe elegir silenciosamente una regla.

## 4. Principios de revisión independiente

1. **Independencia:** quien decide la conformidad no puede presentar su propia autoría como revisión independiente.
2. **Evidencia:** cada resultado debe poder verificarse mediante archivo, ID, sección, diff, fuente, validación o decisión estable.
3. **Impacto:** la severidad se determina por efecto, no por origen humano o automático.
4. **Cobertura:** ningún promedio compensa un incumplimiento de puerta.
5. **Trazabilidad:** check, hallazgo, respuesta, corrección, verificación y decisión deben enlazarse.
6. **Alcance:** se revisa el manifiesto vigente; no se exige trabajo fuera de alcance ni se tolera producción silenciosa adicional.
7. **Separación:** revisión, aceptación, integración, cierre y publicación son decisiones distintas.
8. **Conservación:** no se sobrescriben versiones, resultados brutos ni evidencia previa.
9. **Proporcionalidad:** el método puede adaptarse al riesgo solo donde el muestreo está autorizado.
10. **No autoaprobación:** autoevaluación y validación ayudan, pero no reemplazan juicio independiente.

## 5. Roles, independencia y conflictos

### 5.1 Roles operativos

| Rol | Función dentro de la revisión |
|---|---|
| Responsable del proyecto | Aprueba contratos, cambios materiales y excepciones dentro de su autoridad. |
| Coordinación | Confirma alcance, manifiesto, perspectivas requeridas, autoridad y transición del lote. |
| Responsable de producción / ChatGPT Trabajo | Entrega evidencia, responde hallazgos y corrige dentro del alcance; no asigna severidad final ni firma independencia. |
| Revisor independiente | Ejecuta checks, determina severidad final, dispone hallazgos, verifica correcciones y emite recomendación. |
| Revisor especializado | Evalúa la perspectiva autorizada: taxonomía, editorial, técnica, fuentes, relaciones, accesibilidad u otra vigente. |
| Codex | Ejecuta o conserva validaciones automatizables y reporta resultados; no decide semántica ni autoaprueba. |
| Responsable de integración | Actúa después de aceptación conforme al handoff futuro; no convierte integración en revisión editorial. |

### 5.2 Declaración de independencia

Antes de revisar se debe registrar:

| Campo | Valor esperado |
|---|---|
| Revisor por rol | `<role>` |
| Alcance de autoría previa | `<none-or-described-scope>` |
| Participación en investigación o producción | `<none-or-described-scope>` |
| Conflicto real, potencial o aparente | `<none-or-described-conflict>` |
| Mitigación o sustitución | `<not-applicable-or-authorized-disposition>` |
| Autoridad que confirmó la disposición | `<role-or-pending>` |
| Evidencia | `<stable-reference>` |
| Fecha | `<date-YYYY-MM-DD>` |

La independencia no exige desconocer el proyecto; exige que la persona o agente no presente como juicio independiente la misma decisión de autoría que produjo. Haber ejecutado una validación automática no convierte a Codex en revisor semántico.

Si existe conflicto material sin disposición autorizada, la perspectiva afectada queda `blocked`. Puede continuar una perspectiva separable si su independencia permanece demostrada.

### 5.3 Contención por decisión pendiente

Mientras `decision-0016-operational-ownership` siga `proposed`, se usan roles y no nombres. Ningún participante presume permiso para cambiar estados, aceptar excepciones, integrar o publicar. La ausencia de responsable nominal no autoriza autoaprobación.

## 6. Unidad, alcance y perspectivas

La unidad de revisión puede ser:

- entrada nueva o modificada;
- fuente;
- relación;
- dominio, subdominio o disciplina;
- comparación;
- escenario;
- ruta de aprendizaje;
- inventario autorizado;
- lote completo;
- fase;
- perfil acumulado del MVP;
- resultado de integración, build o publicación cuando el documento de autoridad lo requiera.

Cada revisión debe declarar:

- `batchId`, versión del manifiesto y versión de entrega;
- archivos y IDs incluidos;
- exclusiones y motivo;
- estado editorial y de lote observado, sin inferir equivalencia;
- perspectivas obligatorias y realmente aplicadas;
- checks al 100 %;
- muestreo autorizado;
- dependencias, decisiones y excepciones aplicables;
- limitaciones y elementos `not-verified`;
- puerta o decisión que la revisión pretende habilitar.

## 7. Perspectivas de revisión

| Perspectiva | Pregunta principal | Evidencia mínima | Revisión independiente |
|---|---|---|---|
| Integridad estructural | ¿La unidad puede validarse, resolverse y mantenerse? | Archivos, campos, IDs, referencias, estados y validación | Confirmación; automatización posible |
| Conformidad taxonómica | ¿Qué es y dónde tiene hogar? | Taxonomía, clasificación y matriz aplicable | Obligatoria |
| Calidad editorial | ¿Se comprende con precisión al nivel autorizado? | Ficha, lineamientos y checklist | Obligatoria |
| Precisión técnica y conceptual | ¿El significado, límites y afirmaciones son correctos? | Contenido, fuentes y revisión especializada | Obligatoria según tema |
| Fuentes y trazabilidad | ¿La evidencia cubre lo afirmado? | Registros, mapa de afirmaciones y `sources-report.md` | Obligatoria |
| Relaciones | ¿Cada conexión es válida, específica y educativa? | Aristas, autoridad, `sourceIds` y reporte | Obligatoria |
| Duplicados | ¿Existe una sola identidad por significado? | Consultas, aliases, versiones y disposición | Obligatoria |
| Vigencia y estabilidad | ¿La afirmación sigue siendo válida? | Fechas, versión, revisión, sustitución y disponibilidad | Obligatoria para contenido cambiante |
| Cobertura educativa | ¿El lote aporta lo autorizado sin conteo artificial? | `coverage-report.md` y contenido | Obligatoria |
| Balance del MVP | ¿La distribución acumulada respeta mínimos y límites? | Tablero y reportes acumulados | Obligatoria cuando aplique |
| Accesibilidad del contenido | ¿El significado es comprensible sin percepción o interfaz específica? | Contenido y revisión editorial/accesible | Obligatoria |
| Separación contenido-diseño | ¿La presentación puede cambiar sin reescritura semántica? | Fuentes canónicas, campos y pruebas | Obligatoria |
| Estructuras editoriales | ¿Comparaciones, escenarios y rutas cumplen su contrato? | Estructura y referencias aprobadas | Obligatoria cuando aplique |
| Calidad operativa del lote | ¿El paquete está completo, acotado y reconciliado? | Manifiesto, topología y reportes | Obligatoria |
| Integración y derivados | ¿Lo aceptado se incorporó sin cambio silencioso? | Diff y validación postintegración | Posterior a aceptación |
| Preparación para publicación | ¿Las puertas acumuladas y riesgos permiten publicar? | Dossier y autorizaciones | Fuera de la aceptación editorial ordinaria |

Una sola revisión puede cubrir varias perspectivas si la independencia, competencia y autoridad por rol están registradas. Combinar perspectivas no permite omitir evidencia ni atribuir competencia no demostrada.

## 8. Convenciones del checklist

### 8.1 Registro de cada check

| Campo | Uso |
|---|---|
| `checkId` | ID local único dentro de la revisión. |
| Perspectiva | Dimensión vigente de la sección 7. |
| Unidad/archivo | ID o ruta exacta. |
| Criterio | Pregunta comprobable, no instrucción vaga. |
| Autoridad | Ruta y sección aplicable. |
| Método | Inspección, comparación, validación, recálculo, trazado o muestreo autorizado. |
| Resultado | Valor de la sección 8.2. |
| Evidencia | Referencia estable y localización precisa. |
| `findingId` | Hallazgo asociado o `none-with-reason`. |
| Revisor por rol | Rol que ejecutó el check. |
| Fecha | `YYYY-MM-DD`. |
| Limitación/notas | Incertidumbre, alcance o dependencia. |

### 8.2 Resultados de check

| Resultado | Significado |
|---|---|
| `pending` | Check todavía no ejecutado; no permite cerrar la revisión. |
| `conforme` | Criterio aplicable satisfecho con evidencia. |
| `no-conforme` | Criterio incumplido; requiere `findingId`. |
| `blocked` | No puede ejecutarse por dependencia o decisión pendiente; requiere registro de impacto. |
| `not-applicable` | El criterio no aplica y el revisor justifica por qué. |
| `not-verified` | No se obtuvo evidencia suficiente; no equivale a conformidad y puede generar hallazgo. |

Estos resultados pertenecen a checks; no son estados editoriales, de lote, de hallazgo ni decisiones finales.

### 8.3 Reglas de uso

- Todo check obligatorio debe aparecer aunque resulte `not-applicable`.
- `not-applicable` y `not-verified` requieren razón.
- Todo `no-conforme` debe originar o enlazar un hallazgo.
- Un mismo hallazgo puede enlazar varios checks si comparte causa y alcance claramente delimitados.
- Checks distintos no deben agruparse si su severidad o corrección puede diferir.
- No se marca `conforme` por ausencia de error automático cuando el criterio exige juicio humano.
- No se calcula puntuación promedio ni porcentaje para sustituir puertas.

## 9. Revisión completa y muestreo

### 9.1 Revisión obligatoria al 100 %

Se revisan todas las unidades aplicables para:

- IDs, namespaces, referencias, campos obligatorios, enums, estados y fechas críticas;
- relaciones estructurales, dirección, cardinalidad, compatibilidad y ciclos;
- propiedades visuales prohibidas;
- cobertura, cantidades y porcentajes;
- todo contenido publicable;
- entradas centrales, fundamentos y conceptos puente;
- todas las comparaciones, escenarios y rutas;
- todos los entregables del lote;
- contenido `needs-update`, deprecaciones, migraciones y sustituciones;
- excepciones, decisiones y preguntas bloqueantes;
- cambios a contenido aprobado;
- elementos afectados por un fallo sistémico.

### 9.2 Muestreo permitido

Puede usarse únicamente para:

- estilo menor después de aprobación individual;
- consistencia secundaria en lotes homogéneos;
- enlaces externos de baja criticidad ya registrados;
- artefactos derivados repetitivos cuando la generación determinista está demostrada.

El plan debe registrar:

| Campo | Valor |
|---|---|
| Población | `<complete-population-and-count>` |
| Característica homogénea | `<evidence>` |
| Criterio de selección | `<risk-based-or-authorized-method>` |
| Tamaño | `<count-and-rationale>` |
| Riesgo | `<identified-risk>` |
| Checks incluidos | `<check-id-list>` |
| Checks excluidos | `<check-id-list-and-authority>` |
| Acción ante fallo | `<expand-to-100-percent-and-disposition>` |
| Autoridad | `<role-and-reference>` |

No se inventa porcentaje, fórmula o tamaño uniforme. Un fallo sistémico o indicio de heterogeneidad amplía la revisión al 100 % del alcance afectado. El muestreo nunca reemplaza validación estructural, revisión de contenido publicable ni independencia.

## 10. Evidencia admisible

Puede utilizarse:

- contenido y documentos canónicos del repositorio;
- manifiesto y reportes de lote versionados;
- fuentes normalizadas y mapa de afirmaciones;
- resultados brutos de validaciones realmente ejecutadas;
- diffs y commits reproducibles;
- reportes de investigación y revisión;
- decisiones y excepciones vigentes;
- pruebas de accesibilidad, sustitución, build o integración cuando apliquen;
- referencias estables autorizadas.

Una conversación aporta contexto, pero no es evidencia final suficiente. La autoevaluación no prueba independencia. Un resultado generado no sustituye la fuente canónica. Una validación no ejecutada debe figurar como no disponible; no se inventan herramienta, versión ni resultado.

La evidencia debe identificar archivo o ID, versión, sección o ubicación, fecha y relación con el criterio. Si contiene limitaciones, deben preservarse.

## 11. Clasificación de hallazgos

La severidad final pertenece al revisor independiente y se determina por impacto.

| Categoría | Significado | Efecto ordinario |
|---|---|---|
| `bloqueante` | Invalida significado, identidad, referencia, autoridad o seguridad; contradice contrato; impide cobertura o exige decisión previa. | Impide aprobación, integración y cierre del alcance afectado; no se aplaza dentro de él. |
| `mayor` | Defecto significativo que impide aprobar el elemento al nivel requerido. | Exige corrección y verificación; impide ordinariamente aprobación e integración. |
| `menor` | Defecto acotado sin cambio del significado central. | Se corrige o acepta explícitamente dentro de tolerancia limitada y no acumulativa. |
| `recomendación` | Mejora no obligatoria para la decisión actual. | No bloquea; queda registrada. |
| `pregunta` | Duda todavía no confirmada como defecto. | Bloquea si la respuesta es indispensable para identidad, precisión, alcance, referencia o seguridad. |
| `propuesta de cambio` | Sugiere modificar contrato, alcance, taxonomía, cantidades, relaciones o estados. | Se separa del lote y requiere autoridad; no se aplica silenciosamente. |

### 11.1 Registro mínimo

| Campo | Contenido |
|---|---|
| `findingId` | ID local único, estable entre reenvíos. |
| Unidad/archivo | Alcance exacto afectado. |
| Perspectiva y criterio | Check y dimensión de origen. |
| Descripción | Hecho observado, sin mezclar solución. |
| Severidad final | Categoría vigente. |
| Impacto | Significado, puerta, dependencia y cobertura afectados. |
| Evidencia | Referencia estable. |
| Autoridad | Documento y sección incumplidos. |
| Disposición | Estado operativo de la sección 12. |
| Responsable por rol | Rol que debe actuar. |
| Respuesta del autor | Aceptación, aclaración o disputa con evidencia. |
| Corrección | Archivo, diff y explicación. |
| Verificación | Método, evidencia, revisor y fecha. |
| Estado final | Disposición cerrada o abierta. |

No se rebaja severidad para mejorar conteos, permitir calendario o cerrar el lote. Un resultado automático conserva su categoría técnica en `validation-report.md`; el revisor documenta cualquier cambio de severidad y su fundamento.

## 12. Disposición de hallazgos

Los siguientes son estados operativos, no severidades:

| Estado | Uso | Condición de cierre |
|---|---|---|
| `open` | Hallazgo recibido sin tratamiento decidido. | Se asigna disposición con evidencia. |
| `accepted-for-fix` | Se acepta corregir dentro del alcance. | Corrección demostrada y verificada. |
| `needs-clarification` | Falta precisión del hallazgo. | Respuesta de autoridad y nueva disposición. |
| `disputed` | El autor aporta evidencia de desacuerdo sin borrar el hallazgo. | Revisor o autoridad decide con fundamento. |
| `resolved` | El revisor confirma que el criterio quedó satisfecho. | Verificación registrada; no basta afirmación del autor. |
| `deferred-by-authority` | Autoridad posterga con razón, riesgo y destino. | Condición autorizada o lote posterior cumplidos. |
| `requires-decision` | Resolver exige cambio material. | Decisión `accepted` y acción ejecutada. |
| `not-applicable` | Revisor o autoridad determina que no aplica. | Justificación y evidencia registradas. |

Un `bloqueante` no puede quedar `deferred-by-authority` dentro del alcance que pretende aceptarse. Un `mayor` solo puede aplazarse mediante decisión excepcional y el contenido afectado no cuenta para mínimos. `resolved` exige verificación independiente.

## 13. Puertas que debe evaluar la revisión

| Puerta | Pregunta de revisión | Evidencia | Resultado autorizado |
|---|---|---|---|
| 1. Entrada a producción | ¿El manifiesto estaba `authorized` y las dependencias existían? | `batch-manifest.md` | Autorizar, dividir, posponer o cancelar corresponde a coordinación. |
| 2. Entrega para revisión | ¿El paquete está completo y revisable? | Todos los entregables | `in-review` o devolución. |
| 3. Aprobación de entrada | ¿Hay cero bloqueantes/mayores, fuentes suficientes y estado válido? | Ficha y reportes | Estado editorial autorizado. |
| 4. Aceptación de lote | ¿El alcance, paquete y hallazgos permiten aceptar? | `review-report.md` y paquete | `accepted` o `changes-requested`. |
| 5. Integración | ¿Solo se integra contenido aceptado y ordinariamente `approved`? | Diff y validación postintegración | `integrated` o corrección; fuera de la revisión editorial ordinaria. |
| 6. Cierre | ¿Integración, cobertura, decisiones y acciones están actualizadas? | Dossier final | `closed`, corrección o cancelación documentada. |
| 7. Salida de fase | ¿Se cumplen criterios F0–F7 sin propagar bloqueos? | Reportes acumulados | Avanzar, continuar o retroceder. |
| 8. Contenido mínimo | ¿Mínimos, doce dominios, balance y estructuras son conformes? | Tablero y dossier | Declarar mínimo o autorizar corrección. |
| 9. Build candidato | ¿Build, referencias, flujos y accesibilidad son conformes? | Reporte técnico | Candidato o fallido; materia técnica posterior. |
| 10. Publicación | ¿Puertas previas, autorización humana y rollback están completos? | Dossier de publicación | Publicar, aplazar o retirar; fuera de este checklist editorial ordinario. |

La revisión registra evidencia y recomendación; no presume autoridad de transición. `accepted`, `integrated`, `closed` y publicado no son equivalentes.

## 14. Secuencia operativa de revisión

### 14.1 Preparación

1. comprobar versión del manifiesto y entrega;
2. verificar topología y encabezados;
3. confirmar alcance, exclusiones y dependencias;
4. registrar independencia y conflictos;
5. identificar perspectivas requeridas;
6. clasificar checks al 100 % y muestreo;
7. declarar herramientas disponibles y limitaciones.

### 14.2 Ejecución

1. revisar coherencia del paquete;
2. ejecutar o comprobar validaciones estructurales;
3. revisar contenido por perspectiva;
4. trazar afirmaciones a fuentes;
5. revisar relaciones, duplicados, vigencia y cobertura;
6. registrar cada check y evidencia;
7. crear hallazgos sin corregir silenciosamente el contenido;
8. reconciliar hallazgos con reportes y puertas.

### 14.3 Decisión inicial

1. confirmar que no quedan checks obligatorios `pending`;
2. evaluar `blocked`, `not-verified` y limitaciones;
3. asignar severidad final;
4. registrar disposición y responsable por rol;
5. emitir recomendación `accepted`, `changes-requested` u otra autorizada;
6. conservar la decisión final como `pending` hasta que actúe la autoridad correspondiente.

### 14.4 Corrección y reenvío

1. conservar entrega y revisión anteriores;
2. recibir respuesta individual por hallazgo;
3. revisar diff, fuentes, relaciones, clasificación y cobertura afectados;
4. repetir validaciones pertinentes;
5. verificar corrección, no solo declaración;
6. mantener el mismo `findingId`;
7. resolver, reabrir o cambiar disposición con fundamento;
8. emitir nueva recomendación para la versión de entrega.

## 15. Checklist de paquete y lote

- [ ] `batchId`, versión del manifiesto y versión de entrega coinciden en todos los reportes.
- [ ] El manifiesto estaba autorizado antes de iniciar producción.
- [ ] El alcance producido coincide con alcance, tipos, cantidad y límites autorizados.
- [ ] La topología de `work/BATCH-TEMPLATE.md` está completa y sin carpetas no permitidas.
- [ ] Todos los reportes existen, incluso cuando declaran cero con justificación.
- [ ] `content/new/` y `content/modified/` están separados.
- [ ] No existe contenido aprobado modificado fuera de alcance.
- [ ] `batch-summary.md` coincide con los reportes especializados.
- [ ] Previsto, producido, revisable, aprobado, aceptado e integrado no se confunden.
- [ ] Autoevaluación y validación se presentan como evidencia, no como independencia.
- [ ] `review-report.md` estaba reservado al revisor independiente.
- [ ] Cambios de alcance tienen nueva versión autorizada del manifiesto cuando son materiales.
- [ ] Reenvíos conservan versiones, diffs, respuestas y validaciones anteriores.
- [ ] Preguntas bloqueantes, duplicados materiales y excepciones están resueltos o excluidos del alcance aceptado.
- [ ] No existen contradicciones abiertas entre reportes.
- [ ] La recomendación final identifica puerta, hallazgos abiertos y siguiente acción.

## 16. Checklist de integridad estructural

- [ ] Cada archivo corresponde a una unidad y ubicación permitidas.
- [ ] IDs son únicos, válidos, estables, inmutables y no reutilizados.
- [ ] Namespaces corresponden al tipo de unidad.
- [ ] Referencias internas usan IDs existentes y resolubles.
- [ ] Campos obligatorios, tipos, enums, fechas y estados cumplen el modelo aprobado.
- [ ] Ausencias significativas están justificadas; no se inventan valores.
- [ ] Campos opcionales no duplican semántica de campos obligatorios.
- [ ] Estado editorial es compatible con evidencia y revisión.
- [ ] `batch` es el campo de ficha; no se inventó `batchId` dentro de entradas.
- [ ] Archivos modificados conservan ID y trazabilidad histórica.
- [ ] Deprecaciones y sustituciones registran fecha, motivo y `replacedBy` cuando aplica.
- [ ] No hay derivados editados como fuentes canónicas.
- [ ] Resultados automáticos se conservaron con herramienta, versión, alcance y limitaciones reales.

## 17. Checklist de conformidad taxonómica

- [ ] La unidad merece identidad canónica propia y no es alias, atributo o relación.
- [ ] El tipo específico y familia son correctos.
- [ ] Dominio primario responde al hogar conceptual, no al lugar de uso más visible.
- [ ] Subdominio pertenece al dominio y está aprobado.
- [ ] Disciplinas transversales se usan como facetas, no como segundo padre.
- [ ] Dominios secundarios tienen justificación sustantiva.
- [ ] Área editorial, dominio, subdominio y disciplina no se confunden.
- [ ] Roles, puestos, competencias y responsabilidades permanecen distinguidos.
- [ ] Conceptos, principios, paradigmas, metodologías, prácticas, procesos y técnicas no se mezclan.
- [ ] Arquitecturas, patrones, modelos y plataformas conservan fronteras.
- [ ] Estándares, protocolos, formatos, lenguajes, herramientas y productos no se confunden.
- [ ] Métricas, indicadores, artefactos y certificaciones conservan su tipo.
- [ ] Clasificaciones propias se atribuyen a IT Study y enlazan autoridad interna.
- [ ] Una ambigüedad material se escaló; no se resolvió por conveniencia de cobertura.

## 18. Checklist editorial

- [ ] Idioma principal, términos técnicos y nombres canónicos siguen lineamientos.
- [ ] Acrónimos se desarrollan cuando corresponde y no crean alias ambiguos.
- [ ] `summary`, definición, propósito, problema y contexto cumplen funciones distintas.
- [ ] La explicación es autónoma, clara y técnicamente precisa.
- [ ] La profundidad coincide con `knowledgeLevel`.
- [ ] No se convirtió reconocimiento o comprensión contextual en tutorial.
- [ ] Ejemplos aclaran sin depender de una marca o interfaz innecesaria.
- [ ] Ventajas, limitaciones e implicaciones están equilibradas.
- [ ] Confusiones frecuentes son reales y no inventan oponentes.
- [ ] La redacción distingue hechos, síntesis, incertidumbre y decisión editorial.
- [ ] No contiene promoción, ranking, garantía absoluta ni ganador universal.
- [ ] Marcas y productos se tratan con neutralidad.
- [ ] Información sensible permanece educativa, segura y no operativa fuera de alcance.
- [ ] No hay relleno para cumplir longitud, relaciones o conteos.
- [ ] Citas y paráfrasis respetan atribución, alcance y derechos.

## 19. Checklist técnico y conceptual

- [ ] La definición central es correcta y no circular.
- [ ] Alcance, límites y condiciones están explícitos.
- [ ] Causalidad no se infiere de correlación o cronología.
- [ ] Hechos históricos, versiones y sustituciones están verificados.
- [ ] Afirmaciones normativas identifican autoridad, jurisdicción y versión.
- [ ] Capacidades de productos están fechadas y atribuidas.
- [ ] No se universaliza terminología local o controvertida.
- [ ] Incertidumbre se delimita mediante `verificationStatus` y redacción adecuada.
- [ ] El contenido no contradice otra entrada aprobada sin registrar el conflicto.
- [ ] No existe información materialmente falsa, riesgosa u obsoleta.
- [ ] Una revisión especializada se solicitó cuando el riesgo o tema lo exige.
- [ ] Cambios conceptuales en contenido modificado están trazados a fuente, hallazgo o decisión.

## 20. Checklist de fuentes y trazabilidad

- [ ] Cada fuente tiene ID estable e identidad verificable.
- [ ] Autor u organización, título, tipo y URL o referencia están completos.
- [ ] `publicationDate`, `accessedAt`, versión, idioma y `sectionsUsed` aparecen cuando aplican.
- [ ] `authorityLevel` corresponde a la afirmación concreta.
- [ ] Disponibilidad se verificó con un valor aprobado.
- [ ] Cada afirmación central, normativa, temporal, comparativa o controvertida está mapeada.
- [ ] Estados del mapa de afirmaciones coinciden con la redacción transferida.
- [ ] `unsupported` y `conflicting` no se presentan como hechos confirmados.
- [ ] Una fuente de proveedor solo sostiene lo que puede demostrar dentro de su autoridad.
- [ ] Comparaciones y generalizaciones tienen contraste independiente suficiente.
- [ ] Diversidad e independencia son proporcionales al riesgo.
- [ ] Concentración por proveedor u organización está declarada.
- [ ] Fuentes secundarias no sustituyen primarias necesarias.
- [ ] Conflictos, limitaciones y fuentes descartadas están registrados.
- [ ] Fuentes no disponibles no se presentan como consultadas.
- [ ] Enlaces archivados o sustituidos conservan identidad y procedencia.
- [ ] No existen fuentes, citas, autores, fechas o resultados inventados.
- [ ] `sources-report.md`, contenido y relaciones reconcilian los mismos `sourceIds`.

## 21. Checklist de relaciones

- [ ] Cada relación responde una pregunta educativa concreta.
- [ ] Se usa la clave aprobada más específica; `related-to` es último recurso justificado.
- [ ] Origen y destino existen y son compatibles.
- [ ] Dirección, inversa, cardinalidad, simetría, transitividad y ciclos cumplen el catálogo.
- [ ] El campo de autoridad correcto persiste la relación.
- [ ] Inversas y relaciones simétricas no se duplican.
- [ ] Una relación derivada no se cuenta ni almacena dos veces.
- [ ] Notas están presentes solo cuando son obligatorias o aportan justificación.
- [ ] `sourceIds` respaldan relaciones factuales, históricas, temporales, normativas o comerciales cuando aplica.
- [ ] Evolución, influencia y sustitución tienen evidencia explícita.
- [ ] No se creó relación por navegación, coocurrencia o necesidad de conteo.
- [ ] Relaciones rechazadas, eliminadas, corregidas y pendientes están reportadas.
- [ ] Destinos futuros o no aprobados no cuentan como relaciones producidas.
- [ ] `relationship-report.md` coincide con fichas y cobertura.

## 22. Checklist de duplicados e identidad

- [ ] Se buscaron IDs, nombres canónicos, aliases, siglas, traducciones y variantes.
- [ ] Se compararon acepciones, versiones, productos y capacidades.
- [ ] Colisiones de alias y polisemia están identificadas.
- [ ] Coincidencias descartadas incluyen fundamento.
- [ ] Un posible duplicado material bloqueó solo la unidad afectada.
- [ ] No hubo fusión, cambio de ID o consolidación silenciosa.
- [ ] Decisiones existentes y autoridad requerida están referenciadas.
- [ ] Migraciones preservan IDs históricos y referencias consumidoras.
- [ ] Una sola entrada canónica representa cada significado aprobado.
- [ ] `duplicate-report.md` registra consultas, resultados y disposición final.

## 23. Checklist de vigencia y mantenimiento

- [ ] La categoría de estabilidad es correcta.
- [ ] `reviewedAt`, `reviewDueAt`, `validFrom`, `validUntil` y `verificationStatus` se usan según contrato.
- [ ] La fecha de revisión se justifica por riesgo y no por calendario inventado.
- [ ] Estándares versionados registran emisor, estado, sucesión y reemplazo.
- [ ] Tecnologías y productos cambiantes describen una versión o fecha verificable.
- [ ] Contenido emergente declara incertidumbre y revisión prioritaria.
- [ ] Contenido deprecado registra motivo, fecha y sustitución.
- [ ] Fuentes centrales siguen disponibles o tienen respaldo alternativo.
- [ ] Señales extraordinarias de revisión fueron atendidas.
- [ ] Contenido obsoleto o no confiable usa `needs-update` cuando corresponde.
- [ ] `needs-update` y deprecado no cuentan para mínimos.
- [ ] Volver a `approved` exige corrección, fuentes suficientes y nueva revisión independiente.

## 24. Checklist de cobertura y balance

- [ ] Línea base, aporte previsto, producido, `in-review`, aprobado, aceptado e integrado están separados.
- [ ] Entradas nuevas y modificadas se cuentan una sola vez.
- [ ] Dominio primario gobierna el conteo; dominios secundarios no duplican cobertura.
- [ ] Relaciones inversas derivadas no se cuentan dos veces.
- [ ] Propuestas externas al alcance no cuentan como producción.
- [ ] Borradores, `needs-update` y deprecados no cuentan como aprobados.
- [ ] Cobertura por dominio, subdominio, disciplina, tipo, prioridad, profundidad y estabilidad coincide con archivos.
- [ ] Fundamentos, conceptos puente y estructuras editoriales se distinguen.
- [ ] Mínimo, objetivo y máximo no se confunden.
- [ ] Los doce dominios y límites de concentración se evalúan cuando aplica la puerta.
- [ ] Balance refleja valor educativo, no solo cantidades.
- [ ] Deuda, vacíos y riesgo residual están explícitos.
- [ ] `coverage-report.md` reconcilia los demás reportes.

## 25. Checklist de accesibilidad cognitiva y separación de diseño

- [ ] Títulos, jerarquía y orden permiten comprensión lineal.
- [ ] El lenguaje no depende de color, posición, icono, hover, animación o gesto.
- [ ] Imágenes o diagramas no son la única fuente de significado.
- [ ] Terminología y acrónimos son comprensibles para la audiencia.
- [ ] Referencias y relaciones tienen texto significativo.
- [ ] La ficha no contiene HTML de presentación, CSS, componentes, layouts ni propiedades visuales.
- [ ] IDs no se confunden con slugs, URLs o rutas.
- [ ] Navegación no crea taxonomía ni relaciones.
- [ ] Contenido canónico no se duplica para una vista o dispositivo.
- [ ] Cambiar representación produciría diff semántico igual a cero.
- [ ] Derivados pueden regenerarse desde fuentes canónicas.
- [ ] Una excepción visual o técnica no se introdujo mediante contenido.

## 26. Checklist de estructuras editoriales

### 26.1 Comparaciones

- [ ] Existe razón educativa real para comparar.
- [ ] Entradas referenciadas están aprobadas.
- [ ] Dimensiones son equivalentes y valores completos.
- [ ] Similitudes, diferencias y orientación contextual son verificables.
- [ ] Fuentes son equilibradas.
- [ ] No existe ganador universal, promoción ni definiciones copiadas.

### 26.2 Escenarios

- [ ] Objetivo, contexto, participantes, secuencia, decisiones y resultado están completos.
- [ ] Participan al menos tres dominios sustantivos cuando el escenario cuenta para el mínimo.
- [ ] Conceptos, artefactos, riesgos y resultados usan IDs aprobados.
- [ ] La colaboración es sustantiva y plausible.
- [ ] El escenario es ilustrativo, seguro y no prescriptivo.
- [ ] No crea entidades o relaciones por conveniencia narrativa.

### 26.3 Rutas de aprendizaje

- [ ] Audiencia, objetivo, nivel, resultados y criterio de finalización están definidos.
- [ ] Entradas y prerrequisitos están aprobados.
- [ ] Orden y checkpoints tienen justificación pedagógica.
- [ ] Opcionales se distinguen de requisitos.
- [ ] No hay ciclos, saltos mayores ni dependencias inexistentes.
- [ ] No promete especialización práctica fuera de alcance.

## 27. Checklist de modificaciones, migraciones y deprecaciones

- [ ] El ID estable se conserva.
- [ ] Motivo y autoridad del cambio están registrados.
- [ ] Estado anterior y nuevo están identificados.
- [ ] Diff o resumen preciso cubre cambios semánticos.
- [ ] Fuentes añadidas y retiradas están justificadas.
- [ ] Relaciones afectadas fueron revisadas.
- [ ] Consumidores, estructuras y cobertura están reconciliados.
- [ ] Hallazgo o decisión de origen está enlazado.
- [ ] La nueva revisión requerida se ejecutó.
- [ ] Migraciones conservan compatibilidad e IDs históricos.
- [ ] Deprecaciones indican sustitución y tratamiento histórico.
- [ ] No se modificó contenido aprobado fuera del alcance.

## 28. Checklist de preguntas, excepciones y decisiones

- [ ] Cada pregunta identifica unidad, dimensión, impacto, bloqueo y autoridad.
- [ ] Preguntas no bloqueantes se distinguen de parciales, bloqueantes y materiales.
- [ ] Una pregunta bloqueante no se ocultó para recomendar aceptación.
- [ ] Cada excepción aplicada está `authorized`, vigente y enlazada a una decisión.
- [ ] Propuestas, excepciones rechazadas, expiradas o retiradas no se aplican.
- [ ] Regla, alcance, riesgo, mitigación, vigencia y condición de salida están completos.
- [ ] Ninguna excepción ordinaria vulnera reglas no exceptuables.
- [ ] Cambios materiales se separaron del lote y usan decision log.
- [ ] Decisiones `proposed` o `under-review` no se trataron como vigentes.
- [ ] Decisiones aceptadas, sustituidas, deprecadas o expiradas se interpretan según fecha y alcance.
- [ ] Excepciones y decisiones coinciden entre manifiesto, reportes y contenido.

## 29. Checklist de validaciones

- [ ] Solo se registran validaciones realmente ejecutadas.
- [ ] Nombre, tipo, versión, responsable por rol, fecha y alcance están presentes.
- [ ] Archivos, regla, resultado bruto e interpretación se conservan.
- [ ] Errores y advertencias no se suprimen.
- [ ] Limitaciones y elementos no automatizables están declarados.
- [ ] Validaciones no disponibles se indican explícitamente.
- [ ] Repeticiones posteriores a correcciones conservan diferencias entre ejecuciones.
- [ ] Un resultado automático no asigna por sí solo severidad final.
- [ ] El juicio humano no altera el resultado bruto.
- [ ] No se inventaron CI, validador, prueba, versión o ejecución.

## 30. Checklist para recomendación de aceptación

Antes de recomendar `accepted`, el revisor debe confirmar:

- [ ] Independencia y perspectivas requeridas documentadas.
- [ ] Alcance completo revisado o muestreo autorizado y conforme.
- [ ] Cero checks obligatorios `pending`.
- [ ] Todo `blocked` o `not-verified` tiene efecto resuelto.
- [ ] Cero hallazgos `bloqueante` abiertos.
- [ ] Cero hallazgos `mayor` abiertos en contenido aceptado.
- [ ] Menores corregidos o aceptados explícitamente dentro de tolerancia.
- [ ] Preguntas bloqueantes resueltas.
- [ ] Propuestas de cambio separadas.
- [ ] Excepciones autorizadas, vigentes y permitidas.
- [ ] Contenido aceptado tiene fuentes suficientes.
- [ ] Relaciones y duplicados son conformes.
- [ ] Cobertura es verificable y no duplicada.
- [ ] No existen propiedades visuales ni cambios silenciosos.
- [ ] Validaciones estructurales disponibles fueron superadas.
- [ ] Reportes y conteos están reconciliados.
- [ ] Evidencia y versiones se preservaron.
- [ ] La recomendación distingue aceptación de integración, cierre y publicación.

Si falla un requisito, la recomendación ordinaria es `changes-requested` para el alcance afectado. Contenido excluido, rechazado o propuesto fuera de alcance puede separarse sin impedir aceptación del resto cuando los contratos lo permitan y no se cuente.

## 31. Plantilla de ejecución de revisión

### 31.1 Encabezado

| Campo | Valor |
|---|---|
| `batchId` | `<batch-id>` |
| Versión del manifiesto | `<manifest-version>` |
| Versión de entrega | `<delivery-version>` |
| Versión de revisión | `<review-version>` |
| Revisor por rol | `<role>` |
| Independencia | `<confirmed-or-conflict-with-disposition>` |
| Perspectivas | `<authorized-value>` |
| Alcance | `<files-ids-and-exclusions>` |
| Muestreo | `<plan-or-not-applicable>` |
| Autoridades | `<relative-path-and-section-list>` |
| Limitaciones | `<none-or-described-limitations>` |
| Fecha | `<date-YYYY-MM-DD>` |

### 31.2 Registro de checks

| `checkId` | Perspectiva | Unidad/archivo | Criterio/autoridad | Método | Resultado | Evidencia | `findingId` | Revisor/fecha | Limitación |
|---|---|---|---|---|---|---|---|---|---|
| `<check-id>` | `<quality-dimension>` | `<entry-id-or-path>` | `<criterion-and-reference>` | `<method>` | `<check-result>` | `<stable-reference>` | `<finding-id-or-none>` | `<role-and-date>` | `<none-or-value>` |

### 31.3 Hallazgos

| `findingId` | Unidad | Perspectiva/criterio | Severidad | Impacto/puerta | Evidencia | Disposición | Respuesta | Corrección | Verificación/estado |
|---|---|---|---|---|---|---|---|---|---|
| `<finding-id>` | `<entry-id-or-path>` | `<required-value>` | `<authorized-severity>` | `<required-value>` | `<stable-reference>` | `<finding-disposition>` | `<pending-or-response>` | `<pending-or-diff>` | `<pending-or-verification>` |

### 31.4 Atestación y recomendación

| Campo | Valor |
|---|---|
| Alcance efectivamente revisado | `<required-value>` |
| Checks conformes/no conformes | `<reconciled-counts>` |
| Hallazgos abiertos por severidad | `<reconciled-counts>` |
| Excepciones aplicadas | `<exception-id-or-none>` |
| Limitaciones residuales | `<none-or-required-value>` |
| Atestación del revisor | `<role-confirms-review-was-performed-and-evidence-recorded>` |
| Recomendación | `<accepted-changes-requested-or-other-authorized-value>` |
| Puerta y siguiente acción | `<required-value>` |
| Revisor por rol | `<role>` |
| Fecha | `<date-YYYY-MM-DD>` |
| Evidencia estable | `<review-report-path-and-version>` |
| Decisión final autorizada | `pending` |
| Autoridad de decisión | `<role>` |

La atestación es un registro de responsabilidad por rol, alcance, fecha y evidencia. No inventa firma manuscrita, criptográfica, identidad nominal ni permiso. La recomendación del revisor no debe rellenar anticipadamente la decisión final.

## 32. Reenvío y verificación de correcciones

Cada reenvío debe:

- incrementar la versión de entrega sin sobrescribir la anterior;
- conservar versión del manifiesto salvo cambio material de alcance;
- responder cada `findingId`;
- identificar archivos modificados y diff;
- registrar fuentes añadidas o retiradas;
- registrar relaciones, clasificación y cobertura afectadas;
- repetir validaciones pertinentes;
- actualizar autoevaluación y reportes;
- declarar hallazgos no corregidos, disputados o que requieren decisión;
- solicitar nueva revisión de las partes afectadas.

El revisor debe verificar causa, corrección y efectos secundarios. Un hallazgo puede reabrirse si la corrección es insuficiente o introduce otro incumplimiento. Una nueva versión no borra severidad, disposición ni evidencia histórica.

Un cambio material de objetivo, alcance, tamaño, tipos, profundidad, dependencias, entregables o criterios requiere nueva versión autorizada del manifiesto y regreso al estado aplicable; no basta una nueva entrega.

## 33. Revisiones por variante

| Variante | Énfasis obligatorio | Puede ser `not-applicable` | Salida particular |
|---|---|---|---|
| Lote ordinario | Todas las perspectivas aplicables y aceptación | Solo criterios ajenos al contenido real | `accepted` o `changes-requested` |
| Investigación | Fuentes, mapa de afirmaciones, conflicto, candidatos y límites | Fichas finales si no estaban autorizadas | Evidencia suficiente para siguiente decisión; no aprobación de contenido inexistente |
| Taxonomía materializada | Clasificación, IDs, duplicados, migración y cobertura | Redacción extensa | Taxonomía conforme sin decisión silenciosa |
| Fundamentos/dominio/transversal | Precisión, cobertura, relaciones y balance | Estructuras no autorizadas | Dependencias utilizables y cobertura reconciliada |
| Estructuras editoriales | Contrato específico, IDs aprobados y accesibilidad | Entradas nuevas si no forman parte del alcance | Comparación, escenario o ruta conforme |
| Actualización/corrección | Diff, causa, fuentes, vigencia y regresión | Contenido nuevo | Corrección verificada y nueva revisión |
| Migración/deprecación | Identidad, consumidores, reemplazo, cobertura e historial | Producción educativa nueva | Trazabilidad y transición completas |
| Cierre | Reportes, disposiciones, integración y deuda | Producción nueva | Cierre autorizado sin abandono |
| Emergencia autorizada | Autoridad, riesgo, alcance mínimo, mitigación y revisión posterior | Solo lo expresamente autorizado | No relaja reglas no exceptuables |

La topología del lote no cambia por variante. Todos los reportes permanecen obligatorios y justifican resultados sin elementos.

## 34. Responsabilidades

### 34.1 Coordinación

- confirma alcance, perspectivas y autoridad;
- designa por rol conforme a permisos vigentes;
- dispone conflictos y transiciones;
- no convierte una recomendación en aceptación sin autoridad.

### 34.2 Responsable de producción

- entrega paquete completo;
- responde hallazgos y corrige dentro de alcance;
- conserva versiones y evidencia;
- no completa la decisión independiente.

### 34.3 Revisor independiente

- ejecuta checks y documenta limitaciones;
- determina severidad final;
- dispone y verifica hallazgos;
- emite recomendación respaldada;
- no modifica silenciosamente el contenido ni amplía contratos.

### 34.4 Revisores especializados

- revisan únicamente perspectivas para las que fueron autorizados;
- registran competencia, alcance y evidencia;
- escalan materias fuera de su autoridad.

### 34.5 Codex

- ejecuta o verifica controles automatizables aprobados;
- conserva resultados brutos y diffs;
- reporta referencias, campos o reglas rotas;
- no decide precisión, relevancia, suficiencia o aceptación semántica.

### 34.6 Responsable del proyecto

- aprueba el checklist y sus cambios materiales;
- decide excepciones y cambios contractuales;
- resuelve o mantiene pendientes las decisiones de ownership y calendarios.

## 35. Criterios de completitud del checklist

El documento es utilizable cuando permite comprobar que:

- cada perspectiva tiene checks concretos;
- cada check conserva autoridad, método, resultado y evidencia;
- independencia y conflictos son explícitos;
- revisión completa y muestreo no se confunden;
- severidad y disposición usan vocabularios distintos;
- ningún promedio sustituye puertas;
- hallazgos y correcciones son trazables entre versiones;
- la revisión no puede simularse con autoevaluación o validación;
- aceptación no se confunde con aprobación, integración, cierre o publicación;
- fuentes, relaciones, duplicados, cobertura y excepciones se reconcilian;
- checks no aplicables o no verificables tienen razón;
- firmas y responsables usan roles sin identidades inventadas;
- decisiones pendientes permanecen no vigentes;
- no se invaden handoff, schemas, CI, arquitectura o UX/UI;
- puede ejecutarse manualmente y automatizarse después sin cambiar su significado.

## 36. Asuntos reservados

Permanecen reservados:

- responsables nominales, grupos, sustituciones, delegaciones y permisos para `decision-0016-operational-ownership`;
- calendarios y periodicidades uniformes para `decision-0017-review-calendars`;
- recepción técnica, integración, rollback y derivados para `work/HANDOFF-TO-CODEX.md`;
- schemas, validadores, CI y automatización para Codex;
- términos, IDs, lotes, hallazgos y decisiones concretos para artefactos autorizados;
- arquitectura, framework, navegación visual, componentes y UX/UI;
- autorización final de publicación y operación del producto.

## 37. Decisiones, contradicciones y dependencias pendientes

### 37.1 Decisiones materializadas

Este checklist materializa sin cambiar su semántica:

- dimensiones, severidades, puertas, muestreo y evidencia de `docs/09-quality-criteria.md`;
- revisión por lote de `docs/08-production-batches.md`;
- independencia y corrección de `work/CONTENT-PRODUCTION-CONTRACT.md`;
- formato de `review-report.md` de `work/BATCH-TEMPLATE.md`;
- criterios de fuentes de `work/SOURCE-POLICY.md`;
- reglas de decisiones y excepciones de `docs/10-decision-log.md`.

### 37.2 Dependencias pendientes preservadas

`decision-0016-operational-ownership` permanece `proposed`. Se usan roles, declaración de conflicto y autoridad documentada; no se inventan nombres, delegaciones ni permisos.

`decision-0017-review-calendars` permanece `proposed`. Se revisa por estabilidad, riesgo y señales extraordinarias; no se inventa periodicidad uniforme.

Estas decisiones no impiden aprobar y utilizar el checklist dentro de las reglas de contención vigentes.

### 37.3 Contradicciones detectadas

No se detectaron contradicciones materiales entre autoridades aprobadas. La tensión entre permitir muestreo estructural de confirmación en `docs/08-production-batches.md` y exigir revisión al 100 % de elementos estructurales en `docs/09-quality-criteria.md` se resuelve por precedencia: los checks estructurales enumerados en calidad se ejecutan al 100 %; el muestreo solo puede confirmar aspectos secundarios expresamente permitidos.

### 37.4 Intervención requerida

El responsable del proyecto debe:

1. aprobar, rechazar o solicitar cambios a esta versión `0.1.0`;
2. mantener pendientes o resolver por separado `decision-0016` y `decision-0017`;
3. no tratar esta propuesta como autoridad vigente hasta registrar la aprobación.

## 38. Cierre

Este checklist convierte la calidad aprobada en una revisión independiente, trazable y repetible. Su resultado depende de evidencia y autoridad, no de promedios, volumen de checks ni confianza del autor.

Hasta aprobación explícita, este documento permanece como propuesta y no sustituye las reglas vigentes de sus autoridades.
