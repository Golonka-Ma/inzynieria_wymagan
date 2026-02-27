import { useState } from 'react'
import {
  ArrowRight,
  CheckCircle,
  Menu,
  PlayCircle,
  Shield,
  Users,
  X,
  Zap,
} from 'lucide-react'

const navLinks = [
  { label: 'Funkcje', href: '#funkcje' },
  { label: 'Opinie', href: '#opinie' },
  { label: 'Cennik', href: '#cta' },
  { label: 'Kontakt', href: '#footer' },
]

const features = [
  {
    icon: Zap,
    title: 'Inteligentny plan dnia',
    description:
      'FocusFlow sam uklada priorytety i bloki pracy, aby Twoj zespol robil mniej, ale dowozil wiecej.',
  },
  {
    icon: Shield,
    title: 'Mniej rozproszen, wiecej skupienia',
    description:
      'Automatyczne filtry i sugestie AI chronia flow pracy i ograniczaja ciagle przelaczanie kontekstu.',
  },
  {
    icon: Users,
    title: 'Spokojna wspolpraca zespolu',
    description:
      'Kazdy zna kolejny krok i deadline. Mniej spotkan statusowych, wiecej realnych efektow.',
  },
]

const testimonials = [
  {
    initials: 'AK',
    name: 'Anna Kowalska',
    role: 'Head of Operations, Nexora',
    quote:
      'Po 3 tygodniach pracy z FocusFlow odzyskalismy srednio 9 godzin tygodniowo na osobe. To robi roznice.',
  },
  {
    initials: 'MP',
    name: 'Michal Piotrowski',
    role: 'CEO, CloudForge',
    quote:
      'Wreszcie narzedzie, ktore porzadkuje kalendarze i zadania bez dodatkowej pracy po stronie zespolu.',
  },
  {
    initials: 'DS',
    name: 'Dominika Sikora',
    role: 'Product Manager, BrightLabs',
    quote:
      'Najbardziej lubie to, ze zespol po prostu wie co robic dalej. Mniej stresu, lepsze tempo, lepsze wyniki.',
  },
]

const companies = ['QuantumSoft', 'NovaBank', 'Skyline AI', 'PixelWorks', 'FutureNet']

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <nav
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6"
        aria-label="Glowna nawigacja"
      >
        <a href="#top" className="flex items-center gap-2" aria-label="FocusFlow - strona glowna">
          <span className="rounded-xl bg-slate-900 p-2">
            <CheckCircle className="h-5 w-5 text-white" />
          </span>
          <span className="text-lg font-semibold tracking-tight text-slate-900">FocusFlow</span>
        </a>

        <button
          type="button"
          className="inline-flex rounded-xl p-2 text-slate-700 md:hidden"
          aria-label={open ? 'Zamknij menu' : 'Otworz menu'}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-slate-600 transition hover:text-slate-900"
              aria-label={`Przejdz do sekcji ${link.label}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            aria-label="Zacznij za darmo"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition-all hover:scale-105 hover:bg-black"
          >
            Zacznij za darmo
          </a>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-700 transition hover:text-slate-900"
                aria-label={`Przejdz do sekcji ${link.label}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              className="mt-2 rounded-full bg-slate-900 px-4 py-2 text-center font-medium text-white transition-all hover:bg-black"
              aria-label="Zacznij za darmo"
              onClick={() => setOpen(false)}
            >
              Zacznij za darmo
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid w-full max-w-6xl gap-10 px-4 pb-14 pt-12 md:grid-cols-2 md:px-6 md:pb-24 md:pt-20"
    >
      <article className="flex flex-col justify-center">
        <p className="mb-5 inline-flex w-fit rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-600">
          FocusFlow for modern teams
        </p>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          Pracuj mniej chaotycznie.
          <span className="mt-1 block text-slate-500">Dowoz wiecej bez nadgodzin.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600">
          FocusFlow pomaga zespolom odzyskac kontrole nad czasem i automatyzuje planowanie dnia
          dzieki AI. Efekt: mniej gaszenia pozarow, wiecej spokojnej, glebokiej pracy.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#cta"
            aria-label="Rozpocznij za darmo"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 font-medium text-white transition-all hover:scale-105 hover:bg-black"
          >
            Rozpocznij za darmo
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="Zobacz 90 sekundowe demo"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 font-medium text-slate-700 transition-all hover:scale-105 hover:border-slate-400 hover:text-slate-900"
          >
            <PlayCircle className="h-5 w-5" />
            Zobacz demo
          </a>
        </div>
      </article>

      <aside
        className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_30px_80px_rgba(15,23,42,0.08)]"
        aria-label="Podglad aplikacji FocusFlow"
      >
        <div className="mb-5 flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
          <span className="text-sm font-medium text-slate-700">Sprint 12</span>
          <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">
            +18% fokus
          </span>
        </div>

        <div className="space-y-3">
          <div className="rounded-2xl border border-slate-200 p-4">
            <p className="text-xs text-slate-500">Dzisiaj</p>
            <p className="mt-1 text-sm font-medium text-slate-900">Plan AI: Deep Work 09:00-11:30</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-4">
            <p className="text-xs text-slate-500">Rozpraszacze</p>
            <p className="mt-1 text-sm font-medium text-slate-900">-42% powiadomien poza priorytetem</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-4">
            <p className="text-xs text-slate-500">Zespol</p>
            <p className="mt-1 text-sm font-medium text-slate-900">87% zadan realizowanych on-time</p>
          </div>
        </div>
      </aside>
    </section>
  )
}

