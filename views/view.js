function updateView() {
    console.log('Updates the view...')
    document.getElementById('app').innerHTML = /*HTML*/`
    <div class="app-container">
        <div class="navBarContainer">${model.app.loggedInId ? loggedInNavBarView() : navBarView()}</div>
        <div class="mainContainer">${contentManager()}</div>
    </div>
    <div class="footerContainer">${footerView()}</div>
    `;
    // Re-run the video script after updating the view
    if (model.app.currentPage === 'frontPage') {
        setTimeout(() => {
            var video = document.getElementById("backgroundVideo");
            if (video) {
                video.oncanplay = function() {
                    console.log("Video is ready to play.");
                };
                video.onerror = function() {
                    console.error("Video failed to load.");
                };
            }
        }, 100);
    }
    }

function contentManager() {
    let html = '';
    switch(model.app.currentPage) {
        case 'frontPage':
            html = frontPageView();
            break;
        case 'logInView':
            html = logInView();
            break;
        case 'registerView':
            html = registerView();
            break;
        case 'ratingView':
            html = ratingView();
            break;   
        case 'meldingView':
            html = meldingView();
            break;   
        case 'userView':
            html = userView();
            break;   
        case 'footerView':
            html = footerView();
            break;   
        case 'changePassword':
            html = changePassword();
            break;   
        
    }
    return html;
}

