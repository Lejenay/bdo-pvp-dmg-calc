"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import InfoPanel from "./infoPanel";

export default function Home() {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <main className=" flex justify-center mb-10">
      <div className="w-full mt-5 flex justify-center">
        <QueryClientProvider client={queryClient}>
          <InfoPanel />
        </QueryClientProvider>
      </div>
    </main>
  );
}