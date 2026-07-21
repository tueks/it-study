---
id: domain-redes-telecomunicaciones
type: domain
title: Redes y telecomunicaciones
canonicalName: redes y telecomunicaciones
englishName: Networking and Telecommunications
aliases:
  - value: networking
    language: en
    kind: short-name
  - value: redes
    language: es
    kind: short-name
summary: Transmisión, interconexión y control de comunicaciones entre dispositivos, sistemas y redes.
definition: Dominio dedicado a los fundamentos, medios, protocolos, topologías y servicios que permiten comunicar sistemas y transportar información.
purpose: Explicar conectividad, direccionamiento, entrega, interconexión, rendimiento y disponibilidad de las comunicaciones.
includedScope:
  - fundamentos y modelos por capas
  - redes locales, amplias y empresariales
  - Internet y servicios de red
  - redes inalámbricas, móviles y telecomunicaciones
  - routing, switching y operación de redes
excludedScope:
  - administración general de servidores
  - seguridad completa de la organización
  - protocolos exclusivos de una aplicación como hogar principal
neighborDomains:
  - domain-sistemas-computo-ciberfisicos
  - domain-infraestructura-operacion
  - domain-ciberseguridad-riesgo
  - domain-integracion-sistemas-empresariales
overlaps:
  - targetId: domain-infraestructura-operacion
    nature: conectividad y provisión
    boundary: Los fundamentos y capacidades de comunicación tienen hogar aquí; la provisión operativa de redes dentro de plataformas y servicios se conecta con Infraestructura.
  - targetId: domain-ciberseguridad-riesgo
    nature: red y protección
    boundary: La comunicación y operación de red pertenecen aquí; la protección y gestión integral del riesgo pertenecen a Ciberseguridad.
  - targetId: domain-integracion-sistemas-empresariales
    nature: transporte e interoperabilidad
    boundary: Este dominio transporta información; Integración define cómo aplicaciones, datos y procesos cooperan sobre esa conectividad.
membershipCriteria:
  - El propósito central del elemento es transmitir, interconectar o controlar comunicaciones.
  - Usar una red como medio no basta para conceder pertenencia principal.
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

# Redes y telecomunicaciones

## Propósito educativo

Este dominio ayuda a comprender cómo se conectan y comunican los sistemas, desde los modelos y protocolos fundamentales hasta Internet, redes empresariales y comunicaciones inalámbricas.

## Frontera principal

Una aplicación no pertenece a Redes solo porque utilice conectividad. El hogar se determina por el problema principal: transportar e interconectar aquí; operar recursos en Infraestructura; protegerlos en Ciberseguridad; coordinar aplicaciones en Integración.

## Contexto y conexiones

Redes es un prerrequisito importante para cloud, sistemas distribuidos, observabilidad y seguridad. Las fronteras evitan duplicar esos cuerpos de conocimiento.
