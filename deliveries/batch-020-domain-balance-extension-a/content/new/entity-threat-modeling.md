---
id: entity-threat-modeling
type: technique
title: Threat modeling
canonicalName: threat modeling
englishName: Threat Modeling
summary: Técnica para identificar amenazas y priorizar tratamientos dentro de un sistema definido.
definition: Técnica que representa activos, fronteras, amenazas y mitigaciones para razonar sobre riesgos de seguridad.
purpose: Distinguir el modelado de amenazas de pruebas, auditoría o garantía completa de seguridad.
primaryDomain: domain-ciberseguridad-riesgo
subdomains: [subdomain-identidad-acceso]
prerequisites: [entity-threat, entity-vulnerability]
examples: [{ title: Fronteras de confianza, explanation: Se identifican activos y flujos para analizar amenazas plausibles. }]
limitations: ["La técnica depende de alcance, evidencia y revisión; no encuentra todo riesgo."]
task: Analizar amenazas de un sistema o cambio definido.
procedureSummary: Identificar activos, fronteras, amenazas, mitigaciones y prioridades.
conditions: [alcance explícito, información de arquitectura, revisión]
sources: [source-nist-csf-2, source-acm-ieee-cc2020, source-it-study-content-model]
priority: important
knowledgeLevel: contextual-understanding
stability: slow-evolution
editorialStatus: draft
owner: Codex
decisionRefs: [decision-0005-content-format-and-identifiers, decision-0021-recommended-master-plan-v2-execution, decision-0022-canonical-entity-family-path]
batch: batch-020-domain-balance-extension-a
createdAt: 2026-07-21
verificationStatus: pending
deprecated: false
contractVersion: "1.0"
---

# Threat modeling

El modelado de amenazas hace visible riesgo y mitigaciones; debe revisarse con cambios de sistema y contexto.
