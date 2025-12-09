import { projects } from "@/content/data/projects"
import Image from "next/image"

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    return (
      <div className="text-center text-white py-20">
        <h1 className="text-3xl font-bold">Projet introuvable</h1>
      </div>
    )
  }

  return (
    <div className="px-6 md:px-20 py-16 text-white bg-black min-h-screen">
      {/* TITLE */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gold">
        {project.title.fr}
      </h1>

      {/* DESCRIPTION */}
      <p className="text-lg opacity-80 max-w-3xl mb-12">
        {project.description.fr}
      </p>

      {/* GALLERY */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {project.images.map((img, index) => (
          <div
            key={index}
            className="relative w-full h-64 md:h-72 lg:h-80 rounded-xl overflow-hidden border border-gold shadow-xl"
          >
            <Image
              src={img}
              alt={project.title.fr}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}