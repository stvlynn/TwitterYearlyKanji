export function getBrowserLanguage(): string {
  if (typeof navigator === 'undefined') return 'en-US';
  
  // Get the browser's language with region code
  const browserLang = navigator.language || 'en-US';
  
  // Ensure the format is correct (e.g., 'en-US', 'ja-JP', 'zh-CN')
  const [lang, region] = browserLang.split('-');
  if (!region) {
    // If no region is specified, add default regions for common languages
    switch (lang.toLowerCase()) {
      case 'en': return 'en-US';
      case 'ja': return 'ja-JP';
      case 'zh': return 'zh-CN';
      default: return `${lang}-${lang.toUpperCase()}`;
    }
  }
  
  return browserLang;
}