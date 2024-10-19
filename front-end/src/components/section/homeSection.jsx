import imgDecoration from "../../assets/imgDecoration.webp";
import { FaChevronDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import profil from "../../assets/profil.webp";

const HomeSection = ({ contactRef }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 1000);
  }, []);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen w-full relative flex flex-col">
      <div className="absolute top-10 left-10 md:top-20 md:left-20">
        <h1 className="text-5xl animate-fade-right">Welcome</h1>
        {visible && <div className="animate-divAppear bg-neutral h-1"></div>}
      </div>
      <div className="flex flex-col justify-center items-center h-full gap-5">
        <div className="flex flex-col justify-end items-end ">
          <picture>
            <img
              className="w-20 animate-wiggle"
              src={imgDecoration}
              alt="decoration"
              loading="lazy"
            />
          </picture>
          <picture>
            <img
              src={profil}
              className="rounded-full h-40 w-40 animate-fade "
              alt="profil image"
              loading="lazy"
            />
          </picture>
        </div>
        <p className="px-5 md:px-0 text-center text-lg font-medium animate-fade-left w-11/12 md:w-9/12 xl:w-4/12 leading-8">
          My name is Alan, and I am a 23-year-old{" "}
          <span className="font-bold">Fullstack JavaScript Developer</span>.
          <br />I specialize in crafting efficient and innovative web solutions,
          ranging from seamless user interfaces to robust backend
          infrastructures.
        </p>
        <button
          className="btn btn-neutral animate-fade-right text-base-100 hover:btn-accent text-xl px-6"
          onClick={scrollToContact}
        >
          Contact me !
        </button>
      </div>
      <div className="w-full flex justify-center animate-bounce">
        <FaChevronDown className="animate-bounce" size={35} />
      </div>
    </section>
  );
};

export default HomeSection;
