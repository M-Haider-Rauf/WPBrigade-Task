import './App.css'
import { ContactSection } from './Sections/ContactSection';
import { ImageGallery } from './Sections/ImageGallery';
import { LogoBar } from './Sections/LogoBar';
import { NavBar } from './Sections/NavBar';
import { TitleBar } from './Sections/TitleBar';
import { Footer } from './Sections/Footer';
import { PostSection } from './Sections/PostSection';
import { Banner } from './Sections/Banner';

function App() {
  return(
    <div className="flex flex-col pt-10">
      <Banner />
      <LogoBar />
      <NavBar />
      <TitleBar />
      <ImageGallery />
      <PostSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;