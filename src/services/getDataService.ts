import axios from "axios";
import { Match } from "../types/match";

const baseUrl = "https://app.ftoyd.com/fronttemp-service";

export const fetchMatches = async (): Promise<Match> => {
  try {
    const response = await axios.get(`${baseUrl}/fronttemp`);
    return (await response.data.data.matches) as Match;
  } catch {
    throw new Error("Ошибка: не удалось загрузить информацию");
  }
};
