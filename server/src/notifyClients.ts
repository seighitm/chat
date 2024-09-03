import WebSocket from "ws";

export function notifyClients(eventType: string, data?: any) {
  const message = JSON.stringify({ type: eventType, ...data });
  global.wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
}
