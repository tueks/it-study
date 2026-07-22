---
id: entity-model-training
type: process
title: Model training
canonicalName: model training
englishName: Model Training
summary: Proceso que ajusta un modelo usando datos y criterios definidos.
definition: Proceso que configura, ejecuta y registra el aprendizaje de un modelo para producir una versión evaluable.
purpose: Distinguir entrenamiento de evaluación, despliegue y uso del modelo.
primaryDomain: domain-inteligencia-artificial
subdomains: [subdomain-ingenieria-evaluacion-gobierno-ia]
prerequisites: [entity-machine-learning, entity-data-pipeline]
examples: [{ title: Entrenamiento reproducible, explanation: Datos, configuración y resultados se conservan para evaluación posterior. }]
limitations: ["No demuestra calidad, seguridad ni adecuación fuera del contexto de evaluación."]
inputs: [datos, configuración, objetivo de aprendizaje]
activities: [preparar, ajustar, registrar, verificar]
outputs: [modelo entrenado y evidencia asociada]
controls: [reproducibilidad, calidad de datos, evaluación]
sources: [source-nist-ai-rmf, source-acm-ieee-cc2020, source-it-study-content-model]
priority: important
knowledgeLevel: contextual-understanding
stability: slow-evolution
editorialStatus: approved
owner: Codex
decisionRefs: [decision-0005-content-format-and-identifiers, decision-0021-recommended-master-plan-v2-execution, decision-0022-canonical-entity-family-path]
batch: batch-017-ways-of-working-core
createdAt: 2026-07-21
reviewedAt: 2026-07-21
verificationStatus: verified
deprecated: false
contractVersion: "1.0"
---

# Model training

Entrenar crea una versión de modelo que aún debe evaluarse y gobernarse para un uso concreto.
