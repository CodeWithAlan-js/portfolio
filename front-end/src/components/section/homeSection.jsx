import imgDecoration from "../../assets/imgDecoration.svg";
import { FaChevronDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import profil from "../../assets/profil.png";

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
      <div className="flex flex-col justify-center items-center h-full mx-10 gap-5">
        <div className="flex flex-col justify-end items-end ">
          <img className="w-20 animate-wiggle" src={imgDecoration} alt="" />
          <img
            src={profil}
            className="rounded-full h-40 w-40 animate-fade "
            alt=""
          />
        </div>
        <p className="text-center text-l animate-fade-left">
          My name is Alan, I'm 23 years old, and I'm a passionate full-stack
          developer. I enjoy building efficient and innovative web solutions,
          from user interfaces to backend infrastructures.
        </p>
        <button
          className="btn btn-neutral animate-fade-right"
          onClick={scrollToContact}
        >
          Contact me !
        </button>
      </div>
      <div className="w-full flex justify-center">
        <FaChevronDown className="animate-bounce" size={35} />
      </div>
    </section>
  );
};

export default HomeSection;
