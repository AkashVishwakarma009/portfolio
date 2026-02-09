import { Suspense } from 'react';
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThreeBackground from "./components/ThreeBackground";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-black text-white">
      <ThreeBackground />
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-32">
          <Suspense fallback={null}>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </Suspense>
        </div>
        <Footer />
      </div>
    </div>
  );
}
