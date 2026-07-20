# IT Study — Reglas de relaciones

## 1. Identificación y propósito

- **Proyecto:** IT Study
- **Documento:** Reglas de relaciones
- **Ruta oficial:** `docs/05-relationship-rules.md`
- **Documentos de autoridad, en orden:** `00-bootstrap-brief.md`, `docs/00-project-charter.md`, `docs/01-scope-and-audience.md`, `docs/02-taxonomy.md`, `docs/03-content-model.md` y `docs/04-editorial-guidelines.md`.
- **Estado:** aprobado el 2026-07-20; constituye la fuente de autoridad vigente para relaciones y no una implementación.

### 1.1 Propósito

Este documento define el catálogo semántico oficial de relaciones de IT Study y las reglas para conectar, mediante IDs estables, dominios, subdominios, disciplinas, entidades de conocimiento y estructuras editoriales. Su finalidad es que ChatGPT Trabajo pueda proponer relaciones consistentes, que la revisión humana pueda juzgar su valor educativo y que Codex pueda validar dirección, compatibilidad, cardinalidad, ciclos, evidencia y referencias sin reinterpretar el contenido.

Las relaciones forman un grafo semántico reutilizable. No describen tarjetas, menús, posiciones, rutas visuales ni componentes de interfaz. La navegación podrá consumirlas en documentos posteriores, pero no determina su existencia.

### 1.2 Alcance

Este contrato define:

- familias y claves técnicas de relación;
- significado, dirección, inversas, reciprocidad y simetría;
- compatibilidad lógica entre tipos de origen y destino;
- cardinalidad, ciclos y transitividad;
- reglas para `note` y `sourceIds`;
- relaciones persistidas, derivadas, generadas y descartadas;
- interpretación de los campos relacionales ya aprobados;
- validaciones conceptuales y evolución del catálogo.

### 1.3 Audiencia

Está dirigido al chat coordinador, ChatGPT Trabajo, revisores humanos, Codex y futuras personas o agentes que produzcan, revisen, integren o consuman contenido estructurado de IT Study.

### 1.4 Materias reservadas

No se definen aquí esquemas ejecutables, validadores, componentes, navegación visual, cantidades del MVP, lotes, umbrales automáticos definitivos, política general de fuentes ni fichas reales. Esas materias corresponden, según el caso, a `docs/06-design-boundaries.md`, `docs/07-mvp-definition.md`, `docs/08-production-batches.md`, `docs/09-quality-criteria.md`, documentos de `work/`, futuros esquemas y `docs/10-decision-log.md`.

## 2. Principios generales

1. **Semántica antes que presentación.** Una relación expresa un hecho, dependencia, aplicación, contraste o decisión editorial verificable; nunca una necesidad visual.
2. **Referencias exclusivamente por ID.** Origen y destino son IDs canónicos. Se prohíben títulos, rutas, nombres de archivo, anclas y textos visibles como referencias.
3. **Una sola entrada canónica.** La clasificación múltiple y la transversalidad se expresan mediante campos y relaciones; no crean copias.
4. **Relación específica antes que `related-to`.** La asociación general es el último recurso.
5. **Relevancia educativa.** La relación debe ayudar a comprender propósito, dependencia, uso, composición, diferencia, evolución o colaboración.
6. **Mínima duplicación.** No se persiste una relación que ya es autoridad en un campo especializado o que puede generarse de manera determinista.
7. **Dirección explícita.** Cada clave tiene sujeto y objeto definidos. La redacción debe poder leerse como “origen —relación→ destino”.
8. **Reciprocidad controlada.** Una inversa se genera solo cuando el catálogo la declara; no se supone por semejanza lingüística.
9. **Evidencia proporcional.** Las relaciones factuales, temporales, normativas, comerciales o discutibles requieren respaldo acorde con su riesgo.
10. **Notas breves y contextuales.** `note` aclara el alcance de una arista; no es una ficha, una fuente ni un contenedor de relaciones ocultas.
11. **Clasificación múltiple sin copias.** El dominio principal expresa hogar; los secundarios y dominios de aplicación expresan alcance sustantivo, no duplicación.
12. **Estabilidad y trazabilidad.** Las claves son contratos estables. Los cambios semánticos se registran y migran.
13. **No inventar para navegar.** No se agregan aristas para llenar una sección, equilibrar un grafo o mantener al usuario haciendo clic.
14. **Separación de conceptos.** Clasificación responde “qué es” y “dónde tiene hogar”; relación responde “cómo se vincula”; estructura editorial organiza una explicación o recorrido. Ninguna sustituye a las otras.
15. **Ausencia significativa.** Si una relación no aporta valor o no puede justificarse, se omite. Una lista vacía no se rellena artificialmente.
16. **No inferencia ilimitada.** La existencia de A→B y B→C no autoriza A→C salvo que este documento declare transitividad semántica y la inferencia sea válida en ese contexto.

## 3. Representación aprobada

Se conserva sin modificación el contenedor establecido por `docs/03-content-model.md`:

```yaml
relations:
  - targetId:
    relationType:
    note:
    sourceIds:
```

### 3.1 Propiedades

| Propiedad | Significado | Presencia y tipo lógico | Validaciones y extensión | No debe contener |
|---|---|---|---|---|
| `targetId` | ID canónico del destino leído desde la entrada que contiene la relación. | Obligatorio; `id`. | Debe existir, cumplir el patrón de IDs, ser compatible con el origen y no ser autorreferencia cuando la relación la prohíba. | Título, ruta, URL, nombre de archivo, alias, `legacyId` sin resolver o texto visual. |
| `relationType` | Clave técnica estable que determina la semántica y dirección. | Obligatorio; `enum` controlado por este catálogo. | Minúsculas ASCII en `kebab-case`; debe estar adoptada para persistencia y ser compatible con ambos tipos. | Etiquetas traducidas, frases libres, claves retiradas o relaciones derivadas que el contrato prohíbe persistir. |
| `note` | Aclaración contextual de esta arista concreta. | Opcional o condicional; `text` breve. | Una idea principal en una oración breve. Si necesita un párrafo, probablemente corresponde a la ficha o a una estructura especializada; el umbral cuantitativo queda reservado a calidad. | Definiciones, bibliografía, instrucciones visuales, otra relación no estructurada, evidencia no identificada o una comparación completa. |
| `sourceIds` | Fuentes normalizadas que respaldan la relación, no toda la entrada. | Opcional o condicional; `id[]`. | IDs únicos con namespace `source`; deben existir y corresponder a la afirmación relacional. Obligatorio cuando la sección 14 lo indique. | URLs, citas completas, títulos bibliográficos, fuentes no consultadas o evidencia de toda la ficha sin relación directa. |

`note` es obligatoria para `related-to`; para relaciones condicionadas, parciales o susceptibles de interpretarse como universales; y cuando la dirección por sí sola no delimita el contexto. `sourceIds` es obligatorio para sustitución, evolución o versión factual; cumplimiento o gobierno normativo; capacidades comerciales cambiantes; y relaciones controvertidas o no derivables del modelo. Las reglas generales de selección y suficiencia de fuentes permanecen reservadas a `work/SOURCE-POLICY.md`.

Una misma entrada no puede contener dos objetos con la misma combinación normalizada `relationType + targetId`. Si varias fuentes respaldan la misma arista se consolidan en `sourceIds`; si cambian realmente el alcance, se conserva una sola relación con una nota que delimite el alcance común o se revisa si son relaciones distintas.

## 4. Modelo conceptual de una relación

### 4.1 Contrato común

Toda relación adoptada se documenta en las secciones 5 y 6 con:

- clave técnica estable y nombre editorial;
- definición y pregunta que responde;
- lectura dirigida, inversa y regla de reciprocidad;
- simetría, cardinalidad, tipos compatibles y ciclos;
- transitividad o prohibición de inferirla;
- evidencia y uso de `note`;
- ejemplos válidos e inválidos;
- errores frecuentes, impacto potencial en navegación y severidad conceptual.

Las cardinalidades del catálogo describen la semántica posible de una arista, no cuántos elementos mostrará la interfaz. Salvo reglas de unicidad taxonómica o sucesión explícita, la mayoría son muchos a muchos y su presencia es opcional.

### 4.2 Perfiles de almacenamiento

| Perfil | Regla |
|---|---|
| **Persistida** | Se escribe en `relations[]` porque no existe un campo especializado que sea su autoridad. |
| **Derivada de campo** | Se calcula desde un campo aprobado; persistirla en `relations[]` es duplicación y error. |
| **Inversa generada** | Se calcula desde la relación directa o el campo de autoridad; no se escribe en el destino. |
| **Estructura especializada** | Vive en comparación, escenario, ruta u objeto tipado; no se convierte automáticamente en arista global. |
| **Reservada** | La semántica es útil, pero falta un tipo o decisión aprobada para persistirla de forma segura. |
| **Descartada** | Es sinónimo, demasiado ambigua o redundante; no puede usarse como `relationType`. |

## 5. Familias de relaciones

En las tablas siguientes, `E` significa evidencia externa o interna específica; `N`, `note`; `C`, condicional; `R`, requerida; y `—`, normalmente innecesaria. “Bloqueante” indica que una referencia incorrecta altera clasificación, dependencia, identidad o cumplimiento y debe impedir aprobación; “alta” indica un error factual relevante; “media”, una asociación corregible que no cambia por sí sola la identidad.

### 5.1 Relaciones taxonómicas

| Clave | Nombre y pregunta | Dirección, inversa y cardinalidad | Compatibilidad, ciclos y transitividad | Evidencia / nota | Ejemplo válido; inválido; error frecuente | Navegación / severidad |
|---|---|---|---|---|---|---|
| `belongs-to-domain` | **pertenece al dominio**. ¿Cuál es el hogar taxonómico principal de la entidad? | Entidad→dominio; inversa de consulta `has-domain-member`; muchos a uno; exactamente uno para entidades salvo excepción justificada. | Entidades→`domain`; sin ciclos; no transitiva. Derivada de `primaryDomain`. | E: decisión taxonómica; N: solo excepción. | `entity-http`→`domain-redes-telecomunicaciones`; inválido: herramienta→dos hogares; error: confundir aplicación con pertenencia. | Filtro principal; bloqueante. |
| `belongs-to-subdomain` | **pertenece al subdominio**. ¿Qué ubicación específica aprobada tiene la entidad? | Entidad→subdominio; inversa `has-subdomain-member`; muchos a muchos, pero cada destino debe depender del dominio principal. | Entidades→`subdomain`; sin ciclos; no transitiva. Derivada de `subdomains`. | E: clasificación; N: si la frontera requiere aclaración. | `entity-rest`→`subdomain-apis-interoperabilidad`; inválido: subdominio ajeno al hogar; error: usarlo como segundo dominio. | Exploración específica; bloqueante. |
| `home-domain` | **tiene dominio hogar**. ¿Dónde se gobierna canónicamente una disciplina transversal? | Disciplina→dominio; inversa `hosts-discipline`; cero o uno, ordinariamente uno. | `discipline`→`domain`; sin ciclos; no transitiva. Derivada de `homeDomain`. | E: decisión taxonómica; N: obligatoria si se omite hogar razonable. | `discipline-observabilidad`→infraestructura; inválido: varios hogares; error: convertir disciplina en subdominio. | Entrada canónica de disciplina; bloqueante. |
| `applies-to-domain` | **se aplica al dominio**. ¿En qué otros dominios tiene aplicación sustantiva? | Disciplina o entidad→dominio; sin inversa persistida; muchos a muchos. | Principalmente `discipline` y entidades→`domain`; ciclos no aplican; no transitiva. Derivada de `applicationDomains` o `secondaryDomains`, según origen. | E: justificación contextual; N: recomendada. | seguridad→datos; inválido: añadir todos los dominios por afinidad; error: usarla como etiqueta. | Alcance transversal; alta. |
| `parent-domain` | **tiene dominio padre**. ¿Qué único dominio contiene taxonómicamente al subdominio? | Subdominio→dominio; inversa `contains-subdomain`; exactamente uno. | `subdomain`→`domain`; sin ciclos; transitividad no aplica porque solo hay dos niveles. Derivada de `parentDomain`. | E: taxonomía aprobada; N: —. | backend→desarrollo; inválido: dos padres; error: codificar jerarquía en el ID. | Árbol canónico; bloqueante. |
| `contains-subdomain` | **contiene el subdominio**. ¿Qué subdominios dependen del dominio? | Dominio→subdominio; inversa generada de `parent-domain`; uno a muchos. | `domain`→`subdomain`; sin ciclos; no se persiste ni se infiere a terceros niveles. | Igual que la directa. | Desarrollo→backend, generado; inválido: escritura manual contradictoria; error: tratar área como dominio. | Índices de dominio; bloqueante si contradice al padre. |

