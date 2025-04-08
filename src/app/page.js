"use client";
import Image from "next/image";
import List from "./components/List/list";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import Footer from "./components/Footer/footer";

export default function Home({ auth, children }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[12px] row-start-2 items-center ">
          <Image
            className=""
            src="/todo.jpg"
            alt="ToDo App logo"
            width={700}
            height={149}
            priority
          />

          <List />
        </main>
        <Footer auth={auth} />
      </div>
    </QueryClientProvider>
  );
}
