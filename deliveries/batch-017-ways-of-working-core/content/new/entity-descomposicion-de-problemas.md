---
id: entity-descomposicion-de-problemas
type: technique
title: Descomposición de problemas
canonicalName: descomposición de problemas
englishName: Problem Decomposition
summary: Técnica para dividir un problema en partes manejables y relaciones comprensibles.
definition: Técnica que separa un problema en subproblemas, responsabilidades y dependencias para facilitar razonamiento y solución.
purpose: Reconocer una técnica de análisis sin asumir que la división elimina interacciones sistémicas.
primaryDomain: domain-fundamentos-computacion
subdomains: [subdomain-fundamentos-programacion]
prerequisites: []
examples: [{ title: Problema compuesto, explanation: Se identifican partes, límites y dependencias antes de elegir una solución. }]
limitations: ["Una división inadecuada puede ocultar acoplamientos o trasladar complejidad."]
task: Comprender y estructurar un problema compuesto.
procedureSummary: Identificar objetivo, partes, responsabilidades, interfaces y dependencias.
conditions: [propósito explícito, revisión de interacciones]
sources: [source-acm-ieee-cc2020, source-iso-iec-ieee-24765-2017, source-it-study-content-model]
priority: specialized
knowledgeLevel: recognition
stability: slow-evolution
editorialStatus: draft
owner: Codex
decisionRefs: [decision-0005-content-format-and-identifiers, decision-0021-recommended-master-plan-v2-execution, decision-0022-canonical-entity-family-path]
batch: batch-017-ways-of-working-core
createdAt: 2026-07-21
verificationStatus: pending
deprecated: false
contractVersion: "1.0"
---

# Descomposición de problemas

La técnica permite razonar por partes, pero debe conservar las dependencias que dan sentido al sistema completo.
