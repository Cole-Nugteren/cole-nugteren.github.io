var sidebar = false;

const params = new URLSearchParams(window.location.search);
if (params.has('bar')){
    if (params.get('bar') == 'true') {
        openSidebar();
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