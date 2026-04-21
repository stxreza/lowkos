import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tentang Kami | Lowkos Auto Clinic",
  description:
    "Profil Lowkos Auto Clinic: visi, misi, perjalanan, inovasi, dan komitmen perawatan mesin kendaraan.",
}

const missions = [
  "Mengembangkan dan menyediakan rangkaian produk perawatan mesin yang inovatif dan efektif.",
  "Mendidik konsumen tentang pentingnya perawatan mesin yang tepat dan berkelanjutan.",
  "Berkontribusi pada pengurangan emisi kendaraan dan mendukung lingkungan yang lebih bersih.",
]

const innovations = [
  "Injector Cleaner",
  "Fuel Additive",
  "Oil Additive",
  "Infus Injeksi",
  "Octan Booster",
  "Engine Flush",
  "Carbon Cleaner",
  "Tire Sealant",
]

export default function TentangKamiPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10 pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(234,42,51,0.2),transparent_40%),radial-gradient(circle_at_90%_10%,rgba(255,215,0,0.16),transparent_35%),linear-gradient(180deg,#050505_0%,#000_70%)]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:26px_26px]" />

        <div className="container relative z-10 mx-auto max-w-[1240px] px-4 pb-16 lg:px-8 lg:pb-20">
          <p className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-racing-yellow">Tentang Kami</p>
          <h1 className="mt-4 text-4xl font-black italic uppercase leading-[0.95] tracking-[-0.04em] md:text-6xl">
            Clean And Treat Your Engine
          </h1>
          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-zinc-300 md:text-base">
            Didirikan pada tahun 2019, Lowkos Auto Clinic adalah buah karya seorang pecinta otomotif yang
            memiliki dedikasi tinggi terhadap performa mesin kendaraan, baik roda dua maupun roda empat.
            Berawal dari keprihatinan akan pentingnya perawatan mesin, Lowkos hadir dengan solusi inovatif
            untuk meningkatkan kinerja dan umur pakai kendaraan.
          </p>
        </div>
      </section>

      <section className="container mx-auto grid max-w-[1240px] gap-6 px-4 py-14 lg:grid-cols-2 lg:px-8">
        <article className="rounded-2xl border border-white/10 bg-zinc-950/75 p-6 md:p-8">
          <h2 className="text-sm font-black uppercase tracking-[0.16em] text-racing-yellow">Visi</h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
            Menjadi pionir dalam industri perawatan mesin kendaraan dengan menyediakan produk-produk
            berkualitas tinggi yang tidak hanya membersihkan, tetapi juga merawat mesin secara menyeluruh.
          </p>
        </article>

        <article className="rounded-2xl border border-white/10 bg-zinc-950/75 p-6 md:p-8">
          <h2 className="text-sm font-black uppercase tracking-[0.16em] text-racing-yellow">Misi</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-300 md:text-base">
            {missions.map((mission) => (
              <li key={mission} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-racing-red" />
                <span>{mission}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-white/10 bg-zinc-950/75 p-6 md:p-8 lg:col-span-2">
          <h2 className="text-sm font-black uppercase tracking-[0.16em] text-racing-yellow">Perjalanan Kami</h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
            Produk perdana kami, Fuel Additive atau Penghemat BBM, menjadi tonggak awal kesuksesan Lowkos.
            Disambut antusias oleh pasar, produk ini membuktikan bahwa ada kebutuhan nyata akan solusi
            perawatan mesin yang efektif.
          </p>
          <p className="mt-4 text-sm font-bold uppercase tracking-[0.08em] text-white/90">
            Fuel Additive 12 ML Penghemat BBM
          </p>
        </article>

        <article className="rounded-2xl border border-white/10 bg-zinc-950/75 p-6 md:p-8 lg:col-span-2">
          <h2 className="text-sm font-black uppercase tracking-[0.16em] text-racing-yellow">Inovasi Berkelanjutan</h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
            Setelah sukses dengan produk pertama, Lowkos terus berinovasi. Melalui riset dan pengembangan
            intensif selama bertahun-tahun, kami kini menawarkan rangkaian lengkap solusi perawatan
            kendaraan.
          </p>
          <p className="mt-4 text-sm font-bold uppercase tracking-[0.08em] text-white/90">Lowkos Fuel Additive</p>
        </article>

        <article className="rounded-2xl border border-white/10 bg-zinc-950/75 p-6 md:p-8 lg:col-span-2">
          <h2 className="text-sm font-black uppercase tracking-[0.16em] text-racing-yellow">Kenapa Harus Kami</h2>
          <h3 className="mt-4 text-lg font-black uppercase tracking-[0.06em] text-white">Kepercayaan Konsumen</h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300 md:text-base">
            Produk-produk Lowkos telah menjadi primadona di marketplace besar seperti Shopee dan Tokopedia,
            dengan penjualan puluhan ribu unit dan rating positif 4,8 bintang. Ini membuktikan kepercayaan
            dan kepuasan konsumen terhadap kualitas produk kami.
          </p>

          <h3 className="mt-6 text-lg font-black uppercase tracking-[0.06em] text-white">Lowkos Auto Clinic</h3>
          <p className="mt-3 text-sm font-bold uppercase tracking-[0.08em] text-racing-yellow">Inovasi Produk</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {innovations.map((item) => (
              <span
                key={item}
                className="inline-flex rounded-sm border border-white/12 bg-white/[0.04] px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/85"
              >
                {item}
              </span>
            ))}
          </div>
        </article>
      </section>
    </div>
  )
}
