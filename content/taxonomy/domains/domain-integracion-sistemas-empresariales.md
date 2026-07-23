---
id: domain-integracion-sistemas-empresariales
type: domain
title: Integración y sistemas empresariales
canonicalName: integración y sistemas empresariales
englishName: Integration and Enterprise Systems
aliases:
  - value: enterprise integration
    language: en
    kind: contextual
  - value: integración empresarial
    language: es
    kind: short-name
summary: Conexión de aplicaciones, datos, procesos y capacidades organizacionales mediante interfaces, mensajería y plataformas empresariales.
definition: Dominio que explica cómo sistemas heterogéneos cooperan y cómo las familias de sistemas empresariales soportan procesos organizacionales.
purpose: Dar contexto a interoperabilidad, integración, mensajería y sistemas empresariales sin concentrarse en marcas.
includedScope:
  - APIs e interoperabilidad
  - integración de aplicaciones y datos
  - protocolos de aplicación, mensajería y eventos
  - middleware e integración B2B
  - ERP, CRM y otras familias de sistemas empresariales
excludedScope:
  - marcas específicas como dominios
  - diseño interno completo de cada aplicación
  - arquitectura empresarial como gobierno principal
neighborDomains:
  - domain-desarrollo-software
  - domain-ingenieria-software
  - domain-redes-telecomunicaciones
  - domain-infraestructura-operacion
  - domain-datos-analitica
  - domain-producto-experiencia
  - domain-estrategia-gobierno-liderazgo
overlaps:
  - targetId: domain-desarrollo-software
    nature: aplicación e integración
    boundary: El desarrollo interno de aplicaciones pertenece a Desarrollo de software; su cooperación mediante contratos y flujos pertenece aquí.
  - targetId: domain-redes-telecomunicaciones
    nature: protocolo y transporte
    boundary: Redes proporciona conectividad y transporte; Integración proporciona interoperabilidad semántica y coordinación entre sistemas.
  - targetId: domain-estrategia-gobierno-liderazgo
    nature: sistema empresarial y arquitectura empresarial
    boundary: Las familias de sistemas e integración tienen hogar aquí; la arquitectura de capacidades organizacionales pertenece a Estrategia y gobierno.
membershipCriteria:
  - El propósito central del elemento es permitir cooperación entre aplicaciones, datos, procesos o capacidades organizacionales.
  - Una tecnología no pertenece aquí únicamente por exponerse a través de una red.
sources:
  - source-it-study-taxonomy
  - source-it-study-domain-inventory
  - source-it-study-content-model
  - source-acm-ieee-cc2020
  - source-iso-iec-ieee-24765-2017
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

# Integración y sistemas empresariales

## Propósito educativo

Este dominio hace visible la cooperación entre sistemas, datos y procesos. Permite reconocer APIs, mensajería, eventos, middleware y familias como ERP o CRM sin confundir capacidades generales con productos comerciales.

## Frontera principal

La conectividad de red transporta información; la integración define contratos y coordinación; el desarrollo implementa cada aplicación; la arquitectura empresarial gobierna capacidades organizacionales. Estas perspectivas colaboran sin convertirse en equivalentes.

## Contexto y conexiones

Una API puede entenderse como interfaz, artefacto o servicio según el contexto. Esa variación se resolverá en las fichas de entidad correspondientes, no modificando la frontera del dominio.
