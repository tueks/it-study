---
id: entity-data-encoding
type: concept
title: Data Encoding
canonicalName: data encoding
englishName: Data Encoding
aliases:
- value: codificación de datos
  kind: translation
  language: es
summary: Proceso de representar información mediante símbolos, valores o bit patterns conforme a reglas que permiten almacenarla, transmitirla e interpretarla.
definition: Data Encoding transforma información desde una forma conceptual o estructurada hacia una representación definida. El resultado puede ser una secuencia de bits, bytes, símbolos o campos cuya interpretación depende de un esquema compartido.
purpose: Hacer que información de distintos tipos pueda manipularse por sistemas digitales mediante representaciones precisas e interoperables.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-informacion-representacion
prerequisites:
- entity-bit
related:
- entity-character-encoding
- entity-binary-number-system
examples:
- title: Número entero en bytes
  explanation: Un entero puede codificarse como cuatro bytes con tamaño, signo y byte order definidos por el formato.
limitations:
- Encoding no implica necesariamente compression, encryption o validación; esos procesos tienen objetivos diferentes.
- Sin conocer el esquema, una secuencia de bits o bytes puede admitir múltiples interpretaciones incompatibles.
sources:
- source-mit-ocw-computation-structures-2017
- source-unicode-utr-17-character-encoding-model
- source-acm-ieee-cc2020
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

# Data Encoding

## Qué es

**Data Encoding** (codificación de datos) es el proceso de representar información mediante símbolos, números, fields, bits o bytes según reglas definidas. Esas reglas permiten transformar la información y reconstruir su interpretación en otro punto del sistema.

## Cómo encaja

Casi todo dato digital necesita un encoding. Los números requieren reglas de base, tamaño, signo y byte order; el texto utiliza character encodings; una imagen asigna valores a pixels y channels; un protocolo organiza campos y unidades. El encoding puede ser simple o formar parte de un formato más amplio.

## Ejemplo

Un entero puede codificarse en cuatro bytes. Para interpretarlo correctamente deben conocerse al menos el tamaño, si tiene signo y el byte order. Los mismos cuatro bytes podrían producir otro valor bajo una convención diferente.

## Distinción clave

Encoding no es sinónimo de **encryption**: representar datos no busca necesariamente ocultarlos. Tampoco equivale a **compression**, cuyo objetivo es reducir tamaño, ni a serialization completa, que puede organizar múltiples valores y estructuras. Character Encoding es un caso particular de Data Encoding centrado en texto. Una secuencia de bytes no se explica por sí sola; necesita un esquema que defina qué representa y cómo debe interpretarse.