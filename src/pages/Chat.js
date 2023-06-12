// import React, {useEffect} from 'react'
// import io from 'socket.io-client'

// const socket = io.connect('http://localhost:3000')

// function Chat() {
//   const sendMessage = () => {
//     console.log("wee")
//     socket.emit('send_message', 
//     // console.log("message sent")
//     { message: "Hello World" }
//     )
//   }

//   useEffect(() => {
//     socket.on('receive_message', (msg) => {
//       alert(msg.message)
//   }, [socket])})
//   return (
//     <>
//       <h1>Chat</h1>
//       <input placeholder='Message ...' />
//       <button onClick={sendMessage}>Send</button>

//     </>
//   );
// }

// export default Chat;