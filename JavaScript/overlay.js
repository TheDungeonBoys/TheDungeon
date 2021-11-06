function addTextToImage(imagePath) {
    var circle_canvas = document.getElementById("canvas");
    var context = circle_canvas.getContext("2d");

    // Draw Image function
    var img = new Image();
    img.src = imagePath;
    img.onload = function() {
        context.drawImage(img, 0, 0);

        let cx = document.querySelector("canvas").getContext("2d");
        cx.strokeStyle = "blue";
        cx.strokeRect(5, 5, 50, 50);
        cx.lineWidth = 5;
    };
}
addTextToImage("images/dungeon1.jpg");