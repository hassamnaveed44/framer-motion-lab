"use client";

import { useState } from "react";
import { motion } from "motion/react";
// Note: If using framer-motion directly, use: import { motion } from "framer-motion";

export default function GesturesModule() {
  const [dragElasticity, setDragElasticity] = useState(0.2);
  const [snapBack, setSnapBack] = useState(true);

  return (
    <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto">
      {/* Module Controls Bar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#f8f7f4] p-4 rounded-lg border border-[#e2e4e8] text-xs">
        <div className="flex flex-col gap-1.5">
          <label className="font-semibold text-[#1e2022] flex justify-between">
            <span>Drag Elasticity (Rubberband)</span>
            <span className="font-mono text-[#3b6280]">{dragElasticity}</span>
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={dragElasticity}
            onChange={(e) => setDragElasticity(parseFloat(e.target.value))}
            className="accent-[#3b6280] cursor-pointer"
          />
        </div>

        <div className="flex items-center gap-2 pt-4">
          <input
            type="checkbox"
            id="snapBack"
            checked={snapBack}
            onChange={(e) => setSnapBack(e.target.checked)}
            className="accent-[#3b6280] cursor-pointer rounded-sm"
          />
          <label
            htmlFor="snapBack"
            className="font-medium text-[#1e2022] cursor-pointer"
          >
            Snap Back to Center (`dragSnapToOrigin`)
          </label>
        </div>
      </div>

      {/* Interactive Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* CARD 1: Hover & Tap Interactive Button Card */}
        <div className="bg-white border border-[#e2e4e8] rounded-lg p-6 flex flex-col items-center justify-center gap-4 text-center min-h-[220px]">
          <span className="text-xs font-mono text-[#64748b]">
            1. Button Gestures
          </span>

          {/* TODO: Add whileHover and whileTap props here */}
          <motion.button
            whileHover={{ scale: 1.06, y: -2, backgroundColor: "#2c4d66" }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="px-6 py-3 bg-[#3b6280] text-white text-sm font-medium rounded-lg shadow-sm border border-transparent select-none cursor-pointer"
          >
            Interactive Button
          </motion.button>

          <span className="text-[11px] text-[#64748b]">
            Hover & Press the button
          </span>
        </div>

        {/* CARD 2: Drag & Boundary Sandbox Card */}
        <div className="bg-white border border-[#e2e4e8] rounded-lg p-6 flex flex-col items-center justify-center gap-4 text-center min-h-[220px] relative overflow-hidden">
          <span className="text-xs font-mono text-[#64748b]">
            2. Drag Sandbox
          </span>

          {/* TODO: Add drag, dragConstraints, dragElastic, dragSnapToOrigin, and whileDrag props here */}
          <motion.div 
          drag={true} dragConstraints={{left:-100, right:100, top:-40, bottom:40}} dragElastic={dragElasticity}  dragSnapToOrigin={snapBack}
          whileHover={{scale:1.04}}
          whileTap={{cursor:"grabbing"}}
          whileDrag={{scale:1.12, boxShadow:"0 10px 25px-5px rgba(0,0,0,0.15)"}}
          className="w-24 h-24 bg-[#2b5344] text-white rounded-lg shadow-sm flex items-center justify-center font-mono text-xs cursor-grab select-none">
            Drag Me
          </motion.div>

          <span className="text-[11px] text-[#64748b]">
            Grab & Drag inside container
          </span>
        </div>
      </div>
    </div>
  );
}
