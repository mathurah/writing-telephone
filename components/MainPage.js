import styles from "../styles/Home.module.css";

export default function MainPage({ generatePrompt2 }) {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>write a story with frens</h1>

        <button onClick={generatePrompt2} className={styles.bigButton}>
          start a story
        </button>

        <p className={styles.description}>
          or... if you have a game code, enter it here
        </p>

        <div className={styles.submitStoryCode}>
          <form>
            <input className={styles.storyCodeInput}></input>
          </form>

          <button>submit code</button>
        </div>
      </main>
    </>
  );
}
