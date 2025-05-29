CREATE TABLE IF NOT EXISTS "rsvp" (
	"id" SERIAL PRIMARY KEY,
	"name" TEXT NOT NULL,
	"attendance" TEXT NOT NULL,
	"guests" INTEGER NOT NULL,
	"menu_preferences" TEXT[],
	"alcohol_preferences" TEXT[],
	"created_at" TIMESTAMP NOT NULL DEFAULT now(),
	"updated_at" TIMESTAMP NOT NULL DEFAULT now()
);
