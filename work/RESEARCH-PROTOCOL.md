# IT Study — Protocolo operativo de investigación

## 1. Identificación y propósito

| Campo | Valor |
|---|---|
| Proyecto | IT Study |
| Nombre oficial | IT Study — Protocolo operativo de investigación |
| Ruta oficial | `work/RESEARCH-PROTOCOL.md` |
| Estado | **Aprobado** |
| Versión | `1.0.0` |
| Fecha | `2026-07-20` |
| Autoridad de aprobación | Responsable del proyecto, mediante instrucción explícita y después de comprobar la ausencia de contradicciones internas materiales |
| Ámbito | Investigación previa a la producción editorial, preparación de evidencia, mapa de afirmaciones y transferencia a reportes de lote |

### 1.1 Documentos de autoridad

Este protocolo aplica, en el orden indicado, los siguientes contratos vigentes:

1. `00-bootstrap-brief.md`;
2. `docs/00-project-charter.md`;
3. `docs/01-scope-and-audience.md`;
4. `docs/02-taxonomy.md`;
5. `docs/03-content-model.md`;
6. `docs/04-editorial-guidelines.md`;
7. `docs/05-relationship-rules.md`;
8. `docs/06-design-boundaries.md`;
9. `docs/07-mvp-definition.md`;
10. `docs/08-production-batches.md`;
11. `docs/09-quality-criteria.md`;
12. `docs/10-decision-log.md`;
13. `work/WORK-INSTRUCTIONS.md`.

Los documentos anteriores son contratos vigentes. Este protocolo los operacionaliza; no los reabre, sustituye, amplía ni reinterpreta. Ante un conflicto aparente prevalecerá la autoridad especializada correspondiente y se aplicará el procedimiento de escalamiento.

### 1.2 Propósito

Establecer un procedimiento reproducible para que ChatGPT Trabajo y otros agentes investiguen antes de redactar contenido educativo de IT Study. El protocolo transforma un alcance autorizado en preguntas, consultas, fuentes evaluadas, afirmaciones trazables, incertidumbre declarada y evidencia de cierre.

Debe permitir:

- investigar dentro de un lote sin ampliarlo silenciosamente;
- identificar las afirmaciones que requieren respaldo;
- localizar fuentes adecuadas al tipo de afirmación;
- contrastar definiciones, terminología, versiones y contextos;
- separar hechos, interpretaciones y decisiones propias de IT Study;
- detectar duplicados, conflictos, vacíos y dependencias;
- determinar si la evidencia permite redactar al nivel autorizado;
- documentar fuentes aceptadas, limitadas y descartadas;
- detener solo la parte bloqueada cuando el resto pueda continuar;
- transferir resultados a fichas y reportes sin convertir la investigación en contenido publicable por sí misma.

### 1.3 Alcance

Este protocolo gobierna la investigación de:

- entradas candidatas y afirmaciones materiales;
- relaciones, comparaciones, escenarios y rutas de aprendizaje;
- cuestiones taxonómicas, de identidad, duplicación, versión y vigencia;
- conceptos, roles, prácticas, estándares, protocolos, tecnologías, herramientas, plataformas, servicios, productos, artefactos, métricas, publicaciones y certificaciones;
- información estable, versionada, cambiante o emergente;
- seguridad, privacidad, cumplimiento y riesgo.

No produce contenido educativo, fichas, inventarios, lotes, schemas, validadores, código, arquitectura, UX/UI ni decisiones materiales.

### 1.4 Audiencia

- responsable del proyecto;
- chat coordinador;
- ChatGPT Trabajo y otros agentes de investigación o autoría;
- revisores editoriales, taxonómicos, técnicos, de fuentes, relaciones, accesibilidad y calidad;
- responsables de inventarios y lotes;
- Codex y responsables futuros de integración;
- responsables de producto, arquitectura, UX/UI, QA y publicación.

### 1.5 Responsabilidades que operacionaliza

- convertir el manifiesto o instrucción autorizada en un plan de investigación;
- formular preguntas investigables;
- localizar y evaluar evidencia;
- preparar clasificación provisional;
- mapear afirmaciones a fuentes;
- detectar contradicciones, incertidumbre y evidencia insuficiente;
- investigar duplicados, aliases y relaciones;
- registrar consultas y descartes relevantes;
- preparar reportes de investigación;
- recomendar cierre, continuación, bloqueo o escalamiento;
- autoevaluar la investigación antes de transferirla a producción o revisión.

ChatGPT Trabajo propone y documenta. No se autoaprueba, no acepta lotes, no integra, no publica y no resuelve asuntos `pending-resolution`.

### 1.6 Asuntos reservados para otros documentos

- jerarquía definitiva, suficiencia especializada, diversidad, formato bibliográfico, archivo y sustitución de enlaces: `work/SOURCE-POLICY.md`;
- contrato exacto de campos, estados, cambios, producción y reenvíos: `work/CONTENT-PRODUCTION-CONTRACT.md`;
- formato ejecutable del manifiesto y reportes: `work/BATCH-TEMPLATE.md`;
- checklist final, firmas, muestreo, responsables nominales y disposición: `work/REVIEW-CHECKLIST.md`;
- paquete técnico, integración y devolución de defectos: `work/HANDOFF-TO-CODEX.md`;
- schemas, validadores, CI, índices y build: Codex y fase técnica;
- términos e IDs concretos: `inventories/`;
- autorización y cierre de lotes: coordinación;
- decisiones materiales, excepciones y pendientes: `docs/10-decision-log.md`.

---

## 2. Posición dentro del sistema operativo

Este protocolo complementa:

- `work/WORK-INSTRUCTIONS.md`, como secuencia maestra, autoridad y prohibiciones;
- `work/CONTENT-PRODUCTION-CONTRACT.md`, como contrato exacto de producción;
- `work/BATCH-TEMPLATE.md`, como materialización del alcance y reportes;
- `work/SOURCE-POLICY.md`, como política completa de fuentes;
- `work/REVIEW-CHECKLIST.md`, como verificación y disposición independiente;
- `work/HANDOFF-TO-CODEX.md`, como transferencia a validación e integración.

### 2.1 Este documento sí define

- proceso de investigación;
- preparación de preguntas;
- estrategia de búsqueda;
- construcción y registro de consultas;
- contraste;
- manejo de contradicciones;
- mapa de afirmaciones;
- criterios de suficiencia investigativa;
- tratamiento de investigación incompleta;
- condiciones de cierre y detención;
- evidencia de cierre;
- continuidad, paralelización, escalamiento y autoevaluación.

### 2.2 Este documento no define

- jerarquía normativa definitiva de fuentes;
- cantidad uniforme de fuentes por ficha;
- formato bibliográfico final;
- contrato exacto de producción de campos;
- checklist de aprobación;
- schema ejecutable;
- integración técnica;
- inventario de términos;
- responsables nominales;
- calendarios uniformes de revisión;
- herramientas o proveedores obligatorios de búsqueda.

Una regla operativa de este protocolo no puede convertirse en una decisión de taxonomía, modelo, relación, calidad, producto o arquitectura.

---

## 3. Principios de investigación

1. **Investigar antes de redactar.** Ninguna afirmación material se formula primero para buscar después una justificación conveniente.
2. **Buscar evidencia para preguntas, no acumular enlaces.** Cada consulta responde una pregunta o reduce incertidumbre.
3. **Autoridad adecuada al tipo de afirmación.** Una fuente se evalúa por lo que puede respaldar.
4. **Fuente primaria cuando la afirmación lo exija.** Requisitos, versiones, capacidades propias, deprecaciones, normativa y protocolos requieren autoridad primaria cuando exista.
5. **Contraste proporcional al riesgo y controversia.** Mayor impacto, volatilidad o desacuerdo exige mayor contraste.
6. **Relevancia antes que cantidad.** Varias fuentes periféricas no sustituyen evidencia directa.
7. **Trazabilidad entre afirmación y evidencia.** Cada afirmación material debe relacionarse con fuentes y secciones utilizadas.
8. **Separación entre hecho, interpretación y decisión de IT Study.** La evidencia externa no decide la taxonomía ni la curaduría del proyecto.
9. **Incertidumbre explícita.** La falta de una conclusión única se documenta y condiciona redacción o aprobación.
10. **Neutralidad frente a proveedores.** Las fuentes de proveedor se usan donde son autoridad, sin universalizarlas.
11. **Terminología profesional antes que traducción artificial.** El término técnico en inglés prevalece cuando sea el uso profesional habitual.
12. **Fundamentos duraderos antes que novedades.** Se priorizan significado estable, contexto y capacidades generales.
13. **Versiones y fechas cuando cambien el significado.** Se registran cuando distinguen vigencia, compatibilidad, estado o alcance.
14. **No copiar extensamente las fuentes.** Se produce síntesis y paráfrasis original; las citas son breves y justificadas.
15. **No producir una conclusión más fuerte que la evidencia.** Posibilidad no equivale a necesidad, universalidad, causalidad o superioridad.
16. **No utilizar ausencia de resultados como prueba de inexistencia.** Se registra como limitación de búsqueda.
17. **No ampliar silenciosamente el lote.** Los candidatos descubiertos se separan.
18. **No inventar fuentes, autores, fechas, versiones o citas.** Todo dato bibliográfico debe ser verificable.
19. **Registrar descartes relevantes.** Especialmente los que parecían autoritativos, contradicen otra fuente o podrían reutilizarse por error.
20. **Detener únicamente el alcance bloqueado cuando sea posible continuar.** El bloqueo parcial queda delimitado y trazado.

