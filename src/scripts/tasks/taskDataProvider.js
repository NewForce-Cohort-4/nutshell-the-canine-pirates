let tasks = []

export const useTasks = () => tasks.slice()

export const getTasks = () => {
    return fetch('http://localhost:8088/tasks')
        .then(response => response.json())
        .then(parsedTasks => {
           tasks = parsedTasks
        })

}

export const saveTask = task => {
    return fetch('http://localhost:8088/tasks', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
    .then(getTasks) // After we add a note, get them all again so our new note appears in our collection

}

export const moveNote = taskId => {
    return fetch(`http://localhost:8088/tasks/${taskId}`, {
        method: "PATCH",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            completed: true,
        }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
}