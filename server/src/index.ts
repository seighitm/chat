import http from "http";
import WebSocket from "ws";
import app from "./app";
import { setupWebSocketServer } from "./webSocketHandler";
import messageRoutes from "./messageRoutes";

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

global.wss = wss;

setupWebSocketServer(wss);

app.use("/api/messages", messageRoutes);

server.listen(3000, () => {
    console.log(`Server is running on http://localhost:${3000}`);
});
