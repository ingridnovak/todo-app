"use client";
import Image from "next/image";
import List from "./list";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

export default function Home() {
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
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            About
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Productivity tips
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Feedback →
          </a>
        </footer>
      </div>
    </QueryClientProvider>
  );
}
