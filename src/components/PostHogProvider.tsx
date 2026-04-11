import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

if (typeof window !== 'undefined') {
  const token = import.meta.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
  const host = import.meta.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com';
  
  if (token) {
    posthog.init(token, {
      api_host: host,
      person_profiles: 'always',
      defaults: '2026-01-30',
      capture_pageview: false // Handled manually below for React Router
    })
  }
}

/**
 * Component to handle virtual pageview tracking in React Router
 */
const PostHogPageView = () => {
  const location = useLocation();

  useEffect(() => {
    if (posthog && typeof window !== 'undefined') {
      posthog.capture('$pageview', {
        $current_url: window.location.href,
      });
    }
  }, [location]);

  return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  return (
    <PHProvider client={posthog}>
      <PostHogPageView />
      {children}
    </PHProvider>
  )
}
