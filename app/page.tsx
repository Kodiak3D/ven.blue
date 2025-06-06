import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { ImageGallery } from "@/components/image-gallery"
import { Footer } from "@/components/footer"

// Sample images - replace with actual dragon artwork
const art2D = [
  {
    src: "/placeholder.svg?height=400&width=400",
    title: "Dragon Portrait",
    description: "A majestic **dragon portrait** with intricate details and [magical elements](https://example.com).",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    title: "Fire Breathing",
    description: "Dynamic scene of a dragon breathing fire across the landscape.",
  },
  {
    src: "/placeholder.svg?height=500&width=400",
    title: "Ancient Wyrm",
    description: "An *ancient wyrm* guarding its treasure hoard.",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    title: "Dragon Flight",
    description: "Soaring through storm clouds with lightning crackling around.",
  },
  {
    src: "/placeholder.svg?height=600&width=400",
    title: "Crystal Cave",
    description: "A dragon resting in a **crystal cave** filled with gems.",
  },
  {
    src: "/placeholder.svg?height=400&width=500",
    title: "Battle Scene",
    description: "Epic battle between dragon and knight in medieval setting.",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    title: "Peaceful Moment",
    description: "A gentle dragon watching over a village at sunset.",
  },
  {
    src: "/placeholder.svg?height=500&width=400",
    title: "Ice Dragon",
    description: "Frost-covered dragon in a winter wonderland.",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    title: "Dragon Egg",
    description: "Mysterious dragon egg glowing with inner fire.",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    title: "Sky Serpent",
    description: "Serpentine dragon coiling through the clouds.",
  },
  {
    src: "/placeholder.svg?height=600&width=400",
    title: "Mountain Lord",
    description: "Massive dragon perched atop a mountain peak.",
  },
  {
    src: "/placeholder.svg?height=400&width=500",
    title: "Underwater Dragon",
    description: "Sea dragon swimming through coral reefs.",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    title: "Baby Dragon",
    description: "Adorable baby dragon playing with butterflies.",
  },
]

const art3D = [
  {
    src: "/placeholder.svg?height=400&width=400",
    title: "3D Dragon Model",
    description: "High-poly **3D dragon model** with detailed texturing and rigging.",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    title: "Rendered Scene",
    description: "Fully rendered 3D scene with dragon in natural environment.",
  },
  {
    src: "/placeholder.svg?height=500&width=400",
    title: "Animation Frame",
    description: "Key frame from dragon flight animation sequence.",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    title: "Texture Study",
    description: "Detailed texture work showing scales and skin materials.",
  },
  {
    src: "/placeholder.svg?height=600&width=400",
    title: "Lighting Test",
    description: "Lighting study showcasing *dramatic shadows* and highlights.",
  },
  {
    src: "/placeholder.svg?height=400&width=500",
    title: "Rigging Demo",
    description: "Technical demonstration of dragon skeleton and rigging.",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    title: "Sculpt Detail",
    description: "High-resolution sculpt showing fine anatomical details.",
  },
  {
    src: "/placeholder.svg?height=500&width=400",
    title: "Environment",
    description: "Dragon lair environment with treasure and atmospheric effects.",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    title: "Wing Study",
    description: "Detailed wing membrane and bone structure analysis.",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    title: "Fire Effects",
    description: "Particle system for realistic fire breathing effects.",
  },
  {
    src: "/placeholder.svg?height=600&width=400",
    title: "Pose Study",
    description: "Various dragon poses and expressions for animation.",
  },
  {
    src: "/placeholder.svg?height=400&width=500",
    title: "Material Test",
    description: "PBR material testing for different dragon scale types.",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    title: "Concept to 3D",
    description: "Process showing 2D concept art translated to 3D model.",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <ImageGallery title="2D Artwork" images={art2D} id="gallery-2d" />
      <ImageGallery title="3D Artwork" images={art3D} id="gallery-3d" />
      <Footer />
    </div>
  )
}
