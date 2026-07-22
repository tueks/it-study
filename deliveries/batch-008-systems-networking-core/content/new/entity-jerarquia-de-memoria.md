---
id: entity-jerarquia-de-memoria
type: model
title: Jerarquía de memoria
canonicalName: jerarquía de memoria
englishName: Memory Hierarchy
summary: Modelo que organiza almacenamiento por velocidad, capacidad, costo y cercanía al procesamiento.
definition: La jerarquía de memoria representa niveles de almacenamiento que aprovechan localidad para equilibrar tiempos de acceso, capacidad y costo.
purpose: Ubicar su función, límites y conexiones en una comprensión transversal de IT.
primaryDomain: domain-sistemas-computo-ciberfisicos
subdomains: [subdomain-sistemas-operativos]
secondaryDomains: []
prerequisites: [entity-sistema-de-computo]
examples: [{ title: Contexto operativo, explanation: Se aplica dentro de un sistema con fronteras, requisitos y compromisos explícitos. }]
limitations: ["No identifica una implementación, producto o procedimiento universal."]
represents: Relación entre niveles de almacenamiento y acceso.
scope: Registros, cachés, memoria principal y almacenamiento persistente.
elements: [niveles, localidad, transferencia entre niveles]
sources: [source-acm-ieee-cc2020, source-iso-iec-ieee-24765-2017, source-it-study-content-model]
priority: essential
knowledgeLevel: contextual-understanding
stability: stable-foundation
editorialStatus: approved
owner: Codex
decisionRefs: [decision-0005-content-format-and-identifiers, decision-0021-recommended-master-plan-v2-execution, decision-0022-canonical-entity-family-path]
batch: batch-008-systems-networking-core
createdAt: 2026-07-21
reviewedAt: 2026-07-21
verificationStatus: verified
deprecated: false
contractVersion: "1.0"
---

# Jerarquía de memoria

## Contexto y frontera

La jerarquía de memoria representa niveles de almacenamiento que aprovechan localidad para equilibrar tiempos de acceso, capacidad y costo. Su uso concreto depende del entorno y no elimina la necesidad de validar supuestos.
