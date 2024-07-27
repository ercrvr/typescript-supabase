import type { Student } from '@/types/Student'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const getAllStudents = async () => {
  try {
    const { data, error, status } = await supabase.from('students').select('*')
    if (error || status !== 200)
      throw new Error(`Error fetching students: ${error?.message || 'Unknown Error'}`)
    return data as Student[]
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else {
      console.error('Something went wrong', error)
    }
    throw error
  }
}
