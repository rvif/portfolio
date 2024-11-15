import { useTheme } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { InfiniteCarousel } from "@/components/infinite-carousel";
import { Footer } from "@/components/footer";

function App() {
  const { theme, setTheme } = useTheme();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar
        theme={theme}
        setTheme={setTheme}
        scrollToSection={scrollToSection}
      />
      <div className="min-h-screen">
        <Hero />
        <InfiniteCarousel />
      </div>
      <Projects />
      <Footer />
    </>
  );
}

export default App;
