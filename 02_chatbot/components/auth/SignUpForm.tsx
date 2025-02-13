"use client";
import React, { ChangeEvent, useActionState, useEffect } from "react";
import FormCard from "./FormCard";
import Submit from "./Submit";
import toast from "react-hot-toast";
import FormMessage from "./FormMessage";
import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";
import { signUp } from "@/actions/signup";
import { TSignUpFormError } from "@/types/form";
import { SignUpSchema } from "@/schemas/auth";
import { useFormValidate } from "@/hooks/useFormValidate";

const SignUpForm = () => {
  const [error, action, isPending] = useActionState(signUp, undefined);
  const { errors, validateField } =
    useFormValidate<TSignUpFormError>(SignUpSchema);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    validateField(name, value);
  };

  useEffect(() => {
    if (error?.errorMessage) {
      toast.error(error.errorMessage);
    }
  }, [error]);

  return (
    <FormCard
      title="회원가입"
      footer={{ label: "이미 계정이 있으신가요?", href: "/login" }}
    >
      <form action={action} className="space-y-6">
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
          <Label htmlFor="email">이메일</Label>
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
