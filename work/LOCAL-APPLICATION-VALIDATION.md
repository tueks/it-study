# Validación de la aplicación local

Estado: `blocked-source-validation`.

## Baseline

- Arquitectura autorizada: `decision-0023-local-static-application-architecture`.
- Fuentes de entrada: Markdown canónico `approved` bajo `content/`.
- Derivado previsto: `frontend/src/generated/catalog.json`, no versionado ni autoritativo.

## Implementado

- Proyecto local React, TypeScript y Vite en `frontend/`.
- Generador determinista que lee exclusivamente fuentes `approved`, comprueba unicidad de IDs y referencias a entidades.
- Portada, búsqueda local, mapa de dominios con lista navegable por teclado, fichas resumidas, comparaciones, escenarios, rutas y tema claro/oscuro persistente.

## Hallazgo bloqueante

| Severidad | Archivo | Regla | Evidencia | Alcance |
|---|---|---|---|---|
| bloqueante | `content/editorial/comparisons/comparison-http-tls.md` | Frontmatter YAML válido | `summary` contiene un `:` sin comillas, por lo que el parser interpreta una asignación anidada y no conserva el registro. | Generación completa del catálogo; pruebas y build. |

El generador falla de forma intencional: no se omite la comparación aprobada ni se reescribe su texto para superar la validación. La corrección debe provenir de la autoridad editorial y conservar el significado aprobado. Tras una corrección aceptada, ejecutar desde `frontend/`: `pnpm test` y `pnpm build`.

## Rollback local

Revertir el commit de aplicación validado y volver a ejecutar `pnpm build`. No se modifica `content/` para revertir la interfaz.
