# Reporte de relaciones taxonómicas

| Campo | Valor |
|---|---|
| `batchId` | `batch-001-taxonomy-domains` |
| `manifestVersion` | `v2` |
| `deliveryVersion` | `d2` |
| Nombre del reporte | Vecinos y fronteras entre dominios |
| `reportVersion` | `r2` |
| Fecha | `2026-07-21` |
| Rol responsable | ChatGPT Trabajo |
| Alcance cubierto | `neighborDomains` y `overlaps` de las doce fichas. |
| Contratos aplicados | `docs/02-taxonomy.md`; `docs/03-content-model.md`, sección 7; `docs/05-relationship-rules.md`; `work/BATCH-TEMPLATE.md` 1.0.0. |
| Estado del reporte | `complete` para autoría. |
| Limitaciones | No se crean objetos `relations[]`; `decision-0013-symmetric-relations-storage` permanece pendiente y no se interpreta. |
| Evidencia/archivos | `content/new/*.md`; validaciones `validation-004` y `validation-005`. |

## Resumen

- `neighborDomains`: 70 referencias dirigidas que forman 35 pares recíprocos; 0 destinos rotos y 0 autorreferencias.
- `overlaps`: 31 declaraciones de frontera; 0 destinos rotos y 0 autorreferencias.
- `relations[]`: 0; las relaciones taxonómicas derivadas no cuentan como relaciones ordinarias del lote.
- `relatedDisciplines` y `subdomains`: ausentes porque sus entradas no se materializan en este lote.

## Fronteras registradas

