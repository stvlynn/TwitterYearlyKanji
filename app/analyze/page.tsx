"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader } from "@/components/ui/card";
import { KanjiDisplay } from "@/components/kanji-display";
import { KanjiDetails } from "@/components/kanji-details";
import { ShareCard } from "@/components/share-card";
import { DifyResponse } from "@/lib/api/types";

export default function AnalyzePage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const userId = searchParams.get("userId");
  const resultParam = searchParams.get("result");
  
  let result: DifyResponse['data']['outputs'] | null = null;
  try {
    if (resultParam) {
      result = JSON.parse(decodeURIComponent(resultParam));
    }
  } catch (error) {
    console.error('Error parsing result:', error);
  }

  if (!userId || !result) {
    router.push("/");
    return null;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => router.push("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <ShareCard>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column - Kanji Display */}
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-2">@{userId}</h1>
                <p className="text-muted-foreground">Your Yearly Kanji</p>
              </div>
              <div className="flex items-center justify-center">
                <KanjiDisplay
                  kanji={result.kanji}
                  katakana={result.katakana}
                  romaji={result.romaji}
                />
              </div>
            </div>

            {/* Right Column - Details */}
            <div>
              <KanjiDetails
                explanation={result.explaination}
                reason={result.reason}
              />
            </div>
          </div>
        </ShareCard>
      </div>
    </main>
  );
}