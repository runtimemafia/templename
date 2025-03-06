/**
 * Opens a URL in a new tab with secure window features
 * @param url The URL to open
 */
export const openExternalLink = (url: string): void => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  // Predefined URLs for common use cases
  export const EXTERNAL_URLS = {
    CHAT: 'https://chat.bookmypuja.app',

  } as const;