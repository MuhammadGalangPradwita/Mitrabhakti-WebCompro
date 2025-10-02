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
            <a href="/">
              <button className='text-base text-black hover:text-primary bg-white px-4 py-2 rounded-lg shadow-md'>
                Contact Us
              </button>
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero