import CardProject from "../cardProject";
import pomodoro from "../../assets/pomodoro.png";
import pokecentral from "../../assets/pokecentral.png";
import ecommerce from "../../assets/ecommerce.png";
import markdown from "../../assets/markdown.png";
import { useInView } from "react-intersection-observer";

const ProjectSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.05,
  });

  return (
    <section className=" w-full bg-neutral flex flex-col py-10">
      <div
        ref={ref}
        className={` ${inView ? "animate-fade-up opacity-100" : "opacity-0"}`}
      >
        <div className="w-full flex justify-center">
          <h2 className="text-base-100 text-3xl">My projects</h2>
        </div>
        <div className="h-full w-full flex flex-col items-center pt-10 gap-20 px-10">
          <CardProject
            title="Pomodoro"
            description="The Pomodoro Timer is a simple and effective application based on the Pomodoro technique for time management with personalized settings."
            image={pomodoro}
          />
          <CardProject
            title="Pokecentral"
            description="PokeCentral is your ultimate Pokédex companion, providing a comprehensive database of Pokémon species along with detailed information and interactive features."
            image={pokecentral}
          />
          <CardProject
            title="Ecommerce"
            description="The Gloss'Galor Simulator is a virtual storefront designed to replicate the experience of shopping for lip gloss products online."
            image={ecommerce}
          />
          <CardProject
            title="Markdown"
            description="Markdownify is a simple and intuitive online Markdown editor designed to streamline the creation of formatted documents in Markdown.
"
            image={markdown}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
