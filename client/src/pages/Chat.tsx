import {useCallback, useEffect} from "react";
import {useWsStore} from "@/store/wsStores";
import {useQueryClient} from "@tanstack/react-query";
import {Message} from "@/types/models/messages.ts";
import {WS_EVENTS, WSEventType} from "@/types/shared/ws.ts";
import {ChatInput, Messages} from "@/components/shared";
import {QueryKeys} from "@/types/shared/reactQuery.ts";

const Chat = () => {
    const {ws} = useWsStore();
    const queryClient = useQueryClient();

    const handleWebSocketMessage = useCallback(
        async (event: MessageEvent) => {
            const data: {
                messages?: Message[];
                message?: Message;
                type: WSEventType;
            } = JSON.parse(event.data);

            switch (data.type) {
                case WS_EVENTS.MESSAGES:
                    queryClient.setQueryData([QueryKeys.ALL_MESSAGES], data.messages);
                    break;

                case WS_EVENTS.MESSAGE_DELETED:
                    await queryClient.cancelQueries({queryKey: [QueryKeys.ALL_MESSAGES]});
                    queryClient.setQueryData(
                        [QueryKeys.ALL_MESSAGES],
                        (oldMessagesData: {
                            data: Message[]
                        }) => {
                            oldMessagesData.data.shift();
                            return oldMessagesData;
                        },
                    );
                    break;

                case WS_EVENTS.MESSAGE_ADDED:
                    await queryClient.cancelQueries({queryKey: [QueryKeys.ALL_MESSAGES]});
                    queryClient.setQueryData(
                        [QueryKeys.ALL_MESSAGES],
                        (oldMessagesData: {
                            data: Message[]
                        }) => ({
                            ...oldMessagesData,
                            data: [...oldMessagesData.data, data.message],
                        }),
                    );
                    break;

                default:
                    break;
            }
        },
        [queryClient, ws],
    );

    useEffect(() => {
        if (ws) {
            ws.onmessage = handleWebSocketMessage;
        }

        return () => ws?.close();
    }, [ws, handleWebSocketMessage]);

    return (
        <main className="m-5 flex h-[calc(100vh-2.5rem)] flex-col justify-between border-2 border-border p-5 shadow-xl">
            <section className="mb-auto">
                <Messages/>
            </section>
            <section className="mt-auto">
                <ChatInput/>
            </section>
        </main>
    );
};

export default Chat;
