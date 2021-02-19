import {saveArticle} from "./ArticleDataProvider.js"

const eventHub = document.querySelector(".dashboard")

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "new-article") {
    eventHub.innerHTML = `
    <div class="article-form">
      <input type="text" placeholder="Article Title" id="title" required>
      <input type="text" placeholder="Synopsis" id="synopsis" required>
      <input type="text" placeholder="Article URL" id="url" required>
      <input type="date" id="date">
      <button id="save-article">Save Article</button>
    </div>
  `
  }
})


// if there's a click event in the main element, we run this function with clickEvent as the parameter
eventHub.addEventListener("click", clickEvent => {
  // if what the user clicked on has the id of saveNote... which is the button that saves the info...
  if (clickEvent.target.id === "save-article") {
      const currentDate = new Date()
      const localTimeString = currentDate.toLocaleTimeString(undefined, {
        hour:   '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
      // Make a new object representation of a note, this seems to be the object with the info that we want to get and save into the local api, stored in a variable
      let newArticle = {
          // Key/value pairs here
          "date": document.querySelector("#date").value,
          "title": document.querySelector("#title").value,
          "synopsis": document.querySelector("#synopsis").value,
          "url": document.querySelector("#url").value,
          "userId": sessionStorage.getItem("activeUser"),
          "timeStamp": localTimeString
      }
      console.log(newArticle)
      

      // Change API state and application state, we're calling the saveNote function - which takes in the info from the argument of newNote and writes it to the local api, then we're calling the NoteList function, which I believe just gets everything again
      saveArticle(newArticle)
      console.log(newArticle)
  }
})