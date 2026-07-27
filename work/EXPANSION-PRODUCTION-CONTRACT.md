# IT Study — Contrato simplificado de producción para la expansión a 1,000 entidades

## 1. Autoridad

Este contrato aplica exclusivamente a `decision-0024-thousand-entity-expansion` y `docs/11-thousand-entity-expansion-plan.md`.

No modifica el contenido de las 164 entidades de línea base ni autoriza publicación externa.

## 2. Roles

### Productor

Investiga, selecciona fuentes, redacta, clasifica, propone aliases y prerrequisitos, ejecuta autoevaluación, corrige hallazgos y prepara el pull request en estado final revisable.

### Revisor independiente

El Responsable del proyecto actúa como revisor humano independiente en la puerta final del pull request. Evalúa precisión, claridad, clasificación, fuentes, duplicados, dependencias y conformidad. Puede:

- aprobar el pull request para integración;
- solicitar cambios;
- rechazar un candidato;
- autorizar su sustitución por un candidato de reserva.

El productor y el revisor no pueden ser el mismo rol en la misma unidad.

### Integrador

Antes de entregar el pull request, valida estructura e integración, regenera derivados y ejecuta pruebas y build. Después del merge manual, verifica la integración, registra el commit real y cierra el lote técnico.

### Responsable del proyecto

Revisa personalmente el pull request y, cuando el resultado sea conforme, realiza el merge manual desde GitHub. También interviene ante las excepciones materiales enumeradas en el plan.

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
5. Corrección de hallazgos conocidos.
6. Preparación de estados finales en la rama del pull request:
   - entidades y fuentes en `approved` / `verified`;
   - `reviewedAt` registrado;
   - lote en `accepted`;
   - reportes y evidencias actualizados.
7. Regeneración de índices y derivados aplicables.
8. Validación estructural y técnica final.
9. Ejecución de pruebas y build.
10. Entrega del pull request al Responsable del proyecto sin commits operativos pendientes.
11. Revisión humana del pull request por el Responsable del proyecto.
12. Corrección y nueva validación cuando se soliciten cambios.
13. Merge manual por el Responsable del proyecto cuando el pull request sea conforme.
14. Verificación post-merge del commit real.
15. Registro de transiciones `integrated` y `closed`, actualización del inventario, conteos y siguiente lote.
16. Continuación al siguiente lote.

### 4.1 Estados preparados dentro del pull request

Los valores `approved`, `verified` y `accepted` incluidos en la rama del pull request representan el estado final propuesto para integración. No son canónicos ni efectivos mientras permanezcan fuera de `main`.

La aprobación humana y el merge manual del Responsable del proyecto hacen efectivos esos estados dentro del corpus canónico. Si el Responsable solicita cambios, el productor actualiza el mismo pull request, vuelve a ejecutar las validaciones y entrega un nuevo último commit.

El productor no realiza el merge. Después de que el Responsable informe que aprobó y fusionó el pull request, el integrador verifica el estado en GitHub y completa únicamente los registros post-merge.

## 5. Puertas

Un pull request puede entregarse para revisión humana cuando:

- contiene exclusivamente el alcance autorizado;
- todas sus entidades y fuentes tienen sus estados finales preparados;
- no hay bloqueantes ni mayores conocidos abiertos;
- IDs, rutas y nombres son únicos;
- las referencias obligatorias resuelven;
- las fuentes son válidas;
- los derivados aplicables están regenerados;
- pruebas y build aplicables son conformes;
- el último commit no deja cambios operativos pendientes antes del merge.

Un lote puede cerrarse cuando:

- el Responsable del proyecto aprobó y fusionó el pull request;
- el merge fue verificado en `main`;
- todas sus entidades quedaron integradas o sustituidas;
- no hay bloqueantes ni mayores abiertos;
- el inventario, los conteos, el registro de ondas y el reporte final fueron actualizados.

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
- no requerir autorización humana adicional, salvo que el Responsable del proyecto cuestione la sustitución durante la revisión del pull request.

## 7. Reportes

Cada lote genera un reporte compacto:

- planificado;
- producido;
- preparado para integración;
- integrado;
- sustituido;
- descartado;
- aliases reconciliados;
- fuentes agregadas;
- hallazgos;
- resultado de validación;
- pull request;
- commit de merge verificado.

Cada onda genera un resumen acumulativo. El Responsable del proyecto revisa los pull requests y recibe reportes acumulativos por onda; no se requieren expedientes por entidad.

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
- presentar un pull request con estados o validaciones pendientes que deban corregirse antes del merge;
- considerar los estados preparados en una rama como integración canónica antes del merge;
- integrar contenido sin revisión humana del Responsable del proyecto;
- realizar el merge desde el rol productor o integrador;
- ocultar defectos con defaults o tolerancias;
- considerar una cuota como evidencia de calidad;
- publicar externamente.

## 10. Cierre

El lote permanece `accepted` mientras espera la revisión y el merge manual del Responsable del proyecto. Una vez verificado el merge en `main`, el integrador puede registrar las transiciones `accepted` → `integrated` → `closed`, actualizar los conteos y habilitar el siguiente lote.

Estas transiciones son operativas y no conceden autoridad para cambiar alcance, taxonomía, modelo, audiencia, idioma o publicación.