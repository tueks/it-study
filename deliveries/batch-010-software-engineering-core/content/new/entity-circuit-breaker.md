---
id: entity-circuit-breaker
type: pattern
title: Circuit Breaker
canonicalName: circuit breaker
englishName: Circuit Breaker
summary: Patrón que interrumpe temporalmente llamadas a una dependencia que presenta fallos repetidos.
definition: Patrón que interrumpe temporalmente llamadas a una dependencia que presenta fallos repetidos.
purpose: Ubicar su naturaleza, límites y consecuencias en ingeniería de software.
primaryDomain: domain-ingenieria-software
subdomains: [subdomain-ciclo-vida-evolucion]
prerequisites: []
examples: [{ title: Contexto de ingeniería, explanation: Se aplica con requisitos, restricciones y evidencia explícitos. }]
limitations: ["No constituye una solución universal ni elimina compromisos."]
subtype: pattern
problem: Fallos persistentes consumen recursos y propagan degradación.
context: Interacciones remotas o dependencias falibles.
forces: [recuperación, latencia, falsos positivos]
solution: Abrir el circuito tras un umbral y probar recuperación controlada.
consequences: [contención de fallos, estado adicional]
knownUses: [llamadas entre servicios]
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

# Circuit Breaker

## Contexto y frontera

Patrón que interrumpe temporalmente llamadas a una dependencia que presenta fallos repetidos. Su aplicación depende del contexto y debe conservar compromisos visibles.
