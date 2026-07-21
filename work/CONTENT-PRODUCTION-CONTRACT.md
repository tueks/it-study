# IT Study — Contrato operativo de producción de contenido

## 1. Identificación y propósito

| Atributo | Valor |
|---|---|
| Proyecto | IT Study |
| Nombre oficial | Contrato operativo de producción de contenido |
| Ruta | `work/CONTENT-PRODUCTION-CONTRACT.md` |
| Estado | Aprobado |
| Versión | `1.0.0` |
| Fecha | 2026-07-20 |
| Fecha de aprobación | 2026-07-20 |
| Autoridad de aprobación | Responsable del proyecto, mediante instrucción explícita registrada |

Son documentos de autoridad, en orden: `00-bootstrap-brief.md`; `docs/00-project-charter.md`; `docs/01-scope-and-audience.md`; `docs/02-taxonomy.md`; `docs/03-content-model.md`; `docs/04-editorial-guidelines.md`; `docs/05-relationship-rules.md`; `docs/06-design-boundaries.md`; `docs/07-mvp-definition.md`; `docs/08-production-batches.md`; `docs/09-quality-criteria.md`; `docs/10-decision-log.md`; `work/WORK-INSTRUCTIONS.md`; y `work/RESEARCH-PROTOCOL.md`.

Este contrato convierte esas reglas en obligaciones reproducibles de autoría. Rige la transformación de investigación registrada en borradores compatibles, su trazabilidad, autoevaluación, entrega, corrección y reenvío. Su alcance comprende unidades autorizadas de contenido, estructuras editoriales y registros auxiliares. Su audiencia son el responsable del proyecto, coordinación, ChatGPT Trabajo, otros agentes de autoría, revisores y Codex.

Formaliza activación, entrada, salida, modalidades, formato, identidad, campos, estados, redacción, evidencia, relaciones, control de cambios y responsabilidades. Reserva para otros documentos la autorización y plantilla de lote, la política detallada de fuentes, el checklist independiente, el handoff técnico, los inventarios, schemas, validadores, CI, arquitectura, UX/UI e integración.

## 2. Naturaleza contractual

Una vez aprobado, este documento obliga a ChatGPT Trabajo y a cualquier agente de autoría. Convierte normas en deberes de producción, pero no concede autoridad para modificar contratos o decisiones, autorizar lotes, seleccionar términos, aprobar contenido, sustituir revisión independiente, implementar schemas ni actuar como manifiesto, política de fuentes, checklist o handoff a Codex.

Su mera existencia no activa trabajo. El incumplimiento puede producir hallazgos bloqueantes, mayores o menores conforme a `docs/09-quality-criteria.md`; la severidad final pertenece al revisor independiente.

## 3. Precedencia

Ante cualquier duda se aplica:

1. documentos normativos aprobados;
2. decisiones `accepted` vigentes;
3. documentos operativos aprobados;
4. manifiesto autorizado;
5. inventario aprobado;
6. investigación registrada;
7. instrucciones compatibles del coordinador;
8. contenido previo no aprobado.

Este contrato no altera autoridades superiores. El manifiesto delimita el alcance concreto y la investigación respalda la redacción sin cambiar el modelo. Una propuesta no es autoridad y una conversación no sustituye evidencia ni decisión registrada. Una contradicción detiene solo la parte afectada: se registra con evidencia, impacto, alternativas y autoridad requerida, mientras continúa lo independiente.

## 4. Participantes

### 4.1 Responsable del proyecto

Decide asuntos materiales, excepciones, cambios contractuales y publicación final. Autoriza o delega explícitamente transiciones reservadas; no se presume delegación.

### 4.2 Chat coordinador

Autoriza alcance, proporciona el manifiesto vigente, resuelve o escala preguntas, controla cambios, recibe entregas, asigna revisión y decide aceptación, devolución o cancelación dentro de su autoridad. No convierte una instrucción incompatible en excepción tácita.

### 4.3 ChatGPT Trabajo

Produce solo lo autorizado; respeta contratos; usa investigación suficiente; redacta; registra fuentes, afirmaciones, aliases y relaciones; detecta problemas; autoevalúa; entrega evidencia; corrige defectos propios; conserva trazabilidad y no se autoaprueba.

### 4.4 Revisor independiente

Revisa estructura, semántica y evidencia; asigna severidad final; acepta, devuelve o recomienda disposición dentro de su autoridad; y verifica correcciones. No debe simularse mediante autoevaluación del autor.

### 4.5 Codex

En una fase posterior valida estructura, integra contenido aceptado, genera derivados y produce hallazgos técnicos. No corrige semántica silenciosamente, no convierte derivados en autoridad y no decide aprobación editorial.

Se preserva `decision-0016-operational-ownership`: se usan roles, no responsables nominales ni permisos supuestos.

## 5. Condiciones de activación

El contrato se activa para una unidad solo si existen lote autorizado, manifiesto vigente, candidato y tipo autorizados, dominio permitido, `knowledgeLevel`, prioridad, estado inicial, dependencias, ubicación de entrega, autoridades aplicables, criterios de aceptación e investigación suficiente o plan autorizado para completarla.

Antes de redactar deben poder resolverse identidad, alcance y dependencia central. Bloquean la parte afectada: identidad ambigua, posible duplicado material, tipo indeterminable, dependencia central faltante, fuente esencial inexistente o no verificable, alcance no autorizado y dependencia de una decisión pendiente. El bloqueo debe registrarse; no autoriza crear contenido provisional fuera de contrato.

## 6. Unidades de producción

Son unidades: dominio, subdominio, disciplina, entidad de conocimiento, fuente normalizada, comparación, escenario, ruta de aprendizaje, modificación de unidad existente y deprecación o sustitución autorizada.

- **Nueva:** identidad canónica autorizada que aún no existe.
- **Modificada:** identidad existente con cambio autorizado.
- **Migrada:** identidad o representación afectada por decisión aceptada y plan.
- **Deprecada:** identidad histórica retirada mediante autoridad.
- **Rechazada:** propuesta no aceptada, conservada según su historial.
- **Estructura editorial:** comparación, escenario, ruta, área o colección aprobada.
- **Metadato o registro auxiliar:** manifiesto, fuente, reporte, mapa o índice sin convertirlo por ello en ficha educativa.

Una relación es normalmente parte de una unidad o reporte; solo tendrá archivo independiente si un modelo aprobado le concede identidad.

## 7. Modalidades de trabajo

Cada modalidad debe figurar expresamente en el manifiesto o en una autoridad compatible que este referencie. “Estado esperado” significa recomendación o resultado sujeto a la autoridad indicada, no transición automática.

