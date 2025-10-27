import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ProjectsSection } from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
