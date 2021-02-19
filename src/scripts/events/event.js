export const  Event = (eventObject) => {
    return `<section class="card-container">
    <h1>Date: ${eventObject.date}</h1>
    <p class="event-name">Event Name: ${eventObject.eventName}</p>
    <p class="event-location">Event Location: ${eventObject.entryText}</p>
    
</section>`
}
