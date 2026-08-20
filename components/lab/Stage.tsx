"use client";

interface StageProps {
  moduleTitle: string;
  children: React.ReactNode;
}

export default function Stage({ moduleTitle, children }: StageProps) {
  return (
    <div className="bg-white border border-[#e2e4e8] rounded-lg p-4 sm:p-8 shadow-xs flex-1 flex flex-col justify-between min-h-[360px] sm:min-h-[420px] relative overflow-hidden">
      <div className="text-[11px] sm:text-xs font-mono text-[#64748b] border-b border-[#e2e4e8] pb-3 mb-4 sm:mb-6 flex justify-between items-center">
        <span className="truncate pr-2">Stage View :: [{moduleTitle}]</span>
        <span className="w-2 h-2 rounded-full bg-[#3b6280] animate-pulse shrink-0" />
      </div>

      <div className="flex-1 flex items-center justify-center w-full overflow-x-hidden">
        {children}
      </div>
    </div>
  );
}
