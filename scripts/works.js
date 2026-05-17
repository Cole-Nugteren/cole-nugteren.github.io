const center = document.getElementById("center-content")
const pagebody = document.getElementById("body")

function getWork(id){
    var path = "../works/"+id+".json";
    var request = new XMLHttpRequest();
    request.open("GET", path, false);
    request.send(null);
    var obj = JSON.parse(request.responseText);
    return obj;
}

function generateThumbnail(id,row) {
    var data = getWork(id);
    var work = document.createElement("button");
    work.id = "work-thumbnail";
    var image = document.createElement("img");
    image.src = "../assets/works-thumbnails/" + data.thumbimg;
    image.id="thumbimg";
    image.style = "position:relative";
    work.appendChild(image);
    var subtitle = document.createElement("a");
    subtitle.id = "darklink";
    subtitle.innerHTML = data.title;
    work.onclick = function(){openWork(id);};
    work.appendChild(subtitle);
    work.append(document.createElement("p"));
    row.appendChild(work);
}

function openWork(id){
    var data = getWork(id);
    var popup = document.createElement("div");
    popup.id="work-popup";

        var center = document.createElement("div");
        center.id="popup-center";
        popup.appendChild(center);
            var title = document.createElement("a");
            title.id="work-title";
            title.innerHTML= data.title;
            title.href = data.link;
            title.id = "work-title";
            title.target="_blank";
            center.appendChild(title);

            center.appendChild(document.createElement("br"))
            center.appendChild(document.createElement("br"))

            for(var i = 0;i < data.images.length;i ++){
                var image = document.createElement("img");
                image.id="work-image";
                image.src="../assets/works-images/"+data.id+"/"+data.images[i].path;
                center.appendChild(image);

                var subtitle = document.createElement("div");
                subtitle.innerHTML = data.images[i].subtitle;
                center.appendChild(subtitle);

                center.appendChild(document.createElement("br"))
            }


        var right = document.createElement("div");
        right.id="popup-right";
        popup.appendChild(right);

            var exitbutton = document.createElement("button");
            exitbutton.id = "popup-exit";
            exitbutton.onclick = closeWork;
            right.appendChild(exitbutton);
                var exitimg = document.createElement("img");
                exitimg.id = "popup-exit-img";
                exitimg.src = "../assets/close-button.svg";
                exitbutton.appendChild(exitimg);


                
                var br = document.createElement("div");
                br.id="work-title";
                br.appendChild(document.createElement("br"));
                right.appendChild(br);

                for(var i = 0;i < data.paragraphs.length;i ++){
                    right.appendChild(document.createElement("br"));
                    var paragraph = document.createElement("div");
                    paragraph.innerHTML = data.paragraphs[i].text;
                    right.appendChild(paragraph);
                }

                right.appendChild(document.createElement("br"));
                
                var link = document.createElement("a");
                link.innerHTML = "[visit site]";
                link.href = data.link;
                link.id = "darklink";
                link.target="_blank";
                link.rel="noopener noreferrer"
                right.appendChild(link);
                
    
    pagebody.appendChild(popup);
}

const game_works = [
    "petrichor-gardens",
    "tubular",
    "ripple-and-frawg",
    "turtle-herdle",
    "suntide-lodge",
    "checkmight",
    "starlight-postal",
    "pitch"
];

function generateGames() {
    var i = 0;
    var last_row;
    for (const work of game_works) {
        if(i%2==0){
            last_row = document.createElement("div");
            last_row.id="work-row";
            center.appendChild(last_row);
        }
        generateThumbnail(work,last_row);
        i++;
    }
}

function generateMusic() {
    for (const work of music_works) {
        generateThumbnail(work);
    }
}

function generateArt() {
    for (const work of art_works) {
        generateThumbnail(work);
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
        document.getElementsByName("game_button")[0].setAttribute("id", "bold");
        break;
    case "music":
        generateMusic();
        document.getElementsByName("music_button")[0].setAttribute("id", "bold");
        break;
    case "art":
        generateArt();
        document.getElementsByName("art_button")[0].setAttribute("id", "bold");
        break;
    case "misc":
        document.getElementsByName("misc_button")[0].setAttribute("id", "bold");
        break;
}

function closeWork(){
    var popup = document.getElementById("work-popup")
    popup.remove();
}




/*
const game_works = [
    new Work("petrichor-gardens", "petrichor gardens", "petrichor-gardens.png",["title screen","","","","","","","",""],["Explore a rainy brutalist urban garden in the ruins of an industrial mill. This place is special to me, please take care of it.","Petrichor Gardens is a contemplative first-person urban exploration game. Wander a recursive, non-euclidian sanctuary that doesn't seem to end- an immersive sandbox for meditation, nourishment, recreation, or self expression."]),
    new Work("tubular", "tubular!!", "tubular.png",["title","mouse car","rabbit skateboard","hamster ball","ferret scooter","freestyle"],["tubular is the radical rodent racing game where pet shop critters traverse an abandoned shopping mall."]),
    new Work("ripple-and-frawg", "ripple and frawg: the seasonal song", "ripple-and-frawg.png",[],[]),
    new Work("turtle-herdle", "turtle herdle", "turtle-herdle.png",[],[]),
    new Work("suntide-lodge", "suntide lodge", "suntide-lodge.png",[],[]),
    new Work("checkmight", "checkmight", "checkmight.png",[],[]),
    new Work("starlight-postal", "starlight postal", "starlight-postal.png",[],[]),
    new Work("pitch","pitch","pitch.png",[],[])
];

const music_works = [
    new Work("golfella", "golfella!", "golfella.jpg",[],[]),
    new Work("cube", "cube", "cube.jpg",[],[]),
    new Work("clementine", "clementine", "clementine.jpg",[],[]),
    new Work("amp","amp ep","amp.jpg",[],[]),
    new Work("acontextual", "acontextual", "acontextual.jpg",[],[]),
    new Work("sugar","sugar","sugar.jpg",[],[])
];

const art_works = [
    new Work("parasite","parasite","parasite.jpg",[],[]),
    new Work("trail-vignettes","trail vignettes","trail-vignettes.jpg",[],[]),
    new Work("isometric-worlds","isometric worlds","isometric-worlds.jpg",[],[]),
    new Work("stalker","stalker","stalker.jpg",[],[]),
    new Work("silvergreen-mall","silvergreen mall","silvergreen-mall.jpg",[],[]),
    new Work("life-drawings","life drawings","life-drawings.jpg",[],[])
];

const misc_works = [];
*/