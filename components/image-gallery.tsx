"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ImageModal } from "@/components/image-modal"

interface GalleryImage {
  src: string
  title?: string
  description?: string
}

interface ImageGalleryProps {
  title: string
  images: GalleryImage[]
  id: string
  initialShowCount?: number
}

export function ImageGallery({ title, images, id, initialShowCount = 12 }: ImageGalleryProps) {
  const [showAll, setShowAll] = useState(false)
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const displayImages = showAll ? images : images.slice(0, initialShowCount)
  const hasMore = images.length > initialShowCount

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-primary font-cinzel dragon-title">{title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayImages.map((image, index) => (
          <div
            key={`${id}-${index}`}
            className="group relative aspect-square overflow-hidden rounded-lg bg-card cursor-pointer transition-transform hover:scale-105"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.title || `${title} ${index + 1}`}
              fill
              className="object-cover transition-opacity group-hover:opacity-80"
            />
            {image.title && (
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold text-center px-4">{image.title}</h3>
              </div>
            )}
          </div>
        ))}
      </div>

      {hasMore && !showAll && (
        <div className="relative mt-12 text-center">
          {/* Fade effect */}
          <div className="absolute inset-x-0 -top-12 h-12 bg-gradient-to-t from-background to-transparent" />
          <Button
            onClick={() => setShowAll(true)}
            variant="outline"
            size="lg"
            className="bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/40"
          >
            Show All {title}
          </Button>
        </div>
      )}

      <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  )
}
