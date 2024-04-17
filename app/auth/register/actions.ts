"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function signup(prevState: any, formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error, data: userData } = await supabase.auth.signUp({
    ...data,
    options: {
      emailRedirectTo: process.env.NEXT_PUBLIC_BASE_URL,
    },
  });

  const emailIsTaken = userData?.user?.identities?.length === 0;

  if (error) {
    return { path: "email", message: error.message };
  }

  if (emailIsTaken) {
    return { path: "email", message: "Email is already taken" };
  }

  // TODO: Redirect to intermediary screen
  revalidatePath("/", "layout");
  redirect("/");
}
