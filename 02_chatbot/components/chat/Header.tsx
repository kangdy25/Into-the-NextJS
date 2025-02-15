import React from "react";
import MobileMenu from "./MobileMenu";
import ModelSelect from "./ModelSelect";

const Header = () => {
  return (
    <div className="flex items-center p-2">
      {/* 모바일 메뉴 */}
      <MobileMenu />
      {/* 모델 선택 영역 */}
      <ModelSelect />
    </div>
  );
};

export default Header;
