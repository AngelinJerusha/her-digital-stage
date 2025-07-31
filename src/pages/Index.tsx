import Header from "@/components/portfolio/Header";
import Education from "@/components/portfolio/Education";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Achievements from "@/components/portfolio/Achievements";
import Certifications from "@/components/portfolio/Certifications";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
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