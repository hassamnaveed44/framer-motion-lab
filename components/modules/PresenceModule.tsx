"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type PresenceMode = "sync" | "wait" | "popLayout";

export default function PresenceModule() {
  const [selectedTab, setSelectedTab] = useState("overview");
  const [presenceMode, setPresenceMode] =
    useState<PresenceMode>("wait");
  const [showToast, setShowToast] = useState(true);

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: "Overview panel with core metrics.",
    },
    {
      id: "analytics",
      label: "Analytics",
      content: "Real-time traffic charts and funnel data.",
    },
    {
      id: "settings",
      label: "Settings",
      content: "Configure notification rules and security keys.",
    },
  ];

  return (
    <div className="flex flex-col gap-6 w-full max-w-xl mx-auto">
      {/* Mode Control Bar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#f8f7f4] p-4 rounded-lg border border-[#e2e4e8] text-xs">
        <div className="flex flex-col gap-1.5">
          <label className="font-semibold text-[#1e2022]">
            AnimatePresence Mode
          </label>

          <select
            value={presenceMode}
            onChange={(e) =>
              setPresenceMode(e.target.value as PresenceMode)
            }
            className="p-1.5 bg-white border border-[#e2e4e8] rounded-md text-xs text-[#1e2022]"
          >
            <option value="wait">
              mode=&quot;wait&quot; (Clean tab transition)
            </option>

            <option value="sync">
              mode=&quot;sync&quot; (Simultaneous enter/exit)
            </option>

            <option value="popLayout">
              mode=&quot;popLayout&quot; (Immediate reflow)
            </option>
          </select>
        </div>

        <div className="flex items-center justify-end pt-4">
          <button
            onClick={() => setShowToast((prev) => !prev)}
            className="px-3 py-1.5 bg-[#3b6280] text-white text-xs rounded-md hover:bg-[#2c4d66]"
          >
            {showToast ? "Dismiss Toast Box" : "Show Toast Box"}
          </button>
        </div>
      </div>

      {/* Tab Switcher Demo Stage */}
      <div className="bg-white border border-[#e2e4e8] rounded-lg p-6 flex flex-col gap-4 min-h-[220px]">
        {/* Navigation Tabs */}
        <div className="flex border-b border-[#e2e4e8]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-4 py-2 text-xs font-medium border-b-2 transition-colors -mb-px ${
                selectedTab === tab.id
                  ? "border-[#3b6280] text-[#3b6280]"
                  : "border-transparent text-[#64748b] hover:text-[#1e2022]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Stage */}
        <div className="relative min-h-[90px] p-4 bg-[#fcfbf9] border border-[#e2e4e8] rounded-md overflow-hidden">
          <AnimatePresence mode={presenceMode}>
            <motion.div
              key={selectedTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="text-xs text-[#1e2022]"
            >
              <h4 className="font-semibold capitalize mb-1">
                {selectedTab}
              </h4>

              <p className="text-[#64748b]">
                {
                  tabs.find(
                    (tab) => tab.id === selectedTab
                  )?.content
                }
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Toast Notification Exit Stage */}
      <div className="min-h-[60px]">
        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -15,
                scale: 0.95,
              }}
              transition={{ duration: 0.2 }}
              className="p-3 bg-[#2b5344] text-white rounded-lg text-xs flex justify-between items-center shadow-xs"
            >
              <span>
                Toast Notification: AnimatePresence captures exit
                state cleanly!
              </span>

              <button
                onClick={() => setShowToast(false)}
                className="text-white/80 hover:text-white font-bold ml-2"
                aria-label="Dismiss toast notification"
              >
                ✕
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}