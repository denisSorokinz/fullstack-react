"use client";

import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/dashboard/favorites");
  }, []);
}

export default DashboardPage;
