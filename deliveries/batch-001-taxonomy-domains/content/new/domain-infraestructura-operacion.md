---
id: domain-infraestructura-operacion
type: domain
title: Infraestructura, cloud y operación de servicios
canonicalName: infraestructura, cloud y operación de servicios
englishName: Infrastructure, Cloud and Service Operations
aliases:
  - value: infrastructure and operations
    language: en
    kind: short-name
  - value: I&O
    language: en
    kind: acronym
summary: Provisión, automatización, operación y soporte de recursos y servicios tecnológicos.
definition: Dominio que reúne infraestructura, cloud, automatización operativa, confiabilidad, plataformas internas y gestión de servicios digitales.
purpose: Explicar cómo se entregan, mantienen y soportan las capacidades tecnológicas sobre las que funcionan los sistemas.
includedScope:
  - infraestructura, cómputo, almacenamiento y virtualización
  - cloud, contenedores y orquestación
  - DevOps e ingeniería de plataformas
  - confiabilidad, SRE y observabilidad
  - soporte, continuidad e IT service management
excludedScope:
  - desarrollo funcional de aplicaciones
  - gobierno empresarial de IT
  - ciberseguridad como cuerpo completo
neighborDomains:
  - domain-sistemas-computo-ciberfisicos
  - domain-redes-telecomunicaciones
  - domain-ingenieria-software
  - domain-ciberseguridad-riesgo
  - domain-integracion-sistemas-empresariales
  - domain-estrategia-gobierno-liderazgo
overlaps:
  - targetId: domain-sistemas-computo-ciberfisicos
    nature: sistema y recurso operativo
    boundary: El funcionamiento interno de hardware y software de sistema pertenece a Sistemas de cómputo; su provisión y operación como capacidad pertenece aquí.
  - targetId: domain-ingenieria-software
    nature: entrega y ciclo de vida
    boundary: Ingeniería de software gobierna construcción y evolución; este dominio opera los recursos, plataformas y servicios resultantes.
  - targetId: domain-ciberseguridad-riesgo
    nature: operación y protección
    boundary: Los controles se aplican a la operación, pero el cuerpo de seguridad, privacidad y riesgo conserva hogar en Ciberseguridad.
membershipCriteria:
  - El elemento contribuye principalmente a proveer, automatizar, operar, observar, soportar o recuperar servicios tecnológicos.
  - No pertenece aquí solo por ejecutarse en cloud o utilizar infraestructura.
sources:
  - source-it-study-taxonomy
  - source-it-study-domain-inventory
  - source-it-study-content-model
  - source-nist-sp-800-145
  - source-google-sre
  - source-cncf-platforms-white-paper
  - source-peoplecert-itil
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

# Infraestructura, cloud y operación de servicios

## Propósito educativo

Este dominio conecta infraestructura tradicional y cloud con automatización, confiabilidad, plataformas internas y gestión de servicios. Ayuda a reconocer sus diferencias sin presentar DevOps, SRE, Platform Engineering e ITSM como sinónimos.

## Frontera principal

El dominio se ocupa de entregar y operar capacidades tecnológicas. No absorbe el desarrollo funcional, el gobierno organizacional ni el cuerpo completo de ciberseguridad aunque colabore continuamente con ellos.

## Contexto y conexiones

Cloud describe un modelo de provisión; SRE aplica ingeniería a problemas operativos; Platform Engineering desarrolla capacidades internas; ITSM gestiona productos y servicios. Esas perspectivas convergen en la operación, pero conservan significado propio.
