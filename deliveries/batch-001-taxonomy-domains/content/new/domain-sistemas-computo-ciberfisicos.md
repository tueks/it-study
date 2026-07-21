---
id: domain-sistemas-computo-ciberfisicos
type: domain
title: Sistemas de cómputo y sistemas ciberfísicos
canonicalName: sistemas de cómputo y sistemas ciberfísicos
englishName: Computer Systems and Cyber-Physical Systems
aliases:
  - value: computer systems
    language: en
    kind: short-name
  - value: sistemas ciberfísicos
    language: es
    kind: partial-name
summary: Campo dedicado al funcionamiento conjunto de hardware, software de sistema y dispositivos que interactúan con el mundo físico.
definition: Dominio que estudia el diseño y funcionamiento de componentes físicos, software de sistema y sistemas estrechamente vinculados con procesos físicos.
purpose: Explicar qué ejecuta el software y cómo se integran hardware, sistemas operativos, firmware, dispositivos y control físico.
includedScope:
  - hardware y arquitectura de computadores
  - sistemas operativos y software de sistema
  - firmware y sistemas embebidos
  - IoT y sistemas ciberfísicos
  - robótica y aceleradores de cómputo
excludedScope:
  - administración cotidiana de infraestructura
  - redes como disciplina principal
  - desarrollo general de aplicaciones
neighborDomains:
  - domain-fundamentos-computacion
  - domain-redes-telecomunicaciones
  - domain-infraestructura-operacion
  - domain-desarrollo-software
  - domain-inteligencia-artificial
overlaps:
  - targetId: domain-infraestructura-operacion
    nature: recurso y operación
    boundary: La arquitectura y el funcionamiento del sistema tienen hogar aquí; su provisión y operación como recurso de servicio pertenecen a Infraestructura, cloud y operación de servicios.
  - targetId: domain-redes-telecomunicaciones
    nature: dispositivo y comunicación
    boundary: El dispositivo y su interacción física tienen hogar aquí; la transmisión e interconexión tienen hogar en Redes y telecomunicaciones.
membershipCriteria:
  - El propósito central del elemento es explicar o diseñar la interacción entre hardware, software de sistema y entorno físico.
  - El elemento no se limita a operar recursos ni a implementar una aplicación de propósito general.
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

# Sistemas de cómputo y sistemas ciberfísicos

## Propósito educativo

Este dominio ayuda a comprender la plataforma física y el software de sistema que hacen posible la ejecución. También ubica sistemas embebidos, IoT y robótica cuando la interacción con el mundo físico es parte esencial del problema.

## Frontera principal

No todo equipo desplegado pertenece aquí: si la conversación trata de aprovisionar, automatizar o mantener recursos como servicio, corresponde principalmente a infraestructura y operación. Si trata de comunicar dispositivos, corresponde a redes.

## Contexto y conexiones

Edge computing e IoT combinan dispositivo, conectividad, cloud, datos y seguridad. La ficha conserva el hogar del componente físico aquí y representa las demás perspectivas mediante fronteras con dominios vecinos.
