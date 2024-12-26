import { cn } from "@/lib/utils";

interface KanjiDisplayProps {
  kanji: string;
  katakana: string;
  romaji: string;
}

export function KanjiDisplay({ kanji, katakana, romaji }: KanjiDisplayProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {/* 田字格背景和书法字 */}
      <div className="relative w-60 h-60">
        {/* 背景和田字格 */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 240 240">
          {/* 灰色背景 */}
          <defs>
            <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f3f4f6" />
              <stop offset="100%" stopColor="#e5e7eb" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="240" height="240" fill="url(#bg-gradient)" />
          
          {/* 外框 */}
          <rect x="10" y="10" width="220" height="220" fill="none" stroke="#666" strokeWidth="2"/>
          
          {/* 横线 */}
          <line x1="10" y1="120" x2="230" y2="120" stroke="#666" strokeWidth="1"/>
          
          {/* 竖线 */}
          <line x1="120" y1="10" x2="120" y2="230" stroke="#666" strokeWidth="1"/>
          
          {/* 对角线 */}
          <line x1="10" y1="10" x2="230" y2="230" stroke="#666" strokeWidth="1"/>
          <line x1="230" y1="10" x2="10" y2="230" stroke="#666" strokeWidth="1"/>
        </svg>
        
        {/* 书法字 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span 
            className="text-[180px] leading-none"
            style={{
              fontFamily: "'Noto Serif JP', serif",
              writingMode: 'horizontal-tb'
            }}
          >
            {kanji}
          </span>
        </div>
      </div>
      
      {/* 读音 */}
      <div className="text-center space-y-1">
        <p className="text-xl font-medium">{katakana}</p>
        <p className="text-sm text-muted-foreground">({romaji})</p>
      </div>
    </div>
  );
}