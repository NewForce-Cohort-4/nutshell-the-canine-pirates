export function TaskCard(taskObject) {
    return `
        <section class="task-card">
            <p><b>Task: </b>${taskObject.taskName}</p>
            <p><b>Complete by: </b>${taskObject.completionDate}</p>
            <label>Task completed</label>
            <input type="checkbox" class="task-card-checkbox" id="taskCheckbox--${taskObject.id}">
        </section>
    
    `
}