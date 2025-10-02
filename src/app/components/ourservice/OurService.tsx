'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type ProjectSolutionType = {
  id: string
  title: string
  subtitle: string
  description: string
  image?: string
  solutions: { id: number; category: string; description: string }[]
}

export default function OurService() {
  const [services, setServices] = useState<ProjectSolutionType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch data')
        const json = await res.json()
        setServices(json.ProjectSolutionData || [])
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) return <p className="text-center py-20">Loading...</p>

  return (
    <section className="container mx-auto px-6 py-16 max-w-7xl">
      <h2 className="text-4xl font-bold text-center mb-12">Layanan Kami</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {services.map((service) => (
          <Link
            key={service.id}
            href={`/ourservice/${service.id}`}
            className="border rounded-lg p-6 shadow hover:shadow-lg transition"
          >
            {service.image && (
              <div className="mb-4 rounded overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={250}
                  className="object-cover w-full h-48"
                  priority={false}
                />
              </div>
            )}
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

