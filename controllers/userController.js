
function registerUser() {
    const regInputs = model.inputs.registerForm;

    if (regInputs.password !== regInputs.repeatPassword) {
        alert('Passwords do not match');
        return;
    }

    const existingUser = model.data.users.find(user => 
        user.username === regInputs.username || user.email === regInputs.email
    );

    if (existingUser) {
        alert('Username or email is already taken');
        return;
    }

    const newUser = {
        username: regInputs.username,
        password: regInputs.password,
        email: regInputs.email,
        name: regInputs.name,
        lastName: regInputs.lastName,
        userId: model.data.users.length + 1,
        isAdmin: false,
        picture: 'IMG, VID/profile-silhouette-300x300.jpg',
        isLoggedIn: true,
        message: [],
        messageSender: [],
    };
    
    model.data.users.push(newUser);
    model.app.loggedInId = newUser.userId;
    alert('User created successfully!');
    
    // Reset registration form
    model.inputs.registerForm = {
        userId: null,
        name: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        repeatPassword: '',
        isAdmin: false,
        picture: 'IMG, VID/profile-silhouette-300x300.jpg',
        isLoggedIn: true,
    };

    navigate('frontPage');
}

function login(username, password) {
    const user = model.data.users.find(user => user.username === username);
    if (user) {
        model.app.isLoggedIn = true;
        model.app.currentPage = 'frontPage';
    } else {
        alert('Wrong username or password');
    }
}