import SkillComponents from "../skillComponents";
import { skills } from "../../utils.jsx";
import { useInView } from "react-intersection-observer";

const SkillSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="flex py-10 w-screen">
      <div
        ref={ref}
        className={` ${
          inView
            ? "animate-fade w-full flex flex-col items-center opacity-100"
            : "opacity-0"
        }`}
      >
        <h2 className="text-3xl text-neutral">Skills</h2>
        <div className="border border-neutral mt-10 rounded w-4/5">
          <div className="flex flex-1 items-start flex-wrap justify-center gap-20 p-10 md:justify-evenly w-full">
            <SkillComponents
              title="Front-end"
              skill={skills.filter((skill) =>
                ["typescript", "react", "tailwind"].includes(
                  skill.name.toLowerCase()
                )
              )}
            />
            <SkillComponents
              title="Back-end"
              skill={skills.filter((skill) =>
                ["node", "express", "mongodb"].includes(
                  skill.name.toLowerCase()
                )
              )}
            />
            <SkillComponents
              title="Methodologies"
              skill={skills.filter((skill) =>
                ["agile", "mvc"].includes(skill.name.toLowerCase())
              )}
            />
            <SkillComponents
              title="Others"
              skill={skills.filter((skill) =>
                ["github", "figma"].includes(skill.name.toLowerCase())
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
