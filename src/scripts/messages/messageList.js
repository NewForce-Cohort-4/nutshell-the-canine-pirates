import { getMessages, useMessages, deleteMessage } from "./messageDataProvider.js"
import { Message } from './message.js'
import { getUsers, useUsers } from "../auth/userDataProvider.js"


//an export function that is building a list for the messages and its related users
export const messageList = () => {
    getMessages()
    getUsers()
    .then(() => {
        //stages or caches the messages and users in a variable to use for later
        const allTheMessages = useMessages()
        const allTheUsers = useUsers()

        //targeting the DOM element
        const messageContainer = document.querySelector("#message-print")
        
        //.map acts like a loop through each of the messages
        const arrayOfMessages = allTheMessages.map(singleMessage => {
            //the current message in the loop has a .find method that is looking for the individual user that its message is related too and is converting it to compare even values with the "+"
            const relatedUser = allTheUsers.find(user => user.id === +singleMessage.userId)
            //sending the singleMessage and relatedUser as arguments to the Message function which returns a an HTML representation
            const htmlString = Message(singleMessage, relatedUser)

            return htmlString   
        })
      
        //setting a new variable equal to all the individual HTML object representaions that come back and making it one long single HTML object without the commas with the .join array method.
        const StringOfAllNewMessages = arrayOfMessages.join("")

        messageContainer.innerHTML = StringOfAllNewMessages
    })
    
}

const eventHub = document.querySelector("#message-print")

eventHub.addEventListener("click", (eventObject) => {
  if (eventObject.target.id.startsWith("delete-note")) {
    const idToDelete = eventObject.target.id.split("--")[1]
    
    deleteMessage(idToDelete) // Call the deleteNote function and pass in the appropriate id
    .then(messageList) // Then call messageList to refresh the list of notes
  }
});