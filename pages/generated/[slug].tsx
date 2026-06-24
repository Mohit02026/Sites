import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

interface PageData {
  template_variant: 'A' | 'B' | 'C'
  business_name: string
  phone: string
  city: string
  state: string
  category: string
  tagline: string
  hero: { headline: string; subheadline: string; cta: string }
  services: string[]
  benefits: string[]
  process_steps: string[]
  testimonials: string[]
  faq: Array<{ q: string; a: string }>
  published: boolean
}

interface Props {
  slug: string
  content: PageData | null
}

export default function SitePage({ content }: Props) {
  if (!content) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-700 mb-2">Page unavailable</h1>
          <p className="text-slate-400 text-sm">This page is no longer active.</p>
        </div>
      </main>
    )
  }

  const heroGradient =
    content.template_variant === 'A'
      ? 'from-blue-900 via-slate-900 to-indigo-900'
      : content.template_variant === 'C'
      ? 'from-slate-800 to-slate-900'
      : 'from-slate-900 via-blue-950 to-slate-900'

  return (
    <>
      <Head>
        <title>{content.business_name} — {content.city}</title>
        <meta name="description" content={content.hero.subheadline} />
      </Head>
      <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">

        <section className={`bg-gradient-to-br ${heroGradient} text-white relative overflow-hidden`}>
          {content.template_variant === 'A' && (
            <div className="absolute inset-0 opacity-20">
              <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-blue-400 blur-3xl" />
              <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-cyan-400 blur-3xl" />
            </div>
          )}
          <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
            <p className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-200">
              {content.city} · {content.category}
            </p>
            <h1 className="max-w-4xl text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              {content.hero.headline}
            </h1>
            <p className="mt-5 max-w-2xl text-base text-slate-300 sm:text-lg">{content.hero.subheadline}</p>
            <div className="mt-8">
              <a href={`tel:${content.phone}`}
                className="inline-flex items-center rounded-lg bg-amber-400 px-6 py-3 text-sm font-bold text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-300">
                {content.hero.cta}
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-8">What We Do</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.services.map((s, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition">
                <div className="mb-3 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold">{i + 1}</div>
                <p className="text-sm font-medium text-slate-700">{s}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-8">Why Choose {content.business_name}?</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {content.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg border border-slate-100 p-4 bg-slate-50">
                  <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-emerald-500 flex-shrink-0" />
                  <p className="text-sm text-slate-700">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-900 py-16 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-extrabold mb-8">How It Works</h2>
            <div className="grid gap-4 md:grid-cols-4">
              {content.process_steps.map((step, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs text-cyan-300 font-semibold mb-2">Step {i + 1}</p>
                  <p className="text-sm text-slate-200">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-8">What People Say</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {content.testimonials.map((t, i) => (
              <blockquote key={i} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm text-sm text-slate-700 leading-relaxed">
                {t}
              </blockquote>
            ))}
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {content.faq.map((item, i) => (
                <details key={i} className="group rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <summary className="cursor-pointer list-none font-semibold text-slate-900 flex items-center gap-2">
                    <span className="text-blue-600 group-open:rotate-45 transition-transform inline-block">+</span>
                    {item.q}
                  </summary>
                  <p className="mt-3 text-sm text-slate-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-700 to-indigo-800 py-16 text-white">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="text-2xl font-extrabold mb-3">Ready to get started?</h2>
            <p className="text-blue-200 mb-8">{content.tagline}</p>
            <a href={`tel:${content.phone}`}
              className="inline-flex items-center rounded-lg bg-amber-400 px-8 py-3.5 text-base font-bold text-slate-900 transition hover:bg-amber-300">
              Call {content.phone}
            </a>
          </div>
        </section>

      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug as string
  const apiUrl = process.env.API_URL ?? 'https://leadpeek-production.up.railway.app'
  try {
    const res = await fetch(`${apiUrl}/api/pages/${slug}`)
    if (!res.ok) return { notFound: true }
    const content = await res.json() as PageData
    if (!content.published) return { notFound: true }
    return { props: { slug, content }, revalidate: 60 }
  } catch {
    return { notFound: true }
  }
}
