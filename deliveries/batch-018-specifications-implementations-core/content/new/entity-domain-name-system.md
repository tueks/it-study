---
id: entity-domain-name-system
type: protocol
title: Domain Name System
canonicalName: domain name system
englishName: Domain Name System
summary: Protocolo y sistema distribuido para asociar nombres con información de red.
definition: Conjunto de reglas e infraestructura que resuelve nombres de dominio mediante consultas y respuestas jerárquicas.
purpose: Distinguir DNS de Internet, una dirección IP o un proveedor de nombres.
primaryDomain: domain-redes-telecomunicaciones
subdomains: [subdomain-operacion-redes]
prerequisites: [entity-internet-protocol]
examples: [{ title: Resolución, explanation: Un cliente consulta un nombre para obtener información de red asociada. }]
limitations: ["La resolución no garantiza seguridad, disponibilidad ni autenticidad sin controles adicionales."]
participants: [clientes, resolutores, servidores autoritativos]
interactionRules: [consultas, respuestas, delegación]
messagesOrUnits: [consultas DNS, registros DNS]
governanceRefs: [source-iso-iec-ieee-24765-2017]
sources: [source-acm-ieee-cc2020, source-iso-iec-ieee-24765-2017, source-it-study-content-model]
priority: important
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

# Domain Name System

DNS traduce nombres en información distribuida; requiere contexto de operación y seguridad.