| Modalidad | Autoridad requerida | Archivo de destino | Evidencia mínima | Estado inicial | Estado esperado | Reportes afectados | Restricciones |
|---|---|---|---|---|---|---|---|
| Creación | Candidato e ID autorizados en manifiesto `authorized` | `content/new/<id>.md` | Investigación cerrada o suficiente; búsqueda de duplicados; clasificación; mapa de afirmaciones; fuentes y relaciones | `planned` | `draft`; recomendación de `in-review` solo al cumplir la sección 36 | Resumen, cobertura, fuentes, relaciones, duplicados, autoevaluación y validación; propuestas/preguntas/excepciones si existen | No crear identidad fuera del lote, reservar ID sin autoridad ni contar el borrador como aprobado. |
| Modificación | Manifiesto que nombre el ID, motivo, alcance y archivos modificables | `content/modified/<id>.md` | Estado e historial previos; diff previsto; fuentes vigentes; dependencias, consumidores y relaciones afectadas | Estado real registrado; si es `approved`, solo mediante modalidad autorizada de la sección 44 | Ordinariamente `draft` o `in-review` tras corrección; cualquier conservación/transición adicional requiere autoridad | Todos los anteriores, más resumen del diff e impacto de cobertura | Conservar ID; cambiar solo lo autorizado; no mezclar defectos incidentales. |
| Corrección | Lote abierto, reenvío por hallazgo o lote de corrección autorizado | `content/new/` si la unidad aún pertenece a creación del mismo lote; en otro caso `content/modified/` | Hallazgo, criterio infringido, evidencia, diff y validaciones repetidas | Estado de la entrega devuelta o del contenido objeto del lote | `draft` corregido y eventual nueva recomendación de `in-review` | Reportes afectados por el defecto, respuesta a hallazgos, autoevaluación y validación | No cambia identidad, contrato, clasificación material ni alcance; si los cambia, deja de ser corrección. |
| Ampliación de profundidad | Manifiesto que autorice el paso de `knowledgeLevel` y sus límites | `content/modified/<id>.md`, salvo creación aún no entregada | Justificación educativa; deuda previa; investigación adicional; campos/secciones activados y diff | `recognition` u otro nivel aprobado inferior | `draft` con el nuevo nivel completo; posible recomendación de `in-review` | Resumen, cobertura por profundidad, fuentes, relaciones, autoevaluación y validación | No ampliar por popularidad, longitud, disponibilidad de texto o ajuste de porcentajes. `future-expanded-reference` no se produce ordinariamente. |
| Actualización | Lote autorizado por vigencia, versión o evidencia nueva | `content/modified/<id>.md` | Señal de cambio; versión anterior/nueva; fechas; verificación; fuentes añadidas/retiradas; U1/U2/U3 si aplica | `approved`, `needs-update` u otro estado real autorizado | `draft` o `in-review`; retorno a `approved` solo por revisión y autoridad | Fuentes, cobertura, relaciones, resumen, autoevaluación, validación y preguntas | Trabajo identifica riesgo y propone disposición; no asigna estado final ni mantiene como vigente información materialmente falsa. |
| Deprecación | Decisión o instrucción expresa del responsable autorizado y lote correspondiente | `content/modified/<id>.md` | Motivo, fecha, estado anterior, fuentes, referencias, dependencias, cobertura, visibilidad propuesta y sustituto si existe | Ordinariamente `approved` o `needs-update` | Propuesta preparada; `deprecated` solo tras autoridad final | Resumen, cobertura, relaciones, fuentes, validación, excepciones/preguntas y revisión | Conservar ID e historia; no eliminar; no contar para mínimos; Trabajo no autoriza la disposición. |
| Sustitución | Autoridad expresa sobre unidad sustituida y sustituto aprobado | `content/modified/<id>.md` para cada unidad autorizada afectada | Justificación, `replacedBy`, diff, referencias entrantes, ciclos, dependencias, cobertura y plan de actualización | Estado real de cada unidad | Propuesta revisable; estados finales según decisión de sustitución/deprecación | Resumen, relaciones, cobertura, duplicados, fuentes, validación y revisión | No inventar sucesor, crear ciclos, borrar identidad histórica ni actualizar consumidores fuera del alcance. |
| Migración | Decisión `accepted`, plan de migración y manifiesto que autorice su ejecución | `content/modified/` y demás destinos expresamente incluidos en el plan | Mapa anterior→vigente; inventario; compatibilidad; consumidores; diff atómico; validaciones; rollback; impacto en fuentes, relaciones y cobertura | Estados e identidades registrados antes de migrar | Estados definidos por el plan; nunca se presume `approved` | Todos los reportes afectados, tabla de migración/evidencia autorizada, validación y revisión | No resolver mediante ejecución un `pending-resolution`; no migrar parcialmente si rompe referencias o atomicidad. |

## 8. Contrato de entrada de trabajo

Antes de producir, Trabajo debe recibir o confirmar: `batchId` del manifiesto; versión; estado `authorized`; objetivo; alcance; tipo de lote; fase; unidades; archivos modificables; tipos, dominios, prioridades, profundidades y estabilidad esperados; tamaño máximo; dependencias; exclusiones; autoridades; investigación; entregables; perspectivas de revisión; fecha o condición de entrega; y ubicación.

Pueden permanecer abiertas preguntas no materiales, ejemplos concretos, relaciones opcionales aún no afirmadas y fuentes complementarias, siempre registradas y sin ocultar deuda. Bloquean: identidad, autorización, tipo, dominio material, profundidad mínima, estado inicial, archivo de destino, dependencia central, máximo, criterio de aceptación, fuente esencial, contradicción normativa o decisión pendiente que afecte el resultado.

`batchId` identifica el lote en manifiestos y reportes. Dentro de una ficha, el nombre normativo aprobado es `batch`; no se inventa `batchId` como campo de ficha.

## 9. Contrato de salida

Cada unidad entrega archivo fuente, identidad, clasificación, contenido aplicable, `sources`, relaciones, aliases, vigencia, `batch`, versión contractual, autoevaluación, preguntas y limitaciones, diff si fue modificada y recomendación de siguiente estado. La evidencia debe enlazar afirmaciones, fuentes, decisiones, investigación y cambios.

Cada lote entrega, sin alterar estructura, los reportes de la sección 46. Todo conteo y estado debe ser reconciliable con archivos reales. Una recomendación no cambia por sí misma el estado final.

## 10. Formato físico

Las fuentes editoriales son Markdown UTF-8 con frontmatter YAML, saltos LF, salto final, una identidad canónica por archivo, extensión `.md`, claves únicas y sin HTML de presentación, CSS ni propiedades visuales. Artefactos generados no son autoridad.

El nombre de archivo será `<id>.md` cuando el manifiesto no establezca otra convención aprobada; será ASCII minúsculo, dígitos y guiones simples. La coincidencia facilita control pero el archivo no constituye identidad. En entregas, nuevas van a `content/new/` y modificadas a `content/modified/`. Archivos auxiliares se limitan a los reportes aprobados y no simulan fichas. La estructura canónica posterior a integración permanece reservada: la propuesta de `docs/03-content-model.md` no se eleva aquí a decisión final.

## 11. Identidad e IDs

Se usa `<namespace>-<semantic-key>` con namespaces aprobados (`domain`, `subdomain`, `discipline`, `entity`, `comparison`, `scenario`, `path`, `area`, `collection`, `source`) y patrón `^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$`. El ID es global, único, ASCII minúsculo, estable, no reutilizable e independiente de URL, slug, título, carpeta, idioma o vista. Las referencias usan IDs.

- ID existente: detener creación, comprobar identidad y registrar duplicado o colisión.
- Cambio de nombre: conservar ID; ajustar título, nombres y aliases con evidencia.
- Duplicado: no fusionar; escalar consolidación.
- División: requiere identidades nuevas, decisión y migración de referencias.
- Consolidación: requiere decisión, identidad superviviente y sustitución trazable.
- Colisión de alias: calificar, retirar propuesta ambigua o escalar; nunca ocultar polisemia.
- Migración: solo con decisión aceptada; `legacyIds` se usa únicamente entonces.

No se reserva definitivamente un ID sin autoridad del lote o planificación.

## 12. Frontmatter común

