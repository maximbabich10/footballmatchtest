import { StatusType } from "../../constants/statusTypes";
import styles from "./status-match.module.css";

type StatusMatchProps = {
  status: StatusType
};

const StatusMatch: React.FC<StatusMatchProps> = ({ status }) => {
  return (
    <span
      className={`${styles.statusmatch} ${
        styles[status.replace(" ", "").toLowerCase()]
      }`}
    >
      {status}
    </span>
  );
};

export default StatusMatch;
