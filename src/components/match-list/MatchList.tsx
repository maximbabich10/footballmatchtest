import MatchCard from "../match-card/MatchCard";
import Loader from "../../ui/loader/Loader";
import Button from "../../ui/button/Button";
import styles from "./match-list.module.css";
import useGetMatch from "../../hooks/useGetMatch";
import iconError from "../../assets/alert-triangle.png";

function MatchList() {
  const { error, loading, matches, resetHandler } = useGetMatch();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Match Tracker</h1>
        <div className={styles.headerLeft}>
          {error && (
            <div className={styles.errorWrapper}>
              <img
                src={iconError}
                alt="Error icon"
                className={styles.errorIcon}
              />
              <span className={styles.error}>{error}</span>
            </div>
          )}

          <Button onClick={resetHandler} text="Обновить" loading={loading} />
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.list}>
          {matches.map((match, index) => (
            <MatchCard key={index} match={match} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MatchList;