Rige `docs/03-content-model.md`. En la tabla, **Trabajo** propone y registra dentro del alcance; **coordinación** valida autorización, identidad, lote y cualquier valor reservado; el **revisor independiente** valida semántica, suficiencia, vigencia y transición; y **Codex**, posteriormente, valida forma, tipos y referencias sin decidir semántica. Cuando la propuesta dependa de una autoridad material, Trabajo solo la prepara.

| Campo aprobado | Quién propone / quién valida | Obligatorio u omisión | Evidencia requerida | Errores frecuentes prohibidos |
|---|---|---|---|---|
| `id` | Coordinación o planificación lo autoriza; Trabajo lo registra; revisor y Codex validan | Obligatorio en toda unidad; nunca se omite | Manifiesto, registro global, búsqueda de duplicados y namespace | Inventarlo, reutilizarlo, cambiarlo por título, derivar identidad de slug/ruta/URL. |
| `title` | Trabajo; revisor editorial | Obligatorio | Identidad, idioma y uso profesional | Marketing, ambigüedad no calificada, copiar el ID o forzar traducción artificial. |
| `canonicalName` | Trabajo; revisor taxonómico/editorial | Obligatorio en taxonomía y entidades; omitir solo en estructuras donde el modelo no lo exija | Investigación terminológica e identidad | Confundirlo con título, alias o ID; plural/variante arbitraria. |
| `englishName` | Trabajo; revisor editorial | Opcional; omitir si no difiere ni aporta búsqueda | Uso profesional verificable | Traducir artificialmente, duplicar sin propósito un alias o desplazar el nombre canónico. |
| `aliases` | Trabajo; revisor y control de duplicados | Opcional; omitir sin variantes reales | Búsqueda por nombres, siglas, traducciones, historia e idioma | Lista vacía, alias ambiguo, colisión oculta, polisemia encubierta o duplicación de identidad. |
| `legacyIds` | Plan de migración; Trabajo ejecuta; autoridad y Codex validan | Solo migración autorizada; en otro caso se omite | Decisión `accepted`, mapa anterior→vigente y verificación global | Usarlo para renombre simple, inventar IDs históricos o reutilizarlos. |
| `type` | Trabajo dentro de tipos permitidos; revisor taxonómico | Obligatorio en entidades y estructuras | Prueba de naturaleza, taxonomía y manifiesto | Inventar tipo, usar marca, palabra comercial o conveniencia visual. |
| `subtype` | Trabajo; revisor taxonómico | Condicional cuando el tipo lo requiera; si no aplica, se omite | Contrato específico del tipo | Inventar refinamiento, usar subtipo incompatible o rellenarlo por simetría. |
| `summary` | Trabajo; revisor editorial/técnico | Obligatorio para contenido publicable; no se omite al recomendar revisión | Afirmaciones centrales respaldadas y profundidad | Repetir título/definición, usar listas, promoción, vaguedad o detalle de implementación. |
| `definition` | Trabajo; revisor técnico/editorial | Obligatorio para entidades y taxonomía | Fuente definicional y fronteras del concepto | Circularidad, confundir propósito, historia o ejemplo con definición. |
| `problemSolved` | Trabajo; revisor técnico/editorial | Condicional para soluciones e implementaciones; opcional en otros; omitir si no aplica | Evidencia del problema y vínculo causal prudente | Inventar causalidad, duplicar `purpose`, prometer resultado absoluto. |
| `purpose` | Trabajo; revisor técnico/editorial | Obligatorio salvo fuente | Razón de existir o uso respaldado | Repetir definición, antropomorfismo, intención inventada o lenguaje promocional. |
| `primaryDomain` | Trabajo dentro del manifiesto; revisor taxonómico | Obligatorio para entidades salvo excepción justificada; no aplica del mismo modo a dominios/estructuras con contrato propio | Prueba de propósito principal y dominio existente | Elegir por mención, carpeta, autor o necesidad de balance. |
| `subdomains` | Trabajo; revisor taxonómico y Codex | Opcional; omitir si no hay ubicación específica | IDs existentes y `parentDomain` coincidente con `primaryDomain` | Subdominio de otro padre, tercer nivel implícito, duplicados o listas vacías. |
| `secondaryDomains` | Trabajo; revisor taxonómico | Opcional; solo aplicaciones sustantivas | Afirmación/relación de aplicación y dominio existente | Añadir por coocurrencia, simple mención, cuota o duplicar el principal. |
| `disciplines` | Trabajo; revisor taxonómico | Opcional | IDs de disciplinas existentes y aplicación transversal real | Inventar disciplina, duplicarla por dominio o convertirla en tercer nivel. |
| `prerequisites` | Trabajo; revisor educativo/relacional | Opcional; esperado solo cuando existe dependencia educativa real | IDs aprobados y justificación de aprendizaje | Autorreferencia, confundir orden de ruta con requisito o apuntar a borrador no aprobado como válido. |
| `related` | Trabajo solo bajo regla transitoria; revisor relacional | Opcional y transitorio; omitir si no aporta | ID existente y contención de `decision-0012` | Eliminarlo, deprecarlo, duplicarlo automáticamente en `relations[]` o usarlo como relleno. |
| `confusedWith` | Trabajo; revisor editorial/relacional | Opcional; esperado ante confusión material | IDs existentes y explicación de diferencia | Autorreferencia, asociación vaga, omitir explicación o persistir inversa incompatible. |
| `usedByRoles` | Trabajo; revisor taxonómico/relacional | Opcional | Destinos existentes de tipo `role` y evidencia de uso | Apuntar a `position`, inferir por popularidad o completar por cuota. |
| `responsibilities` | Trabajo; revisor de familia | Opcional/esperado en personas según tipo | Enunciado de obligación, alcance y referencias opcionales | Universalizar organización, confundir actividad con resultado o crear ficha sin autonomía. |
| `competencies` | Trabajo; revisor de familia | Opcional/esperado en roles y puestos | IDs existentes de tipo `competency` | Usar temas, herramientas o responsabilidades como competencia. |
| `examples` | Trabajo; revisor editorial/técnico | Opcional; incluir solo si aclara | Afirmaciones respaldadas, contexto y referencias aplicables | Tutorial, caso inseguro, hecho no respaldado, ejemplo circular o relleno. |
| `advantages` | Trabajo; revisor técnico/editorial | Opcional/esperado en soluciones e implementaciones cuando aplique | Evidencia contextual del beneficio | Marketing, absolutos, simetría forzada o duplicar `purpose`. |
| `limitations` | Trabajo; revisor técnico/editorial | Opcional/esperado en soluciones e implementaciones cuando aplique | Evidencia de frontera, compromiso o riesgo | Omitir para favorecer una marca, inventar desventaja o duplicar confusiones. |
| `contextNotes` | Trabajo; revisor editorial/técnico | Opcional; omitir sin variación real | Contexto, comunidad, región o acepción identificable | Cajón de sastre, duplicar definición, nota sin etiqueta o esconder polisemia. |
| `contextualTypes` | Trabajo; revisor taxonómico | Opcional para implementaciones con sentidos secundarios compatibles | Tipo válido distinto al principal, contexto y ciclo compatible | Crear varias fichas para filtros, introducir tipo inválido o esconder identidades incompatibles. |
| `brand` | Trabajo; revisor técnico/editorial | Opcional en herramienta, plataforma, servicio o producto; omitir en capacidad general | Nombre verificable y propietario cuando aplique | Usar marca como `type`, promoción o atribución no verificada. |
| `sources` | Trabajo; revisor de fuentes | Obligatorio para `in-review` o superior; antes puede ser condicional, nunca ficticio | Fuentes normalizadas realmente usadas, mapa de afirmaciones y disponibilidad | URL como ID, fuente no usada, inventada, central no verificable o lista vacía. |
| `relations` | Trabajo; revisor relacional y Codex | Opcional; solo relaciones persistibles válidas | Catálogo, IDs, compatibilidad, dirección, cardinalidad, ciclos y fuentes cuando correspondan | Clave provisional, inversa derivada, simétrica duplicada, navegación, relleno o destino pendiente contado. |
| `priority` | Trabajo dentro del manifiesto; coordinación y revisor validan | Obligatorio | Valor educativo, dependencia, transversalidad y audiencia | Popularidad, prominencia visual, marketing o reclasificación para porcentajes. |
| `knowledgeLevel` | Manifiesto/Trabajo; revisor valida suficiencia | Obligatorio | Profundidad autorizada y campos/preguntas cubiertos | Usar `depth`, medir longitud/dificultad o declarar nivel no alcanzado. |
| `stability` | Trabajo; revisor de vigencia | Obligatorio | Ritmo de cambio, gobernanza, versión y riesgo | Popularidad, estado editorial, calendario inventado o `deprecated` sin disposición. |
| `editorialStatus` | Trabajo puede asignar `draft` y recomendar/asignar `in-review` conforme al flujo; autoridad valida estados reservados | Obligatorio | Estado previo, puerta cumplida, revisión y autoridad | Autoaprobar, saltar estados, contar borrador o asignar `deprecated`/`rejected` sin autoridad. |
| `owner` | Coordinación autoriza rol o responsable identificable; Trabajo registra; revisor valida | Condicional, obligatorio desde `draft`; no se omite si el estado lo activa | Asignación operativa vigente | Inventar persona, delegación o permiso; se preserva `decision-0016`. |
| `decisionRefs` | Trabajo propone referencias; revisor valida | Opcional; incluir solo decisiones existentes y relevantes | ID de decisión y relación material | Inventar decisión, enlazar propuesta como autoridad o copiar su contenido. |
| `batch` | Manifiesto/Trabajo; coordinación y Codex validan | Condicional, obligatorio para contenido producido por lote | `batchId` del manifiesto autorizado | Usar `batchId` como clave de ficha, lote inexistente o perder historial. |
| `createdAt` | Trabajo registra; revisor/Codex validan | Obligatorio | Fecha real de creación y commit, no futura | Sustituir fecha de migración/revisión, adivinar o cambiar en modificación. |
| `reviewedAt` | Revisor autorizado registra/valida | Condicional, obligatorio para `approved`; omitir si no hubo revisión | Revisión independiente completada | Autor lo rellena, fecha anterior a `createdAt` o usar autoevaluación. |
| `reviewDueAt` | Trabajo puede proponer; revisor/autoridad valida | Condicional cuando vigencia o estabilidad lo justifiquen; si no, omitir | Riesgo, versión, disponibilidad y dependencia | Calendario uniforme inventado, fecha sin fundamento o no posterior a revisión. |
| `validFrom` / `validUntil` | Trabajo; revisor de vigencia | Opcionales solo para hechos versionados/temporales | Fuente de vigencia y orden cronológico | Usarlos como fechas editoriales, inventarlos o crear intervalo inválido. |
| `verificationStatus` | Trabajo propone; revisor valida y puede confirmar | Obligatorio; `pending` antes de verificación, `uncertain` cuando corresponda | Verificación de afirmaciones, versión, fecha y disponibilidad | Marcar `verified` por confianza, ocultar conflicto o confundirlo con aprobación. |
| `reviewNotes` | Trabajo o revisor según origen; revisión valida permanencia | Opcional; omitir sin observación interna útil | Hallazgo, limitación o instrucción trazable | Sustituir historial/reporte, incluir presentación o esconder deuda sin estado. |
| `deprecated` | Trabajo solo prepara; autoridad valida | Obligatorio, predeterminado `false`; `true` solo con deprecación autorizada | Decisión, motivo, fecha e impacto | Activarlo para ocultar error, retirarlo silenciosamente o confundir estabilidad. |
| `deprecatedAt` | Trabajo prepara; autoridad/revisor valida | Condicional, obligatorio si `deprecated: true`; si no, omitir | Fecha efectiva de retiro | Fecha sin autoridad, anterior incoherente o usar fecha de hallazgo. |
| `deprecationReason` | Trabajo prepara; autoridad/revisor valida | Condicional, obligatorio si está deprecado | Decisión, evidencia y alcance del retiro | Motivo vago, visual, promocional o sin trazabilidad. |
| `replacedBy` | Trabajo propone; autoridad y revisor relacional validan | Condicional: obligatorio si existe sustituto; omitir si retiro sin reemplazo justificado | ID vigente, decisión, referencias y ausencia de ciclos | Autorreferencia, ciclo, destino inexistente o sustitución automática. |
| `contractVersion` | Trabajo registra; coordinación/Codex validan | Obligatorio | Versión aprobada aplicable al contenido | Usar versión propuesta como aprobada, omitirla o inventar compatibilidad. |

