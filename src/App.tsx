
import { Spinner, Box, Heading, Switch, Image } from "@chakra-ui/react"
import { StarCard } from './common/StarCard'
import { BiSun } from 'react-icons/bi';
import { BsMoon } from 'react-icons/bs';
import './App.scss';
import yoda from './assets/starwars.jpg';
import {  useQuery, useQueryClient } from 'react-query';
import { useEffect, useState } from "react";
import axios from 'axios'


const App = () => {
  const queryClient = useQueryClient()
  const [theme, setTheme] = useState<boolean>(true);
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(1);



  const getPeople = async (currentPage: number) =>{
    const { data } = await axios.get(`https://swapi.dev/api/people/?page=${currentPage}`)
   
  
    return data

  }

  const { status, data, error, isPreviousData } = useQuery(
    ['results', currentPage],
    () => getPeople(currentPage),
    { keepPreviousData: true }
  )

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    if (data?.next) {
      queryClient.prefetchQuery(['results', currentPage + 1], () =>
        getPeople(currentPage + 1)
      )
    }
  }, [data, currentPage, queryClient])
  if (error) return <p>Error...</p>


  // handle theme change
  const handleTheme = () => {
    setTheme(!theme)
  }

  // handle scroll
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }

  }
  return (
    <div className="App">
      <header className={scrolled ? ' header scrolled-header' : 'header static-header'} style={{ position: 'fixed', zIndex: 2 }}>
        <h1>Chakra Stars</h1>
        <nav>
          <ul>
            <li>
              About
            </li>

            <li>
              Contact
            </li>
            <li>
              Account
            </li>
            <li className={scrolled ? 'sun' : 'moon'}>
              {theme ? <BiSun onClick={handleTheme} /> : <BsMoon onClick={handleTheme} />}

            </li>
          </ul>
        </nav>
      </header>
      <Box className='yoda-container'>
        <Image src={yoda} alt={'yoda'} className='yoda-image' />
        <Heading>May the force be with you!!!</Heading>
      </Box>


      {status==='loading' || !data ? <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
        className='spinner'
      />
        :
        <div className={theme ? ' starlist-container dark-starlist-container' : 'starlist-container light-starlist-container'}   >
          <Box className='ymandatory-wrapper' px={{md:'50px', lg:"80px"}}>
            {data.results.map((star: any) => {
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
      {status === 'loading' ? '' : (
        <div className={theme? 'pagination darktheme-pagination' : 'pagination lighttheme-pagination'}>
          <div className= {theme? 'pages darktheme-pages' : 'pages lighttheme-pages' }>
            <button className={currentPage === 1? 'disabled' : ''}
              onClick={() => setCurrentPage(old => Math.max(old - 1, 1))}
            >
              Previous
            </button>
            <p> {currentPage}/{data.count}</p>
            <button className={isPreviousData || !data?.next? 'disabled': ''}
              onClick={() => {
                setCurrentPage(old => (data?.next ? old + 1 : old))
              }}
            >
              Next
            </button>
          </div>


        </div>
      )}




      <footer className={theme ? 'footer darktheme-footer' : 'footer lighttheme-footer'}>
        <p>Take the <span>Leap</span></p>
        <p>The world is your <span>Oyster</span></p>

      </footer>
    </div>

  );
}

export default App;
