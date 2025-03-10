import styles from "./player-card.module.css";
import avatar from "../../assets/avatar_global.png";

type PlayerProps = {
  player: { username: string; kills: number };
};

const PlayerCard: React.FC<PlayerProps> = ({ player }) => (
  <div className={styles.playerCard}>
    <img src={avatar} alt={player.username} />
    <div className={styles.playerInfo}>
      <p className={styles.username}>{player.username}</p>
      <div className={styles.infoKill}>
        <p className={styles.killsLabel}>Убийств:</p>
        <p>{player.kills}</p>
      </div>
    </div>
  </div>
);

export default PlayerCard;