---

## 4. Condiciones previas

No deberá comenzar una investigación sin:

- lote o instrucción autorizada;
- objetivo;
- candidatos o criterio de selección;
- dominios y tipos permitidos;
- profundidad;
- prioridad;
- alcance máximo;
- documentos de autoridad;
- dependencias;
- criterios de inclusión y exclusión;
- entregables;
- ubicación de reportes.

Antes de buscar fuentes, el investigador confirmará:

- qué elemento se investiga;
- qué identidad provisional tiene;
- qué tipo podría representar;
- qué preguntas debe responder;
- qué información no se necesita;
- qué decisiones están fuera de su autoridad;
- qué asuntos del decision log podrían afectarlo.

Si falta una condición material:

1. se registra la ausencia;
2. se explica su impacto;
3. se bloquea únicamente la parte afectada;
4. se continúa con unidades independientes;
5. no se inventa el dato ni la decisión faltante.

No se considera trabajo independiente redactar provisionalmente una unidad cuya identidad, tipo, dependencia central o evidencia esencial permanezcan ambiguos.

---

## 5. Unidad de investigación

Una **unidad de investigación** es el objeto mínimo que puede formularse como pregunta verificable y cerrarse con evidencia, limitación o escalamiento. Puede ser:

- una entrada candidata;
- una relación;
- una afirmación material;
- una comparación;
- una dimensión comparativa;
- una decisión dentro de un escenario;
- un paso pedagógico de una ruta;
- una cuestión taxonómica;
- una cuestión de vigencia.

Una ficha puede contener varias unidades y cada unidad puede requerir fuentes distintas. La unidad no equivale necesariamente a un archivo, una ficha completa ni una fuente.

### 5.1 Identificación mínima

Cada unidad registra:

- ID local de investigación;
- lote y alcance;
- entrada, estructura o relación afectada;
- pregunta principal;
- afirmación o decisión que habilitaría;
- criticidad;
- estabilidad esperada;
- evidencia necesaria;
- estado;
- responsable de resolución cuando exista bloqueo.

### 5.2 Criterios de división

Se divide una unidad cuando:

- agrupa afirmaciones de naturaleza distinta;
- una parte requiere fuente primaria y otra interpretación secundaria;
- combina versiones incompatibles;
- mezcla identidad, clasificación y comparación;
- una parte puede cerrarse y otra requiere decisión;
- el conflicto afecta solo una dimensión.

---

## 6. Preguntas de investigación

Antes de realizar consultas se crearán preguntas concretas. Para una entidad se evaluará, cuando aplique:

- ¿Qué es?
- ¿Qué naturaleza tiene?
- ¿Por qué existe?
- ¿Qué problema atiende?
- ¿En qué contexto aparece?
- ¿Qué límites tiene?
- ¿Quién la utiliza?
- ¿Qué prerrequisitos posee?
- ¿Con qué se relaciona?
- ¿Con qué se confunde?
- ¿Qué ventajas condicionadas tiene?
- ¿Qué limitaciones o trade-offs posee?
- ¿Qué ejemplos son representativos?
- ¿La terminología cambia según comunidad?
- ¿La información depende de versión o fecha?
- ¿Cuál es su fuente primaria más probable?

Las preguntas se adaptan al tipo y profundidad. No se investigan campos que no apliquen ni se busca información solo para llenar simétricamente una ficha.

### 6.1 Propiedades de una buena pregunta

Debe ser:

- específica;
- verificable;
- relacionada con un campo, relación o decisión;
- limitada al lote;
- neutral respecto de la respuesta esperada;
- sensible a contexto, versión y comunidad cuando aplique;
- suficientemente concreta para determinar cierre.

### 6.2 Priorización

Orden ordinario:

1. identidad y duplicados;
2. tipo y dominio evaluables;
3. definición, propósito y límites;
4. versión, estado y vigencia;
5. relaciones y prerrequisitos;
6. confusiones y comparaciones;
7. ventajas, limitaciones y ejemplos;
8. contexto complementario.

Una pregunta central bloqueante se atiende antes que detalles editoriales.

---

## 7. Matriz de preguntas por familia

### 7.1 Personas y capacidades

Tipos: rol, puesto, competencia y responsabilidad.

Investigar:

- finalidad;
- responsabilidades frecuentes;
- variación organizacional;
- competencias;
- colaboración;
- límites entre rol y puesto;
- ausencia de universalidad.

Preguntas adicionales:

- ¿La denominación describe una función o una plaza organizacional?
- ¿Qué responsabilidades son frecuentes y cuáles dependen del contexto?
- ¿Qué competencias permiten ejercer la función sin definir un seniority universal?
- ¿Con qué roles colabora y qué decisiones no le corresponden necesariamente?

No se utiliza una vacante aislada como definición universal ni se crea un inventario laboral.

### 7.2 Ideas y orientaciones

Tipos: concepto, principio, paradigma, filosofía u orientación y modelo.

Investigar:

- significado;
- nivel de abstracción;
- intención;
- fronteras;
- evolución;
- comunidades que usan el término.

Preguntas adicionales:

- ¿Describe una idea, una regla orientadora, una visión o una representación?
- ¿Es prescriptivo o descriptivo?
- ¿Qué términos cercanos tienen distinto nivel de abstracción?
- ¿Existe una formulación original o institucional?

### 7.3 Formas de trabajo

Tipos: metodología, framework, proceso, práctica y técnica.

Investigar:

- nivel de prescripción;
- alcance;
- actividades;
- roles;
- artefactos;
- contexto;
- diferencia frente a tipos cercanos.

Preguntas adicionales:

- ¿Define un sistema completo, una estructura adaptable, una secuencia, una conducta recurrente o un procedimiento puntual?
- ¿Qué partes son obligatorias según su autoridad y cuáles varían?
- ¿Qué resultados o artefactos produce?

### 7.4 Soluciones y estructuras

Tipos: patrón, antipatrón y estilo arquitectónico.

Investigar:

- problema recurrente;
- contexto;
- solución general;
- consecuencias;
- fuerzas;
- limitaciones;
- alternativas;
- uso histórico o actual.

Preguntas adicionales:

- ¿Qué problema repetido intenta resolver?
- ¿Qué fuerzas o restricciones condicionan la solución?
- ¿Qué consecuencias positivas y negativas aparecen?
- ¿Cuándo deja de ser apropiado?

### 7.5 Especificaciones e implementaciones

Tipos: protocolo, estándar, tecnología, herramienta, plataforma, servicio y producto.

Investigar:

- capacidad general;
- especificación;
- implementación;
- proveedor;
- versión;
- estado;
- compatibilidad;
- consumidores;
- límites;
- relación con alternativas.

Preguntas adicionales:

- ¿Es una regla de interoperabilidad, una capacidad técnica o una implementación concreta?
- ¿Quién mantiene la especificación o producto?
- ¿Qué afirmaciones dependen de versión o disponibilidad?
- ¿La fuente describe el concepto general o solo su producto?

### 7.6 Resultados y medición

Tipos: artefacto, métrica e indicador.

Investigar:

- qué representa;
- quién lo produce;
- quién lo consume;
- qué mide;
- cómo se interpreta;
- qué no puede inferirse.

Preguntas adicionales:

- ¿Es una salida de trabajo, una medida directa o una señal interpretativa?
- ¿Qué unidad, población, ventana o fórmula condiciona su lectura?
- ¿Qué conclusiones causales no pueden obtenerse?

### 7.7 Acreditación y referencia

Tipos: certificación, publicación y cuerpo de conocimiento.

Investigar:

- emisor;
- propósito;
- alcance;
- requisitos;
- vigencia;
- diferencia entre referencia y credencial.

Se respeta `decision-0014-certification-issuer-model`: `certification.issuer` conserva autoridad; no se inventa un tipo `organization`, un ID de emisor ni una relación `certified-by`.

---

## 8. Clasificación preliminar antes de buscar

Antes de diseñar consultas se registra provisionalmente:

