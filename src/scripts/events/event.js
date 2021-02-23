export const Eventdate =(eve)=>{
    return `<section class="date-card-container">
    <h3>
    <p class"event-date"> Date: ${eve.date}</p>
    <p class="event-name">Event Name: ${eve.eventName}</p>
    <p class="event-location">Event Location: ${eve.locationName}</p>
    </h3>
</section>`
}


export const  Event = (eventObject) => {
    return `<section class="card-container">
    <p class"event-date"> Date: ${eventObject.date}</p>
    <p class="event-name">Event Name: ${eventObject.eventName}</p>
    <p class="event-location">Event Location: ${eventObject.locationName}</p>
    
</section>`
}

export const  Eventdatetest = (ev) => {
    return `<section class="card-container">
    <p class"event-date"> Date: ${ev}</p>
    
    
</section>`
}
