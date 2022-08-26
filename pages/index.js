import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button, Form, Input, Radio } from "antd";
import Prompt from "../components/Prompt";
import WritingForm from "../components/WritingForm";
import { useState } from "react";
import WriteStory from "../components/WriteStory";
import { createStory } from "../db/supabase";
import { useRouter } from "next/router";
import { withRouter } from "next/router";
import MainPage from "../components/MainPage";

export default function Home() {
  const [promptGenerated, setPromptGenerated] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [story, setStory] = useState("");
  const [story_id, setStory_id] = useState("");
  const router = useRouter();

  const generatePrompt2 = async () => {
    const chosenPrompt =
      promptIdeas[Math.floor(Math.random() * promptIdeas.length)];
    setPrompt(chosenPrompt);
    setLoading(true);
    story = await createStory(chosenPrompt);
    setStory_id(story.id);

    // console.log(prompt);
  };

  const generatePrompt = async () => {
    const apiKey = process.env.OPENAI_API_KEY;
    setLoading(true);
    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
      apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    });

    // console.log(apiKey);
    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: "Give me a fiction prompt",
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const generatedPrompt = response.data.choices[0].text;
    setPrompt(generatedPrompt);
    setLoading(true);
    setPromptGenerated(true);
    story = await createStory(generatedPrompt);
    setStory_id(story.id);
    router.push("/" + story.id);
    // console.log("prompt", generatedPrompt);
    // console.log(generatedPrompt);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>story-telephone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!loading && <MainPage generatePrompt={generatePrompt} />}
      {story_id && (
        <WriteStory story_id={story_id} loading={loading} prompt={prompt} />
      )}
    </div>
  );
}