- nombre;
- aliases conocidos;
- término profesional en inglés;
- siglas;
- posible tipo;
- posible dominio principal;
- posibles subdominios;
- posibles disciplinas;
- estabilidad esperada;
- riesgo de polisemia;
- riesgo de duplicado;
- riesgo de información comercial;
- riesgo de cambio temporal.

La clasificación es una **hipótesis investigativa**, no una decisión final. Sirve para orientar búsquedas y deberá poder cambiar ante evidencia sin alterar silenciosamente contratos ni inventarios.

### 8.1 Perfil de riesgo preliminar

| Riesgo | Señal | Tratamiento inicial |
|---|---|---|
| Polisemia | Definiciones incompatibles o comunidades distintas | Buscar acepciones y calificadores |
| Duplicado | Nombres, aliases o definiciones cercanas | Revisar inventarios, lotes e historial |
| Comercial | Resultados dominados por proveedores | Buscar capacidad general y evidencia independiente |
| Temporal | Versiones, planes, estado o disponibilidad cambiantes | Registrar fecha, versión y vigencia |
| Taxonómico | Encaja en varios tipos o dominios | Formular pregunta de frontera y escalar si es material |
| Normativo | Incluye obligación, conformidad o seguridad | Priorizar fuente primaria y jurisdicción |

---

## 9. Diseño de estrategia de búsqueda

La búsqueda se diseña en capas. No todas las capas aplican a todas las unidades.

### 9.1 Capa 1 — Identidad y definición

Buscar:

- nombre canónico;
- término en inglés;
- siglas;
- definiciones institucionales;
- estándares;
- documentación oficial;
- glosarios reconocidos.

Resultado esperado: identidad provisional, acepciones, fuente primaria probable y duplicados potenciales.

### 9.2 Capa 2 — Contexto y propósito

Buscar:

- problema atendido;
- contexto profesional;
- uso;
- participantes;
- decisiones;
- artefactos;
- escenarios.

Resultado esperado: propósito, límites de aplicación y contexto suficiente para la profundidad autorizada.

### 9.3 Capa 3 — Fronteras y confusiones

Buscar:

- diferencias;
- términos cercanos;
- comparaciones;
- variaciones terminológicas;
- discusiones académicas o institucionales.

Resultado esperado: límites, polisemia, términos confundibles y dimensiones comparables.

### 9.4 Capa 4 — Evidencia especializada

Buscar:

- versión;
- requisitos normativos;
- compatibilidad;
- riesgos;
- seguridad;
- métricas;
- historia;
- investigaciones relevantes.

Resultado esperado: respaldo para afirmaciones críticas, normativas, temporales, cuantitativas o controvertidas.

### 9.5 Capa 5 — Vigencia

Buscar:

- reemplazos;
- deprecaciones;
- versión actual;
- mantenimiento;
- disponibilidad;
- cambios materiales.

Resultado esperado: estado temporal delimitado y señales de revisión.

### 9.6 Adaptación

- Una idea estable puede necesitar principalmente capas 1 a 3.
- Un protocolo o estándar requiere capas 1, 4 y 5.
- Un producto cambiante requiere las cinco.
- Una comparación ejecuta las capas necesarias para cada lado y cada dimensión.
- Un rol requiere contraste organizacional, no necesariamente una versión.

---

## 10. Construcción de consultas

Las consultas pueden combinar:

- nombre exacto;
- alias;
- sigla;
- término en inglés;
- tipo esperado;
- dominio;
- organización emisora;
- `specification`, `standard`, `documentation`, `definition`, `architecture`, `role`, `practice`, `framework`, `version`, `deprecated` o `superseded` cuando corresponda;
- comparaciones específicas;
- exclusiones para reducir resultados promocionales.

Ejemplos conceptuales, no investigaciones reales:

```text
"<term>" official definition
"<term>" specification
"<term>" standard version
"<term>" vs "<related-term>"
site:<official-domain> "<term>"
"<term>" documentation -pricing -marketing
```

### 10.1 Secuencia de refinamiento

1. consulta nominal amplia;
2. consulta con tipo esperado;
3. consulta por emisor o dominio oficial;
4. consulta por conflicto, versión o comparación;
5. consulta de exclusión;
6. búsqueda dentro de la fuente localizada;
7. consulta adicional dirigida al vacío restante.

### 10.2 Límites de interpretación

- las consultas son instrumentos de descubrimiento;
- el texto de una consulta no es evidencia;
- la posición en resultados no demuestra autoridad;
- los snippets no sustituyen la lectura de la fuente;
- una respuesta generada por buscador o asistente no es fuente primaria;
- una coincidencia nominal no confirma identidad;
- una ausencia de resultados no prueba inexistencia.

---

## 11. Registro de consultas

Se mantiene un registro mínimo por sesión con:

- ID local;
- fecha;
- unidad investigada;
- pregunta;
- consulta;
- idioma;
- herramienta o buscador;
- filtros;
- resultados relevantes;
- resultados descartados;
- siguiente consulta;
- estado de la pregunta.

### 11.1 Estados de pregunta

- abierta;
- parcialmente respondida;
- respondida;
- en conflicto;
- bloqueada;
- no aplicable;
- escalada.

### 11.2 Regla de granularidad

No se registra cada variante irrelevante. Se conservan las consultas que permiten reconstruir:

- estrategia;
- cambio de hipótesis;
- descubrimiento de fuente primaria;
- tratamiento de un conflicto;
- búsqueda de duplicados;
- decisión de detener o continuar.

El registro de consultas no sustituye el registro de fuentes ni el mapa de afirmaciones.

---

## 12. Uso de fuentes primarias

Se priorizan cuando aplique:

- especificación oficial;
- estándar;
- RFC;
- norma;
- documentación del producto;
- documentación del lenguaje o framework;
- repositorio oficial;
- publicación del autor;
- organismo regulador;
- documentación institucional;
- paper original;
- documentación histórica oficial.

Se exige fuente primaria para:

- requisitos normativos;
- comportamiento de un protocolo;
- versión de un estándar;
- capacidades actuales de un producto;
- deprecación;
- compatibilidad;
- historia institucional;
- requisitos de certificación;
- afirmaciones del proveedor sobre su producto.

### 12.1 Evaluación de una primaria

Se comprueba:

- identidad del emisor;
- título y objeto;
- versión o fecha;
- estado;
- alcance;
- secciones utilizadas;
- si la afirmación es descriptiva, normativa o comercial;
- disponibilidad y permanencia;
- si existe errata, sustitución o documento posterior.

Una fuente primaria puede ser insuficiente para interpretar adopción general, efectos comparativos o prácticas de múltiples comunidades.

---

## 13. Uso de fuentes secundarias

Se utilizan para:

- contexto;
- síntesis;
- interpretación;
- comparación;
- terminología común;
- historia amplia;
- explicación pedagógica;
- identificación de controversias.

Una secundaria no sustituye una primaria necesaria.

Se evalúa:

- reputación;
- autoría;
- referencias;
- fecha;
- independencia;
- calidad editorial;
- relación directa con la afirmación;
- fidelidad al material primario.

Puede respaldar una afirmación cuando su autoridad y alcance son adecuados, pero no se eleva automáticamente por ser popular o didáctica.

---

## 14. Fuentes de proveedor

Una fuente de proveedor:

- es autoridad sobre su producto o servicio;
- puede describir funcionalidades, versiones, compatibilidad y deprecaciones;
- no demuestra por sí misma liderazgo, superioridad o adopción general;
- no gobierna la definición de una capacidad genérica;
- requiere contraste para comparaciones;
- se identifica como interesada cuando corresponda.

Neutralidad no significa excluir fuentes de proveedor. Significa limitar cada fuente a la afirmación para la cual posee autoridad y evitar lenguaje promocional.

### 14.1 Contraste obligatorio

Se añade evidencia independiente cuando la afirmación trate:

- comparación entre proveedores;
- adopción o uso general;
- superioridad;
- efectos causales;
- ausencia de alternativas;
- definición de una capacidad general;
- riesgo o limitación no reconocida por el proveedor.

---

## 15. Fuentes comunitarias y contenido informal

Incluye:

- blogs personales;
- foros;
- Stack Overflow;
- Reddit;
- videos;
- cursos;
- presentaciones;
- discusiones comunitarias;
- documentación no oficial.

Pueden utilizarse para:

- descubrir terminología;
- identificar confusiones;
- detectar casos reales;
- formular preguntas;
- localizar fuentes primarias;
- reconocer variación de comunidad.

No deberán sostener por sí solas afirmaciones normativas, de seguridad, interoperabilidad o capacidades actuales cuando existan fuentes de mayor autoridad.

### 15.1 Registro

Cuando influyan en una pregunta se registra:

