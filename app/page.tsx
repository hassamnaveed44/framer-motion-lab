"use client";

import { useState } from "react";
import { motion } from "motion/react"; 
// Note: If using framer-motion directly, use: import { motion } from "framer-motion";

export default function MotionLabHome() {
  const [activeModule, setActiveModule] = useState("01-basics");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 min-h-[calc(100vh-140px)]">
      {/* Sidebar Navigation */}
      <aside className="lg:col-span-1 bg-white border border-[#e2e4e8] rounded-lg p-4 shadow-xs flex flex-col gap-2">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-[#64748b] mb-2 px-2">
          Learning Modules
        </h2>
        
        <button
          onClick={() => setActiveModule("01-basics")}
          className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-all ${
            activeModule === "01-basics"
              ? "bg-[#3b6280] text-white shadow-xs"
              : "text-[#1e2022] hover:bg-[#f2f4f7]"
          }`}
        >
          01. Core Motion & Tweens
        </button>

        <button
          onClick={() => setActiveModule("02-gestures")}
          className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-all ${
            activeModule === "02-gestures"
              ? "bg-[#3b6280] text-white shadow-xs"
              : "text-[#1e2022] hover:bg-[#f2f4f7]"
          }`}
        >
          02. Micro-Interactions & Gestures
        </button>

        <button
          onClick={() => setActiveModule("03-variants")}
          className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-all ${
            activeModule === "03-variants"
              ? "bg-[#3b6280] text-white shadow-xs"
              : "text-[#1e2022] hover:bg-[#f2f4f7]"
          }`}
        >
          03. Variants & Staggering
        </button>

        <button
          onClick={() => setActiveModule("04-springs")}
          className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-all ${
            activeModule === "04-springs"
              ? "bg-[#3b6280] text-white shadow-xs"
              : "text-[#1e2022] hover:bg-[#f2f4f7]"
          }`}
        >
          04. Spring Physics Bench
        </button>

        <button
          onClick={() => setActiveModule("05-presence")}
          className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-all ${
            activeModule === "05-presence"
              ? "bg-[#3b6280] text-white shadow-xs"
              : "text-[#1e2022] hover:bg-[#f2f4f7]"
          }`}
        >
          05. AnimatePresence & Exit
        </button>
      </aside>

      {/* Main Interactive Stage Area */}
      <section className="lg:col-span-3 flex flex-col gap-6">
        {/* Active Stage Canvas */}
        <div className="bg-white border border-[#e2e4e8] rounded-lg p-8 shadow-xs flex-1 flex flex-col items-center justify-center min-h-[380px] relative overflow-hidden">
          <div className="absolute top-3 left-4 text-xs font-mono text-[#64748b]">
            Stage View :: Active Module [{activeModule}]
          </div>

          {/* First Test Animation Object */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-32 h-32 bg-[#3b6280] rounded-lg shadow-sm flex items-center justify-center text-white font-medium text-sm"
          >
            Stage Box
          </motion.div>
        </div>

        {/* Observation Log & Takeaways Panel */}
        <div className="bg-white border border-[#e2e4e8] rounded-lg p-5 shadow-xs">
          <h3 className="text-sm font-semibold text-[#1e2022] mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3b6280]" />
            Lab Observation & Concept Notes
          </h3>
          <p className="text-xs text-[#64748b] leading-relaxed">
            Select a module from the sidebar to inspect props, experiment with physics parameter sliders, and observe DOM behavior under different transition curves.
          </p>
        </div>
      </section>
    </div>
  );
}
