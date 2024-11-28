import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./components/Layout/Header";
import HeroSection from "./components/HeroSection";
import MarqueeSection from "./components/MarqueeSection";
import WorkSection from "./components/WorkSection";
import KnowledgeSection from "./components/KnowledgeSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MarqueeSection />
        <WorkSection />
        <KnowledgeSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}

export default App;
