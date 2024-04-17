"use client";

import { SocialMediaLoginForm } from "@/components/social-log-in";
import { useFormState } from "react-dom";
import { login } from "./actions";

const initialState = {
  email: "",
  password: "",
  message: "",
};

export default function LoginPage() {
  const [state, formAction] = useFormState(login, initialState);

  return <SocialMediaLoginForm login={formAction} state={state} />;
}
