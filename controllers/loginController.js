function displayError(message) {
    const errorMessageElement = document.getElementById('errorMessage');
    if (errorMessageElement) {
        errorMessageElement.textContent = message;
    }
}

function mockAuthenticate(username, password) {
    const validUsers = [
        { username: 'testuser', password: 'password123' },
        { username: 'admin', password: 'admin123' }
    ];

    console.log('Gyldige brukere:', validUsers)
    console.log('Inndata - Brukernavn:', username.trim(), 'Passord:', password.trim());

    //Sjekk om brukernavn og passord matcher n gyldig bruker
    const result = validUsers.some(user => 
        user.username === username.trim() && user.password === password.trim()
    );

    console.log('Autentiseringsresultat:', result)
    return result; // Returner resultatet av autentiseringen
}