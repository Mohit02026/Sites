export default function Page() {
  const page = {
    slug: "allied-siding-windows",
    content: {
      company_name: "Allied Siding & Windows",
      niche: "residential siding and window replacement",
      location_label: "",
      hero: {
        headline: "Transform Your Home with Quality Siding & Energy-Efficient Windows",
        subheadline:
          "Upgrade your home's curb appeal and comfort with expert installation of siding and windows. Get a free, on-site estimate from local professionals trusted for long-lasting results and reliable service.",
        primary_cta: "Request a Free Estimate",
        secondary_cta: "Schedule a Virtual Consultation",
      },
      sections: [
        {
          id: "services",
          kind: "services",
          heading: "Our Exterior Remodeling Services",
          body: "Allied Siding & Windows specializes in premium exterior home upgrades to enhance beauty, energy efficiency, and protection. Our experienced team offers personalized recommendations and professional installation for every project.",
          bullets: [
            "Siding replacement and installation (vinyl, wood, fiber cement, and more)",
            "High-performance window installation in a range of styles and materials",
            "Exterior door installation and replacement",
            "Trim and gutter upgrades for improved drainage and appearance",
            "Free or low-cost on-site estimates and product selection guidance",
            "Full-service project management, from consultation to cleanup",
          ],
        },
        {
          id: "benefits",
          kind: "benefits",
          heading: "Why Choose Allied Siding & Windows?",
          body: "Homeowners trust us for our combination of industry expertise, quality products, and customer-first approach. We help you get the best value from your exterior remodel, backed by peace-of-mind warranties.",
          bullets: [
            "Locally established team with a reputation for top-rated service",
            "Manufacturer partnerships offering durable, energy-efficient products",
            "Transparent pricing and easy financing options for any budget",
            "Licensed, insured, and committed to safety on every job site",
            "Strong warranties protecting your investment for years to come",
          ],
        },
        {
          id: "process",
          kind: "process",
          heading: "How It Works: Simple 3-Step Process",
          body: "Our streamlined process makes exterior remodeling stress-free from first contact to final walkthrough.",
          bullets: [
            "1. Free Consultation: We assess your needs and deliver a detailed project estimate.",
            "2. Professional Installation: Skilled crews install your chosen products efficiently and respectfully.",
            "3. Final Inspection: We review the results with you and ensure complete satisfaction, followed by thorough cleanup.",
          ],
        },
        {
          id: "social-proof",
          kind: "social_proof",
          heading: "Trusted by Homeowners Like You",
          body: "See what your neighbors have to say about their experience with Allied Siding & Windows.",
          bullets: [
            '"From estimate to installation, everything was seamless and the new windows look amazing!"',
            '"Allied replaced our old siding with fiber cement—great craftsmanship and fair pricing."',
            '"The crew was professional, on time, and left our yard spotless. Highly recommended!"',
          ],
        },
        {
          id: "credentials",
          kind: "credentials",
          heading: "Certified Quality, Guaranteed Results",
          body: "We back every project with industry certifications and warranties, giving you confidence from day one.",
          bullets: [
            "Average customer rating of 4.7+ on Google",
            "Licensed, insured, and manufacturer-certified installation teams",
            "Partnerships with leading brands in siding and windows",
            "Comprehensive product and labor warranties included",
          ],
        },
        {
          id: "faq",
          kind: "faq",
          heading: "Frequently Asked Questions",
          body: "",
          bullets: [
            "How much does siding or window replacement cost? Our quotes are customized, but most projects start at competitive regional rates. Request an estimate for specifics.",
            "How long does installation take? Most siding and window projects are completed within 1–2 days after materials arrive.",
            "Do you offer financing? Yes, flexible financing options are available to fit your budget.",
            "Is there a warranty? All products and installations come with strong manufacturer and labor warranties.",
            "Can I get an estimate virtually? Absolutely! Schedule a virtual consult for remote recommendations and pricing.",
          ],
        },
        {
          id: "cta-final",
          kind: "cta",
          heading: "Ready to Upgrade? Get Your Free Estimate Today",
          body: "Contact Allied Siding & Windows to schedule an in-home or virtual consultation—no obligation, just friendly expert advice and transparent pricing.",
          bullets: [],
        },
      ],
    },
  };

  const { content } = page;
  const services = content.sections.find((s) => s.kind === "services");
  const benefits = content.sections.find((s) => s.kind === "benefits");
  const process = content.sections.find((s) => s.kind === "process");
  const socialProof = content.sections.find((s) => s.kind === "social_proof");
  const credentials = content.sections.find((s) => s.kind === "credentials");
  const faq = content.sections.find((s) => s.kind === "faq");
  const finalCta = content.sections.find((s) => s.kind === "cta");

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        <div className="pointer-events-none absolute inset-0 opacity-25">
          <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-blue-500 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-400 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="mb-4 inline-block rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-200">
            {content.company_name} • {content.niche}
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
            {content.hero.headline}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-200 md:text-xl">
            {content.hero.subheadline}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#cta-final"
              className="inline-flex transform items-center justify-center rounded-md bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-400/30 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            >
              {content.hero.primary_cta}
            </a>
            <a
              href="#faq"
              className="inline-flex items-center justify-center rounded-md border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:border-cyan-200 hover:bg-white/10"
            >
              {content.hero.secondary_cta}
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-20 px-6 py-16 md:py-24">
        {services && (
          <section id={services.id} className="scroll-mt-24">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">{services.heading}</h2>
            <p className="mt-4 max-w-4xl text-slate-300">{services.body}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {services.bullets.map((item, i) => (
                <div
                  key={i}
                  className="group rounded-xl border border-white/10 bg-slate-900/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-slate-900"
                >
                  <p className="text-slate-100">
                    <span className="mr-2 font-bold text-cyan-300">✓</span>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {benefits && (
          <section id={benefits.id} className="scroll-mt-24">
            <div className="rounded-2xl border border-cyan-300/20 bg-gradient-to-r from-blue-950/40 to-slate-900 p-8 md:p-10">
              <h2 className="text-3xl font-extrabold text-white md:text-4xl">{benefits.heading}</h2>
              <p className="mt-4 max-w-4xl text-slate-300">{benefits.body}</p>
              <ul className="mt-8 grid gap-3 md:grid-cols-2">
                {benefits.bullets.map((item, i) => (
                  <li
                    key={i}
                    className="rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-slate-100 transition hover:border-cyan-300/40"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {process && (
          <section id={process.id} className="scroll-mt-24">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">{process.heading}</h2>
            <p className="mt-4 text-slate-300">{process.body}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {process.bullets.map((step, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-slate-900 p-6 transition duration-300 hover:scale-[1.01] hover:border-cyan-300/40"
                >
                  <p className="text-sm font-semibold text-cyan-300">Step {i + 1}</p>
                  <p className="mt-2 text-slate-100">{step.replace(/^\d+\.\s*/, "")}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {socialProof && (
          <section id={socialProof.id} className="scroll-mt-24">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">{socialProof.heading}</h2>
            <p className="mt-4 text-slate-300">{socialProof.body}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {socialProof.bullets.map((quote, i) => (
                <figure
                  key={i}
                  className="rounded-xl border border-white/10 bg-slate-900/80 p-6 italic text-slate-200 transition duration-300 hover:border-cyan-300/50 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  {quote}
                </figure>
              ))}
            </div>
          </section>
        )}

        {credentials && (
          <section id={credentials.id} className="scroll-mt-24">
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-8 md:p-10">
              <h2 className="text-3xl font-extrabold text-white md:text-4xl">{credentials.heading}</h2>
              <p className="mt-4 text-slate-300">{credentials.body}</p>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {credentials.bullets.map((item, i) => (
                  <div key={i} className="rounded-md bg-slate-800/70 px-4 py-3 text-slate-100">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {faq && (
          <section id={faq.id} className="scroll-mt-24">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">{faq.heading}</h2>
            <div className="mt-8 space-y-3">
              {faq.bullets.map((item, i) => {
                const [q, ...rest] = item.split("?");
                const answer = rest.join("?").trim();
                return (
                  <details
                    key={i}
                    className="group rounded-lg border border-white/10 bg-slate-900/70 p-5 transition hover:border-cyan-300/40"
                  >
                    <summary className="cursor-pointer list-none font-semibold text-white">
                      {q}?
                    </summary>
                    <p className="mt-3 text-slate-300">{answer}</p>
                  </details>
                );
              })}
            </div>
          </section>
        )}

        {finalCta && (
          <section
            id={finalCta.id}
            className="rounded-2xl border border-cyan-300/30 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-slate-900 p-8 text-center md:p-12"
          >
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">{finalCta.heading}</h2>
            <p className="mx-auto mt-4 max-w-3xl text-slate-200">{finalCta.body}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                {content.hero.primary_cta}
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
              >
                {content.hero.secondary_cta}
              </a>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}