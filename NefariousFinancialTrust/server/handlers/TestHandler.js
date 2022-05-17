import { SocketHandler } from '../utils/SocketHandler'

export class TestHandler extends SocketHandler {
  /**
   * @param {import("socket.io").Server} io
   * @param {import("socket.io").Socket} socket
   */
  constructor(io, socket) {
    super(io, socket)
    this
      .on('SOCKET_TEST', this.testEvent)
      .on('join:room', this.joinRoom)
      .on('leave:room', this.leaveRoom)
  }
  joinRoom(payload) {
    // NOTE this is actually joining the room that was emitted out by the client
    this.socket.join(payload.roomName)
    // NOTE this is emitting back to the client that the room was joined, and the room payload
    this.socket.emit('joined:room', payload)
  }

  // NOTE logic for leaving a room
  leaveRoom(payload) {
    // Using the socket.leave to leave a room - still need to pass in the roomName of the room being left
    this.socket.leave(payload.roomName)
    this.socket.emit('left:room', payload)
  }

  // SOCKET HANDLERS HANDLE DATA THAT IS INBOUND

  async testEvent(payload) {
    this.socket.emit('IS_TESTED', payload)
  }
}
