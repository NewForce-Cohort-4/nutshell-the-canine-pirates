import {LogOutButton} from "./auth/LogoutButton.js"

import { TaskList } from "./tasks/taskList.js"
import { TaskButton } from "./tasks/taskForm.js"

// import the functions to list a user's articles in the dashboard
import {ListArticles} from "./articles/ArticleListView.js"
// add a save button for new articles
import {NewArticleButton} from "./articles/ArticleSaveForm.js"



export const Nutshell = () => {

    LogOutButton()
      // Render all your UI components here
      TaskList()
      TaskButton()
      // Article components
      ListArticles()
      NewArticleButton()
}