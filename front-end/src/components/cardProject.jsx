import { CgMediaLive } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const CardProject = ({ title, description, image, urlDemo, urlGit }) => {
  return (
    <div className="card bg-base-100 w-96 h-[500px] flex flex-col justify-between hover:scale-105 transition ease-in-out 0.5s">
      <Zoom>
        <figure className="shadow-xl rounded-t-lg w-full h-2/3 overflow-hidden">
          <picture>
            <img
              src={image}
              alt={`Screenshot of ${title} project`}
              className="w-full rounded-t-lg object-cover"
              loading="lazy"
            />
          </picture>
        </figure>
      </Zoom>
      <div className="card-body p-5 flex flex-col justify-between h-1/3">
        <div className="flex ">
          <h2 className="card-title text-2xl">{title}</h2>{" "}
        </div>
        <p className="card-text text-lg flex items">{description}</p>
        <div className="flex justify-end items-center gap-5">
          {urlGit && (
            <a
              href={urlGit}
              target="_blank"
              rel="noreferer"
              aria-label={`View ${title} source code`}
              role="link"
              tabIndex="0"
            >
              <FaGithub
                size={35}
                className="hover:text-accent transition ease-out 0.5s cursor-pointer"
              />
            </a>
          )}
          {urlDemo && (
            <a
              href={urlDemo}
              target="_blank"
              rel="noreferer"
              aria-label={`View ${title} live demo`}
              role="link"
              tabIndex="0"
            >
              <CgMediaLive
                size={35}
                className="hover:text-accent transition ease-out 0.5s cursor-pointer"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardProject;
