/** Shared site details used for metadata and links. */
export const site = {
  name: 'Henrique',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://henrique-marketing-page.vercel.app',
  phone: '888-400-5050',
  // Same idea as the hero — short, plain language for search and social previews.
  title: 'Henrique | Digital Marketing Agency',
  description:
    'Amplify your business with data-centric, performance-driven digital marketing. Paid search, SEO, email, and social from a team that reports clearly and picks up the phone.',
  ogImage: '/images/photos/abstract-purple-rings.jpg',
} as const
