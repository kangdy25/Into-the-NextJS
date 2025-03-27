import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import SearchableLayout from "@/components/searchable-layout";

const Page = () => {
  const router = useRouter();
  const { q } = router.query;

  return <h1>Search {q}</h1>;
};

export default Page;

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
