# IT Study — Modelo de contenido

## 1. Identificación y propósito

- **Proyecto:** IT Study
- **Documento:** Modelo de contenido
- **Ruta oficial:** `docs/03-content-model.md`
- **Documentos de autoridad, en orden:**
  1. `00-bootstrap-brief.md`;
  2. `docs/00-project-charter.md`;
  3. `docs/01-scope-and-audience.md`;
  4. `docs/02-taxonomy.md`.
- **Estado:** contrato lógico inicial aprobado para implementación posterior; no constituye contenido editorial publicado ni un esquema ejecutable.
- **Versión del contrato:** `1.0`.
- **Fecha:** 2026-07-20.

### 1.1 Propósito

Este documento convierte la taxonomía aprobada en contratos lógicos y editoriales verificables para representar, almacenar, relacionar y gobernar el contenido de IT Study sin depender de la página web ni de una tecnología de implementación. Debe permitir que ChatGPT Trabajo produzca entradas consistentes, que Codex materialice posteriormente esquemas y validadores, y que inventarios, comparaciones, escenarios y rutas utilicen referencias estables.

### 1.2 Alcance

Este documento sí define:

- capas del modelo y unidades canónicas;
- convención definitiva de identificadores;
- núcleo de campos y contratos especializados;
- familias y discriminadores de entidades;
- estructuras editoriales que consumen entidades existentes;
- representación mínima de referencias y fuentes;
- estados, prioridad, profundidad, estabilidad y vigencia;
- formato físico recomendado y organización lógica;
- validaciones conceptuales y reglas de evolución.

Este documento no define:

- el catálogo semántico final de relaciones, sus reciprocidades o cardinalidades completas;
- estilo, extensión, tono, citas en prosa o criterios de redacción;
- selección, autoridad y suficiencia definitiva de fuentes;
- cantidades, cobertura o composición del MVP;
- componentes, navegación, diseño, HTML, CSS o comportamiento visual;
- esquemas ejecutables, validadores, colecciones reales, inventarios o contenido aprobado;
- tecnología del sitio estático, búsqueda o despliegue.

## 2. Principios del modelo

1. **Independencia de la presentación.** El significado se representa sin colores, iconos, componentes, posiciones o rutas visuales.
2. **Una entrada canónica por elemento.** Un significado se define una vez; alias, dominios secundarios y estructuras editoriales lo referencian.
3. **IDs estables.** Las referencias sobreviven a cambios de título, ubicación o presentación y los IDs retirados no se reutilizan.
4. **Contenido semántico y reutilizable.** Cada campo expresa significado, gobierno o referencia y puede consumirse en web, documentos u otros formatos.
5. **Clasificación múltiple controlada.** Una entidad tiene tipo específico, dominio principal y solo las clasificaciones secundarias justificadas.
6. **Separación editorial.** El texto educativo se distingue de metadatos, gobierno, fuentes y relaciones.
7. **Núcleo consistente.** Todas las entradas comparten identificación, clasificación, estado y trazabilidad mínimos; los campos pedagógicos progresan por familia.
8. **Extensibilidad controlada.** Añadir campos, subtipos o estructuras requiere propósito, compatibilidad y decisión registrada; no se usan bolsas de propiedades libres.
9. **Trazabilidad.** Fuentes, fechas, responsables, lotes y decisiones permiten reconstruir el origen y evolución de una entrada.
10. **Validación automática.** Formato, vocabularios controlados, referencias, fechas y coherencia estructural deben ser comprobables sin interpretar el diseño.
11. **Compatibilidad multilingüe futura.** El contrato inicial conserva español e inglés sin duplicar entradas; una futura localización podrá sustituir textos por mapas de idioma manteniendo IDs.
12. **Información cambiante explícita.** Estabilidad, vigencia y revisión distinguen fundamentos de productos, versiones y conocimiento emergente.
13. **Neutralidad frente a proveedores.** Marca y proveedor son metadatos; una oferta comercial no define una capacidad general.
14. **Progresividad por tipo.** No todos los campos aplican a todo contenido: primero el núcleo, luego los campos de familia y finalmente los especializados.
15. **Ausencia significativa.** Un campo opcional se omite cuando no aplica; no se rellena con cadenas vacías, `N/A`, listas vacías innecesarias ni texto inventado.

## 3. Capas del modelo

### 3.1 Capa taxonómica

La jerarquía canónica es exclusivamente `dominio > subdominio`.

- **Dominio:** campo principal estable de conocimiento y práctica.
- **Subdominio:** partición temática que pertenece obligatoriamente a un dominio.
- **Disciplina transversal:** cuerpo coherente de conocimiento y práctica con dominio hogar y posibles dominios de aplicación; no es tercer nivel.
- **Área editorial:** agrupación opcional para orientación, planificación o recorrido; no concede pertenencia taxonómica.

Las entradas referencian IDs taxonómicos. Nunca almacenan la ruta visual, el nombre repetido del dominio ni una jerarquía implícita mediante carpetas.

### 3.2 Capa de entidades de conocimiento

La capa admite los tipos aprobados: `role`, `position`, `competency`, `concept`, `principle`, `paradigm`, `conceptual-orientation`, `methodology`, `work-framework`, `process`, `practice`, `technique`, `pattern`, `architectural-style`, `model`, `protocol`, `standard`, `technology`, `tool`, `platform`, `service`, `product`, `artifact`, `metric`, `indicator` y `certification`.

Reglas especiales:

- `antipattern` es `type: pattern` con `subtype: antipattern`;
- `brand` es metadato de implementaciones u ofertas, no tipo principal;
- una responsabilidad se representa normalmente como declaración estructurada o relación y solo excepcionalmente como entidad `responsibility` reutilizable;
- un objetivo se modela dentro de escenario, ruta, indicador u otro contexto, no como categoría general;
- un cuerpo de conocimiento se registra como `reference-publication`, dentro de la familia de artefactos de referencia.

### 3.3 Capa de estructuras editoriales

Comprende `comparison`, `scenario`, `learning-path`, `editorial-area` y, cuando aporten un propósito curatorial explícito, `collection` o `journey`. Estas estructuras ordenan o contextualizan IDs existentes; no copian definiciones ni crean entidades sustitutas.

### 3.4 Capa de relaciones

Toda relación se almacena, como mínimo, como un objeto con:

- `targetId`: ID canónico existente;
- `relationType`: clave controlada cuya lista final definirá `docs/05-relationship-rules.md`;
- `note`: aclaración contextual opcional y breve;
- `sourceIds`: fuentes opcionales que respaldan la relación.

El contenedor técnico mínimo es una lista `relations`. Los campos de conveniencia como `prerequisites`, `related`, `confusedWith`, `usedByRoles`, `competencies` y `replacedBy` son vistas tipadas de referencias y no autorización para anticipar el catálogo final. `docs/05-relationship-rules.md` decidirá dirección, reciprocidad, cardinalidad, obligatoriedad y equivalencias.

### 3.5 Capa editorial y de gobierno

Toda entrada conserva estado editorial, responsable, fuentes, creación, última revisión, revisión prevista cuando corresponda, vigencia, estabilidad, decisiones relacionadas, lote, notas de revisión y, si aplica, deprecación y sustitución. El historial completo puede residir en control de versiones y en el registro de decisiones; la entrada guarda referencias, no copia actas completas.

## 4. Unidad canónica de contenido

Una **entrada canónica** es el registro único que representa un significado identificable, posee ID estable, tipo, clasificación, definición propia, fuentes y ciclo editorial.

### 4.1 Cuándo merece archivo propio

Un elemento merece archivo cuando tiene significado autónomo, puede definirse con fuentes, participa en relaciones, aporta valor a búsqueda o navegación y requiere gobierno independiente. Una variante menor, versión efímera, nombre local o ejemplo no satisface por sí solo estos criterios.

### 4.2 Alias, acepciones y contextos

