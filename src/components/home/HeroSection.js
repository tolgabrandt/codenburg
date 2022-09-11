import { ReactComponent as Activity } from "../../assets/svg/icons/activity.svg";
import { ReactComponent as Robot } from "../../assets/svg/bg/robot.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section>
      <div className="max-w-[1240px] mx-auto sm:py-24 gap-8 px-6 grid lg:grid-cols-2 ">
        <div className="flex flex-col gap-4">
          <div className="flex h-[40px] ">
            <motion.div
              className="hover:cursor-pointer"
              viewport={{ once: true }}
              initial={{ x: -90 }}
              whileInView={{ x: 0 }}
              transition={{ type: "spring", stiffness: "40" }}
            >
              <div className="bg-blue-50 h-full flex items-center px-6 text-blue-400 gap-4   ">
                <div className="flex items-center gap-4">
                  <Activity /> Multi Platform
                </div>
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-8">
              <h1 className="heading-1">
                <motion.div
                  viewport={{ once: true }}
                  initial={{ x: -90 }}
                  whileInView={{ x: 0 }}
                  transition={{ type: "spring", stiffness: "30" }}
                >
                  Supercharge your
                </motion.div>
                <motion.div
                  className="hover:cursor-pointer"
                  viewport={{ once: true }}
                  initial={{ x: -100 }}
                  whileInView={{ x: 0 }}
                  transition={{ type: "spring", stiffness: "30" }}
                >
                  <span className="text-calorize"> software </span>
                </motion.div>
              </h1>
              <motion.div
                className="hover:cursor-pointer"
                viewport={{ once: true }}
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                transition={{ type: "spring", stiffness: "20" }}
              >
                <p className="section-text">
                  We offer design thinking-based and technology driven services
                  in digital product innovation, customer experience management,
                  and digital transformation.
                </p>
              </motion.div>
            </div>
            <div className="flex flex-wrap gap-4">
              <motion.div
                className="hover:cursor-pointer"
                viewport={{ once: true }}
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                transition={{ type: "spring", stiffness: "20" }}
              >
                <Link to="/offers">
                  <button className="bg-blue-600 text-white px-16 h-[48px] w-full sm:w-auto rounded-md hover:bg-blue-500">
                    Get a Price
                  </button>
                </Link>
              </motion.div>
              <motion.div
                className="hover:cursor-pointer"
                viewport={{ once: true }}
                initial={{ x: -70 }}
                whileInView={{ x: 0 }}
                transition={{ type: "spring", stiffness: "20" }}
              >
                <button className="border border-blue-600 text-blue-600 ease w-full sm:w-auto px-16 h-[48px] rounded-md hover:bg-blue-500 hover:text-white">
                  Discover
                </button>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Robot />

          <div></div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
