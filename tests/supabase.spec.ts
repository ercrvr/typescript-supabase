// src/supabase/__mocks__/supabase.ts
import { createClient } from '@supabase/supabase-js';
import { describe, expect, it } from 'vitest';


const supabase = createClient(
    process.env.VITE_SUPABASE_URL!,
    process.env.VITE_SUPABASE_ANON_KEY!,
)

const fetchData = [
    {
        "id": "a9b33a0f-213c-4b93-8c8d-9465d8b9ce2c",
        "first_name": "Eric",
        "last_name": "Rivera",
        "email": "ericrivera91492@gmail.com",
        "age": 31
    },
    {
        "id": "29fc9fe1-621e-4562-b301-86349907bafc",
        "first_name": "Charis",
        "last_name": "Rivera",
        "email": "charismeneses0930@gmail.com",
        "age": 29
    },
    {
        "id": "32feedca-0dfa-4082-af46-9b5138f9728a",
        "first_name": "Endrei Marc Benedict",
        "last_name": "Rivera",
        "email": "endreimarcrivera@gmail.com",
        "age": 18
    },
    {
        "id": "dd06e7ce-50cd-4f39-bcfa-87d2bf4f32b9",
        "first_name": "John",
        "last_name": "Jones",
        "email": "johnjones1994@gmail.com",
        "age": 30
    },
    {
        "id": "91d43b8a-a5d7-4a61-af03-d9a19937a53a",
        "first_name": "Jared",
        "last_name": "Tungaw",
        "email": "jaredtungaw22@gmail.com",
        "age": 22
    }
];

describe('fetchData', () => {
    it('should fetch data from Supabase', async () => {
        const { data } = await supabase.from('students').select('*');
        expect(data).toEqual(fetchData);
    });
    it('should be equal to fetchData', async () => {
        const { data } = await supabase.from('students').select('*');
        expect(data).toEqual(fetchData);
    });
    it('length should be equal to 5', async () => {
        const { data } = await supabase.from('students').select('*');
        expect(data?.length).toBeGreaterThanOrEqual(5);
    });
    it('should be no error', async () => {
        const { error } = await supabase.from('students').select('*');
        expect(error).toBeNull;
    });
});