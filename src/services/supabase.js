import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://psdpnjgikdplwcqtyjff.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzZHBuamdpa2RwbHdjcXR5amZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5ODY3MDcsImV4cCI6MjAxNjU2MjcwN30.hXidR8NbHwZwQEw6hF9o-s041KvtEKBGknveHb1Zm4w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
