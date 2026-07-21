---
id: domain-fundamentos-computacion
type: domain
title: Fundamentos de computación
canonicalName: fundamentos de computación
englishName: Computing Foundations
aliases:
  - value: fundamentos de la computación
    language: es
    kind: variant
  - value: computing fundamentals
    language: en
    kind: variant
summary: Bases lógicas, matemáticas, conceptuales y algorítmicas para comprender cómo se representa y procesa información.
definition: Campo que reúne los fundamentos necesarios para razonar sobre la computación con independencia de lenguajes, productos o superficies de implementación.
purpose: Proporcionar vocabulario y modelos mentales estables que permitan comprender los demás dominios tecnológicos.
includedScope:
  - lógica y matemática discreta
  - teoría y modelos de computación
  - representación de datos e información
  - algoritmos y estructuras de datos
  - fundamentos de programación y complejidad
excludedScope:
  - construcción profesional de aplicaciones
  - administración de infraestructura
  - electrónica de implementación
neighborDomains:
  - domain-sistemas-computo-ciberfisicos
  - domain-desarrollo-software
  - domain-datos-analitica
  - domain-inteligencia-artificial
overlaps:
  - targetId: domain-desarrollo-software
    nature: fundamento y aplicación
    boundary: La programación introductoria pertenece aquí como fundamento; la implementación profesional de aplicaciones pertenece a Desarrollo de software.
membershipCriteria:
  - El elemento explica principios generales de representación, cálculo, algoritmos o razonamiento computacional.
  - Su comprensión no depende de una plataforma, lenguaje o producto concreto.
sources:
  - source-it-study-taxonomy
  - source-it-study-domain-inventory
  - source-it-study-content-model
  - source-acm-ieee-cc2020
priority: essential
knowledgeLevel: contextual-understanding
stability: stable-foundation
editorialStatus: draft
owner: ChatGPT Trabajo
decisionRefs:
  - decision-0003-taxonomy-structure
  - decision-0005-content-format-and-identifiers
batch: batch-001-taxonomy-domains
createdAt: 2026-07-21
verificationStatus: verified
deprecated: false
contractVersion: "1.0"
---

# Fundamentos de computación

## Propósito educativo

Este dominio permite reconocer los modelos y principios que explican cómo se representa, transforma y procesa información. Funciona como base conceptual para sistemas, desarrollo, datos e inteligencia artificial sin convertirse en un curso de programación o matemáticas.

## Frontera principal

Incluye conocimientos generales que permanecen útiles entre tecnologías. Cuando el propósito central pasa de comprender el principio a construir una aplicación, operar infraestructura o implementar electrónica, el hogar corresponde a otro dominio.

## Contexto y conexiones

Sus conceptos suelen actuar como prerrequisitos. La programación aparece aquí cuando ayuda a comprender abstracciones y razonamiento; aparece en Desarrollo de software cuando el foco es implementar soluciones para una superficie concreta.
