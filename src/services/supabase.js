
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://urecptucmkmqvvnpimmq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyZWNwdHVjbWttcXZ2bnBpbW1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3OTg2MDcsImV4cCI6MjAxMzM3NDYwN30.LhBt0niRcfVCvlR9VTdoeUXIxAhCfwrS5R4P7qKdQs8'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
