import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner, Image, Box, Heading } from "@chakra-ui/react"
import { StarCard } from './StarCard'
import './App.scss';
import { IStarCardProps } from './common/types';
import useFetch from './hooks/useFetch';
import yoda from './assets/starwars.jpg';
import { useQuery } from 'react-query';

const App = () => {
  const { isLoading, error, data } = useQuery('',() =>
    fetch('https://swapi.dev/api/people').then(res =>
      res.json()
    )
  )

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error...</p>

  //const { loading, error, data } = useFetch(https://swapi.dev/api/people);



  return (
    <Box className="App" style={{ backgroundColor: '#0066b2' }} maxW="100%">
      <header className='header' style={{ position: 'fixed', zIndex: 2 }}>This is header</header>
      <Box className='yoda-container'>
        <img src={yoda} alt={'yoda'} className='yoda-image' />
        <Heading>May the force be with you!!!</Heading>

      </Box>

      {isLoading || !data ? <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      /> :
        <div className='starlist-container'>
          <Box className='ymandatory-wrapper'>
            {data.results.map((star:any) => {
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
                  starships={star.starships}
                  vehicles={star.vehicles}
                />
              )
            })}
          </Box>
        </div>
      }

      <footer className='footer'>This is footer</footer>
    </Box>

  );
}

export default App;
