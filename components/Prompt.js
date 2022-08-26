import styles from "../styles/Prompt.module.css";

export default function Prompt({ prompt }) {
  return (
    <div className={styles.promptContainer}>
      <div>
        <p>{prompt}</p>
      </div>
    </div>
  );
}