`belongs-to-domain`, `belongs-to-subdomain`, `home-domain`, `applies-to-domain`, `parent-domain` y `contains-subdomain` forman vocabulario semántico oficial, pero no se escriben en `relations[]`: sus autoridades son los campos especializados aprobados. Las inversas de consulta no son claves persistibles.

### 5.2 Dependencia y aprendizaje

| Clave | Nombre y pregunta | Dirección, inversa y cardinalidad | Compatibilidad, ciclos y transitividad | Evidencia / nota | Ejemplo válido; inválido; error frecuente | Navegación / severidad |
|---|---|---|---|---|---|---|
| `requires` | **requiere**. ¿Qué conocimiento es indispensable para comprender el origen al nivel declarado? | Entrada dependiente→prerrequisito; inversa generada `prerequisite-of`; muchos a muchos. | Entidades, disciplina o ruta→entidad/disciplina; ciclos prohibidos; transitividad útil para análisis, pero no autoriza persistir cierres transitivos. | E: justificación educativa; N: obligatoria si depende del nivel. | OAuth→HTTP cuando es indispensable para esa explicación; inválido: HTTP→OAuth y OAuth→HTTP; error: registrar todo lo anterior. | Prerrequisitos; bloqueante si crea ciclo o falsa necesidad. |
| `prerequisite-of` | **es prerrequisito de**. ¿Qué entradas dependen de este conocimiento? | Prerrequisito→dependiente; inversa generada de `requires`; muchos a muchos. | Compatibilidad inversa; ciclos prohibidos; no se persiste. | Hereda evidencia y nota. | HTTP→OAuth, generado; inválido: escribir ambos lados; error: divergencia con `requires`. | Navegación posterior; bloqueante si contradice. |
| `recommended-before` | **se recomienda antes de**. ¿Qué conviene estudiar antes del destino sin ser indispensable? | Conocimiento recomendado→entrada posterior; sin inversa útil persistida; muchos a muchos. | Entidades o disciplinas→entidades o disciplinas; ciclos permitidos solo con justificación editorial, normalmente advertencia; no transitiva. | E: decisión pedagógica; N: recomendada y obligatoria si el motivo no es obvio. | redes básicas→cloud; inválido: presentarlo como requisito; error: usar orden de una ruta como evidencia automática. | Progresión flexible; media. |
| `builds-on` | **se apoya conceptualmente en**. ¿Qué idea anterior amplía o especializa el origen? | Idea posterior→fundamento; sin inversa adoptada; muchos a muchos. | Ideas, modelos, patrones, técnicas, tecnologías→ideas o modelos; ciclos prohibidos salvo coevolución documentada, que debe modelarse de otro modo; no transitiva por defecto. | E: factual o editorial; N: recomendada. | CQRS→separación de responsabilidades; inválido: dos términos solo relacionados; error: confundir influencia histórica con dependencia conceptual. | Contexto conceptual; alta. |

`next-step` se descarta como relación global: el siguiente paso depende de una ruta y vive en `learning-path.entries[]`. Fuera de una ruta, debe usarse `recommended-before` solo si existe una progresión educativa justificable.

### 5.3 Uso, aplicación e implementación

| Clave | Nombre y pregunta | Dirección, inversa y cardinalidad | Compatibilidad, ciclos y transitividad | Evidencia / nota | Ejemplo válido; inválido; error frecuente | Navegación / severidad |
|---|---|---|---|---|---|---|
| `uses` | **utiliza**. ¿Qué recurso utiliza activamente el origen para cumplir su propósito? | Rol, proceso, práctica, herramienta, plataforma, servicio o producto→entidad usada; inversa generada `used-by`; muchos a muchos. | Orígenes operativos→herramienta, tecnología, artefacto, protocolo, estándar, técnica o servicio; ciclos posibles solo si representan interacción real, no transitiva. | E: factual; N: C para uso parcial. | rol de revisor→artefacto pull request; inválido: Java “usa” programación; error: confundir pertenencia temática. | Contexto de uso; alta. |
| `used-by` | **es utilizado por**. ¿Quién o qué utiliza el origen? | Recurso→usuario; inversa generada de `uses`; muchos a muchos; no se persiste. | Compatibilidad inversa; mismos ciclos; no transitiva. | Hereda evidencia. | pull request→revisor, generado; inválido: ambos lados manuales; error: inferir que todo miembro de un equipo lo usa. | Descubrimiento de consumidores; alta. |
| `applies-to` | **se aplica a**. ¿Sobre qué objeto, proceso o contexto actúa una práctica, principio, técnica o disciplina? | Práctica/principio/técnica/disciplina→entidad objetivo; sin inversa persistida; muchos a muchos. | Formas de trabajo e ideas normativas→procesos, artefactos, productos, servicios, roles u otras entidades compatibles; ciclos normalmente prohibidos; no transitiva. | E: contextual; N: recomendada. | code review→cambios de código; inválido: seguridad→dominio mediante esta clave; error: usarla donde corresponde `applies-to-domain`. | Contextos aplicables; alta. |
| `implements` | **implementa**. ¿Qué especificación, estándar, protocolo, patrón, modelo o capacidad realiza concretamente el origen? | Tecnología, herramienta, plataforma, servicio o producto→especificación o abstracción; inversa generada `implemented-by`; muchos a muchos. | Implementaciones→protocolos, estándares, patrones, modelos o tecnologías abstractas; ciclos prohibidos; no transitiva. | E: R, especialmente producto/versiones; N: C para conformidad parcial. | servidor web→HTTP; inválido: HTTP→servidor con `implements`; error: equiparar compatibilidad parcial con implementación completa. | Implementaciones conocidas; alta. |
| `implemented-by` | **es implementado por**. ¿Qué implementaciones concretas realizan el origen? | Abstracción→implementación; inversa generada; no se persiste. | Compatibilidad inversa; sin ciclos; no transitiva. | Hereda evidencia. | HTTP→servidor web, generado; inválido: lista comercial arbitraria; error: inferir recomendación. | Exploración de ejemplos; alta. |
| `supports` | **brinda soporte a**. ¿Qué capacidad, proceso o práctica habilita o facilita el origen sin implementarlo necesariamente? | Herramienta, plataforma, servicio, estándar, práctica o artefacto→entidad apoyada; inversa generada `supported-by`; muchos a muchos. | Origen habilitador→proceso, práctica, capacidad, servicio, producto o rol; ciclos posibles con justificación, no transitiva. | E: factual; N: obligatoria cuando “soporte” sea parcial o condicionado. | CI platform→continuous integration practice; inválido: “todo soporta calidad”; error: usar verbo promocional sin mecanismo. | Capacidades relacionadas; alta. |
| `supported-by` | **recibe soporte de**. ¿Qué elementos habilitan o facilitan el origen? | Entidad apoyada→habilitador; inversa generada; no se persiste. | Compatibilidad inversa; no transitiva. | Hereda evidencia y nota. | práctica CI→plataforma CI, generado; inválido: escritura contradictoria. | Contexto habilitador; alta. |

`applies` se descarta por dirección ambigua y se consolida en `applies-to`. `used-by-role` se mantiene como relación derivada de `usedByRoles` y se consolida semánticamente en la pareja `uses`/`used-by`; no es clave persistible independiente.

### 5.4 Composición y estructura

| Clave | Nombre y pregunta | Dirección, inversa y cardinalidad | Compatibilidad, ciclos y transitividad | Evidencia / nota | Ejemplo válido; inválido; error frecuente | Navegación / severidad |
|---|---|---|---|---|---|---|
| `part-of` | **forma parte de**. ¿De qué todo estructural es parte el origen? | Parte→todo; inversa generada `has-part`; muchos a uno o muchos a muchos según naturaleza. | Componentes, artefactos, procesos, modelos, productos, plataformas y estándares compatibles; ciclos prohibidos; transitiva solo para composición homogénea y estricta, nunca automáticamente entre tipos distintos. | E: estructural; N: C para alcance. | módulo→producto; inválido: técnica→dominio; error: usar afinidad como composición. | Descomposición; bloqueante en ciclos. |
| `has-part` | **tiene como parte**. ¿Qué partes estructurales componen el origen? | Todo→parte; inversa generada de `part-of`; uno a muchos; no se persiste. | Compatibilidad inversa; ciclos prohibidos; misma transitividad limitada. | Hereda evidencia. | producto→módulo, generado; inválido: duplicar `components[]` sin autoridad definida. | Exploración de estructura; alta. |
| `instance-of` | **es instancia de**. ¿De qué tipo, patrón, modelo o categoría semántica es caso concreto el origen? | Instancia con identidad editorial→tipo/abstracción; muchos a uno o muchos a muchos justificado. | Implementación, producto, servicio, artefacto o escenario→modelo, patrón, concepto o tecnología; ciclos prohibidos; puede encadenarse solo en jerarquías ontológicas explícitas, no se infiere globalmente. | E: R; N: C para alcance. | producto concreto→tipo de sistema; inválido: alias→entrada; error: crear ficha solo para ser ejemplo. | Ejemplos tipados; alta. |

`component-of` se consolida en `part-of`; `composed-of`, `has-part` y `contains` se consolidan en `has-part`, salvo `contains-subdomain`, que conserva semántica taxonómica. `example-of` se consolida en `instance-of` cuando el ejemplo tiene identidad editorial propia; los ejemplos ordinarios permanecen en `examples[]` y no crean relaciones.

### 5.5 Producción y consumo

