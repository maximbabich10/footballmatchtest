import styles from "./Button.module.css";

type ButtonProps = {
  text: string;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void
};

const Button: React.FC<ButtonProps> = ({ text, disabled = false, loading = false, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button} disabled={disabled || loading}>
      {text} {loading && <span className={styles.spinner}></span>}
    </button>
  );
};

export default Button;
