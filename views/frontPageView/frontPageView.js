function frontPageView() {
    return /*HTML*/`
        <div class="bgContainer">    
        <video autoplay muted loop id="backgroundVideo" class="bg-video" playsinline>
            <source src="assets/vid/bgVid2.mp4" type="video/mp4">
        </video>
     </div> 


     <div>
        <div class="card-container">
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
        </div>
     </div>

        <script>
            console.log("Video element loaded.");
            var video = document.getElementById("backgroundVideo");
            video.oncanplay = function() {
                console.log("Video is ready to play.");
            };
            video.onerror = function() {
                console.error("Video failed to load.");
            };
        </script>
    `;
}

function areaHtml() {
    let html = /*html*/`
    
    `;
    return html;
}

