---
id: entity-propositional-logic
type: model
title: Propositional Logic
canonicalName: propositional logic
englishName: Propositional Logic
aliases:
- value: lógica proposicional
  kind: translation
  language: es
- value: sentential logic
  kind: alternate
  language: en
summary: Sistema formal que representa proposiciones con valores de verdad y las combina mediante operadores lógicos para analizar inferencias.
definition: Propositional Logic trata enunciados completos como unidades que pueden ser true o false y utiliza conectores como negation, conjunction, disjunction e implication para construir fórmulas y evaluar su validez.
purpose: Expresar condiciones y argumentos de manera verificable mediante reglas de verdad, equivalencias e inferencias formales.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-teoria-modelos-computacion
prerequisites:
- entity-discrete-mathematics
represents: Relaciones de verdad entre proposiciones completas mediante fórmulas y operadores lógicos.
scope: Proposiciones, conectores, truth tables, satisfiability, equivalencia e inferencia en nivel introductorio.
elements:
- proposiciones
- valores true y false
- conectores lógicos
- fórmulas
- interpretaciones
- reglas de inferencia
relations:
- targetId: entity-predicate-logic
  relationType: related-to
  note: Predicate Logic amplía la estructura expresiva al incorporar objetos, predicates y quantifiers.
examples:
- title: Regla de acceso
  explanation: La fórmula `authenticated AND authorized` solo es true cuando ambas proposiciones son verdaderas.
limitations:
- Trata cada proposición como una unidad y no describe su estructura interna.
- La validez formal no garantiza que las premisas representen correctamente el mundo real.
sources:
- source-mit-ocw-mathematics-for-computer-science-2015
- source-acm-ieee-cc2020
- source-it-study-taxonomy
- source-it-study-content-model
priority: important
knowledgeLevel: contextual-understanding
stability: stable-foundation
editorialStatus: approved
owner: IT Study production agent
decisionRefs:
- decision-0024-thousand-entity-expansion
batch: batch-044-expansion-wave-01-02
createdAt: '2026-07-24'
reviewedAt: '2026-07-26'
verificationStatus: verified
deprecated: false
contractVersion: '1.0'
---

# Propositional Logic

## Qué es

**Propositional Logic** (lógica proposicional) es un sistema formal para razonar con enunciados que pueden evaluarse como **true** o **false**. Cada enunciado se trata como una proposición y puede combinarse con operadores como `NOT`, `AND`, `OR` e implication.

## Cómo encaja

Las fórmulas proposicionales permiten representar condiciones, comprobar equivalencias y determinar si una conclusión se sigue de determinadas premisas. Las **truth tables** muestran el resultado de una fórmula para cada combinación posible de valores. En computación, este razonamiento aparece en condiciones de programas, circuitos digitales, reglas y restricciones.

## Ejemplo

Una política puede expresarse como `authenticated AND authorized`. La fórmula solo resulta true cuando la persona está autenticada y además posee autorización; que una sola condición sea verdadera no basta.

## Distinción clave

Propositional Logic no examina la estructura interna de enunciados como “todo usuario tiene una cuenta”. Para hablar de objetos, propiedades y quantifiers se necesita Predicate Logic. Además, que una inferencia sea formalmente válida significa que preserva la verdad desde sus premisas; no demuestra que las premisas sean correctas, completas o adecuadas para una situación real.