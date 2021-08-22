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
