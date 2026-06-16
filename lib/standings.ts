// Mock 2026 standings — will be replaced by FastAPI + PostgreSQL in Phase 4

export interface Driver {
  position: number;
  name: string;
  shortName: string;   // 3-letter code e.g. "NOR"
  team: string;
  points: number;
  wins: number;
  podiums: number;
  trend: "up" | "down" | "same";
}

export interface Constructor {
  position: number;
  name: string;
  drivers: [string, string];
  points: number;
  wins: number;
  color: string;
}

export interface RaceResult {
  position: number;
  driver: string;
  shortName: string;
  team: string;
  time: string;
  points: number;
  fastestLap?: boolean;
}

export interface RaceResultSet {
  round: number;
  raceName: string;
  circuit: string;
  date: string;
  winner: string;
  results: RaceResult[];
}

// Team hex colors (canonical, reused across components)
export const TEAM_COLORS: Record<string, string> = {
  McLaren: "#FF8000",
  "Red Bull": "#3671C6",
  Ferrari: "#E8002D",
  Mercedes: "#27F4D2",
  Williams: "#64C4FF",
  "Aston Martin": "#229971",
  Haas: "#B6BABD",
  Alpine: "#0090FF",
  "Kick Sauber": "#00E701",
  RB: "#6692FF",
};

export const driverStandings: Driver[] = [
  { position: 1, name: "Lando Norris",       shortName: "NOR", team: "McLaren",      points: 156, wins: 3, podiums: 6, trend: "up"   },
  { position: 2, name: "Max Verstappen",     shortName: "VER", team: "Red Bull",     points: 138, wins: 2, podiums: 5, trend: "same" },
  { position: 3, name: "Charles Leclerc",    shortName: "LEC", team: "Ferrari",      points: 121, wins: 2, podiums: 5, trend: "down" },
  { position: 4, name: "Lewis Hamilton",     shortName: "HAM", team: "Ferrari",      points: 98,  wins: 0, podiums: 3, trend: "up"   },
  { position: 5, name: "Oscar Piastri",      shortName: "PIA", team: "McLaren",      points: 87,  wins: 0, podiums: 2, trend: "same" },
  { position: 6, name: "George Russell",     shortName: "RUS", team: "Mercedes",     points: 72,  wins: 0, podiums: 1, trend: "up"   },
  { position: 7, name: "Carlos Sainz",       shortName: "SAI", team: "Williams",     points: 48,  wins: 0, podiums: 0, trend: "down" },
  { position: 8, name: "Fernando Alonso",    shortName: "ALO", team: "Aston Martin", points: 31,  wins: 0, podiums: 0, trend: "same" },
  { position: 9, name: "Nico Hülkenberg",   shortName: "HUL", team: "Haas",         points: 24,  wins: 0, podiums: 0, trend: "up"   },
  { position: 10, name: "Lance Stroll",      shortName: "STR", team: "Aston Martin", points: 18,  wins: 0, podiums: 0, trend: "down" },
];

export const constructorStandings: Constructor[] = [
  { position: 1, name: "McLaren",      drivers: ["Norris",     "Piastri"],  points: 243, wins: 3, color: "#FF8000" },
  { position: 2, name: "Ferrari",      drivers: ["Leclerc",    "Hamilton"], points: 219, wins: 2, color: "#E8002D" },
  { position: 3, name: "Red Bull",     drivers: ["Verstappen", "Lawson"],   points: 162, wins: 2, color: "#3671C6" },
  { position: 4, name: "Mercedes",     drivers: ["Russell",    "Antonelli"],points: 95,  wins: 0, color: "#27F4D2" },
  { position: 5, name: "Williams",     drivers: ["Sainz",      "Albon"],    points: 65,  wins: 0, color: "#64C4FF" },
  { position: 6, name: "Aston Martin", drivers: ["Alonso",     "Stroll"],   points: 49,  wins: 0, color: "#229971" },
  { position: 7, name: "Haas",         drivers: ["Hülkenberg", "Ocon"],     points: 35,  wins: 0, color: "#B6BABD" },
  { position: 8, name: "Alpine",       drivers: ["Doohan",     "Gasly"],    points: 22,  wins: 0, color: "#0090FF" },
  { position: 9, name: "Kick Sauber", drivers: ["Bottas",     "Zhou"],     points: 14,  wins: 0, color: "#00E701" },
  { position: 10, name: "RB",          drivers: ["Tsunoda",    "Hadjar"],   points: 11,  wins: 0, color: "#6692FF" },
];

