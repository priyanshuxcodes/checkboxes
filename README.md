# 🚀 1 Million Checkboxes

A real-time, massively interactive checkbox grid built using **Redis**, **WebSockets**, and vanilla **HTML, CSS, JS**.

This project allows thousands of users to toggle checkboxes simultaneously and see updates instantly across all connected clients.

---

## 🌐 Live Concept

Imagine a grid of **1,000,000 checkboxes** where:
- Every click is broadcast in real-time
- Everyone sees changes instantly
- State is shared globally

---

## 🧠 Tech Stack

### Frontend
- HTML
- CSS
- JavaScript (Vanilla)

### Backend
- WebSockets (real-time communication)

### Data Layer
- Redis (in-memory data store)

---

## ⚙️ How It Works

1. Client connects to server via WebSocket  
2. Initial checkbox states are fetched from Redis  
3. When a user toggles a checkbox:
   - Event is sent to server  
   - Server updates Redis  
   - Server broadcasts update to all clients  
4. All connected users see the update instantly ⚡  

---

## 📦 Features

- ✅ Real-time updates using WebSockets  
- ✅ Persistent state using Redis  
- ✅ Handles large-scale checkbox grid  
- ✅ Lightweight frontend (no frameworks)  
- ✅ Event-driven architecture  

---

## 🖼️ UI Overview

- Grid-based layout  
- Each checkbox uniquely indexed  
- Smooth interaction even with large datasets  

---

## Live Link
(Checkboxes)[https://checkboxes-hejg.onrender.com]
