import { auth } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export const runtime = "edge";

async function Dashboard() {
  const session = await auth();

  if (!session) redirect("/api/auth/signin");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>HOME PAGE</h1>
      <Link href={"/"} className="bg-[#F1C617] text-black">
        GO TO HOME
      </Link>
      <p>{session?.user?.email}</p>
    </main>
  );
}

export default Dashboard;
