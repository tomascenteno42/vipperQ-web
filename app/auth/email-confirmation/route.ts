import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);

  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type");

  const supabase = createClient();

  const { error } = await supabase.auth.verifyOtp({
    token_hash: token_hash as any,
    type: type as any,
  });

  if (!error) {
    // TODO: SHOW ERROR SCREEN FOR INVALID TOKEN
    return NextResponse.redirect(`${origin}/`);
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
