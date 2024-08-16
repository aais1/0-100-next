'use server'

import { cookies } from 'next/headers';

export async function StoreUser(formData: FormData):Promise<{ message: string; }> {
    const name = String(formData.get('name')); // Get the 'name' field from the form data
    cookies().set('name', name); 
    return { message: `User ${name} stored successfully` };
  }
  