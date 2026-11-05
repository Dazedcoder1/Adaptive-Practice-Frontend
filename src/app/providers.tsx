"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Toaster } from "sonner";
import { AuthProvider } from "@/features/authentication/auth-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: { queries: { staleTime: 30_000, retry: 1, refetchOnWindowFocus: false } },
      }),
  );
  return (
    <QueryClientProvider client={client}>
      <AuthProvider>{children}</AuthProvider>
      {/* Below the 64px header, so toasts never cover the account menu or other header controls. */}
      <Toaster position="top-right" offset={{ top: 80 }} mobileOffset={{ top: 72 }} richColors closeButton />
    </QueryClientProvider>
  );
}
