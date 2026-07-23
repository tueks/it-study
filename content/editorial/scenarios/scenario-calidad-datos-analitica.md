---
id: scenario-calidad-datos-analitica
type: scenario
title: Calidad de datos para análisis
objective: Comprender cómo límites de calidad afectan análisis de datos.
context: Un equipo reúne datos operativos para responder una pregunta de producto.
participants: [entity-data-engineer, entity-data-analyst, entity-business-analyst, entity-product-manager]
domains: [domain-datos-analitica, domain-integracion-sistemas-empresariales, domain-ingenieria-software, domain-producto-experiencia]
initialSituation: Los resultados analíticos muestran diferencias que no están explicadas por los consumidores.
events: [{ order: 1, description: "El equipo perfila campos y revisa sus definiciones.", references: [entity-data-profiling, entity-data-dictionary] }, { order: 2, description: "Se contrasta el origen operativo con el propósito analítico.", references: [entity-relational-database, entity-data-warehouse] }]
decisions: [{ question: "¿Cómo comunicar resultados antes de usarlos en una decisión?", illustrativeOptions: [publicar sin contexto, declarar límites, descartar todo], narrativeDecision: "El equipo documenta procedencia, calidad y límites de interpretación.", consequences: "Las decisiones posteriores distinguen evidencia disponible de certeza." }]
concepts: [entity-data-profiling, entity-data-dictionary, entity-relational-database, entity-data-warehouse]
artifactsProduced: [entity-data-dictionary, entity-architecture-decision-record]
risks: [definiciones incompatibles, calidad insuficiente, conclusiones no justificadas]
outcome: El análisis conserva sus límites y permite conversaciones informadas entre áreas.
complexity: introductory
sources: [source-iso-iec-25012-2008, source-iiba-business-analysis-standard]
priority: important
knowledgeLevel: contextual-understanding
stability: slow-evolution
editorialStatus: approved
owner: Codex
batch: batch-028-scenarios-core-b
createdAt: 2026-07-22
verificationStatus: verified
deprecated: false
contractVersion: "1.0"
---

# Calidad de datos para análisis
