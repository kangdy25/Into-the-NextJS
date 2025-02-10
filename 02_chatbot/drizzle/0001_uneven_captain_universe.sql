ALTER TABLE "conversation" RENAME COLUMN "author_id" TO "user_id";--> statement-breakpoint
ALTER TABLE "conversation" DROP CONSTRAINT "conversation_author_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "message" ADD COLUMN "content" text;--> statement-breakpoint
ALTER TABLE "message" ADD COLUMN "role" text;--> statement-breakpoint
ALTER TABLE "message" ADD COLUMN "conversationId" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "message" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "message" ADD COLUMN "updated_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "conversation" ADD CONSTRAINT "conversation_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "message" ADD CONSTRAINT "message_conversationId_conversation_id_fk" FOREIGN KEY ("conversationId") REFERENCES "public"."conversation"("id") ON DELETE cascade ON UPDATE no action;