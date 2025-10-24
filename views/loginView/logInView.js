function logInView() {
    return /*HTML*/`
    <div id="loginContainer">
    <h2>Log in</h2>
    <form id="loginForm">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" oninput="model.inputs.loginForm.username = this.value" required>
    
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" oninput="model.inputs.loginForm.password = this.value" required>
    
    <button onclick="checkLogIn()"> Log in </button>
    </form>
    <p id="errorMessage" class="error"></p>
    <p>Dont have an account? <button onclick="navigate('registerView')" class="link-button">Register here</button></p>
    </div>
    `;
}
function checkLogIn(){
    //sjekke om det som er skrivi i login finnes i en bruker som finnes i data
    console.log("login is being checked");
    for(let i = 0; i < model.data.users.length; i++){
        console.log(" getting loopy..")
        if(model.inputs.loginForm.username == model.data.users[i].username
            && model.inputs.loginForm.password == model.data.users[i].password
        ){
            console.log ("logged in as: ", model.data.users[i].userId);
            model.app.loggedInId = model.data.users[i].userId; //Lagre id til innlogget bruker
            model.data.users[i].isLoggedIn = true; // Update the logged-in state of this user
            model.app.currentPage = 'frontPage'; // Set the current page to the dashboard
            loggedInNavBarView();
            updateView();
        }
        else {
            //
        }
    }
}
function handleLogIn(event) {
    event.preventDefault();
    const { username, password } = model.inputs.loginForm;
    console.log('handleLogIn was called with - Username:', username, 'Password:', password);
    logIn(username, password); // Call log in function with provided username and password

    // Validering
    const error = validateLogin(username, password);
    if (error) {
        displayError(error);
        return;
    }

    //Autentisering
    const isAuthenticated = mockAuthenticate(username, password);
    if (isAuthenticated) {
        localStorage.setItem('username', username); // Save username in localStorage
        model.app.isLoggedIn = true;
        model.app.currentPage = 'frontPage';
        updateView();
    } else {
        displayError('Feil brukernavn eller passord');
    }
}

function validateLogin(username, password) {
    if (!username.trim() || !password.trim()) {
        return 'Please fill out all fields';
    }
    return null; //No errors found
}

function displayError(message) {
    const errorMessageElement = document.getElementById('errorMessage');
     if ( errorMessageElement) {
        errorMessageElement.textContent = message;
    }
}

function mockAuthenticate(username, password) {
    const validUsers = [
        { username: 'testUser', password: 'testPassword' },
        { username: 'admin', password: 'admin123' },
    ];
    return validUsers.some(user => user.username === username && user.password === password);
}