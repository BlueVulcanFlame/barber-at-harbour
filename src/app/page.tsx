import AboutSam from "@/components/AboutSam";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MakeADayOfIt from "@/components/MakeADayOfIt";
import Nav from "@/components/Nav";
import Services from "@/components/Services";
import Trusted from "@/components/Trusted";
import Visit from "@/components/Visit";
import VisitCTA from "@/components/VisitCTA";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">
        <Hero />
        <AboutSam />
        <Services />
        <Visit />
        <Trusted />
        <MakeADayOfIt />
        <VisitCTA />
      </main>
      <Footer />
    </>
  );
}
