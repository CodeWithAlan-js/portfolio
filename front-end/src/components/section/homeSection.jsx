import imgDecoration from "../../assets/imgDecoration.svg";

const HomeSection = () => {
  return (
    <section className="h-full w-full relative flex">
      <div className="absolute top-10 left-10 md:top-20 md:left-20">
        <h1 className="text-5xl">Welcome</h1>
        <div className="h-1 bg-black"></div>
      </div>
      <div className="flex flex-col justify-center items-center h-full mx-10 gap-5">
        <div className="flex flex-col justify-end items-end ">
          <img className="w-20" src={imgDecoration} alt="" />
          <img
            src="https://picsum.photos/200"
            className="rounded-full h-40 w-40 "
            alt=""
          />
        </div>
        <p className="text-center text-l">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora et
          rerum quisquam consequuntur fugit eos inventore, dicta repudiandae
          deserunt commodi. Saepe quidem unde consectetur necessitatibus ex
          dolor et placeat accusamus!
        </p>
      </div>
    </section>
  );
};

export default HomeSection;
