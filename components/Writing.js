import styles from "../styles/Writing.module.css";

export default function Writing({ key, id, content, author, story_id }) {
  return (
    <div className={styles.writingsContainer}>
      <div>
        <div>
          <p>By:{author} </p>
        </div>
        <div>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
