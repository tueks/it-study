---
id: comparison-oauth-2-tls
type: comparison
title: OAuth 2.0 y TLS
comparedEntries: [entity-oauth-2-0, entity-transport-layer-security]
comparisonReason: Ambos se asocian con seguridad pero resuelven problemas diferentes.
dimensions:
  - key: primary-purpose
    label: Propósito principal
    criterion: Problema de seguridad que organiza cada protocolo.
    values: { entity-oauth-2-0: "Delegar acceso autorizado a recursos entre participantes.", entity-transport-layer-security: "Proteger criptográficamente el canal de comunicación." }
  - key: security-scope
    label: Alcance de seguridad
    criterion: Propiedad que cada protocolo aporta directamente.
    values: { entity-oauth-2-0: "Autorización delegada mediante flujos y credenciales definidos.", entity-transport-layer-security: "Confidencialidad, integridad y autenticación del canal según configuración." }
  - key: decision-context
    label: Contexto de decisión
    criterion: Pregunta que ayuda a diferenciarlos.
    values: { entity-oauth-2-0: "Cómo una aplicación obtiene acceso delegado a un recurso.", entity-transport-layer-security: "Cómo proteger datos en tránsito entre extremos." }
similarities: ["Ambos pueden participar en una arquitectura de seguridad de aplicaciones conectadas."]
differences: ["OAuth 2.0 no sustituye un canal protegido; TLS no define autorización delegada a recursos."]
selectionGuidance: [{ entryId: entity-oauth-2-0, when: "El problema es delegar autorización entre participantes." }, { entryId: entity-transport-layer-security, when: "El problema es proteger la comunicación en tránsito." }]
commonMistakes: ["Usar OAuth 2.0 como reemplazo de TLS.", "Suponer que TLS resuelve autorización de recursos."]
summary: OAuth 2.0 y TLS son controles complementarios para problemas distintos de seguridad.
sources: [source-nist-csf-2, source-iso-iec-ieee-24765-2017, source-it-study-content-model]
priority: important
knowledgeLevel: contextual-understanding
stability: slow-evolution
editorialStatus: draft
owner: Codex
batch: batch-025-comparisons-core-b
createdAt: 2026-07-22
verificationStatus: pending
deprecated: false
contractVersion: "1.0"
---

# OAuth 2.0 y TLS

La autorización delegada y la protección del canal son capacidades de seguridad distintas que suelen coexistir.
