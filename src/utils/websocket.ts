const wsBaseURL = "";

const ws = new WebSocket(wsBaseURL);

ws.onopen = () => {
    console.log("Connected ✅");
  };

  ws.onclose = () => {
    console.log("Disconnected 💔");
  };

  ws.onerror = (err) => {
    console.log("WS connection error ❌ : " + err);
  };

export const sendMassgeWS = (msg: string) => {
  ws.send(msg);
  return;
};

export const WebsocketOnMessage = ws.onmessage;

export const WebsocketOnConnection = ws.onopen;

export const WebsocketOnDisconnection = ws.onclose;

export const WebsocketOnError = ws.onerror;

export const CloseWebsocket = ws.close;

export const WebSocketState = ws.readyState;

const WS = {WebsocketOnMessage, WebsocketOnConnection, WebsocketOnDisconnection, WebsocketOnError, CloseWebsocket, WebSocketState};

export default WS