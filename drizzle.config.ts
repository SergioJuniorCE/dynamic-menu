import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
  schema: './src/lib/db/schema.ts',
  out: './migrations',
  driver: 'turso',
  dbCredentials: {
    url: process.env.SECRET_TURSO_DATABASE_URL!,
    authToken: process.env.SECRET_TURSO_AUTH_TOKEN!,
  },
} satisfies Config;