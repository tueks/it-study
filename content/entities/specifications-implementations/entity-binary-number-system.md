---
id: entity-binary-number-system
type: technology
title: Binary Number System
canonicalName: binary number system
englishName: Binary Number System
aliases:
- value: sistema binario
  kind: translation
  language: es
- value: base 2
  kind: common
  language: en
summary: Positional numeral system de base 2 que utiliza los dígitos `0` y `1` para representar valores.
definition: El Binary Number System representa cantidades mediante posiciones cuyos pesos son potencias de 2. Cada posición contiene uno de dos dígitos, `0` o `1`, y puede materializarse directamente mediante bits.
problemSolved: Permite representar números con símbolos compatibles con sistemas que distinguen dos estados y ejecutar operaciones digitales sistemáticas.
purpose: Proporcionar la representación numérica fundamental utilizada por circuitos, instrucciones y estructuras de datos digitales.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-informacion-representacion
prerequisites:
- entity-number-base
- entity-bit
capabilities:
- representar enteros mediante potencias de 2
- mapear cada dígito a un bit
- soportar operaciones aritméticas y lógicas digitales
mechanisms:
- positional notation de base 2
- pesos `2^0`, `2^1`, `2^2` y sucesivos
- combinación de binary digits
applicationContexts:
- hardware digital
- representación numérica
- instrucciones y direcciones
- protocolos y formatos
relations:
- targetId: entity-hexadecimal-number-system
  relationType: complementary-to
  note: Hexadecimal compacta cada grupo de cuatro binary digits en un solo símbolo.
examples:
- title: Conversión a decimal
  explanation: `1011₂` representa `1×8 + 0×4 + 1×2 + 1×1`, equivalente a 11 decimal.
limitations:
- No define por sí solo cómo representar signo, fracciones, overflow o tipos numéricos concretos.
- Una secuencia binaria necesita contexto para distinguir si representa un número u otro tipo de dato.
sources:
- source-mit-ocw-computation-structures-2017
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

# Binary Number System

## Qué es

El **Binary Number System** (sistema binario) es un positional numeral system de base 2. Solo utiliza los dígitos `0` y `1`, y cada posición tiene un peso que es una potencia de 2.

## Cómo encaja

Binary se adapta directamente a sistemas digitales porque cada digit puede representarse con un bit. Esta correspondencia facilita construir circuitos y mecanismos de almacenamiento capaces de operar con números mediante estados binarios.

## Ejemplo

El numeral `1011₂` equivale a `1×2³ + 0×2² + 1×2¹ + 1×2⁰`, por lo que representa el valor decimal 11. Agregar una posición a la izquierda duplica el rango de valores sin signo que puede expresarse.

## Distinción clave

Binary define una escritura numérica, no el significado completo de una secuencia de bits. El patrón `11111111` podría interpretarse como 255 sin signo, como -1 bajo two's complement de ocho bits o como parte de otro formato. Las reglas para signo, fracciones, tamaño y overflow pertenecen a representaciones numéricas adicionales. Tampoco debe confundirse binary con Boolean logic: ambos usan dos valores, pero uno representa números y el otro condiciones lógicas.
