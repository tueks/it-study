---
id: entity-disponibilidad
type: metric
title: Disponibilidad
canonicalName: disponibilidad
englishName: Availability
summary: Métrica que expresa la proporción de tiempo en que un servicio está disponible bajo un criterio definido.
definition: Relación entre tiempo de servicio disponible y tiempo total considerado dentro de un alcance y método de medición explícitos.
purpose: Reconocer una medida contextual de confiabilidad sin confundirla con calidad o continuidad completas.
primaryDomain: domain-infraestructura-operacion
subdomains: [subdomain-confiabilidad-sre-observabilidad]
prerequisites: []
examples: [{ title: Servicio medido, explanation: Se compara tiempo disponible contra el periodo acordado. }]
limitations: ["Depende de definición de servicio, ventana, exclusiones y observación."]
propertyMeasured: Proporción de tiempo disponible de un servicio.
calculation: tiempo disponible dividido entre tiempo total considerado
unit: proporción o porcentaje
interpretationLimits: [requiere alcance y ventana, no expresa experiencia total, depende de medición]
sources: [source-google-sre, source-iso-iec-ieee-24765-2017, source-it-study-content-model]
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

# Disponibilidad

La disponibilidad sólo es interpretable con el servicio, periodo y criterio de observación definidos.