- Es **alias** una sigla, traducción, grafía, nombre histórico o denominación equivalente sin diferencia semántica relevante.
- Es **acepción** una variación contextual que conserva el mismo núcleo y puede explicarse mediante `senses[]` dentro de la entrada.
- Requiere **entrada separada** un término cuyos significados tengan definiciones, dominios o relaciones incompatibles; el título se califica por contexto.
- Una variante lingüística se registra con código de idioma, texto y clase de variante; el idioma no crea otro ID.
- Un nombre histórico se registra como alias `historical` y puede incluir periodo o nota.

Antes de crear una entrada se busca por ID, título, nombre canónico, nombre inglés, siglas, alias y significados. La similitud detectada obliga a revisar; no autoriza una fusión automática.

### 4.3 Implementaciones con varios sentidos

Una implementación que actúe como herramienta, plataforma o servicio tendrá un tipo principal según el propósito predominante de la ficha y `contextualTypes[]` para sentidos secundarios, cada uno con contexto y, cuando sea útil, consumidores o capacidades. Solo se separará en varias entradas si los significados tienen ciclos de vida o relaciones incompatibles. La marca permanece en `brand`; no determina el tipo.

## 5. Convención definitiva de IDs

### 5.1 Formato

El ID es globalmente único y adopta el formato:

`<namespace>-<semantic-key>`

Vocabulario inicial de `namespace`:

| Namespace | Contenido |
|---|---|
| `domain` | dominio |
| `subdomain` | subdominio |
| `discipline` | disciplina transversal |
| `entity` | entidad de conocimiento, incluido rol o concepto |
| `comparison` | comparación |
| `scenario` | escenario |
| `path` | ruta de aprendizaje |
| `area` | agrupación editorial |
| `collection` | colección o recorrido necesario |
| `source` | fuente normalizada |

El ID completo debe cumplir `^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$`. Solo admite letras ASCII minúsculas, dígitos y guiones simples; no admite espacios, acentos, guiones bajos, puntos, barras, dobles guiones ni guion final. La clave deberá ser corta, legible y suficientemente distintiva.

### 5.2 Normalización

- Se eliminan diacríticos: `computación` pasa a `computacion`.
- Las siglas se escriben en minúsculas y como token: `API` pasa a `api`; `SRE`, a `sre`.
- La clave semántica deriva del nombre canónico en español; se conserva el término técnico internacional cuando no exista traducción asentada o la traducción introduzca ambigüedad.
- No se incluyen artículos o palabras vacías salvo que distingan el significado.
- La versión se excluye cuando la entrada representa la familia vigente; se incluye como tokens separados únicamente cuando la versión identifica un estándar, publicación o producto conceptualmente distinto: `entity-iso-iec-25010-2023`.
- Los términos polisémicos separados incorporan un calificador estable: `entity-service-architecture` y `entity-service-management`.
- Una marca puede aparecer en la clave de una herramienta, plataforma, servicio o producto cuando es parte inseparable de su identidad, pero la capacidad general conserva otro ID.
- Los IDs no dependen del dominio, carpeta, título visible, traducción, orden, navegación o versión del sitio.

### 5.3 Estabilidad, migración y retiro

El ID se asigna una vez y no cambia por correcciones de título, traducción o traslado de dominio. Un cambio semántico incompatible crea un ID nuevo. Los IDs son únicos en todo el repositorio, incluidos los retirados, y nunca se reutilizan.

Una migración excepcional registra `legacyIds`, mantiene una tabla `anterior -> vigente`, actualiza referencias de forma atómica y conserva el ID anterior como alias de resolución. Una entrada deprecada conserva su ID, motivo y fecha; `replacedBy` es obligatorio cuando existe sustituto, pero puede omitirse cuando el concepto se retira sin reemplazo, siempre con justificación.

Las referencias entre archivos usan exclusivamente IDs, nunca rutas relativas ni títulos.

### 5.4 Ejemplos

Válidos:

- `domain-fundamentos-computacion`
- `subdomain-backend-servicios`
- `discipline-observabilidad`
- `entity-idempotencia`
- `entity-api`
- `entity-iso-iec-25010-2023`
- `comparison-devops-sre`
- `source-nist-sp-800-145`

Inválidos:

- `DOM-01` — contiene mayúsculas y depende de numeración provisional;
- `concepto_idempotencia` — usa guion bajo y namespace no adoptado;
- `entity-computación` — contiene acento;
- `entity--api` — contiene doble guion;
- `dom-03/backend` — codifica jerarquía y usa barra;
- `Kubernetes-v1.35` — mayúsculas, punto y versión efímera;
- `entity-cloud-computing-actual` — usa un calificador temporal inestable.

## 6. Campos comunes

Convenciones de tipos lógicos: `text` es texto breve; `rich-text` es Markdown semántico sin HTML de presentación; `id` es referencia conforme a la sección 5; `enum` usa vocabulario cerrado; `date` usa `YYYY-MM-DD`; `boolean` es verdadero o falso; `object[]` es una lista de objetos tipados. `R` significa obligatorio, `C` condicional y `O` opcional.

