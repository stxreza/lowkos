import type { Metadata } from "next"
import Link from "next/link"
import { BriefcaseBusiness, Factory, Handshake, Rocket, Store, Users } from "lucide-react"

import { CONTACT_LINKS, MARKETPLACE_LINKS } from "@/lib/external-links"

export const metadata: Metadata = {
  title: "Bisnis | Lowkos Auto Clinic",
  description:
    "Program bisnis Lowkos Auto Clinic untuk maklon dan reseller dengan dukungan formulasi, branding, dan distribusi.",
}

const maklonPackages = [
  {
    name: "Starter Batch",
    moq: "MOQ 500 botol / varian",
    target: "Cocok untuk bengkel, komunitas, atau brand baru.",
    features: [
      "Konsultasi formula dasar engine treatment atau additive",
      "Custom label + desain kemasan sederhana",
      "QC batch produksi dan laporan hasil uji internal",
      "Estimasi produksi 3-4 minggu",
    ],
  },
  {
    name: "Growth Batch",
    moq: "MOQ 1.500 botol / varian",
    target: "Cocok untuk distribusi antar kota dan ekspansi marketplace.",
    features: [
      "Formula semi-custom menyesuaikan segmentasi motor/mobil",
      "Desain kemasan premium + pendampingan materi launching",
      "Rencana refill produksi dan forecasting basic",
      "Estimasi produksi 4-6 minggu",
    ],
  },
  {
    name: "Scale Batch",
    moq: "MOQ 5.000 botol / varian",
    target: "Cocok untuk principal brand atau jaringan dealer.",
    features: [
      "Pengembangan formula bersama tim R&D Lowkos",
      "Pendampingan SOP handling produk di lapangan",
      "Priority slot produksi bulanan",
      "Evaluasi performa produk per kuartal",
    ],
  },
]

const resellerTiers = [
  {
    tier: "Reseller Bronze",
    capital: "Modal awal mulai 3 juta",
    margin: "Margin estimasi 12%-18%",
    perks: [
      "Akses produk fast moving Lowkos",
      "Materi konten dasar untuk promosi",
      "Support admin order pada jam kerja",
    ],
  },
  {
    tier: "Reseller Silver",
    capital: "Modal awal mulai 8 juta",
    margin: "Margin estimasi 18%-25%",
    perks: [
      "Harga khusus untuk pembelian volume menengah",
      "Template campaign bulanan untuk marketplace",
      "Prioritas restock produk unggulan",
    ],
  },
  {
    tier: "Reseller Gold",
    capital: "Modal awal mulai 15 juta",
    margin: "Margin estimasi 25%-32%",
    perks: [
      "Harga distributor untuk varian terpilih",
      "Pendampingan strategi penjualan area",
      "Dukungan co-branding untuk event offline",
    ],
  },
]

const processSteps = [
  {
    title: "Konsultasi Kebutuhan",
    detail: "Diskusi target pasar, kategori produk, dan skema bisnis yang paling sesuai.",
    icon: Users,
  },
  {
    title: "Sampling & Penawaran",
    detail: "Uji sample produk, validasi spesifikasi, lalu finalisasi harga dan timeline.",
    icon: Factory,
  },
  {
    title: "Produksi / Aktivasi Reseller",
    detail: "Eksekusi produksi maklon atau onboarding reseller berikut dukungan materi jual.",
    icon: Store,
  },
  {
    title: "Scale Up Bersama",
    detail: "Optimasi performa penjualan, restock, dan pengembangan varian lanjutan.",
    icon: Rocket,
  },
]

