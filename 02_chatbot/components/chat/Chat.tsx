"use client";
import React, { useEffect, useRef } from "react";
import Empty from "./Empty";
import Message from "./Message";
import AutoResizingTextarea from "./AutoResizingTextarea";
import { Button } from "../ui/button";
import { ArrowUp } from "lucide-react";
import { useChat, Message as TMessage } from "@ai-sdk/react";
import { useModelStore } from "@/store/model";
import { useParams, useRouter } from "next/navigation";
import { addMessages, createConversation } from "@/actions/conversations";
import { CHAT_ROUTES } from "@/constants/routes";
import { useUserStore } from "@/store/user";

type Props = {
  initialMessages?: TMessage[];
};

const Chat = ({ initialMessages }: Props) => {
  const router = useRouter();
  const params = useParams<{ conversationId: string }>();
  const user = useUserStore((state) => state.user);
  const { messages, setMessages, input, handleInputChange, handleSubmit } =
    useChat({
      onFinish: async (message) => {
        // param => conversationId가 없으면 새로운 대화 페이지
        if (!params.conversationId) {
          const conversation = await createConversation(input);
          await addMessages(conversation.id, input, message.content);

          router.push(`${CHAT_ROUTES.CONVERSATIONS}/${conversation.id}`);
        } else {
        }
        // param => conversationId가 있으면 기존 대화 페이지
        await addMessages(params.conversationId, input, message.content);
      },
    });
  const model = useModelStore((state) => state.model);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialMessages) setMessages(initialMessages);
  }, [initialMessages, setMessages]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex flex-col w-[80%] h-full mx-auto">
      {/* 채팅 영역 */}
      <div className="flex-1">
        {!params.conversationId && messages.length === 0 ? (
          <Empty />
        ) : (
          <>
            {messages.map((message) => (
              <Message
                key={message.id}
                name={user.name}
                content={message.content}
                role={message.role}
              />
            ))}
          </>
        )}
      </div>
      {/* 인풋 영역 */}
      <div className="pb-5 sticky bottom-0 bg-white">
        <form
          action=""
          className="flex justify-center items-center gap-4"
          onSubmit={(e) => handleSubmit(e, { data: { model } })}
        >
          <AutoResizingTextarea value={input} onChange={handleInputChange} />
          <Button type="submit" size="icon">
            <ArrowUp />
          </Button>
        </form>
      </div>
      <div ref={scrollRef}></div>
    </div>
  );
};

export default Chat;
