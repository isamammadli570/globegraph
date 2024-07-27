import { Outlet } from "react-router-dom";
import PageNav from "./Components/PageNav";
import Features from "./Pages/Features";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Pricing from "./Pages/Pricing";
import NewsLetter from "./Pages/NewsLetter";
import Footer from "./Pages/Footer";

function AppLayout() {
  return (
    <div >
      <div>
        <PageNav />
        <HomePage />
        <Outlet />
        <Features />
        <About />
        <Pricing />
        <NewsLetter />
        <Footer />
      </div>
      <Outlet />
    </div>
  );
}

export default AppLayout;
