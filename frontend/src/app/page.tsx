import Image from "next/image";
import { AboutSection } from "../modules/landing/components/about-section";
import { LocationSection } from "../modules/landing/components/location-section";
import { EnvironmentSection } from "../modules/landing/components/environment-section";
import { CtaSection } from "../modules/landing/components/cta-section";
import { HeroSection } from "../modules/landing/components/header";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <LocationSection />
      <EnvironmentSection />
      <CtaSection />
    </>
  );
}
