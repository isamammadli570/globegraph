import { motion } from "framer-motion";
import { fadeIn } from "../../Pages/variant.js";

function Features() {
  return (
    <div
      id="feature"
      className=" md:px-14 w-full md:mt-7 mt-80 h-screen flex justify-center items-center px-4 max-w-screen-2xl mx-auto"
    >
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="lg:w-1/4 "
        >
          <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">
            Why are better than others
          </h3>
          <p className="text-base text-third">
            Our platform provides users with the best mapping and weather
            forecast experience through advanced technology and accurate data.
          </p>
        </motion.div>

        <div className="w-full lg:w-3/4">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8"
          >
            <div className="bg-[rgba(255, 255, 255, 0.5)] rounded-[35px] h-96 shadow-3xl p-8 flex items-center justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
              <div>
                <img src="road.png" alt="" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Seamless and Intuitive Mapping Experience
                </h5>
              </div>
            </div>
            <div className="bg-[rgba(255, 255, 255, 0.5)] rounded-[35px] h-96 shadow-3xl p-8 flex items-center justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16">
              <div>
                <img src="road.png" alt="" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Accurate and Real-Time Weather Forecasts
                </h5>
              </div>
            </div>
            <div className="bg-[rgba(255, 255, 255, 0.5)] rounded-[35px] h-96 shadow-3xl p-8 flex items-center justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
              <div>
                <img src="road.png" alt="" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Customizable Features for Personalized Experience
                </h5>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Features;
