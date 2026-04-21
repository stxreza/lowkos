import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react"

import { BLOG_ARTICLES, getBlogArticleBySlug } from "@/lib/blog"
import { PRODUCTS } from "@/lib/products"

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return BLOG_ARTICLES.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getBlogArticleBySlug(slug)

  if (!article) {
    return {
      title: "Artikel Tidak Ditemukan | Lowkos Blog",
      description: "Artikel yang Anda cari tidak tersedia.",
    }
  }

  return {
    title: `${article.seoTitle} | Lowkos Blog`,
    description: article.seoDescription,
  }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params
  const article = getBlogArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const relatedProducts = PRODUCTS.filter((product) =>
    article.relatedProductSlugs.includes(product.slug)
  )

  const relatedArticles = BLOG_ARTICLES.filter((item) => item.slug !== article.slug).slice(0, 3)

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10 pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(234,42,51,0.24),transparent_45%),radial-gradient(circle_at_86%_14%,rgba(255,215,0,0.16),transparent_40%),linear-gradient(180deg,#050505_0%,#000_70%)]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="container relative z-10 mx-auto max-w-[1080px] px-4 pb-16 lg:px-8 lg:pb-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-white/70 transition hover:text-white"
          >
            <ArrowLeft className="size-4" />
            Kembali ke blog archive
          </Link>

          <div className="mt-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[0.62rem] font-black uppercase tracking-[0.16em] text-racing-yellow">
                {article.category}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-zinc-400">
                <Clock3 className="size-3.5" />
                {article.readTime}
              </span>
              <span className="text-xs text-zinc-500">{article.publishedAt}</span>
            </div>

            <h1 className="mt-4 text-4xl font-black italic uppercase leading-[0.98] tracking-[-0.04em] md:text-6xl">
              {article.title}
            </h1>

            <p className="mt-5 text-sm leading-relaxed text-zinc-300 md:text-base">{article.intro}</p>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={article.image} alt={article.title} className="h-[320px] w-full object-cover md:h-[420px]" />
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-[1080px] px-4 py-14 lg:px-8">
        <article className="space-y-8 rounded-2xl border border-white/10 bg-zinc-950/75 p-6 md:p-9">
          {article.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl font-black uppercase tracking-[0.08em] text-racing-yellow md:text-2xl">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-zinc-300 md:text-base">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}

          <div className="rounded-xl border border-white/10 bg-black/40 p-5">
            <h3 className="text-sm font-black uppercase tracking-[0.12em] text-racing-yellow">Checklist Praktis</h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-200 md:text-base">
              {article.checklist.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-racing-red" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      <section className="container mx-auto max-w-[1080px] px-4 pb-12 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-zinc-950/75 p-6 md:p-8">
          <h2 className="text-xl font-black italic uppercase tracking-[-0.02em]">Produk Lowkos yang Relevan</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/${product.slug}`}
                className="rounded-lg border border-white/10 bg-black/40 p-4 transition hover:border-racing-yellow/40"
              >
                <p className="text-[0.62rem] font-black uppercase tracking-[0.14em] text-racing-yellow">
                  {product.category}
                </p>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.06em] text-white">{product.name}</p>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">{product.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-[1080px] px-4 pb-16 lg:px-8">
        <h2 className="text-xl font-black italic uppercase tracking-[-0.02em]">Artikel Lainnya</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {relatedArticles.map((item) => (
            <Link
              key={item.slug}
              href={`/blog/${item.slug}`}
              className="group rounded-xl border border-white/10 bg-zinc-950/75 p-4 transition hover:border-racing-yellow/35"
            >
              <p className="text-[0.62rem] font-black uppercase tracking-[0.14em] text-racing-yellow">
                {item.category}
              </p>
              <p className="mt-2 text-sm font-black uppercase leading-tight text-white">{item.title}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.12em] text-white/80 transition-colors group-hover:text-racing-yellow">
                Baca Selengkapnya
                <ArrowRight className="size-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
