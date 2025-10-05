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
          src='/images/banner/homeBase1.png'
          alt='nothing'
          fill
          style={{ objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '40%',
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
          </h1>
          <div className='container mx-auto mt-70 flex justify-start'>
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