import { CourseType } from '@/app/types/course'
import { FooterLinkType } from '@/app/types/footerlink'
import { HeaderType } from '@/app/types/menu'
import { TestimonialType } from '@/app/types/testimonial'
import { NextResponse } from 'next/server'
import { StatisticsType } from '@/app/types/statistics'
import { AboutType } from '@/app/types/about'
import { VisionMissionType } from '@/app/types/about'
import { ProfileType } from '@/app/types/about'
import { ServicesType } from '@/app/types/service'
import { ProjectSolutionType } from '@/app/types/service'
import { ProductBenefitType } from '@/app/types/service'

const HeaderData: HeaderType[] = [
  { label: 'Home', href: '/' },
  { label: 'Tentang Kami', href: '/about  ' },
  { label: 'Layanan Kami', href: '/ourservice' },
  { label: 'Hubungi Kami', href: '/#contact' },
]

const TechGaintsData: { imgSrc: string }[] = [
  {
    imgSrc: '/images/companies/a.png',
  },
  {
    imgSrc: '/images/companies/b.png',
  },
  {
    imgSrc: '/images/companies/1.png',
  },
  {
    imgSrc: '/images/companies/2.png',
  },
  {
    imgSrc: '/images/companies/3.png',
  },
  {
    imgSrc: '/images/companies/4.png',
  },
  {
    imgSrc: '/images/companies/5.png',
  },
  {
    imgSrc: '/images/companies/6.png',
  },
  {
    imgSrc: '/images/companies/7.png',
  },
  {
    imgSrc: '/images/companies/8.png',
  },
  {
    imgSrc: '/images/companies/9.png',
  },
  {
    imgSrc: '/images/companies/10.png',
  },
  {
    imgSrc: '/images/companies/11.png',
  },
  {
    imgSrc: '/images/companies/12.png',
  },
  {
    imgSrc: '/images/companies/13.png',
  },
  {
    imgSrc: '/images/companies/14.png',
  },
  {
    imgSrc: '/images/companies/15.png',
  },
  {
    imgSrc: '/images/companies/16.png',
  },
  {
    imgSrc: '/images/companies/17.png',
  },
  {
    imgSrc: '/images/companies/18.png',
  },
  {
    imgSrc: '/images/companies/19.png',
  },
  {
    imgSrc: '/images/companies/20.png',
  },
  {
    imgSrc: '/images/companies/21.png',
  },
]

const CourseData: CourseType[] = [
  {
    heading: 'Sistem Integrasi Teknologi',
    icon: 'mdi:monitor-dashboard',
    description: 'Menyediakan solusi software, hardware, jaringan, dan upgrade sistem untuk mendukung transformasi digital.',
    id: 'sistem-integrasi'
  },
  {
    heading: 'Layanan Terkelola',
    icon: 'mdi:account-cog',
    description: 'Mengelola instalasi, aktivasi, pemeliharaan infrastruktur telekomunikasi dan IT dengan tenaga kerja berkompeten.',
    link: '',
    id: 'sistem-terkelola'
  },
  {
    heading: '⁠Kontruksi & Jasa Sipil',
    icon: 'mdi:hammer-screwdriver',
    description: 'Membangun dan merenovasi gedung, ruang ATM, serta infrastruktur telekomunikasi termasuk tower, shelter, dan jaringan OSP.',
    link: '/',
    id: 'konstruksi-sipil'
  },
  {
    heading: 'Perdagangan Umum',
    icon: 'tabler:shopping-cart-cog',
    description: 'Menyediakan suku cadang, perangkat mekanikal-elektrikal, fiber optik, aksesoris telekomunikasi, hingga peralatan radio komunikasi.',
    link: '/',
    id: 'perdagangan-umum'
  },
]

const StatisticsData: StatisticsType[] = [
  {
    value: '19+',
    description: 'Tahun Pengalaman',
    icon: 'tabler:building-warehouse',
  },
  {
    value: '40+',
    description: 'Mitra Strategis',
    icon: 'tabler:network',
  },
  {
    value: '340+',
    description: 'Proyek Nasional',
    icon: 'tabler:solar-panel',
  },
]

