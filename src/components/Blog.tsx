import Container from './ui/Container'
import Eyebrow from './ui/Eyebrow'
import SectionHeading from './ui/SectionHeading'
import MediaImage from './ui/MediaImage'

export type Post = {
  date: string
  title: string
  href: string
  image?: string
  imageAlt: string
}

// TODO: add the blog photos to public/images/blog/ and set `image` on each post.
export const posts: Post[] = [
  {
    date: 'May 2023',
    title: 'The evolution of live-stream content and short-form video: a look at the TikTok revolution',
    href: '#',
    imageAlt: 'A glowing brain floating on a purple background',
  },
  {
    date: 'May 2023',
    title: 'The Metaverse boom: brands unite and Apple takes a rain check',
    href: '#',
    imageAlt: 'A man wearing a VR headset holding controllers',
  },
  {
    date: 'May 2023',
    title: 'Verify your site is protecting your business',
    href: '#',
    imageAlt: 'A smiling woman holding a megaphone',
  },
]

type BlogProps = {
  eyebrow?: string
  title?: string
  items?: Post[]
}

export default function Blog({
  eyebrow = 'Blog',
  title = 'Think further with our expert insights',
  items = posts,
}: BlogProps) {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="text-center">
          <Eyebrow>{eyebrow}</Eyebrow>
          <SectionHeading className="mx-auto mt-6 max-w-[640px]">{title}</SectionHeading>
        </div>

        <ul className="mt-14 grid gap-[30px] md:grid-cols-3">
          {items.map((post) => (
            <li key={post.title}>
              <a
                href={post.href}
                className="group block h-full overflow-hidden rounded-[40px] border border-line transition-shadow hover:shadow-xl hover:shadow-brand/10"
              >
                <MediaImage
                  src={post.image}
                  alt={post.imageAlt}
                  className="aspect-[398/275] w-full transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="p-8 pb-12 sm:px-9">
                  <p>{post.date}</p>
                  <h3 className="mt-3 font-display text-xl leading-[1.3] font-bold tracking-[-0.02em] text-ink">
                    {post.title}
                  </h3>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
