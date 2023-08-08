interface MenuItem {
  ID: number
  title: string
  url: string
  children: MenuItem[]
  pageSlug: string
  pageID: number
}

interface Header {
  siteLogoUrl: string | null
  siteTitle: string
  siteDescription: string
  favicon: string
  headerMenuItems: MenuItem[]
}

interface Footer {
  footerMenuItems: MenuItem[]
  socialLinks: string[] // Update this if you have specific social link types
  copyrightText: string | boolean
  sidebarOne: string
  sidebarTwo: string
}

interface MenuData {
  status: number
  data: {
    header: Header
    footer: Footer
  }
}
