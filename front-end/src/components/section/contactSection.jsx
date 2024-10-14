import { useInView } from "react-intersection-observer";
import { useForm, ValidationError } from "@formspree/react";

const ContactSection = ({ contactRef }) => {
  const [state, handleSubmit] = useForm("myzyywqv");
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  if (state.succeeded) {
    return (
      <section className="w-full bg-neutral py-10">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-base-100 text-3xl mb-10">Thank you!</h2>
          <p className="text-base-100 w-80 text-center">
            Your message has been sent successfully. I'll get back to you soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-neutral py-10" ref={contactRef}>
      <div
        ref={ref}
        className={`flex flex-col justify-center items-center opacity-0 ${
          inView ? "animate-fade-right opacity-100" : ""
        }`}
      >
        <h2 className="text-base-100 text-3xl mb-10">Contact me</h2>
        <div className="flew justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-96 border flex justify-center gap-6 rounded"
          >
            <div className="flex flex-col gap-6 w-80 m-10">
              <input
                type="text"
                name="name"
                id="name"
                className="input input-bordered"
                placeholder="Name"
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />

              <input
                type="email"
                name="email"
                id="email"
                className="input input-bordered"
                placeholder="Email"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              <textarea
                name="message"
                id="message"
                className="textarea textarea-bordered resize-none h-40"
                placeholder="Message"
                required
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <button
                type="submit"
                disabled={state.submitting}
                className="btn btn-accent w-32 self-center hover:btn-base-100"
              >
                {state.submitting ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
