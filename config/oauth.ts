import { Provider, SignInWithOAuthCredentials } from "@supabase/supabase-js";

export const OAuthConfigByProvider: Partial<
  Record<Provider, SignInWithOAuthCredentials["options"]>
> = {
  google: {
    redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`,
    queryParams: {
      prompt: "select_account",
    },
  },
  azure: {
    redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`,
    scopes: "email offline_access",
  },
};
