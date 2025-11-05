export interface TeamData {
  id: string;
  name: string;
  leaderName: string;
}

export const teams: TeamData[] = [
  { id: "team1", name: "test", leaderName: "admin" },
  { id: "team2", name: "test1", leaderName: "ark" },
  { id: "team3", name: "test2", leaderName: "vedant" },
  { id: "team4", name: "test3", leaderName: "suyash" },
];

export const validateTeam = (teamName: string, leaderName: string): TeamData | null => {
  return teams.find(
    (t) => t.name.toLowerCase() === teamName.toLowerCase() &&
           t.leaderName.toLowerCase() === leaderName.toLowerCase()
  ) || null;
};
