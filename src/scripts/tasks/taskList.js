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


            //running a filter on the tasksArray declared above; for each individual task, if the userId is the same as the active user, it will return the tasks NOT completed (marked "false" in the json) and will make tasksArray equal only those returned
          
                tasksArray = tasksArray.filter((task) => {
                    if(task.userId == sessionStorage.getItem("activeUser"))
                    return !task.completed
                })
                //runs a loop on the modified tasksArray; for each task object in the array, it will run the TaskCard function and add it to the HTML string
                for (let task of tasksArray){
                    tasksHTMLString += TaskCard(task)
                }
            
           //inserts the new string into the HTML
            taskContainer.innerHTML = `
           
            
            ${tasksHTMLString}

     
            

            `

        })

}



taskContainer.addEventListener("change", (eventObject) => { //event listener for the checkbox
    if(eventObject.target.id.startsWith("taskCheckbox")){
        console.log(eventObject.target.id)
        const idToMove = eventObject.target.id.split("--")[1]
        moveNote(idToMove)
        .then(TaskList())
    }

})