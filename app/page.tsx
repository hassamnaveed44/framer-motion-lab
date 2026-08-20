"use client";

import { useState } from "react";
import Sidebar from "@/components/lab/Sidebar";
import Stage from "@/components/lab/Stage";
import ObservationLogger from "@/components/lab/ObservationLogger";
import CoreBasicsModule from "@/components/modules/CoreBasicsModule";
import GesturesModule from "@/components/modules/GesturesModule";

export default function MotionLabHome() {
  const [activeModule, setActiveModule] = useState("01-basics");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 min-h-[calc(100vh-140px)]">
      {/* Reusable Sidebar */}
      <div className="lg:col-span-1">
        <Sidebar activeModule={activeModule} onSelectModule={setActiveModule} />
      </div>

      {/* Main Workspace */}
      <section className="lg:col-span-3 flex flex-col gap-6">
        {/* Module 01 */}
        {activeModule === "01-basics" && (
          <>
            <Stage moduleTitle="01. Core Motion & Tweens">
              <CoreBasicsModule />
            </Stage>
            <ObservationLogger
              title="Phase 2 - Initial, Animate & Transition Observations"
              notes={[
                "Setting initial={false} prevents mount animations during initial page load.",
                "Transforms (x, y, scale, rotate) run smoothly on GPU; avoiding layout reflows.",
                "Easing curves (easeIn vs easeOut vs linear) change perceived acceleration.",
              ]}
            />
          </>
        )}

        {/* Module 02 */}
        {activeModule === "02-gestures" && (
          <>
            <Stage moduleTitle="02. Micro-Interactions & Gestures">
              <GesturesModule />
            </Stage>
            <ObservationLogger
              title="Phase 3 - Gesture & Drag Observations"
              notes={[
                "whileHover and whileTap automatically revert to resting state when pointer exits.",
                "dragElastic controls the rubber-band resistance beyond constraint boundaries.",
                "dragSnapToOrigin creates spring-back physics upon release.",
              ]}
            />
          </>
        )}

        {/* Fallback Placeholder for Unimplemented Modules */}
        {activeModule !== "01-basics" && activeModule !== "02-gestures" && (
          <Stage moduleTitle={activeModule}>
            <div className="text-sm text-[#64748b] font-mono">
              Module [{activeModule}] ready for implementation.
            </div>
          </Stage>
        )}
      </section>
    </div>
  );
}
