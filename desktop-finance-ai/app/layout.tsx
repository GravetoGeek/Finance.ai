import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Mulish } from 'next/font/google'
import { Toaster } from "./_components/ui/sonner";
import { Analytics } from "@vercel/analytics/react"

const mulish = Mulish({
  subsets: ['latin-ext'],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mulish.className} antialiased dark bg-[0F0E11]`}
      //className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider appearance={{
          baseTheme: dark,
        }}
        >
          <div className="flex flex-col h-full overflow-hide">
            {children}
          </div>
        </ ClerkProvider>
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
