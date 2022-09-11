import { ReactComponent as Phone } from "assets/svg/icons/telephone-fill.svg";
import { motion } from "framer-motion";

const LetUsCallYouSection = () => {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-[1240px] mx-auto text-center flex flex-col gap-8">
        <h1 className="heading-2 text-white">
          <span className="font-black">Let us</span> call you back
        </h1>
        <p className="font-light section-text text-slate-300">
          In order to add value to your project that you value, we can make you
          the most modern, most dynamic web design that you can easily leave
          your competitors behind.
        </p>
        <div className=" flex flex-col items-center gap-4">
          <div className="relative sm:w-[550px]">
            <input
              type="text"
              className="relative h-[56px] px-14 rounded-md w-full bg-[#090909]"
              placeholder="Phone"
            />
            <div className="absolute left-6 top-2/4 -translate-y-2/4">
              <Phone />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 100 }}
              transition={{ duration: 10, type: "tween" }}
              viewport={{ once: true }}
            >
              <div className="absolute right-2 top-2/4 -translate-y-2/4 bg-blue-600 h-[44px] flex items-center px-4 rounded-md">
                <button>Call me </button>
              </div>
            </motion.div>
          </div>
          <p className="text-sm font-light text-slate-200">
            By subscribing, dolor sit amet consectetur aua's{" "}
            <span className="text-blue-600">Nsciunt Perspiciatis </span> tempora
            eius.
          </p>
        </div>
      </div>
    </section>
  );
};
export default LetUsCallYouSection;
