import { saveTask } from "./taskDataProvider.js";
import { getTasks, useTasks } from "./taskDataProvider.js"
import { TaskList } from "./taskList.js"


//targets "tasks-form" id in  index.html as the place to print the form

export function TaskButton(){

    let taskHeadingContainer = document.querySelector(".task-heading")
    taskHeadingContainer.innerHTML = `
                <h2 class="">To-Do List</h2>
                <button class="task-form-button" id="new-task-button">New Task</button>`
              
}





const formTarget = document.querySelector("#tasks-form")

const TaskForm = () => { //creates form that appears when "new task" button is clicked

    formTarget.innerHTML = `
    <input class="date-entry" type="date" id="task-date-input" placeholder="Select date."></input>
    <input class="task-entry" type="textarea" placeholder="Type task here." id="task-name-input"></input>
    <button id="save-task-button">Save Task</button>
   
    
    `

}

const eventHub = document.querySelector("main")

//single event listener contains the "New Task" and "Save Task" button directives

eventHub.addEventListener("click", clickEvent => {


    if(clickEvent.target.id === "new-task-button"){ //when clicked, the button runs the new task form
        console.log("click")
        TaskForm()
    }
   
    else if(clickEvent.target.id === "save-task-button") { //when clicked, the button saves a new task object to the json file
      
    
        const newTask = {
            "userId": sessionStorage.getItem("activeUser"),
            "taskName": document.querySelector("#task-name-input").value,
            "completionDate": document.querySelector(".date-entry").value,
            "completed": false
        }

        saveTask(newTask) //runs the saveTask function from the data provider on the new object
        .then(TaskList())//reloads the task list to print the to-do list
    }


})

