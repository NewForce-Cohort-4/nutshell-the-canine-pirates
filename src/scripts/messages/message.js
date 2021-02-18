export function Message (singleMessage) {
    return `
        <section class="message-box">
            <p>${singleMessage.userId}</p>
            <p>${singleMessage.message}</p>
        </section>
        <button id="delete-note--${singleMessage.id}">Delete</button>
    `
}