| ID local | Categoría | Origen | Destino | Clave | Dirección/inversa | Justificación | Evidencia | Compatibilidad | Cardinalidad | Riesgo de ciclo | Autoridad | Estado | Decisión requerida |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `relationship-001` | `approved-target` | `domain-ciberseguridad-riesgo` | `domain-infraestructura-operacion` | `overlaps` | campo de autoridad; sin inversa persistida | Operación aplica controles; seguridad y riesgo conservan hogar en Ciberseguridad. | `source-it-study-taxonomy` | verified | 0..n | no aplica | `overlaps` | registrado | none |
| `relationship-002` | `approved-target` | `domain-ciberseguridad-riesgo` | `domain-datos-analitica` | `overlaps` | campo de autoridad | Protección y riesgo se separan de calidad y ciclo del dato. | `source-it-study-taxonomy` | verified | 0..n | no aplica | `overlaps` | registrado | none |
| `relationship-003` | `approved-target` | `domain-ciberseguridad-riesgo` | `domain-estrategia-gobierno-liderazgo` | `overlaps` | campo de autoridad | Riesgo especializado frente a gobierno integral de IT. | `source-it-study-taxonomy` | verified | 0..n | no aplica | `overlaps` | registrado | none |
| `relationship-004` | `approved-target` | `domain-datos-analitica` | `domain-inteligencia-artificial` | `overlaps` | campo de autoridad | Ciclo del dato frente a sistemas que aprenden, generan o razonan. | `source-it-study-taxonomy` | verified | 0..n | no aplica | `overlaps` | registrado | none |
| `relationship-005` | `approved-target` | `domain-datos-analitica` | `domain-integracion-sistemas-empresariales` | `overlaps` | campo de autoridad | Integración centrada en datos frente a cooperación general de sistemas. | `source-it-study-taxonomy` | verified | 0..n | no aplica | `overlaps` | registrado | none |
| `relationship-006` | `approved-target` | `domain-datos-analitica` | `domain-estrategia-gobierno-liderazgo` | `overlaps` | campo de autoridad | Gobierno especializado de datos frente a gobierno tecnológico general. | `source-it-study-taxonomy` | verified | 0..n | no aplica | `overlaps` | registrado | none |
| `relationship-007` | `approved-target` | `domain-desarrollo-software` | `domain-ingenieria-software` | `overlaps` | campo de autoridad | Implementación frente a ciclo de vida, arquitectura y calidad. | `source-it-study-taxonomy` | verified | 0..n | no aplica | `overlaps` | registrado | none |
| `relationship-008` | `approved-target` | `domain-desarrollo-software` | `domain-integracion-sistemas-empresariales` | `overlaps` | campo de autoridad | Construcción de aplicaciones frente a interoperabilidad. | `source-it-study-taxonomy` | verified | 0..n | no aplica | `overlaps` | registrado | none |
| `relationship-009` | `approved-target` | `domain-estrategia-gobierno-liderazgo` | `domain-ingenieria-software` | `overlaps` | campo de autoridad | Arquitectura empresarial frente a arquitectura de software y soluciones. | `source-it-study-taxonomy` | verified | 0..n | no aplica | `overlaps` | registrado | none |
| `relationship-010` | `approved-target` | `domain-estrategia-gobierno-liderazgo` | `domain-ciberseguridad-riesgo` | `overlaps` | campo de autoridad | Gobierno integral frente a riesgo tecnológico especializado. | `source-it-study-taxonomy` | verified | 0..n | no aplica | `overlaps` | registrado | none |
| `relationship-011` | `approved-target` | `domain-estrategia-gobierno-liderazgo` | `domain-producto-experiencia` | `overlaps` | campo de autoridad | Portafolios/proyectos frente a gestión continua de producto y experiencia. | `source-it-study-taxonomy` | verified | 0..n | no aplica | `overlaps` | registrado | none |
| `relationship-012` | `approved-target` | `domain-fundamentos-computacion` | `domain-desarrollo-software` | `overlaps` | campo de autoridad | Programación como fundamento frente a implementación profesional. | `source-it-study-taxonomy` | verified | 0..n | no aplica | `overlaps` | registrado | none |
| `relationship-013` | `approved-target` | `domain-infraestructura-operacion` | `domain-sistemas-computo-ciberfisicos` | `overlaps` | campo de autoridad | Funcionamiento interno del sistema frente a provisión y operación. | `source-it-study-taxonomy` | verified | 0..n | no aplica | `overlaps` | registrado | none |
| `relationship-014` | `approved-target` | `domain-infraestructura-operacion` | `domain-ingenieria-software` | `overlaps` | campo de autoridad | Construcción/evolución frente a operación de plataformas y servicios. | `source-it-study-taxonomy` | verified | 0..n | no aplica | `overlaps` | registrado | none |
| `relationship-015` | `approved-target` | `domain-infraestructura-operacion` | `domain-ciberseguridad-riesgo` | `overlaps` | campo de autoridad | Operación de controles frente a cuerpo general de seguridad. | `source-it-study-taxonomy` | verified | 0..n | no aplica | `overlaps` | registrado | none |
| `relationship-016` | `approved-target` | `domain-ingenieria-software` | `domain-desarrollo-software` | `overlaps` | campo de autoridad | Decisiones/calidad/evolución frente a implementación. | `source-it-study-taxonomy` | verified | 0..n | no aplica | `overlaps` | registrado | none |
| `relationship-017` | `approved-target` | `domain-ingenieria-software` | `domain-estrategia-gobierno-liderazgo` | `overlaps` | campo de autoridad | Arquitectura de solución frente a arquitectura empresarial. | `source-it-study-taxonomy` | verified | 0..n | no aplica | `overlaps` | registrado | none |
| `relationship-018` | `approved-target` | `domain-integracion-sistemas-empresariales` | `domain-desarrollo-software` | `overlaps` | campo de autoridad | Desarrollo interno frente a cooperación mediante contratos y flujos. | `source-it-study-taxonomy` | verified | 0..n | no aplica | `overlaps` | registrado | none |
| `relationship-019` | `approved-target` | `domain-integracion-sistemas-empresariales` | `domain-redes-telecomunicaciones` | `overlaps` | campo de autoridad | Interoperabilidad semántica frente a conectividad y transporte. | `source-it-study-taxonomy` | verified | 0..n | no aplica | `overlaps` | registrado | none |
| `relationship-020` | `approved-target` | `domain-integracion-sistemas-empresariales` | `domain-estrategia-gobierno-liderazgo` | `overlaps` | campo de autoridad | Sistemas empresariales frente a arquitectura de capacidades. | `source-it-study-taxonomy` | verified | 0..n | no aplica | `overlaps` | registrado | none |
| `relationship-021` | `approved-target` | `domain-inteligencia-artificial` | `domain-datos-analitica` | `overlaps` | campo de autoridad | Modelos y sistemas de IA frente a ciclo del dato. | `source-it-study-taxonomy` | verified | 0..n | no aplica | `overlaps` | registrado | none |
| `relationship-022` | `approved-target` | `domain-inteligencia-artificial` | `domain-infraestructura-operacion` | `overlaps` | campo de autoridad | Ciclo de IA frente a plataforma y operación general. | `source-it-study-taxonomy` | verified | 0..n | no aplica | `overlaps` | registrado | none |
| `relationship-023` | `approved-target` | `domain-inteligencia-artificial` | `domain-ciberseguridad-riesgo` | `overlaps` | campo de autoridad | Riesgo específico de IA frente a capacidades generales de seguridad. | `source-it-study-taxonomy` | verified | 0..n | no aplica | `overlaps` | registrado | none |
| `relationship-024` | `approved-target` | `domain-producto-experiencia` | `domain-desarrollo-software` | `overlaps` | campo de autoridad | Necesidades/valor/experiencia frente a implementación. | `source-it-study-taxonomy` | verified | 0..n | no aplica | `overlaps` | registrado | none |
| `relationship-025` | `approved-target` | `domain-producto-experiencia` | `domain-estrategia-gobierno-liderazgo` | `overlaps` | campo de autoridad | Producto continuo frente a portafolios, programas y proyectos. | `source-it-study-taxonomy` | verified | 0..n | no aplica | `overlaps` | registrado | none |
| `relationship-026` | `approved-target` | `domain-producto-experiencia` | `domain-datos-analitica` | `overlaps` | campo de autoridad | Decisión de producto frente a capacidad analítica general. | `source-it-study-taxonomy` | verified | 0..n | no aplica | `overlaps` | registrado | none |
| `relationship-027` | `approved-target` | `domain-redes-telecomunicaciones` | `domain-infraestructura-operacion` | `overlaps` | campo de autoridad | Conectividad frente a provisión operativa. | `source-it-study-taxonomy` | verified | 0..n | no aplica | `overlaps` | registrado | none |
| `relationship-028` | `approved-target` | `domain-redes-telecomunicaciones` | `domain-ciberseguridad-riesgo` | `overlaps` | campo de autoridad | Comunicación frente a protección y riesgo. | `source-it-study-taxonomy` | verified | 0..n | no aplica | `overlaps` | registrado | none |
| `relationship-029` | `approved-target` | `domain-redes-telecomunicaciones` | `domain-integracion-sistemas-empresariales` | `overlaps` | campo de autoridad | Transporte frente a cooperación de aplicaciones y procesos. | `source-it-study-taxonomy` | verified | 0..n | no aplica | `overlaps` | registrado | none |
| `relationship-030` | `approved-target` | `domain-sistemas-computo-ciberfisicos` | `domain-infraestructura-operacion` | `overlaps` | campo de autoridad | Arquitectura/funcionamiento frente a recurso operado. | `source-it-study-taxonomy` | verified | 0..n | no aplica | `overlaps` | registrado | none |
| `relationship-031` | `approved-target` | `domain-sistemas-computo-ciberfisicos` | `domain-redes-telecomunicaciones` | `overlaps` | campo de autoridad | Dispositivo/interacción física frente a transmisión. | `source-it-study-taxonomy` | verified | 0..n | no aplica | `overlaps` | registrado | none |

Las 70 referencias de vecindad se validaron como recíprocas, pero no se convierten en objetos de relación ni resuelven la representación física pendiente de relaciones simétricas.
