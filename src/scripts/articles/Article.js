// exporting a function that takes in a note object and builds the html based on that object's properties
export function Article(articleObject){
  return `
  <section class="article-card">
      <p>Title: ${articleObject.title}</p>
      <p>Date: ${noteObject.date}</p>
      <p>Suspect: ${criminalObject.name}</p>
      <button id="deleteNote--${noteObject.id}">Delete</button>
  </section>
  `
}