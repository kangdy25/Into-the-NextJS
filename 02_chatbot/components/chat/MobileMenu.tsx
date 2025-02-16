"use client";

import {
  Sheet,
  SheetTitle,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from "./Sidebar";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";
import { useSheetStore } from "@/store/sheet";

const MobileMenu = ({ children }: { children: React.ReactNode }) => {
  const { open, setOpen } = useSheetStore((state) => ({
    open: state.open,
    setOpen: state.setOpen,
  }));
  return (
    <div className="md:hidden">
      <Sheet
        open={open}
        onOpenChange={(open) => {
          setOpen(open);
        }}
      >
        <SheetTrigger asChild>
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <VisuallyHidden>
            <SheetTitle>Menu</SheetTitle>
          </VisuallyHidden>
          {children}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
