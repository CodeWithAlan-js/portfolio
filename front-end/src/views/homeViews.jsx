import HomeSection from "../components/section/homeSection";
import ProjectSection from "../components/section/projectSection";
import SkillSection from "../components/section/skillSection";
import CertificationSection from "../components/section/certficationSection";

const HomeViews = () => {
  return (
    <main className="min-h-screen h-screen w-screen flex flex-col  overflow-x-hidden ">
      <HomeSection />
      <ProjectSection />
      <SkillSection />
      <CertificationSection />
    </main>
  );
};

export default HomeViews;
