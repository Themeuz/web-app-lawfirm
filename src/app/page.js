import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import TeammSection from "./components/TeamSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0F282E]">
      <Navbar />
      <div className="container mt-20 mx-auto px-12 py-4">
      <HeroSection />
      <AboutSection />
      <TeammSection />
      </div>
    </main>
  );
}
