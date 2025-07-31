import Header from "@/components/portfolio/Header";
import Education from "@/components/portfolio/Education";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Achievements from "@/components/portfolio/Achievements";
import Certifications from "@/components/portfolio/Certifications";
import Footer from "@/components/portfolio/Footer";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const Index = () => {
  return (
    <div className="min-h-screen transition-colors duration-300">
      <ThemeToggle />
      <Header />
      <Education />
      <Skills />
      <Experience />
      <Achievements />
      <Certifications />
      <Footer />
    </div>
  );
};

export default Index;