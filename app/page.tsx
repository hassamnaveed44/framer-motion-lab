"use client";

import { useState } from "react";
import Sidebar from "@/components/lab/Sidebar";
import Stage from "@/components/lab/Stage";
import ObservationLogger from "@/components/lab/ObservationLogger";
import CoreBasicsModule from "@/components/modules/CoreBasicsModule";
import GesturesModule from "@/components/modules/GesturesModule";
import VariantsModule from "@/components/modules/VariantsModule";
import SpringBenchModule from "@/components/modules/SpringBenchModule";
import PresenceModule from "@/components/modules/PresenceModule";
import LayoutModule from "@/components/modules/LayoutModule";

export default function MotionLabHome() {
  const [activeModule, setActiveModule] = useState("01-basics");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 min-h-[calc(100vh-140px)]">
      {/* Reusable Sidebar */}
      <div className="lg:col-span-1">
        <Sidebar activeModule={activeModule} onSelectModule={setActiveModule} />
      </div>

      {/* Main Workspace Grid (3-column span) */}
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

        {/* Module 03 */}
        {activeModule === "03-variants" && (
          <>
            <Stage moduleTitle="03. Variants & Staggering">
              <VariantsModule />
            </Stage>
            <ObservationLogger
              title="Phase 4 - Variants & Propagation Observations"
              notes={[
                "Parent components automatically pass variant state names ('hidden', 'visible') down to child components.",
                "staggerChildren creates sequential delays across array item lists without manual index calculations.",
                "when: 'beforeChildren' forces container layout expansion before item fade-ins begin.",
              ]}
            />
          </>
        )}

        {/* Module 04 */}
        {activeModule === "04-springs" && (
          <>
            <Stage moduleTitle="04. Spring Physics Bench">
              <SpringBenchModule />
            </Stage>
            <ObservationLogger
              title="Phase 5 - Physics & Spring Dynamics Observations"
              notes={[
                "High stiffness creates energetic, snappy responses; low stiffness feels soft.",
                "Damping acts as air/friction resistance: low damping causes bouncy overshoot oscillation.",
                "Mass adds physical weight inertia: higher mass causes heavy momentum drift before stopping.",
              ]}
            />
          </>
        )}

        {/* Module 05 */}
        {activeModule === "05-presence" && (
          <>
            <Stage moduleTitle="05. AnimatePresence & Exit Animations">
              <PresenceModule />
            </Stage>
            <ObservationLogger
              title="Phase 6 - AnimatePresence & Exit Observations"
              notes={[
                "AnimatePresence delays DOM node destruction until the exit animation finishes.",
                "mode='wait' ensures old content exits completely before new tab content enters.",
                "mode='popLayout' takes exiting cards out of document flow so remaining items reflow immediately.",
              ]}
            />
          </>
        )}

        {/* Module 06 */}
        {activeModule === "06-layout" && (
          <>
            <Stage moduleTitle="06. Magic Layouts & Shared layoutId">
              <LayoutModule />
            </Stage>
            <ObservationLogger
              title="Phase 7 - FLIP Engine & Shared Layout Observations"
              notes={[
                "Adding the layout prop automatically calculates FLIP transforms between DOM reflows.",
                "layoutId morphs elements seamlessly across different DOM components.",
                "Shared layout indicators create smooth active tab highlight animations.",
              ]}
            />
          </>
        )}

        {/* Fallback Placeholder */}
        {activeModule !== "01-basics" &&
          activeModule !== "02-gestures" &&
          activeModule !== "03-variants" &&
          activeModule !== "04-springs" &&
          activeModule !== "05-presence" &&
          activeModule !== "06-layout" && (
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
