"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { OAuthConfigByProvider } from "@/config/oauth";
import { createClient } from "@/utils/supabase/server";
import { Provider } from "@supabase/supabase-js";

export async function login(prevState: any, formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return {
      message: error.message,
    };
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function loginWithSocial(provider: Provider) {
  const supabase = createClient();

  const { error, data } = await supabase.auth.signInWithOAuth({
    provider: provider,
    options: OAuthConfigByProvider[provider],
  });

  if (error) {
    redirect("/error");
  } else if (data.url) {
    console.log(data.url);
    // const urlSearchParams = new URL(data.url).searchParams;
    // const redirectTo = urlSearchParams.get("redirect_to");
    // const code = urlSearchParams.get("code_challenge");
    redirect(data.url);
  }
}

export async function logout() {
  const supabase = createClient();

  await supabase.auth.signOut();

  // TODO: Where to redirect
  redirect("/");
}
