import HomeSection from "../components/section/homeSection";
import ProjectSection from "../components/section/projectSection";
import SkillSection from "../components/section/skillSection";
import CertificationSection from "../components/section/certficationSection";
import AboutSection from "../components/section/aboutSection";
import ContactSection from "../components/section/contactSection";
import Footer from "../components/footer";
import { useRef } from "react";

const HomeViews = () => {
  const contactRef = useRef(null);

  return (
    <main className="min-h-screen h-screen w-screen flex flex-col  overflow-x-hidden ">
      <HomeSection contactRef={contactRef} />
      <ProjectSection />
      <SkillSection />
      <CertificationSection />
      <AboutSection />
      <ContactSection contactRef={contactRef} />
      <Footer />
    </main>
  );
};

export default HomeViews;
