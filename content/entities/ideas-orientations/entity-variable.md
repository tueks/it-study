---
id: entity-variable
type: concept
title: Variable
canonicalName: variable
englishName: Variable
aliases:
- value: program variable
  kind: alternate
  language: en
summary: Abstracción mediante la cual un programa asocia un nombre, referencia o ubicación con un valor que puede consultarse y, según el lenguaje, cambiar.
definition: Variable es un término de programación para una entidad identificable cuyo valor o binding participa en la ejecución. Algunos lenguajes modelan variables como storage locations; otros enfatizan bindings entre names y values.
purpose: Referenciar datos durante la ejecución, expresar estados intermedios y permitir que operaciones posteriores utilicen resultados previamente obtenidos.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-fundamentos-programacion
related:
- entity-constant
- entity-data-type
examples:
- title: Contador
  explanation: Un nombre `count` puede referirse al número de elementos procesados y actualizarse cuando se procesa uno nuevo.
limitations:
- Variable no implica necesariamente mutabilidad; el lenguaje puede impedir reasignación.
- Nombre, binding, object y storage location no son sinónimos universales.
- Scope y lifetime determinan dónde y durante cuánto tiempo puede utilizarse.
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

# Variable

## Qué es

Una **Variable** permite que un programa se refiera a un dato mediante un name, binding o storage location, según el modelo del lenguaje.

## Cómo encaja

Variables almacenan o referencian inputs, resultados y estado. Su declaración puede establecer un name, un Data Type, un valor inicial, un scope y reglas de mutabilidad.

## Ejemplo

`count` puede comenzar con cero y actualizarse cada vez que se procesa un elemento. El programa usa el mismo name para consultar el estado actual.

## Distinción clave

Variable no es necesariamente una caja física ni siempre puede cambiar. Algunos lenguajes crean bindings inmutables y otros distinguen name, object y memory location. Tampoco es un Data Type: la variable es la entidad utilizada por el programa; el type describe valores y operaciones permitidas.
