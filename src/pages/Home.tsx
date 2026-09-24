import Header from '../components/Header'
import Hero from '../components/Hero'
import WhatWeDo from '../components/WhatWeDo'
import Capabilities from '../components/Capabilities'
import WhyUs from '../components/WhyUs'
import SuccessStories from '../components/SuccessStories'
import Brands from '../components/Brands'
import Blog from '../components/Blog'
import Proof from '../components/Proof'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'

// Sections in page order, top to bottom.
export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <Capabilities />
        <WhyUs />
        <SuccessStories />
        <Brands />
        <Blog />
        <Proof />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
