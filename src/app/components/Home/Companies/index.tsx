'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Companies = () => {
  const [techGaint, setTechGaint] = useState<{ imgSrc: string }[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/data/data.json')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setTechGaint(data.TechGaintsData)
      } catch (error) {
        console.error('Error loading TechGaintsData:', error)
      }
    }
    fetchData()
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 700, settings: { slidesToShow: 2 } },
      { breakpoint: 500, settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <section className='text-center'>
      <div className='container'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Partner & Pelanggan 
          </h2>
        </div>
        <div className='py-7 border-b'>
          <Slider {...settings}>
            {techGaint.map((item, i) => (
              <div key={i}>
                <Image
                  src={item.imgSrc}
                  alt={item.imgSrc}
                  width={116}
                  height={40}
                  className='w-auto'
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Companies