- utilidad de descubrimiento;
- carácter anecdótico o comunitario;
- ausencia de autoridad normativa;
- fuente primaria localizada a partir de ellas;
- limitación para reutilización.

---

## 16. Papers y evidencia académica

Se consulta, según la pregunta:

- paper original;
- revisión sistemática;
- survey;
- publicación de conferencia;
- revista;
- preprint.

Se evalúa:

- fecha;
- revisión por pares;
- alcance;
- metodología;
- población;
- limitaciones;
- replicación;
- relación con la afirmación;
- diferencia entre resultado empírico y definición conceptual.

No se convierte un hallazgo aislado en regla universal. Un preprint se identifica como tal y no se presenta con la misma fuerza que un cuerpo de evidencia consolidado.

### 16.1 Selección por propósito

- Definición original: paper o publicación inicial.
- Estado amplio: survey o revisión.
- Efecto empírico: estudio con metodología aplicable.
- Controversia: múltiples estudios y limitaciones.
- Historia: publicación original más síntesis histórica fuerte.

---

## 17. Estándares, protocolos y normativa

Se investiga:

- emisor;
- título oficial;
- identificador;
- versión;
- fecha;
- estado;
- reemplazos;
- errata;
- alcance;
- terminología normativa;
- conformidad;
- referencias relacionadas.

Se distingue:

- estándar;
- propuesta;
- borrador;
- recomendación;
- especificación de proveedor;
- práctica común.

### 17.1 Procedimiento

1. identificar emisor y registro oficial;
2. confirmar título e identificador;
3. comprobar versión y estado;
4. revisar alcance y definiciones;
5. localizar requisitos normativos aplicables;
6. comprobar errata, actualización o reemplazo;
7. separar conformidad formal de adopción práctica;
8. mapear cada afirmación normativa a sección exacta;
9. registrar jurisdicción cuando corresponda;
10. declarar versiones históricas por separado.

La fuente más reciente no sustituye automáticamente una versión histórica que gobierna el contexto investigado.

---

## 18. Tecnologías, herramientas y productos

Procedimiento para evitar contenido promocional:

1. identificar la capacidad general;
2. identificar el tipo correcto;
3. localizar documentación oficial;
4. comprobar versión y vigencia;
5. separar características duraderas de detalles volátiles;
6. identificar límites;
7. contrastar afirmaciones generales;
8. registrar proveedor y marca como metadatos;
9. evitar precios, planes y rankings;
10. vincular la implementación con conceptos generales.

### 18.1 Evidencia esperada

- documentación oficial para capacidades propias;
- fuente independiente para afirmaciones generales o comparativas;
- versión y fecha para comportamiento cambiante;
- deprecación o reemplazo cuando exista;
- límites y compatibilidad;
- distinción entre capacidad, tecnología, herramienta, plataforma, servicio y producto.

Una implementación no se presenta como definición universal del problema que resuelve.

---

## 19. Tecnologías emergentes

Se investiga:

- definición actual;
- terminología inestable;
- fundamentos previos;
- madurez;
- adopción verificable;
- limitaciones;
- incertidumbre;
- fuentes recientes;
- señales de cambio;
- necesidad de revisión.

Se distingue:

- capacidad demostrada;
- expectativa;
- marketing;
- especulación;
- decisión de IT Study sobre inclusión.

No se utilizan palabras como “revolucionario” o “definitivo” sin atribución y análisis.

### 19.1 Condiciones adicionales

- usar fuentes recientes y diversas;
- identificar cuando la terminología no es uniforme;
- evitar inferir adopción a partir de anuncios;
- separar demostración de disponibilidad general;
- registrar riesgo de obsolescencia;
- proponer revisión sin inventar calendario uniforme;
- bloquear si la evidencia no permite una definición estable al nivel requerido.

---

## 20. Roles y puestos

Para investigar sin universalizar organizaciones:

- buscar descripciones institucionales y cuerpos profesionales;
- comparar varias organizaciones cuando sea necesario;
- identificar responsabilidades frecuentes;
- separar responsabilidad, competencia y puesto;
- registrar variaciones;
- evitar copiar vacantes como definición universal;
- no crear inventario laboral;
- no asumir seniority uniforme.

### 20.1 Resultado esperado

La investigación debe distinguir:

- núcleo frecuente del rol;
- variaciones por organización;
- competencias asociadas;
- colaboración;
- decisiones que no son universales;
- diferencia frente a puestos con nombres similares.

Cuando no exista universalidad se redactará de forma condicionada y se registrará la variación, no se forzará una definición organizacional única.

---

## 21. Comparaciones

Antes de producir una comparación se investiga:

- razón real de confusión;
- entradas canónicas;
- definiciones independientes;
- dimensiones equivalentes;
- similitudes;
- diferencias;
- contexto de elección;
- incompatibilidades;
- fuentes de cada lado;
- posibles sesgos.

No se utiliza una tabla de proveedor como única autoridad comparativa.

### 21.1 Reglas

- investigar cada entrada por separado antes de compararla;
- aplicar la misma pregunta y dimensión a todos los elementos;
- usar evidencia equivalente;
- no crear un ganador universal;
- distinguir diferencia conceptual de preferencia contextual;
- bloquear si existe un posible duplicado;
- no comparar aliases como entidades distintas;
- no usar una comparación para inventar una relación global.

---

## 22. Escenarios

Para un escenario se investiga:

- plausibilidad del contexto;
- participantes;
- dominios;
- secuencia;
- decisiones;
- artefactos;
- riesgos;
- resultados;
- variación organizacional.

Se distingue:

- evento plausible;
- práctica obligatoria;
- ejemplo ilustrativo;
- procedimiento operativo.

No se crean relaciones globales únicamente porque dos elementos coinciden en el escenario.

### 22.1 Evidencia

Se requiere evidencia para las afirmaciones materiales del escenario, no para cada detalle narrativo trivial. Las decisiones ilustrativas se presentan como opciones plausibles, no como políticas universales. Los temas de seguridad evitan detalle ofensivo innecesario.

---

## 23. Rutas de aprendizaje

Se investiga:

- audiencia;
- nivel inicial;
- dependencias reales;
- orden pedagógico;
- resultados;
- conceptos esenciales;
- puntos de verificación;
- posibles saltos.

Se distingue:

- prerrequisito indispensable;
- conocimiento recomendable;
- orden curado;
- continuación opcional.

La posición dentro de una ruta no demuestra automáticamente una relación `requires`.

### 23.1 Procedimiento

1. confirmar audiencia y resultado;
2. identificar conocimientos iniciales;
3. verificar prerrequisitos indispensables;
4. separar recomendaciones;
5. justificar cada transición;
6. comprobar que las entradas existen y están en estado adecuado;
7. buscar ciclos y saltos;
8. diseñar checkpoints conceptuales;
9. declarar opcionales;
10. evitar prometer especialización o certificación.

---

## 24. Mapa de afirmaciones

El **mapa de afirmaciones** es el artefacto operativo central de la investigación. Conecta lo que se pretende redactar con la evidencia que permite redactarlo.

Cada fila incluye:

- `claimId`;
- unidad o entrada;
- campo destino;
- afirmación;
- tipo de afirmación;
- criticidad;
- estabilidad;
- evidencia requerida;
- `sourceIds`;
- secciones utilizadas;
- estado de verificación;
- conflicto;
- limitaciones;
- decisión editorial;
- notas.

### 24.1 Tipos de afirmación

- definicional;
- taxonómica;
- causal;
- normativa;
- histórica;
- temporal;
- comparativa;
- cuantitativa;
- capacidad de producto;
- limitación;
- relación;
- decisión propia de IT Study.

### 24.2 Estados

- `unresearched`;
- `partially-supported`;
- `supported`;
- `conflicting`;
- `unsupported`;
- `not-applicable`;
- `editorial-decision`.

### 24.3 Reglas

- `supported` exige evidencia adecuada, no solo una URL;
- `partially-supported` identifica qué parte está cubierta;
- `conflicting` conserva las posiciones;
- `unsupported` no se redacta como hecho;
- `editorial-decision` identifica una decisión de IT Study y su autoridad interna;
- una afirmación puede requerir varias fuentes;
- una fuente puede respaldar varias afirmaciones;
- se registran secciones, no solo documentos completos;
- no se implementa todavía un archivo ni schema ejecutable.

### 24.4 Ubicación operativa

Para no cambiar la estructura aprobada de entregables, el mapa se incorpora como sección o anexo interno de `sources-report.md`, salvo que `work/BATCH-TEMPLATE.md` adopte posteriormente otra representación compatible.

---

## 25. Vinculación entre afirmaciones y campos

La investigación se mapea a:

