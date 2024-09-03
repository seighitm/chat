import http from "http";
import WebSocket from "ws";
import app from "./app";
import { setupWebSocketServer } from "./webSocketHandler";

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

global.wss = wss;

setupWebSocketServer(wss);

server.listen(3000, () => {
    console.log(`Server is running on http://localhost:${3000}`);
});
