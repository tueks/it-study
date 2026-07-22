---
id: entity-latencia
type: metric
title: Latencia
canonicalName: latencia
englishName: Latency
summary: Métrica del tiempo transcurrido entre un evento y una respuesta o resultado observable.
definition: Duración medida para una operación, comunicación o procesamiento bajo un punto de inicio y fin definidos.
purpose: Distinguir latencia de rendimiento total, ancho de banda o disponibilidad.
primaryDomain: domain-redes-telecomunicaciones
subdomains: [subdomain-internet-servicios-red]
prerequisites: []
examples: [{ title: Solicitud medida, explanation: Se registra el tiempo entre enviar una solicitud y recibir la respuesta. }]
limitations: ["Promedios pueden ocultar variación, colas y experiencias extremas."]
propertyMeasured: Tiempo transcurrido de una operación definida.
calculation: diferencia entre marcas de tiempo de inicio y fin
unit: tiempo
interpretationLimits: [requiere puntos de medida, distribución relevante, contexto de carga]
sources: [source-google-sre, source-iso-iec-ieee-24765-2017, source-it-study-content-model]
priority: specialized
knowledgeLevel: recognition
stability: slow-evolution
editorialStatus: draft
owner: Codex
decisionRefs: [decision-0005-content-format-and-identifiers, decision-0021-recommended-master-plan-v2-execution, decision-0022-canonical-entity-family-path]
batch: batch-019-artifacts-measurement-core
createdAt: 2026-07-21
verificationStatus: pending
deprecated: false
contractVersion: "1.0"
---

# Latencia

La latencia mide duración contextual y debe interpretarse con distribución, carga y puntos de medición.
