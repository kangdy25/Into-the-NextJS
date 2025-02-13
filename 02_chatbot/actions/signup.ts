"use server";
import db from "@/db";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "@/data/user";
import { user } from "@/db/schema";
import { SignUpSchema } from "@/schemas/auth";
import { redirect } from "next/navigation";

export const signUp = async (_: any, formData: FormData) => {
  // 1. Validate Fields
  const validatedFields = SignUpSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errorMessage: "잘못된 입력값이 있습니다.",
    };
  }

  // Check Existing
  const { name, email, password } = validatedFields.data;

  try {
    const existingUser = await getUserByEmail(email);

    if (existingUser) return { errorMessage: "이미 존재하는 사용자입니다." };

    const hashedPassword = await bcrypt.hash(password, 10);

    // insert DB
    await db.insert(user).values({ name, email, password: hashedPassword });
  } catch (error) {
    console.error("error", error);
    return { errorMessage: "문제가 발생했습니다." };
  }
  redirect("/login");
};