- `summary`: identidad, naturaleza y valor de reconocimiento;
- `definition`: significado y límites;
- `problemSolved`: problema atendido, sin prometer eliminación total;
- `purpose`: intención y resultado esperado;
- `contextNotes`: variación, comunidad, alcance y condiciones;
- ejemplos: plausibilidad y representatividad;
- ventajas: beneficios condicionados;
- limitaciones: límites y trade-offs;
- relaciones: pregunta educativa, dirección y evidencia;
- confusiones: razón real y diferencia;
- estabilidad: naturaleza del cambio;
- vigencia: versión, estado, fecha, reemplazo y verificación.

Reglas:

- una fuente no necesita respaldar cada frase trivial;
- cada afirmación material debe ser rastreable;
- una fuente puede respaldar varias afirmaciones;
- una afirmación puede necesitar varias fuentes;
- una decisión taxonómica propia se atribuye a IT Study;
- el mapa no reemplaza la redacción ni el contrato de campos;
- el mismo texto no se copia entre campos para aparentar cobertura.

---

## 26. Evaluación inicial de fuentes

Sin sustituir `work/SOURCE-POLICY.md`, se consideran:

- autoridad;
- relevancia;
- actualidad;
- versión;
- independencia;
- transparencia;
- disponibilidad;
- precisión;
- alcance;
- trazabilidad;
- conflicto de interés;
- permanencia.

La evaluación produce:

- **aceptada para la afirmación**;
- **aceptada con limitaciones**;
- **útil solo para descubrimiento**;
- **requiere contraste**;
- **descartada**;
- **no verificable**.

### 26.1 Registro mínimo

- fuente;
- afirmación o pregunta;
- resultado;
- fundamento;
- limitaciones;
- versión y fecha cuando apliquen;
- secciones utilizadas;
- necesidad de contraste;
- riesgo de reutilización incorrecta.

La evaluación es específica para una afirmación: una fuente aceptada para describir su propio producto puede no ser aceptada para definir una capacidad genérica.

---

## 27. Contradicciones entre fuentes

Procedimiento obligatorio:

1. comprobar que hablan del mismo término y contexto;
2. revisar fechas y versiones;
3. revisar alcance;
4. revisar autoridad;
5. distinguir definición de opinión;
6. distinguir diferencia terminológica de contradicción factual;
7. buscar fuente primaria;
8. buscar evidencia independiente;
9. registrar posiciones;
10. evaluar si puede redactarse una conclusión condicionada;
11. declarar incertidumbre;
12. escalar si afecta identidad, clasificación o afirmación central.

### 27.1 Registro del conflicto

- unidad;
- afirmación;
- fuente y posición A;
- fuente y posición B;
- contexto, versión y fecha;
- naturaleza del desacuerdo;
- autoridad relativa para esa afirmación;
- evidencia adicional buscada;
- conclusión permitida;
- incertidumbre residual;
- impacto en redacción, relación o clasificación;
- decisión de continuar, bloquear o escalar.

No se selecciona automáticamente la fuente más reciente si una anterior gobierna una versión histórica. Tampoco se elige una fuente solo porque coincide con la conclusión esperada.

---

## 28. Tipos de desacuerdo

| Tipo | Tratamiento |
|---|---|
| Terminología diferente | Registrar aliases o usos por comunidad; no asumir identidad completa |
| Definición más amplia o estrecha | Delimitar alcance y adoptar redacción condicionada |
| Diferencia de versión | Separar versiones y gobernar por la aplicable |
| Diferencia por comunidad | Atribuir el uso y evitar universalidad |
| Diferencia regional | Registrar jurisdicción o región |
| Opinión | Atribuirla; no convertirla en hecho |
| Conflicto factual | Buscar primaria e independiente; bloquear si es central |
| Conflicto normativo | Determinar emisor, jurisdicción, versión y estado; escalar si persiste |
| Afirmación comercial | Limitar al proveedor y contrastar |
| Información obsoleta | Registrar vigencia, sustitución o descarte |
| Fuente frente a decisión de IT Study | Separar evidencia externa de autoridad interna; no reabrir la decisión |

Un desacuerdo no se oculta mediante una definición híbrida que ninguna fuente respalda.

---

## 29. Manejo de incertidumbre

Categorías:

- **confirmada**;
- **probable**;
- **dependiente del contexto**;
- **terminología no uniforme**;
- **evidencia limitada**;
- **fuentes en conflicto**;
- **cambiante**;
- **no verificable**.

La redacción deberá:

- no fingir certeza;
- identificar contexto;
- atribuir posiciones;
- evitar absolutos;
- declarar límites;
- separar decisiones propias.

### 29.1 Efecto operativo

| Situación | Tratamiento |
|---|---|
| Confirmada y no crítica | Continuar |
| Probable con evidencia convergente | Continuar con redacción prudente y nota si aporta valor |
| Dependiente del contexto | Declarar condiciones |
| Terminología no uniforme | Atribuir usos y conservar aliases cuando proceda |
| Evidencia limitada no central | Continuar con limitación explícita |
| Evidencia limitada central | Buscar fuente adicional o bloquear |
| Fuentes en conflicto | Aplicar sección 27; bloquear si afecta el núcleo |
| Cambiante | Registrar versión, fecha y revisión necesaria |
| No verificable | No afirmar; reducir, retirar o escalar |

### 29.2 Cuándo impide aprobación

- identidad no confirmada;
- tipo o dominio central no evaluable;
- afirmación normativa o de seguridad incierta;
- versión material desconocida;
- posible duplicado abierto;
- conflicto central sin conclusión segura;
- relación necesaria sin evidencia;
- afirmación central no verificable.

---

## 30. Investigación insuficiente

Se considera insuficiente cuando:

- no existe fuente adecuada para una afirmación central;
- solo existen fuentes promocionales;
- no puede confirmarse identidad;
- las versiones son incompatibles;
- no puede determinarse el tipo;
- no puede determinarse el dominio;
- una relación necesaria carece de evidencia;
- la información está materialmente desactualizada;
- existe contradicción no resoluble;
- la evidencia disponible excede el riesgo aceptable.

Procedimiento:

1. registrar qué falta;
2. registrar búsquedas realizadas;
3. registrar fuentes encontradas y descartadas;
4. reducir la fuerza de la afirmación cuando sea válido;
5. reducir el alcance de la entrada cuando conserve utilidad;
6. separar lo confirmado de lo no confirmado;
7. proponer investigación adicional;
8. bloquear la unidad cuando afecte su significado central;
9. escalar cuando requiera decisión.

No se inventa contenido para completar campos. Reducir fuerza o alcance no es válido si cambia la identidad o deja una explicación engañosa.

---

## 31. Condiciones de cierre de investigación

Una unidad puede considerarse investigada cuando:

- identidad suficientemente confirmada;
- tipo y dominio evaluables;
- afirmaciones centrales mapeadas;
- fuentes adecuadas registradas;
- versiones y fechas tratadas;
- contradicciones resueltas o declaradas;
- incertidumbre delimitada;
- fuentes descartadas relevantes registradas;
- relaciones materiales evaluadas;
- no existe una pregunta bloqueante sin registrar;
- la evidencia permite redactar al nivel requerido.

Cerrar investigación:

- no aprueba la entrada;
- no significa que no puedan aparecer fuentes mejores;
- no requiere agotar internet;
- no depende de un número fijo de fuentes;
- debe indicar limitaciones residuales.

### 31.1 Evidencia de cierre

- mapa de afirmaciones actualizado;
- preguntas con estado;
- fuentes y secciones;
- consultas principales;
- conflictos y disposición;
- incertidumbre;
- descartes relevantes;
- decisión de suficiencia;
- limitaciones;
- recomendación para redacción, investigación adicional, bloqueo o escalamiento.

---

## 32. Criterio de detención

La investigación deberá detenerse cuando:

- las preguntas materiales están suficientemente respondidas;
- nuevas fuentes solo repiten evidencia;
- la autoridad necesaria ya está disponible;
- el rendimiento marginal es bajo;
- el alcance autorizado está cubierto;
- continuar implicaría investigar candidatos fuera del lote;
- la cuestión depende de una decisión y no de más evidencia;
- la fuente necesaria no es accesible y el bloqueo está documentado.

No deberá detenerse únicamente porque:

- apareció una definición conveniente;
- existe una fuente oficial aislada insuficiente;
- se alcanzó un número arbitrario de enlaces;
- una fuente coincide con la conclusión esperada.

### 32.1 Rendimiento marginal

Se considera bajo cuando las nuevas fuentes:

- repiten las mismas afirmaciones sin añadir autoridad;
- no reducen incertidumbre;
- no cubren vacíos del mapa;
- no cambian la clasificación de riesgo;
- pertenecen a la misma cadena dependiente;
- no justifican ampliar el alcance.

---

## 33. Investigación de duplicados y aliases

