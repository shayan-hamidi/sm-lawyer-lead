"use client";
import Login from "@/components/Dashboard/Login";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const router = useRouter();
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      router.push("/dashboard/admin");
    }
  }, []);
  return <Login />;
}
