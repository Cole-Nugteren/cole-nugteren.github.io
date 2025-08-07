class Thumbnail {
    constructor(id, title, image) {
        this.id = id;
        this.title = title;
        this.image = image;
    }
    generate() {
        var work = document.createElement("div");
        work.id = "work-thumbnail";
        var image = document.createElement("img");
        image.src = "assets/works-thumbnails/" + this.image;
        image.width = "350";
        //image.height = "250";
        image.style = "position:relative;";
        work.appendChild(image);
        var subtitle = document.createElement("a");
        subtitle.id = "darklink";
        subtitle.innerHTML = this.title;
        work.appendChild(subtitle);
        center.appendChild(work);
    }
}

const center = document.getElementById("center-content")

const game_works = [
    new Thumbnail("tubular", "tubular", "tubular.png"),
    new Thumbnail("ripple-and-frawg", "ripple and frawg: the seasonal song", "ripple-and-frawg.png"),
    new Thumbnail("turtle-herdle", "turtle herdle", "turtle-herdle.png"),
    new Thumbnail("suntide-lodge", "suntide lodge", "suntide-lodge.png"),
    new Thumbnail("checkmight", "checkmight", "checkmight.png"),
    new Thumbnail("starlight-postal","starlight postal","starlight-postal.png")
];

for (const thumb of game_works) {
    thumb.generate();
}