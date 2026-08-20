"use client";

import { useState } from "react";
import { motion } from "motion/react";
// Note: If using framer-motion directly, use: import { motion } from "framer-motion";

export default function SpringBenchModule() {
  const [isMoved, setIsMoved] = useState(false);
  const [stiffness, setStiffness] = useState(300);
  const [damping, setDamping] = useState(20);
  const [mass, setMass] = useState(1);

  return (
    <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto">
      {/* Spring Sliders Control Bench */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#f8f7f4] p-4 rounded-lg border border-[#e2e4e8] text-xs">
        {/* Stiffness Control */}
        <div className="flex flex-col gap-1.5">
          <label className="font-semibold text-[#1e2022] flex justify-between">
            <span>Stiffness (Tension)</span>
            <span className="font-mono text-[#3b6280]">{stiffness}</span>
          </label>
          <input
            type="range"
            min="50"
            max="700"
            step="25"
            value={stiffness}
            onChange={(e) => setStiffness(parseInt(e.target.value))}
            className="accent-[#3b6280] cursor-pointer"
          />
        </div>

        {/* Damping Control */}
        <div className="flex flex-col gap-1.5">
          <label className="font-semibold text-[#1e2022] flex justify-between">
            <span>Damping (Friction)</span>
            <span className="font-mono text-[#3b6280]">{damping}</span>
          </label>
          <input
            type="range"
            min="5"
            max="60"
            step="2"
            value={damping}
            onChange={(e) => setDamping(parseInt(e.target.value))}
            className="accent-[#3b6280] cursor-pointer"
          />
        </div>

        {/* Mass Control */}
        <div className="flex flex-col gap-1.5">
          <label className="font-semibold text-[#1e2022] flex justify-between">
            <span>Mass (Weight)</span>
            <span className="font-mono text-[#3b6280]">{mass}</span>
          </label>
          <input
            type="range"
            min="0.2"
            max="3"
            step="0.1"
            value={mass}
            onChange={(e) => setMass(parseFloat(e.target.value))}
            className="accent-[#3b6280] cursor-pointer"
          />
        </div>
      </div>

      {/* Physics Stage Area */}
      <div className="bg-white border border-[#e2e4e8] rounded-lg p-12 min-h-[260px] flex items-center justify-center relative overflow-hidden">
        {/* TODO: Add transition={{ type: "spring", stiffness, damping, mass }} to motion.div */}
        <motion.div
          animate={{
            x: isMoved ? 140 : -140,
            scale: isMoved ? 1.15 : 1,
            rotate: isMoved ? 45 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: stiffness,
            damping: damping,
            mass: mass,
          }}
          className="w-28 h-28 bg-[#3b6280] text-white rounded-lg shadow-sm flex flex-col items-center justify-center font-mono text-xs gap-1 select-none cursor-pointer"
        >
          <span className="font-semibold text-xs">
            {isMoved ? "Position B" : "Position A"}
          </span>
          <span className="text-[9px] opacity-75">
            S:{stiffness} D:{damping} M:{mass}
          </span>
        </motion.div>
      </div>

      {/* Action Trigger Button */}
      <div className="flex justify-between items-center bg-white p-3 border border-[#e2e4e8] rounded-lg">
        <span className="text-xs text-[#64748b]">
          Test Spring Momentum by toggling rapidly
        </span>
        <button
          onClick={() => setIsMoved(!isMoved)}
          className="px-4 py-2 bg-[#3b6280] text-white text-xs font-medium rounded-md hover:bg-[#2c4d66] active:scale-95 transition-all shadow-xs"
        >
          Trigger Spring Motion
        </button>
      </div>
    </div>
  );
}
