import { db } from "@/db";
import { createClerkClient } from "@clerk/backend";
import { rsvp } from "../schema/rsvp-schema";

// Initialize Clerk client
if (!process.env.CLERK_SECRET_KEY) {
  throw new Error("CLERK_SECRET_KEY is required");
}
const clerk = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });


/**
 * Test users to create
 */
const testUsers = [
  {
    username: 'sasha',
    emailAddress: ['sasha222@gmail.com'],
    password: 'Ac$222haUZUp7sAFy',
  },
];

/**
 * Base prompts data
 */
  const baseRSVPs = [
  {
    name: "Александр и Марина",
    attendance: "Да",
    guests: 1,
    menu_preference: "Мясо",
    alcohol_preferences: ["Пиво", "Вино", "Водка"]
  },
];

/**
 * Main seed function
 */
async function seed() {
  try {
    console.log("🌱 Starting seeding...");

    // Create test users
    console.log("Creating test users...");
    const createdUsers = await Promise.all(testUsers.map((userData) => clerk.users.createUser(userData)));
    console.log(
      "Created test users:",
      createdUsers.map((u) => u.id)
    );

    // Clear existing data
    await db.delete(rsvp);
    console.log("Cleared existing rsvps");

    // Distribute prompts among users (3 prompts each)
    const rsvpsWithUsers = baseRSVPs.map((rsvp, index) => ({
      ...rsvp,
      user_id: createdUsers[Math.floor(index / 3)].id // Assign every 3 rsvps to each user
    }));

    // Insert seed data
    await db.insert(rsvp).values(rsvpsWithUsers);
    console.log("Inserted seed rsvps");

    console.log("✅ Seeding completed successfully");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    throw error;
  } finally {
    await db.$client.end();
  }
}

// Run the seed function
seed();