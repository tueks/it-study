# Plan inicial de fuentes

| Campo | Valor |
|---|---|
| `batchId` | `batch-001-taxonomy-domains` |
| `manifestVersion` | `v1` |
| `deliveryVersion` | `d1` |
| Nombre del reporte | Plan inicial de fuentes |
| `reportVersion` | `r1` |
| Fecha | `2026-07-21` |
| Rol responsable | ChatGPT Trabajo |
| Alcance cubierto | Estrategia previa a producción para las doce fichas de dominio. |
| Contratos aplicados | `work/RESEARCH-PROTOCOL.md` 1.0.0; `work/SOURCE-POLICY.md` 1.0.0; `work/BATCH-TEMPLATE.md` 1.0.0. |
| Estado del reporte | `complete` para la puerta inicial; se actualizará durante producción. |
| Limitaciones | Todavía no declara consultas externas ejecutadas ni suficiencia final. |
| Evidencia/archivos | `docs/02-taxonomy.md`, sección 15; `inventories/domains.yaml`; este reporte. |

## Estrategia

1. Usar `docs/02-taxonomy.md` como autoridad de las decisiones IT Study y `inventories/domains.yaml` para IDs, nombres, aliases y atributos de planificación.
2. Separar afirmaciones editoriales propias de IT Study de afirmaciones externas.
3. Reutilizar y volver a comprobar las fuentes S4–S19 de la taxonomía solo donde respaldan directamente definición, frontera o solapamiento.
4. Registrar disponibilidad, sección utilizada, concentración y limitaciones; no crear fuentes para aparentar una cuota.
5. No producir registros `source` canónicos porque el manifiesto autoriza exclusivamente doce entradas `domain`; los IDs de este reporte son referencias locales normalizadas para la entrega y deberán reconciliarse antes de integración.

## Fuentes previstas o reutilizables

| `sourceId` | Identidad | Uso previsto | Unidades principales | Estado inicial |
|---|---|---|---|---|
| `source-it-study-taxonomy` | `docs/02-taxonomy.md` | Decisión y formulación aprobada de los 12 dominios. | Todas | Reutilizable; disponible localmente. |
| `source-it-study-domain-inventory` | `inventories/domains.yaml` | IDs canónicos, nombres, aliases, prioridad, profundidad y estabilidad. | Todas | Reutilizable; disponible localmente. |
| `source-it-study-content-model` | `docs/03-content-model.md` | Contrato de campos, IDs y modelo `domain`. | Todas | Reutilizable; disponible localmente. |
| `source-acm-ieee-cc2020` | ACM/IEEE-CS, Computing Curricula 2020 | Fundamentos compartidos, sistemas, software, IA e integración. | DOM-01, 02, 03, 04, 09, 10 | Pendiente de comprobación de disponibilidad. |
| `source-nist-sp-800-145` | NIST SP 800-145 | Frontera de cloud computing. | DOM-06 | Pendiente de comprobación. |
| `source-iso-iec-25010-2023` | ISO/IEC 25010:2023 | Calidad de producto. | DOM-04 | Pendiente de comprobación. |
| `source-nist-csf-2` | NIST Cybersecurity Framework 2.0 | Ciberseguridad y gobierno de riesgo. | DOM-07 | Pendiente de comprobación. |
| `source-nist-ai-rmf` | NIST AI Risk Management Framework | Riesgo y gobierno de IA. | DOM-09 | Pendiente de comprobación. |
| `source-google-sre` | Google, Site Reliability Engineering | Frontera de SRE. | DOM-06 | Pendiente de comprobación; fuente de proveedor limitada a su definición publicada. |
| `source-cncf-platforms-white-paper` | CNCF TAG App Delivery, Platforms White Paper | Platform Engineering y plataformas internas. | DOM-06 | Pendiente de comprobación. |
| `source-peoplecert-itil` | PeopleCert, ITIL framework | Gestión de productos y servicios digitales. | DOM-06 | Pendiente de comprobación. |
| `source-isaca-cobit` | ISACA, COBIT | Gobierno y gestión de información y tecnología. | DOM-12 | Pendiente de comprobación. |
| `source-iiba-business-analysis-standard` | IIBA, The Business Analysis Standard | Alcance de Business Analysis. | DOM-11 | Pendiente de comprobación. |
| `source-pmi-project-management` | PMI, What Is Project Management? | Frontera de Project Management. | DOM-12 | Pendiente de comprobación. |
| `source-w3c-wcag-overview` | W3C WAI, WCAG Overview | Accesibilidad como disciplina respaldada por estándar. | DOM-11 | Pendiente de comprobación. |
| `source-iso-iec-25012-2008` | ISO/IEC 25012:2008 | Calidad de datos. | DOM-08 | Pendiente de comprobación. |
| `source-agile-manifesto` | Autores del Manifesto for Agile Software Development | Agile como orientación de valores, no método universal. | DOM-12 | Pendiente de comprobación. |
| `source-open-group-togaf` | The Open Group, TOGAF Standard | Arquitectura empresarial. | DOM-12 | Pendiente de comprobación. |
| `source-iso-iec-ieee-24765-2017` | ISO/IEC/IEEE 24765:2017 | Vocabulario de sistemas y software. | DOM-02, 03, 04 | Pendiente de comprobación. |