export default function BisnisPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10 pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(234,42,51,0.24),transparent_45%),radial-gradient(circle_at_88%_14%,rgba(255,215,0,0.17),transparent_40%),linear-gradient(180deg,#050505_0%,#000_70%)]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="container relative z-10 mx-auto max-w-[1240px] px-4 pb-16 lg:px-8 lg:pb-20">
          <p className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-racing-yellow">Program Bisnis Lowkos</p>
          <h1 className="mt-4 text-4xl font-black italic uppercase leading-[0.95] tracking-[-0.04em] md:text-6xl">
            Bisnis Maklon dan Reseller
          </h1>
          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-zinc-300 md:text-base">
            Lowkos membuka peluang kolaborasi untuk partner yang ingin membangun brand perawatan kendaraan
            melalui skema maklon, serta program reseller untuk memperluas distribusi produk yang sudah terbukti
            dipercaya pasar.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={CONTACT_LINKS.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-racing-red px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-red-600"
            >
              <Handshake className="size-4" />
              Konsultasi Bisnis
            </a>
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 rounded-sm border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white/90 transition hover:border-racing-yellow/40 hover:text-racing-yellow"
            >
              Lihat Produk Lowkos
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-[1240px] px-4 py-14 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-zinc-950/75 p-6 md:p-8">
            <div className="inline-flex items-center gap-2 text-racing-yellow">
              <Factory className="size-5" />
              <h2 className="text-sm font-black uppercase tracking-[0.16em]">Bisnis Maklon</h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
              Program maklon membantu Anda menciptakan lini produk perawatan kendaraan dengan dukungan formulasi,
              proses produksi, serta kontrol kualitas berbasis pengalaman Lowkos di kategori engine treatment,
              additive, dan tire treatment.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-zinc-950/75 p-6 md:p-8">
            <div className="inline-flex items-center gap-2 text-racing-yellow">
              <BriefcaseBusiness className="size-5" />
              <h2 className="text-sm font-black uppercase tracking-[0.16em]">Program Reseller</h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
              Program reseller dirancang untuk mitra yang ingin menjual produk Lowkos secara cepat dengan
              dukungan materi promosi, skema margin bertahap, dan prioritas restock varian yang memiliki demand
              tinggi di marketplace.
            </p>
          </article>
        </div>
      </section>

      <section className="container mx-auto max-w-[1240px] px-4 pb-14 lg:px-8">
        <h2 className="text-2xl font-black italic uppercase tracking-[-0.03em]">Paket Maklon (Dummy)</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {maklonPackages.map((pkg) => (
            <article key={pkg.name} className="rounded-xl border border-white/10 bg-zinc-950/70 p-5">
              <p className="text-sm font-black uppercase tracking-[0.12em] text-racing-yellow">{pkg.name}</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.1em] text-white/90">{pkg.moq}</p>
              <p className="mt-3 text-sm text-zinc-300">{pkg.target}</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-200">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-racing-red" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-[1240px] px-4 pb-14 lg:px-8">
        <h2 className="text-2xl font-black italic uppercase tracking-[-0.03em]">Tier Reseller (Dummy)</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {resellerTiers.map((tier) => (
            <article key={tier.tier} className="rounded-xl border border-white/10 bg-zinc-950/70 p-5">
              <p className="text-sm font-black uppercase tracking-[0.12em] text-racing-yellow">{tier.tier}</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.1em] text-white/90">{tier.capital}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.1em] text-racing-red">{tier.margin}</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-200">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-racing-red" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-[1240px] px-4 pb-16 lg:px-8">
        <h2 className="text-2xl font-black italic uppercase tracking-[-0.03em]">Alur Kolaborasi</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <article key={step.title} className="rounded-xl border border-white/10 bg-zinc-950/70 p-5">
                <div className="inline-flex items-center gap-2 text-racing-yellow">
                  <Icon className="size-4" />
                  <span className="text-xs font-black uppercase tracking-[0.12em]">Step {index + 1}</span>
                </div>
                <h3 className="mt-3 text-base font-black uppercase tracking-[0.08em] text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">{step.detail}</p>
              </article>
            )
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-zinc-950/70 p-6 md:p-8">
          <p className="text-sm leading-relaxed text-zinc-300 md:text-base">
            Data paket dan angka pada halaman ini bersifat dummy untuk simulasi program bisnis. Untuk proposal
            resmi, silakan hubungi tim Lowkos melalui WhatsApp.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={CONTACT_LINKS.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-racing-red px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-red-600"
            >
              Hubungi via WhatsApp
            </a>
            <a
              href={MARKETPLACE_LINKS.shopee.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white/90 transition hover:border-racing-yellow/40 hover:text-racing-yellow"
            >
              Lihat Toko Shopee
            </a>
            <a
              href={MARKETPLACE_LINKS.tokopedia.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white/90 transition hover:border-racing-yellow/40 hover:text-racing-yellow"
            >
              Lihat Toko Tokopedia
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
