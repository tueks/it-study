---
id: entity-lossless-compression
type: concept
title: Lossless Compression
canonicalName: lossless compression
englishName: Lossless Compression
aliases:
- value: compresión sin pérdida
  kind: translation
  language: es
summary: Compression que permite reconstruir exactamente la secuencia original de datos a partir de la representación comprimida.
definition: Lossless Compression codifica redundancias o patrones sin eliminar información necesaria para recuperar cada bit original. El decoder produce una salida idéntica al input cuando los datos comprimidos son válidos.
purpose: Reducir tamaño preservando exactitud completa en texto, código, documentos, datos estructurados y otros contenidos donde una diferencia sería inaceptable.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-informacion-representacion
prerequisites:
- entity-data-compression
- entity-data-encoding
related:
- entity-entropy
- entity-lossy-compression
examples:
- title: Archivo de texto comprimido
  explanation: Un formato basado en referencias y códigos variables puede restaurar exactamente cada byte del documento original.
limitations:
- No garantiza que todo input se haga más pequeño; datos ya comprimidos o de alta entropía pueden no beneficiarse.
- La compression ratio y el costo de procesamiento dependen del modelo, el tamaño del bloque y las características del input.
sources:
- source-shannon-mathematical-theory-communication-1948
- source-rfc-1951-deflate
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

# Lossless Compression

## Qué es

**Lossless Compression** (compresión sin pérdida) reduce una representación de forma que el decoder puede recuperar exactamente los datos originales. No se elimina información necesaria para reconstruir la secuencia inicial.

## Cómo encaja

Los métodos lossless aprovechan repetición, probabilidades desiguales o estructuras predecibles. DEFLATE, por ejemplo, combina referencias a secuencias anteriores con Huffman coding. La garantía importante no es el algoritmo concreto, sino que la descompresión sea reversible.

## Ejemplo

En un archivo que repite muchas veces una misma cadena, el encoder puede almacenar una aparición y referencias posteriores. Al decodificar, cada referencia vuelve a expandirse hasta producir los mismos bytes.

## Distinción clave

Lossless no significa que siempre reduzca tamaño ni que el formato sea más rápido. Tampoco significa que el archivo esté cifrado. A diferencia de **Lossy Compression**, cualquier cambio en el output reconstruido indica corrupción, error o incumplimiento del formato, no una pérdida prevista por diseño.
