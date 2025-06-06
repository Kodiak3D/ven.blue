import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" asChild className="hover:bg-primary/20 hover:text-primary">
              <a
                href="https://x.com/Kodiak3D_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow on X (Twitter)"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </Button>

            <Button variant="ghost" size="icon" asChild className="hover:bg-primary/20 hover:text-primary">
              <a
                href="https://bsky.app/profile/vendragon.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow on Bluesky"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-2.67.297-5.568-.628-6.383-3.364C.378 9.418 0 4.458 0 3.768c0-.688.139-1.86.902-2.203C1.561 1.266 2.566.944 5.202 2.805c2.752 1.942 5.711 5.881 6.798 7.995z" />
                  <path d="M12 10.8c1.087-2.114 4.046-6.053 6.798-7.995C21.434.944 22.439 1.266 23.098 1.565c.763.343.902 1.515.902 2.203 0 .69-.378 5.65-.624 6.479-.815 2.736-3.713 3.66-6.383 3.364-.136-.02-.275-.039-.415-.056.138.022.276.04.415.056 2.67.297 5.568-.628 6.383-3.364.246-.829.624-5.789.624-6.479 0-.688-.139-1.86-.902-2.203-.659-.299-1.664-.621-4.3 1.24-2.752 1.942-5.711 5.881-6.798 7.995z" />
                </svg>
              </a>
            </Button>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Draconius Rex. All rights reserved.</p>
            <p className="mt-1">Forged in the fires of creativity</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
