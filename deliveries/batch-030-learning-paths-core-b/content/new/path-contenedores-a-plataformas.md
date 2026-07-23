---
id: path-contenedores-a-plataformas
type: learning-path
title: De contenedores a plataformas
audience: Personas que colaboran con plataformas e infraestructura.
objective: Comprender la relación contextual entre sistema operativo, contenedores, orquestación y cloud.
startingLevel: recognition
expectedOutcomes: [Distinguir contenedor, plataforma de orquestación y modelo cloud.]
prerequisites: [entity-sistema-operativo]
entries:
  - { order: 1, entryId: entity-sistema-operativo, purposeInPath: "Ubicar el entorno anfitrión." }
  - { order: 2, entryId: entity-container, purposeInPath: "Comprender una unidad aislada de ejecución." }
  - { order: 3, entryId: entity-kubernetes, purposeInPath: "Ubicar orquestación de cargas." }
  - { order: 4, entryId: entity-cloud-computing, purposeInPath: "Distinguir modelo de provisión." }
checkpoints: [{ afterEntryId: entity-container, criterion: "Distingue contenedor y virtualización." }, { afterEntryId: entity-kubernetes, criterion: "Distingue plataforma y unidad de ejecución." }]
completionCriteria: [Puede ubicar responsabilidades operativas sin reducir cloud a contenedores.]
domains: [domain-infraestructura-operacion, domain-desarrollo-software]
version: "1.0"
sources: [source-google-sre, source-cncf-platforms-white-paper]
priority: important
knowledgeLevel: contextual-understanding
stability: slow-evolution
editorialStatus: draft
owner: Codex
batch: batch-030-learning-paths-core-b
createdAt: 2026-07-22
verificationStatus: pending
deprecated: false
contractVersion: "1.0"
---

# De contenedores a plataformas
