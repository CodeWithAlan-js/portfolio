import { FaLinkedin, FaGithub, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { useInView } from "react-intersection-observer";
import { FaXTwitter } from "react-icons/fa6";

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
          <a
            href="www.linkedin.com/in/alan-leing-869a44273"
            rel="noreferer"
            target="_blank"
          >
            <FaLinkedin className="text-3xl text-neutral hover:text-accent transition ease-in-out 0.5s" />
          </a>
          <a
            href="https://github.com/CodeWithAlan-js"
            rel="noreferer"
            target="_blank"
          >
            <FaGithub className="text-3xl text-neutral hover:text-accent  transition ease-in-out 0.5s" />
          </a>
          <a href="https://x.com/CodeWithAlan" rel="noreferer" target="_blank">
            <FaXTwitter className="text-3xl text-neutral hover:text-accent  transition ease-in-out 0.5s" />
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
