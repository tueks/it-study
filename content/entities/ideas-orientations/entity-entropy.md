---
id: entity-entropy
type: concept
title: Entropy
canonicalName: entropy
englishName: Entropy
aliases:
- value: entropía de Shannon
  kind: common
  language: es
- value: information entropy
  kind: alternate
  language: en
summary: Medida de la incertidumbre o información media asociada con los resultados de una fuente probabilística.
definition: En Information Theory, Entropy resume cuánto sorprende en promedio la selección de una fuente. Aumenta cuando los resultados son menos predecibles y disminuye cuando unos pocos resultados concentran la probabilidad.
purpose: Comparar incertidumbre y establecer una referencia teórica para la longitud media de códigos lossless bajo un modelo de fuente.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-informacion-representacion
prerequisites:
- entity-information-theory
related:
- entity-lossless-compression
- entity-data-encoding
examples:
- title: Moneda predecible y moneda equilibrada
  explanation: Una fuente que casi siempre produce el mismo resultado tiene menor entropy que otra cuyos dos resultados son igualmente probables.
limitations:
- La entropy depende de la distribución modelada; una estimación incorrecta puede no describir los datos reales.
- No equivale directamente al tamaño de un archivo individual ni garantiza la compression ratio de una implementación.
- La medida informacional no es sinónimo del uso coloquial o termodinámico del término.
sources:
- source-shannon-mathematical-theory-communication-1948
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

# Entropy

## Qué es

En **Information Theory**, **Entropy** mide la incertidumbre media de una fuente. Un resultado muy predecible aporta poca información nueva; uno improbable aporta más. La medida combina estas posibilidades según su probabilidad.

## Cómo encaja

Entropy sirve como referencia para comprender cuánto puede compactarse, en promedio, una fuente mediante códigos lossless bajo determinados supuestos. Los algoritmos no almacenan “la entropy” directamente; construyen representaciones que intentan aprovechar probabilidades y patrones.

## Ejemplo

Una fuente que siempre produce `A` es completamente predecible. Otra que produce `A` o `B` con igual probabilidad requiere distinguir dos alternativas y tiene mayor entropy.

## Distinción clave

Entropy no es el tamaño exacto de cada mensaje ni una promesa de compression. Dos archivos del mismo tamaño pueden tener patrones muy distintos. Tampoco debe interpretarse automáticamente como desorden físico o caos: aquí es una medida matemática definida sobre un modelo probabilístico.