Integra:

- búsqueda nominal;
- búsqueda semántica;
- búsqueda por sigla;
- búsqueda histórica;
- búsqueda por producto/capacidad;
- revisión de inventarios;
- revisión de lotes;
- comparación de definiciones.

Resultados posibles:

- alias;
- duplicado;
- posible duplicado;
- polisemia;
- significado separado;
- versión;
- no duplicado.

### 33.1 Procedimiento

1. buscar ID, título, nombres, aliases y siglas;
2. revisar traducciones, grafías y nombres históricos;
3. comparar definiciones y contexto;
4. revisar contenido `deprecated` y `legacyIds`;
5. distinguir producto de capacidad;
6. distinguir versión de identidad nueva;
7. registrar resultado y evidencia;
8. bloquear recomendación de aprobación ante posible duplicado.

`confused-with` no corrige un duplicado. Un nombre distinto no demuestra significado distinto.

---

## 34. Investigación de relaciones

Para cada relación propuesta se investiga:

- pregunta que responde;
- origen;
- destino;
- tipo aprobado;
- dirección;
- autoridad;
- compatibilidad;
- cardinalidad;
- ciclos;
- evidencia;
- nota necesaria;
- vigencia;
- posible relación más específica.

### 34.1 Procedimiento

1. formular la pregunta educativa;
2. confirmar origen y destino canónicos;
3. comprobar que ambos existen y tienen estado adecuado;
4. localizar el campo de autoridad o relación persistible;
5. seleccionar el tipo más específico;
6. comprobar dirección, inversa, simetría y cardinalidad;
7. comprobar compatibilidad y ciclos;
8. determinar evidencia y `sourceIds`;
9. registrar nota solo cuando aporte alcance;
10. clasificarla como válida, pendiente, futura, derivada o rechazada.

Las relaciones hacia candidatos futuros:

- no se registran como válidas;
- no cuentan;
- se documentan en `relationship-report.md`;
- indican el lote recomendado.

Se preservan:

- `decision-0012-related-relations-migration`: no eliminar ni duplicar automáticamente `related`;
- `decision-0013-symmetric-relations-storage`: una arista lógica, representación física pendiente;
- `decision-0014-certification-issuer-model`: `certification.issuer` conserva autoridad.

---

## 35. Información cambiante y revisión

Se investiga:

- estabilidad;
- versión;
- fecha de publicación;
- fecha de consulta;
- estado;
- reemplazo;
- deprecación;
- disponibilidad;
- señales de cambio.

No se inventan calendarios uniformes. Se respeta `decision-0017-review-calendars`: cada revisión se justifica por estabilidad, versión, riesgo, disponibilidad de fuentes y papel como dependencia.

### 35.1 Categorías `needs-update`

- **U1 — crítica:** información materialmente incorrecta, riesgosa o normativa falsa. Requiere retiro del descubrimiento ordinario y bloquea publicación y dependencias.
- **U2 — prioritaria:** duda material o versión cambiante que no invalida toda la ficha. Puede conservar acceso temporal con aviso, pero no sostener estructuras centrales.
- **U3 — ordinaria:** desactualización no central o enlace secundario. Puede mantenerse con aviso y fuera de conteos.

Ninguna categoría `needs-update` cuenta para mínimos, porcentajes, representación, conceptos puente ni estructuras centrales.

### 35.2 Señales extraordinarias de revisión

- nueva versión material;
- deprecación o sustitución;
- fuente central no disponible;
- conflicto nuevo;
- vulnerabilidad o cambio normativo;
- cambio de compatibilidad;
- terminología emergente estabilizada o reemplazada;
- evidencia de afirmación incorrecta.

---

## 36. Investigación de seguridad, privacidad y cumplimiento

Se exige mayor rigor para afirmaciones que afecten:

- seguridad;
- privacidad;
- cumplimiento;
- riesgo;
- identidad;
- criptografía;
- vulnerabilidades;
- protocolos;
- normativa.

Debe:

- preferir fuentes primarias;
- verificar versión y jurisdicción;
- distinguir teoría de instrucciones operativas;
- evitar detalles ofensivos innecesarios;
- no publicar información materialmente riesgosa sin contexto;
- escalar contradicciones;
- declarar límites.

### 36.1 Puertas adicionales

Bloquean la unidad:

- fuente primaria aplicable no consultada sin justificación;
- jurisdicción o versión material desconocida;
- afirmación normativa no verificable;
- instrucción peligrosa innecesaria;
- conflicto que pueda inducir una práctica insegura;
- conclusión más fuerte que la evidencia.

La comprensión teórica no autoriza un runbook ofensivo ni detalle operativo desproporcionado.

---

## 37. Derechos de autor y uso de fuentes

- las fuentes se parafrasean;
- no se copian secciones extensas;
- las citas textuales son breves y justificadas;
- se evita reconstruir obras protegidas;
- ejemplos y explicaciones se redactan originalmente;
- diagramas o figuras requerirán tratamiento específico posterior;
- una licencia permisiva no convierte una fuente en definición canónica automática.

El mapa registra la evidencia utilizada, no fragmentos extensos. La paráfrasis deberá conservar significado y atribución sin reproducir estructura expresiva innecesaria.

---

## 38. Reporte de investigación

El reporte mínimo por lote incluye:

- alcance investigado;
- preguntas;
- estrategia;
- consultas principales;
- fuentes aceptadas;
- fuentes con limitaciones;
- fuentes descartadas;
- contradicciones;
- incertidumbre;
- afirmaciones respaldadas;
- afirmaciones pendientes;
- versiones;
- decisiones necesarias;
- unidades bloqueadas;
- candidatos descubiertos;
- recomendación.

### 38.1 Distribución en entregables aprobados

| Información | Entregable principal |
|---|---|
| Fuentes, consultas, mapa de afirmaciones, versiones, vacíos y descartes | `sources-report.md` |
| Preguntas no resueltas, bloqueos y autoridad requerida | `unresolved-questions.md` |
| Candidatos fuera de alcance | `new-term-proposals.md` |
| Relaciones válidas, pendientes, futuras, derivadas y rechazadas | `relationship-report.md` |
| Duplicados, aliases y polisemia | `duplicate-report.md` |
| Autoevaluación de suficiencia y limitaciones | `self-review-report.md` |
| Resultado ejecutivo y recomendación | `batch-summary.md` |

No se cambia la estructura de entregables aprobada. Si un reporte no tiene elementos, se conserva y explica el resultado cero conforme al contrato vigente.

### 38.2 Coherencia

- las cifras y estados deben coincidir entre reportes;
- una afirmación pendiente no se cuenta como respaldada;
- una relación futura no se cuenta como válida;
- un candidato no se convierte en contenido;
- una limitación material aparece tanto en el mapa como en el reporte correspondiente.

---

## 39. Registro de fuentes descartadas

Una fuente descartada se registra cuando:

- parecía autoritativa;
- contradice otra fuente;
- afecta una decisión;
- es obsoleta;
- es promocional;
- posee versión incorrecta;
- no puede verificarse;
- se utiliza comúnmente pero es engañosa.

Se registra:

- fuente;
- motivo;
- pregunta afectada;
- posible utilidad residual;
- riesgo de reutilización accidental.

No es necesario registrar resultados irrelevantes evidentes.

### 39.1 Motivos normalizados conceptuales

- autoridad inadecuada;
- alcance insuficiente;
- versión incorrecta;
- obsoleta;
- promoción;
- no verificable;
- duplicada sin valor adicional;
- interpretación errónea de primaria;
- conflicto de interés no controlado;
- contenido generado sin fuente trazable.

Estos motivos son orientación operativa, no un enum ejecutable.

---

## 40. Reutilización de investigación

Puede reutilizarse una fuente o mapa cuando exista:

- misma afirmación;
- misma versión;
- mismo contexto;
- misma unidad o relación compatible;
- vigencia comprobada;
- fuente normalizada existente.

Antes de reutilizar:

- comprobar disponibilidad;
- comprobar versión;
- comprobar que el contexto sigue siendo válido;
- evitar copiar conclusiones sin releer evidencia;
- registrar la reutilización.

No se reutiliza automáticamente una conclusión porque el título de la unidad sea similar. Si cambia la fuerza, el campo, la jurisdicción o la versión, se reevalúa la evidencia.

---

## 41. Continuidad entre sesiones

Al continuar una investigación:

1. recuperar alcance y manifiesto;
2. leer el reporte existente;
3. comprobar cambios en autoridades;
4. revisar decisiones nuevas;
5. comprobar fuentes y enlaces;
6. identificar preguntas abiertas;
7. evitar repetir consultas ya resueltas;
8. registrar nuevas consultas;
9. conservar el historial;
10. reconciliar trabajo concurrente.

