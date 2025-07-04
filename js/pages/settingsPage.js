import { dom } from '../utils/index.js';
import { fetchAccountSettings } from '../controllers/fetch.js';
const data = fetchAccountSettings();
const { name, username, password, profilePic } = data;
const userImg = dom('.account-box img');
const accountName = dom('.account-info h3');
const accountUserName = dom('.account-info h4');
userImg.src = profilePic;
accountName.innerText = name;
accountUserName.innerText = username;
const nameField = dom('.form-field #name');
const usernameField = dom('.form-field #username');
const passwordField = dom('.form-field #password');
nameField.placeholder = name;
usernameField.placeholder = username;
passwordField.placeholder = password;
