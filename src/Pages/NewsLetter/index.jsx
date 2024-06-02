import { motion } from "framer-motion";
import { fadeIn } from "../../Pages/variant.js";

function NewsLetter() {
  return (
    <section className="flex flex-col items-center justify-center gap-2.5">
      <div className="md:px-12 p-4 max-w-screen-2xl mx-auto md:mt-24 mt-[30rem] w-full h-full">
        <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="md:w-3/5"
            >
              <h2 className="md-text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">
                <span className="border-b-2">GlobeGraph</span> enables global
                exploration and offers a deeper insight into world travels for
                people worldwide.
              </h2>
            </motion.div>
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <img
                src="fashion.png"
                alt=""
                className="lg:h[386px] rotate-[270deg]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
