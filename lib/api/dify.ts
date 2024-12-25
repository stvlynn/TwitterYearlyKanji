import { DifyResponse } from './types';
import { API_CONFIG } from './config';
import { fetchWithTimeout, handleResponse } from './fetch';

export async function generateKanji(userId: string): Promise<DifyResponse> {
  if (!API_CONFIG.BASE_URL || !API_CONFIG.API_KEY) {
    throw new Error('Missing API configuration');
  }

  const userLanguage = typeof navigator !== 'undefined' ? navigator.language : 'en-US';

  try {
    const response = await fetchWithTimeout(
      `${API_CONFIG.BASE_URL}/workflows/run`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_CONFIG.API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: {
            lang: userLanguage,
            user_id: userId,
          },
          response_mode: "blocking",
          user: userId,
        }),
      },
      API_CONFIG.TIMEOUT
    );

    return handleResponse<DifyResponse>(response);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`API Error: ${error.message}`);
    }
    throw new Error('An unexpected error occurred');
  }
}