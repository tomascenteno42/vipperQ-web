"use client";

import { SocialMediaRegisterForm } from "@/components/social-register";
import { useFormState } from "react-dom";
import { signup } from "./actions";

const initialState = {
  path: "",
  message: "",
};

export default function RegisterPage() {
  const [state, formAction] = useFormState(signup, initialState);

  return <SocialMediaRegisterForm register={formAction} state={state} />;
}
