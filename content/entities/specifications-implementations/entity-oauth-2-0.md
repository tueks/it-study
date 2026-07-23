---
id: entity-oauth-2-0
type: protocol
title: OAuth 2.0
canonicalName: oauth 2 0
englishName: OAuth 2.0
summary: Protocolo de autorización delegada para acceso limitado a recursos.
definition: Marco de autorización que permite a un cliente obtener acceso delegado mediante participantes, permisos y tokens definidos.
purpose: Distinguir OAuth de autenticación, identidad o control de acceso completo.
primaryDomain: domain-ciberseguridad-riesgo
subdomains: [subdomain-privacidad-riesgo-cumplimiento]
prerequisites: [entity-hypertext-transfer-protocol]
examples: [{ title: Acceso delegado, explanation: Un cliente obtiene un token limitado para acceder a un recurso autorizado. }]
limitations: ["La seguridad depende de flujos, implementación, configuración y gestión de tokens."]
participants: [propietario de recurso, cliente, servidor de autorización, servidor de recursos]
interactionRules: [solicitud de autorización, emisión y uso de tokens]
messagesOrUnits: [tokens, solicitudes, respuestas]
governanceRefs: [source-iso-iec-ieee-24765-2017]
sources: [source-nist-csf-2, source-iso-iec-ieee-24765-2017, source-it-study-content-model]
priority: important
knowledgeLevel: contextual-understanding
stability: versioned-standard
editorialStatus: approved
owner: Codex
decisionRefs: [decision-0005-content-format-and-identifiers, decision-0021-recommended-master-plan-v2-execution, decision-0022-canonical-entity-family-path]
batch: batch-021-domain-balance-extension-b
createdAt: 2026-07-21
verificationStatus: verified
deprecated: false
contractVersion: "1.0"
---

# OAuth 2.0

OAuth delega autorización en un flujo definido; no debe tratarse como sinónimo de autenticación.
