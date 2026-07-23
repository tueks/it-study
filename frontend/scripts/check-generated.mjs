import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const path = resolve(import.meta.dirname, '..', 'src', 'generated', 'catalog.json')
const catalog = JSON.parse(await readFile(path, 'utf8'))
const ids = new Set(catalog.entities.map(({ id }) => id))

if (catalog.entities.length === 0 || catalog.domains.length === 0) throw new Error('El catálogo no contiene entidades o dominios.')
if (ids.size !== catalog.entities.length) throw new Error('El catálogo contiene IDs de entidad duplicados.')
if (catalog.entities.some((entry) => entry.editorialStatus !== 'approved')) throw new Error('El catálogo expone contenido no aprobado.')
if (catalog.domains.some((domain) => domain.entityCount === 0)) throw new Error('El catálogo contiene dominios vacíos.')
console.log(`Catálogo válido: ${catalog.entities.length} entidades, ${catalog.domains.length} dominios.`)
