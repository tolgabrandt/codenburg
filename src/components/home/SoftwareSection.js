import { ReactComponent as ReactLogo } from "assets/svg/logo/react.svg";
import { ReactComponent as LaravelLogo } from "assets/svg/logo/laravel.svg";
import { ReactComponent as TailwindcssLogo } from "assets/svg/logo/tailwindcss.svg";
import { ReactComponent as FirebaseLogo } from "assets/svg/logo/firebase.svg";
import { ReactComponent as BootstrapLogo } from "assets/svg/logo/bootstrap.svg";
import { motion } from "framer-motion";

const SoftwareSection = () => {
  return (
    <section className="bg-gray-50 px-6">
      <div className="max-w-[1240px] mx-auto py-24 flex flex-col gap-8 ">
        <div className="flex flex-col text-center gap-8">
          <h1 className="heading-2">
            Custom <span className="font-black">Software Solutions</span>
          </h1>
          <p className=" sm:w-[75%] mx-auto section-text">
            Augment your existing development team to complete a big project or
            build a new software solution or application from scratch with our
            custom software development company, Codenburg
          </p>
        </div>
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ type: "spring", stiffness: "60" }}
          viewport={{ once: true }}
        >
          <div className="flex gap-8 justify-center sm:w-[75%] mx-auto flex-wrap">
            <div className="cursor-pointer md:w-[140px] md:h-[140px] w-[calc(50%_-_1rem)] h-[110px] bg-slate-100 rounded-md flex flex-col gap-4 items-center justify-center">
              <TailwindcssLogo />
              <span>Tailwindcss</span>
            </div>
            <div className="md:w-[140px] md:h-[140px] w-[calc(50%_-_1rem)] h-[110px] bg-slate-100 rounded-md flex flex-col gap-4 items-center justify-center">
              <LaravelLogo />

              <span>Laravel</span>
            </div>
            <div className="md:w-[140px] md:h-[140px] w-[calc(50%_-_1rem)] h-[110px] bg-slate-100 rounded-md flex flex-col gap-4 items-center justify-center">
              <ReactLogo />

              <span>React</span>
            </div>
            <div className="md:w-[140px] md:h-[140px] w-[calc(50%_-_1rem)] h-[110px] bg-slate-100 rounded-md flex flex-col gap-4 items-center justify-center">
              <FirebaseLogo />

              <span>Firebase</span>
            </div>
            <div className="md:w-[140px] md:h-[140px] w-full h-[110px] bg-slate-100 rounded-md flex flex-col gap-4 items-center justify-center">
              <BootstrapLogo />

              <span>Bootstrap</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default SoftwareSection;
