var sidebar = false;

const searchParams = new URLSearchParams(window.location.search);
console.log(searchParams.has('bar'))
if (searchParams.has('bar')){
    if (searchParams.get('bar')=='true') {
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