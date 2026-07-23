import { useEffect, useMemo, useRef, useState } from 'react'
import catalogData from './generated/catalog.json'

type Entity = {
  id: string
  title: string
  canonicalName?: string
  summary?: string
  definition?: string
  type: string
  primaryDomain?: string
  subdomains?: string[]
}
type Domain = { id: string; entityCount: number; subdomains: string[] }
type Structure = { id: string; title: string; summary?: string; objective?: string; type: string }
type Catalog = {
  domains: Domain[]
  entities: Entity[]
  comparisons: Structure[]
  scenarios: Structure[]
  learningPaths: Structure[]
}
const catalog = catalogData as Catalog

const display = (value: string) => value
  .replace(/^domain-/, '')
  .replace(/^subdomain-/, '')
  .split('-')
  .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
  .join(' ')

function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('it-study-theme')
    return saved === 'light' || saved === 'dark'
      ? saved
      : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('it-study-theme', theme)
  }, [theme])
  return <button className="theme-toggle" type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
    Usar tema {theme === 'dark' ? 'claro' : 'oscuro'}
  </button>
}

function EntityCard({ entity }: { entity: Entity }) {
  return <article className="entity-card">
    <p className="eyebrow">{display(entity.type)} · {entity.primaryDomain && display(entity.primaryDomain)}</p>
    <h3>{entity.title}</h3>
    <p>{entity.summary || entity.definition}</p>
  </article>
}

function App() {
  const [query, setQuery] = useState('')
  const [selectedDomain, setSelectedDomain] = useState(catalog.domains[0]?.id ?? '')
  const [exploring, setExploring] = useState(false)
  const mapHeading = useRef<HTMLHeadingElement>(null)
  const selected = catalog.domains.find((domain) => domain.id === selectedDomain)
  const selectedEntities = catalog.entities.filter((entity) => entity.primaryDomain === selectedDomain)
  const results = useMemo(() => {
    const terms = query.trim().toLocaleLowerCase('es')
    if (!terms) return []
    return catalog.entities.filter((entity) => [entity.title, entity.canonicalName, entity.summary, entity.type, entity.primaryDomain, ...(entity.subdomains ?? [])]
      .filter(Boolean).join(' ').toLocaleLowerCase('es').includes(terms)).slice(0, 12)
  }, [query])
  const structures = [
    { label: 'Comparaciones', items: catalog.comparisons },
    { label: 'Escenarios', items: catalog.scenarios },
    { label: 'Rutas de aprendizaje', items: catalog.learningPaths },
  ]
  function explore() {
    setExploring(true)
    requestAnimationFrame(() => mapHeading.current?.focus())
  }

  return <div className="app-shell">
    <header className="topbar">
      <a className="brand" href="#inicio">IT Study</a>
      <ThemeToggle />
    </header>
    <main id="inicio">
      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow">Mapa de conocimiento · local</p>
        <h1 id="hero-title">Comprende el territorio de TI antes de entrar en sus detalles.</h1>
        <p>Explora conceptos, prácticas, estructuras y referencias desde sus dominios y contexto.</p>
        <label className="search-box">
          <span className="sr-only">Buscar en IT Study</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Busca un concepto, práctica o tecnología" type="search" />
        </label>
        <button className="primary" type="button" onClick={explore}>Explorar el mapa</button>
        {query && <section className="search-results" aria-live="polite" aria-label="Resultados de búsqueda">
          <h2>{results.length ? `Resultados para “${query}”` : 'Sin resultados'}</h2>
          {results.map((entity) => <button key={entity.id} type="button" className="result" onClick={() => { setSelectedDomain(entity.primaryDomain ?? selectedDomain); explore() }}>
            <strong>{entity.title}</strong><span>{entity.summary}</span>
          </button>)}
        </section>}
      </section>

      {exploring && <section className="explorer" aria-labelledby="map-heading">
        <div className="section-heading">
          <p className="eyebrow">Exploración principal</p>
          <h2 id="map-heading" ref={mapHeading} tabIndex={-1}>Mapa de dominios</h2>
          <p>Selecciona un dominio; la lista es equivalente al diagrama y funciona con teclado.</p>
        </div>
        <div className="map-layout">
          <nav className="domain-map" aria-label="Dominios de IT Study">
            {catalog.domains.map((domain, index) => <button key={domain.id} type="button" className={`domain-node node-${index + 1} ${selectedDomain === domain.id ? 'selected' : ''}`} aria-pressed={selectedDomain === domain.id} onClick={() => setSelectedDomain(domain.id)}>
              <span>{display(domain.id)}</span><small>{domain.entityCount} entradas</small>
            </button>)}
            <div className="map-core" aria-hidden="true">IT<br />Study</div>
          </nav>
          {selected && <aside className="domain-detail" aria-live="polite">
            <p className="eyebrow">Dominio seleccionado</p>
            <h3>{display(selected.id)}</h3>
            <p>{selected.entityCount} entradas aprobadas en el catálogo local.</p>
            <h4>Subdominios</h4>
            <ul>{selected.subdomains.map((subdomain) => <li key={subdomain}>{display(subdomain)}</li>)}</ul>
            <h4>Entradas destacadas</h4>
            <div className="card-list">{selectedEntities.slice(0, 4).map((entity) => <EntityCard key={entity.id} entity={entity} />)}</div>
          </aside>}
        </div>
      </section>}

      <section className="formats" aria-labelledby="formats-heading">
        <div className="section-heading"><p className="eyebrow">Más formas de aprender</p><h2 id="formats-heading">El contexto cambia la lectura</h2></div>
        <div className="format-grid">
          {structures.map(({ label, items }) => <article key={label} className="format-card"><p className="eyebrow">{items.length} disponibles</p><h3>{label}</h3><ul>{items.map((item) => <li key={item.id}><strong>{item.title}</strong><span>{item.summary || item.objective}</span></li>)}</ul></article>)}
        </div>
      </section>
    </main>
    <footer>Fuentes canónicas aprobadas · datos derivados generados localmente</footer>
  </div>
}

export default App