| Clave | Nombre y pregunta | Dirección, inversa y cardinalidad | Compatibilidad, ciclos y transitividad | Evidencia / nota | Ejemplo válido; inválido; error frecuente | Navegación / severidad |
|---|---|---|---|---|---|---|
| `produces` | **produce**. ¿Qué artefacto, resultado, evento o servicio genera el origen? | Proceso, práctica, rol, servicio o escenario→artefacto/resultado; inversa generada `produced-by`; muchos a muchos. | Productores→artefactos, indicadores, servicios o productos cuando exista producción real; ciclos posibles en bucles operativos, pero no transitiva. | E: factual o estructural; N: C. | postmortem practice→postmortem artifact; inválido: rol→competencia; error: confundir responsabilidad con producción. | Entradas y salidas; alta. |
| `produced-by` | **es producido por**. ¿Qué proceso, práctica, rol o servicio genera el origen? | Resultado→productor; inversa generada; no se persiste si `produces` o `artifact.producedBy[]` es autoridad. | Compatibilidad inversa; ciclos solo por flujo real; no transitiva. | Hereda evidencia. | ADR→architecture decision process; inválido: duplicar ambos lados. | Procedencia; alta. |
| `consumes` | **consume**. ¿Qué artefacto, dato, evento o servicio necesita como entrada el origen durante su operación? | Proceso, práctica, rol, servicio, producto o escenario→recurso consumido; inversa generada `consumed-by`; muchos a muchos. | Consumidores→artefactos, servicios, productos o eventos con identidad; ciclos posibles en sistemas interactivos; no transitiva. | E: factual; N: C para modalidad. | deployment process→build artifact; inválido: “producto consume dominio”; error: confundir conocimiento previo con insumo. | Flujo operativo; alta. |
| `consumed-by` | **es consumido por**. ¿Qué actores o procesos consumen el origen? | Recurso→consumidor; inversa generada; no se persiste. | Compatibilidad inversa; no transitiva. | Hereda evidencia. | API service→cliente, generado; inválido: asumir todo usuario potencial. | Consumidores; alta. |

`input-to` se consolida en `consumed-by`; `output-of` se consolida en `produced-by`. Los campos `process.inputs[]`, `process.outputs[]`, `artifact.producedBy[]` y `artifact.consumedBy[]` siguen siendo vistas especializadas y autoridades cuando existan; no se duplican en `relations[]`.

### 5.6 Personas, roles y capacidades

| Clave | Nombre y pregunta | Dirección, inversa y cardinalidad | Compatibilidad, ciclos y transitividad | Evidencia / nota | Ejemplo válido; inválido; error frecuente | Navegación / severidad |
|---|---|---|---|---|---|---|
| `performed-by` | **es realizado por**. ¿Qué rol ejecuta habitualmente el proceso, práctica o técnica? | Proceso/práctica/técnica→rol; inversa generada `performs`; muchos a muchos. | Formas de trabajo→`role`; sin ciclos; no transitiva. | E: contextual; N: recomendada para evitar universalizar. | code review→code reviewer; inválido: puesto como único ejecutor universal; error: confundir rol con cargo. | Participantes; alta. |
| `performs` | **realiza**. ¿Qué procesos, prácticas o técnicas ejecuta el rol? | Rol→actividad; inversa generada; no se persiste. | `role`→formas de trabajo; sin ciclos; no transitiva. | Hereda evidencia. | revisor→code review, generado; inválido: dos lados contradictorios. | Actividades del rol; alta. |
| `responsible-for` | **es responsable de**. ¿De qué resultado u obligación responde el rol o puesto? | Rol/puesto→responsabilidad o resultado; inversa generada `responsibility-of`; muchos a muchos. | `role`/`position`→`responsibility`, artefacto, proceso o resultado identificable; sin ciclos; no transitiva. | E: contextual; N: R si depende de organización. | incident commander→coordinación del incidente; inválido: competencia como responsabilidad; error: universalizar un puesto local. | Alcance de función; alta. |
| `responsibility-of` | **es responsabilidad de**. ¿Qué rol o puesto responde por el origen? | Responsabilidad/resultado→rol/puesto; inversa generada; no se persiste. | Compatibilidad inversa; sin ciclos. | Hereda evidencia. | coordinación→incident commander, generado. | Responsables; alta. |
| `requires-competency` | **requiere la competencia**. ¿Qué capacidad necesita un rol o puesto para desempeñarse? | Rol/puesto→competencia; inversa generada `competency-for`; muchos a muchos. | `role`/`position`→`competency`; sin ciclos; no transitiva. Derivada de `competencies`. | E: contextual; N: C. | revisor→comunicación técnica; inválido: responsabilidad→competencia; error: tratar conocimiento como competencia demostrable. | Capacidades del rol; alta. |
| `competency-for` | **es competencia para**. ¿En qué roles o puestos resulta aplicable la competencia? | Competencia→rol/puesto; inversa generada; no se persiste. | `competency`→`role`/`position`; sin ciclos. | Hereda evidencia. | comunicación→revisor, generado. | Rutas profesionales; alta. |
| `collaborates-with` | **colabora con**. ¿Con qué otro rol existe colaboración habitual y relevante? | Rol↔rol; simétrica; muchos a muchos; se normaliza una sola arista lógica. | `role`→`role`; ciclos de longitud mayor permitidos; no transitiva. Derivada de `collaboratesWith`. | E: contextual; N: recomendada para indicar propósito. | developer↔SRE durante operación; inválido: inferir developer↔auditor porque ambos colaboran con seguridad; error: convertir organigrama en verdad universal. | Colaboración; media. |

`used-by-role` se deriva de `usedByRoles`: conceptualmente equivale a recurso `used-by` rol. Responsabilidades ordinarias siguen como declaraciones estructuradas; solo una responsabilidad con identidad transversal admite relación propia.

### 5.7 Medición, gobierno y control

| Clave | Nombre y pregunta | Dirección, inversa y cardinalidad | Compatibilidad, ciclos y transitividad | Evidencia / nota | Ejemplo válido; inválido; error frecuente | Navegación / severidad |
|---|---|---|---|---|---|---|
| `measures` | **mide**. ¿Qué propiedad observable cuantifica la métrica? | Métrica→propiedad o entidad medida; inversa generada `measured-by`; muchos a uno o muchos a muchos. | `metric`→concepto, servicio, producto, proceso o propiedad con identidad; sin ciclos; no transitiva. Puede derivarse de `propertyMeasured` si este es ID. | E: R para definición de medición; N: C para condiciones. | latency metric→response time; inválido: indicador→objetivo con `measures`; error: confundir medición con interpretación. | Métricas aplicables; alta. |
| `measured-by` | **es medido por**. ¿Qué métricas cuantifican el origen? | Entidad/propiedad→métrica; inversa generada; no se persiste. | Compatibilidad inversa; sin ciclos. | Hereda evidencia. | response time→latency, generado. | Medición; alta. |
| `indicates` | **indica**. ¿Qué condición, tendencia o estado contextual sugiere el indicador? | Indicador→condición, riesgo, objetivo o resultado; sin inversa útil; muchos a muchos. | `indicator`→concepto, riesgo, resultado o entidad evaluada; ciclos prohibidos; no transitiva. | E: R; N: R para límites interpretativos. | error-budget burn indicator→riesgo de incumplir SLO; inválido: “latencia alta indica mal equipo”; error: inferir causa. | Interpretación; alta. |
| `governed-by` | **se rige por**. ¿Qué estándar, política, marco o autoridad establece reglas aplicables al origen? | Entidad regulada→estándar, principio normativo o marco; inversa generada `governs`; muchos a muchos. | Procesos, productos, servicios, artefactos, certificaciones o prácticas→`standard`, `work-framework` u otra entidad normativa aprobada; ciclos prohibidos; no transitiva. | E: R; N: R para jurisdicción, versión o alcance. | proceso de seguridad→estándar aplicable; inválido: mencionar estándar equivale a gobierno; error: omitir contexto. | Cumplimiento; bloqueante si afirma obligación falsa. |
| `governs` | **gobierna**. ¿Sobre qué elementos establece reglas el origen normativo? | Norma/marco→entidad regida; inversa generada; no se persiste. | Compatibilidad inversa; sin ciclos; no transitiva. | Hereda evidencia. | estándar→proceso, generado. | Alcance normativo; bloqueante si contradice. |
| `constrained-by` | **está restringido por**. ¿Qué especificación, principio o límite externo acota al origen? | Entidad→estándar, protocolo, principio o restricción con identidad; muchos a muchos; sin inversa adoptada. | Amplia para soluciones y formas de trabajo→entidad normativa; ciclos prohibidos; no transitiva. | E: R; N: R para condición. | implementation→protocol limit; inválido: limitación textual convertida en ficha artificial; error: usarlo como sinónimo de `governed-by`. | Restricciones; alta. |
| `verified-by` | **es verificado por**. ¿Qué práctica, técnica, artefacto o estándar aporta evidencia de conformidad o corrección? | Entidad verificable→práctica/técnica/artefacto/estándar; muchos a muchos; sin inversa adoptada. | Producto, servicio, proceso, artefacto o requisito→mecanismo de verificación; ciclos prohibidos; no transitiva. | E: R; N: C. | build artifact→signature verification; inválido: métrica “verifica” disponibilidad por sí sola; error: confundir observación con prueba. | Evidencia de control; alta. |
| `evaluated-by` | **es evaluado por**. ¿Qué métrica, indicador, práctica o modelo valora el origen sin implicar certificación? | Entidad evaluada→métrica/indicador/práctica/modelo; muchos a muchos; sin inversa adoptada. | Entidades o procesos→`metric`, `indicator`, `practice`, `technique` o `model`; ciclos prohibidos; no transitiva. | E: contextual; N: R para criterio. | service reliability→SLO indicator; inválido: evaluación presentada como certificación; error: omitir dimensión. | Evaluación; alta. |

`certified-by` queda reservada porque el modelo aprobado conserva `certification.issuer` como campo, pero no adopta `organization` u `issuer` como tipo referenciable. Si el emisor ya es una entidad canónica compatible en el futuro, una migración podrá derivar la relación sin cambiar el significado de `issuer`. Hasta entonces no debe inventarse un ID ni almacenarse texto como `targetId`.

### 5.8 Comparación y alternativas

| Clave | Nombre y pregunta | Dirección, inversa y cardinalidad | Compatibilidad, ciclos y transitividad | Evidencia / nota | Ejemplo válido; inválido; error frecuente | Navegación / severidad |
|---|---|---|---|---|---|---|
| `alternative-to` | **es alternativa a**. ¿Puede el origen satisfacer una necesidad comparable al destino en algún contexto? | Entidad↔entidad; simétrica; muchos a muchos. | Tipos funcionalmente comparables; ciclos permitidos; no transitiva. | E: R; N: R para dimensión y contexto. | dos message brokers para un caso; inválido: declarar equivalencia total; error: convertir popularidad en superioridad. | Decisión contextual; alta. |
| `complementary-to` | **es complementario de**. ¿Aporta el origen una capacidad distinta que puede combinarse con el destino? | Entidad↔entidad; simétrica; muchos a muchos. | Entidades combinables; ciclos permitidos; no transitiva. | E: contextual; N: recomendada. | monitoring↔tracing; inválido: inferir dependencia indispensable; error: usarlo por coexistencia. | Combinaciones; media. |
| `similar-to` | **es similar a**. ¿Comparte el origen características relevantes con el destino sin ser alias? | Entidad↔entidad; simétrica; muchos a muchos. | Tipos comparables; ciclos permitidos; no transitiva. | E: contextual; N: R indicando dimensión. | dos patrones con intención cercana; inválido: alias o mismo significado; error: relación débil sin dimensión. | Descubrimiento; media. |
| `confused-with` | **se confunde con**. ¿Qué entrada distinta suele interpretarse erróneamente como el origen? | Entidad↔entidad; simétrica; muchos a muchos. Derivada de `confusedWith`. | Cualquier par con significados distintos y comparación legítima; ciclos permitidos; no transitiva. | E: evidencia editorial; N: R si no existe `comparison`. | authentication↔authorization; inválido: duplicados que deben fusionarse; error: ocultar polisemia. | Acceso a aclaración/comparación; alta. |

