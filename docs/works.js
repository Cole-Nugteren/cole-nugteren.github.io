const center = document.getElementById("center-content")

class Thumbnail {
    constructor(id, title, image) {
        this.id = id;
        this.title = title;
        this.image = image;
    }
    generate(height) {
        var work = document.createElement("div");
        work.id = "work-thumbnail";
        work.height = height;
        var image = document.createElement("img");
        image.src = "assets/works-thumbnails/" + this.image;
        image.width = "325";
        //image.height = "250";
        image.style = "position:relative;";
        work.appendChild(image);
        var subtitle = document.createElement("a");
        subtitle.id = "darklink";
        subtitle.innerHTML = this.title;
        work.appendChild(subtitle);
        work.append(document.createElement("p"));
        center.appendChild(work);
    }
}

const game_works = [
    new Thumbnail("tubular", "tubular", "tubular.png"),
    new Thumbnail("ripple-and-frawg", "ripple and frawg: the seasonal song", "ripple-and-frawg.png"),
    new Thumbnail("turtle-herdle", "turtle herdle", "turtle-herdle.png"),
    new Thumbnail("suntide-lodge", "suntide lodge", "suntide-lodge.png"),
    new Thumbnail("checkmight", "checkmight", "checkmight.png"),
    new Thumbnail("starlight-postal", "starlight postal", "starlight-postal.png"),
    new Thumbnail("crescent-court", "anomalies in crescent court", "crescent-court.png"),
    new Thumbnail("pitch","pitch","pitch.png")
];

const music_works = [
    new Thumbnail("golfella", "golfella!", "golfella.jpg"),
    new Thumbnail("cube", "cube", "cube.jpg"),
    new Thumbnail("clementine", "clementine", "clementine.jpg"),
    new Thumbnail("amp","amp ep","amp.jpg"),
    new Thumbnail("acontextual", "acontextual", "acontextual.jpg"),
    new Thumbnail("sugar","sugar","sugar.jpg")
];

function generateGames() {
    for (const thumb of game_works) {
        thumb.generate(300);
    }
}

function generateMusic() {
    for (const thumb of music_works) {
        thumb.generate(350);
    }
}

var tab = "games";
const params2 = new URLSearchParams(window.location.search);
if (params2.has('tab')) {
    tab = params2.get('tab')
}

switch (tab) {
    case "games":
        generateGames();
        break;
    case "music":
        generateMusic();
        break;
    default:
        tab = "games";
        generateGames();
}

function openGames() {
    window.location.href = "works.html?tab=games&bar="+sidebar;
}
function openMusic() {
    window.location.href = "works.html?tab=music&bar=" + sidebar;
}

function openArt() {
    window.location.href = "works.html?tab=art&bar=" + sidebar;
}

function openMisc() {
    window.location.href = "works.html?tab=misc&bar=" + sidebar;
}