Los campos especializados de dominios, subdominios, disciplinas, familias, comparaciones, escenarios, rutas y fuentes conservan sus nombres, presencia y autoridad en `docs/03-content-model.md`; este contrato no los renombra ni convierte esta tabla en schema.

`updatedAt`, `sourceIds`, `batchId` y `depth` aparecen en el encargo como conceptos, pero no son nombres comunes aprobados por el modelo. No se incorporan como claves comunes de ficha: la actualización se prueba con historial, diff y fechas aprobadas; las fuentes de la unidad mediante `sources`; el lote mediante `batch`; y la profundidad mediante `knowledgeLevel`. `sourceIds` sí pertenece al mapa de afirmaciones y puede aparecer en una relación cuando el contrato relacional lo requiera. Si un futuro contrato aprobado adopta alguno como campo, su incorporación requerirá la autoridad y migración correspondientes.

## 13. Ausencia significativa

Un campo opcional no aplicable se omite: no se escribe `null`, “no aplica”, “ninguno” ni lista vacía; tampoco se duplica información o inventa un valor. Si el campo sería esperable por tipo, prioridad o profundidad, su ausencia se explica en autoevaluación. Un campo obligatorio o condicional activado no puede omitirse.

- **Opcional no aplicable:** se omite sin deuda.
- **Aplicable pero pendiente:** se registra como pendiente; si es necesario para revisión, bloquea.
- **Bloqueado:** se documenta causa, impacto, autoridad y reanudación.
- **Desconocido:** se investiga; no se convierte en afirmación.
- **No verificado:** se refleja en `verificationStatus` y evidencia.
- **Reservado para otra fase:** se reporta sin introducir el campo antes de tiempo.

La ausencia nunca oculta pendientes.

## 14. Estados editoriales

