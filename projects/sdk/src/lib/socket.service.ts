import { Injectable } from "@angular/core";
import { CallbackFunction, Eventer, ListenerFunction } from "projects/eventer";
import { io, Socket } from "socket.io-client";
import { SocketEndpoint } from "../config";

@Injectable({
  providedIn: "root",
})
export class TikSDKSocketService {
  private socket!: Socket;
  private event: Eventer<string> = new Eventer();

  constructor() {}

  public Listen(token: string) {
    if (this.socket) {
      console.log("[SDK Socket] another socket is open");
    } else {
      this.socket = io(SocketEndpoint, {
        query: {
          token,
        },
      });

      this.socket.on("connect", () => {
        console.log("[SDK Socket] connected to socket");
        this.socket.emit("call", "socket.join");
      });

      this.socket.onAny((event: string, ...args: any[]) => {
        this.event.emit(event, ...args);
      });
    }
  }

  // this function logout and disconnect user from socket io
  public Kill() {
    if (this.socket) {
      this.Leave();
      this.socket.disconnect();
    }
  }

  // this function make you login to socket io
  public Join(token?: string) {
    if (this.socket) {
      this.socket.emit("call", "socket.join", token);
    }
  }

  // this function make you logout from socket io
  public Leave() {
    if (this.socket) {
      this.socket.emit("call", "socket.leave");
    }
  }

  public on(event: string, callback: CallbackFunction) {
    return this.event.on(event, callback);
  }

  public off(event: string) {
    this.event.remove(event);
  }

  public any(callback: ListenerFunction) {
    this.event.listen(callback);
  }
}
