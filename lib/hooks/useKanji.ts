import { useState, useEffect } from 'react';
import { DifyResponse } from '../api/types';
import { generateKanji } from '../api/dify';

interface UseKanjiResult {
  loading: boolean;
  error: string | null;
  result: DifyResponse['data']['outputs'] | null;
}

export function useKanji(userId: string | null): UseKanjiResult {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<DifyResponse['data']['outputs'] | null>(null);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      setError('No user ID provided');
      return;
    }

    const fetchKanji = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await generateKanji(userId);
        setResult(data.data.outputs);
      } catch (error) {
        console.error('Error generating kanji:', error);
        setError(error instanceof Error ? error.message : 'Failed to generate kanji');
      } finally {
        setLoading(false);
      }
    };

    fetchKanji();
  }, [userId]);

  return { loading, error, result };
}