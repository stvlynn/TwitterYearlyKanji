import { getBrowserLanguage } from './utils/language';

export async function generateKanji(userId: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_DIFY_BASE_URL}/workflows/run`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_DIFY_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      inputs: {
        lang: getBrowserLanguage(),
        user_id: userId,
      },
      response_mode: 'blocking',
      user: userId,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to generate kanji');
  }

  return response.json();
}