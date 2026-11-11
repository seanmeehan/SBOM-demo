// Clerk session verification middleware
import { createClerkClient } from "@clerk/backend";
const envs = JSON.parse(process.env.CLERK_ENVIRONMENTS || "{}");
export const clerk = createClerkClient({ secretKey: envs.development?.secret_key });
export const appId = process.env.CLERK_APPLICATION_ID;
