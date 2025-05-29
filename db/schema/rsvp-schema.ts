import { pgTable, serial, text, integer, timestamp } from "drizzle-orm/pg-core";

/**
 * Schema for the RSVP table
 * - id: Auto-incrementing primary key
 * - name: Имя и Фамилия (required)
 * - attendance: Присутствие (required, yes/no)
 * - guests: Количество гостей (required)
 * - menu_preference: Предпочтения по меню (single text field, optional)
 * - alcohol_preferences: Предпочтения по алкоголю (array of text, optional)
 * - created_at: Timestamp of when the RSVP was created
 * - updated_at: Timestamp of when the RSVP was last updated
 */
export const rsvp = pgTable("rsvp", {
  id: serial("id").primaryKey(),
  user_id: text("user_id").notNull(),
  name: text("name").notNull(),
  attendance: text("attendance").notNull(),
  guests: integer("guests").notNull(),
  menu_preference: text("menu_preference"),
  alcohol_preferences: text("alcohol_preferences").array(),
  created_at: timestamp("created_at").defaultNow().notNull(),
  updated_at: timestamp("updated_at").defaultNow().notNull(),
});

export type InsertRsvp = typeof rsvp.$inferInsert;
export type SelectRsvp = typeof rsvp.$inferSelect;