La memoria conversacional no sustituye al reporte.

### 41.1 Reconciliación

Cuando dos sesiones ofrecen resultados distintos:

- no se sobrescribe silenciosamente;
- se comparan pregunta, alcance, fecha, versión y autoridad;
- se conserva el historial;
- se actualiza el mapa;
- se registra la disposición;
- se escala si cambia identidad, clasificación o afirmación central.

---

## 42. Investigación paralela

Se permite cuando:

- las preguntas son independientes;
- las fuentes no son conflictivas o existe reconciliación prevista;
- las unidades no están duplicadas;
- IDs o candidatos están coordinados;
- existe estrategia de consolidación;
- se conserva un mapa de afirmaciones común.

Se prohíbe cuando:

- dos agentes investigan la identidad canónica sin coordinación;
- ambos pueden clasificar de forma incompatible;
- dependen de una decisión pendiente;
- modifican el mismo mapa sin reconciliación;
- existe riesgo de duplicar fuentes o conclusiones.

### 42.1 Consolidación

La consolidación debe:

- identificar responsable;
- comparar afirmaciones y fuentes;
- eliminar duplicación documental sin eliminar evidencia distinta;
- resolver IDs locales;
- conservar conflictos;
- actualizar el estado de cada pregunta;
- producir una recomendación única sin ocultar posiciones.

---

## 43. Escalamiento

Se escala cuando la investigación descubre:

- posible error en un contrato;
- identidad no resoluble;
- tipo no contemplado;
- dominio no adecuado;
- necesidad de nueva relación;
- fuentes materialmente contradictorias;
- afirmación central sin evidencia;
- necesidad de excepción;
- cambio de alcance;
- nuevo riesgo;
- información materialmente falsa en contenido aprobado;
- asunto `pending-resolution`.

El escalamiento incluye:

- problema;
- evidencia;
- búsquedas realizadas;
- alternativas;
- impacto;
- parte bloqueada;
- autoridad requerida;
- siguiente acción recomendada.

### 43.1 Regla de detención parcial

Se documenta:

- parte que se detiene;
- causa;
- condición de reanudación;
- parte que puede continuar;
- riesgo de continuar;
- reportes afectados.

Escalar no autoriza adoptar una alternativa. Una propuesta de cambio se separa de la producción ordinaria y no recibe un ID definitivo de decisión salvo instrucción competente.

---

## 44. Severidad investigativa

Sin sustituir la severidad final de revisión, ChatGPT Trabajo puede proponer:

- **bloqueante investigativo:** impide identidad, significado, seguridad o evidencia central;
- **riesgo mayor:** puede producir error material si no se corrige;
- **limitación menor:** reduce precisión o contexto sin invalidar el núcleo;
- **observación:** información útil sin defecto confirmado;
- **pregunta:** duda que requiere respuesta;
- **propuesta de cambio:** requiere autoridad contractual.

Cada señal registra unidad, criterio, evidencia, impacto, estado y acción recomendada. El revisor independiente determina la severidad final.

---

## 45. Autoevaluación de investigación

Antes de cerrar se comprueba:

- preguntas respondidas;
- fuentes adecuadas;
- primarias consultadas cuando aplican;
- versiones verificadas;
- afirmaciones mapeadas;
- contradicciones tratadas;
- incertidumbre declarada;
- fuentes descartadas registradas;
- duplicados investigados;
- relaciones evaluadas;
- alcance respetado;
- candidatos separados;
- sin bibliografía inventada;
- sin copia extensa;
- sin conclusión más fuerte que la evidencia;
- bloqueos registrados.

### 45.1 Resultado

La autoevaluación emite una de estas recomendaciones:

- lista para redacción al nivel autorizado;
- lista con limitaciones declaradas;
- requiere investigación adicional;
- unidad bloqueada;
- requiere escalamiento.

No emite `approved`, `accepted`, `integrated`, `closed` ni autorización de publicación.

---

## 46. Lista de inicio rápido

- [ ] Confirmar alcance.
- [ ] Identificar preguntas.
- [ ] Clasificar riesgos.
- [ ] Buscar duplicados.
- [ ] Localizar fuentes primarias.
- [ ] Ampliar contexto.
- [ ] Contrastar.
- [ ] Mapear afirmaciones.
- [ ] Registrar incertidumbre.
- [ ] Evaluar suficiencia.
- [ ] Cerrar o escalar.

---

## 47. Lista de cierre rápido

- [ ] Identidad confirmada.
- [ ] Tipo y dominio evaluables.
- [ ] Afirmaciones centrales respaldadas.
- [ ] Fuentes normalizadas.
- [ ] Versiones registradas.
- [ ] Conflictos tratados.
- [ ] Incertidumbre declarada.
- [ ] Relaciones investigadas.
- [ ] Duplicados tratados.
- [ ] Candidatos separados.
- [ ] Fuentes descartadas relevantes.
- [ ] Mapa de afirmaciones actualizado.
- [ ] Preguntas bloqueantes registradas.
- [ ] Recomendación emitida.

---

## 48. Ejemplo conceptual

> Ejemplo hipotético, no vinculante, sin valor de inventario, autorización ni ficha canónica.

### 48.1 Unidad

**Elemento Alfa:** candidato hipotético cuya naturaleza provisional podría ser una especificación o una implementación.

### 48.2 Preguntas

- ¿Qué naturaleza tiene Alfa?
- ¿Existe una especificación independiente?
- ¿Qué problema atiende?
- ¿Su estado depende de versión?
- ¿Se confunde con Elemento Beta?
- ¿Qué relación podría existir con Elemento Gamma?

### 48.3 Consultas conceptuales

```text
"Elemento Alfa" official definition
"Elemento Alfa" specification
"Elemento Alfa" version status
"Elemento Alfa" vs "Elemento Beta"
```

### 48.4 Fuentes

- **Fuente primaria P-01:** registro hipotético del emisor, con definición, versión y estado.
- **Fuente secundaria S-01:** publicación independiente que explica contexto y confusión con Beta.

### 48.5 Conflicto

P-01 describe Alfa como especificación; S-01 lo usa coloquialmente como nombre de una implementación. El tratamiento correcto es delimitar el uso institucional, atribuir el uso comunitario y no mezclar ambos como una sola definición sin condición.

### 48.6 Mapa de afirmaciones conceptual

| `claimId` | Afirmación | Tipo | Fuentes | Estado | Limitación |
|---|---|---|---|---|---|
| `claim-local-01` | Alfa posee una definición oficial | definicional | P-01 | `supported` | Aplica al alcance del emisor |
| `claim-local-02` | Alfa siempre significa una implementación | definicional | S-01 | `conflicting` | Uso comunitario no uniforme |
| `claim-local-03` | Alfa se relaciona con Gamma | relación | — | `partially-supported` | Destino aún no aprobado |

### 48.7 Candidato descubierto

Beta aparece fuera del alcance. Se registra en `new-term-proposals.md`; no se produce.

### 48.8 Relación pendiente

La relación con Gamma no se persiste si Gamma es futuro o si no existe un tipo aprobado adecuado. Se registra en `relationship-report.md` con lote recomendado.

### 48.9 Criterio de cierre

La investigación de Alfa puede cerrarse si:

- la identidad institucional queda confirmada;
- el uso comunitario queda delimitado;
- la versión queda registrada;
- la clasificación se presenta como evaluable, no aprobada;
- la relación pendiente no se persiste;
- Beta permanece fuera del lote.

Si la clasificación define el significado central y no puede resolverse, la unidad se bloquea y se escala.

---

## 49. Fallos frecuentes

