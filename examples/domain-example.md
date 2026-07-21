---
id: domain-example-redes-telecomunicaciones
type: domain
title: "[Ejemplo] Redes y telecomunicaciones"
canonicalName: redes y telecomunicaciones
englishName: Networking and Telecommunications
aliases:
  - value: networking
    kind: common
    language: en
summary: "Ejemplo no productivo de un dominio dedicado a la comunicación e interconexión de dispositivos y sistemas."
definition: "Dominio de ejemplo que reúne conocimiento sobre transmisión, interconexión y control de comunicaciones entre dispositivos, sistemas y redes."
purpose: "Demostrar cómo una ficha de dominio delimita un campo de conocimiento sin incorporar este registro al inventario ni modificar la taxonomía."
includedScope:
  - fundamentos de redes y modelos por capas
  - direccionamiento y entrega de paquetes
  - routing y switching
  - servicios y operación de red
excludedScope:
  - administración general de servidores
  - gobierno organizacional completo de ciberseguridad
  - implementación interna de aplicaciones
subdomains:
  - subdomain-example-fundamentos-protocolos-red
  - subdomain-example-internet-servicios-red
  - subdomain-example-redes-inalambricas-moviles
relatedDisciplines:
  - discipline-example-seguridad
  - discipline-example-observabilidad
neighborDomains:
  - domain-example-infraestructura-operacion
  - domain-example-ciberseguridad-riesgo
  - domain-example-integracion-sistemas-empresariales
overlaps:
  - targetId: domain-example-infraestructura-operacion
    nature: frontera operativa
    boundary: "La conectividad tiene hogar en este dominio; la provisión y operación de la infraestructura que la soporta corresponde al dominio vecino."
  - targetId: domain-example-ciberseguridad-riesgo
    nature: aplicación transversal
    boundary: "La protección de redes se aplica aquí, pero el cuerpo general de seguridad, privacidad y riesgo conserva otro hogar."
membershipCriteria:
  - "El propósito central del elemento es transmitir, interconectar o controlar comunicaciones."
  - "El elemento aporta vocabulario o capacidades propias de redes, no solo utiliza una red como medio."
sources:
  - source-example-taxonomy
  - source-example-content-model
priority: essential
knowledgeLevel: contextual-understanding
stability: slow-evolution
editorialStatus: draft
owner: example-maintainers
decisionRefs:
  - decision-0003-taxonomy-structure
  - decision-0005-content-format-and-identifiers
createdAt: 2026-07-21
verificationStatus: verified
deprecated: false
contractVersion: "1.0"
---

# Ficha canónica de dominio — ejemplo no productivo

> Este archivo es un artefacto de definición. No crea un dominio, no forma parte del inventario y no autoriza producción. Todos los IDs que contienen `example` existen únicamente dentro de este ejemplo.

## Propósito educativo del dominio

Este dominio de ejemplo permite ubicar preguntas sobre cómo se conectan y comunican los sistemas. Su ficha establece una frontera reconocible: una tecnología no pertenece aquí solo porque use una red; su propósito principal debe ser la comunicación o la operación de esa conectividad.

## Alcance incluido

- Fundamentos de transmisión, direccionamiento, topologías y modelos por capas.
- Protocolos y servicios de red.
- Redes empresariales, Internet, redes inalámbricas y telecomunicaciones.
- Operación, rendimiento y disponibilidad de red.

## Alcance excluido

- La administración general de cómputo, almacenamiento o plataformas cloud.
- El gobierno integral de ciberseguridad, privacidad y riesgo.
- La integración semántica de aplicaciones y procesos empresariales.
- La implementación interna de aplicaciones que únicamente consumen conectividad.

## Subdominios demostrativos

| ID | Nombre | Propósito dentro del ejemplo |
|---|---|---|
| `subdomain-example-fundamentos-protocolos-red` | Fundamentos y protocolos de red | Agrupar modelos, direccionamiento, entrega y reglas de comunicación. |
| `subdomain-example-internet-servicios-red` | Internet y servicios de red | Contextualizar servicios que permiten localizar, enrutar y comunicar sistemas. |
| `subdomain-example-redes-inalambricas-moviles` | Redes inalámbricas y móviles | Reunir comunicación por medios inalámbricos y movilidad. |

## Dominios vecinos y fronteras

- `domain-example-infraestructura-operacion`: opera recursos y servicios; no absorbe los fundamentos de conectividad.
- `domain-example-ciberseguridad-riesgo`: protege sistemas y redes; no convierte cada control de seguridad en conocimiento cuyo hogar sea redes.
- `domain-example-integracion-sistemas-empresariales`: conecta aplicaciones y procesos; utiliza protocolos de red, pero su pregunta principal es la interoperabilidad.

## Disciplinas relacionadas

- `discipline-example-seguridad` se aplica al dominio para proteger comunicaciones, identidades y recursos.
- `discipline-example-observabilidad` se aplica para comprender comportamiento, rendimiento y fallos a partir de evidencia.

Estas aplicaciones no duplican la definición canónica de cada disciplina ni crean nuevos hogares.

## Registro de referencias demostrativas

Los siguientes registros mínimos hacen resolubles las referencias del ejemplo. No son fichas productivas ni relaciones globales:

| ID | Tipo | Existencia dentro del ejemplo |
|---|---|---|
| `subdomain-example-fundamentos-protocolos-red` | subdomain | Declaración demostrativa |
| `subdomain-example-internet-servicios-red` | subdomain | Declaración demostrativa |
| `subdomain-example-redes-inalambricas-moviles` | subdomain | Declaración demostrativa |
| `discipline-example-seguridad` | discipline | Declaración demostrativa |
| `discipline-example-observabilidad` | discipline | Declaración demostrativa |
| `domain-example-infraestructura-operacion` | domain | Declaración demostrativa |
| `domain-example-ciberseguridad-riesgo` | domain | Declaración demostrativa |
| `domain-example-integracion-sistemas-empresariales` | domain | Declaración demostrativa |
| `source-example-taxonomy` | source | `docs/02-taxonomy.md` |
| `source-example-content-model` | source | `docs/03-content-model.md` |

## Notas estructurales

1. El namespace `domain` y la clave semántica siguen el contrato de IDs; `example` marca inequívocamente el carácter no productivo.
2. `includedScope` y `excludedScope` delimitan pertenencia. No son listas de navegación.
3. `subdomains`, `neighborDomains` y `relatedDisciplines` son campos de autoridad; no se duplican como objetos en `relations[]`.
4. `overlaps` documenta una frontera y no declara pertenencia múltiple.
5. No se incluyen propiedades visuales, rutas de archivos como identidad ni contenido específico de interfaz.
