import { Message } from "./types/messagesTypes";
import {notifyClients} from "./notifyClients";

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

    if (this.messages.length >= 9) {
      this.messages.shift();
      notifyClients("message_deleted");
    }

    this.messages.push(newMessage);
    notifyClients("message_added", { message: newMessage });
    return newMessage;
  }

  public validateMessage(content: string) {
  }

  public getAllMessages() {
    return this.messages;
  }
}

export const messageManager = new MessageManager();
