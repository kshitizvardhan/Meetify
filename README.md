# Meetify 🎥

- Welcome to Meetify, a modern video calling application built using Next.js 15 and WebRTC. 
- This project focuses on real-time communication, providing users with personal meeting rooms and a seamless video calling experience. 
- By developing this project, I explored WebRTC and various protocols, gaining valuable insights into peer-to-peer connections, media transmission, and building low-latency applications.


https://github.com/user-attachments/assets/dc512f18-cfd2-46cd-b733-41ff7f6de363

## Key Concepts Learned

### 🌐 WebRTC (Web Real-Time Communication)

- **Peer-to-Peer Connections:**
  Direct communication between users without relying on a central server, reducing latency and improving call quality.

- **Signaling:**
  Implemented a signaling server using Next.js API routes to exchange session descriptions (SDP) and ICE candidates between peers.

- **ICE (Interactive Connectivity Establishment):**
  Learned how ICE finds the best possible connection path between peers by gathering candidates (public, private, and relay addresses).

- **STUN/TURN Servers:**
  - **STUN (Session Traversal Utilities for NAT):** Helps clients discover their public IP addresses and establish direct peer-to-peer connections.
  - **TURN (Traversal Using Relays around NAT):** Acts as a relay server to route data if direct connections fail (used for handling restrictive firewalls).

- **SRTP (Secure Real-time Transport Protocol):**
  Ensured secure media transmission by encrypting audio and video streams.

- **DTLS (Datagram Transport Layer Security):**
  Established secure connections over WebRTC using DTLS for key exchange and encryption.

- **MediaStream API:**
  Accessed the user's camera and microphone to capture media streams and transmit them over the network.

- **Data Channels:**
  Explored WebRTC data channels to enable real-time text-based messaging during video calls.

---

## 📲 Connection Flow
1. **Signaling:**
   Exchange session descriptions (SDP) and ICE candidates between peers.

2. **ICE Candidate Gathering:**
   Discover the best route for the connection using STUN/TURN servers.

3. **Connection Establishment:**
   Create a peer connection using SRTP and DTLS protocols over UDP.

4. **Media/Stream Handling:**
   Transmit audio/video streams between connected peers.

---

Thank you for exploring Meetify! This project deepened my understanding of WebRTC and real-time communication protocols, enabling me to build dynamic and interactive web applications with low-latency video calls. 🚀
