---
id: comparison-tcp-udp
type: comparison
title: TCP y UDP
comparedEntries: [entity-transmission-control-protocol, entity-user-datagram-protocol]
comparisonReason: Se confunden como alternativas universales de transporte pese a sus compromisos distintos.
dimensions:
  - key: delivery-semantics
    label: Semántica de entrega
    criterion: Qué compromiso de entrega expresa cada protocolo sin prometer el resultado de una aplicación completa.
    values: { entity-transmission-control-protocol: "Entrega orientada a conexión con control de orden y fiabilidad.", entity-user-datagram-protocol: "Datagramas sin garantía inherente de entrega, orden o recuperación." }
  - key: connection-model
    label: Modelo de conexión
    criterion: Cómo organiza cada protocolo la comunicación entre extremos.
    values: { entity-transmission-control-protocol: "Mantiene estado de conexión y control de flujo.", entity-user-datagram-protocol: "Envía unidades independientes sin mantener una conexión de transporte." }
  - key: typical-use
    label: Uso contextual
    criterion: Necesidad técnica que suele orientar la elección sin convertirla en regla universal.
    values: { entity-transmission-control-protocol: "Intercambio donde el orden y la recuperación son prioritarios.", entity-user-datagram-protocol: "Intercambio donde la aplicación controla compromisos de latencia y pérdida." }
similarities: ["Ambos transportan datos entre extremos de red y pueden formar parte de sistemas distribuidos."]
differences: ["TCP incorpora mecanismos de conexión y control que UDP no ofrece por sí mismo.", "UDP no implica que una aplicación deba ignorar fiabilidad, orden o seguridad."]
selectionGuidance:
  - { entryId: entity-transmission-control-protocol, when: "La comunicación necesita una base de transporte orientada a conexión con orden y recuperación." }
  - { entryId: entity-user-datagram-protocol, when: "La aplicación necesita controlar explícitamente los compromisos entre latencia, pérdida y mecanismos adicionales." }
commonMistakes: ["Declarar que UDP es siempre más rápido.", "Suponer que TCP o UDP resuelven por sí solos seguridad o semántica de aplicación."]
summary: TCP y UDP son protocolos de transporte con compromisos distintos; la elección depende de la necesidad del sistema, no de un ganador universal.
sources: [source-acm-ieee-cc2020, source-iso-iec-ieee-24765-2017, source-it-study-content-model]
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

# TCP y UDP

La comparación ayuda a reconocer compromisos de transporte; las necesidades de la aplicación siguen determinando los mecanismos adicionales.
