import { Message } from "./messagesTypes";

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
    }

    this.messages.push(newMessage);
    return newMessage;
  }

  public getAllMessages() {
    return this.messages;
  }
}

export const messageManager = new MessageManager();
