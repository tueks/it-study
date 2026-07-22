---
id: entity-lambda-architecture
type: architectural-style
title: Lambda Architecture
canonicalName: lambda architecture
englishName: Lambda Architecture
summary: Estilo de datos que combina procesamiento histórico y de baja latencia.
definition: Estilo de datos que combina procesamiento histórico y de baja latencia.
purpose: Ubicar su función, límites y conexiones en datos e inteligencia artificial.
primaryDomain: domain-datos-analitica
subdomains: [subdomain-ingenieria-datos]
prerequisites: []
examples: [{ title: Contexto de datos, explanation: Se aplica con procedencia, objetivos y controles explícitos. }]
limitations: ["No garantiza calidad, validez o utilidad sin contexto y verificación."]
scope: Plataformas de procesamiento de datos.
constraints: [rutas histórica y rápida reconciliables]
elementKinds: [batch, speed, serving]
interactionRules: [resultados combinados para consulta]
qualityImplications: [latencia, complejidad operativa]
sources: [source-acm-ieee-cc2020, source-iso-iec-25012-2008, source-nist-ai-rmf, source-it-study-content-model]
priority: essential
knowledgeLevel: contextual-understanding
stability: slow-evolution
editorialStatus: approved
owner: Codex
decisionRefs: [decision-0005-content-format-and-identifiers, decision-0021-recommended-master-plan-v2-execution, decision-0022-canonical-entity-family-path]
batch: batch-012-data-ai-core
createdAt: 2026-07-21
reviewedAt: 2026-07-21
verificationStatus: verified
deprecated: false
contractVersion: "1.0"
---

# Lambda Architecture

## Contexto y frontera

Estilo de datos que combina procesamiento histórico y de baja latencia. Su aplicación debe conservar procedencia, supuestos y límites visibles.
