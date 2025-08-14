import type { Metadata } from "next";
import "./globals.css";
import NarBar from "@/app/nav/NarBar";
import {SessionProvider} from "next-auth/react";


export const metadata: Metadata = {
  title: "Car Dealer",
  description: "An application for car bidding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <SessionProvider>
          <NarBar />
          <main className="container mx-auto px-5 pt-10">
              {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
