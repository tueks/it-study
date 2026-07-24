---
id: entity-formal-language
type: concept
title: Formal Language
canonicalName: formal language
englishName: Formal Language
aliases:
- value: lenguaje formal
  kind: translation
  language: es
summary: Conjunto de cadenas construidas sobre un alfabeto y seleccionadas mediante reglas matemáticas, sin depender de significado humano o ejecución concreta.
definition: Un formal language es un conjunto de secuencias finitas de símbolos tomadas de un alfabeto. Su pertenencia se define mediante una especificación matemática, como un automaton, una grammar o una expresión formal.
purpose: Proporcionar un objeto preciso para estudiar sintaxis, reconocimiento, generación y límites de distintos modelos de cómputo.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-teoria-modelos-computacion
prerequisites:
- entity-set-theory
confusedWith:
- entity-lenguaje-de-programacion
examples:
- title: Cadenas con número par de unos
  explanation: Sobre el alfabeto `{0,1}`, el conjunto de cadenas que contienen una cantidad par de `1` forma un formal language.
limitations:
- Describe estructura y pertenencia; no asigna por sí mismo significado o comportamiento a las cadenas.
- Un lenguaje de programación incluye semántica y herramientas adicionales que no forman parte de la noción matemática mínima.
sources:
- source-mit-ocw-theory-of-computation-2020
- source-mit-ocw-mathematics-for-computer-science-2015
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

# Formal Language

## Qué es

Un **formal language** (lenguaje formal) es un conjunto matemáticamente definido de cadenas. Cada cadena utiliza símbolos de un alfabeto, y una regla determina cuáles cadenas pertenecen al conjunto.

## Cómo encaja

Los formal languages permiten estudiar la forma de las expresiones sin depender de su significado. Un finite automaton puede reconocer ciertos lenguajes; una context-free grammar puede generar otros; y modelos más potentes permiten describir clases más amplias.

## Ejemplo

Sobre el alfabeto `{a, b}`, el conjunto de todas las cadenas que terminan en `ab` es un formal language. La regla de pertenencia puede expresarse mediante un finite automaton o una regular expression.

## Distinción clave

Un formal language no es automáticamente un programming language. Un lenguaje de programación agrega semántica, reglas de tipos, comportamiento de ejecución y herramientas. La noción formal se concentra en las cadenas válidas y en las reglas que permiten reconocerlas o generarlas.
