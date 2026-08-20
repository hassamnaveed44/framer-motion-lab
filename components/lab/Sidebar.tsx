"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
// Note: If using framer-motion directly: import { motion, AnimatePresence } from "framer-motion";

interface SidebarProps {
  activeModule: string;
  onSelectModule: (id: string) => void;
}

const modules = [
  { id: "01-basics", label: "01. Core Motion & Tweens" },
  { id: "02-gestures", label: "02. Micro-Interactions & Gestures" },
  { id: "03-variants", label: "03. Variants & Staggering" },
  { id: "04-springs", label: "04. Spring Physics Bench" },
  { id: "05-presence", label: "05. AnimatePresence & Exit" },
  { id: "06-layout", label: "06. Magic Layouts & Shared ID" },
  { id: "07-motionvalues", label: "07. Motion Values & Transforms" },
];

export default function Sidebar({ activeModule, onSelectModule }: SidebarProps) {
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  const activeLabel = modules.find((m) => m.id === activeModule)?.label;

  const handleSelect = (id: string) => {
    onSelectModule(id);
    setIsOpenMobile(false);
  };

  return (
    <>
      {/* 1. Desktop Sidebar View (hidden on mobile, visible on lg screens) */}
      <aside className="hidden lg:flex bg-white border border-[#e2e4e8] rounded-lg p-4 shadow-xs flex-col gap-2">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-[#64748b] mb-2 px-2">
          Learning Modules
        </h2>
        {modules.map((mod) => (
          <button
            key={mod.id}
            onClick={() => handleSelect(mod.id)}
            className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-all cursor-pointer ${
              activeModule === mod.id
                ? "bg-[#3b6280] text-white shadow-xs"
                : "text-[#1e2022] hover:bg-[#f2f4f7]"
            }`}
          >
            {mod.label}
          </button>
        ))}
      </aside>

      {/* 2. Mobile Hamburger Toggle Bar (visible on mobile < lg screens) */}
      <div className="lg:hidden w-full bg-white border border-[#e2e4e8] rounded-lg p-3 shadow-xs">
        <button
          onClick={() => setIsOpenMobile(!isOpenMobile)}
          className="w-full flex items-center justify-between px-3 py-2 bg-[#f8f7f4] border border-[#e2e4e8] rounded-md text-xs font-semibold text-[#1e2022] cursor-pointer"
        >
          <span className="truncate pr-2">Module: {activeLabel}</span>
          <span className="text-sm text-[#3b6280]">{isOpenMobile ? "✕ Close" : "☰ Select Module"}</span>
        </button>

        {/* Animated Mobile Drawer Dropdown */}
        <AnimatePresence>
          {isOpenMobile && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden flex flex-col gap-1.5 pt-3 mt-2 border-t border-[#e2e4e8]"
            >
              {modules.map((mod) => (
                <button
                  key={mod.id}
                  onClick={() => handleSelect(mod.id)}
                  className={`w-full text-left px-3 py-2 rounded-md text-xs font-medium transition-all ${
                    activeModule === mod.id
                      ? "bg-[#3b6280] text-white font-semibold"
                      : "text-[#1e2022] hover:bg-[#f2f4f7]"
                  }`}
                >
                  {mod.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
