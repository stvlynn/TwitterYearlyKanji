import { APIError } from './types';

export async function fetchWithTimeout(
  input: RequestInfo,
  init?: RequestInit,
  timeout = 60000
): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(input, {
      ...init,
      signal: controller.signal,
      // Ensure credentials are not sent
      credentials: 'omit',
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error('Request timeout');
    }
    throw error;
  }
}

export async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    let errorMessage = `HTTP error! status: ${response.status}`;
    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorMessage;
    } catch {
      // Ignore JSON parsing error
    }
    
    const error: APIError = {
      message: errorMessage,
      status: response.status,
    };
    throw error;
  }

  const data = await response.json();
  return data as T;
}