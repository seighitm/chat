import { notifyClients } from "./notifyClients";
import { Message } from "../types/messagesTypes";
import { messageSchema } from "../validation/messagesSchema";
import { MAX_MESSAGES } from "./constants";

export class MessageManager {
  private messages: Message[] = [];
  private messageId: number = 0;

  constructor(initialMessageId: number = 0) {
    this.messageId = initialMessageId;
  }

  public createMessage(content: string): Message {
    const newMessage: Message = {
      id: this.messageId++,
      content,
      createdAt: new Date().toISOString(),
    };

    if (this.messages.length >= MAX_MESSAGES) {
      this.messages.shift();
      notifyClients("message_deleted");
    }

    this.messages.push(newMessage);
    notifyClients("message_added", { message: newMessage });
    return newMessage;
  }

  public validateMessage(content: string) {
    return messageSchema.parse({ content });
  }

  public getAllMessages() {
    return this.messages;
  }
}

export const messageManager = new MessageManager();
