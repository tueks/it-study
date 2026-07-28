---
id: entity-floating-point-representation
type: technology
title: Floating-Point Representation
canonicalName: floating-point representation
englishName: Floating-Point Representation
aliases:
- value: representación de punto flotante
  kind: translation
  language: es
- value: floating point
  kind: common
  language: en
summary: Representación finita de números mediante signo, significand y exponent, diseñada para cubrir magnitudes muy diferentes con precisión limitada.
definition: Floating-Point Representation expresa valores aproximadamente como un significand escalado por una base elevada a un exponent. IEEE 754 define formatos, operaciones, rounding y valores especiales ampliamente utilizados.
problemSolved: Permite representar y calcular con números muy pequeños o grandes dentro de un número fijo de bits y con reglas interoperables.
purpose: Proporcionar aritmética numérica eficiente y estandarizada para ciencia, gráficos, sistemas y aplicaciones generales.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-informacion-representacion
prerequisites:
- entity-bit
- entity-binary-number-system
capabilities:
- representar un amplio rango de magnitudes
- aproximar fracciones y resultados no enteros
- manejar infinities, NaN y signed zero en formatos IEEE 754
mechanisms:
- campo de signo
- exponent escalado
- significand o fraction
- reglas de rounding
- valores normales, subnormales y especiales
applicationContexts:
- cálculo científico
- gráficos y multimedia
- machine learning
- aplicaciones financieras no exactas
relations:
- targetId: entity-number-base
  relationType: related-to
  note: Los formatos binarios utilizan potencias de 2 para escalar el significand.
examples:
- title: Decimal 0.1 en binary floating point
  explanation: El valor decimal 0.1 no tiene una expansión binaria finita, por lo que suele almacenarse como una aproximación redondeada.
limitations:
- Muchos valores decimales no se representan exactamente y las operaciones pueden acumular rounding error.
- La igualdad directa y el orden de operaciones requieren cuidado.
- Floating point no es apropiado para cantidades que exigen exactitud decimal absoluta sin una estrategia específica.
sources:
- source-ieee-754-2019
- source-mit-ocw-computation-structures-2017
- source-acm-ieee-cc2020
- source-it-study-taxonomy
- source-it-study-content-model
priority: important
knowledgeLevel: contextual-understanding
stability: slow-evolution
editorialStatus: approved
owner: IT Study production agent
decisionRefs:
- decision-0024-thousand-entity-expansion
batch: batch-045-expansion-wave-01-03
createdAt: '2026-07-27'
reviewedAt: '2026-07-27'
verificationStatus: verified
deprecated: false
contractVersion: '1.0'
---

# Floating-Point Representation

## Qué es

**Floating-Point Representation** representa números mediante un signo, un **significand** y un **exponent**. Esta forma permite cubrir magnitudes muy diferentes con una cantidad fija de bits, pero la precisión es finita.

## Cómo encaja

IEEE 754 define formatos binarios y decimales, operaciones, rounding y valores especiales como infinity y NaN. Las implementaciones usan estas reglas para obtener resultados previsibles entre hardware y software compatibles.

## Ejemplo

El decimal `0.1` no tiene una representación binaria finita. Un formato binary floating point guarda el valor disponible más cercano, por lo que operaciones aparentemente simples pueden producir una pequeña diferencia de redondeo.

## Distinción clave

Floating point no almacena todos los números reales exactamente. Tampoco es lo mismo que fixed point o decimal arithmetic. Su fortaleza es combinar rango amplio y operaciones eficientes; su costo es precisión limitada y rounding. Para dinero u otras cantidades que requieren reglas decimales exactas puede ser preferible un tipo decimal o una representación entera escalada.