`contrasts-with` se descarta como relación global: un contraste exige dimensiones y corresponde a `comparison`. Una nota breve basta solo cuando la diferencia es simple y se expresa como `confused-with`, `alternative-to` o `similar-to` con alcance explícito. `alternative-to` no declara equivalencia ni ganador; `complementary-to` no implica dependencia.

### 5.9 Evolución, reemplazo y vigencia

| Clave | Nombre y pregunta | Dirección, inversa y cardinalidad | Compatibilidad, ciclos y transitividad | Evidencia / nota | Ejemplo válido; inválido; error frecuente | Navegación / severidad |
|---|---|---|---|---|---|---|
| `evolved-from` | **evolucionó a partir de**. ¿Qué antecedente histórico contribuyó directamente a la forma actual del origen? | Entrada posterior→antecedente; sin inversa adoptada; muchos a muchos. | Tipos conceptualmente compatibles; ciclos prohibidos; no transitiva automáticamente. | E: R, histórica; N: recomendada. | tecnología posterior→antecedente documentado; inválido: alternativa moderna→antigua sin linaje; error: confundir cronología con evolución. | Historia; alta. |
| `influenced-by` | **fue influido por**. ¿Qué idea, práctica o tecnología afectó el desarrollo del origen sin ser antecedente directo? | Influido→influencia; sin inversa útil; muchos a muchos. | Entidades→ideas, prácticas, modelos, estándares o tecnologías; ciclos permitidos solo si existe influencia mutua documentada en periodos distintos; no transitiva. | E: R; N: R para naturaleza de influencia. | framework→principle; inválido: semejanza sin evidencia; error: afirmar causalidad por correlación. | Contexto histórico; alta. |
| `supersedes` | **sustituye normativamente a**. ¿Qué versión o edición anterior deja atrás el estándar/publicación de origen? | Estándar o publicación nueva→anterior; inversa generada `superseded-by`; ordinariamente uno a uno, puede ser uno a muchos en consolidaciones documentadas. | `standard` o publicación de referencia→mismo tipo/familia; ciclos prohibidos; transitiva para linaje de sucesión, sin persistir cierre. | E: R; N: R en consolidaciones o sustitución parcial. | standard-2023→standard-2011; inválido: ambos se sustituyen; error: usarlo para alternativas. | Vigencia documental; bloqueante. |
| `superseded-by` | **fue sustituido normativamente por**. ¿Qué versión vigente reemplazó al origen? | Anterior→nueva; inversa generada; no se persiste. | Compatibilidad inversa; ciclos prohibidos; transitividad de linaje. | Hereda evidencia. | standard-2011→2023, generado. | Redirección de versión; bloqueante. |
| `replaces` | **reemplaza**. ¿Qué entrada deprecada deja de ser la opción canónica por el origen? | Sustituto→anterior; inversa generada `replaced-by`; ordinariamente cero o uno por identidad, uno a muchos solo con migración explícita. | Entradas semánticamente compatibles; ciclos prohibidos; transitiva solo para resolver la cadena al sustituto vigente, no para afirmar equivalencia histórica. | E: R; N: R si el reemplazo es parcial. | nueva entrada→entrada deprecada; inválido: producto nuevo→competidor antiguo; error: confundir alternativa con sustituto. | Migración; bloqueante. |
| `replaced-by` | **es reemplazado por**. ¿Qué entrada canónica sustituye al origen? | Anterior→sustituto; inversa generada de `replaces` o derivada de `replacedBy`; no se persiste en `relations[]`. | Compatibilidad inversa; ciclos prohibidos; cero o uno ordinario, uno o más solo para división documentada. | E: R; N: C. | entrada deprecada→nueva, derivada; inválido: destino también deprecado sin cadena justificable. | Redirección canónica; bloqueante. |
| `version-of` | **es versión de**. ¿A qué familia estable pertenece esta edición con identidad editorial propia? | Versión→familia; muchos a uno. | Estándar, producto o publicación versionada→entrada familia compatible; ciclos prohibidos; no transitiva más allá de la familia. | E: R; N: C. | standard-2023→standard-family; inválido: variante lingüística→entrada; error: crear fichas para versiones efímeras. | Agrupación de versiones; alta. |

`deprecated-in-favor-of` se consolida en los metadatos `deprecated` + `replacedBy`, que derivan `replaced-by`. No es clave persistible. `legacyIds` resuelve identidad histórica y tampoco crea aristas ni entradas. `replaces` se usa solo para reemplazo canónico; una alternativa nueva usa `alternative-to`.

### 5.10 Asociación general

| Clave | Nombre y pregunta | Dirección, inversa y cardinalidad | Compatibilidad, ciclos y transitividad | Evidencia / nota | Ejemplo válido; inválido; error frecuente | Navegación / severidad |
|---|---|---|---|---|---|---|
| `related-to` | **está relacionado con**. ¿Qué vínculo educativo relevante existe cuando ninguna relación específica lo representa fielmente? | Entidad↔entidad; simétrica; muchos a muchos; una sola arista lógica. | Cualquier entrada canónica no estructural; ciclos permitidos; no transitiva. | E: justificación; N: siempre R y debe nombrar el vínculo. | concepto↔práctica con nota “aparece al razonar sobre…”; inválido: dos términos del mismo dominio; error: usarla por comodidad. | Descubrimiento secundario; media, pero bloqueante si sustituye clasificación o requisito. |

`related-to` solo se permite después de comprobar que no aplican relaciones taxonómicas, dependencia, uso, composición, flujo, roles, control, comparación o evolución. Debe ser complementaria, no esencial para interpretar identidad o pertenencia. La revisión debe advertir su uso repetido y rechazar asociaciones cuya única justificación sea compartir dominio, aparecer en la misma fuente o ser útiles en la misma pantalla. Los límites cuantitativos definitivos corresponden a `docs/09-quality-criteria.md`.

## 6. Catálogo final

La clave técnica es también la denominación profesional en inglés del vínculo; el nombre editorial en español se usa en explicaciones y no reemplaza `relationType`. “Adoptada” permite persistencia en `relations[]`; “derivada” permite consulta semántica, pero prohíbe duplicarla; “reservada” no puede usarse hasta una decisión posterior; “descartada” no es clave válida.

### 6.1 Catálogo semántico operativo

Esta es la tabla oficial de relaciones con significado propio. Las restricciones completas, ejemplos, notas, transitividad, errores e impacto se encuentran en la familia correspondiente de la sección 5.

