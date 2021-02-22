import { LoginForm } from "./auth/LoginForm.js"
import { RegisterForm } from "./auth/RegisterForm.js"
import { Nutshell } from "./Nutshell.js"

import {getMessages} from './messages/messageDataProvider.js'
getMessages()
import {messageList} from './messages/messageList.js'
messageList()

import {messageForm} from './messages/messageForm.js'
messageForm()

/*
    1. Check if the user is authenticated by looking in session storage for `activeUser`
    2. If so, render the Nutshell component
    3. If not, render the login and registration forms
    4. Also, if the user authenticates, and the login form is initially shown
        ensure that the Nutshell component gets rendered
*/


const activeUser = sessionStorage.getItem("activeUser")

if(!activeUser){
    LoginForm()
    RegisterForm()
} else {
    Nutshell()
}