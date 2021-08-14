import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner, Image, Box, Heading } from "@chakra-ui/react"
import { StarCard } from './StarCard'
import './App.scss';
import { IStarCardProps } from './types';
import yoda from './assets/starwars.jpg';

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
    <Box className="App" style={{ backgroundColor: '#0066b2' }} maxW="100%">
      <header className='header' style={{ position: 'fixed', zIndex: 2 }}>This is header</header>
      <Box className='yoda-container'>
        <Image src={yoda} alt={'yoda'} mx="0" size='1500px'
          objectFit="cover" />
        <Heading>May the force be with you!!!</Heading>

      </Box>

      {loading ? <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      /> :
        <div className='starlist-container'>
          <Box className='ymandatory-wrapper'>
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
