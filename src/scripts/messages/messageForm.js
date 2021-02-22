import { getUsers, useUsers } from "../auth/userDataProvider.js"
import { getMessages, saveMessage, useMessages } from "./messageDataProvider.js"
import {Message} from './message.js'

const contentTarget = document.querySelector("#message-form")

export const messageForm = () => {
    getMessages()
    getUsers()
    .then(() => {
        let allMessages = useMessages()
        let allUsers = useUsers()
        
        contentTarget.innerHTML = `
        <input type="text" placeholder="Text" id="messageText">
        <button type="button" id="sendMessage">Send</button>
        `
    })
    
}

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendMessage") {
        
        const newMessage = {
            message: document.querySelector("#messageText").value,
            userId: sessionStorage.getItem("activeUser"),
        }

        saveMessage(newMessage)
        .then(messageList)
    }
    
})