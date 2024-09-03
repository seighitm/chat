import {GetMessagesResponse, SendMessageRequest, SendMessageResponse} from "@/types/models/messages.ts";

const fetchFromApi = async (endpoint: string, options: RequestInit): Promise<any> => {
    try {
        const response = await fetch(`${import.meta.env.VITE_SERVER_URL}${endpoint}`, options);
        return response.json();
    } catch (error) {
        console.error(`Failed to fetch ${endpoint}:`, error);
        return null;
    }
};

export const getMessages = async (): Promise<GetMessagesResponse | null> => {
    return fetchFromApi('/messages', {method: 'GET'});
};

export const sendMessage = async ({message}: SendMessageRequest): Promise<SendMessageResponse | null> => {
    return fetchFromApi('/messages', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({content: message}),
    });
};
