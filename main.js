function preload() {
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    img = loadImage("https://images.unsplash.com/photo-1517273666229-35e76c06b18d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY4MTc1MjU&ixlib=rb-4.0.3&q=80&w=400");
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw() {
    image(img, 0, 0, 640, 480)
    image(video, 450, 265, 140, 100);
    circle(0, 55, 50)
    eclipse(0, 55, 100, 50)
    tint(tint_color);
}

function take_snapshot() {
    save("birthdaycard.png");
}
