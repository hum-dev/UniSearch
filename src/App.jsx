import { useState, useEffect } from "react";
// import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
// import About from "./Pages/About";
// import Home from "./Pages/Home";
// import Button from './Components/Button';

function App() {
  const [country, setCountry] = useState("");

  const [campus, setCampus] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://universities.hipolabs.com/search?country=${country}`
        );
        const campus = await response.json();
        setCampus(campus);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    return () => {
      console.log("cleanup");
    };
  }, [country]);

  const handleSearch = () => {
    setCountry(country.trim());
  };

  return (
    <>
      <div className="search">
        <label>
          Search country:
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
        <br />

        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="container">

      {campus.map((item, index) => {
        return (
            <div key={index} className="card">
              <h1>{item.country}</h1>
              <h2>{item.name}</h2>
              <h3>{item.domains}</h3>
              <h4>{item.web_pages}</h4>
            </div>
        );
      })}
          </div>

      {/* <BrowserRouter>

      <Routes>
        <Route path = "/home" element = {<Home/>}/>
        <Route path = "/about" element = {<About/>}/>
      </Routes>  

    </BrowserRouter> */}
    </>
  );
}

export default App;
