# Comprobación inicial de duplicados y aliases

| Campo | Valor |
|---|---|
| `batchId` | `batch-001-taxonomy-domains` |
| `manifestVersion` | `v2` |
| `deliveryVersion` | `d2` |
| Nombre del reporte | Comprobación inicial de duplicados y aliases |
| `reportVersion` | `r3` |
| Fecha | `2026-07-21` |
| Rol responsable | ChatGPT Trabajo |
| Alcance cubierto | Los doce IDs de dominio, títulos, nombres ingleses, 24 aliases y 18 IDs/títulos/referencias de fuente frente al repositorio. |
| Contratos aplicados | `docs/02-taxonomy.md`; `docs/03-content-model.md` 1.0; `work/BATCH-TEMPLATE.md` 1.0.0. |
| Estado del reporte | `complete` para la entrega de autoría. |
| Limitaciones | No existen lotes concurrentes ni contenido productivo previo en el repositorio al iniciar. |
| Evidencia/archivos | `inventories/domains.yaml`; `sources-report.md`; `content/new/*.md`; búsqueda local repetida de IDs, nombres, aliases, títulos, designaciones y referencias. |

## Búsquedas ejecutadas

| Unidad | IDs | Nombres canónicos | Aliases/siglas/traducciones | Variantes y coincidencias | Lotes concurrentes | Evidencia |
|---|---|---|---|---|---|---|
| DOM-01 | ID único; aparece solo en inventario/planificación. | Sin otro dominio con el mismo nombre. | `fundamentos de la computación`, `computing fundamentals`: sin colisión. | `Computing Foundations` es traducción propia. | Ninguno. | `inventories/domains.yaml`; `rg` global. |
| DOM-02 | ID único. | Sin duplicado. | `computer systems`, `sistemas ciberfísicos`: aliases parciales controlados. | Coinciden con partes del mismo alcance, no con otra identidad. | Ninguno. | Mismas búsquedas. |
| DOM-03 | ID único. | Sin duplicado. | `software development`, `desarrollo de aplicaciones`: sin colisión. | Se distingue de DOM-04 por implementación frente a ciclo de vida/arquitectura/calidad. | Ninguno. | Mismas búsquedas. |
| DOM-04 | ID único. | Sin duplicado. | `software engineering`, `ingeniería de software`: sin colisión. | Vecino de DOM-03, no duplicado. | Ninguno. | Mismas búsquedas. |
| DOM-05 | ID único. | Sin duplicado. | `networking`, `redes`: sin colisión. | `redes` es nombre corto, no dominio adicional. | Ninguno. | Mismas búsquedas. |
| DOM-06 | ID único. | Sin duplicado. | `infrastructure and operations`, `I&O`: sin colisión. | Cloud, DevOps, SRE, Platform Engineering e ITSM permanecen componentes, no aliases del dominio completo. | Ninguno. | Mismas búsquedas. |
| DOM-07 | ID único. | Sin duplicado. | `cybersecurity`, `seguridad de la información`: sin colisión. | `seguridad de la información` es contextual y no fusiona privacidad/riesgo. | Ninguno. | Mismas búsquedas. |
| DOM-08 | ID único. | Sin duplicado. | `data and analytics`, `data`: sin colisión. | `data` se mantiene contextual; no es alias de DOM-09. | Ninguno. | Mismas búsquedas. |
| DOM-09 | ID único. | Sin duplicado. | `AI`, `IA`: siglas únicas entre dominios. | No se confunde con Data and Analytics. | Ninguno. | Mismas búsquedas. |
| DOM-10 | ID único. | Sin duplicado. | `enterprise integration`, `integración empresarial`: sin colisión. | Se distingue de arquitectura empresarial de DOM-12. | Ninguno. | Mismas búsquedas. |
| DOM-11 | ID único. | Sin duplicado. | `digital product and UX`, `producto y experiencia`: sin colisión. | Alias abreviados no sustituyen el nombre completo. | Ninguno. | Mismas búsquedas. |
| DOM-12 | ID único. | Sin duplicado. | `technology governance`, `gobierno de IT`: sin colisión. | Gobierno es parte del dominio; no equivale a su alcance completo. | Ninguno. | Mismas búsquedas. |

