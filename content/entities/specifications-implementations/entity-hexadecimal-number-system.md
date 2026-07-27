---
id: entity-hexadecimal-number-system
type: technology
title: Hexadecimal Number System
canonicalName: hexadecimal number system
englishName: Hexadecimal Number System
aliases:
- value: sistema hexadecimal
  kind: translation
  language: es
- value: hex
  kind: common
  language: en
- value: base 16
  kind: common
  language: en
summary: Positional numeral system de base 16 que utiliza dieciséis símbolos y compacta grupos de cuatro binary digits.
definition: El Hexadecimal Number System representa valores mediante posiciones con pesos que son potencias de 16. Usa normalmente los símbolos `0` a `9` y `A` a `F`; cada hexadecimal digit corresponde exactamente a cuatro binary digits.
problemSolved: Reduce la longitud y los errores de lectura al expresar valores binarios extensos sin perder una conversión directa por grupos de cuatro bits.
purpose: Facilitar la escritura, inspección y comunicación de direcciones, bytes, máscaras y otros valores digitales.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-informacion-representacion
prerequisites:
- entity-number-base
- entity-binary-number-system
capabilities:
- representar valores mediante base 16
- compactar cuatro bits en un hexadecimal digit
- facilitar la lectura de direcciones y patrones binarios
mechanisms:
- positional notation de base 16
- símbolos `0` a `9` y `A` a `F`
- conversión directa entre nibbles y digits hexadecimales
applicationContexts:
- direcciones de memoria
- bytes y dumps
- colores digitales
- identificadores y debugging
relations:
- targetId: entity-binary-number-system
  relationType: complementary-to
  note: Cada digit hexadecimal representa un grupo exacto de cuatro binary digits.
examples:
- title: Conversión desde binary
  explanation: El patrón `1111 1010` se agrupa como `1111` y `1010`, equivalentes a `F` y `A`, por lo que se escribe `FA`.
limitations:
- Hexadecimal mejora legibilidad, pero el hardware no necesita operar internamente en base 16.
- Prefijos como `0x` son convenciones de notación y no forman parte del valor matemático.
sources:
- source-mit-ocw-computation-structures-2017
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

# Hexadecimal Number System

## Qué es

El **Hexadecimal Number System** es un positional numeral system de base 16. Utiliza `0` a `9` para los primeros diez valores y `A` a `F` para los valores diez a quince.

## Cómo encaja

Como 16 equivale a `2⁴`, cada hexadecimal digit corresponde exactamente a cuatro binary digits. Esto permite compactar secuencias binarias largas sin realizar una conversión aritmética compleja. Por esa razón, hex aparece con frecuencia en direcciones, bytes, máscaras, colores y herramientas de debugging.

## Ejemplo

El binary `1111 1010` se divide en dos grupos. `1111` corresponde a `F` y `1010` corresponde a `A`, por lo que el resultado es `FA₁₆`. En muchas herramientas se escribe `0xFA` para indicar explícitamente la base.

## Distinción clave

Hexadecimal no es un tipo distinto de dato ni implica que el sistema físico utilice dieciséis estados. Es una notación conveniente para valores que normalmente siguen almacenados como bits. Un mismo numeral puede producir valores distintos si se interpreta con otra base; por ello, prefijos, sufijos o contexto son necesarios para evitar ambigüedad.