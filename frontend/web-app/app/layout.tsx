import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import NarBar from "@/app/nav/NarBar";


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
      <body>
        <NarBar />
        <main className="container mx-auto px-5 pt-10">
            {children}
        </main>
      </body>
    </html>
  );
}
