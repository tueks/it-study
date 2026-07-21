# AGENTS.md — Contrato operativo de Codex para IT Study

Este archivo aplica a todo el repositorio. Es un contrato resumido: no sustituye los documentos especializados ni autoriza decisiones todavía pendientes.

## Propósito

IT Study es un mapa de conocimiento y glosario contextual de Tecnologías de la Información orientado a alfabetización transversal. Su profundidad principal es `contextual-understanding`; no sustituye cursos especializados ni enseña implementación paso a paso.

Codex implementa y mantiene las capacidades técnicas autorizadas del repositorio. Debe preservar el significado, la taxonomía, los IDs, las relaciones, los estados y la separación entre contenido y presentación. El código, la navegación y los derivados consumen las fuentes canónicas; nunca las reinterpretan.

## Precedencia

Ante cualquier decisión o conflicto aparente, aplicar esta precedencia:

1. documentos normativos aprobados de `docs/`, conforme a su alcance;
2. decisiones `accepted` vigentes de `docs/10-decision-log.md`, únicamente en el alcance y desde la fecha indicados;
3. contratos aplicables de `work/`;
4. manifiesto autorizado del lote y sus excepciones registradas;
5. inventarios de planificación;
6. entregas y reportes del lote;
7. código, índices, cachés, vistas y otros derivados.

`00-bootstrap-brief.md` es antecedente fundacional. Cuando un documento especializado aprobado concreta una materia, prevalece para esa materia. Si dos autoridades vigentes se contradicen y la precedencia no resuelve el conflicto, detener el alcance afectado y registrarlo; no elegir silenciosamente.

El código, un esquema, una interfaz o un derivado nunca puede modificar por implicación una decisión editorial.

## Lectura obligatoria

Antes de trabajar, Codex debe leer completos los documentos aplicables al cambio. Como mínimo, para integración de contenido:

- `work/HANDOFF-TO-CODEX.md`;
- el manifiesto vigente del lote;
- `review-report.md`;
- decisiones, excepciones y migraciones aplicables;
- contratos de taxonomía, contenido, relaciones, diseño y calidad afectados;
- baseline y evidencia de aceptación indicados por el handoff.

No asumir que la presencia de una carpeta, inventario, entrega o estado de lote autoriza integración.

## Acciones permitidas

Dentro de un alcance autorizado, Codex puede:

- validar estructura, formato, IDs, aliases, referencias, relaciones, fuentes, estados y cobertura;
- implementar schemas y validadores cuando su contrato haya sido autorizado;
- integrar contenido editorial `approved` perteneciente a una entrega `accepted`;
- detectar referencias rotas, duplicados, colisiones y divergencias entre fuentes y derivados;
- generar índices, búsquedas, filtros, navegación y otros derivados reproducibles;
- ejecutar pruebas, build, preflight y verificaciones de accesibilidad;
- mantener documentación técnica y registrar decisiones técnicas materiales;
- preparar cambios acotados, trazables y revisables;
- producir evidencia de integración, reconciliación y rollback.

Una facultad técnica no concede autoridad editorial.

## Acciones prohibidas

Codex no debe:

- aprobar contenido editorial ni cambiar `editorialStatus` a `approved`;
- inventar o reescribir definiciones, ejemplos, ventajas, limitaciones o fuentes para superar validaciones;
- cambiar taxonomía, dominios, subdominios, disciplinas, familias, tipos, subtipos o vocabularios;
- crear, reutilizar, renombrar o migrar IDs sin decisión y plan autorizados;
- inventar relaciones, destinos, inversas persistidas o asociaciones para navegación;
- corregir semántica silenciosamente;
- integrar contenido no `approved` o lotes no `accepted`;
- tratar inventarios o ejemplos como contenido aprobado del MVP;
- modificar índices, JSON generado, cachés o vistas como si fueran fuentes;
- duplicar contenido por idioma, dominio, dispositivo, layout o interfaz;
- acoplar contenido a componentes, colores, iconos, posiciones o breakpoints;
- resolver asuntos `pending-resolution`;
- ampliar el MVP, las cantidades o los lotes sin autorización;
- introducir backend, autenticación, cuentas, comunidad o funciones excluidas sin decisión aceptada;
- ocultar un defecto editorial mediante tolerancias, defaults o código especial.

## Handoff e integración

La integración exige un handoff conforme y una entrega aceptada.

