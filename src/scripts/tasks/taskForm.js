import { saveTask } from "./taskDataProvider.js";
import { getTasks, useTasks } from "./taskDataProvider.js"
import { TaskList } from "./taskList.js"


const formTarget = document.querySelector("#tasks-form")

const TaskForm = () => {

    formTarget.innerHTML = `
    <h3>To-Do List</h3>
    <input class="task-entry" type="text" placeholder="Type task here." id="task-name-input"></input>
    <input class="date-entry" type="date" id="task-date-input" placeholder="Select date."></input>
    <button id="save-task-button">Save Task</button>
    <button class="view-tasks-button" id="view-button">View to-do list</button>
    
    `

}


const eventHub = document.querySelector("main")

eventHub.addEventListener("click", clickEvent => {
   


    if(clickEvent.target.id === "view-button"){
        console.log("click")
        TaskList()
    }

    else if(clickEvent.target.id === "task-button"){
        TaskForm()
    }
   
    else if(clickEvent.target.id === "save-task-button") {
      
        const newTask = {
            "userId": sessionStorage.getItem("activeUser"),
            "taskName": document.querySelector("#task-name-input").value,
            "completionDate": document.querySelector(".date-entry").value,
            "completed": false
            
        }
        saveTask(newTask)
        .then(TaskList())
    }


})



