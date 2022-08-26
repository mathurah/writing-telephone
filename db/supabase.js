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

export const insertPost = async (post) => {
  console.log("this post is being submitted", post);
  const { data, error } = await supabase
    .from("post")
    .insert([
      {
        content: post.content,
        author: post.author,
        story_id: post.story_id.story_id,
      },
    ])
    .select();
  console.log("this data was submitted", data);
  return data[0];
};

// Generate prompt

//generate prompt & story_id, add these to the database
export const createStory = async (prompt) => {
  console.log(prompt);
  const { data, error } = await supabase
    .from("story")
    .insert([{ prompt: prompt }])
    .select();
  return data[0];
};
//need to be able to post id to see the story

//story is active/completed?

//Submit final story to database
