# Google Analytics Setup Guide

## Overview
This project includes Google Analytics integration for tracking website traffic, user behavior, and engagement metrics.

## Setup Instructions

### 1. Create Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create an account and property for your website
3. Get your **Measurement ID** (starts with "G-")

### 2. Configure Environment Variables
Update `.env.local` file with your Google Analytics ID:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 3. Verify Installation
1. Start development server: `npm run dev`
2. Visit your website
3. Check Google Analytics Real-time reports
4. Verify data is being collected

## Features Implemented

### Automatic Tracking
- ✅ **Page Views** - Tracks all page visits
- ✅ **Scroll Depth** - Tracks 25%, 50%, 75%, 100% scroll milestones
- ✅ **Time on Page** - Tracks session duration
- ✅ **User Sessions** - Automatic session tracking

### Custom Event Tracking
- ✅ **Button Clicks** - Track engagement with buttons
- ✅ **External Links** - Track outbound link clicks
- ✅ **Form Submissions** - Track form interactions
- ✅ **Email Clicks** - Track contact engagement

## Usage Examples

### Track Button Clicks
```typescript
import { useAnalytics } from '@/hooks/use-analytics';

function MyComponent() {
  const { trackButton } = useAnalytics();
  
  return (
    <button onClick={() => trackButton('contact', 'hero')}>
      Contact Me
    </button>
  );
}
```

### Track External Links
```typescript
import { useAnalytics } from '@/hooks/use-analytics';

function MyComponent() {
  const { trackLink } = useAnalytics();
  
  return (
    <a 
      href="https://github.com/username" 
      onClick={() => trackLink('https://github.com/username', 'GitHub')}
    >
      GitHub
    </a>
  );
}
```

## Analytics Dashboard

### Key Metrics to Monitor
- **Page Views** - Most visited pages
- **User Engagement** - Time on site, bounce rate
- **Traffic Sources** - Where visitors come from
- **Device Analytics** - Mobile vs desktop usage
- **Geographic Data** - Visitor locations

### Custom Events in GA4
- `button_click` - Button interactions
- `external_link_click` - Outbound link clicks
- `scroll_depth` - Page engagement
- `time_on_page` - Session duration

## Privacy Considerations
- Analytics respects user privacy settings
- No personally identifiable information is collected
- Compliant with GDPR and privacy regulations
- Users can opt-out via browser settings

## Troubleshooting

### No Data Appearing
1. Check Measurement ID is correct
2. Verify `.env.local` file exists
3. Clear browser cache
4. Check browser console for errors

### Missing Events
1. Ensure analytics hook is imported
2. Check event tracking functions are called
3. Verify Google Analytics is loaded

## Files Modified
- `app/layout.tsx` - Added Google Analytics component
- `lib/analytics.ts` - Analytics utility functions
- `hooks/use-analytics.tsx` - React hook for analytics
- `app/page.tsx` - Implemented tracking on main page
- `.env.local` - Environment variables 