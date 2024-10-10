import { CgMediaLive } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const CardProject = ({ title, description, image, urlDemo, urlGit }) => {
  return (
    <div className="card bg-base-100 rounded-t-lg">
      <Zoom>
        <figure className="shadow-xl ">
          <img src={image} alt="project" />
        </figure>
      </Zoom>
      <div className="card-body p-10 h-80">
        <h5 className="card-title text-2xl">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="flex justify-end items-center gap-5">
          <a href={urlGit}>
            <FaGithub
              className="hover:text-accent transition ease-out 0.5s"
              size={45}
            />
          </a>
          <a href={urlDemo}>
            <CgMediaLive
              size={45}
              className="hover:text-accent transition ease-out 0.5s"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