## Mapa inicial de afirmaciones

| `claimId` | Unidad/campo | Afirmación prevista | Tipo | Criticidad | Evidencia requerida | Fuentes previstas | Estado |
|---|---|---|---|---|---|---|---|
| `claim-001` | Todas: identidad y alcance | Los doce dominios y sus fronteras son decisiones aprobadas de IT Study. | decisión editorial | central | Autoridad interna aprobada. | `source-it-study-taxonomy` | `editorial-decision` |
| `claim-002` | Todas: ID y metadatos | Los IDs y atributos de planificación coinciden con el inventario. | taxonómica | central | Inventario y contrato de contenido. | `source-it-study-domain-inventory`; `source-it-study-content-model` | `editorial-decision` |
| `claim-003` | DOM-01–04 y DOM-10 | Fundamentos, sistemas, desarrollo, ingeniería e integración conservan fronteras disciplinares comprensibles. | definicional | central | Fuente curricular institucional y taxonomía aprobada. | `source-acm-ieee-cc2020`; `source-it-study-taxonomy` | `unresearched` |
| `claim-004` | DOM-06: solapamientos | Cloud, SRE, Platform Engineering e ITSM no son sinónimos y tienen alcances diferenciados. | definicional/relación | central | Fuentes primarias o institucionales directas. | NIST, Google SRE, CNCF, PeopleCert | `unresearched` |
| `claim-005` | DOM-07 | Ciberseguridad, privacidad y riesgo están conectados sin ser equivalentes. | definicional | central | NIST CSF y páginas institucionales pertinentes. | `source-nist-csf-2` | `unresearched` |
| `claim-006` | DOM-08 | Calidad y gobierno del dato constituyen preocupaciones diferenciables. | definicional | central | Registro oficial del modelo de calidad de datos. | `source-iso-iec-25012-2008` | `unresearched` |
| `claim-007` | DOM-09 | El gobierno del riesgo de IA incluye gobernar, mapear, medir y gestionar. | definicional | central | Marco institucional directo. | `source-nist-ai-rmf` | `unresearched` |
| `claim-008` | DOM-11 | Business Analysis y accesibilidad poseen alcances propios conectados con producto y experiencia. | definicional | central | IIBA y W3C. | `source-iiba-business-analysis-standard`; `source-w3c-wcag-overview` | `unresearched` |
| `claim-009` | DOM-12 | Gobierno, gestión de proyectos, Agile y arquitectura empresarial no deben universalizarse como una sola metodología. | definicional/comparativa | central | Fuentes directas de cada marco u orientación. | ISACA, PMI, Agile Manifesto, The Open Group | `unresearched` |

## Concentración y suficiencia inicial

- La taxonomía aprobada concentra las decisiones IT Study legítimamente; no se presenta como consenso universal.
- No existe mínimo numérico uniforme. La suficiencia se evaluará por afirmación.
- Las fuentes de Google y PeopleCert se limitarán a describir los enfoques de los que son emisores; no respaldarán superioridad ni adopción general.
- No se prevén afirmaciones cuantitativas, temporales, históricas disputadas ni comparaciones de productos.
