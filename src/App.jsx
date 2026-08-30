import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import HowItWorks from "./components/HowItWorks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className="App">
      <a href="#hero" className="skip-link">
        Skip to content
      </a>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <HowItWorks />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
