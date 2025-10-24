    function navigate(thePage) {
        console.log('Navigerer til siden:', thePage) // Log for the navigation function
        model.app.currentPage = thePage;
        updateView();
    }
  