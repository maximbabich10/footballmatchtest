import { useState, useEffect } from "react";
import { Match } from "../types/match";
import { fetchMatches } from "../services/getDataService";

const useGetMatch = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const getMatch = async () => {
    setLoading(true);
    setError("");

    try {
      const data = await fetchMatches();
      if (Array.isArray(data)) {
        setMatches(data);
      } else {
        setError("Некорректный формат данных");
      }
    } catch {
      setError("Ошибка: не удалось загрузить информацию");
    } finally {
      setLoading(false);
    }
  };

  const resetHandler = () => {
    setMatches([]);
    getMatch();
  };

  useEffect(() => {
    getMatch();
  }, []);

  return { matches, loading, error, resetHandler };
};

export default useGetMatch;
