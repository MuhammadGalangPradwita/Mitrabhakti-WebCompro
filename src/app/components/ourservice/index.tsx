'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ServicesType, ProjectSolutionType, ProductBenefitType } from '@/app/types/service'

const ServicesPage = () => {
  const [services, setServices] = useState<ServicesType[]>([])
  const [projectSolutions, setProjectSolutions] = useState<ProjectSolutionType[]>([])
  const [productBenefits, setProductBenefits] = useState<ProductBenefitType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setServices(data.ServicesData || [])
        setProjectSolutions(data.ProjectSolutionData || [])
        setProductBenefits(data.ProductBenefitData || [])
      } catch (error) {
        console.error('Error fetching service data:', error)
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
      {/* Page Header */}
      <div className='text-center mt-40 mb-10'>
        {/* <h2 className='text-4xl font-bold text-gray-900 mb-4'>
          Layanan Kami
        </h2> */}
      </div>

      {/* Project Solution Section */}
      {projectSolutions.length > 0 && (
        <section id="project-solution" className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            {projectSolutions.map((ps) => (
              <div key={ps.id} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
                {/* Left Content - Image */}
                <div className="relative">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    {ps.image && (
                      <Image
                        src={ps.image}
                        alt={ps.title}
                        width={400}
                        height={300}
                        className="w-full h-96 object-cover"
                      />
                    )}
                  </div>
                </div>
                {/* Right Content - Text */}
                <div className="space-y-6">
                  <div>

                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      {ps.title}
                    </h2>
                  </div>
                  <div className="text-gray-700 leading-relaxed mb-8">
                    <p>{ps.description}</p>
                  </div>
                  <div className="space-y-4">
                    {ps.solutions.map((sol) => (
                      <div className="flex items-start space-x-3" key={sol.id}>
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">
                          <span className="font-medium">{sol.category}</span> {sol.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  )
}

export default ServicesPage