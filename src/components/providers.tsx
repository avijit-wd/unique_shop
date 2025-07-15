"use client";

import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function Providers({ children }: { children: ReactNode }) {
  const client = new ApolloClient({
    uri:
      process.env.GRAPHQL_HOST || "https://saleor-kombee.onrender.com/graphql/",
    cache: new InMemoryCache(),
  });

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ApolloProvider client={client}>
        <Toaster />
        {children}
      </ApolloProvider>
    </ThemeProvider>
  );
}

function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
