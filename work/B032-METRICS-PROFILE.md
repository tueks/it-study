# Perfil de métricas B032

Estado: `ready-to-measure`.

## Autoridad y alcance

- Puerta: `batch-032`.
- Autoridad: `decision-0018-final-technical-metrics` y `decision-0023-local-static-application-architecture`.
- Entorno: build de producción local de `frontend/`; no publicar ni abrir firewall.

## Recorridos representativos

1. Portada inicial: carga desde cero de `index.html`.
2. Exploración: pulsar **Explorar el mapa**, seleccionar un dominio y comprobar el panel resultante.
3. Búsqueda: consultar un término canónico y un acrónimo derivado, como `TLS`.

## Perfil de medición

- Perfil móvil: viewport `390 × 844`, red y CPU controladas por la herramienta elegida.
- Mínimo de tres ejecuciones independientes por recorrido; conservar mediana y ejecuciones individuales.
- Medir LCP, INP y CLS; comparar contra LCP ≤ 2.5 s, INP ≤ 200 ms y CLS ≤ 0.1.
- Registrar versión de navegador/herramienta, commit, comando, fecha, configuración y artefactos de cada ejecución.

## Condición de cierre

B032 puede continuar hacia candidato local solo si todas las métricas cumplen, no hay errores de consola ni referencias rotas, y el rollback al commit validado queda comprobado. Una desviación requiere una excepción explícita; no se relajan umbrales por defecto.
