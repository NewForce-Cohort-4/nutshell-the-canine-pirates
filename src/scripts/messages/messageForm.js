import { getUsers, useUsers } from "../auth/userDataProvider.js"
import { getMessages, saveMessage, useMessages } from "./messageDataProvider.js"


const contentTarget = document.querySelector("#message-form")

export const messageForm = () => {
    if (sessionStorage.getItem('activeUser') === null) {
        const contentTarget = document.querySelector("#message-form")
        contentTarget.innerHTML = ""
    } else {
    getMessages()
    getUsers()
    .then(() => {
        let allMessages = useMessages()
        let allUsers = useUsers()
        
        contentTarget.innerHTML = `<h2>Chat</h2>
        <input type="text" placeholder="Ask a personal question!" id="messageText">
        <button type="button" id="sendMessage">Send</button>
        `
    })
    
}}

const currentDate = new Date()
const localTimeString = currentDate.toLocaleTimeString(undefined, {
  hour:   '2-digit',
  minute: '2-digit',
  second: '2-digit',
})

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendMessage") {
        
        const newMessage = {
            message: document.querySelector("#messageText").value,
            userId: sessionStorage.getItem("activeUser"),
            timestamp: localTimeString
        }

        saveMessage(newMessage)
        .then(messageList)
    }
    
})