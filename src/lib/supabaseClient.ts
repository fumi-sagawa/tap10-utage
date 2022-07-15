import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
// const supabaseUrl = 'https://pyfrrtjaxgjqccnxaapa.supabase.co'
// const supabaseAnonKey =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5ZnJydGpheGdqcWNjbnhhYXBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTc3OTQzMzgsImV4cCI6MTk3MzM3MDMzOH0.dMpAGEfIy0CDPcj5Z6qY9iRvVKD5xViOfrGosOIoZFQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
