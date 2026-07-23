import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join, relative, resolve } from 'node:path'
import { parse } from 'yaml'

const frontendRoot = resolve(import.meta.dirname, '..')
const contentRoot = resolve(frontendRoot, '..', 'content')
const outputPath = resolve(frontendRoot, 'src', 'generated', 'catalog.json')

async function markdownFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = await Promise.all(entries.map((entry) => {
    const path = join(directory, entry.name)
    return entry.isDirectory() ? markdownFiles(path) : entry.name.endsWith('.md') ? [path] : []
  }))
  return files.flat().sort()
}

async function frontmatter(path) {
  const text = await readFile(path, 'utf8')
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) throw new Error(`Frontmatter ausente: ${relative(contentRoot, path)}`)
  const data = parse(match[1])
  if (!data?.id || !data?.type || !data?.title) {
    throw new Error(`Campos requeridos ausentes: ${relative(contentRoot, path)}`)
  }
  return { ...data, sourcePath: relative(contentRoot, path).replaceAll('\\', '/') }
}

async function approvedFrom(path) {
  const records = await Promise.all((await markdownFiles(path)).map(frontmatter))
  return records.filter((record) => record.editorialStatus === 'approved' && record.deprecated !== true)
}

function valuesFor(record, field) {
  const value = record[field]
  return Array.isArray(value) ? value : []
}

function verifyReferences(entities, structures) {
  const ids = new Set(entities.map(({ id }) => id))
  const referenced = structures.flatMap((item) => [
    ...valuesFor(item, 'comparedEntries'),
    ...valuesFor(item, 'participants'),
    ...valuesFor(item, 'concepts'),
    ...valuesFor(item, 'artifactsProduced'),
    ...valuesFor(item, 'entries'),
    ...valuesFor(item, 'prerequisites'),
    ...valuesFor(item, 'checkpoints').flatMap((checkpoint) => valuesFor(checkpoint, 'references')),
    ...valuesFor(item, 'events').flatMap((event) => valuesFor(event, 'references')),
  ])
  for (const id of referenced) {
    if (typeof id === 'string' && id.startsWith('entity-') && !ids.has(id)) {
      throw new Error(`Referencia a entidad inexistente: ${id}`)
    }
  }
}

const [entities, comparisons, scenarios, learningPaths] = await Promise.all([
  approvedFrom(join(contentRoot, 'entities')),
  approvedFrom(join(contentRoot, 'editorial', 'comparisons')),
  approvedFrom(join(contentRoot, 'editorial', 'scenarios')),
  approvedFrom(join(contentRoot, 'editorial', 'learning-paths')),
])

const all = [...entities, ...comparisons, ...scenarios, ...learningPaths]
const seen = new Set()
for (const item of all) {
  if (seen.has(item.id)) throw new Error(`ID duplicado: ${item.id}`)
  seen.add(item.id)
}
verifyReferences(entities, [...comparisons, ...scenarios, ...learningPaths])

const domains = [...new Set(entities.map((entity) => entity.primaryDomain).filter(Boolean))]
  .sort()
  .map((id) => ({
    id,
    entityCount: entities.filter((entity) => entity.primaryDomain === id).length,
    subdomains: [...new Set(entities.filter((entity) => entity.primaryDomain === id).flatMap((entity) => valuesFor(entity, 'subdomains')))].sort(),
  }))

const catalog = { domains, entities, comparisons, scenarios, learningPaths }
await mkdir(dirname(outputPath), { recursive: true })
await writeFile(outputPath, `${JSON.stringify(catalog, null, 2)}\n`, 'utf8')
console.log(`Generado ${relative(frontendRoot, outputPath)}: ${entities.length} entidades y ${comparisons.length + scenarios.length + learningPaths.length} estructuras.`)
