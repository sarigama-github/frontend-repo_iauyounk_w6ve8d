import { useMemo } from 'react'
import { Code2, Github } from 'lucide-react'

function App() {
  const mountains = useMemo(
    () =>
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop',
    []
  )
  const pfp = 'https://github.com/zeozcb.png'
  const github = 'https://github.com/zeozcb'

  return (
    <div className="min-h-screen bg-[#0a0b10] text-white selection:bg-white/20 selection:text-white">
      {/* Hero / Header with snowy mountains */}
      <header className="relative h-[55vh] w-full overflow-hidden">
        <img
          src={mountains}
          alt="Snowy mountains"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),rgba(10,11,16,0.85))] mix-blend-soft-light" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#0a0b10]" />

        <div className="relative z-10 h-full flex items-end justify-center pb-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight neon-white drop-shadow-[0_0_20px_rgba(255,255,255,0.35)]">
              zeozcb
            </h1>
            <p className="mt-3 text-sm md:text-base text-white/80">
              Atmospheric portfolio • Dark • White neon
            </p>
          </div>
        </div>

        {/* Avatar/PFP */}
        <div className="absolute left-1/2 bottom-[-64px] -translate-x-1/2 z-20">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-white/20 blur-xl" />
            <img
              src={pfp}
              alt="Profile"
              className="relative h-28 w-28 md:h-32 md:w-32 rounded-full object-cover ring-2 ring-white/60 shadow-[0_0_40px_rgba(255,255,255,0.35)]"
            />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="px-6 md:px-10 lg:px-14 pt-24 pb-16">
        {/* About / Quick intro */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-[0_0_40px_rgba(255,255,255,0.08)]">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-semibold neon-white">Hello, I'm <span className="opacity-90">zeozcb</span></h2>
                <p className="mt-3 text-white/80 leading-relaxed">
                  Python junior developer building small automations and chat bots. I enjoy
                  minimal, atmospheric interfaces and clean code.
                </p>
              </div>
              <div className="flex-shrink-0 w-full md:w-auto flex items-center justify-center md:justify-end">
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-white hover:bg-white/10 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.08)]"
                >
                  <Github className="h-5 w-5 text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
                  <span className="font-medium">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="max-w-5xl mx-auto mt-10">
          <h3 className="text-xl md:text-2xl font-semibold neon-white mb-5">Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Python Junior */}
            <SkillCard
              title="Python (Junior)"
              subtitle="Scripting • APIs • Automation"
              icon={<Code2 className="h-7 w-7 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]" />}
            />

            {/* Telegram Bot Dev */}
            <SkillCard
              title="Telegram Bot Dev"
              subtitle="Bots • Webhooks • Automations"
              icon={<TelegramIcon />}
            />

            {/* Discord Bot Dev */}
            <SkillCard
              title="Discord Bot Dev"
              subtitle="Slash commands • Events"
              icon={<DiscordIcon />}
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="max-w-5xl mx-auto mt-14 text-center text-white/60">
          <p className="text-sm">© {new Date().getFullYear()} zeozcb • Crafted in a dark, snowy vibe</p>
        </footer>
      </main>
    </div>
  )
}

function SkillCard({ title, subtitle, icon }) {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm shadow-[0_0_30px_rgba(255,255,255,0.06)] hover:shadow-[0_0_45px_rgba(255,255,255,0.12)] transition-shadow">
      <div className="absolute -inset-px rounded-2xl pointer-events-none bg-gradient-to-br from-white/10 to-transparent opacity-40" />
      <div className="relative flex items-start gap-4">
        <div className="shrink-0">{icon}</div>
        <div>
          <h4 className="text-lg font-semibold neon-white">{title}</h4>
          <p className="text-sm text-white/75 mt-1">{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

function TelegramIcon() {
  // Dark-white neon style Telegram logo (SVG)
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M9.036 15.803 8.86 19.4c.341 0 .489-.146.666-.322l1.6-1.541 3.316 2.433c.608.334 1.042.158 1.21-.56l2.19-10.29c.224-1.04-.376-1.45-.98-1.195L4.28 10.27c-1 .4-.98.973-.169 1.23l3.29 1.028 7.64-4.82c.36-.218.69-.097.42.12l-6.426 5.975z" />
    </svg>
  )
}

function DiscordIcon() {
  // Dark-white neon style Discord logo (SVG)
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3c-.2.361-.431.848-.592 1.232a18.27 18.27 0 0 0-4.932 0A8.258 8.258 0 0 0 10.442 3c-1.336.24-2.62.64-3.76 1.17C3.862 6.385 3.265 9.41 3.5 12.395c1.58 1.176 3.11 1.892 4.606 2.366.37-.512.701-1.06.988-1.635-.547-.206-1.07-.458-1.565-.752.131-.097.259-.199.382-.304 3.012 1.406 6.276 1.406 9.26 0 .123.105.251.207.382.304-.494.295-1.017.546-1.565.752.287.575.617 1.123.988 1.635 1.497-.474 3.027-1.19 4.607-2.366.377-4.784-.638-7.77-2.866-10.026ZM9.8 12.348c-.9 0-1.636-.823-1.636-1.837 0-1.013.73-1.837 1.636-1.837.905 0 1.64.825 1.636 1.837 0 1.014-.73 1.837-1.636 1.837Zm4.4 0c-.9 0-1.636-.823-1.636-1.837 0-1.013.73-1.837 1.636-1.837.905 0 1.64.825 1.636 1.837 0 1.014-.73 1.837-1.636 1.837Z" />
    </svg>
  )
}

export default App
