import Container from './ui/Container'
import WaveDivider from './ui/WaveDivider'

export type Brand = {
  name: string
  // TODO: add the logo files (e.g. public/images/brands/jolie.svg) and set `logo`. Until then the name is shown as text.
  logo?: string
}

export const brands: Brand[] = [
  { name: 'JOLIE.' },
  { name: 'caridad.' },
  { name: 'F7' },
  { name: 'scuola' },
  { name: 'PetMania' },
  { name: 'Tecnologia' },
]

type BrandsProps = {
  title?: string
  items?: Brand[]
}

export default function Brands({ title = 'The best brands choose Henrique', items = brands }: BrandsProps) {
  return (
    <section className="pt-16 pb-8 lg:pt-24">
      <Container>
        <h2 className="text-center font-display text-xl font-bold tracking-[-0.02em] text-ink sm:text-[22px]">{title}</h2>

        <ul className="mt-12 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:flex lg:justify-between">
          {items.map((brand) => (
            <li key={brand.name} className="flex justify-center">
              {brand.logo ? (
                <img src={brand.logo} alt={brand.name} className="h-10 w-auto" />
              ) : (
                <span className="font-display text-3xl font-bold tracking-[-0.03em] text-ink lg:text-[40px]">
                  {brand.name}
                </span>
              )}
            </li>
          ))}
        </ul>

        <WaveDivider className="mt-20" />
      </Container>
    </section>
  )
}
