import SkillComponents from "../skillComponents";
import { skills } from "../../utils.jsx";
import { useInView } from "react-intersection-observer";

const SkillSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.05,
  });

  return (
    <section className="flex py-10">
      <div
        ref={ref}
        className={` ${
          inView
            ? "animate-fade w-full flex  flex-col items-center opacity-100"
            : "opacity-0"
        }`}
      >
        <h2 className="text-3xl  text-neutral">Skills</h2>
        <div className="flex justify-center border border-neutral rounded mt-10 p-6 w-3/5 sm:w-auto">
          <div className="flex flex-col justify-center items-start gap-10 md:gap-40 sm:flex-row">
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
