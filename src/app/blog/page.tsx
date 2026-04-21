import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock3 } from "lucide-react"

import { BLOG_ARTICLES } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blog Perawatan Mesin Kendaraan | Lowkos Auto Clinic",
  description:
    "Archive artikel Lowkos seputar perawatan mesin motor dan mobil: tips preventif, kesalahan umum, dan rekomendasi treatment agar performa kendaraan tetap optimal.",
}

export default function BlogArchivePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10 pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(234,42,51,0.24),transparent_45%),radial-gradient(circle_at_85%_12%,rgba(255,215,0,0.16),transparent_40%),linear-gradient(180deg,#050505_0%,#000_70%)]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="container relative z-10 mx-auto max-w-[1240px] px-4 pb-16 lg:px-8 lg:pb-20">
          <p className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-racing-yellow">Blog Archive</p>
          <h1 className="mt-4 text-4xl font-black italic uppercase leading-[0.95] tracking-[-0.04em] md:text-6xl">
            Artikel Perawatan Mesin Kendaraan
          </h1>
          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-zinc-300 md:text-base">
            Kumpulan artikel seputar perawatan mesin motor dan mobil, disusun agar mudah diterapkan untuk
            pemakaian harian, perjalanan jauh, maupun kebutuhan performa yang lebih tinggi.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-[1240px] px-4 py-14 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {BLOG_ARTICLES.map((article) => (
            <article
              key={article.slug}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/75 transition-all duration-300 hover:border-racing-yellow/35"
            >
              <Link href={`/blog/${article.slug}`} className="block">
                <div className="relative h-52 overflow-hidden border-b border-white/10 bg-zinc-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>

              <div className="p-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[0.62rem] font-black uppercase tracking-[0.16em] text-racing-yellow">
                    {article.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-zinc-400">
                    <Clock3 className="size-3.5" />
                    {article.readTime}
                  </span>
                </div>

                <Link href={`/blog/${article.slug}`}>
                  <h2 className="mt-3 line-clamp-2 text-xl font-black italic uppercase leading-tight tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-racing-yellow">
                    {article.title}
                  </h2>
                </Link>

                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-zinc-300">{article.excerpt}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {article.keywords.slice(0, 2).map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-sm border border-white/12 bg-white/[0.04] px-2 py-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-white/75"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${article.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-white/85 transition-colors duration-300 hover:text-racing-yellow"
                >
                  Baca Artikel
                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
