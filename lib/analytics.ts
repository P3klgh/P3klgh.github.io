// Google Analytics utility functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID!, {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('button_click', 'engagement', `${buttonName}${location ? `_${location}` : ''}`);
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submit', 'engagement', formName);
};

// Track external link clicks
export const trackExternalLink = (url: string, linkText?: string) => {
  trackEvent('external_link_click', 'engagement', linkText || url, undefined);
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', 'engagement', `${depth}%`, depth);
};

// Track time on page
export const trackTimeOnPage = (seconds: number) => {
  trackEvent('time_on_page', 'engagement', `${Math.round(seconds)}s`, Math.round(seconds));
}; 