import { motion } from "framer-motion";
import { fadeIn } from "../../Pages/variant.js";

function About() {
  return (
    <div
      id="about"
      className="px-14 p-4 md:mt-0 mt-[36rem] max-w-s mx-auto space-y-10 flex flex-col justify-center items-center h-screen"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-16">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <img src="reading.png" className="w-[32rem]" alt="" />
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="md:w-2/5"
        >
          <h2 className="md:text-5xl darkApp text-3xl font-bold text-primary mb-5 leading-normal">
            Explore with GlobeGraph:{" "}
            <span className=" text-secondary">Maps, Weather.</span>
          </h2>
          <p className="text-third text-lg mb-7 ">
            {" "}
            Discover the world's wonders with our interactive maps and real-time
            weather updates.
          </p>
          <button className="py-3 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all">
            Get Started
          </button>
        </motion.div>
      </div>
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-16">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <img src="universe.png" className="w-[28rem]" alt="" />
        </motion.div>

        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="md:w-2/5"
        >
          <h2 className="md:text-5xl darkApp text-3xl font-bold text-primary mb-5 leading-normal">
            Capture Your Adventures,{" "}
            <span className="text-secondary ">Share Your Story.</span>
          </h2>
          <p className="text-third text-lg mb-7 ">
            {" "}
            Record your travels, cherish your memories, and share your unique
            journey with GlobeGraph.
          </p>
          <button className="py-3 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all">
            Get Started
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
