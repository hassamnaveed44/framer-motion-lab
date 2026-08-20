"use client";

interface StageProps {
  moduleTitle: string;
  children: React.ReactNode;
}

export default function Stage({ moduleTitle, children }: StageProps) {
  return (
    <div className="bg-white border border-[#e2e4e8] rounded-lg p-8 shadow-xs flex-1 flex flex-col justify-between min-h-[420px] relative overflow-hidden">
      <div className="text-xs font-mono text-[#64748b] border-b border-[#e2e4e8] pb-3 mb-6 flex justify-between items-center">
        <span>Stage View :: [{moduleTitle}]</span>
        <span className="w-2 h-2 rounded-full bg-[#3b6280] animate-pulse" />
      </div>

      <div className="flex-1 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
