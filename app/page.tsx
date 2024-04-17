"use client";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";
import { logout } from "./auth/login/actions";

export default function Page() {
  const router = useRouter();

  return (
    <ul>
      <Button onClick={() => logout()}>Logout</Button>
    </ul>
  );
}
