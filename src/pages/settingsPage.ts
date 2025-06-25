import {dom} from '../utils/index.js'
import {fetchAccountSettings} from '../controllers/fetch.js'

const data = fetchAccountSettings()

const {name, username, password, profilePic} = data

const userImg = dom('.account-box img') as HTMLImageElement
const accountName = dom('.account-info h3') as HTMLHeadingElement
const accountUserName = dom('.account-info h4') as HTMLHeadingElement

// set values
userImg.src = profilePic as string
accountName.innerText = name
accountUserName.innerText = username

// set inputs
const nameField = dom('.form-field #name') as HTMLInputElement
const usernameField = dom('.form-field #username') as HTMLInputElement
const passwordField = dom('.form-field #password') as HTMLInputElement

nameField.placeholder = name
usernameField.placeholder = username
passwordField.placeholder = password