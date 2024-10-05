import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MainKey from "@/components/MainKey";
import Testimonail from "@/components/Testimonail";
import VideoPromo from "@/components/VideoPromo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mx-auto   w-full">
      <Hero />
      <VideoPromo />
      <Features />
      <Pricing />
      <Testimonail />
      <MainKey />
      <Footer />
    </main>
  );
}
