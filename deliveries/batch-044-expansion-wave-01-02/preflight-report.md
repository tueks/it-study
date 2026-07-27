# Preflight — `batch-044-expansion-wave-01-02`

## Resultado

`conforming-for-production`

## Alcance autorizado

Se cargaron exclusivamente las 12 filas cuyo `recommended_batch` es `batch-044-expansion-wave-01-02`:

1. `candidate-graph-theory`
2. `candidate-propositional-logic`
3. `candidate-predicate-logic`
4. `candidate-bit`
5. `candidate-byte`
6. `candidate-binary-number-system`
7. `candidate-hexadecimal-number-system`
8. `candidate-number-base`
9. `candidate-character-encoding`
10. `candidate-ascii`
11. `candidate-unicode`
12. `candidate-data-encoding`

## Comprobación de duplicados y aliases

- IDs candidatos repetidos dentro del lote: 0.
- IDs canónicos existentes con el mismo semantic key: 0.
- Duplicados semánticos directos contra las 176 entidades canónicas: 0.
- Candidatos que funcionan únicamente como alias: 0.
- Colisiones incompatibles de aliases propuestas: 0.
- Sustituciones desde reserva requeridas: 0.

Fronteras verificadas:

- `Graph Theory` no se confunde con una estructura de datos o biblioteca de graphs.
- `Propositional Logic` y `Predicate Logic` requieren entradas separadas por su poder expresivo.
- `Bit` y `Byte` son unidades distintas; `octet` se registra como alternativa contextual de ocho bits.
- `Number Base`, `Binary Number System` y `Hexadecimal Number System` separan regla posicional de sistemas concretos.
- `Character Encoding` es una clase específica dentro de `Data Encoding`.
- `ASCII`, `Unicode` y UTF encodings no se consolidan: ASCII y Unicode son estándares; UTF-8 es una encoding form de Unicode y no es candidato del lote.

## Clasificación

- `subdomain-teoria-modelos-computacion`: 3 entidades `model`.
- `subdomain-informacion-representacion`: 9 entidades.
- Familias: 5 `ideas-orientations` y 7 `specifications-implementations`.
- Prioridad: 9 `essential` y 3 `important`.

## Plan de fuentes

Fuentes reutilizadas:

- `source-mit-ocw-mathematics-for-computer-science-2015`.
- `source-acm-ieee-cc2020` cuando aporta cobertura curricular.
- contratos internos de taxonomía y modelo.

Fuentes nuevas registradas:

- `source-mit-ocw-computation-structures-2017`.
- `source-rfc-20-ascii`.
- `source-unicode-standard-17-0`.
- `source-unicode-utr-17-character-encoding-model`.

## Dependencias previstas

Las referencias se limitan al baseline, B043 y las entidades del propio B044. No se introducen dependencias obligatorias hacia lotes futuros.

## Decisión

El lote puede entrar en producción sin cambio material de inventario, taxonomía, modelo o alcance.
