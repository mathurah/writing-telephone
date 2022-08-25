import styles from "../styles/SubmitWriting.module.css";

export default function SubmitWriting() {
  return (
    <div className={styles.mainContainer}>
      <form>
        <div className={styles.authorContainer}>
          <label>By:</label>
          <input className={styles.authorInput}></input>
        </div>
        <div>
          <textarea className={styles.writingContainer}></textarea>

          <div className={styles.buttonContainer}>
            <button className={styles.saveButton}>save</button>
            <button className={styles.submitButton}>submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
