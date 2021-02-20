import {LogOutButton} from "./auth/LogoutButton.js"
import {} from "./articles/ArticlesForm.js"
import {ArticlesList}  from "./articles/ArticlesList.js"
import {newFormButton} from "./articles/ArticlesForm.js"

export const Nutshell = () => {

    LogOutButton()
      // Render all your UI components here
      ArticlesList()
      newFormButton()
}