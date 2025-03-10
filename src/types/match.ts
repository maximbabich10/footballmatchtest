import { StatusType } from "../constants/statusTypes";

export type Player = {
  username: string;
  kills: number;
};

export type Team = {
  name: string;
  place: number;
  points: number;
  total_kills: number;
  players: Player[];
};

export type Match = {
  title: string;
  status: StatusType;
  time: string;
  homeScore: number;
  awayScore: number;
  homeTeam: Team;
  awayTeam: Team;
};
