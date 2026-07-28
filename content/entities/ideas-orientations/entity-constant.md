---
id: entity-constant
type: concept
title: Constant
canonicalName: constant
englishName: Constant
aliases:
- value: constante
  kind: translation
  language: es
- value: named constant
  kind: alternate
  language: en
summary: Valor, expresión o binding definido para no cambiar dentro de un contexto establecido por el lenguaje o el programa.
definition: Constant puede referirse a un literal, una compile-time constant o un named binding que no admite modificación. La definición exacta depende de las reglas del lenguaje.
purpose: Representar valores fijos, comunicar invariants y prevenir modificaciones accidentales dentro del alcance correspondiente.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-fundamentos-programacion
related:
- entity-variable
- entity-data-type
examples:
- title: Tasa fija
  explanation: Un named constant puede representar una tasa configurada en código que no debe reasignarse durante la ejecución.
limitations:
- Constant no significa que el object referenciado sea profundamente immutable.
- Literal, compile-time constant y read-only binding son conceptos relacionados pero no idénticos.
- Un valor fijo en código puede seguir requiriendo configuración externa en otro diseño.
sources:
- source-iso-c-n1570-2011
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
batch: batch-046-expansion-wave-01-04
createdAt: '2026-07-27'
reviewedAt: '2026-07-27'
verificationStatus: verified
deprecated: false
contractVersion: '1.0'
---

# Constant

## Qué es

Una **Constant** representa un valor o binding que no debe cambiar dentro de un contexto definido. Puede aparecer como literal, named constant o compile-time constant.

## Cómo encaja

Constants hacen explícitos valores fijos, ayudan a expresar invariants y evitan reasignaciones accidentales. Su declaración y alcance dependen del lenguaje.

## Ejemplo

Un programa puede declarar un named constant para el número máximo de intentos. El resto del código utiliza ese name en lugar de repetir un número sin contexto.

## Distinción clave

Constant no siempre equivale a immutable object. Un binding puede no cambiar y aun así referirse a un object mutable, según el lenguaje. Tampoco todo literal crea automáticamente un named constant ni toda variable read-only es una compile-time constant.