1. **Baseline:** fijar commit, versión contractual, lote y fuentes canónicas de partida.
2. **Diff explícito:** identificar cada archivo nuevo, modificado, retirado o generado.
3. **Preflight:** verificar autoridades, estados, hashes o referencias, dependencias, alcance y capacidad de rollback.
4. **Validación:** ejecutar comprobaciones estructurales, taxonómicas, relacionales, editoriales automatizables, de fuentes, de build y de accesibilidad aplicable.
5. **Atomicidad:** integrar contenido, referencias y derivados coordinadamente; no dejar estados intermedios incoherentes.
6. **Evidencia:** registrar comandos o validaciones, resultados, excepciones, commit y artefactos generados.
7. **Reconciliación:** comparar lo aceptado, lo integrado y la cobertura resultante; explicar cualquier diferencia autorizada.
8. **Rollback:** conservar un punto de retorno verificable y documentar cómo revertir sin perder fuentes.
9. **Cierre:** devolver evidencia a la coordinación; Codex no declara por sí solo el lote `closed` ni el producto publicado.

Los estados no son intercambiables:

| Estado | Unidad | Significado |
|---|---|---|
| `approved` | entrada editorial | contenido aceptado por autoridad editorial y ordinariamente publicable |
| `accepted` | lote | entrega superó revisión editorial/conceptual |
| `integrated` | lote | contenido aceptado fue incorporado y validado en fuentes canónicas |
| `closed` | lote | integración, cobertura, decisiones y pendientes quedaron reconciliados |
| publicado | build/producto | una versión autorizada fue desplegada; no se deduce de los estados anteriores |

## Manejo de defectos

Cuando Codex detecte un defecto:

- registrar archivo, ID, regla, evidencia, severidad y alcance;
- detener únicamente el alcance afectado, salvo que el defecto comprometa integridad global;
- devolver defectos editoriales o conceptuales al responsable correspondiente;
- no reinterpretar texto, tipo, dominio, relación o fuente;
- no crear destinos ficticios ni eliminar referencias para hacer pasar una validación;
- separar defectos de contenido, contrato, integración, código y derivados;
- reanudar solo con corrección aceptada, excepción vigente o decisión aplicable.

Los fallos bloqueantes deben permanecer visibles. Una advertencia solo puede aceptarse con la justificación y autoridad previstas por los contratos.

## Código y arquitectura

- No seleccionar todavía una arquitectura, framework, generador, búsqueda o estrategia de despliegue no autorizados.
- Aplicar decisiones aceptadas sin extender su alcance por conveniencia técnica.
- Registrar decisiones técnicas materiales en el mecanismo aprobado.
- Mantener Markdown con frontmatter YAML como fuente editorial principal mientras el contrato vigente así lo establezca.
- Mantener fuentes canónicas separadas de JSON, índices, bases de búsqueda y otros derivados.
- Generar derivados de forma determinista y reproducible.
- Evitar contenido educativo hard-coded en componentes.
- Preservar accesibilidad, neutralidad tecnológica y reutilización entre interfaces.
- Las rutas, títulos, aliases y URLs no sustituyen IDs.
- La navegación y visualización derivan de datos válidos; no crean semántica.

## Git y cambios

- Trabajar con cambios acotados y asuntos relacionados.
- No combinar correcciones editoriales, decisiones estructurales e implementación técnica sin autorización explícita.
- Evitar commits con archivos ajenos al alcance.
- Conservar historial; no reescribir archivos aprobados fuera de alcance.
- Verificar el estado del repositorio antes de escribir y antes de entregar.
- Informar archivos creados, modificados, eliminados y generados.
- Documentar pruebas, validaciones, advertencias y asuntos no resueltos.
- Mantener cada cambio revisable y reversible.
- No forzar actualizaciones de rama ni reescribir historia salvo autorización expresa.

## Decisiones pendientes que deben preservarse

Codex no debe resolver ni anticipar:

- `decision-0012-related-relations-migration`;
- `decision-0013-symmetric-relations-storage`;
- `decision-0014-certification-issuer-model`;
- `decision-0015-dark-mode-delivery`;
- `decision-0016-operational-ownership`;
- `decision-0017-review-calendars`;
- `decision-0018-final-technical-metrics`.

Si una tarea depende materialmente de cualquiera de ellas, detener ese alcance, presentar evidencia y solicitar una decisión. El bloqueo no autoriza ampliar alcance ni adoptar un default irreversible.

## Regla final

Cuando una implementación técnicamente posible contradiga o complete silenciosamente una decisión editorial pendiente, la implementación debe detenerse. La integridad semántica y la trazabilidad tienen precedencia sobre la conveniencia del código.
