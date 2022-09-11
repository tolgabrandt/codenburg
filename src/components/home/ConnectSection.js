import { ReactComponent as Power } from "assets/svg/icons/power.svg";
import DashboardIMG from "assets/svg/images/dashboard.svg";
import SwitcherButton from "components/dropdown/SwitcherButton";
import { motion } from "framer-motion";

const ConnectSection = () => {
  return (
    <section>
      <div className="max-w-[1240px] mx-auto sm:py-24  px-6 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ type: "spring", stiffness: "25" }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-8">
            <h1 className="heading-2">
              <span className="font-black">Connect</span> to project panel
            </h1>
            <p className="section-text">
              We add value to your project with a completely modern and dynamic
              perspective.
            </p>
            <div className="flex flex-col gap-4">
              <SwitcherButton value="light" />
              <button className="h-[48px] bg-blue-600 text-white rounded-md flex items-center gap-4 pl-6">
                <Power /> Connect
              </button>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 100 }}
            transition={{ duration: 30, type: "tween" }}
            viewport={{ once: true }}
          >
            <div className="bg-blue-50 rounded-md h-min w-full lg:w-[90%]  ">
              <img
                className="p-2 w-full"
                src={DashboardIMG}
                alt="Dashboard Panel Background"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default ConnectSection;
