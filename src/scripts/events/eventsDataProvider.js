let events = []

export const useEvents = () => events.slice()

export const getEvents = () => {
    return fetch(' http://localhost:8088/events'
        
    
    )
        .then(response => response.json())
        .then(parsedEvents => {
            events = parsedEvents
        })

}

export const saveEvent = event => {
    return fetch(' http://localhost:8088/events', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    })
    .then(getEvents) // After we add a note, get them all again so our new note appears in our collection
}

