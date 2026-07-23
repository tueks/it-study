---
id: scenario-incident-service-production
type: scenario
title: Degradación de un servicio en producción
objective: Comprender coordinación contextual ante degradación de un servicio sin convertir el caso en un runbook.
context: Un servicio que atiende una función de producto muestra aumento de errores después de un cambio reciente.
participants: [entity-site-reliability-engineer, entity-backend-developer, entity-security-analyst, entity-product-manager]
domains: [domain-infraestructura-operacion, domain-desarrollo-software, domain-ciberseguridad-riesgo, domain-producto-experiencia]
initialSituation: Una señal de telemetría muestra errores sostenidos y usuarios reportan resultados incompletos.
events:
  - { order: 1, description: "La observación del servicio activa una investigación coordinada.", references: [entity-monitoring, entity-senal-de-telemetria] }
  - { order: 2, description: "El equipo compara el comportamiento reciente con el cambio y documenta hipótesis.", references: [entity-coordinacion-de-incidentes, entity-architecture-decision-record] }
decisions:
  - question: "¿Qué acción reduce impacto mientras se preserva evidencia para comprender el problema?"
    illustrativeOptions: [limitar una función, restaurar una configuración previa, mantener el cambio y observar]
    narrativeDecision: "El equipo elige una mitigación reversible, comunica el impacto y continúa el análisis sin atribuir causalidad antes de contar con evidencia suficiente."
    consequences: "La afectación se reduce y quedan visibles las incertidumbres, decisiones y señales relevantes."
concepts: [entity-monitoring, entity-senal-de-telemetria, entity-coordinacion-de-incidentes]
artifactsProduced: [entity-runbook, entity-architecture-decision-record]
risks: [impacto a usuarios, interpretación incompleta de señales, exposición de información]
outcome: El servicio recupera comportamiento estable y el equipo conserva contexto para aprendizaje posterior.
complexity: introductory
sources: [source-google-sre, source-nist-csf-2]
priority: important
knowledgeLevel: contextual-understanding
stability: slow-evolution
editorialStatus: draft
owner: Codex
batch: batch-027-scenarios-core-a
createdAt: 2026-07-22
verificationStatus: pending
deprecated: false
contractVersion: "1.0"
---

# Degradación de un servicio en producción
