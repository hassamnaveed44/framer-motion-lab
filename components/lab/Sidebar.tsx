"use client";

interface SidebarProps {
  activeModule: string;
  onSelectModule: (id: string) => void;
}

const modules = [
  { id: "01-basics", label: "01. Core Motion & Tweens" },
  { id: "02-gestures", label: "02. Micro-Interactions & Gestures" },
  { id: "03-variants", label: "03. Variants & Staggering" },
  { id: "04-springs", label: "04. Spring Physics Bench" },
  { id: "05-presence", label: "05. AnimatePresence & Exit" },
  { id: "06-layout", label: "06. Magic Layouts & Shared ID" },
];


export default function Sidebar({ activeModule, onSelectModule }: SidebarProps) {
  return (
    <aside className="bg-white border border-[#e2e4e8] rounded-lg p-4 shadow-xs flex flex-col gap-2">
      <h2 className="text-xs font-semibold uppercase tracking-wider text-[#64748b] mb-2 px-2">
        Learning Modules
      </h2>
      {modules.map((mod) => (
        <button
          key={mod.id}
          onClick={() => onSelectModule(mod.id)}
          className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-all ${
            activeModule === mod.id
              ? "bg-[#3b6280] text-white shadow-xs"
              : "text-[#1e2022] hover:bg-[#f2f4f7]"
          }`}
        >
          {mod.label}
        </button>
      ))}
    </aside>
  );
}
