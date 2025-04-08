"use client";

import { useRouter } from "next/navigation";

export function Modal({ children }) {
  const router = useRouter();

  const handleClose = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-20 z-50">
      <div className="bg-gray-100 text-black rounded-lg shadow-lg p-6 w-100 relative">
        <button
          onClick={handleClose}
          className="absolute top-2 text-xl cursor-pointer right-2 text-gray-500 hover:text-gray-800 font-bold"
        >
          &times;
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}
