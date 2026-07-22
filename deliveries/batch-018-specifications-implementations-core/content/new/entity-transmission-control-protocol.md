---
id: entity-transmission-control-protocol
type: protocol
title: Transmission Control Protocol
canonicalName: transmission control protocol
englishName: Transmission Control Protocol
summary: Protocolo de transporte orientado a conexión para entrega ordenada de datos.
definition: Protocolo que establece comunicaciones entre extremos y gestiona secuencia, confirmación y control de flujo sobre IP.
purpose: Distinguir TCP de IP, aplicaciones o una garantía absoluta de entrega.
primaryDomain: domain-redes-telecomunicaciones
subdomains: [subdomain-redes-empresariales]
prerequisites: [entity-internet-protocol]
examples: [{ title: Transporte, explanation: Dos extremos coordinan una conexión para intercambiar datos ordenados. }]
limitations: ["No elimina pérdidas, latencia, fallos de aplicación ni necesidades de seguridad."]
participants: [extremos de red]
interactionRules: [establecimiento, secuencia, confirmación, control de flujo]
messagesOrUnits: [segmentos TCP]
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

# Transmission Control Protocol

TCP coordina transporte fiable en un contexto de red; la fiabilidad depende del sistema completo.
