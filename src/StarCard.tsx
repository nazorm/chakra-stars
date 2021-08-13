import React from 'react';
import { IStarCardProps } from './types';



export const StarCard=({name, created, image,birth_year, hair_color,eye_color, gender, skin_color, films}: IStarCardProps)=>{
    const movies = films.map((movie)=>{
        return movie
    })
    
    return(
        <div className='starCard'>
            <h1>{name}</h1>
            <p>gender:  {gender}</p>
            <h3>Movies : {movies}</h3>
            <p>birth: {birth_year}</p>
            <p>eye color:  {eye_color}</p>
            <p>hair color:  {hair_color}</p>
            <p>skin color:  {skin_color}</p>
        </div>
    )
}