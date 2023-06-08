import { io } from "socket.io-client";

class SocketService {
  constructor() {
    this.socket = null;
  }

  connect() {
    // Replace with your server URL
    this.socket = io('http://localhost:3001');

    this.socket.on("connect", () => {
      console.log(`Connected to the server with id: ${this.socket.id}`);
    });

    this.socket.on("disconnect", () => {
      console.log("Disconnected from the server");
    });

    this.socket.on("connect_error", (err) => {
      console.log(`Connection error due to: ${err}`);
    });
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }

  emitEvent(eventName, data) {
    if (this.socket) {
      this.socket.emit(eventName, data);
    }
  }

  listenToEvent(eventName, callback) {
    if (this.socket) {
      this.socket.on(eventName, callback);
    }
  }
}

export default new SocketService();