function SocialProof() {
  return (
    <section className="border-y border-slate-200 bg-white py-8">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <p className="text-center text-sm text-slate-500">Zaufali nam innowatorzy z:</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-slate-700">
          {companies.map((company) => (
            <span key={company} className="opacity-80">
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section id="funkcje" className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <div className="mb-10 max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Dlaczego zespoly wybieraja FocusFlow?
        </h2>
        <p className="mt-3 text-slate-600">
          Mniej chaosu, wiecej dowiezionej pracy i wiekszy spokoj calego zespolu.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <article
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.04)] transition-all hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(15,23,42,0.1)]"
            >
              <span className="mb-4 inline-flex rounded-2xl bg-slate-100 p-3">
                <Icon className="h-5 w-5 text-slate-800" />
              </span>
              <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section id="opinie" className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        Co mowia nasi klienci
      </h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="rounded-3xl border border-slate-200 bg-white p-6 transition-all hover:scale-[1.02]"
          >
            <p className="text-sm leading-relaxed text-slate-700">"{testimonial.quote}"</p>
            <div className="mt-5 flex items-center gap-3">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white"
                aria-label={`Awatar ${testimonial.name}`}
              >
                {testimonial.initials}
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-xs text-slate-500">{testimonial.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function BottomCta() {
  return (
    <section id="cta" className="mx-auto w-full max-w-6xl px-4 pb-14 md:px-6 md:pb-20">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-[0_30px_80px_rgba(15,23,42,0.08)] md:p-12">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Gotowy, by odzyskac czas i skupic sie na tym, co naprawde wazne?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
          Dolacz do zespolow, ktore koncza wiecej zadan bez nadgodzin. 14 dni za darmo, bez karty.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#"
            aria-label="Rozpocznij darmowy okres probny FocusFlow"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 font-medium text-white transition-all hover:scale-105 hover:bg-black"
          >
            Rozpocznij darmowy trial
          </a>
          <a
            href="#"
            aria-label="Porownaj plan taryfowy"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 font-medium text-slate-700 transition-all hover:scale-105 hover:border-slate-400 hover:text-slate-900"
          >
            Zobacz plan
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="footer" className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-slate-500 md:flex-row md:px-6">
        <p>&copy; {new Date().getFullYear()} FocusFlow. Wszelkie prawa zastrzezone.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="transition hover:text-slate-900" aria-label="Polityka prywatnosci">
            Polityka prywatnosci
          </a>
          <a href="#" className="transition hover:text-slate-900" aria-label="Kontakt">
            Kontakt
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <Testimonials />
        <BottomCta />
      </main>
      <Footer />
    </div>
  )
}
