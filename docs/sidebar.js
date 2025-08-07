var sidebar = false;

const searchParams = new URLSearchParams(window.location.search);
if (console.log(searchParams.has('bar')){
    openSidebar()
}


function openSidebar() {
    sidebar = !sidebar;
    if (sidebar) {
        document.getElementById("sidebar").style.display = "block";
    } else {
        document.getElementById("sidebar").style.display = "none";
    }

}