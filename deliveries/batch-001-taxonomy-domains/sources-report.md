# Reporte de fuentes

| Campo | Valor |
|---|---|
| `batchId` | `batch-001-taxonomy-domains` |
| `manifestVersion` | `v2` |
| `deliveryVersion` | `d2` |
| Nombre del reporte | Reporte de fuentes y mapa de afirmaciones |
| `reportVersion` | `r3` |
| Fecha | `2026-07-21` |
| Rol responsable | ChatGPT Trabajo |
| Alcance cubierto | Investigación de las doce fichas `domain`. |
| Contratos aplicados | `work/RESEARCH-PROTOCOL.md` 1.0.0; `work/SOURCE-POLICY.md` 1.0.0; `work/BATCH-TEMPLATE.md` 1.0.0. |
| Estado del reporte | `complete` para la entrega de autoría. |
| Limitaciones | Los 18 registros `source` usados se materializaron en `content/new/` con `reference` identificable; permanecen `draft` y requieren revisión independiente junto con las fichas. TOGAF no pudo verificarse, no se materializó y no sostiene contenido. |
| Evidencia/archivos | `docs/02-taxonomy.md`, secciones 4 y 15; `inventories/domains.yaml`; consultas registradas el 2026-07-21; `content/new/`. |

## Fuentes evaluadas

| `sourceId` | Categoría | Nueva/reutilizada | Versión/vigencia | Secciones usadas | Consulta | Disponibilidad | Afirmaciones | Organización/proveedor | Revisión especializada | Limitación/disposición |
|---|---|---|---|---|---|---|---|---|---|---|
| `source-it-study-taxonomy` | `used` | reutilizada | Aprobada 2026-07-20 | 2–5 y 15 | 2026-07-21 | available | `claim-001`–`claim-009` | IT Study | no; autoridad interna | Autoridad de decisión, no prueba de consenso externo. |
| `source-it-study-domain-inventory` | `used` | reutilizada | schema 1.0 | Reglas y 12 registros | 2026-07-21 | available | `claim-002` | IT Study | no | Planificación autorizada; no equivale a contenido aprobado. |
| `source-it-study-content-model` | `used` | reutilizada | contrato 1.0 | 5–7, 14, 19.1 | 2026-07-21 | available | `claim-002` | IT Study | no | Autoridad estructural. |
| `source-acm-ieee-cc2020` | `used` | reutilizada | CC2020, 2020-12-31 | capítulos 1–3; panorama de disciplinas | 2026-07-21 | available | `claim-003` | ACM e IEEE-CS | no | Fuente curricular; no se presenta como taxonomía universal de IT Study. |
| `source-nist-sp-800-145` | `used` | reutilizada | SP 800-145 final | registro y definición de cloud computing | 2026-07-21 | available | `claim-004` | NIST | no | Delimita cloud; no cubre todo DOM-06. |
| `source-iso-iec-25010-2023` | `used` | reutilizada | 2023 | registro y abstract del modelo de calidad | 2026-07-21 | partially-available | `claim-003` | ISO/IEC | sí para interpretación normativa completa | Se usa solo para reconocer el objeto del estándar, no requisitos no accesibles. |
| `source-nist-csf-2` | `used` | reutilizada | CSF 2.0 | overview y recursos oficiales | 2026-07-21 | available | `claim-005` | NIST | no | No sustituye fuentes jurídicas de privacidad o cumplimiento. |
| `source-nist-ai-rmf` | `used` | reutilizada | AI RMF 1.0 y recursos vigentes | overview del marco | 2026-07-21 | available | `claim-007` | NIST | no | Respalda gestión de riesgo, no toda la definición de IA. |
| `source-google-sre` | `used` | reutilizada | sitio vigente | definición y recursos introductorios | 2026-07-21 | available | `claim-004` | Google | no | Fuente de proveedor limitada a su enfoque publicado. |
| `source-cncf-platforms-white-paper` | `used` | reutilizada | white paper vigente | definición, consumidores y capacidades | 2026-07-21 | available | `claim-004` | CNCF TAG App Delivery | no | Perspectiva de comunidad técnica; no demuestra adopción universal. |
| `source-peoplecert-itil` | `used` | reutilizada | esquema ITIL vigente en la página | overview del framework | 2026-07-21 | available | `claim-004` | PeopleCert | no | Fuente del emisor; no se usa para superioridad ni universalidad. |
| `source-isaca-cobit` | `used` | reutilizada | página vigente | overview de COBIT | 2026-07-21 | available | `claim-009` | ISACA | no | Respalda el alcance del marco, no una única estructura organizacional. |
| `source-iiba-business-analysis-standard` | `used` | reutilizada | página vigente | propósito y alcance del estándar | 2026-07-21 | available | `claim-008` | IIBA | no | Respalda Business Analysis, no toda experiencia humana. |
| `source-pmi-project-management` | `used` | reutilizada | página vigente | definición introductoria | 2026-07-21 | available | `claim-009` | PMI | no | No convierte Project Management en sinónimo de producto o gobierno. |
| `source-w3c-wcag-overview` | `used` | reutilizada | WCAG 2 overview vigente | alcance y documentos WCAG | 2026-07-21 | available | `claim-008` | W3C WAI | no | Respalda accesibilidad web; no agota el diseño inclusivo. |
| `source-iso-iec-25012-2008` | `used` | reutilizada | 2008, registro vigente | registro y abstract del modelo de calidad de datos | 2026-07-21 | partially-available | `claim-006` | ISO/IEC | sí para interpretación normativa completa | Se usa solo para reconocer calidad de datos como objeto específico. |
| `source-agile-manifesto` | `used` | reutilizada | texto original | valores del manifiesto | 2026-07-21 | available | `claim-009` | Autores del Manifesto for Agile Software Development | no | Evidencia histórica primaria; no describe todas las prácticas Agile actuales. |
| `source-open-group-togaf` | `unavailable` | reutilización descartada | desconocida para esta consulta | ninguna | 2026-07-21 | unavailable | ninguna | The Open Group | sí si fuera material | No se usó; la página devolvió error y la frontera procede de la taxonomía aprobada. |
| `source-iso-iec-ieee-24765-2017` | `used` | reutilizada | 2017 | registro y abstract del vocabulario | 2026-07-21 | partially-available | `claim-003` | ISO/IEC/IEEE | sí para términos normativos completos | Uso limitado al carácter de vocabulario de sistemas y software. |

