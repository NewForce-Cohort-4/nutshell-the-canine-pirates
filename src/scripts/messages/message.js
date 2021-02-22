export function Message (singleMessage, relatedUser) {
    return `
        <section class="message-box">
            <p><strong>${relatedUser.email}</strong> said <em>${singleMessage.message}</em> @ ${singleMessage.timestamp}</p>
        </section>
        <button id="delete-note--${singleMessage.id}">Delete</button>
    `
}