# Reporte de autoevaluación

| Campo | Valor |
|---|---|
| `batchId` | `batch-001-taxonomy-domains` |
| `manifestVersion` | `v1` |
| `deliveryVersion` | `d1` |
| Nombre del reporte | Autoevaluación de autoría |
| `reportVersion` | `r1` |
| Fecha | `2026-07-21` |
| Rol responsable | ChatGPT Trabajo |
| Alcance cubierto | Doce fichas y doce reportes obligatorios. |
| Contratos aplicados | `docs/09-quality-criteria.md`; `work/REVIEW-CHECKLIST.md` 1.0.0; `work/BATCH-TEMPLATE.md` 1.0.0. |
| Estado del reporte | `complete` para autoría. |
| Limitaciones | No es revisión independiente y no determina severidad final, aprobación ni aceptación. |
| Evidencia/archivos | Paquete completo y `validation-report.md`. |

| Dimensión | Criterio | Resultado | Evidencia/archivo | Hallazgo | Corrección realizada | Limitación | Siguiente acción |
|---|---|---|---|---|---|---|---|
| Integridad estructural | 12 fichas, frontmatter y cuerpo. | conforme | `validation-001`, `validation-002` | none | none | Revisión humana pendiente. | Revisor independiente. |
| Conformidad taxonómica | IDs, nombres, alcance y fronteras aprobados. | conforme | Inventario, taxonomía, `validation-003` | none | none | La autoría no ratifica taxonomía. | Revisar 12/12. |
| Calidad editorial | Claridad, español principal e inglés predominante preservado. | conforme | `content/new/` | none | none | No automatizable por completo. | Revisión editorial. |
| Precisión conceptual | Definición, propósito y frontera no circulares. | conforme | Fichas y mapa de afirmaciones | none | none | Juicio independiente pendiente. | Revisión conceptual. |
| Fuentes | Afirmaciones centrales mapeadas y disponibilidad registrada. | conforme | `sources-report.md` r2 | none | TOGAF retirado del uso probatorio. | Registros `source` canónicos no autorizados. | Coordinar antes de `in-review` si se exigen referencias canónicas. |
| Relaciones | Solo campos de autoridad; destinos válidos. | conforme | `relationship-report.md`; `validation-004`, `005` | none | Se completaron tres referencias recíprocas de vecindad. | No se resuelve `decision-0013`. | Revisión relacional. |
| Duplicados | IDs, nombres y aliases sin colisiones materiales. | conforme | `duplicate-report.md` r2 | none | none | Revisión humana de polisemia pendiente. | Revisor independiente. |
| Vigencia | Fundamento estable/slow-evolution y fuentes fechadas. | conforme | Fichas; `sources-report.md` | none | none | Sin calendario uniforme por decision-0017. | Revisar por señales. |
| Cobertura | Exactamente 12 de 12 producidas. | conforme | `coverage-report.md` | none | none | 0 aprobadas. | No contar como mínimo final. |
| Accesibilidad cognitiva | Secciones breves, fronteras explícitas y siglas contextualizadas. | conforme | `content/new/` | none | none | Requiere lectura independiente. | Revisión cognitiva. |
| Seguridad | Sin secretos, instrucciones dañinas ni material operativo sensible. | conforme | Diff del lote | none | none | none | Mantener. |
| Separación contenido-diseño | Sin HTML, CSS, layout, color ni componente. | conforme | `validation-007` | none | none | none | Mantener. |
| Trazabilidad | Batch, decisiones, fechas, fuentes y reportes reconciliados. | conforme | paquete | none | none | Evidencia remota pendiente hasta publicar commits. | Verificar commits. |
| Alcance | 12 nuevas; 0 modificadas; 0 extras. | conforme | `validation-001` | none | none | none | Mantener `v1`. |
| Coherencia de reportes | IDs/versiones/conteos conciliados. | conforme | `validation-008` | none | none | `review-report.md` permanece pending correctamente. | Revisión independiente. |

Recomendación de autoría: conservar el lote en `in-production` hasta recepción formal y asignación de revisor. No se declara ninguna ficha `approved` ni el lote `accepted`.
