import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1>Search Bar</h1>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
