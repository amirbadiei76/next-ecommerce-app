"use client";

import Link from "next/link";
import { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  side?: "right" | "left"; // default = "right"
  children?: React.ReactNode;
};

export default function MobileDrawer({ open, onClose, side = "right", children }: Props) {
  // lock body scroll when open
  useEffect(() => {
    if (typeof window === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const drawerPosition = side === "left" ? "left-0" : "right-0";
  const translateOpen = "translate-x-0";
  const translateClosed = side === "left" ? "-translate-x-full" : "translate-x-full";

  return (
    <>
      {/* overlay */}
      <div
        className={`fixed inset-0 z-30 transition-opacity duration-200 ${open ? "opacity-60 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        onClick={onClose}
        aria-hidden={!open}
      />

      {/* drawer */}
      <aside
        aria-hidden={!open}
        className={`fixed top-0 ${drawerPosition} z-40 h-full w-80 max-w-full bg-white shadow-xl transition-transform duration-300 ease-in-out transform ${open ? translateOpen : translateClosed}`}
      >
        <div className="h-full flex flex-col">
          {/* header of drawer */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="text-lg font-semibold">Menu</div>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            >
              {/* simple "X" icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* content */}
          <div className="p-4 overflow-auto">
            {children ?? (
              <nav className="space-y-3">
                <Link href="/" className="block py-2 px-3 rounded hover:bg-gray-100">Home</Link>
                <Link href="/products" className="block py-2 px-3 rounded hover:bg-gray-100">Products</Link>
                <Link href="/cart" className="block py-2 px-3 rounded hover:bg-gray-100">Cart</Link>
                <Link href="/login" className="block py-2 px-3 rounded hover:bg-gray-100">Login</Link>
              </nav>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}