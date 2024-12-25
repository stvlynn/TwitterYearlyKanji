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
        {/* 田字格背景 */}
        <div className="absolute inset-0 border-2 border-gray-300">
          <div className="absolute inset-0 flex">
            <div className="w-1/2 border-r border-gray-300"></div>
          </div>
          <div className="absolute inset-0 flex flex-col">
            <div className="h-1/2 border-b border-gray-300"></div>
          </div>
          {/* 对角线 */}
          <div className="absolute inset-0" style={{
            background: `
              linear-gradient(to top right, transparent calc(50% - 1px), rgba(209, 213, 219, 1) calc(50% - 1px), rgba(209, 213, 219, 1) calc(50% + 1px), transparent calc(50% + 1px)),
              linear-gradient(to top left, transparent calc(50% - 1px), rgba(209, 213, 219, 1) calc(50% - 1px), rgba(209, 213, 219, 1) calc(50% + 1px), transparent calc(50% + 1px))
            `
          }}></div>
        </div>
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