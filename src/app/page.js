import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import TeammSection from "./components/TeamSection";
import Footer from "./components/Footer";
import Services from "./components/Services";
import EmailSection from "./components/EmailSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div className="container mt-20 mx-auto px-12 py-4">
      <HeroSection />
      <AboutSection />
      <TeammSection />
      <Services />
      <EmailSection />
      <Footer />
      </div>
    </main>
  );
}
