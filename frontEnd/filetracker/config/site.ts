export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "File Tracking",
  description: "Website Designed for storing and managing the files and ides",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github:
      "https://github.com/boringtutor/FileTracker/tree/main/frontEnd/filetracker",
    docs: "https://ui.shadcn.com",
  },
}
