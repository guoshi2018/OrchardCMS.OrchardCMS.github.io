export type SocialLink = {
	platform: string
	href: string
	me?: string
	text: string
	icon: string
	footerOnly?: boolean
}

export type SiteInfo = {
	name: string
	title: string
	description: string
	image: {
		src: string
		alt: string
	}
	socialLinks: SocialLink[]
}

const siteInfo: SiteInfo = {
	name: "Astro",
	title: "Build the web you want",
	description:
		"Astro builds fast content sites, powerful web applications, dynamic server APIs, and everything in-between.",
	image: {
		src: "/og/social.jpg",
		alt: "Build the web you want",
	},
	socialLinks: [
		{
			platform: "github",
			href: "https://github.com/OrchardCMS/OrchardCore",
			me: "https://github.com/OrchardCMS/",
			text: "Go to GitHub repo",
			icon: "social/github",
		},
		{
			platform: "twitter",
			href: "https://twitter.com/orchardcms",
			me: "https://twitter.com/orchardcms",
			text: "Follow us on Twitter",
			icon: "social/twitter",
		},
	],
}

export default siteInfo