| Campo | Propósito y clase | Tipo / presencia | Aplicación, valor predeterminado y validación | Ejemplo |
|---|---|---|---|---|
| `id` | Identidad; metadato | `id`, R | Todas; único global, inmutable y válido | `entity-idempotencia` |
| `title` | Título editorial en español; educativo | `text`, R | Todas; no vacío, legible y no necesariamente único | `Idempotencia` |
| `canonicalName` | Denominación normalizada; educativo | `text`, R | Taxonomía y entidades; singular cuando corresponda | `idempotencia` |
| `englishName` | Nombre inglés para búsqueda; educativo | `text`, O | Cuando sea diferente o predominante; no sustituye alias | `idempotency` |
| `aliases` | Variantes de nombre; educativo/metadato | `object[]`, O | Texto único normalizado, idioma y clase; sin colisiones incompatibles | `{ value: API, kind: acronym, language: en }` |
| `legacyIds` | Resolución de migraciones; metadato | `id[]`, O | Solo migraciones; cada ID histórico único y no reutilizable | `[entity-old-name]` |
| `type` | Discriminador principal; metadato | `enum`, R | Entidades y estructuras; vocabulario aprobado | `concept` |
| `subtype` | Distinción subordinada; metadato | `enum`, C | Exigido cuando el tipo lo requiera; compatible con `type` | `antipattern` |
| `summary` | Reconocimiento rápido; educativo | `text`, R | Publicables; una síntesis autónoma sin formato visual | `Propiedad que permite repetir...` |
| `definition` | Significado y frontera; educativo | `rich-text`, R | Entidades y taxonomía; no circular ni promocional | `Una operación es idempotente...` |
| `problemSolved` | Problema atendido; educativo | `rich-text`, O/C | C para soluciones e implementaciones; O para otros | `Evita efectos acumulados...` |
| `purpose` | Razón de existir; educativo | `rich-text`, R | Todas salvo fuente; distinto de definición | `Permitir reintentos seguros.` |
| `primaryDomain` | Hogar principal; referencia | `id`, C | R para entidades salvo excepción justificada; debe apuntar a dominio | `domain-integracion-sistemas-empresariales` |
| `subdomains` | Ubicación específica; referencia | `id[]`, O | Cada subdominio debe pertenecer a `primaryDomain` | `[subdomain-apis-interoperabilidad]` |
| `secondaryDomains` | Aplicaciones sustantivas; referencia | `id[]`, O | Dominios únicos, distintos al principal y justificados | `[domain-ingenieria-software]` |
| `disciplines` | Clasificación transversal; referencia | `id[]`, O | IDs de disciplina existentes, sin duplicados | `[discipline-confiabilidad]` |
| `prerequisites` | Conocimientos previos; referencia | `id[]`, O | Entidades y rutas; sin autorreferencia; semántica final reservada | `[entity-http]` |
| `related` | Vínculos generales; referencia | `id[]`, O | Temporal hasta reglas finales; no debe sustituir relaciones específicas | `[entity-reintento]` |
| `confusedWith` | Posibles confusiones; referencia | `id[]`, O | IDs existentes, sin autorreferencia; requiere explicación editorial posterior | `[entity-determinismo]` |
| `usedByRoles` | Roles consumidores; referencia | `id[]`, O | Solo IDs de tipo `role` | `[entity-role-backend-developer]` |
| `responsibilities` | Obligaciones asociadas; educativo/referencia | `object[]`, O | Personas; cada objeto tiene `statement` y referencias opcionales | `{ statement: Revisar cambios }` |
| `competencies` | Capacidades relacionadas; referencia | `id[]`, O | Roles y puestos; solo entidades `competency` | `[entity-competency-code-review]` |
| `examples` | Casos aclaratorios; educativo | `object[]`, O | Entidades; cada ejemplo tiene título, explicación y referencias opcionales | `{ title: Reintento HTTP, ... }` |
| `advantages` | Beneficios condicionados; educativo | `text[]`, O | Soluciones e implementaciones; no lenguaje comercial absoluto | `[Reduce efectos duplicados.]` |
| `limitations` | Límites y compromisos; educativo | `text[]`, O | Soluciones e implementaciones; no se omiten por promoción | `[No garantiza atomicidad.]` |
| `contextNotes` | Variaciones de contexto; educativo | `object[]`, O | Polisemia, región, comunidad o uso; etiqueta controlada | `{ context: APIs, note: ... }` |
| `contextualTypes` | Tipos secundarios por contexto; metadato educativo | `object[]`, O | Implementaciones; cada tipo debe ser válido y distinto al principal | `{ type: platform, context: ... }` |
| `brand` | Identidad comercial; metadato | `object`, O | Herramienta/plataforma/servicio/producto; nombre y propietario opcional | `{ name: GitHub }` |
| `sources` | Evidencia usada; referencia | `id[]`, R/C | R para `in-review` o superior; solo IDs de fuente disponibles | `[source-rfc-9110]` |
| `relations` | Contenedor relacional; referencia | `object[]`, O | `targetId`, clave provisional/controlada y nota opcional | `{ relationType: implements, targetId: entity-http }` |
| `priority` | Relevancia educativa; metadato | `enum`, R | Predeterminado `important`; escala de sección 17 | `essential` |
| `knowledgeLevel` | Profundidad prevista; metadato | `enum`, R | Predeterminado `contextual-understanding`; no mide dificultad | `contextual-understanding` |
| `stability` | Velocidad de cambio; metadato | `enum`, R | Según sección 15; determina necesidad, no calendario, de revisión | `stable-foundation` |
| `editorialStatus` | Estado de flujo; metadato | `enum`, R | Predeterminado `planned`; sección 16 | `in-review` |
| `owner` | Responsable editorial; metadato | `text/id`, C | R desde `draft`; persona, equipo o rol identificable | `editorial-team` |
| `decisionRefs` | Trazabilidad de decisiones; referencia | `text/id[]`, O | Solo referencias existentes, sin copiar la decisión | `[decision-2026-07-20-taxonomy]` |
| `batch` | Lote de producción; metadato | `text`, O/C | R para contenido producido por lote; formato lo definirá el contrato operativo | `batch-001` |
| `createdAt` | Creación; metadato | `date`, R | Fecha válida, no futura respecto al commit | `2026-07-20` |
| `reviewedAt` | Última revisión; metadato | `date`, C | R para `approved`; no anterior a `createdAt` | `2026-07-20` |
| `reviewDueAt` | Próxima revisión; metadato | `date`, O/C | Requerido cuando vigencia o estabilidad lo justifiquen; posterior a `reviewedAt` | `2027-01-20` |
| `validFrom` / `validUntil` | Vigencia conocida; metadato | `date`, O | Solo hechos versionados o temporales; orden cronológico válido | `2023-11-01` |
| `verificationStatus` | Verificación de vigencia; metadato | `enum`, R | `verified`, `pending` o `uncertain`; predeterminado `pending` antes de aprobación | `verified` |
| `reviewNotes` | Observaciones internas; metadato | `text[]`, O | No contiene texto de presentación ni sustituye historial | `[Confirmar versión vigente.]` |
| `deprecated` | Marca de retiro; metadato | `boolean`, R | Predeterminado `false`; coherente con estado | `false` |
| `deprecatedAt` | Fecha de retiro; metadato | `date`, C | R si `deprecated: true` | `2028-04-01` |
| `deprecationReason` | Motivo; metadato | `text`, C | R si está deprecado; concreto y no visual | `Consolidado con...` |
| `replacedBy` | Sustituto; referencia | `id[]`, O/C | R si existe sustitución; no apunta a sí mismo | `[entity-new-concept]` |
| `contractVersion` | Compatibilidad del modelo; metadato | `text`, R | Versión mayor/menor válida; predeterminado vigente | `1.0` |

`purpose` se conserva como campo común; `problemSolved`, `advantages` y `limitations` son progresivos. `related` es una comodidad transitoria y no reemplaza al futuro catálogo. No se introduce ningún campo de presentación.

## 7. Modelo de dominio

Contrato lógico:

- núcleo común con `type: domain`;
- `canonicalName`, `englishName` o alias inglés, `definition` y `purpose`;
- `includedScope[]` y `excludedScope[]` como declaraciones verificables;
- `subdomains[]` como referencias a subdominios cuyo `parentDomain` coincide;
- `relatedDisciplines[]` y `neighborDomains[]` como referencias;
- `overlaps[]` como objetos con `targetId`, naturaleza y criterio de frontera;
- `membershipCriteria[]`;
- fuentes y gobierno editorial.

Ejemplo resumido: `domain-redes-telecomunicaciones` define conectividad y comunicación, incluye protocolos, Internet y operación de redes, excluye la administración general de servidores, referencia sus subdominios y explicita su solapamiento con ciberseguridad e infraestructura. El ejemplo completo está en la sección 19.1. Este contrato no repite las descripciones de los doce dominios aprobados.

## 8. Modelo de subdominio

Un subdominio usa `type: subdomain` y exige `parentDomain`, que apunta a exactamente un dominio. No puede pertenecer directamente a varios dominios. Sus aplicaciones externas se representan con `relatedDomains` o relaciones, sin pertenencia múltiple.

Campos obligatorios adicionales: `parentDomain`, `definition`, `purpose`, `includedScope`, `excludedScope`, `membershipCriteria`, `promotionCriteria`, `editorialStatus` y fuentes al alcanzar revisión.

- **Promoción:** procede cuando demuestra propósito autónomo, amplitud comparable y cobertura que no cabe razonablemente en su dominio actual.
- **División:** procede cuando mezcla propósitos incompatibles o produce criterios de pertenencia inestables.
- **Consolidación:** procede ante duplicación sostenida con otro subdominio.
- **Deprecación:** conserva ID, alias y migración; nunca desaparece silenciosamente.

Ejemplo completo:

```yaml
id: subdomain-backend-servicios
type: subdomain
title: Backend y servicios
canonicalName: backend y servicios
englishName: Backend and Services
summary: Construcción de lógica y capacidades ejecutadas fuera del cliente.
definition: Partición de desarrollo de software centrada en servicios, reglas y procesamiento del lado servidor.
purpose: Ubicar prácticas y tecnologías de implementación que exponen capacidades a clientes y sistemas.
parentDomain: domain-desarrollo-software
includedScope: [servicios de aplicación, APIs implementadas, procesamiento del lado servidor]
excludedScope: [arquitectura de soluciones como disciplina, operación de infraestructura]
relatedDomains: [domain-integracion-sistemas-empresariales, domain-infraestructura-operacion]
membershipCriteria: [La intención principal es implementar capacidades del lado servidor.]
promotionCriteria: [Solo evaluar si obtiene propósito y cobertura autónomos comparables a un dominio.]
sources: [source-it-study-taxonomy]
priority: essential
knowledgeLevel: contextual-understanding
stability: slow-evolution
editorialStatus: draft
owner: editorial-team
createdAt: 2026-07-20
verificationStatus: pending
deprecated: false
contractVersion: "1.0"
```

