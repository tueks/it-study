---
id: entity-character-encoding
type: technology
title: Character Encoding
canonicalName: character encoding
englishName: Character Encoding
aliases:
- value: codificación de caracteres
  kind: translation
  language: es
summary: Sistema que asigna representaciones numéricas y serializaciones a caracteres para almacenarlos, procesarlos e intercambiarlos.
definition: Un character encoding establece cómo un repertoire de caracteres se relaciona con valores numéricos y cómo esos valores se expresan mediante code units o bytes. Puede distinguir entre coded character set, encoding form y encoding scheme.
problemSolved: Permite que distintos sistemas representen e interpreten texto mediante reglas compartidas en lugar de depender de símbolos visuales o convenciones locales implícitas.
purpose: Hacer posible el almacenamiento, procesamiento e intercambio interoperable de texto digital.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-informacion-representacion
prerequisites:
- entity-bit
- entity-byte
capabilities:
- asignar identificadores numéricos a caracteres
- convertir caracteres en secuencias de code units o bytes
- reconstruir texto cuando emisor y receptor comparten el encoding
mechanisms:
- character repertoire
- coded character set
- character encoding form
- character encoding scheme
applicationContexts:
- archivos de texto
- protocolos y APIs
- bases de datos
- interfaces y sistemas operativos
relations:
- targetId: entity-ascii
  relationType: related-to
  note: ASCII es un coded character set y encoding histórico de alcance limitado.
- targetId: entity-unicode
  relationType: related-to
  note: Unicode define un repertoire y codespace universal con encoding forms como UTF-8, UTF-16 y UTF-32.
- targetId: entity-data-encoding
  relationType: related-to
  note: Character encoding es una clase específica de data encoding centrada en texto.
examples:
- title: Mismo byte, distinto carácter
  explanation: Un valor de byte puede representar caracteres distintos bajo encodings incompatibles, por lo que el encoding debe conocerse.
limitations:
- Un character encoding no define tipografía, apariencia, idioma ni significado del texto.
- “Charset” se usa informalmente para varias capas distintas y puede ocultar diferencias entre repertoire y serialización.
sources:
- source-unicode-utr-17-character-encoding-model
- source-unicode-standard-17-0
- source-rfc-20-ascii
- source-it-study-taxonomy
- source-it-study-content-model
priority: essential
knowledgeLevel: contextual-understanding
stability: slow-evolution
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

# Character Encoding

## Qué es

Un **Character Encoding** (codificación de caracteres) define cómo representar texto mediante números y unidades almacenables. Relaciona caracteres abstractos con valores y determina cómo esos valores se serializan como code units o bytes.

## Cómo encaja

El modelo puede separarse en capas. Un **character repertoire** enumera caracteres; un **coded character set** les asigna code points; una **encoding form** expresa esos code points como code units; y una **encoding scheme** determina su serialización concreta. No todos los estándares usan exactamente la misma terminología, pero la separación evita confusiones.

## Ejemplo

El carácter `A` tiene el valor 65 en ASCII y el code point `U+0041` en Unicode. En UTF-8 se serializa como el byte `41` hexadecimal. La coincidencia existe por compatibilidad, pero no significa que ASCII, Unicode y UTF-8 sean el mismo concepto.

## Distinción clave

Character encoding se ocupa de representar caracteres, no de su apariencia visual. Fonts y rendering deciden cómo se muestran; el idioma y el contexto determinan significado. Tampoco equivale a encryption ni compression: esas transformaciones persiguen objetivos diferentes aunque también produzcan secuencias de bytes.
