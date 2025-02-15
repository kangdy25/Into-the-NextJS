import Header from "@/components/chat/Header";
import Sidebar from "@/components/chat/Sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:flex h-full">
      {/* 사이드바 영역 */}
      <div className="hidden md:block w-[300px]">
        <Sidebar />
      </div>
      {/* 헤더, 채팅 영역 */}
      <div className="flex flex-col flex-1 h-full overflow-y-auto">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default layout;
