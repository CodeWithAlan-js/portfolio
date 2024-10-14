import { FaLinkedin, FaGithub, FaTwitter, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const year = new Date().getFullYear();

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <footer className="footer w-full py-5">
      <div
        ref={ref}
        className={`flex flex-col items-center w-full justify-center gap-5 opacity-0 ${
          inView ? "animate-fade-up opacity-100" : ""
        }`}
      >
        <div>
          <p className="text-xl">© {year} Alan Leing</p>
        </div>
        <div className="flex gap-5">
          <a href="https://www.linkedin.com/in/alan-leing-1a3b6b1b1/">
            <FaLinkedin className="text-3xl text-neutral hover:text-accent" />
          </a>
          <a href="">
            <FaGithub className="text-3xl text-neutral hover:text-accent" />
          </a>
          <a href="">
            <FaTwitter className="text-3xl text-neutral hover:text-accent" />
          </a>
        </div>
        <div className="flex gap-5">
          <p className="text-xl">Made with</p>
          <FaReact className="text-3xl text-neutral " />
          <RiTailwindCssFill className="text-3xl text-neutral " />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