| Estado | Autoridad y metadatos | Modificación, cobertura y publicación |
|---|---|---|
| `planned` | Planificación autoriza; ID, tipo y propósito preliminar | No publicable ni contable; puede iniciarse autoría. |
| `draft` | Autor/Trabajo; `owner`, núcleo, clasificación y trazabilidad | Editable dentro del lote; no contable ni publicable. |
| `in-review` | Trabajo puede asignarlo o recomendarlo cuando el contrato está completo | Solo correcciones controladas; no contable ni publicable. |
| `approved` | Responsable autorizado tras revisión; `reviewedAt`, fuentes y vigencia verificadas | Único contenido ordinariamente publicable y contable; cambios solo por lote autorizado. |
| `needs-update` | Revisor, responsable o proceso autorizado; categoría U1/U2/U3 y hallazgo | No cuenta para mínimos; publicación condicionada por calidad y riesgo. |
| `deprecated` | Responsable autorizado; fecha, motivo y sustituto si existe | No vigente ni contable; conserva historia. |
| `rejected` | Revisor autorizado; motivo | No publicable ni contable; retorno a `planned` solo con evidencia y decisión. |

Trabajo produce ordinariamente `draft`, puede recomendar `in-review` y nunca decide `approved`. Tampoco decide por sí solo `needs-update`, `deprecated` o `rejected`. Prohibidas: autoaprobación; saltar de `draft` a publicación; devolver `rejected` sin decisión; retirar `deprecated` sin decisión excepcional; y modificar `approved` incidentalmente. Una autoevaluación favorable no cambia el estado.

## 15. Flujo de una unidad nueva

1. Verificar lote y candidato.
2. Buscar duplicados, aliases, siglas, traducciones y significados.
3. Confirmar identidad e ID autorizado.
4. Revisar investigación y mapa de afirmaciones.
5. Confirmar clasificación provisional.
6. Crear `<id>.md` en `content/new/`.
7. Completar frontmatter aplicable.
8. Redactar contenido según tipo y profundidad.
9. Registrar únicamente fuentes usadas.
10. Registrar relaciones válidas y pendientes por separado.
11. Comprobar estabilidad, versión y vigencia.
12. Autoevaluar todas las dimensiones.
13. Corregir defectos propios.
14. Registrar limitaciones y bloqueos.
15. Recomendar, si cumple, `in-review`.
16. Reconciliar todos los reportes.

## 16. Flujo de una unidad modificada

Antes: comprobar ID, estado, autorización, historial, motivo, fuentes actuales, relaciones, dependencias y diff previsto. Después: conservar identidad; cambiar solo lo autorizado; registrar fechas aprobadas aplicables; actualizar fuentes y relaciones afectadas; verificar referencias y consumidores; registrar impacto, decisiones y diff; conservar evidencia anterior; y entregar en `content/modified/`.

No se mezclan correcciones incidentales fuera de alcance. Se reportan como hallazgo o candidato a lote de corrección.

## 17. Redacción del cuerpo

| Sección/campo | Pregunta y aplicabilidad | Contrato de evidencia y límites |
|---|---|---|
| `summary` | ¿Qué es, en reconocimiento autónomo? Obligatorio publicable. | Síntesis breve; no repite título, lista ni promesa. |
| `definition` | ¿Qué significa y dónde termina? Obligatorio en entidades/taxonomía. | Evidencia definicional; no circular, histórica extensa ni promocional. |
| `problemSolved` | ¿Qué problema atiende? Condicional en soluciones e implementaciones. | No inventar causalidad ni duplicar `purpose`. |
| `purpose` | ¿Por qué existe o para qué se usa? Obligatorio salvo fuente. | Distinguir razón de existir de definición. |
| `contextNotes` | ¿Qué cambia por contexto, región o acepción? Solo si existe variación real. | Etiqueta y evidencia; no cajón de sastre. |
| Prerrequisitos | ¿Qué debe comprenderse antes? Solo dependencias educativas reales. | IDs aprobados; no confundir orden editorial con `requires`. |
| Ejemplos | ¿Cómo se reconoce en contexto seguro? Cuando aclaran. | Ilustrativos, no tutoriales; no introducen hechos sin respaldo. |
| Ventajas | ¿Qué beneficio condicionado ofrece? Soluciones/implementaciones. | Paralelas a limitaciones; sin absolutos ni marketing. |
| Limitaciones | ¿Dónde falla o qué compromiso exige? Cuando aplica. | No omitir para favorecer marca; evidencia suficiente. |
| Confusiones | ¿Con qué se confunde y cómo se distingue? Cuando riesgo real. | Referencias válidas; no repetir comparación completa. |
| Implicaciones | ¿Qué cambia para decisiones o colaboración? Según familia. | Distinguir consecuencia de causalidad no probada. |
| Alcance incluido/excluido | ¿Qué pertenece y qué no? Dominios, subdominios y modelos que lo exijan. | Declaraciones verificables; no duplicar definición. |

Se respetan rangos editoriales como tolerancias, no cuotas. Cada sección alcanza el `knowledgeLevel` autorizado sin repetir contenido entre campos.

## 18. Reglas por profundidad

`recognition` cubre identidad, naturaleza, dominio, definición, propósito o problema general y todo campo esencial del tipo. `contextual-understanding` responde qué es, por qué existe, qué problema atiende, dónde aparece, quién participa, relaciones, confusiones, ventajas, limitaciones e implicaciones aplicables. `future-expanded-reference` no se produce ordinariamente y requiere autorización.

Profundidad suficiente permite responder las preguntas del nivel con precisión y evidencia. Profundidad aparente acumula texto sin fronteras ni contexto. Brevedad justificada omite solo lo no aplicable y lo explica cuando sería esperable. Relleno repite, generaliza o fuerza listas. Exceso de implementación introduce tutoriales, código o procedimientos. Deuda de profundidad es un requisito aplicable aún no cubierto; se registra y bloquea revisión si es central.

## 19. Reglas por prioridad

- `essential`: máxima atención a dependencias, revisión, profundidad y vigencia por su función estructural.
- `important`: comprensión frecuente o relación significativa; revisión completa conforme al lote.
- `specialized`: alcance acotado, sin rebajar precisión ni evidencia.
- `emerging`: utilidad posible con terminología/adopción inestable; incertidumbre y revisión previstas.

La prioridad se justifica por valor educativo, dependencias, transversalidad y audiencia. No equivale a popularidad, prominencia visual o calidad; no se cambia para cuadrar porcentajes. Condiciona selección, orden de revisión, profundidad autorizada y vigilancia, nunca la veracidad exigida.

## 20. Clasificación contractual

Antes de entregar deben poder justificarse `type`, `subtype` si aplica, `primaryDomain`, `subdomains`, `secondaryDomains`, `disciplines`, `priority`, `knowledgeLevel` y `stability`. Se prohíbe inventar categorías, usar disciplina como tercer nivel, convertir área en pertenencia, asignar dominio secundario por mención, confundir tipos cercanos, usar marca como tipo o reclasificar para pasar métricas. Una ambigüedad material impide recomendar `in-review`.

## 21. Contrato por familia

