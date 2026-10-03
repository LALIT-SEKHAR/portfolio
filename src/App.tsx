import type { CSSProperties } from "react"
import { certifications, currentRole, education, experiences, skills } from "./career"
import { formatDate } from "./formatDate"
import { Icons, issuerIcon, skillIcon } from "./icons"
import { projects } from "./projects"
import { Reveal } from "./Reveal"
import { ThemeToggle } from "./ThemeToggle"
import { useTheme } from "./useTheme"

const cvHref = `${import.meta.env.BASE_URL}Lalit-Sekhar-Behera.pdf`

const timeline = [...projects].sort((a, b) => b.created.localeCompare(a.created))
const featured = timeline.slice(0, 2)
const rest = timeline.slice(2)

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="page">
      <a className="skip" href="#work">
        Skip to projects
      </a>

      <div className="atmosphere" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <header className="nav-wrap">
        <div className="nav">
          <a className="nav-brand" href="#top">
            <span className="nav-mark" aria-hidden="true">
              L
            </span>
            Lalit Behera
          </a>
          <nav aria-label="Primary">
            <a className="nav-link" href="#work">
              <Icons.Stack size={16} weight="bold" aria-hidden="true" />
              Work
            </a>
            <a className="nav-link" href="#career">
              <Icons.Briefcase size={16} weight="bold" aria-hidden="true" />
              Experience
            </a>
            <a className="nav-link" href="#contact">
              <Icons.EnvelopeSimple size={16} weight="bold" aria-hidden="true" />
              Contact
            </a>
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <a className="nav-cv" href={cvHref}>
              <Icons.DownloadSimple size={16} weight="bold" aria-hidden="true" />
              Download CV
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-name">
          <div className="hero-copy">
            <p className="status reveal-item" style={delay(0)}>
              <span className="status-dot" aria-hidden="true" />
              <Icons.MapPin size={14} weight="fill" aria-hidden="true" />
              Open to roles · Bangalore
            </p>
            <h1 id="hero-name" className="reveal-item" style={delay(80)}>
              Lalit Sekhar Behera
            </h1>
            <p className="hero-lede reveal-item" style={delay(160)}>
              Full-stack engineer shipping React, TypeScript, and services for enterprise SaaS
              products.
            </p>
            <div className="hero-actions reveal-item" style={delay(240)}>
              <a className="btn-primary" href="#work">
                View selected work
                <span className="btn-icon" aria-hidden="true">
                  <Icons.ArrowRight size={16} weight="bold" />
                </span>
              </a>
              <a className="btn-ghost" href="mailto:lalitsekhar1999@gmail.com">
                <Icons.EnvelopeSimple size={16} weight="bold" aria-hidden="true" />
                Email me
              </a>
            </div>
          </div>

          <aside className="hero-panel reveal-item" style={delay(280)} aria-label="Current focus">
            <p className="panel-label">
              <Icons.Briefcase size={14} weight="bold" aria-hidden="true" />
              Currently
            </p>
            <p className="panel-role">{currentRole.title}</p>
            <p className="panel-org">
              <Icons.Buildings size={15} weight="bold" aria-hidden="true" />
              {currentRole.org}
              <span> · {currentRole.place}</span>
            </p>
            <p className="panel-dates">
              <Icons.CalendarBlank size={15} weight="bold" aria-hidden="true" />
              {currentRole.dates}
            </p>
            <ul className="panel-skills">
              {skills.slice(0, 5).map((skill) => {
                const SkillIcon = skillIcon(skill)
                return (
                  <li key={skill}>
                    <SkillIcon size={13} weight="bold" aria-hidden="true" />
                    {skill}
                  </li>
                )
              })}
            </ul>
          </aside>
        </section>

        <section id="work" className="section work" aria-labelledby="work-heading">
          <Reveal className="section-intro">
            <h2 id="work-heading">
              <Icons.Stack size={28} weight="bold" aria-hidden="true" />
              Selected work
            </h2>
            <p>Product apps and experiments, newest first.</p>
          </Reveal>

          <div className="featured">
            {featured.map((project, index) => (
              <Reveal
                key={project.name}
                as="article"
                className={`featured-shell featured-shell--${index === 0 ? "lead" : "side"}`}
                delay={index * 90}
              >
                <div className={`featured-card featured-card--${index === 0 ? "lead" : "side"}`}>
                  <div className="featured-top">
                    <span className="featured-index">0{index + 1}</span>
                    <p className="meta-line">
                      <Icons.CalendarBlank size={13} weight="bold" aria-hidden="true" />
                      <time dateTime={project.created}>{formatDate(project.created)}</time>
                      <span aria-hidden="true">·</span>
                      <span>Updated {formatDate(project.updated)}</span>
                    </p>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <p className="links">
                    {project.live ? (
                      <a className="link-chip link-chip--live" href={project.live}>
                        <Icons.ArrowSquareOut size={14} weight="bold" aria-hidden="true" />
                        Live demo
                      </a>
                    ) : null}
                    {project.repos.map((repo) => (
                      <a className="link-chip" key={repo.href} href={repo.href}>
                        <Icons.GithubLogo size={14} weight="bold" aria-hidden="true" />
                        {repo.label}
                      </a>
                    ))}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <ol className="project-list">
            {rest.map((project, index) => {
              const year = project.created.slice(0, 4)
              const previousYear = rest[index - 1]?.created.slice(0, 4)
              return (
                <Reveal as="li" key={project.name} delay={Math.min(index, 6) * 40}>
                  {year !== previousYear ? <p className="year">{year}</p> : null}
                  <article className="project-row">
                    <div className="project-copy">
                      <h3>{project.name}</h3>
                      <p>{project.summary}</p>
                    </div>
                    <div className="project-meta">
                      <p className="meta-line">
                        <Icons.CalendarBlank size={13} weight="bold" aria-hidden="true" />
                        <time dateTime={project.created}>{formatDate(project.created)}</time>
                      </p>
                      <p className="links">
                        {project.live ? (
                          <a className="link-chip link-chip--live" href={project.live}>
                            <Icons.ArrowSquareOut size={14} weight="bold" aria-hidden="true" />
                            Live
                          </a>
                        ) : null}
                        {project.repos.map((repo) => (
                          <a className="link-chip" key={repo.href} href={repo.href}>
                            <Icons.GithubLogo size={14} weight="bold" aria-hidden="true" />
                            {repo.label}
                          </a>
                        ))}
                      </p>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </ol>
        </section>

        <section id="career" className="section career" aria-labelledby="career-heading">
          <Reveal className="section-intro">
            <h2 id="career-heading">
              <Icons.Briefcase size={28} weight="bold" aria-hidden="true" />
              Experience
            </h2>
            <p>Building and modernizing SaaS platforms end to end.</p>
          </Reveal>

          <ol className="experience">
            {experiences.map((company, index) => (
              <Reveal as="li" key={company.org} className="experience-item" delay={index * 80}>
                <div className="experience-rail">
                  <span className="role-dot" aria-hidden="true" />
                </div>
                <div className="experience-body">
                  <header className="experience-company">
                    <h3>
                      <Icons.Buildings size={18} weight="bold" aria-hidden="true" />
                      {company.org}
                    </h3>
                    <p className="org">
                      <Icons.MapPin size={14} weight="bold" aria-hidden="true" />
                      {company.place}
                    </p>
                  </header>

                  <ol className="positions">
                    {company.positions.map((position) => (
                      <li key={`${company.org}-${position.title}-${position.dates}`}>
                        <div className="position-head">
                          <h4>{position.title}</h4>
                          <p className="role-dates">
                            <Icons.CalendarBlank size={13} weight="bold" aria-hidden="true" />
                            {position.dates}
                          </p>
                        </div>
                        <ul>
                          {position.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>
            ))}
          </ol>

          <div className="profile-extras">
            <Reveal as="article" className="edu-band">
              <div className="edu-mark" aria-hidden="true">
                <Icons.GraduationCap size={28} weight="bold" />
              </div>
              <div className="edu-copy">
                <p className="edu-label">Education</p>
                <h3>
                  {education.credential}
                  <span> · {education.school}</span>
                </h3>
                <p className="org">
                  <Icons.MapPin size={14} weight="bold" aria-hidden="true" />
                  {education.place}
                  <span> · {education.dates}</span>
                </p>
              </div>
            </Reveal>

            <Reveal className="certs-block" delay={80}>
              <div className="block-head">
                <h3>
                  <Icons.Certificate size={18} weight="bold" aria-hidden="true" />
                  Certifications
                </h3>
                <p>{certifications.length} verified credentials</p>
              </div>
              <ul className="cert-grid">
                {certifications.map((item) => {
                  const IssuerIcon = issuerIcon(item.issuer)
                  return (
                    <li key={item.href}>
                      <a className="cert-card" href={item.href} target="_blank" rel="noreferrer">
                        <span className="cert-icon" aria-hidden="true">
                          <IssuerIcon size={18} weight="bold" />
                        </span>
                        <span className="cert-copy">
                          <span className="cert-name">
                            {item.name}
                            <Icons.ArrowSquareOut size={13} weight="bold" aria-hidden="true" />
                          </span>
                          <span className="cert-meta">
                            {item.issuer}
                            {item.issued ? ` · ${item.issued}` : null}
                          </span>
                        </span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </Reveal>

            <Reveal className="skills-block" delay={140}>
              <div className="block-head">
                <h3>
                  <Icons.Code size={18} weight="bold" aria-hidden="true" />
                  Skills
                </h3>
                <p>Tools and stack used in production</p>
              </div>
              <ul className="skill-list">
                {skills.map((skill) => {
                  const SkillIcon = skillIcon(skill)
                  return (
                    <li key={skill}>
                      <SkillIcon size={13} weight="bold" aria-hidden="true" />
                      {skill}
                    </li>
                  )
                })}
              </ul>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="contact-band" aria-labelledby="contact-heading">
          <Reveal className="contact-inner">
            <h2 id="contact-heading">Ready for the next role.</h2>
            <p>Open to full-stack roles and product engineering work. Happy to relocate.</p>
            <div className="hero-actions">
              <a className="btn-primary btn-primary--on-dark" href="mailto:lalitsekhar1999@gmail.com">
                <Icons.EnvelopeSimple size={16} weight="bold" aria-hidden="true" />
                lalitsekhar1999@gmail.com
              </a>
              <a className="btn-ghost btn-ghost--on-dark" href={cvHref}>
                <Icons.DownloadSimple size={16} weight="bold" aria-hidden="true" />
                Download CV
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="footer">
        <div>
          <p className="footer-name">Lalit Sekhar Behera</p>
          <p className="footer-note">
            <Icons.MapPin size={14} weight="bold" aria-hidden="true" />
            Bangalore · Open to relocate
          </p>
        </div>
        <p className="contact">
          <a href="mailto:lalitsekhar1999@gmail.com">
            <Icons.EnvelopeSimple size={16} weight="bold" aria-hidden="true" />
            Email
          </a>
          <a href="https://www.linkedin.com/in/lalit-sekhar">
            <Icons.LinkedinLogo size={16} weight="bold" aria-hidden="true" />
            LinkedIn
          </a>
          <a href="https://github.com/LALIT-SEKHAR">
            <Icons.GithubLogo size={16} weight="bold" aria-hidden="true" />
            GitHub
          </a>
          <a href={cvHref}>
            <Icons.DownloadSimple size={16} weight="bold" aria-hidden="true" />
            CV
          </a>
        </p>
      </footer>
    </div>
  )
}
