import Chat from "@/components/chat/Chat";
import { getMessageByConversation } from "@/data/conversation";

type Props = {
  params: {
    conversationId: string;
  };
};

async function ConversationPage({ params: { conversationId } }: Props) {
  const messages = await getMessageByConversation(conversationId);
  return <Chat initialMessages={messages} />;
}

export default ConversationPage;
