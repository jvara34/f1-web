// API response types — match FastAPI response shapes exactly

export interface DriverStanding {
  id: number;
  position: number;
  first_name: string;
  last_name: string;
  code: string;
  number: number;
  nationality: string;
  constructor_name: string;
  constructor_color: string;
  points: number;
  wins: number;
  podiums: number;
}

export interface ConstructorStanding {
  id: number;
  position: number;
  name: string;
  short_name: string;
  color: string;
  points: number;
  wins: number;
  podiums: number;
  drivers: string[];
}

export interface RaceResult {
  position: number | null;
  driver_name: string;
  driver_code: string;
  constructor_name: string;
  constructor_color: string;
  time: string | null;
  points: number;
  grid: number;
  fastest_lap: boolean;
}

export interface Race {
  id: number;
  season: number;
  round: number;
  name: string;
  circuit: string;
  country: string;
  date: string;
}

export interface RecentRace {
  id: number;
  round: number;
  name: string;
  circuit: string;
  date: string;
  results: RaceResult[];
}
