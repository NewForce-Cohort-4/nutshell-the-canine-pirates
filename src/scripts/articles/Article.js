// exporting a function that takes in a note object and builds the html based on that object's properties
export function Article(articleObject){
  return `
  <section class="article-card">
      <p>Title: ${articleObject.title}</p>
      <p>Synopsis: ${articleObject.synopsis}</p>
      <p>URL: ${articleObject.url}</p>
      <button id="deleteNote--${articleObject.id}">Delete</button>
  </section>
  `
}