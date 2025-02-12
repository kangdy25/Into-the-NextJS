"use client";
import React, { ChangeEvent } from "react";
import FormCard from "./FormCard";
import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";
import Submit from "./Submit";
import { TSignUpFormError } from "@/types/form";
import { SignUpSchema } from "@/schemas/auth";

import { useFormValidate } from "@/hooks/useFormValidate";
import FormMessage from "./FormMessage";

const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  const { name, value } = event.target;
};

const SignUpForm = () => {
  const { errors, validateField } =
    useFormValidate<TSignUpFormError>(SignUpSchema);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    validateField(name, value);
  };
  console.log("errors", errors);

  return (
    <FormCard
      title="회원가입"
      footer={{ label: "이미 계정이 있으신가요?", href: "/login" }}
    >
      <form className="space-y-6">
        <div className="space-y-1">
          <Label htmlFor="name">이름</Label>
          <Input
            id="name"
            name="name"
            placeholder="이름을 입력해주세요"
            onChange={handleChange}
            error={!!errors?.name}
          />
          {errors?.name && <FormMessage message={errors?.name[0]} />}
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">이메알</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="example@example.com"
            onChange={handleChange}
            error={!!errors?.name}
          />
          {errors?.email && <FormMessage message={errors?.email[0]} />}
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">비밀번호</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="**********"
            onChange={handleChange}
            error={!!errors?.name}
          />
          {errors?.password && <FormMessage message={errors?.password[0]} />}
        </div>
        <Submit className="w-full">가입하기</Submit>
      </form>
    </FormCard>
  );
};

export default SignUpForm;
