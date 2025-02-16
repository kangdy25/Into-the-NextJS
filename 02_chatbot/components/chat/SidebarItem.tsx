"use client";

import Link from "next/link";
import { ChangeEvent, ReactNode, useEffect, useRef, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis, Pencil, Trash } from "lucide-react";
import { useParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useSheetStore } from "@/store/sheet";
import { MouseEvent, KeyboardEvent } from "react";
import toast from "react-hot-toast";
import {
  deleteConversation,
  updateConversation,
} from "@/actions/conversations";
import { useModalStore } from "@/store/modal";
import ModalFooter from "../modal/ModalFooter";
import { useRouter } from "next/navigation";
import { BASE_URL } from "@/constants/routes";

type Props = {
  item: {
    id: string;
    href: string;
    icon: ReactNode;
    label: string;
  };
};

const SidebarItem = ({ item }: Props) => {
  const { id, href, icon, label } = item;
  const pathname = usePathname();
  const params = useParams<{ conversationId: string }>();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [value, setValue] = useState(item.label);
  const setOpen = useSheetStore((state) => state.setOpen);
  const { openModal, closeModal } = useModalStore((state) => ({
    openModal: state.openModal,
    closeModal: state.closeModal,
  }));
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      await handleBlur();
    }
  };

  const handleBlur = async () => {
    setIsEditMode(false);
    if (value !== label) {
      try {
        await updateConversation(id, value);
      } catch (err) {
        console.log(err);
        toast.error("이름 수정에 실패했습니다.");
      }
    }
  };

  const clickEdit = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsEditMode(true);
    setIsMenuOpen(false);
  };

  const handleDelete = async () => {
    try {
      await deleteConversation(id);
      toast.success("삭제에 성공했습니다.");

      if (params.conversationId === id) {
        router.push(BASE_URL);
      }

      closeModal();
    } catch (err) {
      console.log(err);
      toast.error("삭제에 실패했습니다.");
    }
  };

  const clickDelete = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();

    openModal({
      title: "정말 삭제하시겠습니까?",
      description: "삭제 후 데이터는 복구할 수 없습니다.",
      footer: <ModalFooter onCancel={closeModal} onConfirm={handleDelete} />,
    });
  };

  useEffect(() => {
    if (isEditMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditMode]);

  return (
    <Link
      href={href}
      scroll={false}
      className={cn(
        "flex items-center justify-between text-sm p-3 group hover:text-white hover:bg-white/10 rounded-lg",

        isMenuOpen || pathname === href
          ? "text-white bg-white/10"
          : "text-zinc-400",
      )}
      onClick={() => setOpen(false)}
    >
      {/* label 영역 */}
      <div className="flex items-center gap-2">
        {icon}{" "}
        {isEditMode ? (
          <input
            value={value}
            onChange={handleChange}
            onClick={(e) => e.preventDefault()}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            ref={inputRef}
            className="bg-transparent border border-zinc-400 rounded-lg px-2 py-1"
          />
        ) : (
          <div className="w-[180px] truncate">{label}</div>
        )}
      </div>

      {/* dropdown 영역 */}
      {id !== "new" && (
        <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <DropdownMenuTrigger asChild>
            <div onClick={handleMenu}>
              <Ellipsis
                className={cn(
                  "group-hover:block text-gray-400 hover:text-white",
                  isMenuOpen ? "block text-white" : "md:hidden text-gray-400",
                )}
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="gap-2" onClick={clickEdit}>
              <Pencil size={18} />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2" onClick={clickDelete}>
              <Trash size={18} />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </Link>
  );
};

export default SidebarItem;
