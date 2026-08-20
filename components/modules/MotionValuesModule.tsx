"use client";

import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "motion/react";
import { useState } from "react";
// Note: If using framer-motion directly:
// import {
//   motion,
//   useMotionValue,
//   useMotionValueEvent,
//   useTransform,
// } from "framer-motion";

export default function MotionValuesModule() {
  // 1. MotionValue tracking drag position X
  const x = useMotionValue(0);

  // 2. Map X drag (-150 to 150) -> Rotation (-18deg to 18deg)
  const rotate = useTransform(
    x,
    [-150, 0, 150],
    [-18, 0, 18]
  );

  // 3. Map X drag (-150 to 150) -> Opacity
  const opacity = useTransform(
    x,
    [-150, -80, 0, 80, 150],
    [0.4, 0.9, 1, 0.9, 0.4]
  );

  // 4. Badge background reacts directly to MotionValue
  const badgeBg = useTransform(
    x,
    [-100, 0, 100],
    ["#991b1b", "#3b6280", "#166534"]
  );

  // 5. Normal React state for the text
  const [badgeText, setBadgeText] = useState("SWIPE CARD");

  // Update the text when the drag crosses the thresholds.
  // The actual drag, rotation, opacity, and background-color
  // animations continue to be handled directly by MotionValues.
  useMotionValueEvent(x, "change", (latestX) => {
    if (latestX > 40) {
      setBadgeText((current) =>
        current === "LIKE ►" ? current : "LIKE ►"
      );
    } else if (latestX < -40) {
      setBadgeText((current) =>
        current === "◄ DISLIKE" ? current : "◄ DISLIKE"
      );
    } else {
      setBadgeText((current) =>
        current === "SWIPE CARD" ? current : "SWIPE CARD"
      );
    }
  });

  return (
    <div className="flex flex-col gap-6 w-full max-w-xl mx-auto items-center">
      <div className="text-center flex flex-col gap-1">
        <h3 className="text-sm font-semibold text-[#1e2022]">
          Interactive Swipe Card
        </h3>

        <p className="text-xs text-[#64748b]">
          Drag the card left or right to observe real-time value
          transformation.
        </p>
      </div>

      {/* Swipeable Card Sandbox */}
      <div className="w-full min-h-[300px] flex items-center justify-center relative overflow-hidden bg-[#fcfbf9] border border-[#e2e4e8] rounded-lg p-6">
        <motion.div
          style={{
            x,
            rotate,
            opacity,
          }}
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          dragElastic={0.7}
          whileTap={{ cursor: "grabbing" }}
          className="w-56 h-72 bg-white border border-[#e2e4e8] rounded-xl shadow-md p-5 flex flex-col justify-between items-center cursor-grab select-none relative"
        >
          {/* Dynamic Reactive Badge */}
          <motion.div
            style={{
              backgroundColor: badgeBg,
            }}
            className="px-3 py-1 text-[10px] font-mono font-bold text-white rounded-full shadow-2xs"
          >
            <span>{badgeText}</span>
          </motion.div>

          <div className="text-center flex flex-col gap-1">
            <span className="text-xs font-semibold text-[#1e2022]">
              Framer Motion Lab
            </span>

            <span className="text-[10px] text-[#64748b]">
              useMotionValue + useTransform
            </span>
          </div>

          <div className="w-full text-center text-[10px] text-[#64748b] pt-2 border-t border-[#e2e4e8]">
            Drag horizontally ◄ ►
          </div>
        </motion.div>
      </div>
    </div>
  );
}