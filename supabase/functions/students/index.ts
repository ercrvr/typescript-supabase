// Setup type definitions for built-in Supabase Runtime APIs
import { createClient } from "npm:@supabase/supabase-js@2.44.4";
import "jsr:@supabase/functions-js/edge-runtime.d.ts"

// Define a custom error class with status code
class CustomError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.name = 'CustomError';
    this.statusCode = statusCode;
  }
}

// Define interface for Student
interface Student {
  id: string,
  first_name: string;
  last_name: string;
  email: string;
  age: number;
}

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_ANON_KEY")!,
)

const apiResponse = (data: any, status: number = 200, preflight: boolean = false) => {
  const cors = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Max-Age': '86400'
  };

  const headers: { [key: string]: string } = { ...cors };
  if (!preflight) {
    headers['Content-Type'] = 'application/json';
  }

  return new Response(status == 204 ? undefined : JSON.stringify(data), {
    headers,
    status
  });
}

Deno.serve(async (req: any) => {
  // handle preflight requests
  if (req.method === 'OPTIONS') {
    return apiResponse('OK', 204, true);
  }

  try {
    console.log("students");
    const { data, error, status } = await supabase.from('students').select('*');
    if (error || status !== 200) {
      throw new CustomError(error?.message ?? 'Error Feching Students', status ?? 500);
    }
    return apiResponse(data as Student[]);
  } catch (error) {
    if (error instanceof CustomError) {
      return apiResponse(error.message, error.statusCode)
    }
    return apiResponse(error ?? 'Something went wrong.', 500);
  }
})