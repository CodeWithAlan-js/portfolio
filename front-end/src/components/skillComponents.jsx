const SkillComponents = ({ title, skill }) => {
  return (
    <div className="flex flex-col items-start">
      <p className="pb-6 text-xl font-medium">{title}</p>
      {skill.map((item, index) => (
        <div
          className="flex items-center mb-3 last-of-type:mb-0 text-xl "
          key={index}
        >
          {item.icon && <item.icon className="mr-2 text-neutral" size={25} />}
          <p>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</p>{" "}
        </div>
      ))}
    </div>
  );
};

export default SkillComponents;
