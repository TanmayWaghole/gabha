"use client";

import { useCallback } from "react";

declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

export const useGoogleAnalytics = () => {
  const trackEvent = useCallback(
    (action: string, category: string, label?: string, value?: number) => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", action, {
          event_category: category,
          event_label: label,
          value: value,
        });
      }
    },
    []
  );

  const trackPageView = useCallback((url: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
        page_path: url,
      });
    }
  }, []);

  const trackButtonClick = useCallback(
    (buttonName: string, location: string) => {
      trackEvent("button_click", "engagement", buttonName, undefined);
    },
    [trackEvent]
  );

  const trackFormSubmission = useCallback(
    (formName: string, success: boolean) => {
      trackEvent("form_submit", "engagement", formName, success ? 1 : 0);
    },
    [trackEvent]
  );

  const trackScroll = useCallback(
    (section: string) => {
      trackEvent("scroll", "engagement", section);
    },
    [trackEvent]
  );

  return {
    trackEvent,
    trackPageView,
    trackButtonClick,
    trackFormSubmission,
    trackScroll,
  };
};
