"use client";
import React, { ChangeEvent, useActionState, useEffect } from "react";
import FormCard from "./FormCard";
import Submit from "./Submit";
import toast from "react-hot-toast";
import FormMessage from "./FormMessage";
import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";
import { login } from "@/actions/login";
import { TLoginFormError } from "@/types/form";
import { LoginSchema } from "@/schemas/auth";
import { useFormValidate } from "@/hooks/useFormValidate";

const LoginForm = () => {
  const [error, action, isPending] = useActionState(login, undefined);
  const { errors, validateField } =
    useFormValidate<TLoginFormError>(LoginSchema);

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
      title="로그인"
      footer={{ label: "아직 계정이 없으신가요?", href: "/signup" }}
    >
      <form action={action} className="space-y-6">
        <div className="space-y-1">
          <Label htmlFor="email">이메일</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="example@example.com"
            onChange={handleChange}
            error={!!errors?.email}
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
            error={!!errors?.password}
          />
          {errors?.password && <FormMessage message={errors?.password[0]} />}
        </div>
        <Submit isPending={isPending} className="w-full">
          로그인
        </Submit>
      </form>
    </FormCard>
  );
};

export default LoginForm;
