"use server";

import { db } from "@/db";
import { rsvp } from "@/db/schema/rsvp-schema";
import { desc, eq } from "drizzle-orm";

function generateUserId(length = 8) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let userId = '';
  for (let i = 0; i < length; i++) {
    userId += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return userId;
}

/**
 * Fetches all prompts from the database
 * Returns rsvps sorted by creation date (newest first)
 */
export async function getRSVPs() {
  try {
    const allRSVPs = await db.select().from(rsvp).orderBy(desc(rsvp.created_at));
    return allRSVPs;
  } catch (error) {
    console.error("Error fetching rsvps:", error);
    throw new Error("Failed to fetch rsvps");
  }
}

/**
 * Creates a new prompt in the database
 * @param name - The full name of the person
 * @param attendance - Whether the person will attend
 * @param guests - Number of guests
 * @param alcohol_preferences - Alcohol preferences
 * @returns The newly created prompt
 */
export async function createRSVP({ name, attendance, guests, alcohol_preferences }: { name: string; attendance: string; guests: number; alcohol_preferences: string[] }) {
  try {

    // Insert the new prompt
    const [newPrompt] = await db
      .insert(rsvp)
      .values({
        name,
        user_id: generateUserId(),
        attendance,
        guests,
        alcohol_preferences
      })
      .returning();

    return newPrompt;
  } catch (error) {
    console.error("Error creating prompt:", error);
    throw new Error(`Failed to create prompt: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Updates an existing rsvp in the database
 * @param id - The ID of the rsvp to update
 * @param name - The new full name
 * @param attendance - The new attendance status
 * @param guests - The new number of guests
 * @param alcohol_preferences - The new alcohol preferences
 * @returns The updated rsvp
 */
export async function updateRSVP({ id, name, attendance, guests, alcohol_preferences }: { id: number; name: string; attendance: string; guests: number; alcohol_preferences: string[] }) {
  try {

    // Update the prompt
    const [updatedRSVP] = await db
      .update(rsvp)
      .set({
        name,
        attendance,
        guests,
        alcohol_preferences
      })
      .where(eq(rsvp.id, id))
      .returning();

    if (!updatedRSVP) {
      throw new Error("Prompt not found");
    }

    return updatedRSVP;
  } catch (error) {
    console.error("Error updating prompt:", error);
    throw new Error("Failed to update prompt");
  }
}

/**
 * Deletes a rsvp from the database
 * @param id - The ID of the rsvp to delete
 * @returns The deleted rsvp
 */
export async function deleteRSVP(id: number) {
  try {

    // Delete the prompt
    const [deletedRSVP] = await db.delete(rsvp).where(eq(rsvp.id, id)).returning();

    if (!deletedRSVP) {
      throw new Error("Prompt not found");
    }

    return deletedRSVP;
  } catch (error) {
    console.error("Error deleting prompt:", error);
    throw new Error("Failed to delete prompt");
  }
}
