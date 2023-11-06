import React, { useState, useEffect } from 'react';


function App() {
  let [city, setCity] = useState("Barrie");
  let [data, setData] = useState("");

  useEffect(() => {
    async function grabData(city) {
      try {
        let res = await fetch(`https://api.weatherapi.com/v1/current.json?key=863ba49fd3574cd78f332016233110&q=${city}&aqi=yes`);
        let data = await res.json();
        console.log(data);
        setData(data);

      } catch (error) {
        console.log(error.message);
      }
    }

    grabData(city);
  }, [city])


  function handleKeyPress(e) {
    if (e.key === "Enter") {
      setCity(e.target.value);
    }
  }

  return (
    <div className="container">
      <div className="inside-container">
        <input type="text" className="cityName" placeholder={city} onKeyDown={handleKeyPress} />
        
        <div className="util1 cityDesc">Weather in {city}</div>

        {
          (data !== "") ? <div className="util1 temp">Temp: {data.current.temp_c}</div> : <div className="util1 temp">Temp: Loading...</div>
        }
        {/* <div className="util1 temp">Temp: 2.45</div> */}

        {
          (data !== "") ? <div className="util1 feelTemp">Feel Temp: 1</div> : <div className="util1 temp">Feel Temp: Loading...</div>
        }
        {/* <div className="util1 feelTemp">Feel Temp: 1</div> */}

        {
          (data !== "") ? <div className="util1 humid">Humidity: 75%</div> : <div className="util1 temp">Humidity: Loading...</div>
        }
        {/* <div className="util1 humid">Humidity: 75%</div> */}

        {
          (data !== "") ? <div className="util1 speed">Wind speed: 7.2 km/h</div> : <div className="util1 temp">Wind speed: Loading...</div>
        }
        {/* <div className="util1 speed">Wind speed: 7.2 km/h</div> */}
        
      </div>
    </div>
  );
}

export default App;
