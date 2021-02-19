import {LogOutButton} from "./auth/LogoutButton.js"
import { EventList } from "./events/eventList.js"
import {EventForm} from "./events/eventsForm.js"

export const Nutshell = () => {
  EventForm()
  EventList()
    LogOutButton()
      // Render all your UI components here
}