import { pool } from "../lib/db.js";
import { clerk } from "../lib/auth.js";
import { posthog } from "../lib/analytics.js";
const db = process.env.NEON_POSTGRES_CONNECTION_STRING ? pool : null;
export async function listOrders(req) {
  const user = await clerk.users.getUser(req.userId);
  posthog.capture({ distinctId: user.id, event: "orders_listed" });
  return (await db.query("select * from orders where user_id = $1", [user.id])).rows;
}
