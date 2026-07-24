# IT Study — Contrato simplificado de producción para la expansión a 1,000 entidades

## 1. Autoridad

Este contrato aplica exclusivamente a `decision-0024-thousand-entity-expansion` y `docs/11-thousand-entity-expansion-plan.md`.

No modifica el contenido de las 164 entidades de línea base ni autoriza publicación externa.

## 2. Roles

### Productor

Investiga, selecciona fuentes, redacta, clasifica, propone aliases y prerrequisitos, ejecuta autoevaluación y corrige hallazgos.

### Revisor independiente

Evalúa precisión, claridad, clasificación, fuentes, duplicados, dependencias y conformidad. Puede:

- aprobar operativamente;
- solicitar cambios;
- rechazar un candidato;
- autorizar su sustitución por un candidato de reserva.

El productor y el revisor no pueden ser el mismo rol en la misma unidad, aunque ambos sean agentes.

### Integrador

Valida estructura e integración, incorpora contenido conforme, regenera derivados, ejecuta pruebas y cierra el lote técnico.

### Responsable del proyecto

Interviene solo ante las excepciones materiales enumeradas en el plan.

## 3. Fuente de alcance

El alcance exacto de cada lote es la combinación de:

- una fila del registro de ondas;
- las filas del inventario cuyo `recommended_batch` coincide con el lote;
- este contrato;
- las decisiones y contratos editoriales vigentes.

No se exige manifiesto individual adicional.

## 4. Flujo

1. Preflight de IDs, nombres, aliases y dependencias.
2. Investigación y registro de fuentes.
3. Producción de fichas.
4. Autoevaluación del productor.
5. Revisión independiente.
6. Corrección de hallazgos.
7. Validación estructural y técnica.
8. Integración canónica.
9. Regeneración de índices.
10. Pruebas y build.
11. Reporte breve y cierre.
12. Continuación automática al siguiente lote.

## 5. Puertas

Un lote puede cerrarse cuando:

- todas sus entidades están integradas o sustituidas;
- no hay bloqueantes ni mayores abiertos;
- IDs, rutas y nombres son únicos;
- las referencias obligatorias resuelven;
- las fuentes son válidas;
- los estados son conformes;
- los derivados se regeneran;
- pruebas y build aplicables son conformes.

Los defectos menores pueden corregirse dentro del mismo lote sin escalar.

## 6. Sustituciones

Un candidato puede sustituirse cuando:

- duplica una entidad;
- funciona mejor como alias;
- carece de valor autónomo;
- es excesivamente específico;
- no tiene fuentes suficientes;
- contradice el modelo.

La sustitución debe:

- permanecer en el mismo dominio;
- usar un candidato de reserva;
- conservar el total del dominio;
- registrar candidato retirado, sustituto y razón;
- no requerir autorización humana.

## 7. Reportes

Cada lote genera un reporte compacto:

- planificado;
- producido;
- integrado;
- sustituido;
- descartado;
- aliases reconciliados;
- fuentes agregadas;
- hallazgos;
- resultado de validación;
- commit.

Cada onda genera un resumen acumulativo. El Responsable del proyecto recibe reportes por onda, no expedientes por entidad.

## 8. Bloqueos permitidos

Solo bloquean la expansión completa:

- cambio de un dominio o del modelo;
- conflicto normativo no resoluble;
- meta superior a 1,000;
- defecto sistémico que invalide el inventario o el generador.

Un defecto local bloquea únicamente su entidad o lote. Se usa una sustitución cuando sea posible.

## 9. Prohibiciones

- crear entidades fuera del inventario maestro o reserva;
- inventar fuentes;
- duplicar una entidad por idioma;
- usar aliases como entidades;
- cambiar IDs existentes;
- integrar contenido sin revisión independiente;
- ocultar defectos con defaults o tolerancias;
- considerar una cuota como evidencia de calidad;
- publicar externamente.

## 10. Cierre

El integrador puede transicionar automáticamente un lote técnico conforme de `in-review` a `accepted`, `integrated` y `closed` bajo la delegación de `decision-0024`. Esta transición es operativa y no concede autoridad para cambiar alcance o contratos.
