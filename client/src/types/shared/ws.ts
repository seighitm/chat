export const WS_EVENTS = {
    MESSAGES: 'messages',
    MESSAGE_DELETED: 'message_deleted',
    MESSAGE_ADDED: "message_added"
}

export type WSEventType = typeof WS_EVENTS[keyof typeof WS_EVENTS];
