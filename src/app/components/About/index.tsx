'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AboutType, VisionMissionType, ProfileType } from '@/app/types/about'

const AboutPage = () => {
  const [about, setAbout] = useState<AboutType[]>([])
  const [visionMission, setVisionMission] = useState<VisionMissionType | null>(null)
  const [profiles, setProfiles] = useState<ProfileType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setAbout(data.AboutData)
        setVisionMission(data.VisionMissionData)
        setProfiles(data.ProfileData)
      } catch (error) {
        console.error('Error fetching about data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return <p className="text-center py-20">Loading...</p>
  }

  return (
    <>
      {/* Company Section */}
      {about.length > 0 && (
        <section id="about-company" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <p className="text-sm text-gray-500 mb-4 uppercase tracking-wide">
                  SEKILAS PERUSAHAAN
                </p>
                <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
                  {about[0].title}
                </h2>
                <div className="text-gray-600 leading-relaxed text-justify whitespace-pre-line">
                  {about[0].content}
                </div>
              </div>

              {/* Right Content - Map */}
              <div className="relative">
                <div className="py-20">
                  {about[0].mapImage && (
                    <img
                      src={about[0].mapImage}
                      alt="About Image 1"
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Vision Mission Section */}
      {visionMission && (
        <section id="vision-mission" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            {/* Vision */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                {visionMission.vision.title}
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-600 leading-relaxed">
                  {visionMission.vision.content}
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                {visionMission.mission.title}
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-600 leading-relaxed">
                  {visionMission.mission.content}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Profiles Section */}
      {profiles.length > 0 && (
        <section id='profiles' className='scroll-mt-12 pb-20 bg-gray-50'>
          <div className='container mx-auto px-4'>
            {/* Header */}
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Tim Kami
              </h2>
            </div>

            {/* Profile Grid - 2 kolom dan rata tengah */}
            <div className='flex justify-center'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-0'>
                {profiles.map((profile, i) => (
                  <div key={i} className="flex justify-center">
                    <div className='bg-white m-3 px-8 pt-8 pb-12 shadow-lg rounded-2xl h-full border border-gray-200 text-center hover:shadow-xl transition-shadow duration-300'>
                      {/* Profile Image */}
                      <div className='mb-6'>
                        <Image
                          src={profile.img}
                          alt={profile.heading}
                          width={100}
                          height={100}
                          className='w-45 h-45 object-cover rounded-full mx-auto border-4 border-blue-600'
                        />
                      </div>
                      <div className='px-3 pt-6'>
                        <h6 className='text-black text-xl font-bold mb-2 leading-tight'>
                          {profile.heading}
                        </h6>
                        <p className='text-base font-medium text-gray-600'>
                          {profile.name}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section>
        <div className='container mx-auto px-4 mx-10'>
          <h2 className="text-4xl font-bold text-gray-900 mx-10 mb-20 text-center">
            Struktur Organisasi
          </h2>
          <img
            src="/images/struktur/Struktural Mitrabhakti.png"
            alt="Struktur Organisasi"
            className="mx-auto mt-8 max-w-4xl w-full h-auto"
          />
        </div>
      </section>
    </>
  )
}

export default AboutPage