## 9. Modelo de disciplina transversal

Una disciplina usa `type: discipline`, `homeDomain` obligatorio cuando sea razonable, `applicationDomains[]`, `crossCuttingScope[]` y `nonDuplicationRule`. A diferencia de un dominio no encabeza la jerarquía; a diferencia de un subdominio no expresa pertenencia exclusiva. Existe una sola entrada y cada aplicación se registra como relación o nota contextual.

Ejemplo completo:

```yaml
id: discipline-observabilidad
type: discipline
title: Observabilidad
canonicalName: observabilidad
englishName: Observability
summary: Capacidad de comprender el estado interno de un sistema mediante evidencia observable.
definition: Disciplina que combina señales, instrumentación y análisis para razonar sobre el comportamiento de sistemas.
purpose: Favorecer diagnóstico, operación y aprendizaje sobre sistemas en ejecución.
homeDomain: domain-infraestructura-operacion
applicationDomains: [domain-ingenieria-software, domain-redes-telecomunicaciones, domain-datos-analitica, domain-inteligencia-artificial]
crossCuttingScope: [software, redes, datos, IA y servicios]
nonDuplicationRule: Las aplicaciones por dominio referencian esta entrada y no repiten su definición.
sources: [source-it-study-taxonomy]
priority: important
knowledgeLevel: contextual-understanding
stability: slow-evolution
editorialStatus: draft
owner: editorial-team
createdAt: 2026-07-20
verificationStatus: pending
deprecated: false
contractVersion: "1.0"
```

## 10. Modelos por familia de entidades

Todas las familias heredan el núcleo de la sección 6. El discriminador es `type`; `subtype` solo refina un tipo aprobado. Se elige siempre el tipo más específico que describa la naturaleza principal, no la palabra usada por marketing.

### 10.1 Personas y capacidades

Tipos: `role`, `position`, `competency` y, excepcionalmente, `responsibility`.

| Tipo | Campos especializados | Restricciones y ejemplo |
|---|---|---|
| `role` | `scope`, `responsibilities[]`, `competencies[]`, `collaboratesWith[]` | Función contextual, no contrato. Ej.: revisor de código. |
| `position` | `typicalRoles[]`, `responsibilities[]`, `competencies[]`, `seniorityContext`, `organizationNotes[]` | Título organizacional; no universalizar niveles. Ej.: desarrollador backend senior. |
| `competency` | `outcomes[]`, `knowledgeRefs[]`, `skillContext`, `evidenceExamples[]` | Capacidad demostrable, no tema ni obligación. |
| `responsibility` | `accountableOutcome`, `applicableRoles[]`, `scope` | Solo ficha si es transversal y reutilizable; de otro modo objeto dentro de rol o puesto. |

Caso ambiguo: “Product Owner” puede ser rol definido por un marco y título de puesto en una empresa. Se crea la entrada de rol para el significado del marco; el puesto se separa únicamente si aporta contexto organizacional autónomo.

### 10.2 Ideas y orientaciones

Tipos: `concept`, `principle`, `paradigm`, `conceptual-orientation` y `model`.

- Compartidos: `definition`, `purpose`, `contextNotes`, `examples`, `confusedWith`.
- `principle`: `guidance`, `decisionImplications[]`.
- `paradigm`: `worldview`, `characteristicApproaches[]`.
- `conceptual-orientation`: `values[]`, `assumptions[]`; incluye filosofía.
- `model`: `represents`, `purpose`, `scope`, `elements[]`, `limitations[]`.

“Lean” como conjunto amplio de valores se clasifica `conceptual-orientation`; una técnica derivada no comparte tipo. “Modelo OSI” es `model`, aunque esté vinculado con estándares.

### 10.3 Formas de trabajo

Tipos: `methodology`, `work-framework`, `process`, `practice` y `technique`.

| Tipo | Especialización | Criterio |
|---|---|---|
| `methodology` | `rationale`, `methods[]`, `governance` | Sistema coherente que explica cómo y por qué conducir una clase de trabajo. |
| `work-framework` | `roles[]`, `events[]`, `artifacts[]`, `rules[]` | Estructura adaptable; nunca confundir con framework de software. |
| `process` | `inputs[]`, `activities[]`, `outputs[]`, `controls[]` | Secuencia o sistema de actividades con límites identificables. |
| `practice` | `activity`, `expectedOutcome`, `applicableContexts[]` | Forma recurrente insertable en distintos procesos. |
| `technique` | `task`, `procedureSummary`, `conditions[]` | Procedimiento específico para una tarea; no tutorial completo. |

Cuando una comunidad llame “metodología” a Scrum, prevalece su naturaleza: `work-framework`. Una secuencia editorial de pasos no se convierte automáticamente en proceso.

### 10.4 Soluciones y estructuras

Tipos: `pattern` y `architectural-style`.

- `pattern`: `problem`, `context`, `forces[]`, `solution`, `consequences[]`, `knownUses[]`; `subtype` es `pattern` o `antipattern` y, para antipatrón, exige `adverseConsequences[]` y `betterAlternatives[]`.
- `architectural-style`: `scope`, `constraints[]`, `elementKinds[]`, `interactionRules[]`, `qualityImplications[]`.

Un patrón resuelve un problema recurrente dentro de contexto; un estilo organiza el sistema a alto nivel. “God object” es `pattern/antipattern`, no principio ni estilo.

### 10.5 Especificaciones e implementaciones

Tipos: `protocol`, `standard`, `technology`, `tool`, `platform`, `service` y `product`; `brand` es metadato.

| Tipo | Campos especializados | Restricción |
|---|---|---|
| `protocol` | `participants[]`, `interactionRules[]`, `messagesOrUnits[]`, `governanceRefs[]` | Reglas de interacción; puede estar estandarizado. |
| `standard` | `issuer`, `designation`, `version`, `publicationDate`, `status`, `supersedes[]` | Debe identificar organismo/comunidad y versión cuando sea relevante. |
| `technology` | `capabilities[]`, `mechanisms[]`, `applicationContexts[]` | Categoría general solo si ninguna más precisa aplica. |
| `tool` | `capabilities[]`, `users[]`, `deliveryForm`, `brand` | Implementación para ejecutar tareas. |
| `platform` | `capabilities[]`, `consumers[]`, `extensionPoints[]`, `deliveryModels[]`, `brand` | Debe ofrecer capacidades integradas a consumidores. |
| `service` | `capability`, `consumers[]`, `interfaces[]`, `serviceModel`, `provider`, `brand` | Capacidad suministrada; no equivale automáticamente a producto. |
| `product` | `targetUsers[]`, `valueProposition`, `components[]`, `lifecycleOwner`, `brand` | Oferta gestionada a lo largo de un ciclo de vida. |

Una misma implementación declara un tipo principal y `contextualTypes`; no se crean tres fichas para mejorar filtros. Los datos de proveedor y marca deben ser neutrales y no promocionales.

### 10.6 Resultados y medición

Tipos: `artifact`, `metric` e `indicator`; el objetivo es un objeto contextual.

- `artifact`: `producedBy[]`, `consumedBy[]`, `informationContained[]`, `lifecycle`.
- `metric`: `propertyMeasured`, `calculation`, `unit`, `interpretationLimits[]`.
- `indicator`: `metricRefs[]`, `decisionContext`, `interpretation`, `thresholdContext[]`.
- `objective`: objeto con `statement`, `criterion`, `target`, `timeframe` y referencias; aparece dentro de rutas, escenarios, indicadores o producto.

