---
id: entity-completitud-de-datos
type: metric
title: Completitud de datos
canonicalName: completitud de datos
englishName: Data Completeness
summary: Métrica que estima la presencia de valores requeridos dentro de un conjunto de datos definido.
definition: Proporción de elementos esperados que contienen información conforme a una regla de completitud explícita.
purpose: Distinguir presencia de valores de exactitud, actualidad o utilidad.
primaryDomain: domain-datos-analitica
subdomains: [subdomain-ingenieria-datos]
prerequisites: []
examples: [{ title: Campo requerido, explanation: Se compara número de valores presentes con elementos esperados. }]
limitations: ["Un valor presente puede seguir siendo incorrecto o irrelevante."]
propertyMeasured: Presencia de valores requeridos.
calculation: valores presentes divididos entre valores esperados
unit: proporción o porcentaje
interpretationLimits: [depende de regla, alcance y calidad del origen]
sources: [source-iso-iec-25012-2008, source-it-study-content-model, source-acm-ieee-cc2020]
priority: specialized
knowledgeLevel: recognition
stability: slow-evolution
editorialStatus: approved
owner: Codex
decisionRefs: [decision-0005-content-format-and-identifiers, decision-0021-recommended-master-plan-v2-execution, decision-0022-canonical-entity-family-path]
batch: batch-020-domain-balance-extension-a
createdAt: 2026-07-21
reviewedAt: 2026-07-21
verificationStatus: verified
deprecated: false
contractVersion: "1.0"
---

# Completitud de datos

La completitud sólo es significativa respecto de lo esperado y no mide por sí sola la calidad total.
