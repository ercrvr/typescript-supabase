import axios from 'axios'

export const axiosSingleton = axios.create({
  baseURL: import.meta.env.VITE_SUPABASE_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
    'Content-Type': 'application/json'
  }
})
