---
id: entity-estado
type: concept
title: Estado
canonicalName: estado
englishName: State
summary: Información que describe una condición relevante de un sistema en un momento determinado.
definition: El estado es el conjunto de valores o condiciones que un modelo conserva y que, junto con una entrada, influye en su comportamiento o transición posterior.
purpose: Explicar por qué dos entradas iguales pueden producir resultados distintos cuando el historial o las condiciones conservadas difieren.
primaryDomain: domain-fundamentos-computacion
subdomains: [subdomain-informacion-representacion]
examples:
  - { title: Sesión autenticada, explanation: El sistema conserva que una identidad fue validada y usa esa condición al procesar solicitudes posteriores. }
limitations: ["Qué se considera estado depende de la frontera del modelo.", "Estado no equivale necesariamente a almacenamiento permanente."]
sources: [source-acm-ieee-cc2020, source-iso-iec-ieee-24765-2017, source-it-study-content-model]
priority: essential
knowledgeLevel: contextual-understanding
stability: stable-foundation
editorialStatus: approved
owner: Codex
decisionRefs: [decision-0005-content-format-and-identifiers, decision-0021-recommended-master-plan-v2-execution]
batch: batch-006-foundations-core
createdAt: 2026-07-21
reviewedAt: 2026-07-21
verificationStatus: verified
deprecated: false
contractVersion: "1.0"
---

# Estado

## Contexto

Un sistema con estado conserva información entre interacciones; uno modelado sin estado decide cada resultado solo con la entrada actual y reglas disponibles.

## Distinción clave

El estado describe una condición del sistema. Un evento o entrada puede provocar una transición entre estados, pero no es el estado mismo.
