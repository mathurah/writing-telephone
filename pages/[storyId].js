import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import { useRouter } from "next/router";
import WriteStory from "../components/WriteStory";

export default function Home() {
  const router = useRouter();
  const { story_id, id } = router.query;
  console.log("PID PAGE", story_id);
  return (
    <div className="container">
      {story_id === story_id ? <WriteStory story_id={story_id} /> : <p></p>}
      <div>hi</div>
    </div>
  );
}
