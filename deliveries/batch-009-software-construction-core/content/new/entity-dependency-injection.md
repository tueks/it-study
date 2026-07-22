---
id: entity-dependency-injection
type: pattern
title: Dependency Injection
canonicalName: dependency injection
englishName: Dependency Injection
summary: Patrón que suministra dependencias a un componente desde su exterior.
definition: Dependency Injection separa la creación o selección de colaboradores del comportamiento que los utiliza.
purpose: Ubicar su naturaleza, fronteras y uso sin convertir la ficha en tutorial.
primaryDomain: domain-desarrollo-software
subdomains: [subdomain-backend-servicios]
prerequisites: []
examples: [{ title: Aplicación contextual, explanation: Se usa con objetivos, restricciones y criterios verificables. }]
limitations: ["No prescribe una herramienta, organización o implementación universal."]
subtype: pattern
problem: Componentes acoplados a la construcción concreta de sus colaboradores.
context: Software modular con dependencias sustituibles.
forces: [configuración, sustitución, complejidad]
solution: Suministrar colaboradores mediante parámetros o un mecanismo externo.
consequences: [menor acoplamiento, configuración adicional]
knownUses: [servicios de aplicación]
sources: [source-acm-ieee-cc2020, source-iso-iec-ieee-24765-2017, source-it-study-content-model]
priority: specialized
knowledgeLevel: recognition
stability: slow-evolution
editorialStatus: approved
owner: Codex
decisionRefs: [decision-0005-content-format-and-identifiers, decision-0021-recommended-master-plan-v2-execution, decision-0022-canonical-entity-family-path]
batch: batch-009-software-construction-core
createdAt: 2026-07-21
reviewedAt: 2026-07-21
verificationStatus: verified
deprecated: false
contractVersion: "1.0"
---

# Dependency Injection

## Contexto y frontera

Dependency Injection separa la creación o selección de colaboradores del comportamiento que los utiliza. Su aplicación depende del contexto y debe conservar límites explícitos.
