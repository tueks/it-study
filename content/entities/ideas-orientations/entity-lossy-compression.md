---
id: entity-lossy-compression
type: concept
title: Lossy Compression
canonicalName: lossy compression
englishName: Lossy Compression
aliases:
- value: compresión con pérdida
  kind: translation
  language: es
summary: Compression que reduce tamaño descartando o aproximando información conforme a un modelo de calidad o distorsión aceptable.
definition: Lossy Compression produce una representación desde la cual el decoder reconstruye una aproximación del input, no una copia bit a bit. El encoder prioriza información considerada más relevante para el uso previsto.
purpose: Alcanzar tamaños o bitrates menores cuando la fidelidad exacta no es necesaria y puede intercambiarse detalle por eficiencia.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-informacion-representacion
prerequisites:
- entity-data-compression
related:
- entity-lossless-compression
- entity-information-theory
examples:
- title: Imagen fotográfica
  explanation: Un encoder puede cuantizar componentes visuales para conservar una apariencia útil con menos datos, aunque algunos valores reconstruidos cambien.
limitations:
- La información descartada no puede recuperarse desde el resultado comprimido.
- Repetir ciclos de encoding y decoding puede acumular artefactos y degradación.
- La calidad aceptable depende del contenido, la configuración y el uso final.
sources:
- source-shannon-mathematical-theory-communication-1948
- source-itu-t-t81-jpeg
- source-acm-ieee-cc2020
- source-it-study-taxonomy
- source-it-study-content-model
priority: important
knowledgeLevel: contextual-understanding
stability: stable-foundation
editorialStatus: approved
owner: IT Study production agent
decisionRefs:
- decision-0024-thousand-entity-expansion
batch: batch-045-expansion-wave-01-03
createdAt: '2026-07-27'
reviewedAt: '2026-07-27'
verificationStatus: verified
deprecated: false
contractVersion: '1.0'
---

# Lossy Compression

## Qué es

**Lossy Compression** (compresión con pérdida) reduce datos permitiendo que la reconstrucción sea diferente del original. El método descarta o aproxima información según un modelo de percepción, calidad o distorsión.

## Cómo encaja

Se utiliza especialmente en imágenes, audio y video, donde una copia exacta puede ser menos importante que el tamaño, el bitrate o la velocidad de transmisión. La configuración controla el intercambio entre fidelidad y eficiencia.

## Ejemplo

Una imagen fotográfica puede transformar bloques, cuantizar coeficientes y codificar los resultados. Al abrirla se obtiene una imagen semejante, pero no necesariamente los mismos valores de pixel.

## Distinción clave

Lossy no significa archivo corrupto: la diferencia está prevista por el formato. Tampoco implica siempre baja calidad; una configuración adecuada puede producir cambios poco perceptibles. A diferencia de **Lossless Compression**, la representación comprimida no contiene suficiente información para reconstruir exactamente el input.
