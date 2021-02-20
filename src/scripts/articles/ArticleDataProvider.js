
// declairing this empty variable that we're gonna use in those functions below
let articles = []

// once we call the getNotes function, the notes variable is full of the info we need to use, this function takes that variable and returns a copy of the array
export const useArticles = () => {
  return articles.slice()
}
// this function uses a fetch call to get the objects from the api, then it turns that data into json that we can use, then it takes that data and stores it in the notes variable above
export const getArticles = () => {
  return fetch("http://localhost:8088/articles")
      .then(response => response.json())
      .then(parsedArticles => {
          articles = parsedArticles
      })

}

// make a fetch call to the api and post the note that is passed in
export const saveArticle = article => {
  return fetch("http://localhost:8088/articles", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(article)
  })
  .then(getArticles) // After we add a note, get them all again so our new note appears in our collection
}

export const deleteArticle = articleId => {
  return fetch(`http://localhost:8088/articles/${articleId}`, {
      method: "DELETE"
  })
}