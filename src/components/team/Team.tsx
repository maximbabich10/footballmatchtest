import styles from "./team.module.css";

type TeamProps = {
  name: string;
  logoUrl: string;
  isAway?: boolean;
};

const Team: React.FC<TeamProps> = ({ name, logoUrl, isAway = false }) => (
  <div className={`${styles.team} ${isAway && styles.away}`}>
    <img src={logoUrl} alt={name} className={styles.teamLogo} />
    <span>{name}</span>
  </div>
);

export default Team;
