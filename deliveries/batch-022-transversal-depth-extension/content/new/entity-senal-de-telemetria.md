---
id: entity-senal-de-telemetria
type: concept
title: Señal de telemetría
canonicalName: señal de telemetría
englishName: Telemetry Signal
summary: Dato observado y transmitido sobre el estado, comportamiento o entorno de un sistema.
definition: Representación obtenida mediante instrumentación que aporta evidencia sobre eventos, medidas, estados o relaciones dentro de un alcance operacional.
purpose: Distinguir una señal observada de su interpretación, almacenamiento, visualización o decisión derivada.
primaryDomain: domain-infraestructura-operacion
subdomains: [subdomain-infraestructura-virtualizacion-cloud]
secondaryDomains: [domain-ingenieria-software, domain-redes-telecomunicaciones, domain-datos-analitica, domain-inteligencia-artificial]
disciplines: [discipline-observabilidad]
prerequisites: []
examples: [{ title: Evidencia operativa, explanation: Una medida, registro o traza comunica información sobre una operación observada. }]
limitations: ["Una señal puede ser incompleta, sesgada, tardía o ambigua y no equivale a una explicación."]
contextNotes: Su valor depende de procedencia, tiempo, contexto, calidad y relación con una pregunta operativa.
confusedWith: []
sources: [source-google-sre, source-nist-csf-2, source-it-study-content-model]
priority: essential
knowledgeLevel: contextual-understanding
stability: stable-foundation
editorialStatus: approved
owner: Codex
decisionRefs: [decision-0005-content-format-and-identifiers, decision-0021-recommended-master-plan-v2-execution, decision-0022-canonical-entity-family-path]
batch: batch-022-transversal-depth-extension
createdAt: 2026-07-21
reviewedAt: 2026-07-21
verificationStatus: verified
deprecated: false
contractVersion: "1.0"
---

# Señal de telemetría

## Contexto y frontera

La señal es evidencia, no conclusión. Su interpretación exige contexto y puede alimentar observabilidad, seguridad, analítica u otros usos sin duplicar el significado canónico.
