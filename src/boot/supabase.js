import { createClient } from '@supabase/supabase-js'
import useAuthUser from 'src/composables/UseAuthUser'

const supabaseUrl = 'https://ykdzwblknenaieqwjxzh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlrZHp3YmxrbmVuYWllcXdqeHpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc5MDc4MzQsImV4cCI6MTk4MzQ4MzgzNH0.B8cDug7QCEzt8xsCdCo4a5ZUPIaiXUCpmgIcOIdWleA'
const supabase = createClient(supabaseUrl, supabaseKey)

supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuthUser()

  user.value = session?.user || null
})

export default function useSupabase () {
  return { supabase }
}
