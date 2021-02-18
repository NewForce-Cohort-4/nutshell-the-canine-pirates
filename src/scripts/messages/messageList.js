import { getMessages, useMessages } from "./messageDataProvider.js"
import { Message } from './message.js'

export const messageList = () => {
    getMessages()
    .then(() => {
        const allTheMessages = useMessages()
        const allTheUsers = 

        const messageContainer = document.querySelector("#message-print")
        
        const arrayOfMessages = allTheMessages.map(singleMessage => {

            const relatedUser = allTheUsers.find(user => user.id === +user.userId)
            const htmlString = Message(singleMessage)

            return htmlString   
        })
        
        const StringOfAllNewMessages = arrayOfMessages.join("")

        messageContainer.innerHTML = StringOfAllNewMessages
    })
    
}