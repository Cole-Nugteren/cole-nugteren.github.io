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
        image.width = "315";
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
    new Thumbnail("tubular", "TUBULAR!!", "tubular.png"),
    new Thumbnail("ripple-and-frawg", "Ripple and Frawg: The Seasonal Song", "ripple-and-frawg.png")
];

for (const thumb of game_works) {
    thumb.generate();
}

/*for (var i = 0; i < 18; i++) {
    var work = document.createElement("div")
    work.id = "work-thumbnail"
    var image = document.createElement("img")
    image.src = "assets/works thumbnails/turtle-herdle.png"
    image.width = "315"
    image.height = "250"
    image.style = "position:relative;"
    work.appendChild(image)
    var subtitle = document.createElement("a")
    subtitle.id = "darklink"
    subtitle.innerHTML = "turtle herdle"
    work.appendChild(subtitle)
    center.appendChild(work)
}*/