Una latencia p95 es métrica; el semáforo usado para decidir si se incumple un SLO es indicador. Un ADR es artefacto aunque también sea publicación interna.

### 10.7 Acreditación y referencia

- `certification`: `issuer`, `credentialFor`, `scope`, `assessmentMethod`, `validity`, `renewal`, `version`.
- `reference-publication`: se materializa como `type: artifact`, `subtype: reference-publication`, con `publisher`, `edition`, `maintainedBy`, `referenceScope` y `relatedCertifications[]`.

Una guía o cuerpo de conocimiento no acredita; una certificación sí representa una credencial emitida bajo criterios. La marca del emisor no reemplaza la identificación institucional.

## 11. Modelo de comparación

Una comparación es `type: comparison` y referencia dos o más entradas cuando comparten una pregunta de decisión o confusión real.

Campos: `id`, `title`, `comparedEntries[]`, `comparisonReason`, `dimensions[]`, `similarities[]`, `differences[]`, `selectionGuidance[]`, `commonMistakes[]`, `summary`, `sources`, `editorialStatus` y gobierno. Cada dimensión identifica `key`, `label`, `criterion` y valores por `entryId`. No reproduce `definition`; puede incluir síntesis exclusivamente comparativa.

## 12. Modelo de escenario

Un escenario es una narrativa educativa, no un procedimiento operativo obligatorio. Usa `type: scenario` y contiene:

- `objective`, `context`, `participants[]`, `domains[]` y `initialSituation`;
- `events[]` ordenados con descripción y referencias;
- `decisions[]` con pregunta, opciones ilustrativas, decisión narrativa y consecuencias;
- `concepts[]`, `artifactsProduced[]`, `risks[]`, `outcome` y `relatedContent[]`;
- `complexity`: `introductory`, `intermediate` o `advanced-contextual`;
- fuentes cuando las afirmaciones externas lo requieran y metadatos editoriales.

La secuencia describe un caso plausible; no debe presentarse como política, runbook, prescripción normativa ni sustituto de documentación operativa.

## 13. Modelo de ruta de aprendizaje

Una ruta usa `type: learning-path` y contiene `audience`, `objective`, `startingLevel`, `expectedOutcomes[]`, `entries[]`, `prerequisites[]`, `optionalEntries[]`, `checkpoints[]`, `completionCriteria[]`, `domains[]`, `version` y estado.

`entries[]` registra orden, `entryId`, propósito dentro de la ruta y condición opcional. Los puntos de verificación evalúan reconocimiento o comprensión contextual, no obligan a implementar laboratorios. La ruta referencia fichas y no copia sus definiciones. Un cambio de secuencia incrementa la versión editorial de la ruta, no los IDs de sus entradas.

## 14. Modelo de fuentes

Una fuente normalizada usa `type: source` y los siguientes campos:

| Campo | Regla |
|---|---|
| `id` | Namespace `source`; único y estable. |
| `authorOrOrganization` | Al menos uno; nombre verificable. |
| `title` | Título oficial. |
| `sourceType` | Uno de los tipos controlados indicados abajo. |
| `url` / `reference` | Al menos uno; URL canónica cuando exista. |
| `publicationDate` | Fecha conocida; se omite si no puede verificarse. |
| `accessedAt` | Obligatoria para recursos web consultados. |
| `version` | Obligatoria para estándares o documentos versionados cuando aplique. |
| `sectionsUsed` | Secciones, páginas o apartados realmente utilizados. |
| `language` | Código BCP 47, inicialmente `es` o `en`. |
| `authorityLevel` | `authoritative`, `strong`, `supporting` o `contextual`; la asignación detallada queda reservada. |
| `notes` | Alcance o limitaciones, no evaluación promocional. |
| `availabilityStatus` | `available`, `partially-available`, `archived`, `unavailable` o `unchecked`. |

`sourceType` admite: `primary-source`, `institutional-source`, `standard`, `official-documentation`, `academic-publication`, `secondary-source`, `vendor-source` y `historical-source`. Estas clases pueden solaparse en la realidad; se elige la naturaleza principal y se registran notas. La política de selección, suficiencia, citas y preferencia corresponde a `work/SOURCE-POLICY.md`.

## 15. Vigencia y estabilidad

| Valor | Significado | Metadatos esperados |
|---|---|---|
| `stable-foundation` | Fundamento con cambios conceptuales infrecuentes. | Fuente, revisión y verificación. |
| `slow-evolution` | Conocimiento que evoluciona gradualmente. | Revisión y decisión de próxima revisión si hay señales de cambio. |
| `versioned-standard` | Especificación gobernada por versión. | Emisor, versión, vigencia, reemplazos y revisión. |
| `changing-technology` | Tecnología con capacidades o terminología cambiantes. | Fecha de revisión, verificación y revisión prevista. |
| `changing-tool-product` | Herramienta, servicio o producto de cambio frecuente. | Proveedor/marca, revisión, vigencia y revisión prevista. |
| `emerging` | Información con adopción o terminología todavía en consolidación. | Evidencia, `verificationStatus`, notas de incertidumbre y revisión prevista. |
| `deprecated` | Contenido retirado o superado. | Fecha, motivo, sustitución si existe y referencias históricas. |

`reviewedAt` responde cuándo se revisó; `reviewDueAt`, cuándo conviene volver a revisar; `validFrom` y `validUntil`, la vigencia conocida; `verificationStatus`, si fue verificado; `deprecated`, `deprecatedAt` y `replacedBy`, su retiro. Este documento no fija frecuencias ni calendarios generales.

## 16. Estados editoriales

Los valores finales son `planned`, `draft`, `in-review`, `approved`, `needs-update`, `deprecated` y `rejected`.

| Estado | Significado y asignación | Entrada / salida | Publicable y validaciones mínimas |
|---|---|---|---|
| `planned` | Candidato autorizado por responsable de planificación. | Entra por inventario o lote; sale al iniciar autoría o descartar. | No; ID reservado, tipo y propósito preliminar. |
| `draft` | Contenido en elaboración; lo asigna autor o responsable. | Entra con propietario; sale al completar contrato mínimo. | No; ID, clasificación, núcleo y ausencia de referencias rotas. |
| `in-review` | Listo para revisión conceptual/editorial; lo asigna autor o revisor. | Entra con campos aplicables y fuentes; sale por aprobación o corrección. | No; contrato completo, fuentes, referencias y validaciones estructurales. |
| `approved` | Aceptado por responsable autorizado. | Entra tras revisión; sale si requiere actualización o retiro. | Sí; cero errores, advertencias resueltas o justificadas, revisión registrada y vigencia verificada. |
| `needs-update` | Publicado o aprobado con revisión necesaria; lo asigna revisor, responsable o proceso de vigencia. | Entra por cambio o verificación fallida; sale tras nueva revisión o deprecación. | Condicional según calidad; debe mostrarse como estado semántico, decisión final en calidad/publicación. |
| `deprecated` | Retirado pero conservado por trazabilidad; lo asigna responsable autorizado. | Entra con motivo y fecha; solo sale mediante decisión excepcional registrada. | No como contenido vigente; referencias históricas válidas y sustituto si existe. |
| `rejected` | Propuesta no aceptada; lo asigna revisor autorizado. | Entra con motivo; puede volver a `planned` solo con nueva evidencia y decisión. | No; conserva ID si fue publicado o referenciado, y motivo obligatorio. |

Las identidades concretas autorizadas y el flujo de aprobación operativo se detallarán en `work/CONTENT-PRODUCTION-CONTRACT.md` y `work/REVIEW-CHECKLIST.md`; no cambian estos estados.

## 17. Prioridad y profundidad

### 17.1 Prioridad

- `essential`: necesario para construir el mapa mental básico o comprender múltiples entradas;
- `important`: aporta comprensión frecuente o cubre una relación significativa;
- `specialized`: útil para una disciplina o contexto más acotado;
- `emerging`: candidato relevante cuya consolidación todavía debe vigilarse.

