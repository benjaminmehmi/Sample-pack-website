function registerUser(){
    console.log("register user kjører...", model.inputs.registerForm)
    model.inputs.registerForm.userId = model.data.users.length + 1; // Makes a unique id for the new user
    model.app.loggedInId = model.inputs.registerForm.userId; // Saves the id of the logged-in user
    model.data.users.push(model.inputs.registerForm);
    console.log(model.data.users);
    
    // Logs in the new user

}