## Resultados y disposición

| ID local | Caso | Posible duplicado/colisión | Polisemia | Coincidencias descartadas | Consolidación propuesta | Decisión existente | Bloqueo | Autoridad requerida | Disposición final/evidencia |
|---|---|---|---|---|---|---|---|---|---|
| `duplicate-001` | `not-duplicate` | DOM-03 frente a DOM-04. | Desarrollo e ingeniería se solapan en lenguaje cotidiano. | La taxonomía separa implementación de ciclo de vida, arquitectura y calidad. | `none` | `decision-0003-taxonomy-structure` | `none` | Responsable del proyecto para cualquier cambio futuro. | Mantener identidades y frontera aprobadas. |
| `duplicate-002` | `not-duplicate` | DOM-08 frente a DOM-09. | Data puede usarse de modo excesivamente amplio. | El inventario marca `data` como alias contextual y la taxonomía aloja IA por separado. | `none` | `decision-0003-taxonomy-structure` | `none` | Responsable del proyecto para cualquier cambio futuro. | Mantener identidades; no añadir `data` a DOM-09. |
| `duplicate-003` | `not-duplicate` | DOM-10 frente a arquitectura empresarial de DOM-12. | “Enterprise” aparece en ambos contextos. | Integración/sistemas empresariales no equivale a gobierno arquitectónico organizacional. | `none` | `decision-0003-taxonomy-structure` | `none` | Responsable del proyecto para cualquier cambio futuro. | Mantener frontera y aliases actuales. |
| `duplicate-004` | `alias-confirmed` | 24 aliases del inventario. | Algunos son nombres parciales o contextuales. | Ninguno colisiona con el ID, título, `englishName` o alias de otro dominio. | `none` | `decision-0005-content-format-and-identifiers` | `none` | No se requiere decisión. | Copiar únicamente los aliases autorizados con su `kind` e idioma. |

## Conclusión inicial

Resultado: `none` para duplicados materiales o colisiones bloqueantes. Los doce IDs son únicos; `DOM-01`–`DOM-12` quedan como códigos documentales no canónicos; los 24 aliases están autorizados por inventario y no justifican nuevas entradas, fusiones ni migraciones.

## Repetición posterior a producción

| Comprobación | Resultado | Evidencia |
|---|---|---|
| Cantidad de IDs producidos | 12 IDs distintos y exactamente iguales a los 12 autorizados. | Extracción de `id:` en `content/new/*.md`. |
| Correspondencia ID/archivo | 12 de 12; cada nombre de archivo coincide con su `id`. | Validación local `validation-002`. |
| Nombres y `englishName` | 12 de 12 coinciden con el inventario. | Comparación YAML contra `inventories/domains.yaml`. |
| Aliases | 24 de 24 copiados con valor, idioma y clase; 0 añadidos. | Comparación YAML contra inventario. |
| Colisiones internas | 0 por valor normalizado entre IDs; 0 aliases que designen otro dominio. | Validación local `validation-003`. |
| Códigos documentales usados como ID | 0. | Búsqueda de `^id: DOM-`. |
| Lotes concurrentes | `none`; no existen otras carpetas bajo `deliveries/` en la línea base. | Árbol del repositorio y búsqueda global. |
| IDs de fuente | 18 de 18 distintos, con nombre de archivo igual al ID y sin colisiones globales. | `validation-010`; búsqueda global de `^id: source-`. |
| Identidad de fuente | 18 obras/autoridades usadas reconciliadas por organización, título, designación y `reference`; 0 duplicados por URL o edición. | `sources-report.md`; `validation-012`. |

Disposición final de autoría: `none` para duplicados o colisiones bloqueantes. La revisión independiente conserva autoridad sobre la severidad y la decisión final.