Se asigna por valor educativo, dependencias, cobertura transversal y audiencia. No representa popularidad comercial, orden visual, urgencia de marketing ni calidad.

### 17.2 Profundidad

- `recognition`: permite identificar qué es, tipo, dominio y problema general;
- `contextual-understanding`: añade propósito, uso, participantes, relaciones, diferencias, ventajas y límites aplicables;
- `future-expanded-reference`: reserva una ampliación de referencia futura sin convertir la ficha base en tutorial.

Se asigna como profundidad editorial objetivo. No representa dificultad, seniority, madurez del término, cantidad de texto ni dominio práctico del usuario. El nivel predeterminado de las fichas principales es `contextual-understanding`.

## 18. Formato físico recomendado

| Formato | Fortalezas | Límites |
|---|---|---|
| Markdown con frontmatter YAML | Texto extenso legible, revisión humana clara, buen diff, compatible con sitios estáticos y generación asistida. | Requiere esquema para validar frontmatter y convenciones para campos complejos. |
| YAML puro | Muy apto para datos y referencias; legible en registros breves. | Texto educativo extenso, caracteres especiales y diffs pueden ser menos cómodos. |
| JSON | Validación y herramientas excelentes; sintaxis inequívoca. | Menor comodidad editorial, comentarios inexistentes y texto largo poco legible. |

**Decisión:** Markdown UTF-8 con frontmatter YAML será el formato principal de dominios, disciplinas, entidades y estructuras editoriales. El frontmatter contendrá identificación, clasificación, referencias y gobierno; el cuerpo contendrá secciones educativas semánticas conforme al mismo contrato. YAML puro podrá usarse posteriormente para inventarios y vocabularios controlados; JSON será formato generado o de intercambio, no fuente editorial principal.

Esta combinación favorece autoría, validación, control de cambios, texto extenso, sitio estático, separación del diseño y migración futura. Los saltos de línea serán LF y los archivos terminarán con salto de línea. No se admite HTML de presentación en frontmatter ni cuerpo.

Estructura general propuesta, no creada por este documento:

```text
content/
  taxonomy/domains/
  taxonomy/subdomains/
  taxonomy/disciplines/
  entities/<family>/
  editorial/comparisons/
  editorial/scenarios/
  editorial/learning-paths/
  editorial/areas/
  sources/
```

La regla general es un archivo por entrada canónica. Las excepciones son vocabularios pequeños de gobierno, índices generados, tablas de migración y declaraciones estructuradas sin identidad autónoma. La carpeta no concede pertenencia ni participa en el ID.

## 19. Ejemplos lógicos completos

Estos ejemplos demuestran el contrato; no son contenido aprobado, no crean inventario y no sustituyen los futuros archivos de `examples/`.

### 19.1 Dominio

```yaml
id: domain-redes-telecomunicaciones
type: domain
title: Redes y telecomunicaciones
canonicalName: redes y telecomunicaciones
englishName: Networking and Telecommunications
aliases: [{ value: networking, kind: common, language: en }]
summary: Campo dedicado a la comunicación e interconexión de dispositivos y sistemas.
definition: Dominio que estudia la transmisión, interconexión y control de comunicaciones entre dispositivos, sistemas y redes.
purpose: Explicar conectividad, direccionamiento, protocolos, medios y servicios de comunicación.
includedScope: [fundamentos de redes, Internet, redes inalámbricas, routing y switching]
excludedScope: [administración general de servidores, seguridad organizacional completa]
subdomains: [subdomain-fundamentos-protocolos-red, subdomain-internet-servicios-red]
relatedDisciplines: [discipline-seguridad, discipline-observabilidad]
neighborDomains: [domain-infraestructura-operacion, domain-ciberseguridad-riesgo]
overlaps: [{ targetId: domain-infraestructura-operacion, boundary: La conectividad tiene hogar aquí; su provisión operativa puede corresponder a infraestructura. }]
membershipCriteria: [El propósito central del elemento es transmitir, interconectar o controlar comunicaciones.]
sources: [source-it-study-taxonomy]
priority: essential
knowledgeLevel: contextual-understanding
stability: slow-evolution
editorialStatus: draft
owner: editorial-team
decisionRefs: [decision-taxonomy-2026-07-20]
createdAt: 2026-07-20
verificationStatus: pending
deprecated: false
contractVersion: "1.0"
```

### 19.2 Concepto

```yaml
id: entity-idempotencia
type: concept
title: Idempotencia
canonicalName: idempotencia
englishName: Idempotency
summary: Propiedad por la cual repetir una operación produce el mismo efecto observable que ejecutarla una vez.
definition: Propiedad cuyo significado exacto depende del contexto matemático o computacional y que, en sistemas, permite razonar sobre repeticiones sin efectos acumulativos no deseados.
problemSolved: Reduce la incertidumbre ante reintentos y mensajes duplicados.
purpose: Permitir diseñar interacciones repetibles con efectos controlados.
primaryDomain: domain-integracion-sistemas-empresariales
subdomains: [subdomain-apis-interoperabilidad]
secondaryDomains: [domain-ingenieria-software, domain-datos-analitica]
prerequisites: [entity-operacion, entity-efecto-observable]
related: [entity-reintento, entity-deduplicacion]
confusedWith: [entity-inmutabilidad]
usedByRoles: [entity-role-backend-developer]
examples: [{ title: Reintento de actualización, explanation: Repetir la misma solicitud conserva el estado final esperado. }]
limitations: [No implica atomicidad ni ausencia de fallos.]
sources: [source-rfc-9110]
priority: essential
knowledgeLevel: contextual-understanding
stability: stable-foundation
editorialStatus: draft
owner: editorial-team
batch: batch-example
createdAt: 2026-07-20
verificationStatus: pending
deprecated: false
contractVersion: "1.0"
```

### 19.3 Rol

```yaml
id: entity-role-code-reviewer
type: role
title: Revisor de código
canonicalName: revisor de código
englishName: Code Reviewer
summary: Rol contextual que evalúa cambios de código antes de su integración.
definition: Función asumida temporal o recurrentemente para revisar corrección, mantenibilidad, riesgos y alineación de un cambio con los acuerdos del equipo.
purpose: Aportar una verificación independiente y conocimiento compartido antes de integrar cambios.
primaryDomain: domain-ingenieria-software
scope: Cambios de software sometidos a revisión.
responsibilities:
  - statement: Evaluar el cambio contra requisitos y acuerdos técnicos.
  - statement: Comunicar hallazgos de forma accionable.
competencies: [entity-competency-code-review, entity-competency-technical-communication]
collaboratesWith: [entity-role-implementer]
sources: [source-it-study-taxonomy]
priority: important
knowledgeLevel: contextual-understanding
stability: slow-evolution
editorialStatus: draft
owner: editorial-team
createdAt: 2026-07-20
verificationStatus: pending
deprecated: false
contractVersion: "1.0"
```

### 19.4 Plataforma

```yaml
id: entity-kubernetes
type: platform
title: Kubernetes
canonicalName: Kubernetes
aliases: [{ value: K8s, kind: abbreviation, language: en }]
summary: Plataforma extensible para automatizar el despliegue y operación de aplicaciones en contenedores.
definition: Implementación que coordina recursos y cargas en contenedores mediante capacidades declarativas y extensibles.
problemSolved: Coordina despliegue, escalado y recuperación de cargas distribuidas en múltiples nodos.
purpose: Ofrecer capacidades operativas comunes a equipos y sistemas consumidores.
primaryDomain: domain-infraestructura-operacion
subdomains: [subdomain-contenedores-orquestacion]
secondaryDomains: [domain-ingenieria-software]
capabilities: [orquestación de cargas, configuración declarativa, extensibilidad]
consumers: [equipos de plataforma, equipos de desarrollo, operadores]
contextualTypes: [{ type: tool, context: Puede utilizarse como herramienta operativa dentro de una plataforma mayor. }]
brand: { name: Kubernetes, owner: Cloud Native Computing Foundation }
advantages: [Estandariza capacidades operativas sobre infraestructura diversa.]
limitations: [Introduce complejidad operativa y no sustituye por sí sola prácticas de confiabilidad.]
sources: [source-kubernetes-official-overview]
priority: important
knowledgeLevel: contextual-understanding
stability: changing-tool-product
editorialStatus: draft
owner: editorial-team
createdAt: 2026-07-20
reviewDueAt: 2027-01-20
verificationStatus: pending
deprecated: false
contractVersion: "1.0"
```

