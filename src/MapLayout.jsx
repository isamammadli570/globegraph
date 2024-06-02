import Map from "./Components/Map/index.jsx";
import Sidebar from "./Components/Sidebar/index.jsx";
function MapLayout() {
  return (
    <div className="flex p-6 relative h-lvh overscroll-y-none  ">
      <Sidebar />
      <Map />
    </div>
  );
}

export default MapLayout;
