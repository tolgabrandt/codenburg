import { motion } from "framer-motion";
import BlogSection from "../../components/home/BlogSection";
import ConnectSection from "../../components/home/ConnectSection";
import HeroSection from "../../components/home/HeroSection";
import LetUsCallYouSection from "../../components/home/LetUsCallYouSection";
import SoftwareSection from "../../components/home/SoftwareSection";

const Home = () => {
  return (
    <main className="flex flex-col gap-8 mt-8">
      <HeroSection />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 100 }}
        transition={{ duration: 20, type: "tween" }}
      >
        <SoftwareSection />
      </motion.div>
      <ConnectSection />
      <LetUsCallYouSection />
    </main>
  );
};
export default Home;
