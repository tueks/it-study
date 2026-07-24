---
id: entity-automaton
type: model
title: Automaton
canonicalName: automaton
englishName: Automaton
aliases:
- value: autómata
  kind: translation
  language: es
summary: Modelo abstracto que procesa símbolos mediante estados y reglas de transición para representar reconocimiento o cómputo de manera formal.
definition: Un automaton es un modelo matemático de una máquina abstracta que mantiene un estado, recibe símbolos o eventos y cambia conforme a reglas de transición. Distintas restricciones sobre memoria y transiciones producen modelos con capacidades diferentes.
purpose: Representar procesos de reconocimiento y cómputo con componentes definidos que puedan analizarse, compararse y demostrarse formalmente.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-teoria-modelos-computacion
prerequisites:
- entity-formal-language
- entity-estado
represents: Un proceso abstracto que transforma entradas y estados mediante reglas de transición.
scope: Modelos formales de reconocimiento y cómputo independientes de una implementación física.
elements:
- conjunto de estados
- alfabeto o entradas
- función o relación de transición
- estado inicial
- condición de aceptación cuando aplica
examples:
- title: Reconocedor de patrón
  explanation: Un automaton puede cambiar de estado al leer cada símbolo y aceptar una cadena cuando termina en un estado designado.
limitations:
- La palabra designa una familia de modelos; sus capacidades dependen de la memoria y reglas concretas.
- No describe por sí sola una computadora física ni una implementación de software.
sources:
- source-mit-ocw-theory-of-computation-2020
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
batch: batch-043-expansion-wave-01-01
createdAt: '2026-07-24'
verificationStatus: pending
deprecated: false
contractVersion: '1.0'
---

# Automaton

## Qué es

Un **automaton** (autómata) es una máquina abstracta definida por estados, entradas y reglas de transición. Se utiliza para describir de forma matemática cómo un proceso responde a símbolos o eventos.

## Cómo encaja

“Automaton” es una categoría general. Un finite automaton dispone de memoria limitada a su estado; un pushdown automaton agrega una pila; una máquina de Turing utiliza una memoria no acotada idealizada. Estas diferencias permiten estudiar qué formal languages puede reconocer cada modelo.

## Ejemplo

Un automaton que controla una puerta puede representar los estados `cerrada` y `abierta`, y cambiar entre ellos al recibir eventos válidos. En teoría de lenguajes, el mismo enfoque se utiliza para aceptar o rechazar cadenas.

## Distinción clave

Un automaton no es necesariamente un robot, programa o dispositivo físico. Es un modelo que omite detalles de implementación para concentrarse en estados, transiciones y capacidad de reconocimiento o cómputo.
