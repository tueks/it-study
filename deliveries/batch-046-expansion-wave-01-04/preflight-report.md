# Preflight — `batch-046-expansion-wave-01-04`

## Alcance autorizado

| # | Candidato | Entidad propuesta | Subdominio |
|---:|---|---|---|
| 1 | `candidate-tree` | `entity-tree` | algoritmos y estructuras de datos |
| 2 | `candidate-binary-tree` | `entity-binary-tree` | algoritmos y estructuras de datos |
| 3 | `candidate-binary-search-tree` | `entity-binary-search-tree` | algoritmos y estructuras de datos |
| 4 | `candidate-heap` | `entity-heap` | algoritmos y estructuras de datos |
| 5 | `candidate-graph` | `entity-graph` | algoritmos y estructuras de datos |
| 6 | `candidate-trie` | `entity-trie` | algoritmos y estructuras de datos |
| 7 | `candidate-sorting-algorithm` | `entity-sorting-algorithm` | algoritmos y estructuras de datos |
| 8 | `candidate-search-algorithm` | `entity-search-algorithm` | algoritmos y estructuras de datos |
| 9 | `candidate-big-o-notation` | `entity-big-o-notation` | algoritmos y estructuras de datos |
| 10 | `candidate-variable` | `entity-variable` | fundamentos de programación |
| 11 | `candidate-constant` | `entity-constant` | fundamentos de programación |
| 12 | `candidate-data-type` | `entity-data-type` | fundamentos de programación |

## Comprobación de duplicados y aliases

- IDs exactos existentes: 0.
- Canonical names equivalentes dentro de las 200 entidades previas: 0.
- Colisiones de aliases conocidas: 0.
- Sustituciones desde reserva: 0.
- Candidatos fuera del inventario: 0.

## Fronteras semánticas

- `Tree` es la estructura general; `Binary Tree` limita children y `Binary Search Tree` añade ordering invariant.
- `Heap` mantiene prioridad local y no equivale a BST ni a memoria heap.
- `Graph` es la estructura; `Graph Theory` es el campo matemático.
- `Sorting Algorithm` reorganiza; `Search Algorithm` localiza o decide.
- `Big O Notation` expresa un asymptotic upper bound, no tiempo exacto ni automáticamente worst case.
- `Variable`, `Constant` y `Data Type` se separan como entidad, restricción de cambio y clasificación de valores.

## Resultado

`conforming` — alcance exacto de 12 candidatos, sin sustituciones ni excepciones materiales.
