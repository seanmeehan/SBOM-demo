// Product analytics
import { PostHog } from "posthog-node";
export const posthog = new PostHog(process.env.POSTHOG_ANALYTICS_API_KEY, { host: process.env.POSTHOG_ANALYTICS_HOST });
