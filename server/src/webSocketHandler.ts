import WebSocket from "ws";

export function setupWebSocketServer(wss: WebSocket.Server) {
  wss.on("connection", (ws) => {
    console.log("Client connected");

    ws.on("close", () => {
      console.log("Client disconnected");
    });
  });
}
