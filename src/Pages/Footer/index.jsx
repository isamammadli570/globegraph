function Footer() {
  return (
    <div className="gradientBg md:px-14 p-4 max-w-screen-2xl mt-10 mx-auto text-white">
      <div className="my-12 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-8">
          <a className="border-b" href="/">
            <img className="w-40" src="logo.png" alt="" />
          </a>
          <p className="md:w-1/2">
          Stay connected with GlobeGraph for the latest updates and travel inspiration.
          </p>
          <div>
            <input
              className="py-2 px-4 rounded-md focus:outline-none text-black"
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
            />
            <input
              type="submit"
              value="Subscribe"
              className="px-4 py-2 bg-secondary rounded-md ml-2 cursor-pointer hover:text-white hover:bg-teal-600 duration-300 transition-all"
            />
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
          <div className="space-y-6 mt-5">
            <h4 className="text-xl">Platform</h4>
            <ul className="space-y-3">
              <a href="/" className="block hover:text-gray-300">
                Overview
              </a>
              <a href="/" className="block hover:text-gray-300">
                Features
              </a>
              <a href="/" className="block hover:text-gray-300">
                About
              </a>
              <a href="/" className="block hover:text-gray-300">
                Pricing
              </a>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Help</h4>
            <ul className="space-y-3">
              <a href="/" className="block hover:text-gray-300">
                How does it works?
              </a>
              <a href="/" className="block hover:text-gray-300">
                Where to ask question?
              </a>
              <a href="/" className="block hover:text-gray-300">
                How to play?
              </a>
              <a href="/" className="block hover:text-gray-300">
                What is needed for this?
              </a>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Contacts</h4>
            <ul className="space-y-3">
              <p className=" hover:text-gray-300">(012) 1234-567-890</p>
              <p className=" hover:text-gray-300">xyz</p>
              <p className=" hover:text-gray-300">qwertyqwertyqwerty</p>
              <p className=" hover:text-gray-300">095467</p>
            </ul>
          </div>
        </div>
      </div>
      <hr />

      <div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8">
        <p>@Copyright GlobeGraph All rights reserved.</p>
        <div className="flex items-center space-x-5">
          <img
            src="facebook.png"
            alt=""
            className="w-8 cursor-pointer hover:translate-y-4 transition-all"
          />
          <img
            src="instagram.png"
            alt=""
            className="w-8 cursor-pointer hover:translate-y-4 transition-all"
          />
          <img
            src="twitter.png"
            alt=""
            className="w-8 cursor-pointer hover:translate-y-4 transition-all"
          />
          <img
            src="linkedin.png"
            alt=""
            className="w-8 cursor-pointer hover:translate-y-4 transition-all"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
