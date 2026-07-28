# Plan y reporte de fuentes — `batch-045-expansion-wave-01-03`

## Resultado

`source-plan-conforming`

## Fuentes nuevas seleccionadas

| ID | Autoridad | Uso principal |
|---|---|---|
| `source-shannon-mathematical-theory-communication-1948` | Publicación académica primaria | Information Theory, Entropy y límites conceptuales de coding/compression. |
| `source-ieee-754-2019` | Estándar oficial vigente | Floating-Point Representation, formatos, rounding y valores especiales. |
| `source-rfc-1951-deflate` | Especificación técnica primaria | Ejemplo concreto de Lossless Compression mediante LZ77 y Huffman coding. |
| `source-itu-t-t81-jpeg` | Estándar técnico oficial | Ejemplo de Lossy Compression para imágenes y separación entre representación y calidad. |
| `source-nist-dads` | Fuente institucional especializada | Definiciones y fronteras de Array, Linked List, Stack, Queue, Deque y Hash Table. |

## Fuentes internas y reutilizadas

- `source-acm-ieee-cc2020`: cobertura curricular y ubicación educativa.
- `source-it-study-taxonomy`: clasificación interna.
- `source-it-study-content-model`: estructura y tipo de ficha.
- `source-mit-ocw-computation-structures-2017`: apoyo para representación digital y floating point cuando corresponda.

## Suficiencia

- Los conceptos matemáticos se apoyan en la publicación primaria de Shannon y se presentan a nivel contextual.
- Floating point se delimita mediante IEEE 754-2019; no se infieren propiedades fuera del alcance del estándar.
- Lossless y Lossy Compression se contrastan con especificaciones técnicas concretas sin universalizar un algoritmo.
- Las estructuras de datos se apoyan en NIST DADS y se describen como abstracciones, sin convertir una implementación particular en definición universal.

## Limitaciones registradas

- IEEE 754 y T.81 tienen acceso completo condicionado; el registro identifica versión, emisor y secciones conceptuales utilizadas sin atribuir contenido no comprobado.
- RFC 1951 se usa como ejemplo de formato lossless, no como definición universal de toda compresión sin pérdida.
- NIST DADS se usa para definiciones y relaciones introductorias, no como análisis completo de complejidad para todas las implementaciones.
