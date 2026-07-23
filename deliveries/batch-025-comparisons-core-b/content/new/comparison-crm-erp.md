---
id: comparison-crm-erp
type: comparison
title: CRM y ERP
comparedEntries: [entity-customer-relationship-management, entity-enterprise-resource-planning]
comparisonReason: Ambas se presentan como sistemas empresariales integrados aunque atienden procesos distintos.
dimensions:
  - key: primary-focus
    label: Enfoque principal
    criterion: Proceso organizacional que ocupa el centro de cada sistema.
    values: { entity-customer-relationship-management: "Relaciones, interacciones y procesos con clientes.", entity-enterprise-resource-planning: "Procesos y recursos operativos internos de la organización." }
  - key: information-scope
    label: Alcance de información
    criterion: Información que suele organizar cada entrada.
    values: { entity-customer-relationship-management: "Contactos, oportunidades, servicio e historial de interacción.", entity-enterprise-resource-planning: "Datos maestros, transacciones y coordinación financiera u operativa." }
  - key: decision-context
    label: Contexto de decisión
    criterion: Problema que orienta la prioridad.
    values: { entity-customer-relationship-management: "Coordinar relación comercial o de servicio con clientes.", entity-enterprise-resource-planning: "Integrar y coordinar procesos operativos de la empresa." }
similarities: ["Ambos pueden integrar datos y flujos de trabajo empresariales."]
differences: ["CRM prioriza relaciones externas; ERP coordina recursos y procesos internos, aunque pueden integrarse."]
selectionGuidance: [{ entryId: entity-customer-relationship-management, when: "El problema central es la gestión de relaciones e interacciones con clientes." }, { entryId: entity-enterprise-resource-planning, when: "El problema central es coordinar recursos y procesos operativos." }]
commonMistakes: ["Considerar CRM y ERP como módulos intercambiables.", "Suponer que un sistema sustituye gobierno de datos o rediseño de procesos."]
summary: CRM y ERP son sistemas empresariales complementarios con focos de proceso e información diferentes.
sources: [source-iiba-business-analysis-standard, source-acm-ieee-cc2020, source-it-study-content-model]
priority: important
knowledgeLevel: contextual-understanding
stability: slow-evolution
editorialStatus: approved
owner: Codex
batch: batch-025-comparisons-core-b
createdAt: 2026-07-22
verificationStatus: verified
deprecated: false
contractVersion: "1.0"
---

# CRM y ERP

Pueden integrarse, pero no son sustitutos: atienden centros de coordinación organizacional distintos.
