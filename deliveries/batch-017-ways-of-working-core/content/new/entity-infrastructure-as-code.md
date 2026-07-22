---
id: entity-infrastructure-as-code
type: practice
title: Infrastructure as Code
canonicalName: infrastructure as code
englishName: Infrastructure as Code
summary: Práctica de definir y gestionar infraestructura mediante artefactos versionables y automatización.
definition: Práctica que representa infraestructura deseada como código o datos declarativos para aplicar cambios repetibles y revisables.
purpose: Separar la práctica de herramientas o proveedores concretos.
primaryDomain: domain-infraestructura-operacion
subdomains: [subdomain-contenedores-orquestacion]
prerequisites: []
examples: [{ title: Configuración declarada, explanation: Un cambio de infraestructura se revisa y aplica desde una definición versionada. }]
limitations: ["Automatizar una definición incorrecta puede propagar errores rápidamente."]
activity: Definir, revisar y aplicar infraestructura de manera versionable.
expectedOutcome: Cambios repetibles y trazables de infraestructura.
applicableContexts: [operación y entrega de infraestructura]
sources: [source-acm-ieee-cc2020, source-google-sre, source-it-study-content-model]
priority: essential
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

# Infrastructure as Code

La práctica hace cambios de infraestructura más revisables; no elimina la necesidad de controles, secretos ni validación.
