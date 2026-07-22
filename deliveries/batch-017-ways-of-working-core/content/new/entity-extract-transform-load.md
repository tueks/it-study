---
id: entity-extract-transform-load
type: process
title: Extract Transform Load
canonicalName: extract transform load
englishName: Extract Transform Load
summary: Proceso que extrae datos, los transforma y los carga en un destino definido.
definition: Proceso coordinado para mover y adaptar datos desde fuentes hacia estructuras de consumo con controles de calidad y trazabilidad.
purpose: Distinguir ETL de un data pipeline general y preservar su aplicación autorizada a dicho contexto.
primaryDomain: domain-datos-analitica
subdomains: [subdomain-bi-analitica]
prerequisites: [entity-database]
examples: [{ title: Carga analítica, explanation: Datos de origen se extraen, transforman y cargan para un uso analítico. }]
limitations: ["No garantiza calidad ni sustituye gobierno, procedencia o validación."]
inputs: [datos de origen, reglas de transformación]
activities: [extraer, transformar, cargar, verificar]
outputs: [datos preparados en destino]
controls: [calidad, trazabilidad, operación]
sources: [source-iso-iec-25012-2008, source-acm-ieee-cc2020, source-it-study-content-model]
priority: essential
knowledgeLevel: contextual-understanding
stability: slow-evolution
editorialStatus: draft
owner: Codex
decisionRefs: [decision-0005-content-format-and-identifiers, decision-0021-recommended-master-plan-v2-execution, decision-0022-canonical-entity-family-path]
batch: batch-017-ways-of-working-core
createdAt: 2026-07-21
verificationStatus: pending
deprecated: false
contractVersion: "1.0"
---

# Extract Transform Load

ETL es un proceso especializado aplicable a un data pipeline; no se persiste la inversa no autorizada.
