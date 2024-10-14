import { useInView } from "react-intersection-observer";
import bubble1 from "../../assets/bubble1.png";
import bubble2 from "../../assets/bubble2.png";

const AboutSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <section className="w-full flex flex-col items-center pb-10 relative">
      <img
        src={bubble1}
        alt=""
        className={`rounded-full h-24 w-24 absolute left-10 top-48 opacity-0 ${
          inView ? "animate-imgZigzagDisappear opacity-100" : ""
        }`}
      />
      <div
        ref={ref}
        className={`${
          inView
            ? "w-full flex flex-col items-center opacity-100 animate-fade-left"
            : "opacity-0"
        }`}
      >
        <h1 className="text-3xl pb-10 flex justify-center">About me</h1>
        <div className="w-3/4 text-center">
          <p className="about-section__description">
            Hi, I’m Alan, a 23-year-old full-stack developer with a passion for
            building efficient web applications. When I’m not coding, you’ll
            find me out in nature, exploring new trails and enjoying outdoor
            adventures. My loyal companion, Era, my dog, is always by my side.
            Together, we explore the world while I seek new challenges in
            development, creating seamless user experiences from the front-end
            to the back-end. Whether it's solving complex problems or enjoying a
            hike, I’m always driven by curiosity and the love for adventure.
          </p>
        </div>
        <img
          src={bubble2}
          alt=""
          className={`rounded-full h-24 w-24 absolute right-8 top-36 opacity-0 ${
            inView ? "animate-imgSwingDisappear opacity-100" : ""
          }`}
        />
      </div>
    </section>
  );
};

export default AboutSection;
