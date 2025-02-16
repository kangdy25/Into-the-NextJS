import Header from "@/components/chat/Header";
import Sidebar from "@/components/chat/Sidebar";
import UserProvider from "@/components/chat/UserProvider";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserProvider>
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
    </UserProvider>
  );
};

export default layout;
