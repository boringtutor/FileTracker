import Link from "next/link"

import { Icons } from "../components/icons"
import { MainNav } from "../components/main-nav"
import { Button, buttonVariants } from "../components/ui/button"
import { siteConfig } from "../config/site"
import AuthButton from "./auth/auth_button"
import { ThemeToggle } from "./theme-toggle"

//import { ThemeToggle } from "@/components/theme-toggle"
export function SiteHeader() {
  return (
    <header className="bg-background flex sticky top-0 z-40 w-full border-b-2">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        {/* This will be the start of main nav */}
        <MainNav items={siteConfig.mainNav} />
        {/* This will be end of main nav */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <AuthButton />

            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current " />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
