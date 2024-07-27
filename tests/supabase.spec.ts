// src/supabase/__mocks__/supabase.ts
import { createClient } from '@supabase/supabase-js';
import { describe, expect, it } from 'vitest';


const supabase = createClient(
    process.env.VITE_SUPABASE_URL!,
    process.env.VITE_SUPABASE_ANON_KEY!,
)

const fetchData = [
    {
        "id": "5bda3881-3d81-49bf-a976-aa902332661d",
        "first_name": "Eric",
        "last_name": "Rivera",
        "email": "ericrivera91492@gmail.com",
        "age": 31
    },
    {
        "id": "54f2c80f-d5db-4a51-ad78-5a1e11c6e41a",
        "first_name": "Charis",
        "last_name": "Rivera",
        "email": "charismeneses0930@gmail.com",
        "age": 29
    },
    {
        "id": "91e3588d-d48a-443c-a562-c427e9272baf",
        "first_name": "Endrei Marc Benedict",
        "last_name": "Rivera",
        "email": "endreimarcrivera@gmail.com",
        "age": 18
    },
    {
        "id": "a9dade8c-b018-46cf-808d-33cebd30f4d9",
        "first_name": "John",
        "last_name": "Jones",
        "email": "johnjones1994@gmail.com",
        "age": 30
    },
    {
        "id": "d808f207-c073-4f46-844c-63729417a07c",
        "first_name": "Jared",
        "last_name": "Tungaw",
        "email": "jaredtungaw@gmail.com",
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