const TestimonialData: TestimonialType[] = [
  {
    name: 'Michelle Bennett',
    profession: 'CEO, Parkview International Ltd',
    comment:
      'The courses transformed my career! The practical approach and expert mentorship made all the difference.',
    imgSrc: '/images/testimonial/user1.webp',
    rating: 5,
  },
  {
    name: 'Leslie Alexander',
    profession: 'Founder, TechWave Solutions',
    comment:
      'Engaging content and flexible learning schedules helped me upskill without disrupting my work.',
    imgSrc: '/images/testimonial/user2.webp',
    rating: 5,
  },
  {
    name: 'Cody Fisher',
    profession: 'Product Manager, InnovateX',
    comment:
      'Highly recommend! The hands-on projects and supportive community boosted my confidence and skills.',
    imgSrc: '/images/testimonial/user3.webp',
    rating: 5,
  },
]

const AboutData: AboutType[] = [
  {
    section: 'company',
    title: 'PT Mitrabhakti Inti Perdana',
    content: `PT Mitrabhakti Inti Perdana (PT MBIP) didirikan pada 12 Februari 1996 dengan tujuan menjadi perusahaan profesional yang terus berkembang serta memberikan keuntungan bagi shareholder dan stakeholder. Sebagai bagian dari keluarga besar PT Industri Telekomunikasi Indonesia (PT INTI), saham PT MBIP dimiliki oleh PT Inti Konten Indonesia (PT INTENS), PT Inti Pindad Mitra Sejati (PT IPMS), dan Koperasi Inti.`,
    mapImage: '/images/about/about1.png'
  }
]

const ServicesData: ServicesType[] = [
  {
    title: 'Sistem Integrasi Teknologi',
    content: 'Menyediakan berbagai produk dan layanan perdagangan untuk mendukung kebutuhan industri telekomunikasi dan infrastruktur.',
    Image: '/images/services/trading.png'
  },
  {
    title: 'Managed Service',
    content: 'Menyediakan berbagai produk dan layanan perdagangan untuk mendukung kebutuhan industri telekomunikasi dan infrastruktur.',
    Image: '/images/services/trading.png'
  },
  {
    title: 'Konstruksi & Sipil',
    content: 'Menyediakan berbagai produk dan layanan perdagangan untuk mendukung kebutuhan industri telekomunikasi dan infrastruktur.',
    Image: '/images/services/trading.png'
  },
  {
    title: 'Perdagangan Teknis',
    content: 'Menyediakan berbagai produk dan layanan perdagangan untuk mendukung kebutuhan industri telekomunikasi dan infrastruktur.',
    Image: '/images/services/trading.png'
  },
  {
    title: 'Uniform & Apparel',
    content: 'Menyediakan berbagai produk dan layanan perdagangan untuk mendukung kebutuhan industri telekomunikasi dan infrastruktur.',
    Image: '/images/services/trading.png'
  },
]

