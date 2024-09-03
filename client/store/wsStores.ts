import {create} from 'zustand'

interface WsStore {
    ws: WebSocket | null,
    setWs: (x: WebSocket | null) => void,
}

export const useWsStore = create<WsStore>()((set) => ({
        ws: new WebSocket(`${import.meta.env.VITE_WS_URL}`),
        setWs: (_ws) => set(() => ({ws: _ws})),
    })
)