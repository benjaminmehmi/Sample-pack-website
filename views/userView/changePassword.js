function changePassword(){
    let loggedInUser = model.data.users.find((user) => user.isLoggedIn == true);
    
    return /*HTML*/`

    <head>
        <link rel="stylesheet" href="css/changePasswordStyle.css">
    </head>

    <div class="change-password-container">
        <div class="change-password-box">
            <h1>Change password</h1>
            <td>Old password: <input type="password" id="oldPassword" name="password" value="${loggedInUser.password}">
            <br> <br>
            <td>New password: <input type="password" id="newPassword" placeholder="New password" value="">
            <br> <br>
            <td>Repeat new password: <input type="password" id="repeatNewPassword" placeholder="Repeat new password" value="">
            <br> <br>
            <button onclick = "savePassword()">Save password</button>
        </div>
    </div>
`;    
}


 function changePage(newPage){
    model.app.currentPage = newPage;
    updateView();
}

function savePassword(){
    let i = 0; i < model.data.users.length; i++   
     model.data.users[i].password = document.getElementById("newPassword").value
    navigate('userView');
}