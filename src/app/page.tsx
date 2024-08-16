
'use client'

import { StoreUser } from "@/actions/action";
import { User } from "@/types/types";
import { useFormState } from "react-dom";

export default function Home()  {
  

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 p-4">
      <form action={StoreUser}>
        <input type="text" name="name" title="name" />
        <input type="text" name="email" title="email" />
        <input type="text" name="password" title="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
