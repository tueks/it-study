---
id: entity-bit
type: technology
title: Bit
canonicalName: bit
englishName: Bit
aliases:
- value: binary digit
  kind: expansion
  language: en
- value: dígito binario
  kind: translation
  language: es
summary: Unidad binaria de información representada convencionalmente por uno de dos valores, normalmente `0` o `1`.
definition: Un bit es una unidad que distingue entre dos alternativas. En sistemas digitales suele representarse mediante los símbolos `0` y `1`, aunque la implementación física puede utilizar niveles de voltaje, estados magnéticos, luz u otros mecanismos.
problemSolved: Proporciona una unidad mínima y combinable para representar información mediante estados distinguibles y procesables por sistemas digitales.
purpose: Construir representaciones binarias que puedan almacenarse, transmitirse y transformarse mediante operaciones digitales.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-informacion-representacion
capabilities:
- representar una elección entre dos estados
- combinarse en secuencias para representar valores más amplios
- participar en operaciones lógicas y aritméticas binarias
mechanisms:
- asignación convencional de símbolos `0` y `1`
- implementación mediante dos regiones o estados distinguibles
- agrupación posicional en secuencias binarias
applicationContexts:
- almacenamiento digital
- comunicación de datos
- representación numérica
- lógica digital
relations:
- targetId: entity-binary-number-system
  relationType: related-to
  note: Cada binary digit de una representación base 2 se expresa mediante un bit cuando la representación se materializa digitalmente.
- targetId: entity-data-encoding
  relationType: related-to
  note: Los esquemas de data encoding terminan representándose como secuencias de bits o unidades construidas sobre ellos.
examples:
- title: Estado booleano
  explanation: Una condición con dos resultados puede codificarse como `0` para false y `1` para true, siempre que la convención esté definida.
limitations:
- El significado de `0` y `1` depende de la convención o encoding aplicado.
- Un bit aislado no identifica por sí mismo un número, carácter, permiso o estado físico concreto.
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

# Bit

## Qué es

Un **bit**, abreviatura de **binary digit**, es una unidad que puede tomar uno de dos valores. En la representación digital se escriben normalmente como `0` y `1`, pero esos símbolos no obligan a una implementación física determinada.

## Cómo encaja

Los bits se combinan para representar números, texto, imágenes, instrucciones y cualquier otro dato digital. Su utilidad no proviene de que `0` o `1` tengan un significado universal, sino de que un encoding establece cómo interpretar cada posición o secuencia.

## Ejemplo

Una aplicación podría usar `0` para indicar que una opción está desactivada y `1` para indicar que está activada. Esa misma secuencia de bits, interpretada con otra convención, podría representar parte de un número, un color o una instrucción.

## Distinción clave

Un bit es una unidad lógica de representación; no es necesariamente un transistor, pulso o voltaje específico. La implementación debe disponer de dos estados suficientemente distinguibles, pero puede materializarlos de diferentes maneras. Tampoco debe confundirse un bit con un **byte**, que en los sistemas modernos agrupa ocho bits.
