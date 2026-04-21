export type ProductCategory = "Engine Treatment" | "Additive" | "Tire Treatment"

export interface ProductCatalogItem {
  slug: string
  category: ProductCategory
  name: string
  image: string
  accentClassName: "bg-racing-red" | "bg-racing-yellow"
  summary: string
  description: string[]
  benefits: string[]
  usage: string[]
  notes?: string[]
  availableSizes: string[]
}

export const PRODUCTS: ProductCatalogItem[] = [
  {
    slug: "injector-cleaner",
    category: "Engine Treatment",
    name: "Injector Cleaner",
    image: "https://res.cloudinary.com/dxgoshyei/image/upload/v1776458084/Injector-Cleaner-60-ML_xqvvfm.webp",
    accentClassName: "bg-racing-red",
    summary: "Pembersih injektor dan ruang bakar untuk menjaga efisiensi BBM serta performa mesin.",
    description: [
      "Lowkos Injector Cleaner dirancang khusus untuk membersihkan injektor bahan bakar pada mesin kendaraan bermotor.",
      "Formulanya membantu melarutkan dan menghilangkan deposit pada injektor, saluran bahan bakar, katup, serta bagian lain pada proses pembakaran.",
    ],
    benefits: [
      "Meningkatkan efisiensi bahan bakar",
      "Memelihara sistem bahan bakar",
      "Meningkatkan kinerja mesin",
      "Mereduksi emisi gas buang",
      "Melumasi dinding silinder dan piston",
      "Membersihkan karbon di ruang bakar",
      "Mengurangi emisi gas buang",
    ],
    usage: [
      "Tuangkan 1 botol ke dalam tangki bensin.",
      "Gunakan setiap 5.000 km untuk perawatan berkala.",
    ],
    availableSizes: ["60ml", "100ml", "150ml", "275ml", "330ml"],
  },
  {
    slug: "cairan-infus-injeksi",
    category: "Engine Treatment",
    name: "Cairan Infus Injeksi",
    image: "https://res.cloudinary.com/dxgoshyei/image/upload/v1776458084/Cairan-Infus-Injeksi-5O-ML_yxinjd.webp",
    accentClassName: "bg-racing-red",
    summary: "Cairan servis injeksi untuk bengkel dengan alat infus, membersihkan injector dan combustion chamber.",
    description: [
      "Lowkos Cairan Infus Injeksi (Injector and Combustion Chambers Cleaners) digunakan untuk perawatan injeksi kendaraan dengan alat infus di bengkel.",
      "Produk ini telah digunakan banyak bengkel kendaraan dan terbukti memiliki kualitas tinggi.",
    ],
    benefits: [
      "Membersihkan kotoran pada injector",
      "Menghilangkan gejala knocking",
      "Meningkatkan performa mesin",
      "Mencegah loss kompresi",
      "Melumasi dinding silinder dan piston",
      "Membersihkan karbon di ruang bakar",
      "Mengurangi emisi gas buang",
    ],
    usage: [
      "Tuangkan cairan + 30ml ke dalam tabung infus alat servis injector.",
      "Hubungkan tekanan angin kompresor ke alat pada tekanan 4-5 bar.",
      "Sambungkan konektor alat ke selang bensin, lalu pastikan soket fuel pump sudah dilepas.",
    ],
    availableSizes: ["50ml", "100ml", "150ml", "330ml", "500ml", "1000ml"],
  },
  {
    slug: "engine-flush",
    category: "Engine Treatment",
    name: "Engine Flush",
    image: "https://res.cloudinary.com/dxgoshyei/image/upload/v1776458084/Engine-Flush-50-ML_gptyf0.webp",
    accentClassName: "bg-racing-red",
    summary: "Pembersih lumpur dan kerak di bak oli mesin sebelum penggantian oli.",
    description: [
      "Engine Flush adalah cairan khusus untuk membersihkan kotoran, kerak oli, dan endapan di ruang mesin motor sebelum penggantian oli.",
      "Produk ini membantu proses pengurasan lumpur pada bak oli agar oli baru bekerja lebih optimal.",
    ],
    benefits: [
      "Membersihkan lumpur pada bak oli mesin",
      "Membantu memperpanjang usia part pada mesin",
    ],
    usage: [
      "Masukkan 1 botol Lowkos Engine Flush 50ml ke dalam mesin sebelum mengganti oli.",
      "Hidupkan mesin dalam putaran idle selama 10 menit.",
      "Buka baut bak oli, lalu keluarkan oli hingga bersih.",
      "Pasang kembali baut dan isi oli baru.",
    ],
    notes: [
      "Gunakan saat penggantian oli mesin.",
      "Tidak perlu sesering ganti oli, idealnya setiap 20.000 km.",
      "Pastikan engine flush memiliki kadar pH 6 hingga 8.",
      "Penggunaan yang tidak sesuai aturan berisiko menimbulkan uap berlebih, kebocoran ruang pembakaran, hingga kerusakan seal mesin.",
      "Jika belum pernah menggunakan engine flush, konsultasikan dengan teknisi ahli atau bengkel resmi.",
    ],
    availableSizes: ["50ml", "250ml"],
  },
  {
    slug: "carbon-cleaner-drops",
    category: "Engine Treatment",
    name: "Carbon Cleaner Drops",
    image: "https://res.cloudinary.com/dxgoshyei/image/upload/v1776458083/Carbon-Drops-12-ML_xonmpv.webp",
    accentClassName: "bg-racing-red",
    summary: "Tetes pembersih karbon praktis untuk motor dan mobil tanpa bongkar mesin.",
    description: [
      "Carbon Cleaner Drops 12ml adalah pembersih kerak karbon premium untuk menjaga performa mesin tetap optimal.",
      "Diformulasikan untuk membersihkan ruang bakar mesin, kepala piston, klep intake, dan kepala busi.",
    ],
    benefits: [
      "Meningkatkan kualitas hasil servis bengkel",
      "Membersihkan deposit karbon pada ruang bakar tanpa bongkar mesin",
    ],
    usage: [
      "Untuk motor: tambahkan 10-20 tetes ke tangki bensin, lalu hidupkan mesin dan tarik rpm tinggi.",
      "Untuk mobil: tuangkan 1/2 sampai 1 botol ke tangki bensin.",
      "Isi bensin untuk mendorong cairan masuk ke dalam tangki.",
      "Hidupkan mesin lalu tarik rpm tinggi.",
      "Untuk pemakaian rutin gunakan dosis 3 tetes per 1 liter BBM.",
    ],
    availableSizes: ["12ml", "33ml"],
  },
  {
    slug: "fuel-additive",
    category: "Additive",
    name: "Fuel Additive",
    image: "https://res.cloudinary.com/dxgoshyei/image/upload/v1776458084/Fuel-Additive-12-ML_gwq9tq.webp",
    accentClassName: "bg-racing-yellow",
    summary: "Aditif BBM berbasis minyak atsiri untuk membantu oktan, performa, dan efisiensi.",
    description: [
      "Fuel Additive penghemat BBM berbentuk cairan bening beraroma khas dengan bahan dasar minyak atsiri berkandungan geraniol tinggi.",
      "Langsung larut dan tercampur dengan semua jenis BBM tanpa menimbulkan residu di dalam tangki.",
    ],
    benefits: [
      "Meningkatkan RON, oktan, dan cetane",
      "Membersihkan saluran bahan bakar",
      "Membersihkan injector",
      "Membersihkan klep intake",
      "Membersihkan ruang bakar mesin",
      "Mengurangi gejala knocking",
      "Meningkatkan performa mesin",
      "Meningkatkan torsi dan tenaga mesin",
      "Menghemat konsumsi BBM",
    ],
    usage: [
      "Pemakaian pertama: 6 tetes per liter BBM.",
      "Pemakaian berikutnya: 3 tetes per liter BBM.",
      "1 tutup botol = 72 tetes untuk 24 liter BBM.",
      "1 botol untuk 144 liter BBM.",
      "Tutup botol rapat setelah pemakaian.",
    ],
    availableSizes: ["12ml", "33ml", "60ml", "100ml", "1000ml"],
  },
  {
    slug: "octane-booster",
    category: "Additive",
    name: "Octane Booster",
    image: "https://res.cloudinary.com/dxgoshyei/image/upload/v1776458084/Octan-Booster-500-ML_we16cx.webp",
    accentClassName: "bg-racing-yellow",
    summary: "Formula peningkat oktan untuk tenaga, torsi, dan respons mesin harian maupun race.",
    description: [
      "Lowkos Octane Booster membantu meningkatkan stabilitas bahan bakar dan optimasi tekanan ledak agar performa mesin lebih bertenaga.",
      "Aman digunakan sesuai petunjuk serta cocok untuk pemakaian harian maupun kebutuhan drag race.",
    ],
    benefits: [
      "Meningkatkan nilai oktan dan performa mesin",
      "Memulihkan tenaga dan akselerasi",
      "Membersihkan ruang bakar",
      "Menghemat konsumsi BBM",
      "Meningkatkan torsi dan tenaga",
      "Tarikan gas lebih enteng",
      "Bisa untuk motor dan mobil harian atau drag race",
    ],
    usage: [
      "Campurkan 10ml (1 tutup botol) untuk 5 liter BBM.",
      "Atau gunakan gelas takar 60ml untuk 30 liter BBM.",
      "Untuk kebutuhan oktan lebih tinggi, tambah dosis sesuai kebutuhan (aman sesuai petunjuk).",
      "Untuk drag race: campurkan 1 liter Octane Booster dengan 2 liter BBM oktan tinggi.",
      "Cocok untuk Pertalite, Pertamax, Pertamax Turbo, Shell, Vivo, dan jenis BBM lain.",
    ],
    availableSizes: ["100ml", "500ml", "1000ml"],
  },
  {
    slug: "oil-additive",
    category: "Additive",
    name: "Oil Additive",
    image: "https://res.cloudinary.com/dxgoshyei/image/upload/v1776458083/Oil-Additive-40-ML_pmylkm.webp",
    accentClassName: "bg-racing-yellow",
    summary: "Aditif oli untuk perlindungan ekstra, mengurangi gesekan, dan memperpanjang umur mesin.",
    description: [
      "Lowkos Oil Additive memberi perlindungan ekstra pada mesin kendaraan dengan meningkatkan kemampuan pelumas.",
      "Formula khususnya membantu melindungi komponen dari gesekan dan panas berlebih.",
    ],
    benefits: [
      "Menambah lapisan perlindungan ekstra pada oli",
      "Mengurangi gesekan agar mesin lebih halus dan efisien",
      "Membantu memperpanjang umur mesin",
      "Mudah diaplikasikan saat penggantian oli",
    ],
    usage: [
      "Ganti oli lama dengan oli baru.",
      "Tambahkan Lowkos Oil Additive ke dalam oli baru.",
      "Jalankan mesin agar aditif tercampur dengan baik.",
    ],
    availableSizes: ["40ml", "150ml"],
  },
  {
    slug: "gearbox-additive",
    category: "Additive",
    name: "Gearbox Additive",
    image: "https://res.cloudinary.com/dxgoshyei/image/upload/v1776496385/Gearbox-Additive-75-ML-1024x1024_ct84wm.webp",
    accentClassName: "bg-racing-yellow",
    summary: "Aditif gearbox untuk perpindahan gigi lebih halus, gesekan lebih rendah, dan umur pakai lebih panjang.",
    description: [
      "Lowkos Gearbox Additive adalah bahan tambahan untuk pelumas gearbox atau transmisi guna meningkatkan performa dan proteksi komponen.",
      "Dirancang untuk mengurangi gesekan, menjaga gigi-gigi gearbox, dan memperpanjang umur pakai sistem transmisi.",
    ],
    benefits: [
      "Membantu melumasi gigi-gigi dan komponen gearbox",
      "Mengurangi gesekan dan keausan saat operasi",
      "Membantu memperpanjang umur pakai gearbox",
      "Membantu perpindahan gigi lebih lancar dan cepat",
      "Mendukung pemeliharaan preventif gearbox",
      "Membantu mengurangi kebisingan gearbox saat operasi",
    ],
    usage: [
      "Gunakan sesuai rekomendasi produsen kendaraan atau gearbox.",
      "Baca petunjuk penggunaan sebelum aplikasi.",
      "Konsultasikan dengan mekanik jika diperlukan untuk takaran yang tepat.",
    ],
    notes: [
      "Dosis berlebih atau kurang dapat mengganggu kinerja gearbox.",
      "Pastikan penggunaan mengikuti spesifikasi kendaraan untuk mencegah kerusakan.",
    ],
    availableSizes: ["75ml"],
  },
  {
    slug: "tire-sealant",
    category: "Tire Treatment",
    name: "Tire Sealant",
    image: "https://res.cloudinary.com/dxgoshyei/image/upload/v1776458084/Tire-Sealant-350-ML_qozwjy.webp",
    accentClassName: "bg-racing-red",
    summary: "Cairan anti bocor ban tubeless yang cepat menutup kebocoran kecil saat berkendara.",
    description: [
      "Lowkos Tire Sealant adalah cairan untuk ditempatkan di dalam ban agar menutup lubang atau kerusakan kecil.",
      "Saat ban tertusuk dan terjadi kebocoran udara, cairan akan bekerja cepat mengisi lubang dan mencegah kebocoran lanjutan.",
    ],
    benefits: [
      "Cairan lebih kental, lengket, dan tidak menggumpal di dalam ban",
      "Aplikasi mudah serta tidak menyumbat pentil",
      "Sangat cepat menutup kebocoran",
      "Masa kedaluwarsa lama dan tidak kembung",
      "Tidak membuat velg berkarat karena cairan menjadi karet, bukan air",
    ],
    usage: [
      "Buka isi pentil hingga angin keluar semua.",
      "Posisikan pentil di arah jam 3 atau jam 9, lalu masukkan Lowkos Tire Sealant ke dalam ban.",
      "Tutup kembali pentil dan isi angin.",
      "Ban siap dipakai berkendara tanpa mudah kempes.",
    ],
    notes: [
      "Untuk 1 ban tubeless motor ring 12, 13, 14 gunakan 350ml.",
      "Bisa dipakai untuk ban dalam.",
      "Bisa dipakai untuk ban sepeda dengan isi secukupnya.",
      "Ban R-14 tapak lebar dan R-17/R-18 disarankan 500ml.",
      "Ban mobil disarankan 500ml.",
    ],
    availableSizes: ["350ml", "500ml", "1000ml", "5000ml"],
  },
  {
    slug: "tire-sealant-gold",
    category: "Tire Treatment",
    name: "Tire Sealant Gold",
    image: "https://res.cloudinary.com/dxgoshyei/image/upload/v1776496385/Tire-Sealant-Gold-Edition-350-ML_kl9mbk.webp",
    accentClassName: "bg-racing-yellow",
    summary: "Gold Edition dengan sealing cepat untuk menjaga performa dan keamanan ban.",
    description: [
      "Lowkos Tire Sealant Gold Edition adalah solusi untuk menjaga performa dan keamanan ban dengan menutup kebocoran kecil secara efektif.",
      "Teknologi canggihnya mengisi lubang secara otomatis saat ban mengalami tusukan ringan sehingga perjalanan tetap aman.",
    ],
    benefits: [
      "Cairan lebih kental, lengket, dan tidak menggumpal di dalam ban",
      "Aplikasi mudah serta tidak menyumbat pentil",
      "Sangat cepat menutup kebocoran",
      "Masa kedaluwarsa lama dan tidak kembung",
      "Tidak membuat velg berkarat karena cairan menjadi karet, bukan air",
    ],
    usage: [
      "Buka isi pentil hingga angin keluar semua.",
      "Posisikan pentil di arah jam 3 atau jam 9, lalu masukkan Lowkos Tire Sealant Gold ke dalam ban.",
      "Tutup kembali pentil dan isi angin.",
      "Ban siap dipakai berkendara tanpa mudah kempes.",
    ],
    notes: [
      "Untuk 1 ban tubeless motor ring 12, 13, 14 gunakan 350ml.",
      "Bisa dipakai untuk ban dalam.",
      "Bisa dipakai untuk ban sepeda dengan isi secukupnya.",
      "Ban R-14 tapak lebar dan R-17/R-18 disarankan 500ml.",
      "Ban mobil disarankan 500ml.",
    ],
    availableSizes: ["350ml"],
  },
]

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((product) => product.slug === slug)
}

export function getProductCategories() {
  return ["Engine Treatment", "Additive", "Tire Treatment"] as const
}
