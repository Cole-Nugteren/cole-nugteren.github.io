var sidebar = false;
function openSidebar() {
    sidebar = !sidebar;
    if (sidebar) {
        document.getElementById("sidebar").style.display = "block";
    } else {
        document.getElementById("sidebar").style.display = "none";
    }

}