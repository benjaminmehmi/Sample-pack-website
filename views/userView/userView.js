function userView() {
    let loggedInUser = model.data.users.find((user) => user.isLoggedIn == true);

    return /*HTML*/`
    <head>
        <link rel="stylesheet" href="css/userStyle.css">
    </head>

    <div>
        <h1>My profile</h1>
        <br>
        <div class="flex-container">
            <div>${userInfoRows(loggedInUser)}</div>
            <div class="upload-container">
                <label for="profile-picture">Upload picture:</label>
                <input type="file" id="profile-picture" accept="image/*" onchange="handleImageUpload(event)">
                <div class="preview">
                    <p>No image selected</p>
                </div>
            </div>
        </div>
    </div>
    `;
}

function userInfoRows(loggedInUser) {
    let infoRowsHtml = '';
        infoRowsHtml = /*HTML*/`

    <head>
        <link rel="stylesheet" href="css/userStyle.css">
    </head>

        <div class="input-container">
                <tr>
                    <td> Name: <input id="name" value="${loggedInUser.name}"></td>
                    <br>
                    <td> Username: <input id="userName" value="${loggedInUser.username}"></td>
                    <br>
                    <td>Password: <input type="password" id="password" value="${loggedInUser.password}" readonly>
                    <button onclick="goToChangePassword()">Change password</button>
                    <br>
                    <td> Email: <input id="email" value="${loggedInUser.email}"></td>
                    <button onclick="saveProfile()">Save</button>
                    <br>
                    <button onclick="logOut()">Log out</button>
                </td>
                 
                </tr>
        </div>
    `;
    return infoRowsHtml;
}

function saveProfile() {
    let i = 0; i < model.data.users.length; i++   
    model.data.users[i].name = document.getElementById("name").value
    model.data.users[i].username = document.getElementById("userName").value
    model.data.users[i].email = document.getElementById("email").value
   
    navigate('userView');
    
}

function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const loggedInUser = model.data.users.find((user) => user.isLoggedIn == true);
            loggedInUser.picture = e.target.result; // Save the image as a Base64 string
            updateView(); // Re-render the view to reflect the new image
        };
        reader.readAsDataURL(file); // Convert the file to a Base64 string
    }
}

function goToChangePassword(){
    model.app.currentPage = 'changePassword'; // Go to changePassword
    updateView();
}

function logOut() {
    model.app.loggedInId = null; // Set the logged-in user ID to null
    model.data.users.forEach(user => user.isLoggedIn = false); // Set all users' logged-in status to false
    navigate('frontPage'); // Navigate to the front page
    updateView(); // Re-render the view
    alert("You are logged out"); // Alert the user
}
    

function changePage(newPage) {
    model.app.currentPage = newPage;
    updateView();
}