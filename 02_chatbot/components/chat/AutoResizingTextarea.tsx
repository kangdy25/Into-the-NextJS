"use client";
import React, { TextareaHTMLAttributes, useEffect, useRef } from "react";
import { Textarea } from "@/components/ui/textarea";

const AutoResizingTextarea = ({
  value,
  ...others
}: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "inherit";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);
  return (
    <Textarea
      value={value}
      ref={textareaRef}
      className="min-h-[20px] max-h-[200px]"
      {...others}
    />
  );
};

export default AutoResizingTextarea;