| Familia | Preguntas/campos especialmente esperables | Riesgos, fuentes, límites y relaciones frecuentes |
|---|---|---|
| Personas y capacidades | Roles: alcance, responsabilidades, competencias y colaboración; puestos: roles típicos y contexto organizacional; competencias: resultados y evidencia; responsabilidades: resultado accountable. | Marcos y organizaciones autorizadas; no universalizar puestos/seniority. Relaciones de colaboración, capacidad y responsabilidad son frecuentes, no obligatorias. |
| Ideas y orientaciones | Concepto, principio, paradigma, orientación o modelo; fronteras, valores, supuestos, guía, representación y límites según tipo. | Fuentes conceptuales/primarias; no llamar metodología a toda orientación. Relaciones de influencia, confusión y aplicación solo con evidencia. |
| Formas de trabajo | Metodología, `work-framework`, proceso, práctica o técnica; racional, roles/eventos, entradas/actividades/salidas o tarea según tipo. | Guías oficiales y literatura; no convertir técnica en tutorial ni framework de software en `work-framework`. Relaciones de uso, producción y requisito son contextuales. |
| Soluciones y estructuras | Patrón/antipatrón: problema, contexto, fuerzas, solución, consecuencias; estilo: alcance, restricciones, elementos e interacciones. | Catálogos/autores reconocidos; no confundir patrón con principio o estilo. Implementación y alternativa son frecuentes. |
| Especificaciones e implementaciones | Protocolos, estándares, tecnologías, herramientas, plataformas, servicios y productos: participantes, reglas, versión, capacidades, consumidores y proveedor según tipo. | Normas y documentación oficial, contrastada para afirmaciones generales; marca no determina tipo, no marketing ni tutorial. Implementa, usa, gobierna y reemplaza son posibles. |
| Resultados y medición | Artefacto: producción, consumo y ciclo; métrica: propiedad, cálculo, unidad y límites; indicador: métricas, decisión e interpretación. | Especificaciones y literatura de medición; no confundir métrica, indicador u objetivo. Producción, consumo y medición son frecuentes. |
| Acreditación y referencia | Certificación: emisor textual autorizado, alcance, evaluación, vigencia; publicación: publisher, edición, mantenimiento y alcance. | Emisor/publicador oficial; no afirmar acreditación por una guía. Se preserva `certification.issuer`; no se inventa `organization` ni `certified-by`. |

## 22. Dominios, subdominios y disciplinas

Un dominio documenta identidad, propósito, alcance incluido/excluido, vecinos, solapamientos, criterios y fuentes; no contiene decisiones visuales. Un subdominio posee exactamente un `parentDomain`, alcance y utilidad de agrupación; se distingue de una entrada y no crea un tercer nivel implícito. Una disciplina es transversal, usa una sola identidad, `homeDomain` cuando sea razonable y dominios de aplicación; no se duplica por dominio y no se presenta como dominio o subdominio.

## 23. Fuentes en producción

Sin sustituir `work/SOURCE-POLICY.md`, Trabajo usa fuentes normalizadas y solo las realmente consultadas; las asocia con afirmaciones, registra secciones, versión, consulta, disponibilidad, limitaciones y concentración, y evita referencias inventadas o copia extensa. La redacción se ajusta a evidencia.

- Investigación cerrada: redactar dentro de sus límites; no ampliar afirmaciones.
- Fuente nueva: registrarla, evaluarla, actualizar mapa y reportes; si cambia alcance, escalar.
- Contradicción: detener afirmación, registrar conflicto y resolver por autoridad/evidencia o declarar incertidumbre.
- Fuente no disponible: buscar sustituto o archivo; actualizar disponibilidad; una fuente central no verificable bloquea.
- Fuente insuficiente: reducir o retirar afirmación, investigar o bloquear; nunca adornar respaldo.

## 24. Mapa de afirmaciones

Se usa el mapa de `work/RESEARCH-PROTOCOL.md` para afirmaciones definicionales, taxonómicas, normativas, causales, históricas, temporales, comparativas, cuantitativas, capacidades de producto, limitaciones, relaciones y decisiones propias de IT Study. Cada fila conserva `claimId`, unidad o entrada, campo destino, afirmación, tipo, criticidad, estabilidad, evidencia requerida, `sourceIds`, secciones utilizadas, estado de verificación, conflicto, limitaciones, decisión editorial y notas. Los estados admitidos son `unresearched`, `partially-supported`, `supported`, `conflicting`, `unsupported`, `not-applicable` y `editorial-decision`.

Al redactar, solo se transfieren afirmaciones respaldadas con el grado de certeza permitido. El mapa se incorpora como sección o anexo interno de `sources-report.md`, salvo representación compatible adoptada posteriormente por `work/BATCH-TEMPLATE.md`; no tiene que copiarse dentro de cada ficha. `unsupported` o `conflicting` no se presenta como hecho confirmado, y `editorial-decision` debe enlazar su autoridad interna.

## 25. Relaciones

Toda relación usa IDs existentes, respeta el campo de autoridad y la clave más específica, y valida origen/destino, compatibilidad, dirección, cardinalidad y ciclos. `note` solo aporta frontera; `sourceIds` se añade cuando el contrato relacional lo requiera. No se persisten inversas derivadas, se duplica una relación simétrica, se crean aristas por navegación, se usa `related-to` como relleno ni se cuentan pendientes.

Se preservan: `decision-0012` (`related` sigue transitorio, sin eliminación ni duplicación automática); `decision-0013` (una arista lógica simétrica, representación física pendiente); y `decision-0014` (`certification.issuer` conserva autoridad; sin tipo `organization`, ID inventado ni `certified-by`).

## 26. Aliases, traducciones y acrónimos

Un alias o traducción no crea entrada ni ID. `englishName` conserva el término profesional inglés cuando difiere o predomina. Acrónimos se desarrollan cuando corresponde y se registran con idioma y clase. No se admiten aliases ambiguos sin calificador; nombres históricos se marcan como tales y, cuando aporte, periodo o nota. Alias no oculta polisemia. Toda colisión se reporta y bloquea si compromete identidad.

## 27. Duplicados

Antes de crear o modificar se revisan IDs, nombres, aliases, siglas, traducciones, definiciones, acepciones, versiones, productos frente a capacidades, deprecados y lotes concurrentes.

- Alias: se incorpora a identidad existente si equivale realmente.
- Duplicado confirmado: se cancela creación y se propone modificación o consolidación autorizada.
- Posible duplicado: se bloquea recomendación de `in-review`.
- Polisemia compatible: una identidad con notas contextuales si ciclo y relaciones son compatibles.
- Identidad separada: calificador estable y evidencia de significado autónomo.
- Versión: mismo ID para familia vigente salvo identidad versionada conceptualmente distinta.
- Consolidación/división: decisión y plan de migración.

## 28. Vigencia y estabilidad

Trabajo clasifica estabilidad, registra versiones y fechas aplicables, verifica `reviewedAt`, justifica `reviewDueAt`, asigna `verificationStatus` honesto y propone sustitución/deprecación sin decidirla. No inventa calendarios uniformes.

U1 es información materialmente falsa, riesgosa o normativa falsa: requiere retiro inmediato del descubrimiento ordinario y bloquea publicación/dependencias. U2 es duda material o versión cambiante: puede conservar acceso temporal con aviso, no sostener estructuras centrales. U3 es desactualización no central o enlace secundario: puede mantenerse con aviso, fuera de conteos. `needs-update` no cuenta. Trabajo identifica y escala; autoridad/revisión dispone.

## 29. Comparaciones

Una comparación requiere entradas aprobadas, razón real, dimensiones equivalentes con valores para cada entrada, similitudes, diferencias, contexto de elección, errores frecuentes y fuentes suficientes. No declara ganador universal ni duplica definiciones. Las entradas centrales deben tener `contextual-understanding`.

## 30. Escenarios

Un escenario declara objetivo educativo, contexto, participantes, dominios, situación inicial, secuencia, decisiones, conceptos, artefactos, riesgos, resultado, referencias existentes y carácter ilustrativo. No es política, runbook ni prescripción. Sus eventos no crean automáticamente relaciones globales.

## 31. Rutas de aprendizaje

