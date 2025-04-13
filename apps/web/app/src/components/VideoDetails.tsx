"use client";
import { useEffect, useRef, useState } from "react";

export function VideoDetails() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  


  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const caption = `caption`;

  return (
    <div className="p-4 text-white h-full">
      <div className="flex items-center">
        <div className="bg-gray-400 w-12 h-12 rounded-full flex justify-center items-center text-xl font-bold text-gray-900">
          U
        </div>
        <div className="ml-3 text-lg font-semibold">User_Name</div>
      </div>

         <div className="mt-4 flex items-center space-x-4">
        {/* like icon */}
        <div className="cursor-pointer text-[#e4e4e4] hover:text-red-400 transition duration-200 hover:fill-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </div>

        <div className="relative cursor-pointer text-[#e4e4e4] hover:text-[#cecece] transition-all transform duration-100" onClick={() => setOpen((prev) => !prev)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
          </svg>

          {open && (
            <div
              ref={panelRef}
              className="absolute top-full -left-10 z-50 w-[320px] bg-[#1e1e1e] text-white shadow-lg rounded-xl p-4 mt-2 max-h-[250px] overflow-y-auto transition-opacity duration-300 ease-in-out opacity-100"
            >
              <h4 className="font-semibold text-lg mb-3">Quick Panel</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2"><span className="text-xl">🔔</span><span className="text-sm">Notifications</span></li>
                <li className="flex items-center space-x-2"><span className="text-xl">⚙️</span><span className="text-sm">Settings</span></li>
                <li className="flex items-center space-x-2"><span className="text-xl">📤</span><span className="text-sm">Logout</span></li>
                <li className="flex items-center space-x-2"><span className="text-xl">🛠️</span><span className="text-sm">Tool 1</span></li>
                <li className="flex items-center space-x-2"><span className="text-xl">🔒</span><span className="text-sm">Privacy</span></li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 p-3 h-full pb-5 border-t border-gray-600 text-sm text-gray-300">
        <p className={`text-gray-300 transition-all duration-200 ease-in-out ${expanded ? "" : "line-clamp-2"}`}>
          {caption}
        </p>
        <button
          className="mt-2 text-xs text-gray-500 hover:text-gray-400 underline transition"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}
