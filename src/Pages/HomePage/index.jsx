import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { fadeIn } from "../variant.js";

function HomePage() {
  return (
    <section
      id="home"
      className="flex flex-col mt-10 items-center justify-center gap-2.5   "
    >
      <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24 w-full h-full">
        <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="md:w-3/5"
            >
              <h2 className="md-text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">
                <span className="border-b-2">GlobeGraph</span> diligently tracks
                your adventures.
              </h2>
              <p className="text-[#EBEBEB] text-2xl mb-8">
                Explore a world map that logs your visits to every city
                imaginable. Cherish your memorable journeys and share your
                global adventures with friends.
              </p>
              <div>
                <Link
                  to="/map"
                  className="py-3 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all"
                >
                  Start tracking now
                </Link>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
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

export default HomePage;
