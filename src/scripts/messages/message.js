export function Message (singleMessage, relatedUser) {
    return `
        <section class="message-box">
            <p>${relatedUser.email}</p>
            <p>${singleMessage.message}</p>
        </section>
        <button id="delete-note--${singleMessage.id}">Delete</button>
    `
}