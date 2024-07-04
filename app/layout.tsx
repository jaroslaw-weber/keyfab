"use client";
import React, { ReactNode, useEffect } from "react";
import { useAtom } from "jotai";
import { styleAtom } from "./state";
import Navbar from "./components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

interface AppLayoutProps {
  children: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [css, setCss] = useAtom(styleAtom);

  useEffect(() => {
    setCss(css)

  }, [setCss,css])
  return (
    <html lang="en">
      <body>
        <style>{css.css}</style>
        <style>{`
    .cm-scroller {
      border-radius: 0.25rem;
      padding: 0.5rem;
    }
    .cm-editor {
      border-radius: 0.25rem;
      padding: 0.5rem;
      border-width: 1px;
    }
  `}</style>
        <main className={inter.className + " min-h-screen "}>
          <Navbar />
          <div className="global min-h-full">{children}</div>
        </main>
      </body>
    </html>
  );
};

export default AppLayout;
