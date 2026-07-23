---
id: subdomain-mensajeria-eventos
type: subdomain
title: Mensajería y eventos
canonicalName: mensajería y eventos
englishName: Messaging and Events
summary: Intercambio desacoplado de información mediante mensajes y notificaciones de hechos relevantes entre sistemas.
definition: Subdominio de integración centrado en mecanismos por los que productores y consumidores comunican datos o eventos sin requerir una interacción directa simultánea.
purpose: Explicar cómo la comunicación asíncrona puede separar ritmos, disponibilidad y responsabilidades de sistemas conectados.
parentDomain: domain-integracion-sistemas-empresariales
includedScope: [colas y canales de mensajes, publicación y suscripción, eventos y notificaciones, entrega y procesamiento asíncrono]
excludedScope: [protocolo o broker específico, APIs síncronas completas, procesamiento analítico de eventos completo]
membershipCriteria: [El elemento comunica información mediante mensajes o eventos como mecanismo central., Productor y consumidor pueden operar con desacoplamiento temporal o de conocimiento directo.]
promotionCriteria: [Solo se reconsidera ante autonomía taxonómica aprobada fuera de integración y sistemas empresariales.]
sources: [source-it-study-taxonomy, source-it-study-domain-inventory, source-it-study-content-model, source-acm-ieee-cc2020, source-iso-iec-ieee-24765-2017]
priority: essential
knowledgeLevel: contextual-understanding
stability: slow-evolution
editorialStatus: approved
owner: Codex
decisionRefs: [decision-0003-taxonomy-structure, decision-0005-content-format-and-identifiers, decision-0020-batch-plan-authorization]
batch: batch-003-taxonomy-subdomains-core-b
createdAt: 2026-07-21
reviewedAt: 2026-07-21
verificationStatus: verified
deprecated: false
contractVersion: "1.0"
---

# Mensajería y eventos

## Propósito educativo

Permite reconocer por qué algunos sistemas intercambian hechos o trabajo pendiente sin esperar una respuesta inmediata.

## Frontera

No trata todos los mensajes como eventos ni presupone garantías de entrega idénticas entre implementaciones.
