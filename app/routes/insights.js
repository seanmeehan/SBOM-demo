import { summarise } from "../lib/ai.js";
import { pool } from "../lib/db.js";
export async function weeklyInsights() {
  const { rows } = await pool.query("select * from orders where created_at > now() - interval '7 days'");
  return summarise(JSON.stringify(rows));
}
