import type { ConstructorStanding, DriverStanding, Race, RecentRace } from "@/lib/types";

const API_URL = process.env.API_URL ?? "http://localhost:8000";

async function apiFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error(`API error ${res.status} for ${path}`);
  }
  return res.json() as Promise<T>;
}

export const api = {
  getDriverStandings: (season = 2026) =>
    apiFetch<DriverStanding[]>(`/standings/drivers?season=${season}`),

  getConstructorStandings: (season = 2026) =>
    apiFetch<ConstructorStanding[]>(`/standings/constructors?season=${season}`),

  getRaces: (season = 2026) =>
    apiFetch<Race[]>(`/races?season=${season}`),

  getRecentRaces: (season = 2026, limit = 3) =>
    apiFetch<RecentRace[]>(`/races/recent?season=${season}&limit=${limit}`),

  getRaceResults: (raceId: number) =>
    apiFetch<RecentRace["results"]>(`/races/${raceId}/results`),
};
