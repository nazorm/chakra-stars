import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Spin } from 'antd';
import { StarCard } from './StarCard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import { IStarCardProps } from './types';

const App = () => {
  const [starsList, setStarsList] = useState<IStarCardProps[]>([])
  const [loading, setLoading] = useState(true)


  const fetchStars = async () => {
    const res = await axios.get('https://swapi.dev/api/people')
    setLoading(false)
    console.log(res.data.results)
    setStarsList(res.data.results)
  }
  useEffect(() => {
    fetchStars();
  }, [])

  return (
    <Router basename="/chakrastars">
      <div className="App">
        <Switch>
          <Route exact path='/'>
            {loading ? <Spin /> :
              <div className='starlist-container'>
                {starsList.map((star) => {
                  return (
                    <StarCard
                      key={star.created}
                      name={star.name}
                      birth_year={star.birth_year}
                      eye_color={star.eye_color}
                      hair_color={star.hair_color}
                      skin_color={star.skin_color}
                      gender={star.gender}
                      films={star.films}
                    />
                  )
                })}
              </div>

            }

          </Route>


        </Switch>
      </div>
    </Router>
  );
}

export default App;
