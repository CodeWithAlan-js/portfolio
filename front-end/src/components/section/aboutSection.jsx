import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <section className="w-full flex flex-col items-center pb-10 relative">
      <div
        ref={ref}
        className={`${
          inView
            ? "w-full flex flex-col items-center opacity-100 animate-fade-left"
            : "opacity-0"
        }`}
      >
        <h1 className="text-3xl pb-10 flex justify-center">About me</h1>
        <div className="w-11/12 text-center md:w-2/4">
          <p className="text-lg leading-67 text-pretty ">
            Hi, I’m Alan, a 23-year-old full-stack developer with a passion for
            building efficient web applications. When I’m not coding, you’ll
            find me out in nature, exploring new trails and enjoying outdoor
            adventures. <br /> <br />
            My loyal companion, Era, my dog, is always by my side. Together, we
            explore the world while I seek new challenges in development,
            creating seamless user experiences from the front-end to the
            back-end. Whether it's solving complex problems or enjoying a hike,
            I’m always driven by curiosity and the love for adventure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
