"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface IReactQueryProviderProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Tidak refetch saat window aktif kembali
      refetchOnReconnect: false, // Tidak refetch saat koneksi kembali
      refetchOnMount: false, // Tidak refetch saat komponen di-mount ulang
      retry: false, // Tidak coba ulang query jika error
      retryOnMount: false, // Tidak retry saat mount ulang
      networkMode: "always", // Pastikan request tetap bisa berjalan di mode apa pun
    },
  },
});

export default function ReactQueryProvider({
  children,
}: IReactQueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
