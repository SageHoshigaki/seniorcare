import './App.css'
import Navbar from './components/Navbar';
import MetricsSection from './components/MetricsSection';
import HeroIntro from './components/HeroIntro';
import TestimonialCarousel from './components/TextImageSection';
import Footer from './components/Footer';
import BlendedHeroVideo from './components/BlendedHeroVideo';
import ServicesShowcase from './components/ServicesShowcase';
import GalleryCard from "./components/MasonaryDriftGallery";
import CoverageMapSection from './components/CoverageMap';


function App() {
  return (
    
    <div className="">
      <Navbar/>
      <BlendedHeroVideo/>
      <HeroIntro/>
      <ServicesShowcase/>
      <MetricsSection/>
      <CoverageMapSection/>
      <GalleryCard />
      <TestimonialCarousel/>
    <Footer/>
      </div>

  );
}

export default App;