export const recentRaces: RaceResultSet[] = [
  {
    round: 7,
    raceName: "Barcelona-Catalunya GP",
    circuit: "Circuit de Barcelona-Catalunya",
    date: "Jun 14, 2026",
    winner: "Max Verstappen",
    results: [
      { position: 1, driver: "Max Verstappen",  shortName: "VER", team: "Red Bull",  time: "1:32:14.402", points: 26, fastestLap: true },
      { position: 2, driver: "Lando Norris",    shortName: "NOR", team: "McLaren",   time: "+6.841s",      points: 18 },
      { position: 3, driver: "Lewis Hamilton",  shortName: "HAM", team: "Ferrari",   time: "+12.553s",     points: 15 },
      { position: 4, driver: "Oscar Piastri",   shortName: "PIA", team: "McLaren",   time: "+21.107s",     points: 12 },
      { position: 5, driver: "Carlos Sainz",    shortName: "SAI", team: "Williams",  time: "+34.668s",     points: 10 },
    ],
  },
  {
    round: 6,
    raceName: "Monaco GP",
    circuit: "Circuit de Monaco",
    date: "Jun 7, 2026",
    winner: "Charles Leclerc",
    results: [
      { position: 1, driver: "Charles Leclerc", shortName: "LEC", team: "Ferrari",      time: "1:45:08.122", points: 25 },
      { position: 2, driver: "Lewis Hamilton",  shortName: "HAM", team: "Ferrari",      time: "+1.842s",      points: 18, fastestLap: true },
      { position: 3, driver: "Max Verstappen",  shortName: "VER", team: "Red Bull",     time: "+7.214s",      points: 15 },
      { position: 4, driver: "Carlos Sainz",    shortName: "SAI", team: "Williams",     time: "+12.903s",     points: 12 },
      { position: 5, driver: "Fernando Alonso", shortName: "ALO", team: "Aston Martin", time: "+21.441s",     points: 10 },
    ],
  },
  {
    round: 5,
    raceName: "Canadian GP",
    circuit: "Circuit Gilles Villeneuve",
    date: "May 24, 2026",
    winner: "Lando Norris",
    results: [
      { position: 1, driver: "Lando Norris",    shortName: "NOR", team: "McLaren",  time: "1:33:22.774", points: 26, fastestLap: true },
      { position: 2, driver: "Max Verstappen",  shortName: "VER", team: "Red Bull", time: "+4.112s",      points: 18 },
      { position: 3, driver: "Charles Leclerc", shortName: "LEC", team: "Ferrari",  time: "+9.883s",      points: 15 },
      { position: 4, driver: "Oscar Piastri",   shortName: "PIA", team: "McLaren",  time: "+18.007s",     points: 12 },
      { position: 5, driver: "George Russell",  shortName: "RUS", team: "Mercedes", time: "+28.441s",     points: 10 },
    ],
  },
];

// Points progression per round (R1–R7) for top 5 drivers — used in PerformanceChart
export const pointsProgression = [
  { round: "R1", NOR: 25,  VER: 18,  LEC: 15,  HAM: 12,  PIA: 10  },
  { round: "R2", NOR: 50,  VER: 52,  LEC: 36,  HAM: 27,  PIA: 26  },
  { round: "R3", NOR: 65,  VER: 70,  LEC: 63,  HAM: 37,  PIA: 38  },
  { round: "R4", NOR: 96,  VER: 80,  LEC: 73,  HAM: 47,  PIA: 50  },
  { round: "R5", NOR: 122, VER: 90,  LEC: 88,  HAM: 60,  PIA: 60  },
  { round: "R6", NOR: 132, VER: 105, LEC: 116, HAM: 78,  PIA: 70  },
  { round: "R7", NOR: 156, VER: 138, LEC: 121, HAM: 98,  PIA: 87  },
];
