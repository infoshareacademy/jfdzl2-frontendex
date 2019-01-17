document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    setInterval(function () {
        if (document.getElementById("game-title").style.color === "white"){
            document.getElementById("game-title").style.color = "black";
        } else {
            document.getElementById("game-title").style.color = "white";
        }
        
    }, 500)
});
