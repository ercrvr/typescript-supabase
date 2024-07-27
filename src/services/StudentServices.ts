import { axiosSingleton } from '@/lib/http'
import type { Student } from '@/types/Student'

export const getStudents = async () => {
  try {
    const response = await axiosSingleton.get<Student[]>(import.meta.env.VITE_STUDENT_ENDPOINT)
    console.log(response)
    return response.data
  } catch (error) {
    console.log('GetStudents: An error has occured.', error)
    throw error
  }
}
