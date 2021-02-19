import {useArticles, getArticles, deleteArticles} from "./ArticleDataProvider.js";
import {Article} from "./Article.js"

let articlesListContainer = document.querySelector("#articles-printing");
// exporting and declaring the main function of this module, 
export const ArticlesList = () => {
  // gets a reference to main-container and stores it in noteListContainer
  
  // setting the innerHTML to an empty string to build up later
  // articlesListContainer.innerHTML = ''
  getArticles().then(() => {
    let articles = useArticles()
    articles.forEach((singleArticle) => {
      articlesListContainer.innerHTML += Article(singleArticle)
    })
  })
}

// const eventHub = document.querySelector("#main-container")

// eventHub.addEventListener("click", (eventObject) => {
//   if (eventObject.target.id.startsWith("deleteNote")) {
//     const idToDelete = eventObject.target.id.split("--")[1]
//     // ---------- Write your code here -------------//
//     // Call the deleteNote function and pass in the appropriate id
//     // Then call NoteList to refresh the list of notes
//     deleteNote(idToDelete)
//     .then(Notelist)
//   }
// });