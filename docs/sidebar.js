var sidebar = false;

const params = new URLSearchParams(window.location.search);
console.log(params.has('bar'))
if (params.has('bar')){
    if (params.get('bar')=='true') {
        openSidebar()
        console.log("open sidebar")
    }
}


function openSidebar() {
    sidebar = !sidebar;
    if (sidebar) {
        document.getElementById("sidebar").style.display = "block";
    } else {
        document.getElementById("sidebar").style.display = "none";
    }

}