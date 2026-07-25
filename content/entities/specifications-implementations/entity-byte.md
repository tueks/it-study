---
id: entity-byte
type: technology
title: Byte
canonicalName: byte
englishName: Byte
aliases:
- value: octet
  kind: alternate
  language: en
- value: octeto
  kind: translation
  language: es
summary: Unidad de información formada actualmente por ocho bits y utilizada como unidad básica de almacenamiento, direccionamiento y serialización.
definition: Un byte es una agrupación de ocho bits en los sistemas y estándares modernos. Puede representar 256 patrones distintos, desde `00000000` hasta `11111111`, cuyo significado depende del tipo de dato o encoding aplicado.
problemSolved: Proporciona una unidad práctica y estandarizada para organizar secuencias de bits y medir o direccionar datos digitales.
purpose: Facilitar el almacenamiento, procesamiento y transmisión de datos mediante unidades de ocho bits ampliamente interoperables.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-informacion-representacion
prerequisites:
- entity-bit
capabilities:
- agrupar ocho bits en una unidad manejable
- representar 256 patrones posibles
- servir como unidad habitual de almacenamiento y direccionamiento
mechanisms:
- posiciones binarias con pesos de `2^0` a `2^7`
- serialización como ocho bits
- combinación en secuencias de varios bytes
applicationContexts:
- memoria y almacenamiento
- archivos y redes
- character encodings
- representación numérica
examples:
- title: Valor sin signo
  explanation: El patrón `11111111` puede representar el entero 255 cuando el byte se interpreta como unsigned integer.
limitations:
- El patrón de bits no incluye su propio tipo o significado; la interpretación depende del contexto.
- Históricamente `byte` no siempre significó ocho bits; `octet` especifica explícitamente una unidad de ocho bits.
sources:
- source-mit-ocw-computation-structures-2017
- source-unicode-standard-17-0
- source-acm-ieee-cc2020
- source-it-study-taxonomy
- source-it-study-content-model
priority: essential
knowledgeLevel: contextual-understanding
stability: stable-foundation
editorialStatus: in-review
owner: IT Study production agent
decisionRefs:
- decision-0024-thousand-entity-expansion
batch: batch-044-expansion-wave-01-02
createdAt: '2026-07-24'
verificationStatus: pending
deprecated: false
contractVersion: '1.0'
---

# Byte

## Qué es

Un **byte** es una agrupación de ocho bits. Con ocho posiciones binarias existen `2^8`, es decir, 256 patrones posibles. El byte es una unidad básica para organizar memoria, archivos y transmisiones de datos.

## Cómo encaja

Una secuencia de bytes puede representar valores muy distintos: números, texto, imágenes, instrucciones o estructuras completas. El significado no está contenido en el byte mismo; proviene del formato, tipo de dato o encoding que interpreta sus bits.

## Ejemplo

El patrón `01000001` puede interpretarse como el número decimal 65. En ASCII, ese mismo valor corresponde al carácter `A`. No son dos bytes diferentes: es el mismo patrón interpretado bajo dos modelos distintos.

## Distinción clave

En el uso moderno, byte equivale normalmente a ocho bits. Sin embargo, históricamente el término se utilizó para grupos de otros tamaños. Por eso algunos estándares usan **octet** cuando necesitan expresar sin ambigüedad una unidad exactamente de ocho bits. Un byte tampoco es lo mismo que un carácter: según el character encoding, un carácter puede ocupar uno o varios bytes.
