
import { HeroSection } from "@/components/ui/hero-section-dark"

function HeroSectionDemo() {
  return (
    <HeroSection
      title="Welcome to My Portfolio"
      subtitle={{
        regular: "Hi, I'm Aditya Gupta - ",
        gradient: "Aspiring Full Stack Developer",
      }}
      description="Computer Science student passionate about creating innovative web solutions. Always eager to learn new technologies and contribute to meaningful projects that make a difference."
      ctaText="View My Work"
      ctaHref="#projects"
      bottomImage={{
        light: "https://iili.io/Fz3QNcJ.png",
        dark: "https://iili.io/Fz3QNcJ.png",
      }}
      gridOptions={{
        angle: 65,
        opacity: 0.3,
        cellSize: 50,
        lightLineColor: "#6366f1",
        darkLineColor: "#4338ca",
      }}
    />
  )
}
export { HeroSectionDemo }
