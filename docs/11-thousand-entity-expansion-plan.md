# IT Study — Plan de expansión a 1,000 entidades

## 1. Identificación

| Campo | Valor |
|---|---|
| Proyecto | IT Study |
| Documento | Plan normativo de expansión post-MVP |
| Ruta | `docs/11-thousand-entity-expansion-plan.md` |
| Estado | `approved` |
| Fecha de aprobación | `2026-07-24` |
| Autoridad | Responsable del proyecto |
| Decisión aplicable | `decision-0024-thousand-entity-expansion` |
| Línea base | 164 entidades canónicas aprobadas |
| Meta | 1,000 entidades canónicas totales |
| Producción nueva | 836 entidades |

## 2. Propósito

Este documento autoriza y organiza la expansión posterior al MVP de IT Study. El MVP de 164 entidades permanece cerrado como línea base validada; su límite inicial de 210 no limita esta fase post-MVP.

La expansión busca una cobertura transversal sólida del vocabulario utilizado en conversaciones, documentación, vacantes, colaboración y aprendizaje contextual de IT. No convierte las fichas en cursos, tutoriales extensos ni manuales operativos.

## 3. Decisiones adoptadas

1. Se fija una meta exacta de **1,000 entidades canónicas totales**: 164 existentes y 836 nuevas.
2. Las 164 entidades existentes no se reabren ni reclasifican de forma general.
3. Se crea un único inventario maestro completo antes de producir contenido nuevo.
4. Los lotes técnicos consumen exclusivamente candidatos del inventario maestro; no amplían silenciosamente el universo.
5. La selección, clasificación, aliases, fuentes, dependencias, redacción, revisión, corrección e integración ordinarias quedan delegadas al flujo de producción.
6. El Responsable del proyecto no aprueba entidades ni lotes individualmente.
7. La producción se reporta por onda y solo se detiene ante una excepción material definida en este documento.
8. La revisión independiente se conserva, pero puede ser ejecutada por un rol o agente distinto del productor sin intervención del Responsable del proyecto.
9. Comparaciones, escenarios y rutas adicionales quedan en una fase editorial posterior y no son requisito para alcanzar las 1,000 entidades.
10. La publicación externa continúa requiriendo decisión expresa.

## 4. Alcance preservado

Permanecen vigentes:

- los 12 dominios, 48 subdominios y 12 disciplinas;
- las familias y tipos del modelo de contenido;
- Markdown UTF-8 con frontmatter YAML como fuente canónica;
- IDs estables, únicos y no reutilizables;
- contenido explicativo en español con términos técnicos en inglés cuando sean la forma profesional habitual;
- una entidad canónica por significado;
- fuentes verificables y no inventadas;
- separación entre contenido, derivados y presentación;
- profundidad principal `contextual-understanding`.

No se autoriza:

- agregar o eliminar dominios;
- cambiar el público objetivo;
- cambiar el modelo de contenido;
- superar 1,000 entidades;
- usar marcas o productos para rellenar cuotas;
- publicar sin autorización;
- autoevaluación del productor como única revisión.

## 5. Distribución objetivo

| Dominio | Existentes | Nuevas | Total objetivo |
|---|---:|---:|---:|
| Fundamentos de computación | 15 | 60 | 75 |
| Sistemas de cómputo y ciberfísicos | 11 | 59 | 70 |
| Desarrollo de software | 15 | 90 | 105 |
| Ingeniería, arquitectura y calidad | 15 | 115 | 130 |
| Redes y telecomunicaciones | 11 | 64 | 75 |
| Infraestructura, cloud y operación | 16 | 84 | 100 |
| Ciberseguridad, riesgo y privacidad | 15 | 85 | 100 |
| Datos y analítica | 15 | 80 | 95 |
| Inteligencia artificial | 11 | 64 | 75 |
| Integración y sistemas empresariales | 13 | 52 | 65 |
| Producto, negocio y experiencia | 13 | 42 | 55 |
| Estrategia, gobierno y liderazgo | 14 | 41 | 55 |
| **Total** | **164** | **836** | **1,000** |

