import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { 
  trackPageView, 
  trackScrollDepth, 
  trackTimeOnPage,
  trackButtonClick,
  trackExternalLink 
} from '@/lib/analytics';

export function useAnalytics() {
  const pathname = usePathname();
  const startTime = useRef<number>(Date.now());
  const scrollDepthTracked = useRef<Set<number>>(new Set());

  // Track page views
  useEffect(() => {
    trackPageView(pathname);
    startTime.current = Date.now();
    scrollDepthTracked.current.clear();
  }, [pathname]);

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      // Track at 25%, 50%, 75%, and 100%
      const milestones = [25, 50, 75, 100];
      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && !scrollDepthTracked.current.has(milestone)) {
          trackScrollDepth(milestone);
          scrollDepthTracked.current.add(milestone);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track time on page when leaving
  useEffect(() => {
    const handleBeforeUnload = () => {
      const timeSpent = (Date.now() - startTime.current) / 1000;
      if (timeSpent > 10) { // Only track if spent more than 10 seconds
        trackTimeOnPage(timeSpent);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  // Enhanced button click tracking
  const trackButton = (buttonName: string, location?: string) => {
    trackButtonClick(buttonName, location);
  };

  // Enhanced external link tracking
  const trackLink = (url: string, linkText?: string) => {
    trackExternalLink(url, linkText);
  };

  return {
    trackButton,
    trackLink,
  };
} 