Song1 = "";
Song2 = "";

function preload() {
    Song1 = loadSound("music.mp3");
    Song2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480);
}