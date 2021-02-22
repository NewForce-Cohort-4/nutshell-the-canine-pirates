import {LogOutButton} from "./auth/LogoutButton.js"
// import the functions to list a user's articles in the dashboard
import {ListArticles} from "./articles/ArticleListView.js"
// add a save button for new articles
import {NewArticleButton} from "./articles/ArticleSaveForm.js"

import {messageList} from './messages/messageList.js'
import {messageForm} from './messages/messageForm.js'

export const Nutshell = () => {

    LogOutButton()
     
      // Article components
      ListArticles()
      NewArticleButton()

      //Message Components 
      messageList()
      messageForm()
}