| Clave / nombre editorial | Familia y definición | Origen → destino permitido | Inversa | Simétrica | Cardinalidad ordinaria | Ciclos | Evidencia | Estado |
|---|---|---|---|---|---|---|---|---|
| `belongs-to-domain` / pertenece al dominio | Taxonómica; hogar principal. | entidad → dominio | `has-domain-member`, solo consulta | No | muchos a uno; un hogar por entidad | No | Taxonómica | Derivada de `primaryDomain` |
| `belongs-to-subdomain` / pertenece al subdominio | Taxonómica; ubicación específica. | entidad → subdominio de su hogar | `has-subdomain-member`, solo consulta | No | muchos a muchos | No | Taxonómica | Derivada de `subdomains` |
| `home-domain` / tiene dominio hogar | Taxonómica; hogar de disciplina. | disciplina → dominio | `hosts-discipline`, solo consulta | No | muchos a uno; cero o uno por disciplina | No | Taxonómica | Derivada de `homeDomain` |
| `applies-to-domain` / se aplica al dominio | Taxonómica transversal; aplicación sustantiva. | disciplina o entidad → dominio | Ninguna persistible | No | muchos a muchos | No aplica | Contextual | Derivada de campos de aplicación |
| `parent-domain` / tiene dominio padre | Taxonómica; padre único. | subdominio → dominio | `contains-subdomain` | No | muchos a uno; exactamente uno | No | Taxonómica | Derivada de `parentDomain` |
| `contains-subdomain` / contiene el subdominio | Taxonómica; consulta de hijos. | dominio → subdominio | `parent-domain` | No | uno a muchos | No | Heredada | Derivada inversa |
| `requires` / requiere | Dependencia indispensable. | entidad, disciplina o ruta → conocimiento | `prerequisite-of` | No | muchos a muchos | No | Educativa | Adoptada; derivada cuando existe `prerequisites` |
| `prerequisite-of` / es prerrequisito de | Consulta de dependientes. | conocimiento → entidad, disciplina o ruta | `requires` | No | muchos a muchos | No | Heredada | Derivada inversa |
| `recommended-before` / se recomienda antes de | Progresión útil, no indispensable. | conocimiento → conocimiento posterior | Ninguna | No | muchos a muchos | Solo justificados | Editorial | Adoptada |
| `builds-on` / se apoya conceptualmente en | Extensión o especialización conceptual. | idea, forma, solución o implementación → fundamento | Ninguna | No | muchos a muchos | No ordinariamente | Factual/editorial | Adoptada |
| `uses` / utiliza | Uso activo de un recurso. | rol, forma de trabajo o implementación → recurso | `used-by` | No | muchos a muchos | Solo interacción real | Factual | Adoptada |
| `used-by` / es utilizado por | Consulta de usuarios o consumidores. | recurso → rol, forma o implementación | `uses` | No | muchos a muchos | Igual a directa | Heredada | Derivada inversa |
| `applies-to` / se aplica a | Aplicación no taxonómica. | disciplina, principio, práctica o técnica → entidad objetivo | Ninguna | No | muchos a muchos | No ordinariamente | Contextual | Adoptada |
| `implements` / implementa | Realización concreta de especificación o abstracción. | implementación → protocolo, estándar, patrón, modelo o tecnología abstracta | `implemented-by` | No | muchos a muchos | No | Factual | Adoptada |
| `implemented-by` / es implementado por | Consulta de implementaciones. | abstracción → implementación | `implements` | No | muchos a muchos | No | Heredada | Derivada inversa |
| `supports` / brinda soporte a | Habilitación sin implementación necesaria. | forma, implementación o artefacto → capacidad, proceso o práctica | `supported-by` | No | muchos a muchos | Solo justificados | Factual | Adoptada |
| `supported-by` / recibe soporte de | Consulta de habilitadores. | entidad apoyada → habilitador | `supports` | No | muchos a muchos | Igual a directa | Heredada | Derivada inversa |
| `part-of` / forma parte de | Composición estructural. | parte → todo compatible | `has-part` | No | muchos a uno o muchos a muchos | No | Estructural | Adoptada |
| `has-part` / tiene como parte | Consulta de partes. | todo → parte | `part-of` | No | uno a muchos o muchos a muchos | No | Heredada | Derivada inversa |
| `instance-of` / es instancia de | Caso concreto de una abstracción. | implementación, artefacto o escenario → modelo, patrón, concepto o tecnología abstracta | Ninguna adoptada | No | muchos a uno o muchos a muchos | No | Factual | Adoptada |
| `produces` / produce | Generación de resultado o artefacto. | rol, proceso, práctica, servicio o escenario → resultado | `produced-by` | No | muchos a muchos | Bucle real permitido | Factual/estructural | Adoptada o derivada de campo |
| `produced-by` / es producido por | Procedencia de resultado. | resultado → productor | `produces` | No | muchos a muchos | Bucle real permitido | Heredada | Derivada inversa/campo |
| `consumes` / consume | Uso de insumo durante operación. | rol, proceso, práctica, servicio, producto o escenario → recurso | `consumed-by` | No | muchos a muchos | Bucle real permitido | Factual/estructural | Adoptada o derivada de campo |
| `consumed-by` / es consumido por | Consulta de consumidores. | recurso → consumidor | `consumes` | No | muchos a muchos | Bucle real permitido | Heredada | Derivada inversa/campo |
| `performed-by` / es realizado por | Ejecución habitual de trabajo. | proceso, práctica o técnica → rol | `performs` | No | muchos a muchos | No | Contextual | Adoptada |
| `performs` / realiza | Consulta de actividades del rol. | rol → proceso, práctica o técnica | `performed-by` | No | muchos a muchos | No | Heredada | Derivada inversa |
| `responsible-for` / es responsable de | Responsabilidad por obligación o resultado. | rol o puesto → responsabilidad, proceso o resultado | `responsibility-of` | No | muchos a muchos | No | Contextual | Adoptada o derivada de objeto |
| `responsibility-of` / es responsabilidad de | Consulta de responsables. | obligación o resultado → rol o puesto | `responsible-for` | No | muchos a muchos | No | Heredada | Derivada inversa |
| `requires-competency` / requiere la competencia | Capacidad necesaria para un rol o puesto. | rol o puesto → competencia | `competency-for` | No | muchos a muchos | No | Contextual | Derivada de `competencies` |
| `competency-for` / es competencia para | Aplicación de competencia. | competencia → rol o puesto | `requires-competency` | No | muchos a muchos | No | Heredada | Derivada inversa |
| `collaborates-with` / colabora con | Colaboración habitual entre roles. | rol ↔ rol | La misma | Sí | muchos a muchos | Sí | Contextual | Derivada de `collaboratesWith` |
| `measures` / mide | Cuantificación de una propiedad. | métrica → propiedad o entidad medida | `measured-by` | No | muchos a uno o muchos a muchos | No | Técnica | Adoptada o derivada de `propertyMeasured` |
| `measured-by` / es medido por | Consulta de métricas. | propiedad o entidad → métrica | `measures` | No | uno a muchos | No | Heredada | Derivada inversa |
| `indicates` / indica | Interpretación contextual de indicador. | indicador → condición, riesgo, objetivo o resultado | Ninguna | No | muchos a muchos | No | Técnica | Adoptada |
| `governed-by` / se rige por | Aplicación de reglas normativas. | entidad regulada → estándar, principio normativo o marco | `governs` | No | muchos a muchos | No | Normativa | Adoptada |
| `governs` / gobierna | Consulta de alcance normativo. | norma o marco → entidad regida | `governed-by` | No | muchos a muchos | No | Heredada | Derivada inversa |
| `constrained-by` / está restringido por | Límite externo aplicable. | entidad → estándar, protocolo, principio o restricción con identidad | Ninguna | No | muchos a muchos | No | Normativa/técnica | Adoptada |
| `verified-by` / es verificado por | Mecanismo que aporta evidencia de conformidad. | entidad verificable → práctica, técnica, artefacto o estándar | Ninguna | No | muchos a muchos | No | Técnica | Adoptada |
| `evaluated-by` / es evaluado por | Valoración sin acreditación. | entidad → métrica, indicador, práctica o modelo | Ninguna | No | muchos a muchos | No | Técnica/contextual | Adoptada |
| `alternative-to` / es alternativa a | Capacidad comparable en contexto. | entidades funcionalmente comparables ↔ | La misma | Sí | muchos a muchos | Sí | Comparativa | Adoptada |
| `complementary-to` / es complementario de | Capacidades distintas combinables. | entidades combinables ↔ | La misma | Sí | muchos a muchos | Sí | Contextual | Adoptada |
| `similar-to` / es similar a | Semejanza relevante no equivalente. | entidades comparables ↔ | La misma | Sí | muchos a muchos | Sí | Contextual | Adoptada |
| `confused-with` / se confunde con | Confusión frecuente entre significados distintos. | entradas distintas ↔ | La misma | Sí | muchos a muchos | Sí | Editorial | Derivada de `confusedWith` |
| `evolved-from` / evolucionó a partir de | Antecedente histórico directo. | entrada posterior → antecedente compatible | Ninguna adoptada | No | muchos a muchos | No | Histórica | Adoptada |
| `influenced-by` / fue influido por | Influencia sin linaje directo. | entrada influida → idea, práctica, modelo, estándar o tecnología | Ninguna | No | muchos a muchos | Solo influencia mutua fechada | Histórica | Adoptada |
| `supersedes` / sustituye normativamente a | Sucesión de estándar/publicación. | versión nueva → versión anterior | `superseded-by` | No | uno a uno ordinario | No | Versionada | Adoptada o derivada de `supersedes[]` |
| `superseded-by` / fue sustituido normativamente por | Consulta de versión sucesora. | versión anterior → nueva | `supersedes` | No | uno a uno ordinario | No | Heredada | Derivada inversa |
| `replaces` / reemplaza | Sustitución canónica. | sustituto → entrada anterior | `replaced-by` | No | uno a uno ordinario | No | Factual/editorial | Adoptada o generada desde `replacedBy` |
| `replaced-by` / es reemplazado por | Destino canónico de deprecación. | entrada anterior → sustituto | `replaces` | No | cero o uno ordinario | No | Factual/editorial | Derivada de `replacedBy` |
| `version-of` / es versión de | Pertenencia a familia versionada. | versión con identidad → familia compatible | Ninguna | No | muchos a uno | No | Versionada | Adoptada |
| `related-to` / está relacionado con | Asociación relevante sin clave más precisa. | entradas canónicas compatibles ↔ | La misma | Sí | muchos a muchos | Sí | Justificación específica | Adoptada con restricción |

### 6.2 Disposición de relaciones candidatas

La tabla siguiente registra consolidaciones, reservas y descartes para que ninguna clave candidata se reintroduzca por desconocimiento.

| Clave candidata | Familia | Estado | Clave oficial o tratamiento | Justificación |
|---|---|---|---|---|
| `belongs-to-domain` | Taxonómica | Derivada | `primaryDomain` | Hogar único ya tipado. |
| `belongs-to-subdomain` | Taxonómica | Derivada | `subdomains` | Ubicación específica ya tipada. |
| `home-domain` | Taxonómica | Derivada | `homeDomain` | Hogar de disciplina ya tipado. |
| `applies-to-domain` | Taxonómica | Derivada | `applicationDomains` / `secondaryDomains` | Transversalidad ya tipada. |
| `parent-domain` | Taxonómica | Derivada | `parentDomain` | Autoridad única del subdominio. |
| `contains-subdomain` | Taxonómica | Derivada | inversa de `parentDomain` | Evita contradicción. |
| `requires` | Dependencia | Derivada para campos; adoptada fuera de ellos | `prerequisites` o `requires` | El campo es autoridad cuando existe; la clave cubre dependencias canónicas no representadas por ese campo. |
| `prerequisite-of` | Dependencia | Derivada | inversa de `requires` | No duplicar ambos lados. |
| `recommended-before` | Dependencia | Adoptada | `recommended-before` | Progresión no indispensable. |
| `next-step` | Dependencia | Descartada | orden de `learning-path.entries[]` | Depende de ruta. |
| `builds-on` | Dependencia | Adoptada | `builds-on` | Extensión conceptual verificable. |
| `uses` | Uso | Adoptada | `uses` | Uso activo general. |
| `used-by` | Uso | Derivada | inversa de `uses` | Evita duplicación. |
| `applies` | Uso | Descartada | `applies-to` | Dirección ambigua. |
| `applies-to` | Uso | Adoptada | `applies-to` | Aplicación no taxonómica. |
| `implements` | Implementación | Adoptada | `implements` | Realización concreta. |
| `implemented-by` | Implementación | Derivada | inversa de `implements` | Consulta inversa. |
| `supports` | Uso | Adoptada | `supports` | Habilitación distinta de implementación. |
| `supported-by` | Uso | Derivada | inversa de `supports` | Consulta inversa. |
| `part-of` | Composición | Adoptada | `part-of` | Composición general controlada. |
| `has-part` | Composición | Derivada | inversa de `part-of` | Consulta inversa. |
| `composed-of` | Composición | Descartada | `has-part` | Sin diferencia verificable. |
| `component-of` | Composición | Descartada | `part-of` | “Componente” es contexto de la parte. |
| `contains` | Composición | Descartada | `has-part` o relación específica | Excesivamente ambigua. |
| `instance-of` | Composición | Adoptada | `instance-of` | Instanciación con identidad. |
| `example-of` | Composición | Descartada | `examples[]` o `instance-of` | Ejemplo ordinario no es arista. |
| `produces` | Flujo | Adoptada/derivada según campo | `produces` | Autoridad en campos tipados cuando existan. |
| `produced-by` | Flujo | Derivada | inversa o `artifact.producedBy[]` | Evita duplicación. |
| `consumes` | Flujo | Adoptada/derivada según campo | `consumes` | Autoridad en campos tipados cuando existan. |
| `consumed-by` | Flujo | Derivada | inversa o `artifact.consumedBy[]` | Evita duplicación. |
| `input-to` | Flujo | Descartada | `consumed-by` / `inputs[]` | Sin diferencia estable. |
| `output-of` | Flujo | Descartada | `produced-by` / `outputs[]` | Sin diferencia estable. |
| `performed-by` | Roles | Adoptada | `performed-by` | Ejecutor contextual. |
| `performs` | Roles | Derivada | inversa de `performed-by` | Evita duplicación. |
| `responsible-for` | Roles | Adoptada/derivada | `responsibilities` o relación | Declaración estructurada es autoridad ordinaria. |
| `responsibility-of` | Roles | Derivada | inversa de `responsible-for` | Consulta inversa. |
| `requires-competency` | Roles | Derivada | `competencies` | Campo aprobado. |
| `competency-for` | Roles | Derivada | inversa de `competencies` | Consulta inversa. |
| `collaborates-with` | Roles | Derivada | `collaboratesWith` | Campo aprobado y simétrico. |
| `used-by-role` | Roles | Derivada y consolidada | `usedByRoles` → `used-by` | Vista tipada existente. |
| `measures` | Control | Adoptada/derivada | `propertyMeasured` o `measures` | Relación cuando la propiedad tiene ID. |
| `measured-by` | Control | Derivada | inversa de `measures` | Consulta inversa. |
| `indicates` | Control | Adoptada | `indicates` | Interpretación, no medición. |
| `governed-by` | Control | Adoptada | `governed-by` | Aplicación normativa contextual. |
| `governs` | Control | Derivada | inversa de `governed-by` | Consulta inversa. |
| `constrained-by` | Control | Adoptada | `constrained-by` | Restricción distinta de gobierno. |
| `verified-by` | Control | Adoptada | `verified-by` | Evidencia de conformidad/corrección. |
| `evaluated-by` | Control | Adoptada | `evaluated-by` | Evaluación sin certificación. |
| `certified-by` | Control | Reservada | `certification.issuer` | Falta tipo referenciable de emisor. |
| `alternative-to` | Comparación | Adoptada | `alternative-to` | Sustitución contextual, no canónica. |
| `complementary-to` | Comparación | Adoptada | `complementary-to` | Capacidades combinables. |
| `similar-to` | Comparación | Adoptada | `similar-to` | Semejanza dimensionada. |
| `confused-with` | Comparación | Derivada | `confusedWith` | Campo aprobado; puede motivar comparación. |
| `contrasts-with` | Comparación | Descartada | `comparison` | Requiere dimensiones. |
| `evolved-from` | Evolución | Adoptada | `evolved-from` | Linaje histórico no sustitutorio. |
| `influenced-by` | Evolución | Adoptada | `influenced-by` | Influencia documentada. |
| `supersedes` | Evolución | Adoptada/derivada | `standard.supersedes[]` o relación | Sucesión normativa/versionada. |
| `superseded-by` | Evolución | Derivada | inversa de `supersedes` | Consulta inversa. |
| `replaces` | Evolución | Adoptada | `replaces` | Sustitución canónica leída desde lo nuevo. |
| `replaced-by` | Evolución | Derivada | `replacedBy` | Autoridad en metadatos de lo anterior. |
| `deprecated-in-favor-of` | Evolución | Descartada | `deprecated` + `replacedBy` | Duplicaría gobierno de deprecación. |
| `version-of` | Evolución | Adoptada | `version-of` | Versión con identidad propia. |
| `related-to` | Asociación | Adoptada con restricción | `related-to` | Último recurso con nota obligatoria. |

