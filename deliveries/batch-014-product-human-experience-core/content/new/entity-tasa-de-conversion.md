---
id: entity-tasa-de-conversion
type: metric
title: Tasa de conversión
canonicalName: tasa de conversión
englishName: Conversion Rate
summary: Proporción de unidades observadas que completan una acción definida dentro de una población y periodo delimitados.
definition: Métrica que relaciona el número de conversiones con el total de oportunidades elegibles bajo una definición explícita.
purpose: Reconocer cómo se cuantifica un resultado de interacción sin atribuirle por sí solo valor, calidad o causalidad.
primaryDomain: domain-producto-experiencia
subdomains: [subdomain-producto-digital]
prerequisites: []
examples: [{ title: Finalización contextual, explanation: Se divide el número de finalizaciones definidas entre las oportunidades elegibles del mismo periodo. }]
limitations: ["Cambia con la definición del denominador, la ventana, la población y la instrumentación."]
propertyMeasured: Proporción de oportunidades elegibles que completan una acción definida.
calculation: conversiones definidas divididas entre oportunidades elegibles del mismo alcance
unit: proporción o porcentaje
interpretationLimits: [no demuestra causalidad, requiere población y periodo explícitos, puede ocultar efectos distributivos]
sources: [source-iiba-business-analysis-standard, source-iso-iec-ieee-24765-2017, source-it-study-content-model]
priority: important
knowledgeLevel: recognition
stability: slow-evolution
editorialStatus: approved
owner: Codex
decisionRefs: [decision-0005-content-format-and-identifiers, decision-0021-recommended-master-plan-v2-execution, decision-0022-canonical-entity-family-path]
batch: batch-014-product-human-experience-core
createdAt: 2026-07-21
reviewedAt: 2026-07-21
verificationStatus: verified
deprecated: false
contractVersion: "1.0"
---

# Tasa de conversión

## Contexto y frontera

La métrica solo es comparable cuando acción, población, periodo y medición conservan significado compatible. Una mejora aparente no explica por sí sola su causa ni sus efectos más amplios.
