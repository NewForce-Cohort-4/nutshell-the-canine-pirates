import { getTasks, moveNote, useTasks } from "./taskDataProvider.js"
import { TaskCard } from "./task.js";

//targeting the section in index.html where tasks will print
let taskContainer = document.querySelector("#tasks-printing")


//function that will make the list print
export const TaskList = () => {
//getting the data to be printed
        getTasks(). then(() => {
            let tasksArray = useTasks();
            let tasksHTMLString = '';
//looping through the tasks array--which contains objects from json--and running the card function on each to build the HTML string
          
               
                tasksArray = tasksArray.filter((task) => {
                    if(task.userId == sessionStorage.getItem("activeUser"))
                    return !task.completed
                })

                for (let task of tasksArray){
                    tasksHTMLString += TaskCard(task)
                }
            
           
            taskContainer.innerHTML = `
            ${tasksHTMLString}
            `

        })

}


taskContainer.addEventListener("change", (eventObject) => {
    if(eventObject.target.id.startsWith("taskCheckbox")){
        const idToMove = eventObject.target.id.split("--")[1]
        moveNote(idToMove)
        .then(TaskList())
    }

})