export interface BlogSection {
  heading: string
  paragraphs: string[]
}

export interface BlogArticle {
  slug: string
  title: string
  seoTitle: string
  seoDescription: string
  excerpt: string
  image: string
  category: "Mesin Motor" | "Mesin Mobil" | "Perawatan Kendaraan"
  readTime: string
  publishedAt: string
  keywords: string[]
  intro: string
  sections: BlogSection[]
  checklist: string[]
  relatedProductSlugs: string[]
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: "perawatan-mesin-motor-harian",
    title: "Perawatan Mesin Motor Harian agar Tidak Cepat Rusak",
    seoTitle: "Perawatan Mesin Motor Harian: Tips agar Mesin Awet dan Bertenaga",
    seoDescription:
      "Panduan perawatan mesin motor harian supaya tetap halus, irit BBM, dan tidak cepat rusak. Lengkap dengan checklist dan rekomendasi treatment.",
    excerpt:
      "Mesin motor yang awet bukan soal dipakai pelan, tetapi soal konsisten dirawat. Ini langkah sederhana yang berdampak besar untuk performa jangka panjang.",
    image: "https://res.cloudinary.com/dxgoshyei/image/upload/v1776760349/Perawatan_Motor_Rusak_fv8olc.jpg",
    category: "Mesin Motor",
    readTime: "6 menit",
    publishedAt: "2026-04-21",
    keywords: ["perawatan mesin motor", "motor awet", "tips motor"],
    intro:
      "Banyak pengguna motor baru sadar pentingnya perawatan saat mesin mulai kasar, boros BBM, atau tenaganya drop. Padahal, perawatan mesin motor harian bisa dimulai dari kebiasaan kecil yang konsisten.",
    sections: [
      {
        heading: "Kenali Gejala Mesin Mulai Bermasalah",
        paragraphs: [
          "Mesin yang sehat umumnya punya idle stabil, respons gas ringan, dan suara yang konsisten. Saat muncul gejala brebet, knocking ringan, atau akselerasi terasa berat, itu tanda sistem pembakaran perlu perhatian.",
          "Langkah awal tidak harus langsung bongkar mesin. Mulai dari pembersihan saluran bahan bakar, cek busi, dan pastikan kualitas BBM sesuai rasio kompresi mesin Anda.",
        ],
      },
      {
        heading: "Jangan Tunggu Hingga Tarikan Berat",
        paragraphs: [
          "Deposit karbon di injektor dan ruang bakar terbentuk bertahap. Karena itu, treatment berkala lebih efektif dan lebih murah dibanding menunggu masalah membesar.",
          "Gunakan pembersih injektor berkala setiap interval kilometer tertentu untuk menjaga pola semprot bahan bakar tetap optimal.",
        ],
      },
      {
        heading: "Konsistensi Lebih Penting dari Sekadar Servis Besar",
        paragraphs: [
          "Servis besar tetap penting, tetapi rutinitas ringan seperti cek oli, suhu kerja, dan kebersihan sistem pembakaran punya dampak besar pada umur mesin.",
          "Perawatan yang terjadwal membuat mesin lebih stabil dipakai harian, termasuk saat menghadapi macet atau perjalanan jarak jauh.",
        ],
      },
    ],
    checklist: [
      "Ganti oli sesuai interval pabrikan",
      "Gunakan bahan bakar dengan kualitas stabil",
      "Lakukan treatment injektor berkala",
      "Cek busi dan filter udara secara rutin",
      "Pantau gejala knocking atau idle tidak stabil",
    ],
    relatedProductSlugs: ["injector-cleaner", "fuel-additive", "engine-flush"],
  },
  {
    slug: "cara-agar-mesin-motor-halus-dan-irit",
    title: "Cara Agar Mesin Motor Tetap Halus dan Irit BBM",
    seoTitle: "Cara Agar Mesin Motor Halus dan Irit BBM untuk Pemakaian Harian",
    seoDescription:
      "Pelajari cara agar mesin motor tetap halus, responsif, dan irit BBM dengan langkah perawatan sederhana serta penggunaan additive yang tepat.",
    excerpt:
      "Mesin halus dan irit bukan kebetulan. Kombinasi gaya berkendara, kualitas BBM, dan additive yang tepat membuat performa lebih stabil setiap hari.",
    image: "https://res.cloudinary.com/dxgoshyei/image/upload/v1776760349/pemeliharaan-preventif-motor_r2io92.webp",
    category: "Mesin Motor",
    readTime: "5 menit",
    publishedAt: "2026-04-21",
    keywords: ["cara agar mesin motor halus", "motor irit bbm", "fuel additive"],
    intro:
      "Jika target Anda adalah mesin motor yang halus sekaligus irit BBM, fokuslah pada efisiensi pembakaran. Efisiensi ini ditentukan oleh kebersihan injektor, kualitas campuran bahan bakar, dan cara berkendara.",
    sections: [
      {
        heading: "Pastikan Kualitas Pembakaran Konsisten",
        paragraphs: [
          "Pembakaran yang baik membuat tenaga keluar optimal dengan konsumsi bahan bakar yang lebih rasional. Saat semprotan injektor tidak presisi, konsumsi BBM cenderung naik.",
          "Aditif BBM dapat membantu menjaga kualitas campuran bahan bakar dan kebersihan jalur pembakaran jika digunakan dengan dosis yang benar.",
        ],
      },
      {
        heading: "Atur Gaya Berkendara",
        paragraphs: [
          "Gas mendadak berulang dan rpm terlalu tinggi dalam waktu lama dapat mempercepat pembentukan karbon. Berkendara halus membantu menstabilkan temperatur kerja mesin.",
          "Pola berkendara yang stabil tidak hanya membuat irit, tetapi juga membuat mesin terasa lebih ringan saat akselerasi.",
        ],
      },
      {
        heading: "Rawat dari Sekarang, Bukan Saat Sudah Bermasalah",
        paragraphs: [
          "Perawatan preventif selalu lebih murah daripada perbaikan korektif. Mulai dari langkah sederhana: jadwal cek rutin, treatment ringan, dan pemakaian produk sesuai petunjuk.",
        ],
      },
    ],
    checklist: [
      "Gunakan BBM yang sesuai spesifikasi mesin",
      "Tambahkan additive dengan dosis tepat",
      "Hindari kebiasaan buka-tutup gas agresif",
      "Cek tekanan ban untuk menjaga efisiensi",
      "Lakukan servis ringan berkala",
    ],
    relatedProductSlugs: ["fuel-additive", "octane-booster", "carbon-cleaner-drops"],
  },
  {
    slug: "cara-merawat-motor-untuk-pemakaian-rutin",
    title: "Cara Merawat Motor untuk Pemakaian Rutin dan Jarak Jauh",
    seoTitle: "Cara Merawat Motor Harian dan Touring agar Mesin Tetap Prima",
    seoDescription:
      "Panduan cara merawat motor untuk pemakaian rutin maupun touring. Fokus pada ketahanan mesin, sistem pembakaran, dan perlindungan komponen.",
    excerpt:
      "Motor yang sering dipakai harian butuh strategi perawatan berbeda dari motor yang jarang jalan. Ini panduan praktis agar mesin tetap prima di dua kondisi.",
    image: "https://res.cloudinary.com/dxgoshyei/image/upload/v1776760350/Memperbaiki_Motor_ezsf2x.jpg",
    category: "Mesin Motor",
    readTime: "6 menit",
    publishedAt: "2026-04-21",
    keywords: ["cara merawat motor", "servis motor", "perawatan touring"],
    intro:
      "Pemakaian motor harian di lalu lintas padat menuntut ketahanan mesin yang baik. Sementara itu, perjalanan jauh menuntut stabilitas temperatur dan performa mesin yang konsisten.",
    sections: [
      {
        heading: "Bedakan Perawatan Harian dan Touring",
        paragraphs: [
          "Motor harian fokus pada efisiensi, respons, dan ketahanan terhadap stop and go. Untuk touring, fokus tambahan adalah stabilitas di rpm menengah-tinggi selama durasi lama.",
          "Checklist sebelum touring sebaiknya mencakup oli, sistem pendinginan, kondisi busi, dan kebersihan jalur bahan bakar.",
        ],
      },
      {
        heading: "Pentingnya Membersihkan Ruang Bakar",
        paragraphs: [
          "Karbon di ruang bakar mengurangi efisiensi pembakaran dan bisa memicu gejala knocking. Pembersihan berkala membantu menjaga respons mesin tetap halus.",
        ],
      },
      {
        heading: "Lindungi Mesin saat Ganti Oli",
        paragraphs: [
          "Saat penggantian oli, pembersihan lumpur sisa pembakaran dapat membantu oli baru bekerja lebih optimal dan mengurangi risiko kontaminasi awal.",
        ],
      },
    ],
    checklist: [
      "Cek oli dan jadwal penggantian",
      "Periksa busi dan filter udara",
      "Bersihkan ruang bakar secara berkala",
      "Lakukan treatment sebelum perjalanan jauh",
      "Gunakan produk sesuai kebutuhan mesin",
    ],
    relatedProductSlugs: ["engine-flush", "carbon-cleaner-drops", "oil-additive"],
  },
  {
    slug: "panduan-perawatan-mesin-mobil",
    title: "Panduan Perawatan Mesin Mobil agar Umur Pakai Lebih Panjang",
    seoTitle: "Perawatan Mesin Mobil Lengkap: Tetap Bertenaga dan Minim Masalah",
    seoDescription:
      "Panduan lengkap perawatan mesin mobil untuk menjaga performa, mencegah overheat, mengurangi deposit karbon, dan memperpanjang usia mesin.",
    excerpt:
      "Mesin mobil yang sehat memberi kenyamanan berkendara dan biaya operasional lebih rendah. Kuncinya ada pada perawatan berkala dan tindakan preventif.",
    image: "https://res.cloudinary.com/dxgoshyei/image/upload/v1776760349/Memperbaiki_Mesin_Mobil_ymjcw4.webp",
    category: "Mesin Mobil",
    readTime: "7 menit",
    publishedAt: "2026-04-21",
    keywords: ["mesin mobil", "perawatan mesin mobil", "tips mobil"],
    intro:
      "Mesin mobil modern memiliki toleransi presisi tinggi. Sedikit penurunan kualitas pelumasan atau gangguan pembakaran bisa berdampak pada kenyamanan, efisiensi BBM, bahkan biaya servis yang besar.",
    sections: [
      {
        heading: "Jaga Sistem Pelumasan dan Pendinginan",
        paragraphs: [
          "Dua sistem ini adalah fondasi umur mesin mobil. Oli yang sehat menjaga gesekan tetap rendah, sementara sistem pendinginan menjaga suhu kerja stabil.",
          "Periksa level dan kualitas cairan secara rutin, terutama sebelum perjalanan panjang.",
        ],
      },
      {
        heading: "Rawat Sistem Bahan Bakar",
        paragraphs: [
          "Injektor yang bersih membantu atomisasi bahan bakar lebih baik. Hasilnya, pembakaran lebih efisien dan mesin terasa lebih responsif.",
          "Jika mobil sering dipakai stop and go, treatment sistem bahan bakar secara berkala sangat direkomendasikan.",
        ],
      },
      {
        heading: "Prioritaskan Perawatan Preventif",
        paragraphs: [
          "Menunggu lampu indikator menyala biasanya berarti masalah sudah berkembang. Pola perawatan preventif lebih aman untuk performa dan biaya jangka panjang.",
        ],
      },
    ],
    checklist: [
      "Ganti oli dan filter tepat waktu",
      "Cek air radiator/coolant secara berkala",
      "Lakukan pembersihan injektor periodik",
      "Hindari beban berlebih saat mesin belum panas",
      "Gunakan treatment sesuai rekomendasi",
    ],
    relatedProductSlugs: ["injector-cleaner", "octane-booster", "oil-additive"],
  },
  {
    slug: "kesalahan-perawatan-mesin-mobil",
    title: "7 Kesalahan Perawatan Mesin Mobil yang Sering Terjadi",
    seoTitle: "Kesalahan Perawatan Mesin Mobil yang Bikin Cepat Rusak",
    seoDescription:
      "Kenali kesalahan umum dalam perawatan mesin mobil yang dapat mempercepat kerusakan, meningkatkan konsumsi BBM, dan menurunkan performa mesin.",
    excerpt:
      "Bukan hanya telat servis, kebiasaan kecil yang dianggap sepele juga bisa mempercepat kerusakan mesin mobil. Hindari 7 kesalahan ini.",
    image: "https://res.cloudinary.com/dxgoshyei/image/upload/v1776760142/perawatan_mobil_agar_tidak_cepat_rusak_yaqnbe.webp",
    category: "Mesin Mobil",
    readTime: "7 menit",
    publishedAt: "2026-04-21",
    keywords: ["kesalahan perawatan mesin mobil", "mobil cepat rusak", "tips servis mobil"],
    intro:
      "Banyak kerusakan mesin mobil sebenarnya bisa dicegah. Sayangnya, kebiasaan perawatan yang salah masih sering dilakukan karena dianggap tidak berpengaruh besar.",
    sections: [
      {
        heading: "Mengabaikan Gejala Awal",
        paragraphs: [
          "Suara mesin berubah, getaran bertambah, atau konsumsi BBM tiba-tiba naik adalah sinyal awal yang tidak boleh diabaikan.",
          "Semakin cepat ditangani, semakin kecil potensi kerusakan lanjutan.",
        ],
      },
      {
        heading: "Telat Ganti Oli dan Filter",
        paragraphs: [
          "Oli yang menurun kualitasnya tidak lagi melindungi komponen secara optimal. Gesekan meningkat dan temperatur kerja lebih sulit dikendalikan.",
        ],
      },
      {
        heading: "Salah Dosis dan Salah Produk",
        paragraphs: [
          "Aditif dan treatment bisa sangat membantu, tetapi harus digunakan sesuai petunjuk. Dosis berlebihan atau produk tidak sesuai justru bisa menurunkan efektivitas.",
        ],
      },
    ],
    checklist: [
      "Jangan tunda saat muncul gejala aneh",
      "Ikuti interval servis berkala",
      "Gunakan produk sesuai fungsi dan dosis",
      "Simpan riwayat perawatan kendaraan",
      "Konsultasikan ke teknisi saat ragu",
    ],
    relatedProductSlugs: ["engine-flush", "gearbox-additive", "fuel-additive"],
  },
  {
    slug: "cara-memperbaiki-mesin-kendaraan",
    title: "Cara Memperbaiki Mesin Kendaraan: Kapan Bisa Sendiri, Kapan ke Bengkel",
    seoTitle: "Cara Memperbaiki Mesin Kendaraan dengan Aman dan Efektif",
    seoDescription:
      "Pelajari cara memperbaiki mesin kendaraan secara aman, kapan bisa ditangani sendiri, dan kapan wajib ditangani teknisi bengkel profesional.",
    excerpt:
      "Tidak semua masalah mesin harus langsung overhaul. Kenali batas perbaikan mandiri dan kapan kendaraan wajib ditangani teknisi profesional.",
    image: "https://res.cloudinary.com/dxgoshyei/image/upload/v1776760350/Memperbaiki_Mesin_Kendaraan_ycbw3r.jpg",
    category: "Perawatan Kendaraan",
    readTime: "8 menit",
    publishedAt: "2026-04-21",
    keywords: ["cara memperbaiki mesin kendaraan", "servis kendaraan", "tips bengkel"],
    intro:
      "Perbaikan mesin kendaraan butuh keputusan yang tepat. Langkah sederhana seperti pengecekan visual bisa dilakukan sendiri, tetapi diagnosa komponen internal sebaiknya dilakukan teknisi berpengalaman.",
    sections: [
      {
        heading: "Masalah Ringan yang Bisa Ditangani Sendiri",
        paragraphs: [
          "Cek level oli, kondisi filter udara, dan kebersihan area mesin bisa dilakukan di rumah dengan alat dasar.",
          "Langkah ini membantu Anda mengidentifikasi apakah masalah bersifat ringan atau perlu penanganan lanjutan.",
        ],
      },
      {
        heading: "Kapan Harus ke Bengkel",
        paragraphs: [
          "Jika muncul knocking berat, asap tidak normal, suhu mesin tidak stabil, atau tenaga drop drastis, segera lakukan pemeriksaan di bengkel.",
          "Penanganan cepat mencegah kerusakan menyebar ke komponen lain yang biayanya lebih tinggi.",
        ],
      },
      {
        heading: "Perawatan dan Perbaikan adalah Satu Paket",
        paragraphs: [
          "Perbaikan tanpa pola perawatan akan membuat masalah mudah terulang. Setelah perbaikan, jalankan jadwal perawatan preventif agar performa tetap stabil.",
        ],
      },
    ],
    checklist: [
      "Mulai dari pemeriksaan dasar sebelum bongkar mesin",
      "Gunakan suku cadang dan cairan berkualitas",
      "Lakukan treatment sesuai kebutuhan pasca perbaikan",
      "Catat gejala dan histori servis untuk evaluasi",
      "Lakukan kontrol berkala setelah kendaraan normal",
    ],
    relatedProductSlugs: ["cairan-infus-injeksi", "carbon-cleaner-drops", "tire-sealant"],
  },
]

export function getBlogArticleBySlug(slug: string) {
  return BLOG_ARTICLES.find((article) => article.slug === slug)
}
