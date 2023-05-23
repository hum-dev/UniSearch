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
          `https://universitiesapi.onrender.com/v1/api/universities/${country}`
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

  const handleSearch = (event) => {
event.preventDefault();
handleSearchCampus();
   
    
  };

  const handleSearchCampus = (event) => {
    setCountry(event.target.value);
  
  };

  return (
    <>
      <form className="search" onSubmit={handleSearch}>
        <label>
          Search Campus:
          <input
            type="text"
            value={country}
            placeholder="Enter country"

            onChange={handleSearchCampus}
          />
        </label>
        <br />

        <button onClick={handleSearch}>Search</button>
      </form>

      
    
      <div className="container">

      {campus.map((item, index) => {
        
        return (
          
            <div key={index} className="card">
              <div className="content">
                <span>Name:</span> <h2> {item.name}</h2>
                <span>Country:</span> <h1>  {item.country}</h1> <br />
                <span>Domain:</span> <h3> {item.domains}</h3>
                <span>Web-page:</span> <h4> {item.web_pages}</h4>
              </div>
             
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
