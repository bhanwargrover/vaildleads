import { motion } from "framer-motion";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full relative overflow-hidden">
      {/* text section */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center pt-28 md:pt-32 xl:pt-40 xl:text-left h-full container mx-auto px-4 sm:px-6">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mt-5"
          >
            Crafting Growth-Centric <br /> Into{" "}
            <span className="text-accent">Digital Journeys for Brands</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-sm sm:text-base md:text-lg max-w-md md:max-w-xl mx-auto xl:mx-0 mt-4 mb-8 xl:mb-16"
          >
            With extensive experience in digital marketing, I have successfully
            managed and executed a wide range of campaigns across various
            digital platforms. My expertise includes developing data-driven
            strategies, optimizing websites for search engines (SEO), creating
            compelling content, and utilizing social media platforms to enhance
            brand visibility and engagement. 
           
          </motion.p>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* image and effects */}
      <div className="w-full h-full absolute right-0 bottom-0">
        {/* background explosion effect */}
        <div
          role="img"
          className="hidden xl:block xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        {/* particles */}
        <ParticlesContainer />

        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] xl:max-w-[737px] absolute bottom-0 right-1/2 xl:right-[8%] translate-x-1/2 xl:translate-x-0"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
