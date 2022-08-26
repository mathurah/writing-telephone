import Head from "next/head";
import Image from "next/image";
import styles from "../styles/writeStory.module.css";
import { Button, Form, Input, Radio } from "antd";
import Prompt from "./Prompt";
import SubmitWriting from "./submitWriting";
import Writing from "./Writing";
import { getPosts } from "../db/supabase";
import { useState, useEffect } from "react";
export default function WriteStory({ loading, prompt, story_id }) {
  const [posts, setPosts] = useState(undefined);
  console.log("STORYIDWRITESTOYR", story_id);

  const getPostsByID = async (storyID) => {
    console.log("STORY", storyID);
    setPosts(await getPosts(storyID));
    console.log("POSTSS", posts);
  };

  useEffect(() => {
    if (story_id != "") {
      getPostsByID({ story_id });
    }
  }, [story_id, posts]);

  return (
    <div className={styles.container}>
      <Head>
        <title>story-telephone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.mainContainer}>
        <h1 className="title">you brave soldier... you started the story.</h1>
        <p className={styles.storyID}>story id: {story_id}</p>

        <p className={styles.instructionText}>Prompt: </p>
      </main>
      {/* TODO: Make a way to access a list of generated prompts */}
      <Prompt prompt={prompt}></Prompt>
      {/* TODO: Loop through map of submitted stories */}
      {/* TODO: can put a cool loading animation here */}
      {posts === undefined ? (
        <p>loading...</p>
      ) : (
        posts.map((post) => (
          <Writing
            {...post}
            key={post.id}
            id={post.id}
            story_id={story_id}
            content={post.content}
            author={post.author}
          />
        ))
      )}

      {/* TODO: Add a way to submit a story */}
      <p className={styles.instructionText}>now it's your turn:</p>
      {/* <button onClick={generateOpen}>HII</button> */}
      <SubmitWriting story_id={story_id} />
    </div>
  );
}
