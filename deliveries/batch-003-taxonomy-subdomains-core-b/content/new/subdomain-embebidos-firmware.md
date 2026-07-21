---
id: subdomain-embebidos-firmware
type: subdomain
title: Sistemas embebidos y firmware
canonicalName: sistemas embebidos y firmware
englishName: Embedded Systems and Firmware
summary: Cómputo integrado en dispositivos, con software cercano al hardware y restricciones propias del entorno físico.
definition: Subdominio centrado en sistemas de cómputo dedicados que forman parte de un dispositivo mayor y en el firmware que controla o habilita su hardware.
purpose: Explicar la frontera donde hardware, software de bajo nivel y comportamiento del dispositivo deben diseñarse de manera coordinada.
parentDomain: domain-sistemas-computo-ciberfisicos
includedScope: [microcontroladores y dispositivos dedicados, firmware y arranque, interfaces con sensores y actuadores, restricciones de recursos y tiempo]
excludedScope: [IoT como ecosistema completo, aplicaciones móviles, administración general de servidores]
membershipCriteria: [El elemento ejecuta cómputo como parte de un dispositivo dedicado., Su propósito principal exige interacción cercana con hardware o recursos restringidos.]
promotionCriteria: [Solo se reconsidera si demuestra propósito autónomo y cobertura aprobada fuera de sistemas de cómputo.]
sources: [source-it-study-taxonomy, source-it-study-domain-inventory, source-it-study-content-model, source-acm-ieee-cc2020, source-iso-iec-ieee-24765-2017]
priority: essential
knowledgeLevel: contextual-understanding
stability: slow-evolution
editorialStatus: draft
owner: Codex
decisionRefs: [decision-0003-taxonomy-structure, decision-0005-content-format-and-identifiers, decision-0020-batch-plan-authorization]
batch: batch-003-taxonomy-subdomains-core-b
createdAt: 2026-07-21
verificationStatus: pending
deprecated: false
contractVersion: "1.0"
---

# Sistemas embebidos y firmware

## Propósito educativo

Permite reconocer por qué el software de un dispositivo suele operar bajo restricciones distintas a las de una computadora de propósito general.

## Frontera

No incluye automáticamente conectividad IoT, servicios cloud ni todo sistema que use firmware.
