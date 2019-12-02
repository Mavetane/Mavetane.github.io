---
layout: post
title: Websockets JS
date: 2019-12-02
---

Collen Maphike

# Websocket

The WebSocket protocol, described in the specification RFC6455 provides a way to exchange data between browser and server via a persistent connection. The data can be passed in both directions as "packets", without breaking the connection and additional HTTP-requests.

WebSocket is especially great for services that require continuous data exchange, e.g online games, real-time trading systems and so on..


## Opening a websocket

When new WebSocket(url) is created, it starts connecting immediately. During the connection the browser(using headers) asks the server: "Do you support Websocket?" And if the server replies "yes", then the talk continues in WebSockets protocol which is not HTTP at all.
