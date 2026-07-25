---
id: entity-unicode
type: standard
title: Unicode
canonicalName: Unicode
englishName: The Unicode Standard
aliases:
- value: estándar Unicode
  kind: translation
  language: es
- value: Unicode Standard
  kind: alternate
  language: en
summary: Estándar mantenido que asigna code points a un repertoire amplio de caracteres y define propiedades y encoding forms para texto interoperable.
definition: Unicode proporciona un codespace común para caracteres de múltiples scripts, símbolos y sistemas de escritura. Asigna code points, define propiedades y especifica encoding forms como UTF-8, UTF-16 y UTF-32.
purpose: Permitir que texto de diferentes idiomas y sistemas de escritura se represente e intercambie mediante identificadores y reglas compartidas.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-informacion-representacion
prerequisites:
- entity-character-encoding
- entity-byte
issuer: Unicode Consortium
designation: The Unicode Standard
version: maintained versioned standard
status: active-maintained-standard
relations:
- targetId: entity-ascii
  relationType: builds-on
  note: Unicode preserva los valores ASCII en los primeros 128 code points para compatibilidad.
examples:
- title: Code point de una letra
  explanation: `U+0041` identifica el carácter LATIN CAPITAL LETTER A; UTF-8 lo serializa como el byte hexadecimal `41`.
limitations:
- Un code point no equivale siempre a un carácter percibido por una persona; un grapheme puede contener varios code points.
- Unicode no especifica por sí solo la font, el diseño visual, la segmentación lingüística completa ni el significado contextual.
sources:
- source-unicode-standard-17-0
- source-unicode-utr-17-character-encoding-model
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

# Unicode

## Qué es

**Unicode** es un estándar para representar texto de numerosos idiomas y sistemas de escritura mediante un codespace común. Cada elemento codificado recibe un **code point**, escrito normalmente con notación como `U+0041`.

## Cómo encaja

El estándar define un character repertoire, asignaciones de code points, propiedades y reglas de procesamiento. También especifica encoding forms: **UTF-8**, **UTF-16** y **UTF-32** convierten los code points en code units adecuados para almacenamiento e intercambio.

## Ejemplo

La letra `A` tiene el code point `U+0041`. En UTF-8 se representa con el byte `41` hexadecimal; otros code points pueden necesitar varias unidades. Esta compatibilidad directa con los primeros 128 valores de ASCII facilita procesar texto ASCII válido como UTF-8.

## Distinción clave

Unicode no es sinónimo de UTF-8. Unicode define caracteres, code points, propiedades y varias encoding forms; UTF-8 es una de ellas. Tampoco un code point equivale siempre a un carácter visible: una unidad percibida puede construirse con varios code points, como una letra seguida de combining marks. Fonts y rendering determinan la apariencia, mientras que idioma y contexto aportan significado.
