import { useParams, useSearchParams } from "react-router-dom";
import styles from "./City.module.css";
import { useEffect, useState } from "react";
import { useCities } from "../../contexts/CitiesContext";
import Spinner from "../Spinner/Spinner";
import ButtonBack from "../Button/ButtonBack";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

const api = {
  key: "9431c8ce43c3e0914d1311649ce8adb2",
  baseUrl: "https://api.openweathermap.org/data/2.5/",
};

function City() {
  const [weather, setWeather] = useState({});

  const searchPressed = async (city) => {
    const res = await fetch(
      `${api.baseUrl}weather?q=${cityName}&units=metric&appid=${api.key}`
    );
    const data = await res.json();
    console.log(data);
    setWeather(data);
  };
  

  /* const { id } = useParams(); */
  const { getCity, currentCity, isLoading } = useCities();

  const { cityName, emoji, date, notes } = currentCity;

  /* useEffect(
    function () {
      getCity(id);
    },
    [id, getCity]
  ); */

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          {/* <span>{emoji}</span> */} {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>
      <div className="weather">
        {/* <input type="text" onChange={(e) => setSearch(e.target.value)} /> */}
        <button className="border  p-1" onClick={searchPressed}>weather</button>

        <p>{weather.name}</p>

        {<p>{weather.main ? `${Math.floor(weather.main.temp)}°` : null}</p>}

       <p>{weather.main ? weather.weather[0].main : null }</p>
      </div>

      <div>
        <ButtonBack />
      </div>
    </div>
  );
}

export default City;
