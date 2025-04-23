import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";

export const serviceData = [];
const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center justify-center text-center relative">
      {/* Decorative Circles */}
      <Circles />

      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-center gap-y-10">
          {/* Heading */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-4 mt-8"
          >
            My services <span className="text-accent ">.</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[600px] text-center mx-auto"
          >
          Transforming digital interactions to create memorable, personalized customer journeys that drive business growth and engagement.
          </motion.p>

          {/* Service Slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full max-w-6xl"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>

      {/* Decorative Bulb */}
      <Bulb />
    </div>
  );
};


export default Services;
