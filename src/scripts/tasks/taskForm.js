import { saveTask } from "./taskDataProvider.js";
import { getTasks, useTasks } from "./taskDataProvider.js"
import { TaskList } from "./taskList.js"


const formTarget = document.querySelector("#tasks-form")

const TaskForm = () => {

    formTarget.innerHTML = `
    <input class="task-entry" type="text" placeholder="Type task here." id="task-name-input"></input>
    <input class="date-entry" type="date" id="task-date-input" placeholder="Select date."></input>
    <button>Save Task</button>
    
    `

}

const eventHub = document.querySelector("#tasks-form")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "task-button"){
        TaskForm()
        
    }

})
