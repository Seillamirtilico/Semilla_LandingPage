import { Cards } from "@/components/Cards";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowToBuy } from "@/components/HowToBuy";
import { MeetTheDrop } from "@/components/MeetTheDrop";
import { PeekingCharacters } from "@/components/PeekingCharacters";
import { SizeGuide } from "@/components/SizeGuide";
import { StockCounter } from "@/components/StockCounter";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-1 flex-col">
      <PeekingCharacters />
      <Header />
      <main className="flex-1">
        <Hero />
        <Cards />
        <MeetTheDrop />
        <SizeGuide />
        <section id="stock" className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StockCounter />
              <HowToBuy />
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