Una ruta declara audiencia, nivel inicial, objetivo, resultados, entradas aprobadas, orden justificado, prerrequisitos, opcionales, checkpoints, criterio de finalización y profundidad adecuada. No promete dominio profesional ni copia definiciones. El orden no crea automáticamente `requires`.

## 32. Información sensible y seguridad

Se evitan secretos, credenciales y datos personales; procedimientos dañinos innecesarios; y detalle operativo sin valor educativo. Se mantiene contexto defensivo, se distingue teoría de instrucción operativa, se escala riesgo material, se usan ejemplos seguros y se conserva precisión.

## 33. Separación contenido-diseño

Se prohíben colores, iconos obligatorios, emojis con carga semántica, layouts, componentes, CSS, HTML de presentación, posiciones, temas, breakpoints, URLs como identidad, duplicación por dispositivo, instrucciones de interfaz y relaciones para visualización. La unidad debe conservar significado ante una presentación completamente distinta.

## 34. Trazabilidad

Cada unidad permite reconstruir lote, agente o rol autor, fecha, autoridades, fuentes, investigación, cambios, relaciones, revisión, decisiones, estado y versión contractual. `batch` enlaza la ficha; `batchId` y versión enlazan reportes; fechas registran hechos reales; `sources` y `sourceIds` relacionales conectan evidencia; `decisionRefs` conecta decisiones existentes; commits fijan una versión; el diff explica modificaciones. Una conversación puede orientar, pero no es evidencia final suficiente.

## 35. Autoevaluación contractual

Antes de recomendar revisión, Trabajo evalúa formato, identidad, campos, clasificación, profundidad, prioridad, estabilidad, estado, editorial, precisión, fuentes, afirmaciones, relaciones, aliases, duplicados, vigencia, seguridad, separación de diseño, trazabilidad, alcance y reportes. Cada criterio se marca `conforme`, `corregido`, `pendiente`, `bloqueado` o `no aplicable`, con evidencia. El resultado se registra en `self-review-report.md` y nunca concluye `approved`.

## 36. Condiciones para recomendar `in-review`

La unidad está dentro de alcance; identidad resuelta; sin posible duplicado abierto; formato válido; campos obligatorios completos; ausencias opcionales genuinas; clasificación justificada; profundidad correcta; afirmaciones centrales respaldadas; contradicciones resueltas o declaradas sin presentarlas como hechos; relaciones válidas; sin propiedades visuales ni bloqueantes propios conocidos; autoevaluación completa; y reportes reconciliados. “Recomendada para `in-review`” no significa aceptada.

## 37. Hallazgos internos antes de entregar

Trabajo corrige errores propios evidentes, nombres inconsistentes, referencias rotas detectadas, duplicación accidental, fuentes disponibles omitidas, campos mal copiados, longitud injustificada, lenguaje promocional, relaciones incompatibles y propiedades visuales.

No corrige silenciosamente contratos, contenido aprobado fuera de alcance, IDs, decisiones pendientes, clasificaciones que requieren autoridad ni excepciones. Los registra y escala.

## 38. Revisión independiente

El paquete permite evaluar estructura, taxonomía, editorial, precisión, fuentes, relaciones, duplicados, vigencia, accesibilidad cognitiva, separación contenido-diseño y cobertura. Trabajo puede proponer severidad, pero no asigna la final, firma aprobación, cambia el estado final ni completa `review-report.md` como revisor independiente.

## 39. Recepción de hallazgos

Al recibirlos, Trabajo: identifica unidad y criterio; comprueba autoridad; clasifica la acción; corrige dentro de alcance; actualiza investigación, fuentes, relaciones y reportes; registra cambios; conserva hallazgos no aceptados con justificación; y prepara reenvío. Haber superado autoevaluación no invalida un hallazgo.

## 40. Disposición de hallazgos

Estos son estados operativos, no severidades nuevas:

| Estado | Significado, asignación y evidencia | Cierre |
|---|---|---|
| `open` | Hallazgo recibido sin disposición; revisor o coordinación, con criterio y evidencia | Al asignar tratamiento. |
| `accepted-for-fix` | Trabajo/coordinación acepta corregir dentro del alcance; acción y archivo | Corrección demostrada y revisada. |
| `needs-clarification` | Falta precisión del hallazgo; Trabajo o revisor, con pregunta concreta | Respuesta de autoridad y nueva disposición. |
| `disputed` | Trabajo aporta evidencia de desacuerdo sin borrar hallazgo | Revisor/autoridad decide y registra fundamento. |
| `resolved` | Revisor confirma que evidencia/corrección satisface criterio | Verificación registrada; no basta afirmación del autor. |
| `deferred-by-authority` | Autoridad posterga con razón, riesgo y destino | Condición/plazo autorizado o lote posterior cumplido. |
| `requires-decision` | Resolver exige cambio material | Decisión `accepted` y acción ejecutada. |
| `not-applicable` | Revisor/autoridad determina que el criterio no aplica | Justificación y evidencia registradas. |

## 41. Reenvío

Un reenvío crea nueva versión sin sobrescribir la anterior e incluye: versión de entrega; hallazgos; respuesta individual; archivos modificados; resumen del diff; fuentes añadidas/retiradas; relaciones y clasificación afectadas; impacto en cobertura; preguntas; validaciones repetidas; autoevaluación actualizada; y recomendación de nueva revisión.

## 42. Cambios de alcance durante producción

Todo cambio se registra, analiza y no se aplica automáticamente. Se determina si cabe en tolerancia, se solicita manifiesto actualizado, se separa en otro lote o se remite al decision log.

- Aclaración compatible: precisa redacción sin cambiar unidades ni criterios.
- Corrección interna: repara defecto propio dentro del mismo contrato.
- Ampliación: añade unidades, tipos, profundidad o entregables; exige manifiesto.
- Nuevo candidato: se reporta, no se produce.
- Migración: cambia identidad, autoridad o representación; exige decisión y plan.
- Excepción: apartamiento material autorizado y registrado.
- Cambio contractual: altera norma; exige decisión y revisión de documentos.

## 43. Producción paralela

Exige reserva autorizada de IDs, archivos disjuntos, prohibición de modificar la misma entrada, autoridad única sobre contenido transversal, reconciliación de aliases/relaciones, fuentes sincronizadas, reportes combinables y checkpoints. Se detiene la parte afectada si dos agentes crean la misma identidad, modifican el mismo archivo, proponen clasificaciones incompatibles, dependen mutuamente de borradores o resuelven distinto un pendiente.

## 44. Corrección de contenido aprobado

Una entrada `approved` solo se modifica mediante lote autorizado de corrección, actualización, migración, deprecación o decisión material. Se conservan diff, estado previo, motivo, fuentes, relaciones, dependencias, estructuras consumidoras, efecto en cobertura y nueva revisión. Nunca se corrige incidentalmente durante otro lote.

## 45. Deprecación y sustitución

La propuesta registra motivo, fecha, identidad histórica, `replacedBy` si existe, referencias afectadas, visibilidad requerida, fuentes, relaciones y ciclos. La autoridad decide deprecación y visibilidad. Se actualizan consumidores mediante lote autorizado; se conserva evidencia; no hay ciclos de sustitución; lo deprecado no cuenta para mínimos. Trabajo prepara, no autoriza.

## 46. Entregables del lote

Se conserva exactamente:

```text
deliveries/<batch-id>/
├── batch-manifest.md
├── batch-summary.md
├── coverage-report.md
├── sources-report.md
├── relationship-report.md
├── duplicate-report.md
├── new-term-proposals.md
├── unresolved-questions.md
├── exceptions-report.md
├── self-review-report.md
├── validation-report.md
├── review-report.md
└── content/
    ├── new/
    └── modified/
```

