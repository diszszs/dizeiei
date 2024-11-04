import type { Metadata } from "next";
import { Sarabun } from "next/font/google"
import "./globals.css";
import React, { Children } from "react";



const sarabun = Sarabun({
  weight: '400',
  subsets:['thai']
})

export const metadata: Metadata = {
  title: "Next Basic",
  description: "This is my sample application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body
        className={`${sarabun.className}`}
      >
        {children}
      </body>
    </html>
  );
}
