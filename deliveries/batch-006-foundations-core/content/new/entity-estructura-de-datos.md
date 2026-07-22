---
id: entity-estructura-de-datos
type: concept
title: Estructura de datos
canonicalName: estructura de datos
englishName: Data Structure
summary: Organización de datos que define cómo se almacenan, relacionan y acceden para realizar operaciones.
definition: Una estructura de datos es una forma organizada de representar una colección de valores y sus relaciones, junto con las operaciones relevantes para consultarlos o modificarlos.
purpose: Hacer explícito que la organización de los datos condiciona las operaciones disponibles, su claridad y su costo.
primaryDomain: domain-fundamentos-computacion
subdomains: [subdomain-teoria-modelos-computacion]
prerequisites: [entity-algoritmo]
examples:
  - { title: Cola, explanation: Conserva elementos en orden de llegada y ofrece operaciones para agregar al final y retirar del frente. }
limitations: ["No existe una estructura universalmente mejor; la elección depende de operaciones y restricciones.", "Una estructura conceptual no determina una implementación única."]
sources: [source-acm-ieee-cc2020, source-iso-iec-ieee-24765-2017, source-it-study-content-model]
priority: essential
knowledgeLevel: contextual-understanding
stability: stable-foundation
editorialStatus: draft
owner: Codex
decisionRefs: [decision-0005-content-format-and-identifiers, decision-0021-recommended-master-plan-v2-execution]
batch: batch-006-foundations-core
createdAt: 2026-07-21
verificationStatus: pending
deprecated: false
contractVersion: "1.0"
---

# Estructura de datos

## Contexto

La manera de organizar valores facilita unas operaciones y encarece otras. Listas, árboles, tablas y grafos expresan relaciones distintas y admiten diferentes estrategias de procesamiento.

## Distinción clave

La estructura organiza datos; el algoritmo describe cómo operar sobre ellos. Ambos se eligen de forma coordinada.
