---
id: entity-api-gateway-pattern
type: pattern
title: API Gateway Pattern
canonicalName: api gateway pattern
englishName: API Gateway Pattern
summary: Patrón que ofrece un punto de entrada coordinado para consumidores de múltiples servicios.
definition: Patrón que ofrece un punto de entrada coordinado para consumidores de múltiples servicios.
purpose: Ubicar su naturaleza, límites y conexiones en integración empresarial.
primaryDomain: domain-integracion-sistemas-empresariales
subdomains: [subdomain-middleware-integracion]
prerequisites: [entity-application-programming-interface]
examples: [{ title: Integración contextual, explanation: Se usa con contratos, fronteras y responsabilidades explícitas. }]
limitations: ["No elimina acoplamiento, fallos distribuidos ni necesidades de gobierno."]
subtype: pattern
problem: Consumidores acoplados a múltiples servicios internos.
context: Sistemas con varias APIs o servicios.
forces: [acoplamiento, latencia, gobierno]
solution: Interponer un gateway con responsabilidades delimitadas.
consequences: [interfaz unificada, posible cuello de botella]
knownUses: [entrada de APIs]
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

# API Gateway Pattern

## Contexto y frontera

Patrón que ofrece un punto de entrada coordinado para consumidores de múltiples servicios. Su uso conserva compromisos de integración y operación visibles.
