import Map from "./Components/Map/index.jsx";
import Sidebar from "./Components/Sidebar/index.jsx";
import Footer from "./Pages/Footer/index.jsx";
import MapNav from "./Components/MapNav/index.jsx";

function MapLayout() {
  return (
    <div>
      <MapNav/>
      <div className="md:flex relative h-lvh overscroll-y-none ">
        <Sidebar />
        <Map />
      </div>
      <Footer />
    </div>
  );
}

export default MapLayout;
