import React from "react";
import MobileMenu from "./MobileMenu";
import ModelSelect from "./ModelSelect";
import { Sidebar } from "lucide-react";

const Header = () => {
  return (
    <div className="flex items-center p-2 sticky top-0 bg-white z-10">
      {/* 모바일 메뉴 */}
      <MobileMenu>
        <Sidebar />
      </MobileMenu>
      {/* 모델 선택 영역 */}
      <ModelSelect />
    </div>
  );
};

export default Header;
