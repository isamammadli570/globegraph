import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageNotFound from "./Pages/PageNotFound/index.jsx";
import AppLayout from "./AppLayout.jsx";
import MapLayout from "./MapLayout.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AppLayout />} />
        <Route path="map" element={<MapLayout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
