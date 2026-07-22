---
id: comparison-kubernetes-container
type: comparison
title: Kubernetes y contenedores
comparedEntries: [entity-kubernetes, entity-container]
comparisonReason: Se confunde la plataforma de orquestación con la unidad de ejecución que coordina.
dimensions:
  - key: nature
    label: Naturaleza
    criterion: Tipo de capacidad representada.
    values: { entity-kubernetes: "Plataforma de orquestación de cargas en contenedores.", entity-container: "Unidad aislada de ejecución para una aplicación y sus dependencias." }
  - key: operational-scope
    label: Alcance operacional
    criterion: Problema operativo que trata directamente.
    values: { entity-kubernetes: "Coordina despliegue, escalamiento y disponibilidad de varias cargas.", entity-container: "Empaqueta y aísla un proceso dentro de un entorno anfitrión." }
  - key: decision-context
    label: Contexto de decisión
    criterion: Pregunta que orienta la selección.
    values: { entity-kubernetes: "Cómo operar cargas distribuidas a escala.", entity-container: "Cómo empaquetar y ejecutar una carga de forma aislada." }
similarities: ["Ambos participan en la entrega y operación de aplicaciones empaquetadas."]
differences: ["Kubernetes coordina contenedores; no es un contenedor ni una imagen de aplicación."]
selectionGuidance: [{ entryId: entity-kubernetes, when: "La necesidad es coordinar varias cargas y recursos." }, { entryId: entity-container, when: "La necesidad es empaquetar o ejecutar una carga individual." }]
commonMistakes: ["Usar Kubernetes como sinónimo de contenedor.", "Suponer que adoptar la plataforma elimina complejidad operativa."]
summary: Kubernetes orquesta cargas contenidas; un contenedor es la unidad de ejecución que puede ser coordinada.
sources: [source-cncf-platforms-white-paper, source-google-sre, source-it-study-content-model]
priority: important
knowledgeLevel: contextual-understanding
stability: slow-evolution
editorialStatus: draft
owner: Codex
batch: batch-025-comparisons-core-b
createdAt: 2026-07-22
verificationStatus: pending
deprecated: false
contractVersion: "1.0"
---

# Kubernetes y contenedores

Una plataforma de orquestación y una unidad de ejecución se necesitan en niveles diferentes.
