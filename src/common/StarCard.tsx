import React from 'react';
import { Heading, Text, useDisclosure } from '@chakra-ui/react';
import {
    Button, Box, Badge, Modal,
    // ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react"



export interface IStarCardProps {
    name: string;
    created?: number;
    image?: string;
    birth_year: string;
    hair_color: string;
    eye_color: string;
    gender: string;
    skin_color: string;
    starships: IStarShips[];
    vehicles: IVehicles[];
    films: IFilms[];
}

export interface IFilms {
    films: string;
}
export interface IStarShips {
    starships: string;
}
export interface IVehicles {
    vehicles: string;
}



export const StarCard = (children: IStarCardProps) => {
    const {
        name,
        birth_year,
        hair_color,
        eye_color,
        gender,
        skin_color,
        films,
        starships,
        vehicles } = children

    const movies = films.map((movie) => {
        return movie

    })
 
    console.log(movies)
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (

        <Box className='starCard' boxShadow='lg' style={{ backgroundColor: 'white' }}>
            <Box>  <Heading>{name}</Heading>
                <Text textTransform='capitalize'>gender:  {gender === 'n/a' ? 'Unspecified' : gender}</Text>
                <Text>birth: {birth_year}</Text>
                <Text>Movies : {movies.length}</Text>
                <Button onClick={onOpen} colorScheme="blue" >See More</Button> </Box>


            <Box>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalContent>
                        <ModalHeader>{name}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Box d="flex" alignItems="baseline">
                                <Badge borderRadius="full" px="2" colorScheme="teal">
                                    Wheels
                                </Badge>
                                <Box
                                    color="white.500"
                                    fontWeight="semibold"
                                    letterSpacing="wide"
                                    fontSize="xs"
                                    textTransform="uppercase"
                                    ml="2"
                                >
                                    {starships.length} starship(s) &bull; {vehicles.length} vehicle
                                </Box>
                            </Box>
                            <Text my='10px' textTransform='capitalize' >gender: {gender === 'n/a' ? 'Unspecified' : gender}</Text>
                            <Text my='10px' >birth: {birth_year}</Text>
                            <Text my='10px' >hair : {hair_color === 'n/a' || 'none' ? 'Unspecified' : hair_color.charAt(0).toUpperCase() + hair_color.slice(1)}</Text>
                            <Text my='10px' >eye : {eye_color}</Text>
                            <Text my='10px' >skin : {skin_color}</Text>
                            <Text my='10px' >Movies : {movies}</Text>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme="blue" mr={3} onClick={onClose}>
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>

        </Box>

    )
}
