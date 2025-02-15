import React from "react";
import Image from "next/image";

const Empty = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Image src="/logo.png" alt="empty" width={50} height={50} />
      <h3 className="text-2xl font-bold mt-2 md:text-xl">
        무엇을 도와드릴까요?
      </h3>
    </div>
  );
};

export default Empty;
