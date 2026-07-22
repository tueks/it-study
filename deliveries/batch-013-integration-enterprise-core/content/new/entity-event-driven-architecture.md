---
id: entity-event-driven-architecture
type: architectural-style
title: Event-Driven Architecture
canonicalName: event-driven architecture
englishName: Event-Driven Architecture
summary: Estilo donde componentes producen, detectan y reaccionan a eventos.
definition: Estilo donde componentes producen, detectan y reaccionan a eventos.
purpose: Ubicar su naturaleza, límites y conexiones en integración empresarial.
primaryDomain: domain-integracion-sistemas-empresariales
subdomains: [subdomain-apis-interoperabilidad]
prerequisites: [entity-software]
examples: [{ title: Integración contextual, explanation: Se usa con contratos, fronteras y responsabilidades explícitas. }]
limitations: ["No elimina acoplamiento, fallos distribuidos ni necesidades de gobierno."]
scope: Sistemas integrados mediante eventos.
constraints: [eventos explícitos, productores y consumidores desacoplados]
elementKinds: [productores, eventos, canales, consumidores]
interactionRules: [publicación y reacción asíncrona]
qualityImplications: [desacoplamiento, consistencia y observabilidad complejas]
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

# Event-Driven Architecture

## Contexto y frontera

Estilo donde componentes producen, detectan y reaccionan a eventos. Su uso conserva compromisos de integración y operación visibles.
