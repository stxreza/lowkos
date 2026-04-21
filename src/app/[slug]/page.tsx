import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Gauge, Wrench } from "lucide-react"

import { MARKETPLACE_LINKS } from "@/lib/external-links"
import { PRODUCTS, getProductBySlug } from "@/lib/products"

type ProductPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: "Produk Tidak Ditemukan | Lowkos Auto Clinic",
      description: "Produk yang Anda cari tidak tersedia.",
    }
  }

  return {
    title: `${product.name} | Lowkos Auto Clinic`,
    description: product.summary,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = PRODUCTS.filter(
    (item) => item.category === product.category && item.slug !== product.slug
  )

  const badgeColorClass = product.accentClassName === "bg-racing-yellow" ? "text-black" : "text-white"

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10 pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(234,42,51,0.26),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(255,215,0,0.18),transparent_38%),linear-gradient(180deg,#050505_0%,#000_65%)]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:28px_28px]" />

        <div className="container relative z-10 mx-auto max-w-[1280px] px-4 pb-16 lg:px-8 lg:pb-20">
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-white/70 transition hover:text-white"
          >
            <ArrowLeft className="size-4" />
            Kembali ke daftar produk
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <span
                className={`inline-flex items-center gap-2 rounded-sm px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.18em] ${product.accentClassName} ${badgeColorClass}`}
              >
                <Gauge className="size-3.5" />
                {product.category}
              </span>

              <h1 className="mt-4 text-4xl font-black italic uppercase leading-[0.95] tracking-[-0.04em] md:text-6xl">
                {product.name}
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">
                {product.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {product.availableSizes.map((size) => (
                  <span
                    key={size}
                    className="inline-flex items-center rounded-sm border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/85"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/70 p-6 backdrop-blur-sm">
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,#ffffff12_25%,transparent_25%),linear-gradient(-45deg,#ffffff12_25%,transparent_25%)] bg-[size:16px_16px]" />
              <div className={`absolute -right-6 -top-10 h-44 w-14 -skew-x-[24deg] opacity-35 ${product.accentClassName}`} />
              <div className={`absolute -right-1 top-0 h-44 w-3 -skew-x-[24deg] opacity-35 ${product.accentClassName}`} />

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={product.name}
                className="relative z-10 mx-auto h-[320px] w-full object-contain drop-shadow-[0_28px_48px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid max-w-[1280px] gap-6 px-4 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <article className="rounded-2xl border border-white/10 bg-zinc-950/70 p-6 md:p-8">
          <h2 className="text-sm font-black uppercase tracking-[0.16em] text-racing-yellow">Deskripsi Produk</h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-300 md:text-base">
            {product.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-white/10 bg-zinc-950/70 p-6 md:p-8">
          <h2 className="text-sm font-black uppercase tracking-[0.16em] text-racing-yellow">Manfaat Utama</h2>
          <ul className="mt-4 grid gap-3 text-sm text-zinc-200 md:grid-cols-2">
            {product.benefits.map((item) => (
              <li key={item} className="flex gap-2 rounded-lg border border-white/10 bg-white/[0.03] p-3 leading-relaxed">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-racing-red" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-white/10 bg-zinc-950/70 p-6 md:p-8 lg:col-span-2">
          <h2 className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-racing-yellow">
            <Wrench className="size-4" />
            Cara Penggunaan
          </h2>

          <ol className="mt-5 grid gap-4 md:grid-cols-2">
            {product.usage.map((step, index) => (
              <li key={step} className="rounded-xl border border-white/10 bg-black/40 p-4 text-sm leading-relaxed text-zinc-200">
                <span className={`mb-2 inline-flex min-w-7 items-center justify-center rounded-sm px-2 py-1 text-xs font-black ${product.accentClassName} ${badgeColorClass}`}>
                  {index + 1}
                </span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </article>

        {product.notes && product.notes.length > 0 ? (
          <article className="rounded-2xl border border-amber-300/20 bg-amber-400/5 p-6 md:p-8 lg:col-span-2">
            <h2 className="text-sm font-black uppercase tracking-[0.16em] text-amber-200">Catatan Penting</h2>
            <ul className="mt-4 grid gap-2 text-sm leading-relaxed text-amber-100/90">
              {product.notes.map((note) => (
                <li key={note} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </article>
        ) : null}

        <article className="rounded-2xl border border-white/10 bg-zinc-950/70 p-6 md:p-8 lg:col-span-2">
          <h2 className="text-sm font-black uppercase tracking-[0.16em] text-racing-yellow">Beli Di Marketplace Resmi</h2>
          <p className="mt-3 text-sm text-zinc-300">Temukan {product.name} di toko resmi Lowkos untuk jaminan produk original.</p>

          <div className="mt-5 flex flex-wrap items-center gap-4 md:gap-5">
            <a
              href={MARKETPLACE_LINKS.shopee.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 transition hover:border-racing-yellow/40 hover:bg-white/[0.08]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={MARKETPLACE_LINKS.shopee.logo}
                alt={MARKETPLACE_LINKS.shopee.alt}
                className="h-10 w-auto object-contain"
              />
            </a>

            <a
              href={MARKETPLACE_LINKS.tokopedia.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 transition hover:border-racing-yellow/40 hover:bg-white/[0.08]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={MARKETPLACE_LINKS.tokopedia.logo}
                alt={MARKETPLACE_LINKS.tokopedia.alt}
                className="h-10 w-auto object-contain"
              />
            </a>
          </div>
        </article>
      </section>

      {relatedProducts.length > 0 ? (
        <section className="border-t border-white/10 bg-zinc-950/40">
          <div className="container mx-auto max-w-[1280px] px-4 py-12 lg:px-8">
            <h2 className="text-2xl font-black italic uppercase tracking-[-0.03em]">Produk Satu Kategori</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  className="group rounded-xl border border-white/10 bg-black/50 p-4 transition hover:border-white/25"
                >
                  <p className="text-[0.62rem] font-black uppercase tracking-[0.18em] text-racing-yellow">
                    {item.category}
                  </p>
                  <p className="mt-2 text-lg font-black italic uppercase leading-tight">{item.name}</p>
                  <p className="mt-2 text-sm text-zinc-400">{item.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.14em] text-white/80">
                    Lihat Produk
                    <ArrowRight className="size-3.5 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  )
}
