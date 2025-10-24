function registerView() {
    return /*HTML*/`
    <div id="registerContainer">
        <h2>Register</h2>
        <form id="registerForm" onsubmit="handleRegister(event)">
            <label for="name">First name:</label>
            <input type="text" id="name" name="name" oninput="model.inputs.registerForm.name = this.value">
            
            <label for="lastName">Last name:</label>
            <input type="text" id="lastName" name="lastName" oninput="model.inputs.registerForm.lastName = this.value">
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" oninput="model.inputs.registerForm.email = this.value">
            
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" oninput="model.inputs.registerForm.username = this.value">
            
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" oninput="model.inputs.registerForm.password = this.value">
            
            <label for="repeatPassword">Repeat password:</label>
            <input type="password" id="repeatPassword" name="repeatPassword" oninput="model.inputs.registerForm.repeatPassword = this.value">
            
            <button onclick="checkRegistration()">Register</button>
        </form>
        <p id="errorMessage" class="error"></p>
    </div>
    `;
}

function checkRegistration(){ // Checks if the registration form is filled out correctly and if the username or email already exists in the users array
    const regInputs = model.inputs.registerForm;
    if (!regInputs.name || !regInputs.lastName || !regInputs.email || !regInputs.username || !regInputs.password || !regInputs.repeatPassword) {
        alert('All fields must be filled out');
        return;
    }
    registerUser();
}


function handleRegister(event) { // Prevents the form from submitting and calls the registerUser function
    event.preventDefault()
}