### 19.5 Comparación

```yaml
id: comparison-devops-sre-platform-engineering
type: comparison
title: DevOps, SRE y Platform Engineering
comparedEntries: [entity-devops, entity-sre, entity-platform-engineering]
comparisonReason: Se utilizan como equivalentes aunque difieren en orientación, objeto y mecanismos.
dimensions:
  - key: primary-focus
    label: Enfoque principal
    criterion: Pregunta central que organiza cada entrada.
    values:
      entity-devops: Colaboración y flujo de entrega y operación.
      entity-sre: Confiabilidad operada mediante ingeniería.
      entity-platform-engineering: Capacidades internas consumibles por equipos.
similarities: [Buscan mejorar la entrega y operación de sistemas mediante prácticas sociotécnicas.]
differences: [No constituyen etapas obligatorias ni puestos universalmente equivalentes.]
selectionGuidance:
  - entryId: entity-sre
    when: El problema principal es equilibrar confiabilidad y velocidad mediante objetivos medibles.
commonMistakes: [Tratar DevOps como una herramienta o equipo aislado.]
summary: La comparación distingue orientación cultural, disciplina de confiabilidad y construcción de plataformas internas.
sources: [source-google-sre, source-cncf-platforms]
priority: important
knowledgeLevel: contextual-understanding
stability: slow-evolution
editorialStatus: draft
owner: editorial-team
createdAt: 2026-07-20
verificationStatus: pending
deprecated: false
contractVersion: "1.0"
```

### 19.6 Escenario

```yaml
id: scenario-incident-api-production
type: scenario
title: Incidente en una API de producción
objective: Comprender cómo colaboran desarrollo, operación, seguridad y producto durante un incidente.
context: Un servicio presenta errores elevados después de un despliegue.
participants: [entity-role-incident-commander, entity-role-backend-developer, entity-role-product-manager]
domains: [domain-desarrollo-software, domain-infraestructura-operacion, domain-ciberseguridad-riesgo, domain-producto-experiencia]
initialSituation: La tasa de error supera el nivel esperado y afecta una operación de usuario.
events:
  - order: 1
    description: Una alerta inicia la investigación.
    references: [entity-alert, discipline-observabilidad]
  - order: 2
    description: El equipo correlaciona el cambio reciente con los síntomas.
    references: [entity-deployment, entity-log]
decisions:
  - question: ¿Mitigar primero o continuar el diagnóstico?
    illustrativeOptions: [revertir el cambio, desactivar una función, mantener y observar]
    narrativeDecision: Se revierte el cambio para reducir impacto mientras continúa el análisis.
concepts: [entity-incident, entity-rollback, entity-blameless-postmortem]
artifactsProduced: [entity-artifact-incident-record, entity-artifact-postmortem]
risks: [Pérdida de datos, exposición de información, recurrencia del fallo]
outcome: El servicio se estabiliza y se registran acciones de aprendizaje.
relatedContent: [comparison-monitoring-observability]
complexity: introductory
sources: [source-google-sre]
priority: important
knowledgeLevel: contextual-understanding
stability: slow-evolution
editorialStatus: draft
owner: editorial-team
createdAt: 2026-07-20
verificationStatus: pending
deprecated: false
contractVersion: "1.0"
```

### 19.7 Ruta de aprendizaje

```yaml
id: path-redes-a-cloud
type: learning-path
title: De fundamentos de redes a cloud
audience: Personas de desarrollo que necesitan comprender infraestructura cloud en contexto.
objective: Construir reconocimiento y comprensión contextual desde conectividad hasta provisión de servicios cloud.
startingLevel: recognition
expectedOutcomes: [Explicar direccionamiento y protocolos básicos, diferenciar red e infraestructura, reconocer el modelo cloud.]
prerequisites: [entity-sistema-computo]
entries:
  - order: 1
    entryId: entity-red-computadoras
    purposeInPath: Establecer el modelo básico de interconexión.
  - order: 2
    entryId: entity-ip
    purposeInPath: Comprender direccionamiento y entrega entre redes.
  - order: 3
    entryId: entity-cloud-computing
    purposeInPath: Relacionar conectividad, recursos y modelo de provisión.
optionalEntries: [entity-dns, entity-virtualizacion]
checkpoints:
  - afterEntryId: entity-ip
    criterion: La persona puede explicar por qué dirección y nombre no son equivalentes.
completionCriteria: [Puede ubicar cloud dentro de infraestructura sin tratarlo como sinónimo de Internet.]
domains: [domain-redes-telecomunicaciones, domain-infraestructura-operacion]
version: "1.0"
sources: [source-nist-sp-800-145]
priority: essential
knowledgeLevel: contextual-understanding
stability: slow-evolution
editorialStatus: draft
owner: editorial-team
createdAt: 2026-07-20
verificationStatus: pending
deprecated: false
contractVersion: "1.0"
```

## 20. Validaciones conceptuales

### 20.1 Errores

- ID inválido, duplicado, reutilizado o namespace incompatible.
- Referencia inexistente, autorreferencia prohibida o referencia a tipo incompatible.
- `type` o `subtype` fuera de vocabulario o combinación inválida.
- dominio principal inexistente; subdominio ajeno al dominio principal; dominio secundario duplicado.
- disciplina inexistente o usada como tercer nivel jerárquico.
- alias que colisiona con una entrada de significado incompatible sin calificación.
- estado, prioridad, profundidad, estabilidad, fuente o verificación fuera de vocabulario.
- ausencia de campo obligatorio según estado, tipo o familia.
- fecha inválida o incoherente; aprobación sin revisión; próxima revisión anterior a la última.
- deprecación sin fecha y motivo, o sin sustitución cuando se declara que existe.
- propiedades visuales, HTML de presentación, clases CSS o rutas visuales.
- relaciones almacenadas como títulos o texto libre cuando deben ser IDs.
- comparación, escenario o ruta que copie definiciones o referencie entradas inexistentes.
- subdominio con más de un dominio padre.
- fuente web sin URL/referencia o consulta; estándar versionado sin emisor o versión aplicable.

### 20.2 Advertencias

- título, nombre o alias muy similar a otra entrada;
- `related` usado cuando parece existir una relación más específica;
- entidad sin dominio principal y sin justificación;
- demasiados dominios secundarios o disciplinas sin evidencia contextual;
- tecnología general usada cuando existe un tipo más preciso;
- herramienta, plataforma, servicio o producto sin capacidades, consumidores o marca/proveedor cuando corresponda;
- contenido cambiante sin `reviewDueAt` o con verificación pendiente;
- entrada aprobada con notas de incertidumbre no resueltas;
- alias histórico sin periodo o contexto útil;
- escenario que parece prescribir un procedimiento;
- ruta con saltos de prerrequisitos o sin criterio de finalización;
- posible duplicación semántica aunque los IDs sean distintos.

### 20.3 Recomendaciones editoriales

- fortalecer la diferencia entre definición, propósito y problema resuelto;
- añadir ejemplo, limitación o término confundible cuando mejore comprensión;
- preferir referencia específica sobre vínculo general;
- justificar por qué una entrada especializada aporta valor a la audiencia;
- centrar productos cambiantes en capacidades duraderas;
- revisar claridad, neutralidad y profundidad conforme a `docs/04-editorial-guidelines.md`.

