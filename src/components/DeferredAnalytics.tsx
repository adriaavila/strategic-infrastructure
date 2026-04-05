import { useEffect, useState, type ComponentType } from "react";

const GOOGLE_ANALYTICS_ID = "G-9XW18QES1F";

type WindowWithAnalytics = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
  cancelIdleCallback?: (handle: number) => void;
};

export const DeferredAnalytics = () => {
  const [AnalyticsComponent, setAnalyticsComponent] = useState<ComponentType | null>(null);

  useEffect(() => {
    if (!import.meta.env.PROD) {
      return;
    }

    const analyticsWindow = window as WindowWithAnalytics;
    let cancelled = false;
    let timeoutId: number | undefined;
    let idleId: number | undefined;

    const loadAnalytics = async () => {
      if (cancelled) {
        return;
      }

      if (!document.querySelector(`script[data-ga-id="${GOOGLE_ANALYTICS_ID}"]`)) {
        const script = document.createElement("script");
        script.async = true;
        script.dataset.gaId = GOOGLE_ANALYTICS_ID;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`;
        document.head.appendChild(script);

        analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
        analyticsWindow.gtag =
          analyticsWindow.gtag ||
          (((...args: unknown[]) => {
            analyticsWindow.dataLayer?.push(args);
          }) as (...args: unknown[]) => void);

        analyticsWindow.gtag("js", new Date());
        analyticsWindow.gtag("config", GOOGLE_ANALYTICS_ID);
      }

      const { Analytics } = await import("@vercel/analytics/react");

      if (!cancelled) {
        setAnalyticsComponent(() => Analytics);
      }
    };

    if (analyticsWindow.requestIdleCallback) {
      idleId = analyticsWindow.requestIdleCallback(() => {
        void loadAnalytics();
      }, { timeout: 2000 });
    } else {
      timeoutId = window.setTimeout(() => {
        void loadAnalytics();
      }, 1500);
    }

    return () => {
      cancelled = true;

      if (idleId !== undefined && analyticsWindow.cancelIdleCallback) {
        analyticsWindow.cancelIdleCallback(idleId);
      }

      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  return AnalyticsComponent ? <AnalyticsComponent /> : null;
};
