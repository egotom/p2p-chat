
import { createClient } from '@supabase/supabase-js'
import 'dotenv'
const url = import.meta.env.VITE_SUPABASE_URL
const key = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(url, key)

export {supabase}