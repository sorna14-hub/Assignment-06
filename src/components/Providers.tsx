"use client";

import { Toaster } from "react-hot-toast";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 2500,
          style: {
            background: "#15171d",
            color: "#ffffff",
            border: "1px solid #2d313b",
            fontSize: "14px",
          },
          success: { iconTheme: { primary: "#c2f800", secondary: "#000000" } },
        }}
      />
    </>
  );
}
