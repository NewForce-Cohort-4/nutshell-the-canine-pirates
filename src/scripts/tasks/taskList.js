import { getTasks, useTasks } from "./taskDataProvider.js"
import { TaskCard } from "./task.js";

//targeting the section in index.html where tasks will print
let taskContainer = document.querySelector("#tasks-printing")


//function that will make the list print
export const TaskList = () => {
//getting the data to be printed
        getTasks(). then(() => {
            let tasksArray = useTasks();
            console.log(tasksArray);

//declaring the empty string that will populate as array is looped through
            let tasksHTMLString = '';
//looping through the tasks array--which contains objects from json--and running the card function on each to build the HTML string
            for(let task of tasksArray) {
                tasksHTMLString += TaskCard(task)
            };

            taskContainer.innerHTML = `
            ${tasksHTMLString}
            `


        })

}