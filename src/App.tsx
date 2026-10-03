import { projects } from "./projects"

export default function App() {
  return (
    <>
      <header className="top">
        <a className="brand" href="#top">
          Lalit
        </a>
        <nav>
          <a href="#projects">Projects</a>
          <a href="https://github.com/LALIT-SEKHAR">GitHub</a>
        </nav>
      </header>
      <main id="top">
        <p className="kicker">Odisha</p>
        <h1>Lalit Sekhar Behera</h1>
        <p className="lede">
          Web and mobile projects from 2020 to 2026. Apps that share a web frontend, an API, and a mobile app are listed once.
        </p>
        <section id="projects" aria-labelledby="projects-heading">
          <h2 id="projects-heading">Projects</h2>
          <ol>
            {projects.map((project) => (
              <li key={project.name}>
                <time dateTime={project.year}>{project.year}</time>
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  {project.note ? <p className="note">{project.note}</p> : null}
                  <p className="links">
                    {project.live ? (
                      <a href={project.live}>Live</a>
                    ) : null}
                    {project.repos.map((repo) => (
                      <a key={repo.href} href={repo.href}>
                        {repo.label}
                      </a>
                    ))}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </main>
    </>
  )
}
