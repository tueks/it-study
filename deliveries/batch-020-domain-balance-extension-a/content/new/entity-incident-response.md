---
id: entity-incident-response
type: process
title: Incident response
canonicalName: incident response
englishName: Incident Response
summary: Proceso para preparar, detectar, contener, recuperar y aprender de incidentes.
definition: Proceso coordinado que organiza decisiones y acciones frente a un evento que afecta seguridad u operación.
purpose: Distinguir respuesta de incidentes de prevención, monitoreo o un runbook aislado.
primaryDomain: domain-ciberseguridad-riesgo
subdomains: [subdomain-operaciones-seguridad]
prerequisites: []
examples: [{ title: Evento analizado, explanation: Se contiene impacto, se preserva evidencia y se revisa aprendizaje. }]
limitations: ["No elimina impacto ni sustituye preparación y controles preventivos."]
inputs: [alertas, evidencia, contexto]
activities: [detectar, analizar, contener, recuperar, aprender]
outputs: [decisiones, acciones, registros]
controls: [autoridad, comunicación, trazabilidad]
sources: [source-nist-csf-2, source-it-study-content-model, source-acm-ieee-cc2020]
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

# Incident response

La respuesta coordina acciones bajo incertidumbre y requiere evidencia, roles y aprendizaje.
