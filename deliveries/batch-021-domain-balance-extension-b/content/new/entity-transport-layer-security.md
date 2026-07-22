---
id: entity-transport-layer-security
type: protocol
title: Transport Layer Security
canonicalName: transport layer security
englishName: Transport Layer Security
summary: Protocolo que protege comunicaciones mediante autenticación, confidencialidad e integridad.
definition: Conjunto de reglas criptográficas para establecer y proteger un canal de comunicación entre extremos.
purpose: Distinguir TLS de seguridad completa de una aplicación o red.
primaryDomain: domain-ciberseguridad-riesgo
subdomains: [subdomain-fundamentos-arquitectura-seguridad]
prerequisites: [entity-transmission-control-protocol]
examples: [{ title: Canal protegido, explanation: Dos extremos negocian parámetros y protegen mensajes intercambiados. }]
limitations: ["La protección depende de configuración, validación y gestión de claves."]
participants: [cliente, servidor]
interactionRules: [negociación, autenticación, protección de registros]
messagesOrUnits: [handshake, registros TLS]
governanceRefs: [source-iso-iec-ieee-24765-2017]
sources: [source-nist-csf-2, source-iso-iec-ieee-24765-2017, source-it-study-content-model]
priority: important
knowledgeLevel: recognition
stability: versioned-standard
editorialStatus: draft
owner: Codex
decisionRefs: [decision-0005-content-format-and-identifiers, decision-0021-recommended-master-plan-v2-execution, decision-0022-canonical-entity-family-path]
batch: batch-021-domain-balance-extension-b
createdAt: 2026-07-21
verificationStatus: pending
deprecated: false
contractVersion: "1.0"
---

# Transport Layer Security

TLS protege un canal con parámetros concretos; no sustituye seguridad de extremos o aplicación.
