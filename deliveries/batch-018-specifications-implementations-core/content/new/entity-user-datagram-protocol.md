---
id: entity-user-datagram-protocol
type: protocol
title: User Datagram Protocol
canonicalName: user datagram protocol
englishName: User Datagram Protocol
summary: Protocolo de transporte sin conexión que intercambia datagramas sobre IP.
definition: Protocolo que permite enviar unidades independientes entre extremos sin establecer una conexión ni ordenar o confirmar entrega.
purpose: Distinguir UDP de TCP y comprender sus compromisos de simplicidad y responsabilidad de aplicación.
primaryDomain: domain-redes-telecomunicaciones
subdomains: [subdomain-internet-servicios-red]
prerequisites: [entity-internet-protocol]
examples: [{ title: Datagramas, explanation: Una aplicación envía unidades independientes cuando su contexto tolera pérdidas o variación. }]
limitations: ["No garantiza entrega, orden ni control de congestión de aplicación."]
participants: [extremos de red]
interactionRules: [envío de datagramas independientes]
messagesOrUnits: [datagramas UDP]
governanceRefs: [source-iso-iec-ieee-24765-2017]
sources: [source-acm-ieee-cc2020, source-iso-iec-ieee-24765-2017, source-it-study-content-model]
priority: essential
knowledgeLevel: contextual-understanding
stability: versioned-standard
editorialStatus: draft
owner: Codex
decisionRefs: [decision-0005-content-format-and-identifiers, decision-0021-recommended-master-plan-v2-execution, decision-0022-canonical-entity-family-path]
batch: batch-018-specifications-implementations-core
createdAt: 2026-07-21
verificationStatus: pending
deprecated: false
contractVersion: "1.0"
---

# User Datagram Protocol

UDP mantiene poco estado de transporte; los requisitos de confiabilidad dependen del uso.
