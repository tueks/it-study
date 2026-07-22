---
id: comparison-message-broker-event-driven-architecture
type: comparison
title: Message broker y arquitectura orientada a eventos
comparedEntries: [entity-message-broker, entity-event-driven-architecture]
comparisonReason: Una tecnología intermediaria se confunde con un estilo de arquitectura.
dimensions:
  - key: nature
    label: Naturaleza
    criterion: Clase de elemento descrito.
    values: { entity-message-broker: "Tecnología intermediaria para recibir, conservar o enrutar mensajes.", entity-event-driven-architecture: "Estilo arquitectónico que organiza interacción alrededor de eventos." }
  - key: scope
    label: Alcance
    criterion: Alcance de la decisión que representa cada entrada.
    values: { entity-message-broker: "Capacidad concreta de mensajería e integración.", entity-event-driven-architecture: "Organización de componentes, eventos y reacciones en un sistema." }
  - key: decision-context
    label: Contexto de decisión
    criterion: Pregunta que orienta el uso.
    values: { entity-message-broker: "Cómo intermediar mensajes entre productores y consumidores.", entity-event-driven-architecture: "Cómo estructurar un sistema para reaccionar a eventos." }
similarities: ["Ambos pueden participar en integración asíncrona y desacoplamiento temporal."]
differences: ["Un broker puede apoyar una arquitectura orientada a eventos, pero no la define ni es obligatorio en todos los casos."]
selectionGuidance: [{ entryId: entity-message-broker, when: "La necesidad es una capacidad concreta de mensajería." }, { entryId: entity-event-driven-architecture, when: "La necesidad es decidir la organización arquitectónica basada en eventos." }]
commonMistakes: ["Reducir una arquitectura orientada a eventos a instalar un broker.", "Suponer que un broker elimina compromisos distribuidos."]
summary: Message broker es una tecnología; arquitectura orientada a eventos es un estilo que puede usar diversas tecnologías.
sources: [source-acm-ieee-cc2020, source-it-study-content-model, source-google-sre]
priority: important
knowledgeLevel: contextual-understanding
stability: slow-evolution
editorialStatus: approved
owner: Codex
batch: batch-026-comparisons-target
createdAt: 2026-07-22
verificationStatus: verified
deprecated: false
contractVersion: "1.0"
---

# Message broker y arquitectura orientada a eventos
