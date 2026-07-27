---
id: entity-ascii
type: standard
title: ASCII
canonicalName: ASCII
englishName: American Standard Code for Information Interchange
aliases:
- value: US-ASCII
  kind: alternate
  language: en
- value: código ASCII
  kind: translation
  language: es
summary: Estándar de character encoding de 7 bits que define 128 códigos para control characters, letras, dígitos, puntuación y símbolos básicos.
definition: ASCII asigna valores de 0 a 127 a un conjunto de 128 caracteres y controles. Su diseño de 7 bits fue incorporado habitualmente dentro de bytes de 8 bits y constituye el subconjunto inicial compatible de Unicode y UTF-8.
purpose: Proporcionar una representación común para intercambio de texto y control entre sistemas informáticos tempranos y protocolos posteriores.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-informacion-representacion
prerequisites:
- entity-character-encoding
- entity-bit
issuer: American National Standards Institute
designation: ANSI X3.4 / ASCII; RFC 20 network interchange profile
version: ASCII-1968 family
status: established-foundational-standard
relations:
- targetId: entity-unicode
  relationType: related-to
  note: Los primeros 128 Unicode code points conservan los valores ASCII correspondientes.
examples:
- title: Letra A
  explanation: La letra mayúscula `A` corresponde al valor decimal 65 y hexadecimal `41` en ASCII.
limitations:
- Su repertoire no representa de forma general la mayoría de los idiomas y scripts del mundo.
- Extensiones llamadas “extended ASCII” no forman un único estándar compatible entre sí.
sources:
- source-rfc-20-ascii
- source-unicode-standard-17-0
- source-it-study-taxonomy
- source-it-study-content-model
priority: essential
knowledgeLevel: contextual-understanding
stability: stable-foundation
editorialStatus: approved
owner: IT Study production agent
decisionRefs:
- decision-0024-thousand-entity-expansion
batch: batch-044-expansion-wave-01-02
createdAt: '2026-07-24'
reviewedAt: '2026-07-26'
verificationStatus: verified
deprecated: false
contractVersion: '1.0'
---

# ASCII

## Qué es

**ASCII**, *American Standard Code for Information Interchange*, es un character encoding de 7 bits. Define 128 valores: control characters, espacio, letras latinas básicas, dígitos, puntuación y algunos símbolos.

## Cómo encaja

Aunque necesita siete bits, ASCII suele almacenarse dentro de un byte cuyo bit superior es cero. Su importancia permanece porque muchos protocolos, formatos y lenguajes conservan compatibilidad con sus valores. Unicode también asigna sus primeros 128 code points a los caracteres equivalentes de ASCII.

## Ejemplo

La letra `A` tiene el valor decimal 65, hexadecimal `41` y binary `1000001` en ASCII. Al serializarse en un byte se escribe normalmente `01000001`.

## Distinción clave

ASCII no es un encoding universal. No cubre de forma general letras acentuadas, alfabetos no latinos, ideographs ni emoji. El término “extended ASCII” tampoco identifica una ampliación única: diferentes code pages reutilizaron los valores 128 a 255 de maneras incompatibles. Además, ASCII no debe confundirse con Unicode o UTF-8. Unicode define un repertoire mucho más amplio; UTF-8 conserva los bytes ASCII para los primeros 128 code points, pero puede usar varios bytes para otros caracteres.