Las claves inversas mencionadas solo para consulta, como `has-domain-member` y `hosts-discipline`, no forman parte del enum persistible. El catálogo puede exponerlas como vistas internas sin convertirlas en datos editoriales.

## 7. Claves técnicas

1. `relationType` utiliza ASCII minúsculo en `kebab-case` y cumple `^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$`.
2. Una clave representa una sola semántica verificable. No se aceptan `depends-on`, `linked-to`, `works-with`, `associated-with` ni verbos equivalentes ambiguos.
3. La dirección forma parte del contrato. Cambiar sujeto y objeto exige una inversa declarada, no reinterpretar la misma clave.
4. Las inversas tienen clave propia solo cuando aportan lectura editorial o consulta clara; ordinariamente se generan y no se persisten.
5. Las claves no incorporan tipo, dominio, interfaz, versión del sitio ni idioma.
6. Una corrección de nombre editorial no cambia la clave si conserva semántica.
7. Una clave deprecada recibe sustituto, fecha, motivo y plan de migración en el contrato versionado; nunca se reutiliza con otro significado.
8. Los aliases temporales de claves solo sirven al migrador y no son valores válidos para contenido nuevo.

Válidas: `requires`, `recommended-before`, `implemented-by`, `collaborates-with`, `version-of`. Inválidas: `RelatedTo`, `related_to`, `uses/tool`, `depends`, `is-related-with`, `relation-1`, `applies`.

## 8. Dirección e inversas

### 8.1 Reglas

- Las relaciones persistidas se almacenan desde la dirección canónica indicada en la sección 5.
- Una inversa generada se materializa en índices o navegación derivada, no en el archivo destino.
- Las simétricas (`alternative-to`, `complementary-to`, `similar-to`, `confused-with`, `collaborates-with`, `related-to`) representan una sola arista lógica. El almacenamiento físico puede normalizarse desde uno de los lados; mientras no exista esquema ejecutable, el lote debe evitar duplicarla y el revisor debe verificar ambos IDs.
- Ninguna relación exige que los dos archivos se modifiquen si la inversa se genera.
- Cuando un campo especializado sea autoridad, el índice relacional se genera desde ese campo.

### 8.2 Inconsistencias

- Si A `requires` B, la consulta B `prerequisite-of` A debe derivarse. Su ausencia física no es error; una inversa física contradictoria sí lo es.
- A `replaces` B y B `replaces` A es sustitución circular y error.
- Una relación simétrica duplicada con notas incompatibles es error semántico; con notas equivalentes es duplicación.
- `implements` y `implemented-by` con pares distintos, `produces` y `produced-by` incompatibles o `governed-by` y `governs` contradictorios son errores.
- Si la relación directa apunta a contenido deprecado, la resolución no salta automáticamente al sustituto: debe comprobarse que el significado se conserva.

## 9. Cardinalidad

### 9.1 Notación y reglas generales

- **Uno a uno:** cada origen y destino admite como máximo una contraparte en ese contexto.
- **Uno a muchos:** un origen admite varios destinos; cada destino, un origen bajo esa semántica.
- **Muchos a uno:** varios orígenes comparten un destino; cada origen, uno.
- **Muchos a muchos:** ambos lados pueden tener varias contrapartes.
- **Cero o uno:** la ausencia es válida; si existe, no se repite.
- **Uno o más:** al menos una referencia es necesaria por contrato especializado.

### 9.2 Casos obligatorios

| Caso | Cardinalidad semántica |
|---|---|
| Dominio principal de entidad | Exactamente uno cuando `primaryDomain` aplica; cero solo con excepción justificada. |
| Padre de subdominio | Exactamente uno. |
| Dominio hogar de disciplina | Cero o uno; normalmente uno cuando es razonable. |
| Dominios secundarios | Cero o más, únicos, distintos al principal y sustantivos. |
| Sustitución canónica | Ordinariamente cero o un sustituto; uno o más solo para división documentada. Nunca circular. |
| Alias y `legacyIds` | Muchos nombres o IDs resuelven a una entrada; no son relaciones ni destinos. |
| Rol y responsabilidades | Muchos a muchos; la declaración estructurada puede carecer de ID. |
| Estándar y versiones | Varias versiones pueden pertenecer a una familia; una versión tiene una familia. `supersedes` forma un linaje acíclico. |
| Certificación y emisor | Una certificación identifica un emisor en su campo; un emisor puede emitir varias. Relación reservada hasta existir tipo de emisor. |
| Comparación y entradas | Una comparación exige dos o más IDs únicos; no crea automáticamente relaciones globales entre cada par. |
| Ruta y entradas | Una ruta contiene una o más entradas ordenadas según su contrato; una entrada puede aparecer en varias rutas. |
| Escenario y participantes | Cero o más roles pertinentes; un rol puede participar en varios escenarios. Los mínimos editoriales se definirán en calidad. |

La cantidad visible de tarjetas, enlaces o resultados nunca reduce estas cardinalidades semánticas.

## 10. Compatibilidad entre tipos

### 10.1 Grupos de tipos

| Código | Tipos aprobados |
|---|---|
| TAX | `domain`, `subdomain`, `discipline` |
| PEOPLE | `role`, `position`, `competency`, `responsibility` |
| IDEA | `concept`, `principle`, `paradigm`, `conceptual-orientation`, `model` |
| WORK | `methodology`, `work-framework`, `process`, `practice`, `technique` |
| SOLUTION | `pattern`, `architectural-style` |
| IMPL | `protocol`, `standard`, `technology`, `tool`, `platform`, `service`, `product` |
| RESULT | `artifact`, `metric`, `indicator` |
| CREDENTIAL | `certification` |
| EDITORIAL | `comparison`, `scenario`, `learning-path` |

`source` respalda relaciones mediante `sourceIds`; no es destino de relaciones semánticas ordinarias. `area` y `collection` organizan contenido editorial y no conceden pertenencia taxonómica.

### 10.2 Matriz por familia

| Familia / relación | Origen permitido | Destino permitido | Restricción destacada |
|---|---|---|---|
| Taxonómicas | Entidades/TAX según sección 5.1 | `domain` o `subdomain` | Siempre derivadas de campos. |
| `requires`, `recommended-before` | IDEA, WORK, SOLUTION, IMPL, PEOPLE, TAX disciplinar, EDITORIAL ruta | IDEA, WORK, SOLUTION, IMPL, TAX disciplinar | Debe ser conocimiento comprensible, no archivo de interfaz. |
| `builds-on` | IDEA, WORK, SOLUTION, IMPL | IDEA, WORK, SOLUTION | Extensión conceptual, no mera cronología. |
| `uses` | PEOPLE rol, WORK, IMPL | WORK, IMPL, RESULT | Uso activo y verificable. |
| `applies-to` | IDEA normativa, WORK, `discipline` | PEOPLE, WORK, SOLUTION, IMPL, RESULT | Aplicación no taxonómica. |
| `implements` | IMPL concreta | IDEA modelo, SOLUTION, `protocol`, `standard`, `technology` abstracta | La conformidad parcial se anota. |
| `supports` | WORK, IMPL, RESULT | PEOPLE, WORK, SOLUTION, IMPL | Debe existir mecanismo habilitador. |
| `part-of` | WORK, IMPL, RESULT, SOLUTION | WORK, IMPL, RESULT, SOLUTION | Tipos compatibles y todo estructural. |
| `instance-of` | IMPL, RESULT, EDITORIAL escenario | IDEA, SOLUTION, IMPL abstracta | La instancia merece identidad propia. |
| Producción/consumo | PEOPLE rol, WORK, IMPL, EDITORIAL escenario | RESULT, IMPL servicio/producto | Un conocimiento no es insumo por estudiarse antes. |
| Ejecución/roles | WORK | `role` | `position` solo se representa mediante roles típicos o contexto organizacional. |
| Responsabilidad | `role`, `position` | `responsibility`, RESULT, WORK | No equivale a competencia. |
| Competencia | `role`, `position` | `competency` | Derivada de campo. |
| Colaboración | `role` | `role` | Simétrica y contextual. |
| Medición | `metric`, `indicator` | IDEA, WORK, IMPL, RESULT | Separar cuantificación de interpretación. |
| Gobierno/control | WORK, SOLUTION, IMPL, RESULT, CREDENTIAL | `standard`, IDEA normativa, `work-framework`, WORK técnica, RESULT medición | Exige contexto y evidencia. |
| Comparación | Cualquier tipo con pares semánticamente comparables | Mismo grupo o grupo funcionalmente comparable | Alias y duplicados no son comparaciones. |
| Evolución/versiones | Tipos conceptualmente compatibles | Misma familia semántica o antecedente documentado | Sustitución exige identidad/función compatible. |
| `related-to` | TAX no jerárquica, PEOPLE, IDEA, WORK, SOLUTION, IMPL, RESULT, CREDENTIAL | Los mismos | Último recurso; no une fuentes ni áreas visuales. |

Las combinaciones no enumeradas son incompatibles por defecto. Una necesidad legítima nueva requiere propuesta al catálogo, no ampliar silenciosamente una fila.

## 11. Relaciones derivadas frente a persistidas

