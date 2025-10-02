import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'

const Hero = () => {
  return (
    <section id='home-section' className='pt-20'>
      <div
        style={{
          position: 'relative',
          width: '100%',
          minHeight: 600,
          overflow: 'hidden',
          height: 'auto'
        }}
      >
        <Image
          src='/images/banner/bannerHome 1.webp'
          alt='nothing'
          fill
          style={{ objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textShadow: '0 2px 8px rgba(0,0,0,0.5)',
            textAlign: 'justify',
            width: '80%',
            padding: '0 2rem'
          }}
        >
          <h1 className='text-xl lg:text-4xl font-bold text-white'>
            "Solusi Digital, Infrastruktur, dan Sistem Terintegrasi untuk Pemerintah, Industri, dan Masyarakat."
          </h1>
          <div className='flex items-center gap-2 mt-4'>
            <a href="/#contact">
              <button className='border leading-none px-6 text-lg font-medium py-4 rounded-4xl transition-all duration-500 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'>
                Hubungi Kami
              </button>
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero