import { certifications, education, roles, skills } from "./career"
import { formatDate } from "./formatDate"
import { projects } from "./projects"

const cvHref = `${import.meta.env.BASE_URL}Lalit-Sekhar-Behera.pdf`

const timeline = [...projects].sort((a, b) => b.created.localeCompare(a.created))

export default function App() {
  return (
    <div className="shell">
      <aside>
        <header className="identity">
          <p className="kicker">Bangalore · Open to relocate</p>
          <h1>Lalit Sekhar Behera</h1>
          <p className="lede">
            Full-stack engineer. React, TypeScript, and services for enterprise SaaS.
          </p>
          <p className="contact">
            <a href="mailto:lalitsekhar1999@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/lalit-sekhar">LinkedIn</a>
            <a href="https://github.com/LALIT-SEKHAR">GitHub</a>
            <a href={cvHref}>CV</a>
          </p>
        </header>

        <section id="career" aria-labelledby="career-heading">
          <h2 id="career-heading">Career</h2>
          <ol className="roles">
            {roles.map((role) => (
              <li key={`${role.org}-${role.dates}`}>
                <p className="role-dates">{role.dates}</p>
                <h3>{role.title}</h3>
                <p className="org">
                  {role.org}
                  <span> · {role.place}</span>
                </p>
                <ul>
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
          <div className="study">
            <h3>Education</h3>
            <p>
              {education.credential}, {education.school}
            </p>
            <p className="org">
              {education.place}
              <span> · {education.dates}</span>
            </p>
            <h3>Certifications</h3>
            <p>{certifications.join(" · ")}</p>
            <h3>Skills</h3>
            <p>{skills.join(" · ")}</p>
          </div>
          <p className="cv-note">
            <a href={cvHref}>Open the CV</a>
          </p>
        </section>
      </aside>

      <main id="projects">
        <header className="projects-head">
          <h2>Projects</h2>
          <p>Newest first.</p>
        </header>
        <ol className="timeline">
          {timeline.map((project, index) => {
            const year = project.created.slice(0, 4)
            const previousYear = timeline[index - 1]?.created.slice(0, 4)
            return (
              <li key={project.name}>
                {year !== previousYear ? <p className="year">{year}</p> : null}
                <article>
                  <p className="dates">
                    <time dateTime={project.created}>Created {formatDate(project.created)}</time>
                    <time dateTime={project.updated}>Updated {formatDate(project.updated)}</time>
                  </p>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <p className="links">
                    {project.live ? <a href={project.live}>Live</a> : null}
                    {project.repos.map((repo) => (
                      <a key={repo.href} href={repo.href}>
                        {repo.label}
                      </a>
                    ))}
                  </p>
                </article>
              </li>
            )
          })}
        </ol>
      </main>
    </div>
  )
}
