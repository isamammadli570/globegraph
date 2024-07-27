import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../Pages/variant.js";

function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const packages = [
    {
      name: "Start",
      monthlyPrice: 19,
      yearlyPrice: 199,
      green: "/public/green.png",
      description:
        "Standard Package: Affordable and reliable, ideal for beginners.",
    },
    {
      name: "Advance",
      monthlyPrice: 39,
      yearlyPrice: 399,
      green: "/public/green.png",
      description:
        "Advanced Package: Unlock more features for an enhanced experience.",
    },
    {
      name: "Premium",
      monthlyPrice: 59,
      yearlyPrice: 599,
      green: "/public/green.png",
      description:
        "Premium Package: Access exclusive benefits for a premium journey.",
    },
  ];

  return (
    <div
      id="pricing"
      className="md:px-14 md:mt-0 mt-[50rem] p-4 max-w-s mx-auto py-10 flex flex-col justify-center items-center h-screen"
    >
      <div className="text-center">
        <h2 className="md:text-5xl darkApp text-3xl font-extrabold text-primary mb-2">
          Here are all our plans
        </h2>
        <p className="text-primary darkApp md:w-1/2 mx-auto px-4">
          Explore our diverse plans catering to all needs. Find your perfect fit
          today!
        </p>

        <div className="mt-16 ">
          <label
            htmlFor="toggle"
            className="inline-flex items-center cursor-pointer "
          >
            <span className="mr-8 text-2xl font-semibold darkApp ">Monthly</span>
            <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out">
              <div
                className={`w-6 h-6 rounded-full  ${
                  isYearly ? "bg-primary ml-8" : "bg-gray-500"
                }`}
              ></div>
            </div>
            <span className="ml-8 text-2xl font-semibold darkApp">Yearly</span>
          </label>
          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
        </div>
      </div>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="md:grid grid-cols-3 gap-10 mt-20 w-11/12 mx-auto "
      >
        {packages.map((pkg, i) => (
          <div className="border py-10 px-4 rounded-lg shadow-3xl darkApp" key={i}>
            <h3 className="text-3xl font-bold text-center text-primary darkApp">
              {pkg.name}
            </h3>

            <p className="text-third my-5 text-center">{pkg.description}</p>

            <p className="text-center mt-5 text-secondary font-bold text-4xl">
              {isYearly ? `$${pkg.yearlyPrice}` : `$${pkg.monthlyPrice}`}
              <span>{isYearly ? "/year" : "/month"}</span>
            </p>
            <ul className="mt-4 space-y-2 px-4">
              <li className="flex gap-3 items-center">
                <img src={pkg.green} alt="" className="w-4 h-4" /> Videos of
                Lessons
              </li>
              <li className="flex gap-3 items-center">
                <img src={pkg.green} alt="" className="w-4 h-4" /> Homework
                check
              </li>
              <li className="flex gap-3 items-center">
                <img src={pkg.green} alt="" className="w-4 h-4" /> Additional
                practical task
              </li>
              <li className="flex gap-3 items-center">
                <img src={pkg.green} alt="" className="w-4 h-4" /> Monthly
                conferences
              </li>
              <li className="flex gap-3 items-center">
                <img src={pkg.green} alt="" className="w-4 h-4" /> Personal
                advice from teachers
              </li>
            </ul>
            <div className="w-full mx-auto mt-8 flex items-center justify-center">
              <button className="py-3 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all">
                Get started
              </button>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Pricing;
