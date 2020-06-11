import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import NASA_KEY from './config.js';
import Hero from './components/Hero/Hero.js';

const nasaAPI = 'https://api.nasa.gov/planetary/apod?api_key=' + NASA_KEY;
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;



function App() {
  const [date, setDate] = useState(today);
  const [imageOfDay, setImageOfDay] = useState([]);
  const [api, setApi] = useState(nasaAPI)
  const handleChange = event => {
    setDate(event.target.value);
    console.log(event.target.value);
  };
  const handleSubmit = event => {
    //event.preventDefault();
    setApi(nasaAPI + '&date=' + date);
    console.log('setApi', api);
  };

  useEffect(() => {
    axios.get(api)
      .then(response => {
        setImageOfDay(response.data);
        console.log('axios response: ', response)
      })
      .catch(error => {
        console.log('axios error: ', error);
      })
  }, [])

  return (
    <div className='App'>
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role='img' aria-label='go!'>🚀</span>!
      </p> */}
      {/* <Header /> */}
      <form onSubmit={handleSubmit}>
        <label>
          <input type="date" onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <Hero imageOfDay={imageOfDay} />
      {/* <Main /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;

//WireFrame --------------------------
  //APP
    //Header
      //Logo
      //Search
      //Filter
      //Menu
        //Archives
        //Submissions
        //Calendar
        //RSS
        //Education
        //About
        //Discuss
    //Hero
      //Image of The Day
      // Info
        //Date
        //Title
        //Credit & Copyright
        //Explanation
      // Prev Next Pagination
    //Main
      //Masonry Grid
        //Cards
          //Header
          //Image
          //Footer
      //Pagination
    //Footer
      //Authors & Editors
      //Social Links
//------------------------------------