## Mapa de afirmaciones final

| `claimId` | Unidad/campo | Afirmación | Tipo | Criticidad | Estabilidad | Evidencia requerida | `sourceIds`/secciones | Estado | Conflicto | Limitación | Decisión editorial |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `claim-001` | Todas: definición, propósito y frontera | Los doce dominios materializan sin cambiar la taxonomía aprobada. | decisión editorial | central | estable | Autoridad interna. | `source-it-study-taxonomy`, sección 4 | `editorial-decision` | none | No se afirma universalidad. | Conservar formulaciones y fronteras aprobadas. |
| `claim-002` | Todas: IDs, nombres, aliases y gobierno | Los metadatos coinciden con inventario y contrato 1.0. | taxonómica | central | estable | Inventario y modelo. | `source-it-study-domain-inventory`; `source-it-study-content-model` | `supported` | none | Los códigos DOM no son IDs. | Usar IDs `domain-*`. |
| `claim-003` | DOM-01–04 y DOM-10 | Las disciplinas de computación comparten fundamentos y tienen solapamientos. | definicional | central | slow-evolution | Fuente curricular institucional. | `source-acm-ieee-cc2020`, capítulos 1–3 | `supported` | none | La división de IT Study sigue siendo decisión propia. | Mantener fronteras locales. |
| `claim-004` | DOM-06 | Cloud, SRE, Platform Engineering e ITSM poseen alcances distintos. | definicional/relación | central | slow-evolution | Fuentes directas pertinentes. | NIST SP 800-145; Google SRE; CNCF white paper; PeopleCert ITIL | `supported` | none | Perspectivas distintas, no comparativa de superioridad. | No tratarlos como aliases. |
| `claim-005` | DOM-07 | Ciberseguridad, privacidad y riesgo se conectan sin ser equivalentes. | definicional | central | slow-evolution | Institucional directa. | `source-nist-csf-2`; taxonomía sección DOM-07 | `supported` | none | Privacidad jurídica exhaustiva fuera de alcance. | Conservar separación. |
| `claim-006` | DOM-08 | Calidad del dato es un objeto específico dentro del dominio de datos. | definicional | central | versioned-standard | Registro oficial. | `source-iso-iec-25012-2008` | `supported` | none | Texto completo no consultado. | No formular requisitos normativos. |
| `claim-007` | DOM-09 | El riesgo de IA requiere gobierno y gestión específicos. | definicional | central | slow-evolution | Marco institucional. | `source-nist-ai-rmf` | `supported` | none | No define por sí solo toda IA. | Usarlo solo para frontera de gobierno/riesgo. |
| `claim-008` | DOM-11 | Business Analysis y accesibilidad poseen alcances propios relacionados con producto y experiencia. | definicional | central | slow-evolution | Organismos directos. | IIBA Standard; W3C WCAG Overview | `supported` | none | WCAG no agota accesibilidad. | Conservar carácter transversal. |
| `claim-009` | DOM-12 | Gobierno, proyectos, Agile y arquitectura empresarial no son una sola metodología. | definicional/comparativa | central | slow-evolution | Fuentes directas y taxonomía. | ISACA COBIT; PMI; Agile Manifesto; taxonomía DOM-12 | `supported` | none | TOGAF no se verificó y no se usa. | No universalizar estructuras. |

