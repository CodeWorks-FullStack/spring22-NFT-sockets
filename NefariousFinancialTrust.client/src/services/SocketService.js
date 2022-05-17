import { AppState } from "../AppState";
import Pop from '../utils/Pop'
import { SocketHandler } from '../utils/SocketHandler'

class SocketService extends SocketHandler {
  constructor() {
    super()
    this
      .on('error', this.onError)
      .on('joined:room', this.joinedRoom)
      .on('left:room', this.leftRoom)
      .on('NEW_DONATION', this.donationCreated)
  }

  // INCOMING DATA

  // NOTE the server sent back an emit letting the client know that the room has been joined
  joinedRoom(payload) {
    console.log('joined room:', payload);
  }

  leftRoom(payload) {
    console.log('left room', payload)
  }

  donationCreated(payload) {
    console.log('donation created', payload);
    // NOTE this is handling updating the dom - we removed the donationsService Appstate.push to prevent getting duplicates
    AppState.donations.push(payload)
  }


  // OUTGOING DATA

  // NOTE setting roomName default here
  joinRoom(roomName = 'general') {
    console.log('roomname', roomName);
    // NOTE this is emitting a string and the roomname to the server
    this.emit('join:room', { roomName })
  }

  leaveRoom(payload) {
    console.log('leave room in client', payload);
    this.emit('leave:room', payload)
  }

  onError(e) {
    Pop.toast(e.message, 'error')
  }
}

export const socketService = new SocketService()
