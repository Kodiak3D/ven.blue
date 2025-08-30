import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { ImageGallery } from "@/components/image-gallery"
import { Footer } from "@/components/footer"

// Sample images - replace with actual dragon artwork
const art2D = [
  {
    src: "/2d/v1grumps.png?height=400&width=400",
    title: "Feral Form",
    description: "A majestic **dragon portrait** with intricate details.",
  },
  {
    src: "/2d/nightsmile.png?height=400&width=600",
    title: "Night Scare",
    description: "Not really a scare but a pleasant encounter",
  },
  {
    src: "/2d/hl2v1.png?height=500&width=400",
    title: "Wake up and smell the ashes",
    description: "The right dragon in the wrong place can make all the difference in the world.",
  },
  {
    src: "/2d/autumn-adventure.png?height=400&width=400",
    title: "Dragon Flight",
    description: "Soaring through storm clouds with lightning crackling around.",
  },
  {
    src: "/placeholder.svg?height=600&width=400",
    title: "Crystal Cave",
    description: "A dragon resting in a **crystal cave** filled with gems.",
  },
  {
    src: "/2d/thunderousrage.png?height=400&width=500",
    title: "Battle Scene",
    description: "Building up thunder with all purple might.",
  },
  {
    src: "/2d/webbersythtrade.png?height=400&width=400",
    title: "Webber Blepping",
    description: "Art trade with Webber.",
  },
    {
    src: "/2d/venmilo.png?height=400&width=400",
    title: "First ever drawing of this floof",
    description: "Looking all boopable.",
  },
]

const art3D = [
  {
    src: "/3d/solaris.jpg?height=400&width=400",
    title: "3D Dragon Model",
    description: "Game ready **3D dragon model** with detailed texturing and rigging.",
  },
  {
    src: "/3d/comsniper.jpg?height=400&width=600",
    title: "Rendered Scene",
    description: "Fully rendered 3D scene with dragon in natural environment.",
  },
  {
    src: "/3d/comsniper.jpg?height=500&width=400",
    title: "Combine sniper model",
    description: "Key frame from dragon flight animation sequence.",
  },
    {
    src: "/3d/monitordb.jpg?height=500&width=400",
    title: "Monitor model for S&box",
    description: "A model I made for s&box. Can be found on https://sbox.game/randkassets/r_k_monitor.",
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
