import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import { useRouter } from "next/router";
import WriteStory from "../components/WriteStory";

export default function Home() {
  const router = useRouter();
  const { storyId, id } = router.query;
  return (
    <div className="container">
      {storyId ? <WriteStory story_id={storyId} /> : <p></p>}
    </div>
  );
}
