if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 300);

    var video = document.getElementById('video');
    video.volume = 0.15;


}

function play() {
    var audio = document.getElementById('video');
    video.play();
}
var x = 0;

var titleText = ["|",
    "|",
    "M",
    "Me",
    "Mea",
    "Meas",
    "Measu",
    "Measur",
    "Measure",
    "Measurem",
    "Measureme",
    "Measuremen",
    "Measurement",
    "Measurement",
    "Measuremen",
    "Measureme",
    "Measurem",
    "Measure",
    "Measur",
    "Measu",
    "Meas",
    "Mea",
    "Me",
    "M"
];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];

}
