var sidebar = false;
const body = document.getElementById("body")

function generateSidebar(){
    var sidebarbutton = document.createElement("button")
    sidebarbutton.id = "sidebar-button";
    sidebarbutton.class = "sidebar-button";
    body.appendChild(sidebarbutton)
    var buttonimg = document.createElement("img");
    buttonimg.id = "sidebar-button-img"
    buttonimg.src = "assets/menu-button.svg";
    sidebarbutton.appendChild(buttonimg);

    var sidebar = document.createElement("div");
    sidebar.id = "sidebar";
    var stub = document.createElement("div");
    stub.id = "sidebar-stub";
    sidebar.appendChild(stub);
    body.appendChild(sidebar);
    var homelink = document.createElement("a");
    homelink.innerHTML = "home";
    homelink.href = "/";
    stub.appendChild(document.createElement("div")).appendChild(homelink);
    stub.appendChild(document.createElement("br"));stub.appendChild(document.createElement("br"));stub.appendChild(document.createElement("br"));stub.appendChild(document.createElement("br"));
    var workslink = document.createElement("a");
    workslink.innerHTML = "works";
    workslink.href = "works.html?bar=true";
    stub.appendChild(document.createElement("div")).appendChild(workslink);
    var aboutlink = document.createElement("a");
    aboutlink.innerHTML = "about";
    aboutlink.href = "about.html?bar=true";
    stub.appendChild(document.createElement("div")).appendChild(aboutlink);
    var contactlink = document.createElement("a");
    contactlink.innerHTML = "contact";
    contactlink.href = "contact.html?bar=true";
    stub.appendChild(document.createElement("div")).appendChild(contactlink);
    var linkslink = document.createElement("a");
    linkslink.innerHTML = "links";
    linkslink.href = "links.html?bar=true";
    stub.appendChild(document.createElement("div")).appendChild(linkslink);
    var resumelink = document.createElement("a");
    resumelink.innerHTML = "resume";
    resumelink.href = "assets/resume.pdf?bar=true";
    stub.appendChild(document.createElement("div")).appendChild(resumelink);

    sidebarbutton.onclick = openSidebar;
}

function openSidebar() {
    sidebar = !sidebar;

    if (sidebar) {
        document.getElementById("sidebar").style.display = "block";
    } else {
        document.getElementById("sidebar").style.display = "none";
    }

}

generateSidebar();

const params = new URLSearchParams(window.location.search);
if (params.has('bar')){
    if (params.get('bar') == 'true') {
        openSidebar();
    }
}