const ProjectSolutionData: ProjectSolutionType[] = [
  {
    id: 'sistem-integrasi',
    title: "Sistem Integrasi Teknologi",
    description: "Sistem integrasi teknologi adalah layanan yang menghubungkan berbagai perangkat, aplikasi, dan infrastruktur digital perusahaan agar dapat bekerja secara terpadu dan efisien. Melalui integrasi, alur kerja menjadi lebih sederhana, data dapat dikelola secara terpusat, dan proses bisnis berjalan lebih cepat serta terukur, layanan ini mencakup:",
    image: "/images/ourservice/Sistem Integrasi Teknologi.png",
    solutions: [
      {
        id: 1,
        category: "IT Solution:",
        description: "Meliputi pengadaan dan pengelolaan software, hardware, LAN, upgrade sistem, dan berbagai kebutuhan teknologi informasi lainnya."
      }
    ]
  },
  {
    id: 'sistem-terkelola',
    title: "Layanan Terkelola",
    description: "Layanan terkelola adalah solusi pendampingan profesional di mana pengelolaan sistem teknologi informasi perusahaan dilakukan secara menyeluruh oleh tim ahli. Dengan layanan ini, perusahaan tidak perlu lagi terbebani oleh kompleksitas teknis, sehingga dapat lebih fokus pada pengembangan bisnis inti. Ruang lingkup layanan terkelola yang kami tawarkan meliputi:",
    image: "/images/ourservice/Layanan Terkelola.png",
    solutions: [
      {
        id: 1,
        category: "⁠Instalasi& Aktivasi Infrastruktur",
      },
      {
        id: 2,
        category: "Perangkat Telekomunikasi & Perangkat Teknologi Informasi Pendukungnya (BTS, Radio Microwave, Catudaya, Baterai, Manage Servive)",
      },
      {
        id: 3,
        category: "Engineering Service dll Bangunan & Renovasi (Pengecatan, Perbaikan dll)",
      },
      {
        id: 4,
        category: "Bantuan Teknis",
      },
      {
        id: 5,
        category: "Tenaga Kerja yang Berkompeten.",
      }
    ]
  },
  {
    id: 'konstruksi-sipil',
    title: "Kontruksi & Jasa Sipil",
    description: "Kami menyediakan layanan konstruksi dan jasa sipil yang dirancang untuk mendukung kebutuhan infrastruktur perusahaan maupun mitra bisnis. Layanan ini mencakup:",
    image: "/images/ourservice/Jasa Kontruksi & Jasa Sipil.png",
    solutions: [
      {
        id: 1,
        category: "Pembangunan Gedung Baru atau Renovasi",
      },
      {
        id: 2,
        category: "Pembangunan Ruang ATM",
      },
      {
        id: 3,
        category: "Infrastruktur Telekomunikasi (CMETower, Shelter, OSP (FTTH, FTTX) dll)",
      },
      {
        id: 4,
        category: "Perawatan BTS.",
      }
    ]
  },
  {
    id: 'perdagangan-umum',
    title: "Perdagangan Umum",
    description: "Kami menyediakan layanan perdagangan umum dengan cakupan produk yang luas untuk mendukung kebutuhan berbagai sektor industri maupun layanan. Adapun ruang lingkup perdagangan yang kami tawarkan meliputi:",
    image: "/images/ourservice/Perdagangan Umum.png",
    solutions: [
      {
        id: 1,
        category: "Suku Cadang",
      },
      {
        id: 2,
        category: "Mekanikal Elektrikal",
      },
      {
        id: 3,
        category: "Mounting",
      },
      {
        id: 4,
        category: "Kabel Listrik",
      },
      {
        id: 5,
        category: "Aksesories",
      },
      {
        id: 6,
        category: "Elektrikal Telekomunikasi",
      },
      {
        id: 7,
        category: "Fiber Optik",
      },
      {
        id: 8,
        category: "Sistem Integrator & Repeater Link",
      },
      {
        id: 9,
        category: "Peralatan Radio Komunikasi.",
      },
      {
        id: 10,
        category: "Air Mineral & Snack box",
      }
    ]
  }
]

const VisionMissionData: VisionMissionType = {
  vision: {
    title: 'Visi',
    content: 'Menjadi Badan Usaha Profesional yang menguntungkan di Bidang Perdagangan dan Jasa pembangunan serta Pemeliharaan (Manage Service) baik di sektor konstruksi (CME), (OSP), maupun Telekomunikasi dan Informatika.'
  },
  mission: {
    title: 'Misi',
    content: 'Membangun profesionalisme yang tinggi dalam bisnis perdagangan dan jasa dengan selalu memberi layanan terbaik kepada seluruh stake holder dan turut berpartisipasi aktif dalam mendukung pembangunan infrastruktur dan industri telekomunikasi & informatika di indonesia.'
  },
}

const ProfileData: ProfileType[] = [
  {
    heading: 'Abdul Aziz N Nalole,ST',
    img: '/images/struktur/Direktur.png',
    name: 'Direktur Utama'
  },
  {
    heading: 'Didik Pebrianto,SH         ',
    img: '/images/struktur/Komisaris.png',
    name: 'Dewan Komisaris'
  },
]

const FooterLinkData: FooterLinkType[] = [
  {
    links: [
      { label: 'Home', href: '/' },
      { label: 'Tentang Kami', href: '/about' },
      { label: 'Layanan Kami', href: '/ourservice' },
      { label: 'Hubungi Kami', href: '/#contact' },
    ],
  },
]

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    TechGaintsData,
    CourseData,
    TestimonialData,
    FooterLinkData,
    StatisticsData,
    AboutData,
    VisionMissionData,
    ProfileData,
    ServicesData,
    ProjectSolutionData,
  })
}
