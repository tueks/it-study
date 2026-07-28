---
id: entity-data-type
type: concept
title: Data Type
canonicalName: data type
englishName: Data Type
aliases:
- value: tipo de dato
  kind: translation
  language: es
- value: type
  kind: common
  language: en
summary: Clasificación que define un conjunto de valores y las operaciones, reglas o representaciones asociadas con ellos.
definition: Un Data Type describe qué valores pertenecen a una categoría, qué operaciones son válidas y cómo el lenguaje comprueba o interpreta su uso. Puede incluir aspectos de representación, pero no se reduce necesariamente al tamaño en memoria.
purpose: Dar significado a los datos, prevenir operaciones inválidas y permitir que compilers, runtimes y developers razonen sobre interfaces y comportamiento.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-fundamentos-programacion
related:
- entity-variable
- entity-constant
- entity-data-encoding
examples:
- title: Integer y string
  explanation: Un integer admite arithmetic operations, mientras un string admite concatenation y acceso a una secuencia de caracteres según el lenguaje.
limitations:
- Los mismos nombres de types pueden tener rangos y representaciones distintas entre lenguajes.
- Static y dynamic typing cambian cuándo y cómo se comprueban las reglas.
- Data Type no es sinónimo de data structure ni de formato de archivo.
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

# Data Type

## Qué es

Un **Data Type** clasifica valores y define qué operaciones tienen sentido sobre ellos. También puede establecer reglas de representación, conversión y comprobación.

## Cómo encaja

Variables, parameters, expressions y return values pueden tener types. El type ayuda a un compiler o runtime a interpretar operaciones y detectar usos incompatibles.

## Ejemplo

Un integer puede participar en suma aritmética; un string puede concatenarse. Aunque ambos se representen mediante bits, sus operaciones y significado son diferentes.

## Distinción clave

Data Type no es la Variable que contiene o referencia un valor. Tampoco es una Data Structure: un type describe valores y operaciones, mientras una estructura organiza elementos para resolver un problema. Los detalles exactos dependen del lenguaje y su type system.
