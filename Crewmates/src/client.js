import {createClient} from '@supabase/supabase-js'

const URL = 'https://ceemxstlghesacwyazza.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlZW14c3RsZ2hlc2Fjd3lhenphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAyNTA3MjUsImV4cCI6MjA0NTgyNjcyNX0.dOrm6eddQ4jxhRkSeSKIDGt7-yeMEnvz47Spex8PKFg'
export const supabase = createClient(URL, API_KEY);