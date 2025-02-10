import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config(); // 환경 변수 로드
export default defineConfig({
  dialect: "postgresql",
  schema: "./db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
