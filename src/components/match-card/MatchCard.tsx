import { useState } from "react";
import { Match } from "../../types/match";
import styles from "./match-card.module.css";
import MatchHeader from "../match-header/MatchHeader";
import PlayerCard from "../player-card/PlayerCard";
import TeamInfo from "../team-info/TeamInfo";

type MatchCardProps = {
  match: Match;
};

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  const [isOpen, setIsOpen] = useState(false);

  const calculateTotalKills = (team: { players: { kills: number }[] }) => {
    return team.players.reduce((total, player) => total + player.kills, 0);
  };

  const homeTeamTotalKills = calculateTotalKills(match.homeTeam);
  const awayTeamTotalKills = calculateTotalKills(match.awayTeam);

  return (
    <div className={styles.card}>
      <MatchHeader
        isOpen={isOpen}
        homeTeam={match.homeTeam}
        awayTeam={match.awayTeam}
        homeScore={match.homeScore}
        awayScore={match.awayScore}
        status={match.status}
        toggleDetails={() => setIsOpen(!isOpen)}
      />

      {isOpen && (
        <div className={styles.details}>
          <div className={styles.teamSection}>
            <div className={styles.playerInformation}>
              {match.homeTeam.players.map((player, index) => (
                <PlayerCard key={index} player={player} />
              ))}
            </div>
            <div className={styles.infoTeam}>
              <TeamInfo
                points={match.homeTeam.points}
                place={match.homeTeam.place}
                totalKills={homeTeamTotalKills}
              />
            </div>
          </div>

          <div className={styles.teamSection}>
            <div className={styles.playerInformation}>
              {match.awayTeam.players.map((player, index) => (
                <PlayerCard key={index} player={player} />
              ))}
            </div>
            <div className={styles.infoTeam}>
              <TeamInfo
                points={match.awayTeam.points}
                place={match.awayTeam.place}
                totalKills={awayTeamTotalKills}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchCard;
