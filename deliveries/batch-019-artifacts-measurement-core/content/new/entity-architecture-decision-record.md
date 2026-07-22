---
id: entity-architecture-decision-record
type: artifact
title: Architecture Decision Record
canonicalName: architecture decision record
englishName: Architecture Decision Record
summary: Artefacto que documenta una decisión arquitectónica, su contexto y consecuencias.
definition: Registro breve y trazable que conserva una decisión significativa, alternativas y compromisos asociados.
purpose: Hacer revisable la razón de una decisión sin sustituir la arquitectura ni su implementación.
primaryDomain: domain-ingenieria-software
subdomains: [subdomain-diseno-arquitectura-software]
prerequisites: [entity-software-architect]
examples: [{ title: Decisión registrada, explanation: Se conserva el contexto, la elección y sus consecuencias. }]
limitations: ["No garantiza que una decisión siga siendo válida cuando el contexto cambia."]
producedBy: []
consumedBy: []
informationContained: [contexto, decisión, alternativas, consecuencias]
lifecycle: Redacción, revisión, aceptación, actualización o deprecación.
sources: [source-acm-ieee-cc2020, source-iso-iec-ieee-24765-2017, source-it-study-content-model]
priority: specialized
knowledgeLevel: recognition
stability: slow-evolution
editorialStatus: approved
owner: Codex
decisionRefs: [decision-0005-content-format-and-identifiers, decision-0021-recommended-master-plan-v2-execution, decision-0022-canonical-entity-family-path]
batch: batch-019-artifacts-measurement-core
createdAt: 2026-07-21
reviewedAt: 2026-07-21
verificationStatus: verified
deprecated: false
contractVersion: "1.0"
---

# Architecture Decision Record

Un ADR conserva una decisión dentro de su contexto; no convierte esa decisión en regla universal.
