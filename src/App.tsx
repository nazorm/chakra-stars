import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {StarCard} from './StarCard'
import './App.css';

const App = () => {
  const [starsList, setStarsList] = useState([])


  const fetchStars = async () => {
    const res = await axios.get('https://swapi.dev/api/people')
    console.log(res.data)
  }
  useEffect(() => {
    fetchStars();
  }, [])

  return (
    <div className="App">
      <h1>Chakra</h1>
      <StarCard/>
    </div>
  );
}

export default App;
