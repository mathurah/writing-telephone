import styles from "../styles/SubmitWriting.module.css";
import React, { useState, useContext } from "react";

export default function SubmitWriting() {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //prevents page from being refreshed
    console.log(author, content);
  };

  const addStory = (author, content) => {
    console.log(author, content);
  };
  return (
    <div className={styles.mainContainer}>
      <form onSubmit={handleSubmit}>
        <div className={styles.authorContainer}>
          <label>By:</label>
          <input
            className={styles.authorInput}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
        </div>
        <div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className={styles.writingContainer}
          ></textarea>

          <div className={styles.buttonContainer}>
            <button className={styles.saveButton}>save</button>
            <button
              type="submit"
              className={styles.submitButton}
              onClick={handleSubmit}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
