import { Lucia } from "lucia";
import { DrizzleSQLiteAdapter } from "@lucia-auth/adapter-drizzle";
import { dev } from "$app/environment";
import { db } from "$lib/db/db.server";
import { sessionsTable, usersTable } from "$lib/db/schema";

const adapter = new DrizzleSQLiteAdapter(db, sessionsTable, usersTable); 

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      // set to `true` when using HTTPS
      secure: !dev
    }
  }
});

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
  }
}