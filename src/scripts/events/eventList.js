import { Event } from './event.js';
import { getEvents, useEvents } from './eventsDataProvider.js'

export const EventList = () => {

    getEvents().then(() => {
        // criminals is an array of objects
        let eventsToPrint = useEvents();


         // If we get input from the convictions filter, filter our criminals so that we only see ones with that conviction
      


        // criminalsToPrint = criminalsThatCommittedSpecificCrime

    
        const eventsContainer = document.querySelector("#events-printing")

        let htmlBuilder = ""

        for(let i =0; i < eventsToPrint.length; i++){
// console.log(eventsToPrint[i])
            htmlBuilder += Event(eventsToPrint[i])
            // console.log(htmlBuilder)
        }

        eventsContainer.innerHTML = htmlBuilder

    })
}



