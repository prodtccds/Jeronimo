function ramdomNumber(x, y) {
    return Math.floor(Math.random() * (y - x + 1)) + x;
}

function alterandoVideos() {
    const sources = ["./moves/maosescrevendocodigo.mp4", "./moves/programando.mp4", "./moves/Typing_dark_03_Videvo_preview.mp4"]
    var video = document.querySelector("#video");
    video.src = sources[ramdomNumber(0, 2)];
}

window.setInterval(alterandoVideos, 1000);