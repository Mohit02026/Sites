import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import pagesData from "../../data/pages.json"

type Section = {
  id: string
  type: string
  heading: string
  body: string
  primary_cta: string
  secondary_cta: string
  bullets: string[]
}

type PageContent = {
  title: string
  description: string
  layout_variant: string
  accent_color: string
  sections: Section[]
}

type Props = {
  slug: string
  content: PageContent | null
}

export default function GeneratedLandingPage({ slug, content }: Props) {
  if (!content) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>No landing page found for {slug}.</p>
      </main>
    )
  }

  return (
    <>
      <Head>
        <title>{content.title}</title>
        <meta name="description" content={content.description} />
      </Head>
      <main className="min-h-screen bg-slate-50 text-slate-900">
        {content.sections.map((section) => (
          <section
            key={section.id}
            className="px-6 py-8 md:px-10 lg:px-20 border-b border-slate-200"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold mb-3">
                {section.heading}
              </h2>
              {section.body && (
                <p className="text-slate-700 mb-4">{section.body}</p>
              )}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="list-disc ml-5 space-y-1 text-slate-700">
                  {section.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = Object.keys(pagesData || {})
  const paths = slugs.map((slug) => ({ params: { slug } }))
  return { paths, fallback: "blocking" }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug as string
  const content = (pagesData as any)[slug] || null

  return {
    props: {
      slug,
      content,
    },
    revalidate: 60,
  }
}
