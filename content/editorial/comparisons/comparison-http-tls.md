---
id: comparison-http-tls
type: comparison
title: HTTP y TLS
comparedEntries: [entity-hypertext-transfer-protocol, entity-transport-layer-security]
comparisonReason: Ambos participan en comunicaciones web, pero no resuelven la misma capa ni el mismo objetivo.
dimensions:
  - key: primary-purpose
    label: Propósito principal
    criterion: Problema que organiza cada protocolo.
    values: { entity-hypertext-transfer-protocol: "Intercambiar solicitudes, respuestas y representaciones.", entity-transport-layer-security: "Proteger un canal de comunicación mediante propiedades criptográficas." }
  - key: layer-of-concern
    label: Ámbito de preocupación
    criterion: Parte de la interacción que cada protocolo describe directamente.
    values: { entity-hypertext-transfer-protocol: "Semántica de intercambio entre cliente y servidor.", entity-transport-layer-security: "Establecimiento y protección del canal entre extremos." }
  - key: security-properties
    label: Propiedades de seguridad
    criterion: Qué propiedades de seguridad aporta cada entrada por sí misma.
    values: { entity-hypertext-transfer-protocol: "No aporta por sí mismo confidencialidad o autenticación criptográfica del canal.", entity-transport-layer-security: "Aporta mecanismos para confidencialidad, integridad y autenticación según su configuración." }
similarities: ["Ambos pueden participar en una comunicación entre sistemas conectados por red."]
differences: ["HTTP define intercambio de aplicación; TLS protege el canal y no define las operaciones de aplicación."]
selectionGuidance:
  - { entryId: entity-hypertext-transfer-protocol, when: "La pregunta trata sobre solicitudes, respuestas y representación de recursos." }
  - { entryId: entity-transport-layer-security, when: "La pregunta trata sobre proteger el canal de comunicación entre extremos." }
commonMistakes: ["Tratar HTTPS como un protocolo distinto que sustituye a HTTP y TLS sin reconocer la combinación.", "Suponer que TLS resuelve autorización o seguridad de toda la aplicación."]
summary: HTTP y TLS son complementarios: uno organiza intercambio de aplicación y el otro protege el canal, sin reemplazarse mutuamente.
sources: [source-iso-iec-ieee-24765-2017, source-nist-csf-2, source-it-study-content-model]
priority: important
knowledgeLevel: contextual-understanding
stability: slow-evolution
editorialStatus: approved
owner: Codex
batch: batch-024-comparisons-core-a
createdAt: 2026-07-22
verificationStatus: verified
deprecated: false
contractVersion: "1.0"
---

# HTTP y TLS

La comunicación web puede usar ambos protocolos con objetivos complementarios; ninguno sustituye las responsabilidades del otro.