| Campo aprobado | Interpretación | Tratamiento |
|---|---|---|
| `primaryDomain` | `belongs-to-domain` | Permanece vista tipada y autoridad; relación derivada, no persistida. |
| `subdomains` | En entidad: `belongs-to-subdomain`; en dominio: colección validada contra `parentDomain`. | Se conserva; no duplicar. |
| `secondaryDomains` | `applies-to-domain` para entidad | Se conserva; exige justificación contextual. |
| `disciplines` | Clasificación por disciplina, no `part-of`. | Se conserva como vista tipada; puede generar índice de miembros, no arista jerárquica. |
| `prerequisites` | `requires` | Se conserva y es autoridad; `prerequisite-of` se genera. |
| `related` | Asociación general transitoria | Propuesta de migración a `relations[]` con `related-to` o clave específica; deprecar después de migración, sin modificar ahora el modelo. |
| `confusedWith` | `confused-with` simétrica | Se conserva como vista tipada; requiere explicación o comparación. |
| `usedByRoles` | Recurso `used-by` rol / rol `uses` recurso | Se conserva; genera inversa. |
| `responsibilities` | Declaraciones y referencias de responsabilidad | Estructura especializada; solo deriva `responsible-for` si el objeto contiene ID válido. |
| `competencies` | `requires-competency` | Se conserva y genera `competency-for`. |
| `replacedBy` | `replaced-by` | Se conserva como autoridad de deprecación; puede generar `replaces`. |
| `neighborDomains` | Vecindad curada entre dominios | Se conserva como vista especializada de navegación semántica; no se convierte automáticamente en `related-to`. Debe ser recíproca y justificar frontera. |
| `relatedDisciplines` | Disciplinas relevantes para un dominio | Se conserva como clasificación transversal de dominio; no implica hogar ni aplicación universal. |
| `collaboratesWith` | `collaborates-with` | Se conserva como vista tipada simétrica. |
| `contextualTypes` | Tipos secundarios del mismo registro | Metadato de clasificación; nunca relación ni entrada separada. |

Otros campos especializados siguen la misma regla: `parentDomain`, `homeDomain`, `applicationDomains`, `relatedDomains`, `producedBy`, `consumedBy`, `inputs`, `outputs`, `supersedes`, `components`, `typicalRoles`, `applicableRoles`, `metricRefs`, `comparedEntries`, `participants`, `domains`, `concepts`, `relatedContent` y entradas de ruta son autoridades dentro de su estructura. Solo derivan una relación global cuando la semántica del campo coincide exactamente y el contrato lo permite.

Existe un conflicto de evolución, no una contradicción material: `related` fue aprobado como comodidad transitoria y `relations[]` como contenedor final. Se propone registrar en `docs/10-decision-log.md` una migración futura que clasifique cada valor de `related`, lo mueva a una clave específica o `related-to`, y depreque el campo solo después de actualizar contenido, esquemas y consumidores. Este documento no modifica el modelo actual.

## 12. Relevancia y densidad

Una relación se conserva solo si aporta contexto educativo, responde una pregunta concreta, utiliza la clave más específica, puede justificarse y no se limita a compartir dominio, fuente, palabra o pantalla.

Orden de prioridad para revisión:

1. esenciales para identidad, pertenencia, prerrequisito, vigencia o cumplimiento;
2. necesarias para comprender mecanismo, uso, producción o colaboración;
3. complementarias para contraste, historia o exploración;
4. asociaciones generales, que son las primeras candidatas a eliminar.

No se fija un máximo definitivo. Como orientación no automática, una ficha debe conservar un conjunto pequeño y deliberado; cuando las relaciones secundarias dominan la explicación, varias compiten por el mismo significado o `related-to` aparece repetidamente, se emite advertencia y se exige revisión humana. Una relación débil no se salva mediante una nota larga. Los umbrales por tipo, estado y lote corresponden a `docs/09-quality-criteria.md`.

## 13. Ciclos y transitividad

| Relación/familia | Ciclos | Transitividad |
|---|---|---|
| Jerarquía dominio/subdominio y hogar | Prohibidos. | No hay tercer nivel; no inferir más jerarquía. |
| `requires` | Prohibidos. | El alcance puede analizarse transitivamente, pero solo se persisten prerrequisitos directos y mínimos. |
| `recommended-before` | Admitidos solo con justificación; normalmente indican orden inestable. | No transitiva. |
| `builds-on` | Prohibidos ordinariamente. | No transitiva por defecto. |
| `part-of` | Prohibidos. | Solo composición homogénea y estricta; no atravesar tipos o contextos. |
| Producción/consumo y soporte | Permitidos si describen un bucle operativo real. | No transitivas. |
| Sustitución y `supersedes` | Prohibidos. | Se puede resolver el linaje hasta lo vigente, sin persistir aristas indirectas. |
| `evolved-from` | Prohibidos. | No transitiva automáticamente. |
| `influenced-by` | Influencia mutua solo con fechas y evidencia; de otro modo advertencia/error. | No transitiva. |
| Similitud, alternativas, complementariedad y confusión | Los triángulos son posibles. | Nunca transitivas. |
| Colaboración | Redes cíclicas válidas. | Nunca transitiva. |
| Rutas | El orden es lineal o ramificado dentro de la estructura; una ruta no crea ciclos de prerrequisitos. | La posición no es relación transitiva global. |

Un ciclo es válido cuando la propia semántica representa interacción, retroalimentación o red simétrica. Es error cuando hace imposible un orden (`requires`), vuelve a una parte su propio todo, crea sustitución circular o viola la jerarquía.

## 14. Relaciones y fuentes

| Clase de relación | Respaldo esperado |
|---|---|
| Estructural derivada del modelo | La autoridad es el campo válido y el documento que aprobó la clasificación; no requiere repetir fuentes en cada arista derivada. |
| Taxonómica aprobada | Decisión o fuente interna trazable; evidencia externa cuando la frontera dependa de una definición externa. |
| Factual verificable | `sourceIds` cuando no sea conocimiento estable o cuando tenga impacto relevante. |
| Editorial | Justificación revisable; una fuente externa puede ser innecesaria si se identifica como decisión de IT Study. |
| Decisión propia de IT Study | `decisionRefs` o fuente interna; no presentarla como consenso universal. |
| Temporal, histórica o de versión | `sourceIds` obligatorios con fecha/versión suficiente. |
| Comercial, producto o capacidad vigente | `sourceIds` obligatorios, preferentemente oficiales y con revisión de vigencia conforme a la política futura. |
| Gobierno, restricción o certificación | Fuente normativa/institucional y alcance explícito. |

`sourceIds` referencia registros normalizados y no repite autor, título, URL ni bibliografía completa. Una fuente incluida en la ficha no respalda automáticamente todas sus relaciones; debe figurar en la arista cuando esta necesite evidencia específica.

## 15. Uso de `note`

`note` explica el alcance concreto, condición, mecanismo o sentido de la relación. Se redacta en español formal, conserva los términos técnicos en inglés cuando sean predominantes y se mantiene breve.

- **Obligatoria:** `related-to`; relaciones parciales o condicionadas; `alternative-to` y `similar-to`; `indicates`; gobierno/restricción con jurisdicción o versión; reemplazo parcial; y cualquier arista que pueda leerse erróneamente como universal.
- **Recomendada:** transversalidad, colaboración, influencia, evolución, complementariedad, aplicación y progresión no indispensable.
- **Innecesaria:** inversa generada; pertenencia o padre inequívocos derivados de campos; relación cuyo significado completo sea evidente y esté respaldado.
- **Insuficiente:** cuando intenta justificar una relación incompatible, sustituir fuentes obligatorias, esconder otra arista, corregir un destino inexistente, convertir un alias en entrada o resumir una comparación multidimensional.

No debe copiar `definition`, enumerar ventajas, incluir más de una relación implícita ni usar expresiones visuales.

## 16. Relaciones en comparaciones

- `confused-with` identifica una confusión, pero no sustituye una comparación con dimensiones.
- `alternative-to` expresa sustitución contextual y no declara ganador ni equivalencia completa.
- Las dimensiones y valores de `comparison.dimensions[]` pertenecen a esa comparación; no son relaciones globales.
- Una comparación puede descubrir una implementación, influencia o alternativa, pero cada arista nueva se valida y respalda por separado.
- `comparedEntries[]` exige entradas canónicas existentes y no copia sus definiciones.
- Una diferencia simple puede resolverse con `confused-with` y nota; decisiones con varias dimensiones, compromisos o tres o más entradas requieren `comparison`.

## 17. Relaciones en escenarios

Un escenario referencia participantes, dominios, conceptos, prácticas, decisiones, artefactos, riesgos y resultados mediante sus campos tipados. Esas referencias describen el caso narrado.

- `participants[]` no crea `performed-by` global.
- `domains[]` no concede pertenencia taxonómica.
- `events[].references` y `concepts[]` no crean `related-to`.
- `artifactsProduced[]` indica producción dentro del escenario; solo deriva `produces` global si la relación es estable fuera del caso.
- Una decisión narrativa no crea `governed-by`, `replaces` ni `recommended-before`.
- Riesgo y resultado del caso no se universalizan.

Una relación permanente debe sobrevivir al retirar el escenario y conservar verdad en otros contextos.

## 18. Relaciones en rutas de aprendizaje

La ruta mantiene orden curado, propósito de cada entrada, opcionalidad, puntos de verificación y progresión recomendada.

- `requires` se usa únicamente para conocimiento indispensable al nivel declarado.
- `recommended-before` expresa conveniencia general validada fuera de una ruta.
- La posición en `entries[]` solo expresa orden dentro de esa ruta.
- Una entrada opcional no se convierte en prerrequisito.
- Un `checkpoint` verifica reconocimiento o comprensión y no crea relación semántica.
- No se infiere que toda entrada anterior sea requisito de todas las posteriores.
- La secuencia puede cambiar por audiencia sin alterar relaciones globales.

## 19. Relaciones taxonómicas transversales

- El dominio hogar de una disciplina reside en `homeDomain`; sus aplicaciones, en `applicationDomains` y la relación derivada `applies-to-domain`.
- El dominio principal de una entidad reside en `primaryDomain`; `secondaryDomains` registra aplicaciones sustantivas, no etiquetas.
- `relatedDisciplines` conecta un dominio con disciplinas relevantes sin volverlas subdominios.
- `neighborDomains` expresa vecindad curada y frontera; no genera automáticamente `related-to` entre todas sus entradas.
- `overlaps[]` conserva naturaleza y criterio de frontera. Un solapamiento editorial no crea pertenencia jerárquica.
- Una disciplina se define una vez y no se duplica en cada dominio.

## 20. Alias, polisemia y duplicados

- Un alias es otra denominación del mismo significado y no una relación entre entradas.
- Un `legacyId` resuelve una identidad retirada y no representa una entrada independiente.
- Acepciones compatibles permanecen en `senses[]` o contexto equivalente dentro de la entrada.
- Significados incompatibles requieren IDs separados y pueden relacionarse solo si existe una relación educativa real.
- `confused-with` no oculta duplicados: si dos entradas significan lo mismo, deben consolidarse.
- `version-of` solo se usa cuando la versión merece identidad editorial y existe una familia canónica; no para traducciones, ediciones de formato o variantes menores.

## 21. Deprecación y migración

1. **Añadir:** documentar pregunta, compatibilidad, dirección, inversa, evidencia, ciclos, impacto y caso que no cubra el catálogo.
2. **Cambiar definición:** si amplía sin romper significado, incrementar versión menor del contrato y revalidar; si cambia significado, crear clave nueva.
3. **Cambiar compatibilidad:** analizar contenido existente, migración y severidad antes de restringir o ampliar.
4. **Consolidar:** elegir clave canónica, registrar equivalencias temporales y migrar de forma atómica.
5. **Retirar:** marcar clave, motivo, fecha, sustituto y última versión admitida; bloquear contenido nuevo.
6. **Migrar:** conservar aliases técnicos solo en herramientas de migración, actualizar referencias y validar inversas/ciclos.
7. **No reutilizar:** una clave retirada permanece reservada para siempre.
8. **Registrar:** todo cambio material se incorpora a `docs/10-decision-log.md` y aumenta `contractVersion` según compatibilidad.
9. **Revalidar:** revisar todo contenido que use la clave directa, sus inversas, campos derivados, comparaciones, escenarios y rutas afectadas.

