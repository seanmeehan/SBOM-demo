// Postgres pool shared by every route
import pg from "pg";
export const pool = new pg.Pool({ connectionString: process.env.NEON_POSTGRES_CONNECTION_STRING });
