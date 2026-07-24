---
id: entity-lambda-calculus
type: model
title: Lambda Calculus
canonicalName: lambda calculus
englishName: Lambda Calculus
aliases:
- value: cálculo lambda
  kind: translation
  language: es
- value: λ-calculus
  kind: notation
  language: en
summary: Formalismo basado en abstracción y aplicación de funciones que permite representar cómputo mediante sustitución y reducción de expresiones.
definition: Lambda calculus es un sistema formal con una sintaxis mínima de variables, abstracciones y aplicaciones. El cómputo se representa mediante reglas de sustitución y reducción, especialmente beta reduction, que transforman lambda terms.
purpose: Proporcionar un modelo preciso para estudiar funciones, sustitución, evaluación y poder computacional.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-teoria-modelos-computacion
prerequisites:
- entity-funcion
- entity-formal-language
represents: Cómputo expresado como formación, aplicación y reducción de funciones.
scope: Lambda terms, variables libres y ligadas, abstracción, aplicación, sustitución y reducción.
elements:
- variables
- abstracción lambda
- aplicación
- sustitución
- reglas de reducción
relations:
- targetId: entity-funcion
  relationType: builds-on
  note: Representa funciones como reglas de cómputo mediante abstracción y aplicación.
- targetId: entity-computability
  relationType: related-to
  note: Lambda calculus es uno de los formalismos clásicos usados para caracterizar funciones computables.
examples:
- title: Función identidad
  explanation: El término `λx.x` representa una función que devuelve su argumento; aplicarlo a un valor se reduce a ese mismo valor.
limitations:
- La ficha describe el formalismo básico y no cubre sistemas de tipos, semánticas o estrategias de evaluación completas.
- La equivalencia de poder computacional no implica que toda representación sea práctica como lenguaje de programación.
sources:
- source-stanford-encyclopedia-lambda-calculus
- source-stanford-encyclopedia-church-turing-thesis
- source-it-study-taxonomy
- source-it-study-content-model
priority: important
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

# Lambda Calculus

## Qué es

**Lambda Calculus** (cálculo lambda, λ-calculus) es un formalismo pequeño para representar funciones y cómputo. Sus construcciones esenciales son variables, abstracción de funciones y aplicación.

## Cómo encaja

La evaluación ocurre mediante reglas de reducción. La más conocida, **beta reduction**, sustituye el argumento de una aplicación en el cuerpo de una abstracción. A pesar de su sintaxis reducida, lambda calculus puede representar todas las funciones computables en el sentido clásico y es fundamental para estudiar lenguajes funcionales y semántica.

## Ejemplo

`λx.x` representa la función identidad. Al aplicarla a un término `a`, la expresión `(λx.x) a` se reduce a `a`.

## Distinción clave

Lambda calculus es un modelo formal, no un programming language completo. Los lenguajes funcionales incorporan tipos, manejo de errores, módulos, efectos y decisiones de evaluación. Tampoco debe confundirse la función como regla de cómputo con la representación extensional de una función como conjunto de pares.
