import WebSocket from "ws";

export const setupWebSocketServer = (wss: WebSocket.Server) => {
  wss.on("connection", (ws) => {
    console.log("Client connected");

    ws.on("close", () => {
      console.log("Client disconnected");
    });
  });
};
