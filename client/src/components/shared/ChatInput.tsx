import {ChangeEvent, FormEvent, useCallback, useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {sendMessage} from "@/apis/apiMessages.ts";
import {Button, TextField} from "@/components/UI";

const ChatInput = () => {
    const [messageInput, setMessageInput] = useState<string>("");

    const {mutate: sendMessageMutation, isPending: isPendingSendMessage} =
        useMutation({
            mutationFn: sendMessage,
        });

    const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const trimmedMessage = messageInput.trim();
        if (trimmedMessage) {
            sendMessageMutation({message: trimmedMessage});
            setMessageInput("");
        }
    };

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setMessageInput(e.target.value);
    }, []);

    return (
        <form onSubmit={handleSendMessage} className="flex w-full items-end gap-2">
            <TextField
                className="max-h-[77px] w-full"
                value={messageInput}
                onChange={handleChange}
                placeholder="Type your message..."
            />
            <Button type="submit" disabled={isPendingSendMessage}>
                Send
            </Button>
        </form>
    );
};

export default ChatInput;
