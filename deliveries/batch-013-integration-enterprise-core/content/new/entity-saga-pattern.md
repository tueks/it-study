---
id: entity-saga-pattern
type: pattern
title: Saga Pattern
canonicalName: saga pattern
englishName: Saga Pattern
summary: Patrón para coordinar una transacción distribuida como secuencia de acciones y compensaciones.
definition: Patrón para coordinar una transacción distribuida como secuencia de acciones y compensaciones.
purpose: Ubicar su naturaleza, límites y conexiones en integración empresarial.
primaryDomain: domain-integracion-sistemas-empresariales
subdomains: [subdomain-mensajeria-eventos]
prerequisites: [entity-event-driven-architecture]
examples: [{ title: Integración contextual, explanation: Se usa con contratos, fronteras y responsabilidades explícitas. }]
limitations: ["No elimina acoplamiento, fallos distribuidos ni necesidades de gobierno."]
subtype: pattern
problem: Consistencia entre servicios sin transacción atómica compartida.
context: Procesos distribuidos de varios pasos.
forces: [consistencia, fallos parciales, observabilidad]
solution: Coordinar acciones locales y compensaciones.
consequences: [desacoplamiento, complejidad de recuperación]
knownUses: [flujos distribuidos]
sources: [source-acm-ieee-cc2020, source-iso-iec-ieee-24765-2017, source-it-study-content-model]
priority: essential
knowledgeLevel: contextual-understanding
stability: slow-evolution
editorialStatus: draft
owner: Codex
decisionRefs: [decision-0005-content-format-and-identifiers, decision-0021-recommended-master-plan-v2-execution, decision-0022-canonical-entity-family-path]
batch: batch-013-integration-enterprise-core
createdAt: 2026-07-21
verificationStatus: pending
deprecated: false
contractVersion: "1.0"
---

# Saga Pattern

## Contexto y frontera

Patrón para coordinar una transacción distribuida como secuencia de acciones y compensaciones. Su uso conserva compromisos de integración y operación visibles.
