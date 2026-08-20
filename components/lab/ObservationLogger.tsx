"use client";

interface ObservationLoggerProps {
  title: string;
  notes: string[];
}

export default function ObservationLogger({ title, notes }: ObservationLoggerProps) {
  return (
    <div className="bg-white border border-[#e2e4e8] rounded-lg p-5 shadow-xs flex flex-col gap-3">
      <h3 className="text-sm font-semibold text-[#1e2022] flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#3b6280]" />
        Lab Notebook :: {title}
      </h3>
      <ul className="space-y-1.5 pl-4 list-disc text-xs text-[#64748b] leading-relaxed">
        {notes.map((note, idx) => (
          <li key={idx}>{note}</li>
        ))}
      </ul>
    </div>
  );
}
