import { WebSocketServer } from "ws"
import {client} from "@repo/db"

const server = new WebSocketServer({ port: 8080 })

server.on("connection",  (socket: any) => {
    socket.send("Welcome to the WebSocket server----------!")

    client.user.create({
        data: {
            username: "websockit_user",
            email: "websockit@example.com"
        }
    })
    // console.log("Created user:", user)
    socket.on("message", (message: any) => {
        console.log(`Received message: ${message}`)
        socket.send(`Echo: ${message}`)
    })

    socket.on("close", () => {
        console.log("Client disconnected")
    })
})