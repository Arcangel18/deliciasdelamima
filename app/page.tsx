import HeroSection from "../components/hero-section"
import AboutSection from "../components/about-section"
import ServicesSection from "../components/services-section"
import GallerySection from "../components/gallery-section"
import ContactSection from "../components/contact-section"
import MenuSection from "@/components/menu-section"

export default function Page() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MenuSection/>
      <GallerySection />
      <ContactSection />
    
    </main>
  )
}
