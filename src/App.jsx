import { useEffect } from 'react'
import { profile } from './data/profile.js'

function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'))
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

const nav = [
  { href: '#about', label: '关于' },
  { href: '#skills', label: '能力' },
  { href: '#projects', label: '项目' },
  { href: '#contact', label: '联系' },
]

function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-lines" />
      <div className="blob absolute -top-40 left-1/4 h-[420px] w-[420px] rounded-full bg-cyan-500/20" />
      <div
        className="blob absolute top-1/3 -right-24 h-[380px] w-[380px] rounded-full bg-indigo-500/20"
        style={{ animationDelay: '-6s' }}
      />
      <div
        className="blob absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-fuchsia-500/10"
        style={{ animationDelay: '-11s' }}
      />
    </div>
  )
}

function SectionTitle({ index, title, subtitle }) {
  return (
    <div className="reveal mb-10">
      <div className="mb-2 flex items-center gap-3 text-xs tracking-[0.28em] text-cyan-300/70 uppercase">
        <span>{String(index).padStart(2, '0')}</span>
        <span className="h-px w-10 bg-cyan-300/40" />
      </div>
      <h2 className="text-2xl font-semibold text-slate-100 sm:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-2 max-w-2xl text-sm text-slate-400">{subtitle}</p> : null}
    </div>
  )
}

function Avatar() {
  const initial = profile.name.trim().slice(0, 1) || 'A'
  return (
    <div className="relative h-20 w-20 shrink-0">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 opacity-70 blur-md" />
      <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-slate-900">
        {profile.avatar ? (
          <img src={profile.avatar} alt={profile.name} className="h-full w-full object-cover" />
        ) : (
          <span className="text-2xl font-semibold text-cyan-200">{initial}</span>
        )}
      </div>
    </div>
  )
}

function Hero() {
  return (
    <header className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-24">
      <div className="reveal is-visible flex items-center gap-5">
        <Avatar />
        <div>
          <p className="text-sm text-cyan-300/80">{profile.handle}</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
            <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="mt-2 text-sm text-slate-400">{profile.role}</p>
        </div>
      </div>

      <h2 className="reveal is-visible mt-12 max-w-2xl text-4xl leading-tight font-semibold text-slate-100 sm:text-5xl">
        {profile.slogan}
      </h2>

      <div className="reveal is-visible mt-8 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
        >
          看看项目
        </a>
        <a
          href="#contact"
          className="rounded-full border border-white/15 px-6 py-3 text-sm text-slate-200 transition hover:border-cyan-300/60 hover:text-cyan-200"
        >
          联系我
        </a>
      </div>

      <div className="reveal is-visible mt-16 flex flex-wrap gap-8">
        {profile.stats.map((item) => (
          <div key={item.label}>
            <div className="text-2xl font-semibold text-slate-100">{item.value}</div>
            <div className="mt-1 text-xs tracking-wide text-slate-500">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[11px] tracking-[0.3em] text-slate-500 uppercase sm:flex">
        scroll
        <span className="h-10 w-px bg-gradient-to-b from-slate-500/70 to-transparent" />
      </div>
    </header>
  )
}

function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-5xl scroll-mt-24 px-6 py-24">
      <SectionTitle index={1} title="关于我" subtitle="一段话认识我，剩下的交给项目。" />
      <div className="reveal grid gap-8 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-[15px] leading-8 text-slate-300">
          {profile.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <aside className="card-glow rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-xs tracking-[0.2em] text-slate-500 uppercase">Currently</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
              正在做：一个 AI 应用（替换成你的项目）
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
              在学：Agent 编排与评测
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-400" />
              开放：合作 / 实习 / 开源
            </li>
          </ul>
        </aside>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-5xl scroll-mt-24 px-6 py-24">
      <SectionTitle index={2} title="能力" subtitle="每天都在用的工具，而不是简历上的名词。" />
      <div className="grid gap-4 sm:grid-cols-2">
        {profile.skills.map((skill) => (
          <div
            key={skill.name}
            className="reveal card-glow rounded-2xl border border-white/10 bg-white/[0.03] p-5"
          >
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-slate-200">{skill.name}</span>
              <span className="text-xs text-slate-500">{skill.level}%</span>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400 transition-[width] duration-700"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-5xl scroll-mt-24 px-6 py-24">
      <SectionTitle index={3} title="项目" subtitle="挑几个能说明问题的事情。" />
      <div className="grid gap-5 md:grid-cols-2">
        {profile.projects.map((project) => {
          const Wrapper = project.link ? 'a' : 'div'
          return (
            <Wrapper
              key={project.title}
              href={project.link || undefined}
              target={project.link ? '_blank' : undefined}
              rel={project.link ? 'noreferrer' : undefined}
              className="reveal card-glow group block rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-medium text-slate-100">{project.title}</h3>
                <span className="text-slate-500 transition group-hover:text-cyan-300">
                  {project.link ? '↗' : '·'}
                </span>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-400">{project.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Wrapper>
          )
        })}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-5xl scroll-mt-24 px-6 py-24">
      <SectionTitle index={4} title="联系" subtitle="想聊 AI、聊产品，或者只是打个招呼都行。" />
      <div className="reveal grid gap-4 sm:grid-cols-3">
        {profile.contacts.map((contact) => {
          const Wrapper = contact.href ? 'a' : 'div'
          return (
            <Wrapper
              key={contact.label}
              href={contact.href || undefined}
              target={contact.href?.startsWith('http') ? '_blank' : undefined}
              rel={contact.href?.startsWith('http') ? 'noreferrer' : undefined}
              className="card-glow block rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-300/40"
            >
              <p className="text-xs tracking-[0.2em] text-slate-500 uppercase">{contact.label}</p>
              <p className="mt-3 text-sm break-all text-slate-200">{contact.value}</p>
            </Wrapper>
          )
        })}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="mx-auto w-full max-w-5xl px-6 pb-16">
      <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} {profile.name} · 用 React 与 Tailwind 手写</p>
        <a href="#top" className="transition hover:text-slate-300">
          回到顶部 ↑
        </a>
      </div>
    </footer>
  )
}

export default function App() {
  useReveal()

  return (
    <div id="top" className="relative min-h-screen font-sans">
      <Background />

      <nav className="sticky top-0 z-20 border-b border-white/5 bg-[#0b0f16]/70 backdrop-blur-lg">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-medium text-slate-200">
            {profile.name}
            <span className="text-cyan-400">.</span>
          </a>
          <div className="flex items-center gap-5 text-xs text-slate-400">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-cyan-300">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
