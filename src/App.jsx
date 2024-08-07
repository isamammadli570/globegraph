import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import PageNotFound from "./Pages/PageNotFound/index.jsx";
import AppLayout from "./AppLayout.jsx";
import MapLayout from "./MapLayout.jsx";
import CityList from "./Components/City/CityList.jsx";
import CountryList from "./Components/Country/CountryList.jsx";
import City from "./Components/City/City.jsx";
import Form from "./Components/Form/Form.jsx";
import CitiesProvider from "./contexts/CitiesContext.jsx";


function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<AppLayout />} />

          <Route path="map" element={<MapLayout />}>
            <Route index element={<Navigate replace="cities" />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
