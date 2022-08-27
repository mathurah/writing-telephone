import styles from "../styles/Home.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function MainPage({ generatePrompt }) {
  const [story_id, setStory_id] = useState("");
  const router = useRouter();

  const submitCode = (story_id) => {
    router.push("/" + story_id);
  };

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>write a story with frens</h1>

        <button onClick={generatePrompt} className={styles.bigButton}>
          start a story
        </button>

        <div className={styles.imagePadding}>
          <Image
            src="/../public/magic-library.png"
            width={500}
            height={500}
          ></Image>
        </div>

        <p className={styles.description}>
          or... if you have a game code, enter it here
        </p>

        <div className={styles.submitStoryCode}>
          <form>
            <input
              onChange={(e) => setStory_id(e.target.value)}
              className={styles.storyCodeInput}
            ></input>
          </form>

          <button onClick={() => submitCode(story_id)}>submit code</button>
        </div>
      </main>
    </>
  );
}
