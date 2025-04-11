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
      <h2>검색 과정에서 오류가 발생했습니다.</h2>
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