Coordinación proporciona y controla `batch-manifest.md`. Trabajo produce borradores, `batch-summary.md`, cobertura, fuentes, relaciones, duplicados, propuestas, preguntas, posibles excepciones, autoevaluación y resultados de validaciones disponibles. `review-report.md` queda vacío de decisión o como plantilla identificada hasta el revisor independiente. Codex completa validaciones técnicas e integración posteriores solo tras aceptación. Ningún participante altera la topología.

## 47. Coherencia entre reportes

Todos coinciden en `batchId`, versión, alcance, conteos, IDs, estados, fuentes, relaciones, candidatos, hallazgos, excepciones y cobertura. Son errores materiales: contar una entrada inexistente o un borrador como aprobado; omitir archivo; reportar fuente no usada; ocultar relación pendiente; cerrar hallazgo abierto; o cambiar alcance sin registro.

## 48. Recomendación de estado del lote

Trabajo puede recomendar continuar producción, entregar para revisión, solicitar cambio de alcance, bloquear parcialmente, cancelar una unidad, solicitar lote de corrección o solicitar decisión. No puede declarar `accepted`, `integrated`, `closed` ni publicación autorizada.

## 49. Incumplimientos y severidad preliminar

Posibles bloqueantes preliminares: ID duplicado, referencia obligatoria inexistente, fuente inventada, contenido fuera de alcance, tipo inexistente, propiedad visual, información materialmente falsa, autoaprobación y cambio contractual silencioso.

Posibles mayores: definición incompleta, fuente central insuficiente, profundidad inferior, dominio injustificado, relación relevante incorrecta, posible duplicado y contradicción no declarada.

Posibles menores: acrónimo no desarrollado, inconsistencia localizada, desviación leve de extensión, nota demasiado larga y fecha administrativa incompleta no material. La severidad final corresponde al revisor.

## 50. Condiciones de incumplimiento contractual

Incumple una entrega no autorizada, fuera de alcance, sin evidencia, que mezcla nuevas/modificadas, pierde trazabilidad, inventa campos, rompe formato, oculta dudas, adopta decisiones, omite autoevaluación, afirma aprobación o presenta reportes incoherentes. Las disposiciones posibles son corrección antes de revisión, devolución, división, cancelación parcial, lote de corrección, decisión o rechazo, según severidad y autoridad.

## 51. Continuidad entre sesiones

Para continuar se recuperan manifiesto y última entrega; se comprueban autoridades y decisiones nuevas; se leen hallazgos; se verifican archivos y commits; se evita sobrescribir; se reconcilian reportes; se registra la sesión y se mantiene historial. La memoria del chat no basta.

## 52. Lista de inicio rápido

- Confirmar lote y manifiesto vigentes.
- Confirmar unidades, archivos y límites.
- Comprobar duplicados e identidad.
- Revisar investigación y fuentes.
- Confirmar clasificación y profundidad.
- Producir solo lo autorizado.
- Registrar fuentes y relaciones.
- Autoevaluar y corregir.
- Reconciliar reportes.
- Entregar sin autoaprobar.

## 53. Lista de cierre rápido

- Alcance respetado y archivos correctos.
- IDs válidos y campos aplicables completos.
- Clasificación justificada y profundidad suficiente.
- Fuentes trazables y afirmaciones respaldadas.
- Relaciones válidas y duplicados resueltos.
- Vigencia tratada y cero propiedades visuales.
- Autoevaluación completa y reportes coherentes.
- Recomendación correcta; revisión independiente pendiente.

## 54. Ejemplo conceptual no vinculante

En un lote hipotético `batch-example`, la unidad nueva `entity-example-alpha` llega autorizada, se investiga y se entrega en `content/new/entity-example-alpha.md` como `draft`; no representa un término real. La unidad existente `entity-example-beta` recibe una modificación acotada en `content/modified/` con diff. `source-example-authority` respalda la afirmación conceptual `claim-example-01`; una relación específica desde Alpha hacia Beta se propone solo tras validar ambos tipos. La búsqueda detecta `entity-example-alfa` como posible duplicado y bloquea Alpha. Se registra la pregunta “¿son identidades equivalentes?”, la autoevaluación marca duplicados `bloqueado` y no recomienda revisión. Tras resolución externa y corrección, el reenvío `v2` conserva `v1`, responde el hallazgo, lista diff y validaciones y vuelve a recomendar revisión sin afirmar aceptación.

## 55. Relación con documentos posteriores

`work/BATCH-TEMPLATE.md` materializará entrada, manifiesto y reportes; `work/SOURCE-POLICY.md`, selección, suficiencia y normalización de evidencia; `work/REVIEW-CHECKLIST.md`, verificación independiente y disposiciones; `work/HANDOFF-TO-CODEX.md`, paquete aceptado e integración técnica. `examples/` mostrará formas no autoritativas; `inventories/` autorizará candidatos; `AGENTS.md` distribuirá instrucciones compatibles. Schemas, validadores y CI comprobarán reglas estructurales sin reinterpretarlas; integración moverá contenido aceptado, generará derivados y conservará trazabilidad.

## 56. Decisiones y pendientes

### 56.1 Obligaciones adoptadas

Quedan definidos naturaleza contractual, precedencia, activación, participantes, entrada/salida, modalidades, campos, estados, flujos, fuentes, relaciones, trazabilidad, revisión, reenvío e incumplimientos. El contrato exige evidencia, ausencia significativa, separación contenido-diseño y revisión independiente.

### 56.2 Asuntos reservados

- Para `work/BATCH-TEMPLATE.md`: sintaxis exacta del manifiesto, secciones y plantillas de reportes, tolerancias de lote y versión de entrega.
- Para `work/SOURCE-POLICY.md`: jerarquía detallada, suficiencia, concentración, citas y archivo de fuentes.
- Para `work/REVIEW-CHECKLIST.md`: checklist ejecutable, asignación final de severidad, puertas y firma de revisión.
- Para `work/HANDOFF-TO-CODEX.md`: criterios técnicos de recepción, integración, rollback y derivados.
- Para Codex: schemas, validadores, CI, rutas canónicas definitivas, representación física relacional e integración.

### 56.3 Decisiones pendientes preservadas

Permanecen sin resolver `decision-0012-related-relations-migration`, `decision-0013-symmetric-relations-storage`, `decision-0014-certification-issuer-model`, `decision-0015-dark-mode-delivery`, `decision-0016-operational-ownership`, `decision-0017-review-calendars` y `decision-0018-final-technical-metrics`. Este contrato aplica sus reglas de contención y no adopta alternativas.

### 56.4 Contradicciones encontradas

El encargo menciona como campos comunes `depth`, `sourceIds`, `batchId` y `updatedAt`, mientras `docs/03-content-model.md` aprueba respectivamente `knowledgeLevel`, `sources`, `batch` y no aprueba `updatedAt`. Se preservan los nombres normativos: los términos del encargo se interpretan como conceptos operativos o de reporte, no como nuevas claves de ficha. También se solicita definir ubicación física, pero la estructura canónica de `content/` permanece propuesta; por ello solo se obliga la estructura de entrega aprobada y se reserva la integración final.

No se encontraron contradicciones adicionales que impidan emitir esta propuesta. Cualquier discrepancia posterior bloquea únicamente la parte afectada y se eleva conforme a la sección 3.
