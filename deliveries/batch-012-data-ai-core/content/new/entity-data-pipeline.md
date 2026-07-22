---
id: entity-data-pipeline
type: process
title: Data pipeline
canonicalName: data pipeline
englishName: Data Pipeline
summary: Proceso coordinado que mueve y transforma datos entre fuentes y destinos.
definition: Proceso coordinado que mueve y transforma datos entre fuentes y destinos.
purpose: Ubicar su función, límites y conexiones en datos e inteligencia artificial.
primaryDomain: domain-datos-analitica
subdomains: [subdomain-bases-datos]
prerequisites: []
examples: [{ title: Contexto de datos, explanation: Se aplica con procedencia, objetivos y controles explícitos. }]
limitations: ["No garantiza calidad, validez o utilidad sin contexto y verificación."]
inputs: [datos de origen]
activities: [capturar, transformar, transportar, verificar]
outputs: [datos disponibles en destino]
controls: [calidad, trazabilidad, operación]
sources: [source-acm-ieee-cc2020, source-iso-iec-25012-2008, source-nist-ai-rmf, source-it-study-content-model]
priority: essential
knowledgeLevel: contextual-understanding
stability: slow-evolution
editorialStatus: draft
owner: Codex
decisionRefs: [decision-0005-content-format-and-identifiers, decision-0021-recommended-master-plan-v2-execution, decision-0022-canonical-entity-family-path]
batch: batch-012-data-ai-core
createdAt: 2026-07-21
verificationStatus: pending
deprecated: false
contractVersion: "1.0"
---

# Data pipeline

## Contexto y frontera

Proceso coordinado que mueve y transforma datos entre fuentes y destinos. Su aplicación debe conservar procedencia, supuestos y límites visibles.
