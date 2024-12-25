export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_DIFY_BASE_URL?.replace('http:', 'https:'),
  API_KEY: process.env.NEXT_PUBLIC_DIFY_API_KEY,
  TIMEOUT: 180000, // 180 seconds
} as const;