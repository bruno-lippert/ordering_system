import { createClient } from "@supabase/supabase-js";

const supabaseUrl: string = 'https://dnqjymzrzrggovatqktn.supabase.co';
const supabaseKey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRucWp5bXpyenJnZ292YXRxa3RuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY1MTIxNTksImV4cCI6MjAxMjA4ODE1OX0.C8ijPFgED0m5cvEaW10i2nhsPmqZUnLkBMNEaRobqUo';

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;