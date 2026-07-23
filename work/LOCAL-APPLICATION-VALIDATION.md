# Validación de la aplicación local

Estado: `build-validated`.

## Baseline

- Arquitectura autorizada: `decision-0023-local-static-application-architecture`.
- Fuentes de entrada: Markdown canónico `approved` bajo `content/`.
- Derivado previsto: `frontend/src/generated/catalog.json`, no versionado ni autoritativo.

## Implementado

- Proyecto local React, TypeScript y Vite en `frontend/`.
- Generador determinista que lee exclusivamente fuentes `approved`, comprueba unicidad de IDs y referencias a entidades.
- Portada, búsqueda local, mapa de dominios con lista navegable por teclado, fichas resumidas, comparaciones, escenarios, rutas y tema claro/oscuro persistente.

## Hallazgo resuelto

| Severidad | Archivo | Regla | Evidencia | Alcance |
|---|---|---|---|---|
| resuelto | `content/editorial/comparisons/comparison-http-tls.md` | Frontmatter YAML válido | `summary` contenía un `:` sin comillas. Se preservó literalmente el texto y se corrigió solo su serialización YAML. | La generación completa vuelve a incluir la comparación. |

El generador falla de forma intencional ante frontmatter inválido: no omite contenido aprobado ni lo reescribe para superar una validación.

## Resultados

- `pnpm install --frozen-lockfile`: conforme.
- `pnpm test`: conforme; catálogo con 164 entidades, 12 dominios y 20 estructuras aprobadas.
- `pnpm build`: conforme; `dist/` generado en 416 ms.
- Vite informa una advertencia no bloqueante sobre un chunk JavaScript de 513 kB sin comprimir (113.71 kB gzip). La interfaz inicial se mantiene local y funcional; evaluar división de código durante la puerta B032 junto con las mediciones reales de Core Web Vitals.
- La comprobación interactiva se realizó temporalmente mediante Vite en `0.0.0.0`, bajo autorización explícita, sin publicación ni cambios de firewall; el proceso se detuvo al finalizar. La portada, búsqueda, mapa, selección de dominio, tema persistente y vista móvil se comprobaron en navegador sin errores de consola.
- La búsqueda incluye nombres canónicos, nombres ingleses y acrónimos derivados determinísticamente de dichos títulos aprobados; por ejemplo, `TLS` recupera `Transport Layer Security`. No se escriben aliases ni contenido en las fuentes canónicas.
- Las métricas de Core Web Vitals de `decision-0018` permanecen pendientes de un perfil de medición específico para B032; las pruebas de build e interacción no sustituyen LCP, INP y CLS medidos.

## Rollback local

Revertir el commit de aplicación validado y volver a ejecutar `pnpm build`. No se modifica `content/` para revertir la interfaz.
