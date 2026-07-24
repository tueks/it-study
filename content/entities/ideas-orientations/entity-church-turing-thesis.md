---
id: entity-church-turing-thesis
type: concept
title: Church–Turing Thesis
canonicalName: Church–Turing thesis
englishName: Church–Turing Thesis
aliases:
- value: tesis de Church–Turing
  kind: translation
  language: es
- value: Turing–Church thesis
  kind: alternate
  language: en
summary: Tesis que identifica la noción informal de procedimiento efectivo con las funciones computables por modelos formales equivalentes, como la máquina de Turing.
definition: La Church–Turing Thesis sostiene que toda función efectivamente calculable puede computarse mediante una máquina de Turing o, de forma equivalente en poder expresivo, mediante otros formalismos clásicos como lambda calculus y funciones recursivas.
purpose: Conectar la idea informal de método mecánico con modelos matemáticos precisos para razonar sobre los límites generales de la computación.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-teoria-modelos-computacion
prerequisites:
- entity-computability
- entity-maquina-de-turing
relations:
- targetId: entity-lambda-calculus
  relationType: related-to
  note: Lambda calculus es uno de los formalismos clásicos equivalentes utilizados como evidencia del alcance de la tesis.
examples:
- title: Modelos equivalentes
  explanation: Cuando un procedimiento puede expresarse en lambda calculus, también puede representarse mediante una máquina de Turing para la misma clase de funciones computables.
limitations:
- Es una tesis sobre la noción informal de cálculo efectivo, no un teorema demostrable dentro de un único formalismo.
- No afirma que todas las formas de cómputo sean igualmente eficientes ni que una computadora real disponga de recursos ilimitados.
sources:
- source-stanford-encyclopedia-church-turing-thesis
- source-mit-ocw-theory-of-computation-2020
- source-it-study-taxonomy
- source-it-study-content-model
priority: essential
knowledgeLevel: contextual-understanding
stability: stable-foundation
editorialStatus: in-review
owner: IT Study production agent
decisionRefs:
- decision-0024-thousand-entity-expansion
batch: batch-043-expansion-wave-01-01
createdAt: '2026-07-24'
verificationStatus: pending
deprecated: false
contractVersion: '1.0'
---

# Church–Turing Thesis

## Qué es

La **Church–Turing Thesis** vincula la idea informal de un procedimiento efectivo o mecánico con modelos formales de computación. Una formulación habitual sostiene que toda función que puede calcularse mediante un método efectivo puede computarse con una máquina de Turing.

## Cómo encaja

Distintos formalismos desarrollados en la década de 1930 —entre ellos Turing machines, lambda calculus y funciones recursivas— resultaron equivalentes respecto de la clase de funciones que pueden representar. Esa convergencia aporta evidencia para utilizar dichos modelos como referencia de computability.

## Ejemplo

Un procedimiento expresable mediante lambda calculus puede traducirse, en términos de poder computacional, a una máquina de Turing que calcule la misma función. La equivalencia no implica que ambos formalismos sean igual de legibles o eficientes.

## Distinción clave

La tesis no es un teorema que demuestre una equivalencia entre dos definiciones formales: una de sus partes relaciona formalismos precisos con la noción informal de “método efectivo”. Tampoco debe confundirse con afirmaciones ampliadas sobre eficiencia, física o capacidades de computadoras concretas.
