import {saveEvent} from "./eventsDataProvider.js"
import { getEvents , useEvents } from './eventsDataProvider.js'

const contentTarget = document.querySelector("#events-form")

export const EventForm = () => {
    contentTarget.innerHTML = `
        
       
        <div class="container">
        <h2>Event Form </h2>
        
          <div class="form-group">
          <label for="dEntry">Date of Event:<br></label>
          <input type="date" class="form-control" id="start" placeholder="Date of Event" name="dEntry">
          </div>
          <div class="form-group">
          <br>
            <label for="eName">Event Name:<br></label>
            <input type="text" class="form-control" id="eName" placeholder="Event Name" name="eName">
          </div>
          <div class="form-group">
          <br>
            <label for="lEntry">Event Location:<br></label>
            <input type="text" class="form-control" id="lEntry" placeholder="Event Location" name="lEntry">
          </div>
          <br>
          <button id="saveEvent">Save Event</button>
      </div>   
       
    `
}
const eventHub = document.querySelector("#events-form")
// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEvent") {
let dateInput= document.getElementById("start").value;
let nameInput= document.getElementById("eName").value;
let locationInput= document.getElementById("lEntry").value;
        // Make a new object representation of a note
        const newEvent = {
            // Key/value pairs here
            date: dateInput,
            eventName: nameInput,
            locationName: locationInput
        }
       alert("this is the date " + dateInput);

        // Change API state and application state
        saveEvent(newEvent)
        .then(EventList) // Refresh your list of notes once you've saved your new one
    }

})



