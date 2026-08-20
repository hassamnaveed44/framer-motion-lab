"use client";

import { useState } from "react";
import { motion, type Variants } from "motion/react";
// If using framer-motion directly:
// import { motion, type Variants } from "framer-motion";

export default function VariantsModule() {
  const [isOpen, setIsOpen] = useState(true);
  const [staggerDelay, setStaggerDelay] = useState(0.1);

  // Example item data array
  const items = [
    {
      id: 1,
      title: "Notification Center",
      desc: "Real-time activity alerts",
    },
    {
      id: 2,
      title: "User Preferences",
      desc: "Security and theme settings",
    },
    {
      id: 3,
      title: "API Keys",
      desc: "Manage operational tokens",
    },
    {
      id: 4,
      title: "Billing & Invoices",
      desc: "Monthly subscription history",
    },
  ];

  // Container variant object
  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.05,
      },
    },
  };

  // Item variant object
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 18,
      scale: 0.95,
    },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 350,
        damping: 24,
      },
    },
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-xl mx-auto">
      {/* Controls Bar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#f8f7f4] p-4 rounded-lg border border-[#e2e4e8] text-xs">
        {/* Stagger Control */}
        <div className="flex flex-col gap-1.5">
          <label className="font-semibold text-[#1e2022] flex justify-between">
            <span>Stagger Interval (s)</span>

            <span className="font-mono text-[#3b6280]">
              {staggerDelay}s
            </span>
          </label>

          <input
            type="range"
            min="0.03"
            max="0.41"
            step="0.02"
            value={staggerDelay}
            onChange={(e) =>
              setStaggerDelay(parseFloat(e.target.value))
            }
            className="accent-[#3b6280] cursor-pointer"
          />
        </div>

        {/* Toggle Button */}
        <div className="flex items-center justify-end">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="px-4 py-2 bg-[#3b6280] text-white text-xs font-medium rounded-md hover:bg-[#2c4d66] active:scale-95 transition-all shadow-xs"
          >
            {isOpen ? "Collapse Menu" : "Expand Staggered Menu"}
          </button>
        </div>
      </div>

      {/* Staggered Card List Container */}
      <div className="bg-white border border-[#e2e4e8] rounded-lg p-6 min-h-[320px] flex items-center justify-center">
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          className="w-full flex flex-col gap-2.5 list-none p-0 m-0"
        >
          {items.map((item) => (
            <motion.li
              key={item.id}
              variants={itemVariants}
              className="p-3.5 bg-[#fcfbf9] border border-[#e2e4e8] rounded-lg flex items-center justify-between shadow-2xs"
            >
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-[#1e2022]">
                  {item.title}
                </span>

                <span className="text-[10px] text-[#64748b]">
                  {item.desc}
                </span>
              </div>

              <span className="w-2 h-2 rounded-full bg-[#3b6280]" />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}