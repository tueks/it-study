---
id: entity-context-free-grammar
type: model
title: Context-Free Grammar
canonicalName: context-free grammar
englishName: Context-Free Grammar
aliases:
- value: gramática libre de contexto
  kind: translation
  language: es
- value: CFG
  kind: acronym
  language: en
summary: Grammar formal cuyas reglas reemplazan un solo símbolo no terminal y generan context-free languages.
definition: Una context-free grammar es un sistema de producción formado por terminales, no terminales, un símbolo inicial y reglas cuyo lado izquierdo contiene un único no terminal. Las derivaciones obtenidas describen cadenas pertenecientes a un context-free language.
purpose: Especificar estructuras recursivas o anidadas y razonar sobre cómo se generan cadenas válidas.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-teoria-modelos-computacion
prerequisites:
- entity-formal-language
- entity-set-theory
represents: Una descripción generativa de un context-free language.
scope: Reglas de producción, derivaciones, árboles sintácticos y context-free languages.
elements:
- símbolos terminales
- símbolos no terminales
- reglas de producción
- símbolo inicial
- derivaciones
relations:
- targetId: entity-pushdown-automaton
  relationType: complementary-to
  note: Context-free grammars generan la misma clase de lenguajes que pushdown automata reconocen.
examples:
- title: Paréntesis balanceados
  explanation: Una regla recursiva puede generar una pareja de paréntesis alrededor de otra expresión válida o concatenar expresiones válidas.
limitations:
- Una CFG describe sintaxis; no define por sí sola significado, tipos o comportamiento de ejecución.
- No todos los lenguajes pueden expresarse mediante una context-free grammar.
sources:
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

# Context-Free Grammar

## Qué es

Una **context-free grammar** (gramática libre de contexto, CFG) es un sistema formal de reglas para generar cadenas. Cada regla sustituye un único símbolo no terminal por una secuencia de terminales y no terminales.

## Cómo encaja

Las CFG son adecuadas para expresar estructuras recursivas y anidadas. Los lenguajes que generan son precisamente los que puede reconocer un pushdown automaton. En compilación, ideas relacionadas se utilizan para describir sintaxis, aunque una especificación real agrega restricciones y semántica.

## Ejemplo

Una grammar puede definir expresiones con paréntesis balanceados permitiendo una expresión vacía, una expresión encerrada entre paréntesis o la concatenación de dos expresiones válidas.

## Distinción clave

“Context-free” describe la forma de las reglas: un no terminal puede reemplazarse sin consultar símbolos vecinos. No significa que el uso real de una construcción carezca de contexto semántico. La grammar define estructura sintáctica, no el significado completo de un lenguaje.
