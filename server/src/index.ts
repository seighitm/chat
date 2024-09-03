import http from "http";
import WebSocket from "ws";
import app from "./app";
import { setupWebSocketServer } from "./shared/webSocketHandler";

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

global.wss = wss;

setupWebSocketServer(wss);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
