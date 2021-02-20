
/*
* A list component, lists the articles saved in a user's account to view in the dashboard. 
* Each article has a delete button that removes the article. Imports modules to fetch
* and copy all the articles on the server for a user's account, and the module to delete
*/

import {mkArticles, cpArticles, rmArticle} from "./ArticleProvider.js"
import {NewArticleButton} from "./ArticleSaveForm.js"

// Define DOM elements to view the articles in
const titleTarget = document.querySelector(".articles-widget__header")
const listTarget = document.querySelector(".articles-widget__list")

// Define a function to list all articles linked to a specific user's account
export const ListArticles = () => {
  // Print the header of the news widget
  titleTarget.innerHTML = `<h2>News</h2>`
  // Refresh list of articles and make a copy to display in the dashboard
  mkArticles()
  .then(() => {
    const ALLarticles = cpArticles()
    // Test to make sure articles array is created
    // console.log(ALLarticles)

    // loop over each article and save only current user's articles to an array
    let activeList = ALLarticles.filter(ONEarticle => {
      // Save the current user's ID
      const userID = sessionStorage.getItem('activeUser')

      // Add article to array only if it matches the current user's ID
      if(ONEarticle.userId === userID) {
        return ONEarticle
      }
    })

    // Sort the user's list of articles for most recent first (descending)
    let sortedList = activeList.sort((a,b) => {
      return b.created_at - a.created_at
    })

    listTarget.innerHTML = sortedList.map(ONEarticle => {
      // Save the current user's ID
      const userID = sessionStorage.getItem('activeUser')

      // Add article to list only if it matches the current user's ID
      if(ONEarticle.userId === userID) {
        // console.log("Found a match!")
        return `
        <div class="articles-widget__card">
          <p>${ONEarticle.title}</p>
          <p>${ONEarticle.synopsis}</p>
          <p>${ONEarticle.url}</p>
          <button id="delete-${ONEarticle.id}">Delete</button>
        </div>
        `
      }
    }).join("")
  })
}

// Use event listener to capture when a user clicks the Delete button and delete it from account
listTarget.addEventListener("click", clickEvent => {
  // if click is on delete button, delete that info to local server
  if(clickEvent.target.id.startsWith("delete")) {
    // ID the article to be deleted
    const deleteID = clickEvent.target.id.split("-")[1]

    // Test to make sure the delete button is being clicked
    // console.log("the delete button for article", deleteID, "was clicked")

    // Use the delete function with the ID of the article to delete
    rmArticle(deleteID)
    .then(ListArticles())
    .then(NewArticleButton())
  }
})