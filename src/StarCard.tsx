import React from 'react';
import { IStarCardProps } from './types';
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

import './App.scss'


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

    const starShips = starships.map((starship) => {
        return starship
    })
    const vehicless = vehicles.map((vehicle) => {
        return vehicle
    })

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (

        <Box className='starCard' style={{ backgroundColor: 'whitesmoke' }}>
            <Heading>{name}</Heading>
            <Text>gender:  {gender}</Text>
            <Text>birth: {birth_year}</Text>
            <Text>Movies : {movies.length}</Text>
            <Button onClick={onOpen} colorScheme="blue" >See More</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                {/* <ModalOverlay /> */}
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
                                {starShips.length} starship(s) &bull; {vehicless.length} vehicle
                            </Box>
                        </Box>
                        <Text>gender:  {gender}</Text>
                        <Text>birth: {birth_year}</Text>
                        <Text>hair : {hair_color}</Text>
                        <Text>eye : {eye_color}</Text>
                        <Text>skin : {skin_color}</Text>
                        <Text>Movies : {movies}</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>

    )
}
