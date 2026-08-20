"use client";

import { useState } from "react";
import { motion } from "motion/react";
// Note: If using framer-motion directly: import { motion } from "framer-motion";

export default function LayoutModule() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [isExpanded, setIsExpanded] = useState(false);

  const tabs = [
    { id: "tab1", label: "Dashboard" },
    { id: "tab2", label: "Project Files" },
    { id: "tab3", label: "Team Members" },
  ];

  return (
    <div className="flex flex-col gap-8 w-full max-w-xl mx-auto">
      {/* DEMO 1: Floating Shared Indicator with layoutId */}
      <div className="bg-white border border-[#e2e4e8] rounded-lg p-6 flex flex-col gap-4 shadow-xs">
        <span className="text-xs font-mono text-[#64748b]">1. Morphing Shared Tab Indicator (`layoutId`)</span>
        
        <div className="flex bg-[#f8f7f4] p-1.5 rounded-lg border border-[#e2e4e8] relative">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-2 text-xs font-medium rounded-md relative z-10 transition-colors ${
                  isActive ? "text-[#1e2022]" : "text-[#64748b] hover:text-[#1e2022]"
                }`}
              >
                {tab.label}
                {/* Floating Active Background Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="active-tab-indicator"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    className="absolute inset-0 bg-white rounded-md shadow-xs border border-[#e2e4e8] -z-10"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* DEMO 2: Automatic Accordion Layout Shift (`layout`) */}
      <div className="bg-white border border-[#e2e4e8] rounded-lg p-6 flex flex-col gap-4 shadow-xs">
        <span className="text-xs font-mono text-[#64748b]">2. Automatic Layout Container Shift (`layout`)</span>

        <motion.div
          layout
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-[#fcfbf9] border border-[#e2e4e8] rounded-lg p-4 cursor-pointer hover:border-[#3b6280] transition-colors"
        >
          <motion.div layout className="flex justify-between items-center">
            <h4 className="text-xs font-semibold text-[#1e2022]">
              {isExpanded ? "Click to Collapse Card" : "Click to Expand Card"}
            </h4>
            <span className="text-xs text-[#3b6280] font-mono">{isExpanded ? "▲" : "▼"}</span>
          </motion.div>

          {isExpanded && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="text-xs text-[#64748b] mt-3 pt-3 border-t border-[#e2e4e8] leading-relaxed"
            >
              Framer Motion automatically calculates the layout change between collapsed and expanded states without manual height calculations!
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
