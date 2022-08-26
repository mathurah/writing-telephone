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
  // export const getAllPosts = async () => {
  //   const { data: posts, error } = await supabase
  //     .from("post")
  //     .select()
  //     .order("created_at", { ascending: false });
  //   if (error) {
  //     handleError(error);
  //   }
  //   console.log("this is the error", error);
  //   console.log("THESE ARE THE POSTS", posts);
  //   return posts.map((post) => ({
  //     ...post,
  //   }));
  // };

  // const getPostsByID = async ({story_id}) => {
  //   setPosts(await getPosts(story_id));
  // };

  useEffect(() => {
    getPosts(story_id);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>story-telephone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainContainer}>
        <h1 className="title">you brave solidier... you started the story.</h1>
        <p className={styles.storyID}>story id: {story_id}</p>

        <p className={styles.instructionText}>Prompt: </p>
      </main>
      {/* TODO: Make a way to access a list of generated prompts */}
      <Prompt prompt={prompt}></Prompt>

      {/* TODO: Loop through map of submitted stories */}
      <Writing />
      {/* TODO: Add a way to submit a story */}
      <p className={styles.instructionText}>now it's your turn:</p>
      {/* <button onClick={generateOpen}>HII</button> */}
      <SubmitWriting story_id={story_id} />
    </div>
  );
}
