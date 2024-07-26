import Map from "./Components/Map/index.jsx";
import PageNav from "./Components/PageNav/index.jsx";
import Sidebar from "./Components/Sidebar/index.jsx";
import Footer from "./Pages/Footer/index.jsx";
function MapLayout() {
  return (
    <div>
      <div className="flex p-6 relative h-lvh overscroll-y-none ">
        <Sidebar />
        <Map />
      </div>
      <Footer/>
    </div>
  );
}

export default MapLayout;
