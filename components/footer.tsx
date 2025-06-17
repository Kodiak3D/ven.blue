import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" asChild className="hover:bg-primary/20 hover:text-primary">
              <Link
                href="https://x.com/Kodiak3D_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow on X (Twitter)"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <title>X</title>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
            </Button>

            <Button variant="ghost" size="icon" asChild className="hover:bg-primary/20 hover:text-primary">
              <Link
                href="https://bsky.app/profile/vendragon.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow on Bluesky"
              >
                <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                  <title>Bluesky</title>
                  <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
                </svg>
              </Link>
            </Button>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Ven. All rights reserved.</p>
            <p className="mt-1">Programmed with 💙 by <Link href="https://bluefi.re">Bluefire</Link>.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
