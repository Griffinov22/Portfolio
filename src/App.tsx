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
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import IniTransition from "./components/Layout/IniTransition";

function App() {
  const [showTransition, setShowTransition] = useState<boolean>(true);

  useEffect(() => setShowTransition(false), []);

  return (
    <>
      <AnimatePresence>
        {showTransition && <IniTransition key="transition" />}
      </AnimatePresence>
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
