---
id: entity-terraform
type: tool
title: Terraform
canonicalName: Terraform
englishName: Terraform
summary: Herramienta declarativa para definir y gestionar infraestructura mediante archivos de configuración.
definition: Herramienta de infraestructura como código que compara una configuración declarada con recursos gestionados y aplica cambios planificados.
purpose: Distinguir Terraform de la práctica de infraestructura como código, un proveedor cloud o una política de gobierno.
primaryDomain: domain-infraestructura-operacion
subdomains: [subdomain-contenedores-orquestacion]
prerequisites: [entity-infrastructure-as-code]
examples: [{ title: Cambio planificado, explanation: Un equipo revisa una propuesta de cambios en recursos antes de aplicarla. }]
limitations: ["No sustituye revisión de cambios, control de acceso, gestión de secretos ni comprensión de los recursos administrados."]
capabilities: [configuración declarativa, planificación de cambios, automatización de aprovisionamiento]
users: [equipos de infraestructura, plataforma y operaciones]
deliveryForm: herramienta de línea de comandos y automatización
brand: { name: Terraform, owner: HashiCorp }
sources: [source-cncf-platforms-white-paper, source-google-sre, source-it-study-content-model]
priority: important
knowledgeLevel: recognition
stability: changing-tool-product
editorialStatus: draft
owner: Codex
decisionRefs: [decision-0005-content-format-and-identifiers, decision-0021-recommended-master-plan-v2-execution, decision-0022-canonical-entity-family-path]
batch: batch-023-selective-implementation-extension
createdAt: 2026-07-21
verificationStatus: pending
deprecated: false
contractVersion: "1.0"
---

# Terraform

Terraform automatiza cambios declarados de infraestructura; las decisiones de seguridad, costos y operación permanecen bajo responsabilidad del equipo.
