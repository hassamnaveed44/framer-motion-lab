import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Framer Motion Lab | Animation Playground",
  description: "A hands-on experimental lab to test and understand Framer Motion capabilities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#fcfbf9] text-[#1e2022] antialiased selection:bg-[#3b6280]/15 selection:text-[#3b6280] overflow-x-hidden">
        <div className="min-h-screen flex flex-col border-t-4 border-[#3b6280]">
          {/* Responsive Header Bar */}
          <header className="border-b border-[#e2e4e8] bg-white px-4 sm:px-6 py-3.5 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3b6280] shrink-0" />
              <h1 className="font-semibold text-base sm:text-lg tracking-tight text-[#1e2022]">
                Framer Motion Lab
              </h1>
              <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded bg-[#f2f4f7] text-[#64748b] font-mono border border-[#e2e4e8]">
                v12.x
              </span>
            </div>
            
            <nav className="flex items-center gap-4 text-xs sm:text-sm text-[#64748b]">
              <span className="hidden sm:inline hover:text-[#1e2022] transition-colors cursor-pointer">
                Docs Reference
              </span>
              <span className="hover:text-[#1e2022] transition-colors font-medium text-[#3b6280]">
                Playground Stage
              </span>
            </nav>
          </header>

          {/* Main Container with responsive padding */}
          <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 overflow-x-hidden">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-[#e2e4e8] bg-white py-3.5 px-4 sm:px-6 text-center text-[11px] sm:text-xs text-[#64748b]">
            Framer Motion Experimental Lab • Built for deep conceptual understanding
          </footer>
        </div>
      </body>
    </html>
  );
}
