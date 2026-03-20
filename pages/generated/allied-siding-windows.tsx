export default function Page() {
  const page = {
    slug: "allied-siding-windows",
    content: {
      company_name: "Allied Siding & Windows",
      niche: "residential siding and window replacement",
      location_label: "Houston, TX",
      hero: {
        headline:
          "Expert Siding & Window Replacement—Free On-Site Estimate with Licensed Local Installers",
        subheadline:
          "Upgrade your home’s curb appeal and energy efficiency with Houston’s trusted siding and window specialists. No-risk, free estimates from certified crews using top manufacturer products—financing available.",
        primary_cta: "Request a Free Estimate",
        secondary_cta: "See Recent Projects",
      },
      sections: [
        {
          id: "services",
          kind: "services",
          heading: "Our Services: Siding & Window Solutions for Your Home",
          body: "Allied Siding & Windows provides comprehensive exterior upgrades tailored for Houston-area homeowners. From full siding replacement to custom window installations, our licensed crews deliver outstanding results with durable, energy-efficient products.",
          bullets: [
            "Full siding replacement and repair (vinyl, fiber cement, wood options)",
            "Professional window installation and replacement—double and triple pane options",
            "Storm and hail damage restoration (insurance claim expertise)",
            "On-site needs assessment and detailed, no-surprise estimates",
            "Financing and seasonal promotions available",
          ],
        },
        {
          id: "why-choose-us",
          kind: "benefits",
          heading: "Why Choose Allied Siding & Windows?",
          body: "Work with a local team that puts quality craftsmanship, transparency, and customer satisfaction first. Our Houston-based experts ensure your project is completed on time and backed by product and installation warranties.",
          bullets: [
            "Licensed and insured local crews—no subcontractors",
            "Manufacturer-certified installers for leading brands (James Hardie, Andersen, Pella)",
            "Comprehensive warranties: product & workmanship",
            "Upfront, competitive pricing—no hidden fees",
            "Flexible financing to fit your budget",
          ],
        },
        {
          id: "project-gallery",
          kind: "visual_proof",
          heading: "See Our Work: Before & After Transformations",
          body: "View real Houston homes upgraded by Allied Siding & Windows. Browse our curated gallery to see recent projects, close-ups of quality materials, and the remarkable difference we make.",
          bullets: [],
        },
        {
          id: "process",
          kind: "how_it_works",
          heading: "How It Works: Simple, Hassle-Free Process",
          body: "From your first call to the final walkthrough, Allied Siding & Windows makes remodeling stress-free. Here’s what to expect:",
          bullets: [
            "Step 1: Free On-Site Estimate & Consultation",
            "Step 2: Custom Proposal with Detailed Scope & Pricing",
            "Step 3: Professional Installation by Certified Crews",
            "Step 4: Final Quality Check & Warranty Activation",
          ],
        },
        {
          id: "testimonials",
          kind: "social_proof",
          heading: "What Our Customers Say",
          body: "Homeowners across Houston trust Allied Siding & Windows for quality, honesty, and proven results.",
          bullets: [
            "“Fast, clean installation and my house looks brand new. Highly recommend!”",
            "“Very professional team. The siding and windows made a big impact on our energy bills.”",
            "“They handled our insurance claim efficiently and finished ahead of schedule.”",
          ],
        },
        {
          id: "faq",
          kind: "faq",
          heading: "Frequently Asked Questions",
          body: "",
          bullets: [
            "How long will my siding or window project take? — Most projects completed in 1-3 days, depending on size.",
            "Are your crews licensed and insured? — Yes, all crews are fully licensed, insured, and manufacturer certified.",
            "Can I finance my project? — We offer a range of flexible financing options to fit your needs.",
            "Do I need to be home during installation? — No, but we recommend being available for the initial walkthrough and final inspection.",
            "Do materials come with a warranty? — All products and labor are backed by manufacturer and workmanship warranties.",
          ],
        },
        {
          id: "final-cta",
          kind: "cta",
          heading: "Start Your Home Transformation Today",
          body: "Get expert advice, transparent pricing, and a zero-pressure proposal from Houston’s siding and window leaders. Limited-time offers and easy financing available.",
          bullets: [
            "Book your free on-site estimate",
            "Ask about current siding and window promotions",
            "Speak with a certified estimator today",
          ],
        },
      ],
    },
  } as const;

  const { content } = page;
  const services = content.sections.find((s) => s.kind === "services");
  const benefits = content.sections.find((s) => s.kind === "benefits");
  const visualProof = content.sections.find((s) => s.kind === "visual_proof");
  const process = content.sections.find((s) => s.kind === "how_it_works");
  const testimonials = content.sections.find((s) => s.kind === "social_proof");
  const faq = content.sections.find((s) => s.kind === "faq");
  const finalCta = content.sections.find((s) => s.kind === "cta");

  const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
    <div className="mb-8 md:mb-10">
      <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-3xl text-slate-600">{subtitle}</p> : null}
    </div>
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-blue-400 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-cyan-400 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-indigo-500 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
          <p className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-200">
            {content.location_label} • {content.niche}
          </p>
          <h1 className="max-w-4xl text-3xl font-black leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {content.hero.headline}
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-200 sm:text-lg md:text-xl">{content.hero.subheadline}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#final-cta"
              className="group inline-flex items-center rounded-md bg-amber-400 px-6 py-3 text-sm font-bold text-slate-900 shadow-lg shadow-amber-500/20 transition hover:-translate-y-0.5 hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              {content.hero.primary_cta}
              <span className="ml-2 transition group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#project-gallery"
              className="inline-flex items-center rounded-md border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              {content.hero.secondary_cta}
            </a>
          </div>
        </div>
      </section>

      {services && (
        <section id={services.id} className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
          <SectionTitle title={services.heading} subtitle={services.body} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.bullets.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700">✓</div>
                <p className="text-sm font-medium text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {benefits && (
        <section id={benefits.id} className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <SectionTitle title={benefits.heading} subtitle={benefits.body} />
            <div className="grid gap-6 md:grid-cols-2">
              {benefits.bullets.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg border border-slate-200 p-4">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {visualProof && (
        <section id={visualProof.id} className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
          <SectionTitle title={visualProof.heading} subtitle={visualProof.body} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100 p-0 shadow-sm transition hover:shadow-lg"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-300 to-slate-200" />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent p-4">
                  <p className="text-sm font-semibold text-white">Houston Project #{n}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {process && (
        <section id={process.id} className="bg-slate-900 py-16 text-white md:py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <SectionTitle title={process.heading} subtitle={process.body} />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {process.bullets.map((step) => (
                <div
                  key={step}
                  className="rounded-xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <p className="text-sm font-semibold text-cyan-200">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {testimonials && (
        <section id={testimonials.id} className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
          <SectionTitle title={testimonials.heading} subtitle={testimonials.body} />
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.bullets.map((quote) => (
              <blockquote
                key={quote}
                className="rounded-xl border border-slate-200 bg-white p-6 text-slate-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-sm leading-relaxed">{quote}</p>
              </blockquote>
            ))}
          </div>
        </section>
      )}

      {faq && (
        <section id={faq.id} className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-6 md:px-8">
            <SectionTitle title={faq.heading} />
            <div className="space-y-3">
              {faq.bullets.map((qa) => {
                const [q, a] = qa.split(" — ");
                return (
                  <details key={qa} className="group rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <summary className="cursor-pointer list-none font-semibold text-slate-900 marker:hidden">
                      <span className="inline-flex items-center gap-2">
                        <span className="text-blue-700 transition group-open:rotate-45">＋</span>
                        {q}
                      </span>
                    </summary>
                    <p className="mt-3 text-sm text-slate-700">{a}</p>
                  </details>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {finalCta && (
        <section id={finalCta.id} className="bg-gradient-to-r from-blue-700 to-indigo-800 py-16 text-white md:py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-sm md:p-10">
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{finalCta.heading}</h2>
              <p className="mt-3 max-w-3xl text-blue-100">{finalCta.body}</p>
              <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
                {finalCta.bullets.map((item) => (
                  <li key={item} className="rounded-md bg-white/10 px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex items-center rounded-md bg-amber-400 px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-amber-300"
                >
                  {content.hero.primary_cta}
                </a>
                <a
                  href="#project-gallery"
                  className="inline-flex items-center rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {content.hero.secondary_cta}
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}