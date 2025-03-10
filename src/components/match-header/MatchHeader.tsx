import StatusMatch from "../status-match/StatusMatch";
import styles from "./match-header.module.css";
import avatarLogo from "../../assets/icon.png";
import arrowIcon from "../../assets/Vector.png";
import { StatusType } from "../../constants/statusTypes";
import Team from "../team/Team";

type MatchHeaderProps = {
  homeTeam: { name: string };
  awayTeam: { name: string };
  homeScore: number;
  awayScore: number;
  status: string;
  toggleDetails: () => void;
  isOpen: boolean;
};

const MatchHeader: React.FC<MatchHeaderProps> = ({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  status,
  toggleDetails,
  isOpen,
}) => {
  const validStatus: StatusType = status as StatusType;

  return (
    <div className={styles.headerWrap} onClick={toggleDetails}>
      <Team name={homeTeam.name} logoUrl={avatarLogo} />
      <div className={styles.wrapScoreInfo}>
        <div className={styles.score}>
          {homeScore} : {awayScore}
        </div>
        <StatusMatch status={validStatus} />
      </div>
      <div className={styles.wrappArrow}>
        <Team name={awayTeam.name} logoUrl={avatarLogo} isAway />
        <img
          className={`${styles.arrow} ${
            isOpen ? styles.arrowUp : styles.arrowDown
          }`}
          src={arrowIcon}
          alt="arrow"
        />
      </div>
    </div>
  );
};

export default MatchHeader;
