---
id: subdomain-backend-servicios
type: subdomain
title: Backend y servicios
canonicalName: backend y servicios
englishName: Backend and Services
summary: Construcción de capacidades ejecutadas fuera del cliente que procesan reglas, coordinan datos y exponen interfaces a otros componentes.
definition: Subdominio de desarrollo dedicado a lógica de servidor, servicios y contratos utilizados por clientes u otros sistemas.
purpose: Explicar la superficie de implementación que sostiene aplicaciones e integraciones sin absorber arquitectura, operación o sistemas empresariales.
parentDomain: domain-desarrollo-software
includedScope: [lógica de aplicación en servidor, interfaces de servicio, acceso coordinado a datos, procesamiento de solicitudes]
excludedScope: [operación de infraestructura, arquitectura empresarial, gobierno de APIs, diseño de experiencia]
membershipCriteria: [El elemento se centra en construir capacidades ejecutadas fuera del cliente., Su propósito principal es implementación de aplicación o servicio.]
promotionCriteria: [Solo se reconsidera ante una frontera autónoma aprobada distinta de desarrollo de software.]
sources: [source-it-study-taxonomy, source-it-study-domain-inventory, source-it-study-content-model, source-acm-ieee-cc2020, source-iso-iec-ieee-24765-2017]
priority: essential
knowledgeLevel: contextual-understanding
stability: slow-evolution
editorialStatus: approved
owner: Codex
decisionRefs: [decision-0003-taxonomy-structure, decision-0005-content-format-and-identifiers]
batch: batch-002-taxonomy-subdomains-core-a
createdAt: 2026-07-21
reviewedAt: 2026-07-21
verificationStatus: verified
deprecated: false
contractVersion: "1.0"
---

# Backend y servicios

## Propósito educativo

Ubica la implementación que procesa reglas y ofrece capacidades a clientes o sistemas consumidores.

## Frontera

No convierte toda API o integración empresarial en backend, ni incluye la operación de la plataforma que ejecuta el servicio.
