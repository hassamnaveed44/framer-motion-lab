"use client";

import { useState } from "react";
import { motion } from "motion/react";

type EaseOption = "easeInOut" | "easeOut" | "easeIn" | "linear";

export default function CoreBasicsModule() {
  // 1. Control States for Live Parameter Tweak Bench
  const [isAnimated, setIsAnimated] = useState(false);
  const [duration, setDuration] = useState(0.8);
  const [xOffset, setXOffset] = useState(100);
  const [rotateDeg, setRotateDeg] = useState(180);

  // Explicit type prevents TypeScript from treating this as a generic string
  const [selectedEase, setSelectedEase] =
    useState<EaseOption>("easeInOut");

  const [skipInitial, setSkipInitial] = useState(false);

  return (
    <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto">
      {/* Parameter Control Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-[#f8f7f4] p-4 rounded-lg border border-[#e2e4e8] text-xs">
        {/* Duration Control */}
        <div className="flex flex-col gap-1.5">
          <label className="font-semibold text-[#1e2022] flex justify-between">
            <span>Duration (s)</span>
            <span className="font-mono text-[#3b6280]">
              {duration}s
            </span>
          </label>

          <input
            type="range"
            min="0.1"
            max="3"
            step="0.1"
            value={duration}
            onChange={(e) => setDuration(parseFloat(e.target.value))}
            className="accent-[#3b6280] cursor-pointer"
          />
        </div>

        {/* X Offset Control */}
        <div className="flex flex-col gap-1.5">
          <label className="font-semibold text-[#1e2022] flex justify-between">
            <span>X Translation (px)</span>
            <span className="font-mono text-[#3b6280]">
              {xOffset}px
            </span>
          </label>

          <input
            type="range"
            min="0"
            max="180"
            step="10"
            value={xOffset}
            onChange={(e) => setXOffset(parseInt(e.target.value, 10))}
            className="accent-[#3b6280] cursor-pointer"
          />
        </div>

        {/* Rotation Control */}
        <div className="flex flex-col gap-1.5">
          <label className="font-semibold text-[#1e2022] flex justify-between">
            <span>Rotation (deg)</span>
            <span className="font-mono text-[#3b6280]">
              {rotateDeg}°
            </span>
          </label>

          <input
            type="range"
            min="0"
            max="360"
            step="15"
            value={rotateDeg}
            onChange={(e) => setRotateDeg(parseInt(e.target.value, 10))}
            className="accent-[#3b6280] cursor-pointer"
          />
        </div>

        {/* Easing Function Selector */}
        <div className="flex flex-col gap-1.5">
          <label className="font-semibold text-[#1e2022]">
            Easing Curve
          </label>

          <select
            value={selectedEase}
            onChange={(e) =>
              setSelectedEase(e.target.value as EaseOption)
            }
            className="p-1.5 bg-white border border-[#e2e4e8] rounded-md text-xs text-[#1e2022] outline-hidden focus:border-[#3b6280]"
          >
            <option value="easeInOut">easeInOut</option>
            <option value="easeOut">easeOut</option>
            <option value="easeIn">easeIn</option>
            <option value="linear">linear</option>
          </select>
        </div>

        {/* Skip Initial Mount Toggle */}
        <div className="flex items-center gap-2 pt-4">
          <input
            type="checkbox"
            id="skipInitial"
            checked={skipInitial}
            onChange={(e) => setSkipInitial(e.target.checked)}
            className="accent-[#3b6280] cursor-pointer rounded-sm"
          />

          <label
            htmlFor="skipInitial"
            className="font-medium text-[#1e2022] cursor-pointer"
          >
            Skip Mount Animation (`initial={"false"}`)
          </label>
        </div>
      </div>

      {/* Motion Stage Box */}
      <div className="bg-[#fcfbf9] border border-[#e2e4e8] rounded-lg p-12 min-h-[260px] flex items-center justify-center relative overflow-hidden">
        <motion.div
          // Changing key forces React to re-mount the component
          // to demonstrate `initial` behavior.
          key={skipInitial ? "no-init" : "with-init"}
          initial={
            skipInitial
              ? false
              : {
                  opacity: 0,
                  scale: 0.6,
                  x: -xOffset,
                }
          }
          animate={{
            opacity: 1,
            scale: isAnimated ? 1.1 : 1,
            x: isAnimated ? xOffset : -xOffset,
            rotate: isAnimated ? rotateDeg : 0,
          }}
          transition={{
            type: "tween",
            duration,
            ease: selectedEase,
          }}
          className="w-28 h-28 bg-[#3b6280] text-white rounded-lg shadow-sm flex flex-col items-center justify-center font-mono text-xs gap-1 select-none"
        >
          <span className="font-semibold text-sm">
            {isAnimated ? "State B" : "State A"}
          </span>

          <span className="text-[10px] opacity-80">
            {rotateDeg}° / {xOffset}px
          </span>
        </motion.div>
      </div>

      {/* Action Trigger Button */}
      <div className="flex justify-between items-center bg-white p-3 border border-[#e2e4e8] rounded-lg">
        <div className="text-xs text-[#64748b]">
          Current Motion State:{" "}
          <strong className="text-[#3b6280]">
            {isAnimated ? "TRUE (State B)" : "FALSE (State A)"}
          </strong>
        </div>

        <button
          onClick={() => setIsAnimated((prev) => !prev)}
          className="px-4 py-2 bg-[#3b6280] text-white text-xs font-medium rounded-md hover:bg-[#2c4d66] active:scale-95 transition-all shadow-xs"
        >
          Toggle Motion State
        </button>
      </div>
    </div>
  );
}