---
id: domain-ingenieria-software
type: domain
title: Ingeniería, arquitectura y calidad de software
canonicalName: ingeniería, arquitectura y calidad de software
englishName: Software Engineering, Architecture and Quality
aliases:
  - value: software engineering
    language: en
    kind: short-name
  - value: ingeniería de software
    language: es
    kind: short-name
summary: Aplicación sistemática de principios, procesos y decisiones para crear y evolucionar software confiable y mantenible.
definition: Dominio que reúne especificación, diseño, arquitectura, ciclo de vida, evolución, pruebas y evaluación de calidad del software.
purpose: Explicar los compromisos y controles de ingeniería necesarios más allá de escribir código.
includedScope:
  - requisitos y diseño de software
  - arquitectura de software y de soluciones
  - ciclo de vida, mantenimiento y evolución
  - calidad, pruebas y aseguramiento de calidad
  - configuración e ingeniería de entrega
excludedScope:
  - arquitectura empresarial como gobierno organizacional
  - operación de servicios como hogar principal
  - técnicas de programación sin contexto de ingeniería
neighborDomains:
  - domain-desarrollo-software
  - domain-producto-experiencia
  - domain-infraestructura-operacion
  - domain-ciberseguridad-riesgo
  - domain-integracion-sistemas-empresariales
  - domain-estrategia-gobierno-liderazgo
overlaps:
  - targetId: domain-desarrollo-software
    nature: ciclo de vida e implementación
    boundary: Este dominio gobierna decisiones, calidad y evolución; Desarrollo de software aloja la implementación aplicada.
  - targetId: domain-estrategia-gobierno-liderazgo
    nature: arquitectura de solución y arquitectura empresarial
    boundary: La arquitectura de software y de soluciones pertenece aquí; la arquitectura empresarial orientada a capacidades organizacionales pertenece a Estrategia, gobierno y liderazgo tecnológico.
membershipCriteria:
  - El elemento aborda de forma sistemática especificación, diseño, calidad, entrega o evolución del software.
  - Su propósito supera la implementación puntual y no es principalmente operación o gobierno empresarial.
sources:
  - source-it-study-taxonomy
  - source-it-study-domain-inventory
  - source-it-study-content-model
  - source-acm-ieee-cc2020
  - source-iso-iec-25010-2023
  - source-iso-iec-ieee-24765-2017
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

# Ingeniería, arquitectura y calidad de software

## Propósito educativo

Este dominio permite reconocer por qué construir software profesional exige requisitos, decisiones arquitectónicas, gestión del ciclo de vida, pruebas y criterios de calidad además de programación.

## Frontera principal

La arquitectura de software y de soluciones se centra en sistemas y soluciones concretas. La arquitectura empresarial opera a escala de capacidades y organización, por lo que conserva otro hogar.

## Contexto y conexiones

Seguridad, accesibilidad y confiabilidad son preocupaciones transversales. Su aplicación al producto software se considera aquí sin duplicar sus definiciones generales ni absorber los dominios especializados.