## 22. Validaciones conceptuales

### 22.1 Errores

- `targetId` inexistente, mal formado, alias sin resolver o `legacyId` no canónico;
- `relationType` desconocido, retirado, reservado, derivado persistido o descartado;
- origen o destino incompatible;
- autorreferencia prohibida;
- cardinalidad incumplida;
- ciclo prohibido;
- inversas contradictorias;
- duplicado de `relationType + targetId` o doble almacenamiento de una simétrica;
- sustitución circular;
- subdominio con más de un dominio padre;
- prerrequisito circular no autorizado;
- relación almacenada mediante título, ruta o nombre de archivo;
- referencia a contenido `deprecated` sin justificación ni resolución consciente;
- `sourceIds` inexistentes, duplicados o incompatibles con la afirmación;
- `note` obligatoria ausente;
- persistir una relación cuya autoridad es un campo especializado;
- utilizar alias, `legacyIds` o `contextualTypes` como aristas;
- declarar gobierno, certificación o reemplazo sin identidad compatible.

### 22.2 Advertencias

- exceso de `related-to`;
- demasiadas relaciones secundarias para el valor educativo de la entrada;
- relación débil o basada solo en coocurrencia;
- inversa ausente cuando el contrato excepcionalmente no la genera;
- posible relación más específica;
- `note` que repite definición o supera la orientación de extensión;
- relación factual sin fuente;
- relación hacia contenido `needs-update`;
- posible duplicado semántico;
- cadena de prerrequisitos excesiva o con dependencias indirectas persistidas;
- ciclos permitidos sin nota contextual;
- dominio secundario o colaboración sin justificación suficiente;
- relación simétrica registrada en ambos lados.

### 22.3 Recomendaciones

- utilizar una clave más precisa;
- añadir contexto breve o fuente específica;
- transformar una confusión compleja en `comparison`;
- eliminar asociaciones irrelevantes;
- revisar dominio secundario;
- revisar si existe verdadera sustitución, evolución o solo alternativa;
- mover una referencia narrativa a su estructura especializada;
- consolidar duplicados o aliases antes de relacionar.

`docs/09-quality-criteria.md` establecerá severidades operativas, tolerancias y umbrales definitivos.

## 23. Ejemplos completos

Los IDs son lógicos y compatibles con la convención; no constituyen contenido aprobado.

### 23.1 Prerrequisito

```yaml
relations:
  - targetId: entity-http
    relationType: requires
    note: Es indispensable para comprender el intercambio sobre el que actúa esta entrada.
    sourceIds: [source-example-http]
```

### 23.2 Implementación

```yaml
relations:
  - targetId: entity-http
    relationType: implements
    note: Implementa las reglas de intercambio aplicables a la versión documentada.
    sourceIds: [source-example-official]
```

### 23.3 Uso por un rol

La autoridad ordinaria puede ser `usedByRoles: [entity-role-code-reviewer]`; de ella se deriva que el rol `uses` el artefacto. No deben persistirse ambos lados.

### 23.4 Proceso que produce un artefacto

```yaml
relations:
  - targetId: entity-artifact-architecture-decision-record
    relationType: produces
    sourceIds: [source-example-process]
```

### 23.5 Métrica que mide una propiedad

```yaml
relations:
  - targetId: entity-response-time
    relationType: measures
    note: Cuantifica duración observada; no identifica por sí sola la causa.
    sourceIds: [source-example-metric]
```

### 23.6 Estándar que gobierna o restringe

Desde la entrada del proceso:

```yaml
relations:
  - targetId: entity-standard-example-2026
    relationType: governed-by
    note: Aplica únicamente al alcance y versión indicados por la política adoptante.
    sourceIds: [source-example-standard]
```

### 23.7 Términos confundidos

```yaml
confusedWith: [entity-authorization]
```

Esto deriva `confused-with` de forma simétrica. Si la diferencia requiere varias dimensiones se crea una `comparison`, no otra nota extensa.

### 23.8 Alternativas

```yaml
relations:
  - targetId: entity-queue-technology-b
    relationType: alternative-to
    note: Ambas cubren entrega asíncrona, con diferencias de operación y garantías.
    sourceIds: [source-example-comparison]
```

### 23.9 Sustitución

En la entrada anterior se conserva:

```yaml
deprecated: true
replacedBy: [entity-standard-new]
```

Esto deriva `replaced-by` y su inversa `replaces`; no se agrega `deprecated-in-favor-of`.

### 23.10 Disciplina aplicada en varios dominios

```yaml
id: discipline-observabilidad
homeDomain: domain-infraestructura-operacion
applicationDomains:
  - domain-ingenieria-software
  - domain-redes-telecomunicaciones
  - domain-datos-analitica
```

Se derivan `home-domain` y tres `applies-to-domain`; no se crean copias de la disciplina.

### 23.11 Relación inválida y corrección

Inválido:

```yaml
relations:
  - targetId: "Redes y telecomunicaciones"
    relationType: related-to
    note: Aparece cerca en la navegación.
```

Corrección, si se trata del hogar principal:

```yaml
primaryDomain: domain-redes-telecomunicaciones
```

La corrección usa ID, campo especializado y semántica taxonómica; no inventa una asociación visual.

## 24. Lista de revisión

- [ ] ¿El origen y el destino existen y usan IDs canónicos?
- [ ] ¿La relación responde una pregunta concreta?
- [ ] ¿Existe una relación más específica?
- [ ] ¿La dirección es correcta?
- [ ] ¿La inversa debe derivarse?
- [ ] ¿Los tipos son compatibles?
- [ ] ¿La cardinalidad es válida?
- [ ] ¿El ciclo está permitido?
- [ ] ¿La relación aporta valor educativo?
- [ ] ¿La `note` aclara sin duplicar?
- [ ] ¿Requiere `sourceIds`?
- [ ] ¿Los términos técnicos en inglés mantienen su forma habitual?
- [ ] ¿La relación contradice la taxonomía?
- [ ] ¿Duplica un campo especializado?
- [ ] ¿Está basada en contenido aprobado?
- [ ] ¿Puede reutilizarse fuera de la interfaz?

## 25. Relación con documentos posteriores

| Documento o artefacto | Condicionamiento |
|---|---|
| `docs/06-design-boundaries.md` | Deberá impedir que presentación y navegación creen o cambien semántica relacional. |
| `docs/07-mvp-definition.md` | Seleccionará cobertura sin alterar el catálogo ni fijar relaciones por razones visuales. |
| `docs/08-production-batches.md` | Organizará dependencias y revisión de aristas por lote sin mezclar dominios ni duplicar fichas. |
| `docs/09-quality-criteria.md` | Fijará severidades, umbrales de densidad, tolerancias y aceptación. |
| `work/WORK-INSTRUCTIONS.md` | Traducirá este contrato en pasos para proponer y justificar relaciones. |
| `work/CONTENT-PRODUCTION-CONTRACT.md` | Definirá cómo entregar aristas, evidencia, excepciones y resultados de validación. |
| `work/REVIEW-CHECKLIST.md` | Convertirá la sección 24 y las validaciones en comprobaciones operativas. |
| `examples/` | Mostrará aplicaciones aprobadas sin ampliar claves ni tipos. |
| `inventories/` | Materializará IDs y vocabularios; no sustituirá fichas ni campos de autoridad. |
| `AGENTS.md` | Obligará a Codex y futuros agentes a preservar dirección, IDs, inversas, campos y migraciones. |
| Esquemas y validadores futuros | Implementarán enum, compatibilidad, cardinalidad, ciclos, fuentes y duplicación sin inventar correcciones editoriales. |

## 26. Decisiones y pendientes

### 26.1 Relaciones adoptadas

Se adoptan para persistencia, según compatibilidad y autoridad de campos: `requires`, `recommended-before`, `builds-on`, `uses`, `applies-to`, `implements`, `supports`, `part-of`, `instance-of`, `produces`, `consumes`, `performed-by`, `responsible-for`, `measures`, `indicates`, `governed-by`, `constrained-by`, `verified-by`, `evaluated-by`, `alternative-to`, `complementary-to`, `similar-to`, `evolved-from`, `influenced-by`, `supersedes`, `replaces`, `version-of` y `related-to`.

### 26.2 Relaciones consolidadas o descartadas

- `applies`→`applies-to`;
- `component-of`→`part-of`;
- `composed-of` y `contains`→`has-part` o relación específica;
- `example-of`→`examples[]` o `instance-of`;
- `input-to`→`consumed-by`/`inputs[]`;
- `output-of`→`produced-by`/`outputs[]`;
- `used-by-role`→`usedByRoles` y pareja `uses`/`used-by`;
- `contrasts-with`→estructura `comparison`;
- `deprecated-in-favor-of`→`deprecated` + `replacedBy`;
- `next-step`→orden interno de ruta.

### 26.3 Relaciones derivadas

Son derivadas las taxonómicas basadas en campos, las inversas declaradas, `requires-competency`, `competency-for`, `collaborates-with`, `confused-with`, `replaced-by` y las vistas producidas por campos especializados de flujo, rol, estándar y medición.

### 26.4 Decisiones heredadas

Se preservan la jerarquía exclusiva `dominio > subdominio`, disciplina transversal fuera de la jerarquía, área editorial sin pertenencia, una entrada canónica, IDs globales estables, referencias por ID, campos especializados, `contextualTypes`, estados, deprecación y estructuras de comparación, escenario y ruta.

### 26.5 Reservado para calidad

Se reservan severidades operativas finales, máximos por entrada o familia, umbrales de `related-to`, longitud exigible de notas, tolerancias de cadenas y condiciones de aprobación.

### 26.6 Reservado para diseño

Se reservan representación visual, agrupación, orden, expansión de inversas, controles, filtros y navegación. El diseño no podrá alterar significado ni crear aristas.

### 26.7 Reservado para producción por lotes

Se reservan orden de creación, dependencias entre lotes, evidencia mínima por entrega, manejo de destinos aún no producidos y proceso de reenvío editorial.

### 26.8 Migraciones para `docs/10-decision-log.md`

1. Clasificar y migrar gradualmente `related` hacia claves específicas o `related-to`, y decidir su deprecación posterior.
2. Definir el mecanismo físico de normalización para relaciones simétricas sin exigir escritura duplicada.
3. Registrar aliases técnicos temporales si contenido previo llegara a usar claves consolidadas.
4. Evaluar `certified-by` solo si se incorpora un tipo referenciable de organización/emisor o se normaliza `issuer` como ID.

### 26.9 Contradicciones encontradas

No se encontraron contradicciones materiales entre los seis documentos de autoridad. Se identificaron dos tensiones de evolución ya previstas por el modelo:

- `related` es un campo de conveniencia transitorio mientras `relations[]` es el contenedor relacional final; se resuelve mediante migración registrada, no modificando ahora el modelo.
- `certification.issuer` exige identificar al emisor, pero la taxonomía no adopta un tipo `organization`; por ello `certified-by` queda reservada y el campo existente conserva autoridad.

No se cambian taxonomía, modelo, IDs, tipos, estados, formato físico ni decisiones editoriales aprobadas.
