---
id: domain-desarrollo-software
type: domain
title: Desarrollo de software
canonicalName: desarrollo de software
englishName: Software Development
aliases:
  - value: software development
    language: en
    kind: canonical-translation
  - value: desarrollo de aplicaciones
    language: es
    kind: contextual
summary: Construcción de software mediante programación y prácticas de implementación para distintas superficies de ejecución.
definition: Campo centrado en implementar aplicaciones, interfaces y servicios mediante lenguajes, bibliotecas, entornos y técnicas de programación.
purpose: Ubicar cómo se construye software y qué distingue a sus principales especialidades de implementación.
includedScope:
  - programación aplicada
  - desarrollo web frontend y backend
  - desarrollo móvil y de escritorio
  - videojuegos y medios interactivos
  - scripting, interfaces y servicios
excludedScope:
  - gobierno completo del ciclo de vida
  - arquitectura como disciplina principal
  - operación de producción
  - gestión de producto
neighborDomains:
  - domain-fundamentos-computacion
  - domain-sistemas-computo-ciberfisicos
  - domain-ingenieria-software
  - domain-integracion-sistemas-empresariales
  - domain-inteligencia-artificial
  - domain-producto-experiencia
overlaps:
  - targetId: domain-ingenieria-software
    nature: implementación y ciclo de vida
    boundary: La implementación tiene hogar aquí; requisitos, arquitectura, calidad y evolución sistemática tienen hogar en Ingeniería, arquitectura y calidad de software.
  - targetId: domain-integracion-sistemas-empresariales
    nature: construcción e interoperabilidad
    boundary: Construir una aplicación o servicio pertenece aquí; conectar sistemas heterogéneos y procesos empresariales pertenece a Integración y sistemas empresariales.
membershipCriteria:
  - El propósito central del elemento es implementar software ejecutable para una superficie o contexto de uso.
  - La clasificación no se justifica solo porque otra disciplina utilice código.
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

# Desarrollo de software

## Propósito educativo

Este dominio organiza las conversaciones sobre programación aplicada y especialidades de construcción. Permite distinguir frontend, backend, móvil, escritorio y videojuegos sin elevar cada perfil o superficie a dominio independiente.

## Frontera principal

Escribir código no convierte toda actividad en Desarrollo de software. El diseño sistemático del ciclo de vida pertenece a Ingeniería de software; operar servicios pertenece a Infraestructura; decidir valor y experiencia pertenece a Producto.

## Contexto y conexiones

Full stack describe una combinación de responsabilidades de frontend y backend, no un dominio adicional. Los servicios implementados aquí pueden participar en integraciones cuya semántica y coordinación se explican en el dominio de Integración.
