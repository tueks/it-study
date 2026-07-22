# Reporte relacional

| Clase | Conteo | Persistencia |
|---|---:|---|
| `primaryDomain` | 10 | Campo de autoridad |
| `subdomains` | 10 | Campo de autoridad |
| `secondaryDomains` | 3 | Campo de autoridad |
| `prerequisites` / `requires` | 4 | Campo tipado derivable |
| `relations[]` | 0 | No usado |

Dependencias internas aprobadas:

- `entity-algoritmo requires entity-computacion`;
- `entity-complejidad-computacional requires entity-algoritmo`;
- `entity-estructura-de-datos requires entity-algoritmo`;
- `entity-programacion requires entity-algoritmo`.

El grafo es acíclico y todos los destinos pertenecen a B006. Los 23 enlaces taxonómicos y cuatro de dependencia coinciden con `master-relational-map-v2.yaml`. No se persisten inversas ni relaciones simétricas.
