---
id: entity-kubernetes
type: platform
title: Kubernetes
canonicalName: Kubernetes
englishName: Kubernetes
summary: Plataforma de orquestación para desplegar y operar cargas de trabajo en contenedores.
definition: Plataforma de código abierto que coordina la ejecución, el escalamiento y la disponibilidad de aplicaciones empaquetadas en contenedores.
purpose: Distinguir Kubernetes de un contenedor, una imagen, un proveedor cloud o una práctica de operación.
primaryDomain: domain-infraestructura-operacion
subdomains: [subdomain-confiabilidad-sre-observabilidad]
prerequisites: [entity-container]
examples: [{ title: Servicio escalable, explanation: Una aplicación empaquetada se distribuye entre recursos y se ajusta según una configuración declarada. }]
limitations: ["No elimina complejidad operativa, requisitos de seguridad, costos, observabilidad ni decisiones de arquitectura."]
capabilities: [orquestación, escalamiento, recuperación declarativa]
consumers: [equipos de plataforma, equipos de desarrollo]
extensionPoints: [configuraciones declarativas, controladores, interfaces de integración]
deliveryModels: [autooperado, servicio administrado]
brand: { name: Kubernetes, owner: Cloud Native Computing Foundation }
sources: [source-cncf-platforms-white-paper, source-google-sre, source-it-study-content-model]
priority: important
knowledgeLevel: contextual-understanding
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

# Kubernetes

Kubernetes organiza cargas de trabajo en contenedores; su adopción requiere capacidades operativas y controles que van más allá de instalar la plataforma.
