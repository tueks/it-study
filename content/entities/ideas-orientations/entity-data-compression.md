---
id: entity-data-compression
type: concept
title: Data Compression
canonicalName: data compression
englishName: Data Compression
aliases:
- value: compresión de datos
  kind: translation
  language: es
summary: Proceso de representar información con menos bits al aprovechar redundancia, estructura o tolerancia a una reconstrucción aproximada.
definition: Data Compression transforma una representación en otra normalmente más compacta mediante un encoder y permite recuperarla mediante un decoder. Según la garantía de reconstrucción, puede ser lossless o lossy.
purpose: Reducir almacenamiento, ancho de banda o tiempo de transferencia conservando exactamente los datos o una aproximación adecuada para el uso previsto.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-informacion-representacion
prerequisites:
- entity-data-encoding
related:
- entity-lossless-compression
- entity-lossy-compression
- entity-information-theory
examples:
- title: Transferencia de una imagen
  explanation: Un formato puede codificar patrones repetidos y detalles visuales con menos bytes que una representación directa de cada pixel.
limitations:
- Ningún método lossless puede reducir todos los posibles inputs; algunos datos pueden mantener o aumentar su tamaño.
- Una mejor compression ratio puede requerir más CPU, memoria, latencia o pérdida de fidelidad.
sources:
- source-shannon-mathematical-theory-communication-1948
- source-rfc-1951-deflate
- source-itu-t-t81-jpeg
- source-acm-ieee-cc2020
- source-it-study-taxonomy
- source-it-study-content-model
priority: important
knowledgeLevel: contextual-understanding
stability: stable-foundation
editorialStatus: in-review
owner: IT Study production agent
decisionRefs:
- decision-0024-thousand-entity-expansion
batch: batch-045-expansion-wave-01-03
createdAt: '2026-07-27'
verificationStatus: pending
deprecated: false
contractVersion: '1.0'
---

# Data Compression

## Qué es

**Data Compression** (compresión de datos) cambia la representación de información para utilizar normalmente menos bits. El encoder identifica regularidades o decide qué detalle puede omitirse; el decoder reconstruye los datos exactos o una aproximación, según el método.

## Cómo encaja

La compression aparece en archivos, bases de datos, multimedia, redes y memoria. Puede reducir almacenamiento y transferencia, pero agrega trabajo de codificación y decodificación. La elección depende del tipo de datos, la latencia, la capacidad disponible y la fidelidad requerida.

## Ejemplo

Un texto con secuencias repetidas puede reemplazar repeticiones por referencias más cortas. Una imagen puede además descartar variaciones visuales poco relevantes para alcanzar un tamaño menor.

## Distinción clave

Data Compression no es sinónimo de **encryption**, porque su objetivo no es ocultar información. Tampoco equivale a archiving o serialization: un archive puede agrupar archivos y una serialization organiza estructuras, aunque ambos puedan incorporar compression. **Lossless Compression** reconstruye exactamente; **Lossy Compression** acepta diferencias controladas.
