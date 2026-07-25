---
id: entity-predicate-logic
type: model
title: Predicate Logic
canonicalName: predicate logic
englishName: Predicate Logic
aliases:
- value: lógica de predicados
  kind: translation
  language: es
- value: predicate calculus
  kind: alternate
  language: en
summary: Sistema formal que representa objetos, propiedades y relaciones mediante predicates, variables y quantifiers.
definition: Predicate Logic amplía Propositional Logic al permitir que los enunciados tengan estructura interna. Utiliza predicates aplicados a términos, variables y quantifiers como universal y existential para formular afirmaciones sobre elementos de un dominio.
purpose: Expresar y analizar afirmaciones generales o existenciales que no pueden representarse tratando cada oración como una proposición indivisible.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-teoria-modelos-computacion
prerequisites:
- entity-propositional-logic
- entity-set-theory
represents: Propiedades y relaciones sobre objetos de un dominio mediante fórmulas cuantificadas.
scope: Predicates, variables, términos, dominios, universal quantification, existential quantification e inferencia introductoria.
elements:
- dominio de discurso
- términos y variables
- predicates
- conectores lógicos
- universal quantifier
- existential quantifier
relations:
- targetId: entity-propositional-logic
  relationType: builds-on
  note: Conserva los conectores proposicionales y agrega estructura interna y quantifiers.
examples:
- title: Existencia de administrador
  explanation: `EXISTS x: User(x) AND Admin(x)` expresa que al menos un elemento del dominio es usuario y administrador.
limitations:
- La interpretación depende del dominio y del significado asignado a predicates y términos.
- La ficha cubre el modelo general introductorio y no distingue todos los sistemas de orden superior o lógicas especializadas.
sources:
- source-mit-ocw-mathematics-for-computer-science-2015
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
batch: batch-044-expansion-wave-01-02
createdAt: '2026-07-24'
verificationStatus: pending
deprecated: false
contractVersion: '1.0'
---

# Predicate Logic

## Qué es

**Predicate Logic** (lógica de predicados) permite razonar sobre objetos, sus propiedades y las relaciones entre ellos. En lugar de tratar una oración completa como una sola proposición, la representa mediante **predicates**, términos, variables y **quantifiers**.

## Cómo encaja

Los quantifiers más comunes son universal, que expresa que una condición se cumple para todos los elementos de un dominio, y existential, que afirma que existe al menos uno. Este nivel de estructura permite formalizar requisitos, reglas y propiedades que Propositional Logic solo podría representar como bloques sin analizar.

## Ejemplo

La expresión `EXISTS x: User(x) AND Admin(x)` afirma que existe algún elemento `x` que pertenece al conjunto de usuarios y cumple el predicate `Admin`. Cambiar `EXISTS` por `FOR ALL` produciría una afirmación mucho más fuerte: que todos los usuarios son administradores.

## Distinción clave

Predicate Logic amplía Propositional Logic, pero no asigna automáticamente significado a sus símbolos. Deben definirse el dominio y la interpretación de cada predicate. Tampoco toda lógica con predicates es idéntica: first-order logic limita la cuantificación a elementos del dominio, mientras que otros sistemas permiten cuantificar sobre relaciones o propiedades.
