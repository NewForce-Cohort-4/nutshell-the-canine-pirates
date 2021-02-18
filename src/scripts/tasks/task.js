export function TaskCard(taskObject) {
    return `
        <section class="task-card">
            <p><b>Task: </b>${taskObject.taskName}</p>
            <p><b>Expected completion: </b>${taskObject.completionDate}</p>
            <p>Check when completed</p>
            <input type="checkbox" id="task-checkbox">
        </section>
    
    `
}