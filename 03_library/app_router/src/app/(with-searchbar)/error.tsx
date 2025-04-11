"use client";

import { useRouter } from "next/navigation";
import React, { startTransition, useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  const router = useRouter();
  useEffect(() => {
    console.error(error.message);
  }, [error]);

  return (
    <>
      <h2>Error 발생</h2>
      <button
        onClick={() => {
          startTransition(() => {
            router.refresh();
            reset();
          });
        }}
      >
        복구
      </button>
    </>
  );
};

export default Error;
