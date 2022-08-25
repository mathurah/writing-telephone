import Head from "next/head";
import Image from "next/image";
import styles from "../styles/writeStory.module.css";
import { Button, Form, Input, Radio } from "antd";
import Prompt from "../components/Prompt";

export default function writeStory() {
  return (
    <div className={styles.container}>
      <Head>
        <title>story-telephone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainContainer}>
        <h1 className="title">you brave solidier... you started the story.</h1>
        <h4>story id: #0d9cdefeifdsif</h4>

        <h3>prompt</h3>
      </main>
      {/* TODO: Make a way to access a list of generated prompts */}
      <Prompt></Prompt>

      {/* TODO: Loop through map of submitted stories */}
      {/* TODO: Add a way to submit a story */}
      <h3>now it's your turn</h3>
    </div>
  );
}