| Fallo | Problema | Consecuencia | Acción correcta | Reporte afectado | Severidad posible |
|---|---|---|---|---|---|
| Buscar sin preguntas | No existe criterio de relevancia o cierre | Enlaces acumulados sin evidencia útil | Formular unidades y preguntas antes de consultar | `sources-report.md` | Riesgo mayor |
| Aceptar el primer resultado | Confunde visibilidad con autoridad | Definición sesgada o incompleta | Buscar primaria y contraste proporcional | `sources-report.md` | Mayor o bloqueante |
| Usar un snippet como fuente | No se leyó contexto ni alcance | Afirmación no verificable | Abrir y evaluar la fuente completa | `sources-report.md` | Bloqueante si central |
| Usar una fuente comercial como autoridad universal | Excede autoridad del proveedor | Sesgo, promoción y generalización | Limitar al producto y añadir evidencia independiente | `sources-report.md` | Mayor; bloqueante si central |
| Ignorar versión | Mezcla estados incompatibles | Información obsoleta o falsa | Registrar versión, fecha y reemplazo | `sources-report.md` | Mayor o bloqueante |
| Acumular fuentes irrelevantes | Cantidad sustituye cobertura | Falsa sensación de suficiencia | Conservar solo fuentes relacionadas con afirmaciones | `sources-report.md` | Menor o mayor |
| Confundir popularidad con autoridad | Uso extendido se trata como norma | Clasificación o definición incorrecta | Identificar emisor, contexto y fuente primaria | `sources-report.md` | Mayor |
| Copiar una definición | Sustituye síntesis y puede infringir derechos | Contenido derivativo y poco autónomo | Parafrasear y citar brevemente si es necesario | `self-review-report.md` | Mayor |
| Ocultar contradicción | El mapa aparenta certeza | Riesgo de conclusión falsa | Registrar posiciones y aplicar sección 27 | `sources-report.md`, `unresolved-questions.md` | Bloqueante si central |
| Forzar una conclusión | La evidencia no alcanza la fuerza redactada | Afirmación insostenible | Reducir, condicionar, bloquear o escalar | `sources-report.md` | Mayor o bloqueante |
| Investigar fuera del lote | Amplía alcance sin autoridad | Candidatos y tiempo no controlados | Separar descubrimiento y detener expansión | `new-term-proposals.md` | Bloqueante operativo |
| Producir un candidato no autorizado | Convierte investigación en contenido | Violación de lote e inventario | Registrar propuesta para lote futuro | `new-term-proposals.md` | Bloqueante |
| Inventar bibliografía | Crea evidencia inexistente | Pérdida total de confianza y trazabilidad | Verificar cada dato o marcar no verificable | `sources-report.md` | Bloqueante |
| Declarar investigación completa por cantidad | Usa número de enlaces como puerta | Cierre prematuro | Evaluar mapa, preguntas y criticidad | `self-review-report.md` | Mayor |
| No mapear afirmaciones | No existe vínculo evidencia-redacción | Revisión imposible | Completar mapa central | `sources-report.md` | Mayor; bloqueante si central |
| Reutilizar una fuente sin comprobar vigencia | Presume continuidad | Evidencia obsoleta | Releer, verificar versión y registrar reutilización | `sources-report.md` | Mayor |
| Ignorar un posible duplicado | Fragmenta identidad | Dos fichas, conteos y búsqueda inconsistentes | Bloquear y resolver alias o polisemia | `duplicate-report.md` | Bloqueante |
| Resolver una decisión pendiente mediante investigación | Confunde evidencia con autoridad | Cambio contractual silencioso | Aplicar regla de contención y escalar | `unresolved-questions.md` | Bloqueante |

---

## 50. Decisiones y asuntos pendientes

### 50.1 Procedimiento adoptado

Se adopta un flujo reproducible de:

1. confirmar autoridad y alcance;
2. definir unidades;
3. formular preguntas;
4. clasificar hipótesis y riesgos;
5. diseñar consultas por capas;
6. evaluar fuentes;
7. contrastar terminología, versiones y posiciones;
8. mapear afirmaciones;
9. tratar contradicción e incertidumbre;
10. determinar suficiencia;
11. cerrar, continuar, bloquear o escalar;
12. transferir evidencia a reportes.

### 50.2 Unidad de investigación adoptada

Se adopta como unidad mínima una entrada candidata, relación, afirmación, comparación, dimensión, decisión de escenario, paso de ruta, cuestión taxonómica o cuestión de vigencia que pueda cerrarse con evidencia, limitación o escalamiento.

### 50.3 Estrategia de búsqueda adoptada

Se adoptan cinco capas adaptables: identidad y definición; contexto y propósito; fronteras y confusiones; evidencia especializada; vigencia.

### 50.4 Consultas adoptadas

Se adoptan consultas construidas desde nombre, alias, sigla, término profesional en inglés, tipo, dominio, emisor, versión, comparación y filtros. Las consultas y snippets no son evidencia.

### 50.5 Mapa de afirmaciones adoptado

Se adopta como artefacto operativo central y como sección o anexo interno de `sources-report.md`, sin crear un schema ni un entregable nuevo.

### 50.6 Tratamiento de contradicciones adoptado

Se adopta el procedimiento de doce pasos de la sección 27, con registro de posiciones, versiones, contexto, autoridad, conclusión permitida e incertidumbre residual.

### 50.7 Tratamiento de incertidumbre adoptado

Se adoptan las categorías confirmada, probable, dependiente del contexto, terminología no uniforme, evidencia limitada, fuentes en conflicto, cambiante y no verificable.

### 50.8 Investigación insuficiente adoptada

Se adopta la obligación de registrar vacíos, búsquedas, fuentes y descartes; reducir fuerza o alcance solo cuando conserve significado; bloquear cuando afecte el núcleo; y no inventar contenido.

### 50.9 Cierre adoptado

El cierre depende de identidad, preguntas, afirmaciones, evidencia, versiones, conflictos, incertidumbre, duplicados, relaciones y limitaciones. No depende de una cantidad fija ni equivale a aprobación.

### 50.10 Detención adoptada

Se detiene cuando las preguntas materiales están suficientemente respondidas, la autoridad necesaria está disponible, el rendimiento marginal es bajo, continuar saldría del alcance o la cuestión depende de una decisión. No se detiene por conveniencia, primer resultado o cuota de enlaces.

### 50.11 Reutilización adoptada

La reutilización exige misma afirmación, versión y contexto, vigencia comprobada, relectura de evidencia y registro de la reutilización.

### 50.12 Continuidad adoptada

Se adopta continuidad basada en repositorio y reportes, no en memoria conversacional, con conservación de historial y reconciliación de evidencia concurrente.

### 50.13 Escalamiento adoptado

Se adopta detención parcial, evidencia, búsquedas, alternativas, impacto, autoridad requerida, condición de reanudación y continuación de partes independientes.

### 50.14 Autoevaluación adoptada

Se adopta la lista de la sección 45 y una recomendación de preparación, investigación adicional, limitación, bloqueo o escalamiento. La autoevaluación no sustituye revisión independiente.

### 50.15 Asuntos reservados para `work/SOURCE-POLICY.md`

- jerarquía operacional definitiva de fuentes;
- suficiencia especializada por clase de afirmación;
- diversidad e independencia;
- formato bibliográfico y de citas;
- archivo, preservación y sustitución de enlaces;
- política detallada de concentración por proveedor.

### 50.16 Asuntos reservados para `work/CONTENT-PRODUCTION-CONTRACT.md`

- obligaciones exactas de campos;
- transición de estados editoriales;
- cambios y reenvíos;
- responsabilidad de producción;
- condiciones contractuales de entrega;
- criterios exactos de aceptación de contenido.

### 50.17 Asuntos reservados para `work/REVIEW-CHECKLIST.md`

- checks ejecutables;
- firmas;
- responsables nominales;
- disposición final;
- muestreo operativo;
- evidencia de aprobación independiente.

### 50.18 Asuntos reservados para Codex

- schemas y validadores;
- formato técnico del mapa o hallazgos;
- normalización física de relaciones;
- verificación automática de enlaces;
- integración;
- índices, derivados, CI y build;
- tablero automatizado de cobertura.

### 50.19 Decisiones pendientes preservadas

Se preservan sin resolver:

- `decision-0012-related-relations-migration`;
- `decision-0013-symmetric-relations-storage`;
- `decision-0014-certification-issuer-model`;
- `decision-0015-dark-mode-delivery`;
- `decision-0017-review-calendars`;
- `decision-0018-final-technical-metrics`.

`decision-0016-operational-ownership` está aceptada: el Responsable del proyecto conserva la autoridad final y toda delegación debe registrarse. Este protocolo aplica las reglas de contención de las decisiones enumeradas y no convierte ninguna propuesta en autoridad.

### 50.20 Contradicciones encontradas

No se encontraron contradicciones internas materiales en este protocolo ni contradicciones materiales con los trece documentos de autoridad.

Se preservan como tensiones o asuntos pendientes, no como contradicciones:

- coexistencia temporal de `related` y `relations[]`;
- representación física de relaciones simétricas;
- `certification.issuer` sin tipo `organization` ni relación `certified-by`;
- IDs documentales `DOM-01` a `DOM-12` distintos de IDs canónicos;
- modo oscuro como `Should have`;
- responsables nominales y permisos;
- calendarios de revisión por estabilidad;
- métricas técnicas finales.

La discrepancia histórica entre `extended-reference` y `future-expanded-reference` permanece resuelta por los contratos vigentes: el único valor válido es `future-expanded-reference`.

---

## Cierre

Este protocolo queda aprobado como procedimiento operativo de investigación de IT Study. Su aplicación exige investigar antes de redactar, vincular afirmaciones con evidencia, preservar incertidumbre y decisiones propias, detener solo lo bloqueado y transferir resultados a los entregables existentes sin ampliar el lote ni sustituir los contratos especializados.