## Resumen investigativo

- Registros normalizados nuevos en `d2`: 18 fuentes marcadas `used`; permanecen `draft` hasta revisión independiente.
- Fuentes descartadas: `source-open-group-togaf` por indisponibilidad en esta consulta.
- Fuentes inciertas o archivadas: `none`.
- Fuentes parcialmente disponibles: tres registros ISO; se limitó la redacción a lo visible en sus páginas oficiales.
- Conflictos materiales: `none`.
- Afirmaciones sin respaldo suficiente: `none` dentro del alcance redactado; las fichas no incluyen afirmaciones normativas detalladas.
- Concentración: la decisión taxonómica depende legítimamente de IT Study. Las fronteras externas usan organizaciones pertinentes y no se formulan conclusiones de superioridad, adopción ni universalidad.
- Referencias de fichas: 59 referencias `sources[]` distribuidas entre 12 fichas; todas resuelven a uno de los 18 registros `source` de `content/new/`.
- Relaciones respaldadas: las 31 declaraciones `overlaps` se derivan de fronteras aprobadas y conservan `source-it-study-taxonomy` como evidencia de autoridad en `relationship-report.md`.

## Reconciliación de materialización `d2`

| Categoría | Evaluadas | Materializadas | Referenciadas | Excluidas | Estado |
|---|---:|---:|---:|---:|---|
| Fuentes `used` | 18 | 18 | 18 | 0 | `draft`; revisión independiente pendiente |
| Fuente `unavailable` | 1 | 0 | 0 | 1 | `source-open-group-togaf`; descarte preservado |
| Referencias `sources[]` | no aplica | no aplica | 59 en 12 fichas | 0 sin resolver | validación estructural conforme |

Los registros externos reutilizan las URLs canónicas ya registradas en `docs/02-taxonomy.md`, sección 15, y conservan además una `reference` identificable. No se construyeron URLs por inferencia. Las fechas, versiones, secciones, organizaciones, disponibilidad y limitaciones proceden exclusivamente de este reporte y de las autoridades internas ya registradas.
