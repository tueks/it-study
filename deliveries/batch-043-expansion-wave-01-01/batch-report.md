# Reporte de lote — `batch-043-expansion-wave-01-01`

## Estado previo a integración

`accepted`

## Resultado compacto

| Campo | Resultado |
|---|---:|
| Planificado | 12 |
| Producido | 12 |
| Aprobado operativamente | 12 |
| Preparado para integración | 12 |
| Sustituido | 0 |
| Descartado | 0 |
| Candidatos de reserva usados | 0 |
| Fuentes agregadas | 4 |
| Alias reconciliados | 15 |
| Hallazgos bloqueantes abiertos | 0 |
| Hallazgos mayores abiertos | 0 |

## Alcance

- Dominio: `domain-fundamentos-computacion`.
- Subdominio principal: `subdomain-teoria-modelos-computacion`.
- Baseline modificado: no.
- Entidades fuera del inventario: 0.
- Publicación externa: no autorizada.

## Revisión

- Revisión independiente registrada por el Responsable del proyecto.
- Review de GitHub: `4777813589`.
- Disposición: `approved-for-internal-integration`.
- Cambios adicionales solicitados: 0.

## Validación técnica

- Defecto detectado: el generador intentaba procesar `content/entities/AGENTS.md` como ficha.
- Corrección: exclusión explícita de archivos `AGENTS.md` en `frontend/scripts/generate-content.mjs`.
- GitHub Actions run conforme: `30138342025`.
- Commit validado: `92be9d74cda2f54c0e73eeacb98ee8f970a497ad`.
- `npm test`: conforme.
- `npm run build`: conforme.
- Catálogo generado durante validación: 176 entidades, 12 dominios y 20 estructuras.
- Advertencia no bloqueante: bundle principal superior a 500 kB después de minificación.

## Integración

La integración canónica se completará mediante la fusión del PR #4. Después de la fusión se registrarán el merge commit, las transiciones `integrated` y `closed`, el progreso del inventario y la próxima acción `batch-044-expansion-wave-01-02`.