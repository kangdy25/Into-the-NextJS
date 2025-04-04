import { ReactNode } from "react";
import SearchBar from "./searchBar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <SearchBar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
