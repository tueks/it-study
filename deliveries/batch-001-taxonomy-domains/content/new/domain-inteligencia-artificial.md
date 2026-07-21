---
id: domain-inteligencia-artificial
type: domain
title: Inteligencia artificial
canonicalName: inteligencia artificial
englishName: Artificial Intelligence
aliases:
  - value: AI
    language: en
    kind: acronym
  - value: IA
    language: es
    kind: acronym
summary: Estudio y construcción de sistemas capaces de percepción, razonamiento, aprendizaje, generación, decisión o interacción inteligente.
definition: Dominio que reúne fundamentos, familias técnicas, ingeniería, evaluación, operación y gobierno de sistemas de inteligencia artificial.
purpose: Ubicar las capacidades y riesgos propios de IA sin convertir modelos o proveedores concretos en dominios.
includedScope:
  - fundamentos y sistemas inteligentes
  - machine learning y deep learning
  - modelos generativos, lenguaje y visión
  - sistemas de recomendación
  - ingeniería, MLOps, evaluación, seguridad y gobierno de IA
excludedScope:
  - analítica descriptiva sin IA
  - productos comerciales concretos como dominios
  - especulación sin base estable
neighborDomains:
  - domain-fundamentos-computacion
  - domain-sistemas-computo-ciberfisicos
  - domain-desarrollo-software
  - domain-datos-analitica
  - domain-ciberseguridad-riesgo
  - domain-producto-experiencia
  - domain-estrategia-gobierno-liderazgo
overlaps:
  - targetId: domain-datos-analitica
    nature: datos y modelos
    boundary: Datos y analítica gestiona el ciclo del dato; IA aloja los sistemas que aprenden, generan, perciben o razonan.
  - targetId: domain-infraestructura-operacion
    nature: sistema de IA y operación
    boundary: El modelo y ciclo de IA tienen hogar aquí; la provisión de plataforma y operación general se conecta con Infraestructura.
  - targetId: domain-ciberseguridad-riesgo
    nature: riesgo de IA y seguridad transversal
    boundary: La evaluación y gobierno específicos de IA pertenecen aquí; las capacidades generales de seguridad y riesgo conservan hogar en Ciberseguridad.
membershipCriteria:
  - El propósito central del elemento es crear, evaluar, operar o gobernar capacidades asociadas con inteligencia artificial.
  - La presencia de automatización o analítica no basta para clasificar un elemento como IA.
priority: essential
knowledgeLevel: contextual-understanding
stability: slow-evolution
editorialStatus: draft
owner: ChatGPT Trabajo
decisionRefs: [decision-0003-taxonomy-structure, decision-0005-content-format-and-identifiers]
batch: batch-001-taxonomy-domains
createdAt: 2026-07-21
verificationStatus: verified
deprecated: false
contractVersion: "1.0"
---

# Inteligencia artificial

## Propósito educativo

Este dominio permite ubicar fundamentos, familias de modelos, ciclo de vida, evaluación y gobierno de IA. Proporciona contexto sin tratar cada modelo, técnica o proveedor como categoría principal.

## Frontera principal

Machine Learning utiliza datos y estadística, mientras MLOps utiliza prácticas operativas; esas dependencias no eliminan la autonomía conceptual del dominio ni trasladan aquí todos los temas de datos u operación.

## Contexto y conexiones

El riesgo de IA requiere coordinación con ciberseguridad, privacidad, producto y gobierno. La entrada conserva explícitamente esas fronteras y evita presentar terminología emergente como estable por defecto.
