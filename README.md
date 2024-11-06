# ChatNest - Realtime Chat Application

Welcome to **ChatNest**, a simple real-time chat application that enables users to communicate instantly. This project uses **Node.js**, **Socket.IO**, and **HTML/CSS/JavaScript** to create a chat app with a clean and user-friendly interface.

## Features

- **Real-time Messaging**: Messages are sent and received instantly using WebSockets.
- **User Join/Leave Notifications**: Users are notified when someone joins or leaves the chat.
- **Audio Notifications**: Receive a sound notification for incoming messages.
- **Responsive UI**: The chat interface adjusts based on device size, ensuring a seamless experience on any screen.

## Getting Started

To run ChatNest locally, follow these steps.

### Prerequisites

- [Node.js](https://nodejs.org/)
- A terminal or command prompt

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ChatNest.git
   cd ChatNest
2. **Install dependencies**
   ```bash
    npm install socket.io
3. **Start the server**
    ```bash
    node server.js

## Usage

Open the app in your browser, and you will be prompted to enter your name.
Type your messages in the input field and click the Send button or press Enter to send messages.
Messages from you appear on the right side, while messages from others appear on the left.
When a new user joins or leaves the chat, a notification will display in the chat window.

## Code Overview
### Server (nodeServer.js)
The server listens on port 8000 and manages WebSocket connections using Socket.IO.

**Handles events**:
new-user-joined: Broadcasts a message when a new user joins.

send: Broadcasts messages sent by users.

disconnect: Notifies when a user leaves and removes them from active users.

### Client (client.js)
Connects to the WebSocket server and listens for chat events.

**Events handled**:
user-joined: Displays a message when a user joins the chat.

receive: Displays received messages on the left.

left: Displays a message when a user leaves the chat.

**Styling** (style.css)
Basic styling for chat bubbles, send button, and layout.

Messages align based on the sender (left for others, right for the user).

## Technologies Used
**HTML**: Structuring the chat interface.

**CSS**: Basic styling for responsive design and chat bubble colors.

**JavaScript**: Client-side logic and event handling.

**Node.js**: Server-side runtime.

**Socket.IO**: Real-time communication between server and client.

## Future Improvements
**User Authentication**: Allow users to create accounts and authenticate.

**Chat Rooms**: Enable multiple chat rooms for various topics.

**Message History**: Store chat history for later viewing.

## License
This project is licensed under the MIT License.

