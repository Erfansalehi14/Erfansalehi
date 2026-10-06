import { useReveal } from './hooks.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Facilities from './components/Facilities.jsx';
import Showcase from './components/Showcase.jsx';
import StorySection from './components/StorySection.jsx';
import Courts from './components/Courts.jsx';
import Membership from './components/Membership.jsx';
import Booking from './components/Booking.jsx';
import GallerySection from './components/GallerySection.jsx';
import Events from './components/Events.jsx';
import CTASection from './components/CTASection.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  useReveal();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Facilities />
        <Showcase />
        <StorySection />
        <Courts />
        <Membership />
        <Booking />
        <GallerySection />
        <Events />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
