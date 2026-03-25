import Header from "@/components/layout/Header.tsx"
import Hero from "@/components/sections/Hero.tsx"
import About from "@/components/sections/About.tsx"
import Services from "@/components/sections/Services.tsx"
import Contact from "@/components/sections/Contact.tsx"
import Footer from "@/components/layout/Footer.tsx"
import HowItWorks from "@/components/sections/HowItWorks.tsx"
import Testimonials from "@/components/sections/Testimonials.tsx"
import Blog from "@/components/sections/Blog.tsx"

export default function Home() {
  return (
    <div className="bg-white text-gray-900">

      <Header />

      <main className="pt-24">

        <Hero />

        <Services />

        <HowItWorks />

        <About />
        
        <Testimonials />

        <Contact />

        <Blog />

      </main>

      <Footer />

    </div>
  )
}