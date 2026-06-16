export type RaceStatus = "completed" | "next" | "upcoming";

export interface Race {
  round: number;
  name: string;
  shortName: string;
  circuit: string;
  city: string;
  country: string;
  flag: string;
  dateStart: string; // YYYY-MM-DD
  dateEnd: string;   // YYYY-MM-DD
  isSprint: boolean;
  winner?: string;
}

export const races2026: Race[] = [
  {
    round: 1,
    name: "Australian Grand Prix",
    shortName: "Australian GP",
    circuit: "Albert Park Circuit",
    city: "Melbourne",
    country: "Australia",
    flag: "🇦🇺",
    dateStart: "2026-03-06",
    dateEnd: "2026-03-08",
    isSprint: false,
    winner: "L. Norris",
  },
  {
    round: 2,
    name: "Chinese Grand Prix",
    shortName: "Chinese GP",
    circuit: "Shanghai International Circuit",
    city: "Shanghai",
    country: "China",
    flag: "🇨🇳",
    dateStart: "2026-03-13",
    dateEnd: "2026-03-15",
    isSprint: true,
    winner: "M. Verstappen",
  },
  {
    round: 3,
    name: "Japanese Grand Prix",
    shortName: "Japanese GP",
    circuit: "Suzuka International Racing Course",
    city: "Suzuka",
    country: "Japan",
    flag: "🇯🇵",
    dateStart: "2026-03-27",
    dateEnd: "2026-03-29",
    isSprint: false,
    winner: "C. Leclerc",
  },
  {
    round: 4,
    name: "Miami Grand Prix",
    shortName: "Miami GP",
    circuit: "Miami International Autodrome",
    city: "Miami",
    country: "United States",
    flag: "🇺🇸",
    dateStart: "2026-05-01",
    dateEnd: "2026-05-03",
    isSprint: true,
    winner: "L. Norris",
  },
  {
    round: 5,
    name: "Canadian Grand Prix",
    shortName: "Canadian GP",
    circuit: "Circuit Gilles Villeneuve",
    city: "Montreal",
    country: "Canada",
    flag: "🇨🇦",
    dateStart: "2026-05-22",
    dateEnd: "2026-05-24",
    isSprint: true,
    winner: "L. Norris",
  },
  {
    round: 6,
    name: "Monaco Grand Prix",
    shortName: "Monaco GP",
    circuit: "Circuit de Monaco",
    city: "Monaco",
    country: "Monaco",
    flag: "🇲🇨",
    dateStart: "2026-06-05",
    dateEnd: "2026-06-07",
    isSprint: false,
    winner: "C. Leclerc",
  },
  {
    round: 7,
    name: "Barcelona-Catalunya Grand Prix",
    shortName: "Barcelona GP",
    circuit: "Circuit de Barcelona-Catalunya",
    city: "Barcelona",
    country: "Spain",
    flag: "🇪🇸",
    dateStart: "2026-06-12",
    dateEnd: "2026-06-14",
    isSprint: false,
    winner: "M. Verstappen",
  },
  {
    round: 8,
    name: "Austrian Grand Prix",
    shortName: "Austrian GP",
    circuit: "Red Bull Ring",
    city: "Spielberg",
    country: "Austria",
    flag: "🇦🇹",
    dateStart: "2026-06-26",
    dateEnd: "2026-06-28",
    isSprint: false,
  },
  {
    round: 9,
    name: "British Grand Prix",
    shortName: "British GP",
    circuit: "Silverstone Circuit",
    city: "Silverstone",
    country: "Great Britain",
    flag: "🇬🇧",
    dateStart: "2026-07-03",
    dateEnd: "2026-07-05",
    isSprint: true,
  },
  {
    round: 10,
    name: "Belgian Grand Prix",
    shortName: "Belgian GP",
    circuit: "Circuit de Spa-Francorchamps",
    city: "Spa",
    country: "Belgium",
    flag: "🇧🇪",
    dateStart: "2026-07-17",
    dateEnd: "2026-07-19",
    isSprint: false,
  },
  {
    round: 11,
    name: "Hungarian Grand Prix",
    shortName: "Hungarian GP",
    circuit: "Hungaroring",
    city: "Budapest",
    country: "Hungary",
    flag: "🇭🇺",
    dateStart: "2026-07-24",
    dateEnd: "2026-07-26",
    isSprint: false,
  },
  {
    round: 12,
    name: "Dutch Grand Prix",
    shortName: "Dutch GP",
    circuit: "Circuit Zandvoort",
    city: "Zandvoort",
    country: "Netherlands",
    flag: "🇳🇱",
    dateStart: "2026-08-21",
    dateEnd: "2026-08-23",
    isSprint: true,
  },
  {
    round: 13,
    name: "Italian Grand Prix",
    shortName: "Italian GP",
    circuit: "Autodromo Nazionale Monza",
    city: "Monza",
    country: "Italy",
    flag: "🇮🇹",
    dateStart: "2026-09-04",
    dateEnd: "2026-09-06",
    isSprint: false,
  },
  {
    round: 14,
    name: "Spanish Grand Prix",
    shortName: "Spanish GP",
    circuit: "IFEMA Madrid Circuit",
    city: "Madrid",
    country: "Spain",
    flag: "🇪🇸",
    dateStart: "2026-09-11",
    dateEnd: "2026-09-13",
    isSprint: false,
  },
  {
    round: 15,
    name: "Azerbaijan Grand Prix",
    shortName: "Azerbaijan GP",
    circuit: "Baku City Circuit",
    city: "Baku",
    country: "Azerbaijan",
    flag: "🇦🇿",
    dateStart: "2026-09-24",
    dateEnd: "2026-09-26",
    isSprint: false,
  },
  {
    round: 16,
    name: "Singapore Grand Prix",
    shortName: "Singapore GP",
    circuit: "Marina Bay Street Circuit",
    city: "Singapore",
    country: "Singapore",
    flag: "🇸🇬",
    dateStart: "2026-10-09",
    dateEnd: "2026-10-11",
    isSprint: true,
  },
  {
    round: 17,
    name: "United States Grand Prix",
    shortName: "US GP",
    circuit: "Circuit of the Americas",
    city: "Austin",
    country: "United States",
    flag: "🇺🇸",
    dateStart: "2026-10-23",
    dateEnd: "2026-10-25",
    isSprint: false,
  },
  {
    round: 18,
    name: "Mexican Grand Prix",
    shortName: "Mexican GP",
    circuit: "Autodromo Hermanos Rodriguez",
    city: "Mexico City",
    country: "Mexico",
    flag: "🇲🇽",
    dateStart: "2026-10-30",
    dateEnd: "2026-11-01",
    isSprint: false,
  },
  {
    round: 19,
    name: "Brazilian Grand Prix",
    shortName: "Brazilian GP",
    circuit: "Autodromo Jose Carlos Pace",
    city: "São Paulo",
    country: "Brazil",
    flag: "🇧🇷",
    dateStart: "2026-11-06",
    dateEnd: "2026-11-08",
    isSprint: false,
  },
  {
    round: 20,
    name: "Las Vegas Grand Prix",
    shortName: "Las Vegas GP",
    circuit: "Las Vegas Strip Circuit",
    city: "Las Vegas",
    country: "United States",
    flag: "🇺🇸",
    dateStart: "2026-11-19",
    dateEnd: "2026-11-21",
    isSprint: false,
  },
  {
    round: 21,
    name: "Qatar Grand Prix",
    shortName: "Qatar GP",
    circuit: "Losail International Circuit",
    city: "Lusail",
    country: "Qatar",
    flag: "🇶🇦",
    dateStart: "2026-11-27",
    dateEnd: "2026-11-29",
    isSprint: false,
  },
  {
    round: 22,
    name: "Abu Dhabi Grand Prix",
    shortName: "Abu Dhabi GP",
    circuit: "Yas Marina Circuit",
    city: "Abu Dhabi",
    country: "UAE",
    flag: "🇦🇪",
    dateStart: "2026-12-04",
    dateEnd: "2026-12-06",
    isSprint: false,
  },
];

export function getRaceStatus(race: Race, today = new Date()): RaceStatus {
  const end = new Date(race.dateEnd + "T23:59:59");
  const start = new Date(race.dateStart + "T00:00:00");
  if (end < today) return "completed";
  if (start <= today) return "next"; // race weekend in progress
  return "upcoming";
}

export function getNextRace(today = new Date()): Race | undefined {
  return races2026.find((r) => {
    const end = new Date(r.dateEnd + "T23:59:59");
    return end >= today;
  });
}

export function getSeasonProgress(today = new Date()) {
  const completed = races2026.filter((r) => getRaceStatus(r, today) === "completed").length;
  return { completed, total: races2026.length };
}

export function formatRaceDate(dateStart: string, dateEnd: string): string {
  const start = new Date(dateStart);
  const end = new Date(dateEnd);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  if (start.getMonth() === end.getMonth()) {
    return `${months[start.getMonth()]} ${start.getDate()}–${end.getDate()}`;
  }
  return `${months[start.getMonth()]} ${start.getDate()} – ${months[end.getMonth()]} ${end.getDate()}`;
}
