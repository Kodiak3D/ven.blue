"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import Image from "next/image"

interface GalleryImage {
  src: string
  title?: string
  description?: string
}

interface ImageModalProps {
  image: GalleryImage | null
  onClose: () => void
}

export function ImageModal({ image, onClose }: ImageModalProps) {
  if (!image) return null

  // Parse markdown-like formatting in description
  const parseDescription = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(
        /\[(.*?)\]$$(.*?)$$/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-secondary underline">$1</a>',
      )
  }

  return (
    <Dialog open={!!image} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl max-h-[90vh] p-0 bg-background/95 backdrop-blur-sm border-primary/20">
        <div className="relative w-full h-full flex flex-col">
          <div className="relative flex-1 min-h-[60vh]">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.title || "Gallery image"}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            />
          </div>

          {(image.title || image.description) && (
            <div className="p-6 border-t border-primary/20">
              {image.title && (
                <h3 className="text-2xl font-bold mb-3 text-primary font-cinzel dragon-title">{image.title}</h3>
              )}
              {image.description && (
                <div
                  className="text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: parseDescription(image.description),
                  }}
                />
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
