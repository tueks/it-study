---
id: entity-strangler-fig-pattern
type: pattern
title: Strangler Fig Pattern
canonicalName: strangler fig pattern
englishName: Strangler Fig Pattern
summary: Patrón para reemplazar gradualmente un sistema mediante capacidades nuevas alrededor del existente.
definition: Patrón de evolución que redirige funcionalidad de un sistema legado hacia componentes nuevos de manera incremental.
purpose: Distinguir una migración gradual de una reescritura total.
primaryDomain: domain-ingenieria-software
subdomains: [subdomain-ingenieria-requisitos]
prerequisites: []
examples: [{ title: Sustitución gradual, explanation: Una capacidad se enruta a una implementación nueva mientras el sistema legado sigue activo. }]
limitations: ["Puede prolongar complejidad y coexistencia si no hay límites y retiro planificado."]
problem: Evolucionar un sistema sin reemplazarlo todo de una vez.
context: Sistemas con funcionalidad existente y necesidad de cambio progresivo.
forces: [riesgo de cambio, coexistencia, trazabilidad]
solution: Introducir capacidades nuevas y redirigir gradualmente el flujo.
consequences: [reduce riesgo incremental, aumenta complejidad temporal]
knownUses: []
sources: [source-acm-ieee-cc2020, source-it-study-content-model, source-iso-iec-ieee-24765-2017]
priority: important
knowledgeLevel: contextual-understanding
stability: slow-evolution
editorialStatus: draft
owner: Codex
decisionRefs: [decision-0005-content-format-and-identifiers, decision-0021-recommended-master-plan-v2-execution, decision-0022-canonical-entity-family-path]
batch: batch-021-domain-balance-extension-b
createdAt: 2026-07-21
verificationStatus: pending
deprecated: false
contractVersion: "1.0"
---

# Strangler Fig Pattern

El patrón reduce riesgo de reemplazo, pero introduce coexistencia temporal que debe gobernarse.
