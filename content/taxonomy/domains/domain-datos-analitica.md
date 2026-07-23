---
id: domain-datos-analitica
type: domain
title: Datos y analítica
canonicalName: datos y analítica
englishName: Data and Analytics
aliases:
  - value: data and analytics
    language: en
    kind: canonical-translation
  - value: data
    language: en
    kind: contextual
summary: Captura, modelado, almacenamiento, movimiento, gobierno, calidad y uso analítico de datos.
definition: Dominio que reúne el ciclo de vida técnico y de gestión de los datos, desde bases de datos e ingeniería hasta analítica y gobierno.
purpose: Distinguir la administración y explotación analítica de datos de la integración general de sistemas y de la inteligencia artificial.
includedScope:
  - bases de datos, modelado y administración
  - arquitectura, almacenamiento e integración de datos
  - ingeniería y pipelines de datos
  - business intelligence, analítica y visualización
  - ciencia, calidad, metadatos y gobierno de datos
excludedScope:
  - machine learning como hogar principal
  - integración general de aplicaciones
  - gobierno corporativo completo
neighborDomains:
  - domain-fundamentos-computacion
  - domain-inteligencia-artificial
  - domain-integracion-sistemas-empresariales
  - domain-ciberseguridad-riesgo
  - domain-producto-experiencia
  - domain-estrategia-gobierno-liderazgo
overlaps:
  - targetId: domain-inteligencia-artificial
    nature: datos y aprendizaje
    boundary: Capturar, preparar, gobernar y analizar datos tiene hogar aquí; construir sistemas que aprenden, generan o razonan tiene hogar en Inteligencia artificial.
  - targetId: domain-integracion-sistemas-empresariales
    nature: movimiento de datos e interoperabilidad
    boundary: La integración orientada al ciclo de vida del dato pertenece aquí; la cooperación general entre aplicaciones y procesos pertenece a Integración.
  - targetId: domain-estrategia-gobierno-liderazgo
    nature: gobierno especializado y gobierno empresarial
    boundary: El gobierno de datos tiene hogar especializado aquí; su alineación organizacional se conecta con el gobierno tecnológico general.
membershipCriteria:
  - El propósito central del elemento es gestionar, transformar, asegurar la calidad o extraer información analítica de datos.
  - Utilizar datos no basta para conceder pertenencia principal.
sources:
  - source-it-study-taxonomy
  - source-it-study-domain-inventory
  - source-it-study-content-model
  - source-iso-iec-25012-2008
priority: essential
knowledgeLevel: contextual-understanding
stability: slow-evolution
editorialStatus: approved
owner: ChatGPT Trabajo
decisionRefs: [decision-0003-taxonomy-structure, decision-0005-content-format-and-identifiers]
batch: batch-001-taxonomy-domains
createdAt: 2026-07-21
reviewedAt: 2026-07-21
verificationStatus: verified
deprecated: false
contractVersion: "1.0"
---

# Datos y analítica

## Propósito educativo

Este dominio explica el ciclo del dato: cómo se modela, almacena, mueve, gobierna, evalúa y utiliza para análisis. Evita reducir el campo a bases de datos o mezclar todo análisis con inteligencia artificial.

## Frontera principal

La ciencia de datos puede utilizar Machine Learning, pero ese uso no fusiona los dominios. El hogar depende de si el problema central es gestionar y analizar datos o construir un sistema de IA.

## Contexto y conexiones

El gobierno y la calidad de datos colaboran con seguridad, privacidad y gobierno tecnológico. La integración de datos también toca interoperabilidad, pero mantiene aquí su propósito centrado en el dato.
