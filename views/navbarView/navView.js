   function navBarView() { 
   let navBarHtml = /*HTML*/`
        
        <div class="navLeft">
            <div class="logo" onclick="model.app.currentPage = 'frontPage'; updateView();">Sample</div>
        </div>
        
        <div class="navRight">
            <div>${createNotificationWindow()}</div>
            <button class="navBtn" onclick="model.app.currentPage = 'logInView'; updateView();">Log in</button>
        </div>
        
    `;
    return navBarHtml;
} 

function loggedInNavBarView() { // Go through users in the model and find the user who has login = true
    let loggedInUser = model.data.users.find((user) => user.isLoggedIn == true);
    
    let navBarHtml = /*HTML*/`
       
        <div class="navLeft">
            <div class="logo" onclick="model.app.currentPage = 'frontPage'; updateView();">Samples</div>
        </div>
        
        <div class="navRight">
            <div>${createNotificationWindow()}</div>
            <button class="navBtn" onclick="model.app.currentPage = 'userView'; updateView();">My profile</button>
            <button class="navBtn" onclick="model.app.loggedInId = null; model.app.currentPage = 'frontPage'; updateView();">Log out</button>
            <img src="${loggedInUser.picture}" class="navPicture" />
        </div>
    `;
    return navBarHtml;
}

function footerView() {
    return /*HTML*/`
    <footer id="footerContainer">
    
        <div></div>
            <p>&copy; 2025 ... All rights reserved.</p>
        <div></div>
        
    </footer>
    `;
}


function createNotificationWindow() {
    return /*HTML*/`
    <button class="navBtn" onclick="showPopup()">Notifications
    </button>
    ${popUp()}
    `;
}

function popUp() {
    return /*HTML*/`
    <div class="notificationFrame" id="notificationPopup">
        <div class="exitNotification" onclick="hidePopup()">X</div>
        <div class="messages">
            <div class="notificationText">Ny vennskapsforespørsel fra Anna</div>
            <div class="notificationText">Du har en ny melding fra Erik</div>
            <div class="notificationText">Nytt innlegg i gruppen "Tech Norge"</div>
            <div class="notificationText">Påminnelse: Møte kl. 14:00</div>
        </div>
    </div>
    `;
}

function showPopup() {
    document.getElementById('notificationPopup').style.display = 'block';
}

function hidePopup() {
    document.getElementById('notificationPopup').style.display = 'none';
}

function buttonHTML() {
    return /*HTML*/`
        <button onclick="navigate('logInView')">Log in</button>
        <button onclick="navigate('registerView')">Register new user</button>
    `;
}
