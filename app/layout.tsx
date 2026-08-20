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
      <body className="bg-[#fcfbf9] text-[#1e2022] antialiased selection:bg-[#3b6280]/15 selection:text-[#3b6280]">
        <div className="min-h-screen flex flex-col border-t-4 border-[#3b6280]">
          {/* Header Bar */}
          <header className="border-b border-[#e2e4e8] bg-white px-6 py-4 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#3b6280]" />
              <h1 className="font-semibold text-lg tracking-tight text-[#1e2022]">
                Framer Motion Lab
              </h1>
              <span className="text-xs px-2 py-0.5 rounded bg-[#f2f4f7] text-[#64748b] font-mono border border-[#e2e4e8]">
                v12.x
              </span>
            </div>
            <nav className="flex items-center gap-6 text-sm text-[#64748b]">
              <span className="hover:text-[#1e2022] transition-colors cursor-pointer">
                Docs Reference
              </span>
              <span className="hover:text-[#1e2022] transition-colors cursor-pointer font-medium text-[#3b6280]">
                Playground Stage
              </span>
            </nav>
          </header>

          {/* Main Container */}
          <main className="flex-1 max-w-7xl w-full mx-auto p-6">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-[#e2e4e8] bg-white py-4 px-6 text-center text-xs text-[#64748b]">
            Framer Motion Experimental Lab • Built for deep conceptual understanding
          </footer>
        </div>
      </body>
    </html>
  );
}
