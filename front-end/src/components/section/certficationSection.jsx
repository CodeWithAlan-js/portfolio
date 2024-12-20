import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import certif1 from "../../assets/certif1.svg";
import certif2 from "../../assets/certif2.svg";
import certif3 from "../../assets/certif3.svg";
import certif4 from "../../assets/certif4.svg";

const certifications = [
  { src: certif1, alt: "Certification 1" },
  { src: certif2, alt: "Certification 2" },
  { src: certif3, alt: "Certification 3" },
  { src: certif4, alt: "Certification 4" },
];

const CertificationSection = () => {
  return (
    <section className="flex flex-col justify-center items-center pb-10">
      <div>
        <h2 className="p-3 rounded-t-md text-3xl bg-neutral border-b text-base-100">
          Certifications
        </h2>
      </div>
      <div className="w-full bg-neutral p-6">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={2}
          autoplay={{ delay: 2500 }}
        >
          {certifications.map((certif, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <img
                className="h-32 w-auto"
                src={certif.src}
                alt={certif.alt}
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CertificationSection;
