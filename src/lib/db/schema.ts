import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text, numeric } from 'drizzle-orm/sqlite-core';
import { generateId } from 'lucia';

export const usersTable = sqliteTable("users", {
  // default columns
  createdAt: text("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: text("updated_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
  id: text("id")
    .primaryKey()
    .$defaultFn(() => generateId(15)),
  passwordHash: text("passwordHash").notNull(),
  username: text("username").notNull(),
  // other user attributes
  name: text("name", {
    length: 255,
  }),
  lastName: text("last_name", {
    length: 255,
  }),
  email: text("email", {
    length: 255,
  }),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

export const sessionsTable = sqliteTable("session", {
  id: text("id").notNull().primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => usersTable.id),
  expiresAt: integer("expires_at").notNull(),
});

export type SelectSession = typeof sessionsTable.$inferSelect;

export const menusTable = sqliteTable('menus', {
  createdAt: text('created_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  userId: integer('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
});

export type InsertMenu = typeof menusTable.$inferInsert;
export type SelectMenu = typeof menusTable.$inferSelect;

export const menuItemsTable = sqliteTable('menu_items', {
  createdAt: text('created_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  price: numeric('price').notNull(),
  menuId: integer('menu_id')
    .notNull()
    .references(() => menusTable.id, { onDelete: 'cascade' }),
});

export type InsertMenuItem = typeof menuItemsTable.$inferInsert;
export type SelectMenuItem = typeof menuItemsTable.$inferSelect;

export const restaurantsTable = sqliteTable('restaurants', {
  createdAt: text('created_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
  id: integer('id').primaryKey(),
  name: text('name').unique().notNull(),
  description: text('description'),
  address: text('address'),
  phone: text('phone'),
  userId: integer('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
});

export type InsertRestaurant = typeof restaurantsTable.$inferInsert;
export type SelectRestaurant = typeof restaurantsTable.$inferSelect;