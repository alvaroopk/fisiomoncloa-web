import Hero from "@/components/sections/Hero";
import ValueProps from "@/components/sections/ValueProps";
import SpecialtiesPreview from "@/components/sections/SpecialtiesPreview";
import TeamPreview from "@/components/sections/TeamPreview";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProps />
      <SpecialtiesPreview />
      <TeamPreview />
      <CTASection />
    </>
  );
}
