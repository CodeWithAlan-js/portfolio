import { CgMediaLive } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const CardProject = ({ title, description, image, urlDemo, urlGit }) => {
  return (
    <div className="card bg-base-100 w-96 h-[470px] flex flex-col justify-between hover:scale-105 transition ease-in-out 0.5s">
      <Zoom>
        <figure className="shadow-xl rounded-t-lg h-2/3 overflow-hidden">
          <picture>
            <img
              src={image}
              alt="project"
              className="w-full h-full object-cover "
              loading="lazy"
            />
          </picture>
        </figure>
      </Zoom>
      <div className="card-body p-5 flex flex-col justify-between h-1/3">
        <h5 className="card-title text-2xl">{title}</h5>
        <p className="card-text text-base flex items">{description}</p>
        <div className="flex justify-end items-center gap-5">
          <a href={urlGit} target="_blank" rel="noreferer">
            <FaGithub
              className="hover:text-accent transition ease-out 0.5s cursor-pointer"
              size={35}
            />
          </a>
          {urlDemo && (
            <a href={urlDemo} target="_blank" rel="noreferer">
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