---
id: entity-container
type: technology
title: Container
canonicalName: container
englishName: Container
summary: Tecnología que empaqueta una aplicación y sus dependencias en una unidad aislada de ejecución.
definition: Mecanismo de virtualización a nivel de sistema operativo que separa procesos y recursos mediante imágenes y configuraciones.
purpose: Distinguir un contenedor de una máquina virtual, imagen o plataforma de orquestación.
primaryDomain: domain-infraestructura-operacion
subdomains: [subdomain-devops-ingenieria-plataformas]
prerequisites: [entity-sistema-operativo]
examples: [{ title: Servicio empaquetado, explanation: Una aplicación se ejecuta con dependencias declaradas en un entorno aislado. }]
limitations: ["No elimina configuración, seguridad, observabilidad ni operación del sistema anfitrión."]
capabilities: [aislamiento de procesos, empaquetado, portabilidad]
mechanisms: [imágenes, espacios de nombres, control de recursos]
applicationContexts: [entrega y operación de aplicaciones]
sources: [source-acm-ieee-cc2020, source-google-sre, source-it-study-content-model]
priority: important
knowledgeLevel: contextual-understanding
stability: changing-technology
editorialStatus: draft
owner: Codex
decisionRefs: [decision-0005-content-format-and-identifiers, decision-0021-recommended-master-plan-v2-execution, decision-0022-canonical-entity-family-path]
batch: batch-021-domain-balance-extension-b
createdAt: 2026-07-21
verificationStatus: pending
deprecated: false
contractVersion: "1.0"
---

# Container

Un contenedor aísla y empaqueta procesos; su seguridad y operación dependen del entorno completo.
