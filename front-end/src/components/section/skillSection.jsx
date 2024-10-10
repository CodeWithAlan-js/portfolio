import SkillComponents from "../skillComponents";
import { skills } from "../../utils.jsx";

const SkillSection = () => {
  return (
    <section className=" flex flex-col justify-center items-center py-10">
      <div className="h-">
        <h2 className="text-3xl  text-neutral">Skills</h2>
      </div>
      <div className="w-3/4 md:w-2/5 border border-neutral rounded mt-10 p-6">
        <div className="flex flex-col justify-center items-start gap-10 md:gap-20 md:flex-row">
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
              ["node", "express", "mongodb"].includes(skill.name.toLowerCase())
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
    </section>
  );
};

export default SkillSection;
