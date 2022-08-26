import styles from "../styles/SubmitWriting.module.css";
import React, { useState, useContext } from "react";
import { getPosts, insertPost } from "../db/supabase";

export default function SubmitWriting(story_id) {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async ({ e, author, content }) => {
    e.preventDefault(); //prevents page from being refreshed
    let post = new Object();
    post.content = content;
    post.author = author;
    post.story_id = story_id;
    console.log("this is the post", post);
    const response = await insertPost(post);
    console.log("this is the response", response);
    getPosts(story_id);

    return response;

    // console.log(author, content);
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
            minLength="252"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className={styles.writingContainer}
          ></textarea>

          <div className={styles.buttonContainer}>
            <button className={styles.saveButton}>save</button>
            <button
              type="submit"
              className={styles.submitButton}
              onClick={(e) => handleSubmit({ e, author, content, story_id })}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
