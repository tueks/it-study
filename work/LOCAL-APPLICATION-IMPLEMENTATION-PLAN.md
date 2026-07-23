# Plan técnico — aplicación local de IT Study

Estado: `approved-architecture / implementation-plan`.

## Alcance

- React, TypeScript y Vite en `frontend/`.
- Generación reproducible desde Markdown canónico `approved` hacia derivados locales.
- Portada con búsqueda y acceso al mapa de dominios; lista equivalente en móvil; fichas, comparaciones, escenarios y rutas.
- Tema claro/oscuro, preferencia de sistema y control persistente.

## Exclusiones

- Backend, cuentas, autenticación, base de datos, colaboración y publicación externa.
- Escritura de contenido desde la interfaz o edición manual de derivados.

## Secuencia

1. Crear proyecto React/Vite/TypeScript y scripts `generate`, `test`, `build`, `preview`.
2. Implementar generador que solo incluya fuentes `approved`, valide IDs y referencias, y produzca datos derivados deterministas.
3. Construir navegación, búsqueda local y mapa accesible con lista equivalente.
4. Construir vistas de ficha, comparación, escenario y ruta desde derivados.
5. Implementar temas, responsive y pruebas de teclado, foco, nombres y contraste.
6. Ejecutar métricas de `decision-0018`, documentar rollback local y preparar el candidato B032.

## Validaciones obligatorias

- `generate`, pruebas y build reproducibles desde árbol limpio.
- Cero referencias internas rotas y ningún contenido no `approved` expuesto.
- Flujos principales por teclado, foco visible, nombres accesibles y alternativa no espacial del mapa.
- LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1 en perfiles representativos definidos durante la implementación.

## Rollback

Revertir al commit validado anterior y regenerar el build local; no se modifica `content/` para revertir la aplicación.
