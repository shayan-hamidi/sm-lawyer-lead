"use client";
import DashboardPanel from "@/components/Dashboard";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPanelPage() {
  const router = useRouter();
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      router.push("/dashboard/login");
    }
  }, []);
  return <DashboardPanel />;
}
