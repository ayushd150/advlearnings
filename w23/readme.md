#week 23 notes

Web RTC is a set of protocols and api's that let web browsers, mobile apps, and other clients exchange audio, videos and data directly in real time without any ned of intermediaries. (real time media communication - sub second call)
1) it is a peer to peer protocol( we go from browser 1 to browser 2 without any need of server, only need for central server)
2) signalling server( 2 way call , browser' need to exchange their address and they exchange a bunch of other stuffs)
3) NAT(network address translation -> drill down ip adress , internally maintains address table 

STUN SERVER -> befor i tell signalling server(unable to get all address of machine), stun server gets it( maybe private address) pulls out, as a protocol, everything (ICE chandidates - bunch of ip port servers where we can be discovered0


TURN SERVER - if NAT blocks the connection(when direct P2P uses stun to discover public port ) then turn server is used (very expensive)

Offer - msg created by 1 peer descrives types of media it wants to send and recieve along with network info and capabilities

SDP -  (Session Description Protocol) is a text-based format used to describe multimedia communication sessions — essentially, it tells the other peer:

"Here’s what I can send, here’s what I expect to receive, and here’s how to connect to me."

n the WebRTC handshake:

Offer → contains an SDP describing the initiating peer's media & capabilities.

Answer → contains an SDP describing the responding peer’s compatible media & capabilities.

Both SDPs help establish the connection and select compatible codecs, encryption methods, and media parameters.

RTC Peer connection - RTCPeerConnection is the core WebRTC API that lets two peers establish a direct, secure, real-time connection for sending audio, video, and/or data.

very strict networks restrcit p2p that'swhy turn server needed
setLocalDescription()
Purpose: Tells your own RTCPeerConnection what you intend to send/receive.

You call it after creating an offer or answer.

It stores the SDP in your peer connection and triggers ICE candidate gathering.


In case of a call with more than 5 people , p2p doesnt work SFU comes into picture(doesnt scale weell)
can do pagination only for video not for audio

Simulcast is short for “simultaneous broadcasting”. In WebRTC (or video conferencing systems), it allows a single video source (camera) to be encoded and sent at multiple resolutions/bitrates at the same time.

Think of it as sending multiple streams of the same video so that receivers with different network conditions can choose the one that works best.

youtube live stream - HLS ( < 1s latency, lower quality/ chops - 2way call not yt live - > webrtc  )

webrtc and websocket has no dealing with camera hardware
streams and tracks no connection to webrtc
ops pipeline - writing all k8s yaml files and putting it in codebase