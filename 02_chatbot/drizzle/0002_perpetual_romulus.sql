ALTER TABLE "conversation" RENAME COLUMN "user_id" TO "userId";--> statement-breakpoint
ALTER TABLE "conversation" DROP CONSTRAINT "conversation_user_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "conversation" ADD CONSTRAINT "conversation_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;