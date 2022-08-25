import { supabase } from "../utils/supabaseClient";

//Get the posts based on the ID
export const getPosts = async () => {
  const { data, error } = await supabase
    .from("post")
    .select()
    .eq("story_id", "2");
  console.log(data);
};

//Submit the post based on the id

// Generate prompt

//generate prompt & story_id, add these to the database

export const generatePrompt = () => {};
//need to be able to post id to see the story

//story is active/completed?

//Submit final story to database