La distribución es obligatoria en el total final. Sustituciones dentro de un dominio pueden realizarse con candidatos de reserva sin cambiar su meta.

## 6. Ondas

| Onda | Enfoque | Entidades |
|---|---|---:|
| 01 | Conceptos puente y fundamentos transversales | 84 |
| 02 | Sistemas, hardware y redes | 84 |
| 03 | Desarrollo de software | 84 |
| 04 | Ingeniería, Architecture y calidad | 84 |
| 05 | Infraestructura, cloud, DevOps, SRE e ITSM | 84 |
| 06 | Ciberseguridad, identidad, riesgo y privacidad | 84 |
| 07 | Datos, analítica e inteligencia artificial | 84 |
| 08 | Integración, APIs, messaging y sistemas empresariales | 84 |
| 09 | Producto, UX, negocio, estrategia y liderazgo | 84 |
| 10 | Cobertura residual, roles y balance final | 80 |
| **Total** |  | **836** |

Cada onda se divide en lotes técnicos de 12 entidades, salvo el lote final cuando la cantidad restante sea menor. Los lotes reservan `batch-043` a `batch-112`.

## 7. Inventario maestro

El inventario se compone de:

- `inventories/entity-expansion-master-v2.yaml`;
- 12 archivos CSV bajo `inventories/expansion-v2/`;
- `inventories/entity-expansion-reserve-v2.csv`.

Cada candidato declara como mínimo:

- ID candidato;
- nombre canónico;
- tipo y familia;
- dominio y subdominio;
- prioridad;
- onda;
- lote técnico.

El inventario aprobado concede selección y clasificación operativa. No convierte los candidatos en entidades `approved`.

## 8. Flujo autónomo

Por lote:

1. cargar los candidatos asignados;
2. comprobar ID, nombre y aliases contra el corpus;
3. investigar y registrar fuentes;
4. redactar las fichas;
5. validar estructura, taxonomía, referencias y dependencias;
6. realizar revisión independiente;
7. corregir hallazgos;
8. integrar las fichas conformes;
9. actualizar inventario y reporte;
10. continuar al lote siguiente.

No se solicita aprobación humana entre estos pasos cuando no existe una excepción material.

## 9. Excepciones que requieren al Responsable del proyecto

Solo se escala cuando sea necesario:

- agregar, retirar o redefinir un dominio;
- cambiar audiencia, propósito, idioma o profundidad;
- cambiar familias, tipos, IDs o modelo de contenido;
- superar la meta de 1,000;
- convertir marcas o proveedores en el eje del corpus;
- aceptar contenido con un defecto material conocido;
- resolver una contradicción normativa que la precedencia no solucione;
- publicar externamente.

No son excepciones:

- elegir o agregar fuentes;
- clasificar una entidad;
- resolver aliases o duplicados;
- sustituir un candidato por otro de reserva;
- ajustar prerrequisitos;
- mover una entidad entre lotes u ondas;
- corregir redacción;
- cerrar un lote técnico conforme.

## 10. Criterios de finalización

La expansión finaliza cuando:

- existen 1,000 entidades canónicas;
- las 836 nuevas están integradas y aprobadas operativamente;
- no hay IDs, nombres canónicos o rutas duplicadas;
- los aliases conflictivos están resueltos;
- dominios, subdominios, familias y tipos son válidos;
- las referencias obligatorias existen;
- cada entidad tiene fuentes suficientes;
- búsqueda, glosario y navegación indexan las 1,000;
- pruebas y build son conformes;
- existe un reporte final de cobertura.

## 11. Autoridad y relación con el MVP

Este plan es una fase post-MVP. No sustituye el valor, la audiencia, la taxonomía, el modelo, los lineamientos ni las fronteras de diseño aprobados.

Para esta expansión:

- sustituye el límite de 164/210 únicamente como límite de cantidad post-MVP;
- sustituye la aceptación humana por onda prevista en `decision-0021`;
- complementa `docs/08-production-batches.md` con un flujo técnico simplificado;
- preserva la autoridad final del Responsable del proyecto sobre cambios materiales y publicación.
