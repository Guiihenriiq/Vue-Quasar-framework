import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hcajojpyhtvbzgbhoooi.supabase.co";
const supabasekey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjYWpvanB5aHR2YnpnYmhvb29pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgzNjcyNTEsImV4cCI6MjA1Mzk0MzI1MX0.Qep7iOBrwweikS3TSUrDPZtkGm_MCZUhkFQ2iwluBG8";
const supabase = createClient(supabaseUrl, supabasekey);

console.log("init supabase:", supabase);

export default function useSupabase() {
  return { supabase };
}
