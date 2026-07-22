---
id: entity-repository-pattern
type: pattern
title: Repository Pattern
canonicalName: repository pattern
englishName: Repository Pattern
summary: Patrón que presenta acceso a datos mediante una colección o contrato orientado al dominio.
definition: Patrón que presenta acceso a datos mediante una colección o contrato orientado al dominio.
purpose: Ubicar su naturaleza, límites y consecuencias en ingeniería de software.
primaryDomain: domain-ingenieria-software
subdomains: [subdomain-calidad-pruebas]
prerequisites: []
examples: [{ title: Contexto de ingeniería, explanation: Se aplica con requisitos, restricciones y evidencia explícitos. }]
limitations: ["No constituye una solución universal ni elimina compromisos."]
subtype: pattern
problem: Lógica de dominio acoplada a detalles de persistencia.
context: Aplicaciones con modelo de dominio y almacenamiento.
forces: [consultas, consistencia, abstracción]
solution: Encapsular acceso mediante un repositorio.
consequences: [separación, riesgo de abstracción excesiva]
knownUses: [servicios de aplicación]
sources: [source-acm-ieee-cc2020, source-iso-iec-ieee-24765-2017, source-it-study-content-model]
priority: important
knowledgeLevel: contextual-understanding
stability: slow-evolution
editorialStatus: draft
owner: Codex
decisionRefs: [decision-0005-content-format-and-identifiers, decision-0021-recommended-master-plan-v2-execution, decision-0022-canonical-entity-family-path]
batch: batch-010-software-engineering-core
createdAt: 2026-07-21
verificationStatus: pending
deprecated: false
contractVersion: "1.0"
---

# Repository Pattern

## Contexto y frontera

Patrón que presenta acceso a datos mediante una colección o contrato orientado al dominio. Su aplicación depende del contexto y debe conservar compromisos visibles.