Los errores bloquean aprobación. El tratamiento de advertencias, umbrales y recomendaciones se concretará en `docs/09-quality-criteria.md` y `work/REVIEW-CHECKLIST.md`.

## 21. Compatibilidad con el diseño

No forman parte del modelo: colores, iconos específicos, tamaños, posiciones, layouts, componentes, clases CSS, HTML de presentación, tipografías, tema visual, animaciones, breakpoints ni comportamiento visual por ficha.

La presentación sí podrá usar información semántica para decidir una representación: `type`, `subtype`, dominio, estado, prioridad, profundidad, estabilidad, relaciones, secuencia de rutas, dimensiones de comparación, complejidad de escenarios y vigencia. Esa decisión pertenece a la presentación y no se persiste de vuelta como estilo de la entrada.

## 22. Migración y evolución

- **Cambio de título:** conserva ID; actualiza `title`, nombres y alias históricos cuando ayuden a búsqueda.
- **Cambio de dominio principal:** conserva ID si el significado no cambia; revisa subdominios, secundarios y todas las referencias afectadas.
- **División:** crea IDs nuevos para los significados resultantes; la entrada anterior se depreca y señala todos los sustitutos.
- **Consolidación:** elige una entrada canónica, migra referencias, conserva aliases y `legacyIds`, y depreca duplicados.
- **Alias históricos:** permanecen tipados y no se convierten en IDs nuevos.
- **Deprecación:** conserva archivo, motivo, fecha, fuentes y sustitución si existe.
- **Sustitución:** `replacedBy` siempre contiene IDs vigentes; no forma ciclos.
- **Cambio de tipo:** conserva ID solo si el significado es idéntico y el cambio corrige clasificación; exige decisión y revalidación de campos y referencias.
- **Migración de ID:** excepcional, documentada y atómica; el anterior queda reservado y resoluble.
- **Cambio incompatible del modelo:** incrementa versión mayor, publica guía de migración y periodo de compatibilidad cuando sea viable.
- **Cambio compatible:** incrementa versión menor; campos nuevos deben ser opcionales o tener valor predeterminado seguro.

`contractVersion` versiona el contrato, no el contenido educativo. Las versiones de estándares, rutas o publicaciones usan sus propios campos.

## 23. Relación con documentos posteriores

| Documento o artefacto | Condicionamiento |
|---|---|
| `docs/04-editorial-guidelines.md` | Definirá cómo redactar los campos educativos, extensión, ejemplos, lenguaje y citas sin cambiar sus tipos. |
| `docs/05-relationship-rules.md` | Convertirá el contenedor mínimo en catálogo semántico, dirigido, cardinal y verificable. |
| `docs/06-design-boundaries.md` | Hará exigibles los límites entre semántica, navegación y presentación. |
| `docs/09-quality-criteria.md` | Determinará severidades, umbrales y aceptación de validaciones y vigencia. |
| `work/CONTENT-PRODUCTION-CONTRACT.md` | Traducirá campos, estados y lotes en entregas operativas de ChatGPT Trabajo. |
| `work/REVIEW-CHECKLIST.md` | Verificará obligatoriedad condicional, fuentes, estado, neutralidad y duplicados. |
| `examples/` | Materializará ejemplos aprobados; los de este documento solo demuestran el contrato. |
| `inventories/` | Usará IDs, tipos, dominios, estados y referencias uniformes sin duplicar fichas. |
| `AGENTS.md` | Obligará a Codex a respetar contratos y a no reinterpretar decisiones editoriales. |
| Esquemas y validadores futuros | Implementarán literalmente vocabularios, dependencias condicionales y severidades aquí definidas, completadas por relaciones y calidad. |

## 24. Decisiones y pendientes

### 24.1 Decisiones adoptadas en este documento

- ID global `<namespace>-<semantic-key>`, ASCII minúsculo en `kebab-case`, inmutable y no reutilizable.
- Markdown con frontmatter YAML como fuente editorial principal; YAML para inventarios/vocabularios y JSON como derivado.
- Núcleo común progresivo y familias especializadas con discriminador `type`.
- Referencias exclusivamente por ID y contenedor relacional mínimo.
- Estados `planned`, `draft`, `in-review`, `approved`, `needs-update`, `deprecated` y `rejected`.
- Escalas controladas de prioridad, profundidad, estabilidad y verificación.
- Una sola entrada para implementaciones con varios sentidos compatibles mediante `contextualTypes`.
- Fuentes normalizadas como registros referenciables.
- Versionado del contrato independiente del contenido y migraciones trazables.

### 24.2 Decisiones heredadas de la taxonomía

- Doce dominios aprobados sin alteración.
- Jerarquía exclusiva `dominio > subdominio`.
- Disciplina transversal y área editorial opcional fuera de la jerarquía.
- Producto como tipo; marca como metadato; competencia como entidad.
- Responsabilidad principalmente estructurada; objetivo contextual.
- Antipatrón como subtipo de patrón; filosofía como orientación conceptual.
- Comparación, escenario y ruta como estructuras editoriales.
- Una entrada canónica, dominio principal razonable y secundarios justificados.

### 24.3 Reservado para `docs/04-editorial-guidelines.md`

- extensión, tono, vocabulario, ejemplos, tratamiento de acrónimos y profundidad textual;
- forma de redactar ventajas, límites, confusiones y notas contextuales;
- estilo de citas dentro del cuerpo educativo.

### 24.4 Reservado para `docs/05-relationship-rules.md`

- catálogo final, nombres, dirección, reciprocidad, cardinalidad y compatibilidad de relaciones;
- equivalencia o retiro de campos de conveniencia relacional;
- criterios de relevancia y ciclos permitidos.

### 24.5 Reservado para `docs/06-design-boundaries.md`

- contratos entre contenido y presentación, componentes consumidores y pruebas contra acoplamiento visual;
- decisiones de navegación, visualización y temas.

### 24.6 Reservado para `work/SOURCE-POLICY.md`

- selección, jerarquía, suficiencia, diversidad, actualización y forma de citar fuentes;
- tratamiento definitivo de fuentes de proveedor, históricas o no disponibles.

### 24.7 Implementable por Codex sin reinterpretación

- patrón sintáctico, unicidad, reserva y aliases de IDs;
- enums y dependencias condicionales aquí enumerados;
- tipos lógicos, fechas, referencias existentes y compatibilidad dominio-subdominio;
- ausencia de propiedades visuales;
- estructura de archivos y regla de una entrada por archivo;
- severidades conceptuales, una vez completadas por calidad y relaciones.

Codex no podrá inventar relaciones, corregir clasificación editorial, fusionar duplicados ni elegir fuentes para hacer pasar una validación.

### 24.8 Pendientes legítimos

- responsables nominales y permisos concretos de transición editorial;
- calendario definitivo por nivel de estabilidad;
- catálogo de subtipos adicionales que demuestre necesidad;
- formato y ubicación final de tablas de migración y vocabularios;
- política de publicación de `needs-update`;
- adopción futura de mapas multilingües y códigos de localización;
- cantidades, cobertura y lotes del MVP.

### 24.9 Contradicciones detectadas

No se detectaron contradicciones materiales entre los documentos de autoridad. Las listas candidatas y los IDs `DOM-01` a `DOM-12` del documento semilla y la taxonomía no contradicen este contrato: la taxonomía aprobada reemplaza las clasificaciones candidatas en su materia, y declaró expresamente aquellos IDs como candidatos de trazabilidad, por lo que este documento establece la convención técnica definitiva sin modificar los doce dominios.

## 25. Cierre

Este modelo permite producir contenido canónico, tipado, trazable y validable sin acoplarlo a la interfaz. Las decisiones aquí adoptadas son suficientes para que los documentos editoriales y relacionales completen la semántica y para que Codex implemente posteriormente esquemas y validadores sin rediseñar la taxonomía ni el contrato de contenido.
