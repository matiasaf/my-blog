import type { Metadata } from "next";
import MyProfilePic from "./components/MyProfilePic";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Matias's Blog",
  description: "Created by Matias",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:bg-slate-800">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
