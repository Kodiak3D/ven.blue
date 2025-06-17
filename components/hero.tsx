import Image from "next/image"
import hero from "@/public/hero.png"

export function Hero() {
  return (
    <Image src={hero} alt="Dragon Hero" className="w-full h-full max-h-[50%] object-cover mask-b-from-20% mask-b-to-80%" priority />
  )
}