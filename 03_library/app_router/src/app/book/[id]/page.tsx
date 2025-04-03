import React from "react";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <div>Book / {id} 페이지입니다.</div>;
};

export default Page;
