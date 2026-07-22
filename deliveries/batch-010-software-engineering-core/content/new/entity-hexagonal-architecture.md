---
id: entity-hexagonal-architecture
type: architectural-style
title: Hexagonal Architecture
canonicalName: hexagonal architecture
englishName: Hexagonal Architecture
summary: Estilo que separa la lógica central de adaptadores que conectan interfaces y tecnologías externas.
definition: Estilo que separa la lógica central de adaptadores que conectan interfaces y tecnologías externas.
purpose: Ubicar su naturaleza, límites y consecuencias en ingeniería de software.
primaryDomain: domain-ingenieria-software
subdomains: [subdomain-diseno-arquitectura-software]
prerequisites: []
examples: [{ title: Contexto de ingeniería, explanation: Se aplica con requisitos, restricciones y evidencia explícitos. }]
limitations: ["No constituye una solución universal ni elimina compromisos."]
scope: Organización interna de aplicaciones.
constraints: [núcleo independiente de adaptadores]
elementKinds: [núcleo, puertos, adaptadores]
interactionRules: [dependencias orientadas hacia contratos del núcleo]
qualityImplications: [sustituibilidad, complejidad estructural]
sources: [source-acm-ieee-cc2020, source-iso-iec-ieee-24765-2017, source-it-study-content-model]
priority: important
knowledgeLevel: contextual-understanding
stability: slow-evolution
editorialStatus: approved
owner: Codex
decisionRefs: [decision-0005-content-format-and-identifiers, decision-0021-recommended-master-plan-v2-execution, decision-0022-canonical-entity-family-path]
batch: batch-010-software-engineering-core
createdAt: 2026-07-21
reviewedAt: 2026-07-21
verificationStatus: verified
deprecated: false
contractVersion: "1.0"
---

# Hexagonal Architecture

## Contexto y frontera

Estilo que separa la lógica central de adaptadores que conectan interfaces y tecnologías externas. Su aplicación depende del contexto y debe conservar compromisos visibles.
