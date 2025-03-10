import React from "react";
import styles from "./TeamInfo.module.css";

type TeamInfoProps = {
  points: number;
  place: number;
  totalKills: number;
};

const TeamInfo: React.FC<TeamInfoProps> = ({ points, place, totalKills }) => {
  return (
    <>
      <div className={styles.infoLine}>
        <div>Points:</div>
        <span className={styles.value}>{`+${points}`}</span>
      </div>
      <div className={styles.infoLine}>
        <div>Место:</div>
        <span className={styles.value}>{place}</span>
      </div>
      <div className={styles.infoLine}>
        <div>Всего убийств:</div>
        <span className={styles.value}>{totalKills}</span>
      </div>
    </>
  );
};

export default TeamInfo;
