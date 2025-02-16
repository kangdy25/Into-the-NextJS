import { Toaster } from "react-hot-toast";
import "./globals.css";
import Modal from "@/components/modal/Modal";

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body>
        <Modal />
        <Toaster />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
