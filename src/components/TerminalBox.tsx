import { ReactNode } from 'react';

interface TerminalBoxProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export function TerminalBox({ children, title, className = '' }: TerminalBoxProps) {
  return (
    <div className={`border border-green-500/30 bg-black/80 backdrop-blur-sm rounded-lg overflow-hidden ${className}`}>
      {title && (
        <div className="bg-green-950/50 border-b border-green-500/30 px-4 py-2 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
          </div>
          <span className="text-green-400 text-sm font-mono ml-2">{title}</span>
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}
