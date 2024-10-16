import CardProject from "../cardProject";
import pomodoro from "../../assets/pomodoro.webp";
import pokecentral from "../../assets/pokecentral.webp";
import ecommerce from "../../assets/ecommerce.webp";
import automate from "../../assets/automate.webp";
import { useInView } from "react-intersection-observer";

const ProjectSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.05,
  });

  return (
    <section className="w-full bg-neutral flex flex-col py-10">
      <div
        ref={ref}
        className={` ${inView ? "animate-fade-up opacity-100" : "opacity-0"}`}
      >
        <div className="w-full flex justify-center">
          <h2 className="text-base-100 text-3xl">My projects</h2>
        </div>
        <div className="h-auto flex items-center justify-center p-10 gap-20 flex-wrap transition-all duration-500 ease-in-out">
          <CardProject
            title="Automate"
            description="Automate is a web app designed for garages to streamline vehicle management. It simplifies tracking repairs, maintenance, and appointments, centralizing client and vehicle information."
            image={automate}
            urlGit={"https://github.com/CodeWithAlan-js/AutoMate"}
          />
          <CardProject
            title="TimeCraft Pomodoro"
            description="The Pomodoro Timer is a simple and effective application based on the Pomodoro technique for time management with personalized settings."
            image={pomodoro}
            urlDemo={"https://timecraftpomodoro.netlify.app"}
            urlGit={"https://github.com/TokioDevv/Pomodoro"}
          />
          <CardProject
            title="PokeCentral"
            description="PokeCentral is your ultimate Pokédex companion, providing a comprehensive database of Pokémon species along with detailed information and interactive features."
            image={pokecentral}
            urlDemo={"https://pokecentral.netlify.app"}
            urlGit={"https://github.com/TokioDevv/PokeCentral"}
          />
          <CardProject
            title="E-commerce cart"
            description="The Gloss'Galor Simulator is a virtual storefront designed to replicate the experience of shopping for lip gloss products online."
            image={ecommerce}
            urlDemo={"https://glosscart.netlify.app/"}
            urlGit={"https://github.com/TokioDevv/Gloss-Galor"}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
