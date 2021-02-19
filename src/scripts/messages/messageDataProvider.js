let messages = []

export const useMessages = () => messages.slice()

export const getMessages = () => {
    return fetch('http://localhost:8088/messages')
        .then(response => response.json())
        .then(parsedMessages => {
            messages = parsedMessages
        })

}

export const saveMessage = message => {
    return fetch('http://localhost:8088/messages', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    })
    
}

 export const deleteMessage = message => {
    return fetch(`http://localhost:8088/messages/${message}`, {
        method: "DELETE"
    })
}
