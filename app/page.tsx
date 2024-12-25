"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Twitter, Loader2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TwitterIdInput } from "@/components/twitter-id-input";
import { generateKanji } from "@/lib/api/dify";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userId = formData.get("userId");
    if (userId) {
      try {
        setLoading(true);
        const response = await generateKanji(userId.toString());
        router.push(`/analyze?userId=${userId}&result=${encodeURIComponent(JSON.stringify(response.data.outputs))}`);
      } catch (error) {
        console.error('Error generating kanji:', error);
        setLoading(false);
      }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted flex items-center justify-center p-4 sm:p-8">
      <Card className="w-full max-w-none sm:max-w-[600px] md:max-w-[720px] lg:max-w-[920px] shadow-lg">
        <CardHeader className="space-y-2 px-6 pt-12 pb-8">
          <div className="flex items-center justify-center space-x-4">
            <Twitter className="h-12 w-12 sm:h-14 sm:w-14" />
            <CardTitle 
              className="text-4xl sm:text-5xl tracking-tight"
              style={{ 
                fontFamily: 'DOTMATRIX, monospace',
                letterSpacing: '0.1em',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)'
              }}
            >
              Twitter Yearly Kanji
            </CardTitle>
          </div>
          <p className="text-center text-base sm:text-lg text-muted-foreground mt-4">
            Generate your yearly kanji based on your tweets
          </p>
        </CardHeader>
        <CardContent className="p-8 space-y-8">
          <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto">
            <div className="space-y-2">
              <TwitterIdInput />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-black hover:bg-gray-800 rounded-xl h-14 text-xl transition-all"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                  Generating...
                </>
              ) : (
                'Generate Yearly Kanji'
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="px-8 pb-12">
          <Link 
            href="https://twi.am" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full max-w-2xl mx-auto"
          >
            <Button 
              variant="outline" 
              className="w-full rounded-xl h-14 text-xl hover:bg-gray-100 transition-all border-2"
            >
              More Analysis
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}