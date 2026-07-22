---
id: entity-complejidad-computacional
type: concept
title: Complejidad computacional
canonicalName: complejidad computacional
englishName: Computational Complexity
summary: Estudio de los recursos que requiere resolver un problema conforme crece el tamaño de su entrada.
definition: La complejidad computacional caracteriza el consumo de recursos, como tiempo o espacio, de algoritmos y problemas mediante modelos que permiten comparar su crecimiento.
purpose: Ayudar a razonar sobre escalabilidad y límites de una solución sin depender exclusivamente de una medición puntual.
primaryDomain: domain-fundamentos-computacion
subdomains: [subdomain-algoritmos-estructuras-datos]
prerequisites: [entity-algoritmo]
examples:
  - { title: Crecimiento lineal, explanation: El trabajo aumenta aproximadamente en proporción al número de elementos examinados. }
limitations: ["El análisis asintótico no predice por sí solo el tiempo real de una ejecución.", "Hardware, constantes, entradas y calidad de implementación también influyen."]
sources: [source-acm-ieee-cc2020, source-it-study-content-model]
priority: essential
knowledgeLevel: contextual-understanding
stability: stable-foundation
editorialStatus: approved
owner: Codex
decisionRefs: [decision-0005-content-format-and-identifiers, decision-0021-recommended-master-plan-v2-execution]
batch: batch-006-foundations-core
createdAt: 2026-07-21
reviewedAt: 2026-07-21
verificationStatus: verified
deprecated: false
contractVersion: "1.0"
---

# Complejidad computacional

## Contexto

El análisis compara cómo cambia el uso de recursos al crecer la entrada. Esto permite distinguir soluciones que parecen similares en casos pequeños pero se comportan de forma muy diferente a escala.

## Distinción clave

Complejidad es una caracterización bajo un modelo; rendimiento es el comportamiento observado de una implementación en un entorno concreto.
