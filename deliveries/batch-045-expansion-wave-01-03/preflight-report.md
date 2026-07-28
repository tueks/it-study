# Preflight — `batch-045-expansion-wave-01-03`

## Resultado

`conforming-for-production`

## Alcance autorizado

Se cargaron exclusivamente los 12 candidatos asignados por `inventories/expansion-v2/domain-fundamentos-computacion.csv`:

1. `candidate-data-compression`
2. `candidate-lossless-compression`
3. `candidate-lossy-compression`
4. `candidate-information-theory`
5. `candidate-entropy`
6. `candidate-floating-point-representation`
7. `candidate-array`
8. `candidate-linked-list`
9. `candidate-stack`
10. `candidate-queue`
11. `candidate-deque`
12. `candidate-hash-table`

## Clasificación

- Dominio: `domain-fundamentos-computacion`.
- Subdominio `subdomain-informacion-representacion`: 6 entidades.
- Subdominio `subdomain-algoritmos-estructuras-datos`: 6 entidades.
- Familias: 11 `ideas-orientations` y 1 `specifications-implementations`.
- Tipos: 10 `concept`, 1 `model` y 1 `technology`.

## Duplicados y aliases

- IDs canónicos existentes con el mismo significado: 0.
- Nombres canónicos existentes con el mismo significado: 0.
- Colisiones de alias conocidas: 0.
- Candidatos de reserva requeridos: 0.
- Modificaciones al baseline de 188 entidades: 0 previstas.

## Fronteras obligatorias

- Data Compression es el concepto general; Lossless y Lossy Compression son estrategias con garantías diferentes.
- Entropy mide incertidumbre media de una distribución; no es el tamaño exacto de todo archivo ni un sinónimo coloquial de desorden.
- Information Theory es el marco matemático; no describe por sí sola el significado semántico de los mensajes.
- Floating-Point Representation aproxima números mediante formatos finitos; no representa todos los números reales exactamente.
- Array y Linked List son estructuras diferentes; un dynamic array no convierte una linked list en array.
- Stack, Queue y Deque son abstracciones de acceso; pueden implementarse con arrays o linked lists.
- Hash Table implementa asociaciones key-value mediante hashing y resolución de colisiones; no garantiza acceso constante en todos los casos.

## Puerta

El lote puede pasar de `authorized` a `in-production`. Este reporte no autoriza aprobación, integración, cierre ni publicación externa.
