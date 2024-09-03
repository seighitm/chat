export type Message = {
    id: string;
    content: string;
    createdAt: string;
};
export type SendMessageRequest = {
    message: string;
};
export type SendMessageResponse = {
    data: Message;
};
export type GetMessagesResponse = {
    data: Message[];
};